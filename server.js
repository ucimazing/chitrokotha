const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const path = require('path');
const categories = require('./words');

const app = express();
app.use(cors());

// Serve static frontend files if they exist (for Glitch / Production)
app.use(express.static(path.join(__dirname, 'public')));

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

const rooms = {};
const TURN_DURATION = 80;

function getEditDistance(a, b) {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  var matrix = [];
  var i;
  for (i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  var j;
  for (j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  for (i = 1; i <= b.length; i++) {
    for (j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) == a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          Math.min(
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          )
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

function getUniqueWords(categoryKey, count) {
  let list = [];
  if (categoryKey && categoryKey !== 'all' && categories[categoryKey]) {
    list = categories[categoryKey];
  } else {
    for (const key in categories) {
      list = list.concat(categories[key]);
    }
  }
  const result = [];
  const usedIndices = new Set();
  
  if (list.length === 0) return result;
  
  while (result.length < count && usedIndices.size < list.length) {
    const idx = Math.floor(Math.random() * list.length);
    if (!usedIndices.has(idx)) {
      usedIndices.add(idx);
      result.push(list[idx]);
    }
  }
  return result;
}

function getBlankHint(word) {
  return word.replace(/[a-zA-Z]/g, '_');
}

function revealHint(word, currentHint) {
  const indices = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== ' ' && currentHint[i] === '_') {
      indices.push(i);
    }
  }
  if (indices.length === 0) return currentHint;
  const randIdx = indices[Math.floor(Math.random() * indices.length)];
  const hintArr = currentHint.split('');
  hintArr[randIdx] = word[randIdx];
  return hintArr.join('');
}

function startTurnTimer(roomId) {
  const room = rooms[roomId];
  if (!room) return;

  if (room.timerInterval) clearInterval(room.timerInterval);
  
  room.timeLeft = TURN_DURATION;
  io.to(roomId).emit('timer_update', room.timeLeft);

  room.timerInterval = setInterval(() => {
    room.timeLeft -= 1;
    io.to(roomId).emit('timer_update', room.timeLeft);

    if (room.timeLeft <= 0) {
      clearInterval(room.timerInterval);
      if (!room.turnEnding) {
        room.turnEnding = true;
        io.to(roomId).emit('chat_message', {
          sender: 'System',
          text: `Time's up! The word was ${room.currentWord.en} (${room.currentWord.bn}).`,
          isSystem: true
        });
        setTimeout(() => nextTurn(roomId), 3000);
      }
    }
  }, 1000);
}

function startWordSelection(roomId) {
  const room = rooms[roomId];
  room.isChoosingWord = true;
  room.wordOptions = getUniqueWords(room.category, 3);
  room.players.forEach(p => p.lastGuessTime = null);
  
  const drawer = room.players[room.currentDrawerIndex];
  
  io.to(roomId).emit('game_started');
  io.to(roomId).emit('turn_update', {
    drawerId: drawer.id,
    drawerName: drawer.username,
    isChoosing: true
  });

  io.to(drawer.id).emit('choose_word', room.wordOptions);

  io.to(roomId).emit('chat_message', {
    sender: 'System',
    text: `${drawer.username} is choosing a word...`,
    isSystem: true
  });

  room.chooseTimer = setTimeout(() => {
    if (room.isChoosingWord) {
      room.isChoosingWord = false;
      io.to(roomId).emit('chat_message', {
        sender: 'System',
        text: `${drawer.username} didn't choose a word in time. Turn skipped.`,
        isSystem: true
      });
      nextTurn(roomId);
    }
  }, 10000);
}

function startDrawingPhase(roomId, chosenWord) {
  const room = rooms[roomId];
  if (room.chooseTimer) clearTimeout(room.chooseTimer);
  room.isChoosingWord = false;
  room.currentWord = chosenWord;
  room.currentHint = '';
  room.hintsGiven = 0;
  room.maxHints = Math.max(2, Math.floor(room.currentWord.en.length / 2)) + 1;
  room.drawHistory = [];
  room.guessedPlayers.clear();
  room.turnEnding = false;
  
  io.to(roomId).emit('game_started');
  io.to(roomId).emit('clear_canvas');
  
  const drawer = room.players[room.currentDrawerIndex];
  
  io.to(roomId).emit('turn_update', {
    drawerId: drawer.id,
    drawerName: drawer.username,
    word: null,
    hint: room.currentHint,
    isChoosing: false
  });

  io.to(drawer.id).emit('turn_update', {
    drawerId: drawer.id,
    drawerName: drawer.username,
    word: room.currentWord,
    hint: room.currentHint,
    isChoosing: false
  });

  io.to(roomId).emit('chat_message', {
    sender: 'System',
    text: `${drawer.username} is drawing.`,
    isSystem: true
  });

  startTurnTimer(roomId);
}

function checkWinCondition(roomId) {
  const room = rooms[roomId];
  if (!room) return false;
  
  const sortedPlayers = [...room.players].sort((a, b) => b.score - a.score);
  if (sortedPlayers.length > 0 && sortedPlayers[0].score >= room.goalScore) {
     room.isGameActive = false;
     io.to(roomId).emit('update_players', sortedPlayers);
     io.to(roomId).emit('game_over', sortedPlayers);
     return true;
  }
  return false;
}

function nextTurn(roomId) {
  const room = rooms[roomId];
  if (!room) return;

  if (room.timerInterval) clearInterval(room.timerInterval);
  if (room.chooseTimer) clearTimeout(room.chooseTimer);
  room.turnEnding = false;

  if (checkWinCondition(roomId)) {
     return;
  }

  room.currentDrawerIndex = (room.currentDrawerIndex + 1) % room.players.length;
  
  const drawer = room.players[room.currentDrawerIndex];
  if (!drawer || room.players.length < 2) {
      room.isGameActive = false;
      io.to(roomId).emit('chat_message', {
        sender: 'System',
        text: `Not enough players. Game ended.`,
        isSystem: true
      });
      return;
  }
  
  startWordSelection(roomId);
}

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('join_room', ({ roomId, username, sessionId }) => {
    socket.join(roomId);
    
    if (!rooms[roomId]) {
      rooms[roomId] = {
        players: [],
        currentDrawerIndex: -1,
        currentWord: null,
        currentHint: '',
        hintsGiven: 0,
        maxHints: 2,
        category: 'all',
        isGameActive: false,
        isChoosingWord: false,
        wordOptions: [],
        drawHistory: [],
        guessedPlayers: new Set(),
        timeLeft: 0,
        timerInterval: null
      };
    }

    const room = rooms[roomId];
    
    // Check for reconnection
    const existingPlayer = room.players.find(p => p.sessionId === sessionId);
    if (existingPlayer) {
      if (existingPlayer.disconnectTimeout) {
        clearTimeout(existingPlayer.disconnectTimeout);
        existingPlayer.disconnectTimeout = null;
      }
      existingPlayer.id = socket.id;
      existingPlayer.disconnected = false;
      io.to(roomId).emit('update_players', room.players);
      io.to(roomId).emit('chat_message', { sender: 'System', text: `${existingPlayer.username} joined back.`, isSystem: true });
      socket.emit('draw_history', room.drawHistory);
      
      if (room.isGameActive) {
        socket.emit('game_started');
        const drawer = room.players[room.currentDrawerIndex];
        if (drawer) {
          socket.emit('turn_update', {
            drawerId: drawer.id,
            drawerName: drawer.username,
            word: socket.id === drawer.id ? room.currentWord : null,
            hint: room.currentHint
          });
        }
        socket.emit('timer_update', room.timeLeft);
      }
      return;
    }

    const player = { id: socket.id, username, score: 0, sessionId, disconnected: false };
    room.players.push(player);

    io.to(roomId).emit('update_players', room.players);
    socket.emit('draw_history', rooms[roomId].drawHistory);

    if (rooms[roomId].isGameActive) {
      socket.emit('game_started');
      const drawer = rooms[roomId].players[rooms[roomId].currentDrawerIndex];
      if (drawer) {
          socket.emit('turn_update', {
            drawerId: drawer.id,
            drawerName: drawer.username,
            word: socket.id === drawer.id ? rooms[roomId].currentWord : null,
            hint: rooms[roomId].currentHint
          });
      }
      socket.emit('timer_update', rooms[roomId].timeLeft);
    }

    io.to(roomId).emit('chat_message', {
      sender: 'System',
      text: `${username} joined the room.`,
      isSystem: true
    });
  });

  socket.on('start_game', ({ roomId, category, goalScore }) => {
    const room = rooms[roomId];
    if (room && room.players.length > 1 && !room.isGameActive) {
      room.isGameActive = true;
      room.category = category;
      room.goalScore = goalScore || 120;
      room.players.forEach(p => p.score = 0);
      room.currentDrawerIndex = 0;
      startWordSelection(roomId);
    }
  });

  socket.on('word_chosen', ({ roomId, word }) => {
    const room = rooms[roomId];
    if (room && room.isGameActive && room.isChoosingWord) {
       const drawer = room.players[room.currentDrawerIndex];
       if (drawer && drawer.id === socket.id) {
          startDrawingPhase(roomId, word);
       }
    }
  });

  socket.on('give_hint', (roomId) => {
    const room = rooms[roomId];
    if (room && room.isGameActive && room.currentWord) {
      const drawer = room.players[room.currentDrawerIndex];
      if (drawer && drawer.id === socket.id && room.hintsGiven < room.maxHints) {
        if (room.currentHint === '') {
          room.currentHint = getBlankHint(room.currentWord.en);
        } else {
          room.currentHint = revealHint(room.currentWord.en, room.currentHint);
        }
        room.hintsGiven++;
        io.to(roomId).emit('hint_update', room.currentHint);
      }
    }
  });

  socket.on('kick_player', ({ roomId, targetId }) => {
    const room = rooms[roomId];
    if (room && room.players.length > 0 && room.players[0].id === socket.id) {
      const playerIndex = room.players.findIndex(p => p.id === targetId);
      if (playerIndex !== -1) {
        const player = room.players[playerIndex];
        room.players.splice(playerIndex, 1);
        room.guessedPlayers.delete(targetId);
        io.to(targetId).emit('kicked');
        io.to(roomId).emit('update_players', room.players);
        io.to(roomId).emit('chat_message', { sender: 'System', text: `${player.username} was kicked by host.`, isSystem: true });
        
        if (room.isGameActive && room.currentDrawerIndex === playerIndex) {
          nextTurn(roomId);
        }
      }
    }
  });

  socket.on('draw', ({ roomId, drawData }) => {
    const room = rooms[roomId];
    if (room) {
      room.drawHistory.push(drawData);
      socket.to(roomId).emit('draw', drawData);
    }
  });

  socket.on('clear_canvas', (roomId) => {
    const room = rooms[roomId];
    if (room) {
      room.drawHistory = [];
      io.to(roomId).emit('clear_canvas');
    }
  });

  socket.on('send_message', ({ roomId, text }) => {
    const room = rooms[roomId];
    if (!room) return;

    const player = room.players.find(p => p.id === socket.id);
    if (!player) return;

    const drawer = room.players[room.currentDrawerIndex];
    
    if (room.isGameActive && drawer && socket.id !== drawer.id && room.currentWord) {
      if (room.guessedPlayers.has(socket.id)) {
          io.to(roomId).emit('chat_message', {
            sender: player.username,
            text: text,
            isSystem: false
          });
          return;
      }

      const lowerText = text.toLowerCase().trim();
      const engWord = room.currentWord.en.toLowerCase();
      const benWord = room.currentWord.bn;
      
      const isEnglishMatch = lowerText === engWord;
      const isBengaliMatch = text.trim() === benWord;

      if (isEnglishMatch || isBengaliMatch) {
        room.guessedPlayers.add(socket.id);
        
        const speedPoints = Math.floor((room.timeLeft / TURN_DURATION) * 10);
        const pointsAwarded = 5 + speedPoints;
        player.score += pointsAwarded;
        
        drawer.score += 2;
        
        const timeTaken = TURN_DURATION - room.timeLeft;
        player.lastGuessTime = timeTaken;
        
        io.to(roomId).emit('update_players', room.players);
        io.to(roomId).emit('chat_message', {
          sender: 'System',
          text: `${player.username} hit the answer in ${timeTaken} seconds!`,
          isSystem: true,
          isCorrect: true
        });

        if (room.guessedPlayers.size >= room.players.length - 1) {
          clearInterval(room.timerInterval);
          if (!room.turnEnding) {
             room.turnEnding = true;
             io.to(roomId).emit('masterpiece');
             io.to(roomId).emit('chat_message', {
               sender: 'System',
               text: `Everyone guessed the word! It was ${room.currentWord.en} (${room.currentWord.bn}).`,
               isSystem: true
             });
             setTimeout(() => nextTurn(roomId), 3000);
          }
        }
        return;
      }

      if (engWord.length > 3) {
        const distance = getEditDistance(lowerText, engWord);
        if (distance === 1 || distance === 2) {
          socket.emit('chat_message', {
            sender: 'System',
            text: `'${text}' is so close!`,
            isSystem: true,
            isCorrect: false,
            isClose: true
          });
          return;
        }
      }
    }

    io.to(roomId).emit('chat_message', {
      sender: player.username,
      text: text,
      isSystem: false
    });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
    for (const roomId in rooms) {
      const room = rooms[roomId];
      const playerIndex = room.players.findIndex(p => p.id === socket.id);
      
      if (playerIndex !== -1) {
        const player = room.players[playerIndex];
        player.disconnected = true;
        io.to(roomId).emit('update_players', room.players);
        io.to(roomId).emit('chat_message', {
          sender: 'System',
          text: `${player.username} disconnected. (They have 60s to reconnect)`,
          isSystem: true
        });

        player.disconnectTimeout = setTimeout(() => {
          const idx = room.players.findIndex(p => p.sessionId === player.sessionId);
          if (idx !== -1 && room.players[idx].disconnected) {
            room.players.splice(idx, 1);
            room.guessedPlayers.delete(player.id);
            
            io.to(roomId).emit('update_players', room.players);
            io.to(roomId).emit('chat_message', {
              sender: 'System',
              text: `${player.username} abandoned the match.`,
              isSystem: true
            });

            if (room.players.length === 0) {
              if (room.timerInterval) clearInterval(room.timerInterval);
              delete rooms[roomId];
            } else if (room.isGameActive && room.currentDrawerIndex === idx) {
              if (room.currentDrawerIndex >= room.players.length) {
                  room.currentDrawerIndex = 0;
              }
              nextTurn(roomId);
            }
          }
        }, 60000);
      }
    }
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
