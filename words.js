const words = {
  "general": [
    {
      "en": "Telescope",
      "bn": "টেলিস্কোপ"
    },
    {
      "en": "Volcano",
      "bn": "আগ্নেয়গিরি"
    },
    { "en": "Adda", "bn": "আড্ডা" },
    { "en": "Bhaat", "bn": "ভাত" },
    { "en": "Mach", "bn": "মাছ" },
    { "en": "Rosogolla", "bn": "রসগোল্লা" },
    { "en": "Mishti Doi", "bn": "মিষ্টি দই" },
    { "en": "Panta Bhaat", "bn": "পান্তা ভাত" },
    { "en": "Ilish", "bn": "ইলিশ" },
    { "en": "Chingri", "bn": "চিংড়ি" },
    { "en": "Bori", "bn": "বড়ি" },
    { "en": "Shorshe Ilish", "bn": "সরষে ইলিশ" },
    { "en": "Tele Bhaja", "bn": "তেলে ভাজা" },
    { "en": "Fuchka", "bn": "ফুচকা" },
    { "en": "Jhal Muri", "bn": "ঝাল মুড়ি" },
    { "en": "Phuchka", "bn": "ফুচকা" },
    { "en": "Chaat", "bn": "চাট" },
    { "en": "Bhel Puri", "bn": "ভেল পুরি" },
    { "en": "Dhakai Paratha", "bn": "ঢাকাই পরোটা" },
    { "en": "Kathi Roll", "bn": "কাঠি রোল" },
    { "en": "Momo", "bn": "মোমো" },
    { "en": "Chowmein", "bn": "চাউমিন" },
    { "en": "Biryani", "bn": "বিরিয়ানি" },
    { "en": "Kebab", "bn": "কাবাব" },
    { "en": "Tea", "bn": "চা" },
    { "en": "Adda Boss", "bn": "আড্ডা বস" },
    { "en": "Bong", "bn": "বাঙাল" },
    { "en": "Kolkata", "bn": "কলকাতা" },
    { "en": "Dhaka", "bn": "ঢাকা" },
    { "en": "Howrah Bridge", "bn": "হাওড়া ব্রিজ" },
    { "en": "Victoria Memorial", "bn": "ভিক্টোরিয়া মেমোরিয়াল" },
    { "en": "Durga Puja", "bn": "দুর্গা পূজা" },
    { "en": "Kali Puja", "bn": "কালী পূজা" },
    { "en": "Pohela Boishakh", "bn": "পহেলা বৈশাখ" },
    { "en": "Nababarsha", "bn": "নববর্ষ" },
    { "en": "Eesh", "bn": "ইশ" },
    { "en": "Baba", "bn": "বাবা" },
    { "en": "Maa", "bn": "মা" },
    { "en": "Dada", "bn": "দাদা" },
    { "en": "Didi", "bn": "দিদি" },
    { "en": "Bhai", "bn": "ভাই" },
    { "en": "Bon", "bn": "বোন" },
    { "en": "Jethu", "bn": "জ্যাঠু" },
    { "en": "Kaka", "bn": "কাকা" },
    { "en": "Pishi", "bn": "পিসি" },
    { "en": "Mashi", "bn": "মাসি" },
    { "en": "Mama", "bn": "মামা" },
    { "en": "Mami", "bn": "মামি" },
    { "en": "Boudi", "bn": "বউদি" },
    { "en": "Jamai", "bn": "জামাই" },
    { "en": "Shoshur", "bn": "শ্বশুর" },
    { "en": "Shashuri", "bn": "শাশুড়ি" },
    { "en": "Bhalo", "bn": "ভালো" },
    { "en": "Kharap", "bn": "খারাপ" },
    { "en": "Besh", "bn": "বেশ" },
    { "en": "Bhalo Lagche", "bn": "ভালো লাগছে" },
    { "en": "Kheye Ne", "bn": "খেয়ে নে" },
    { "en": "Ghumao", "bn": "ঘুমাও" },
    { "en": "Boka", "bn": "বোকা" },
    { "en": "Pagol", "bn": "পাগল" },
    { "en": "Chagol", "bn": "ছাগল" },
    { "en": "Goru", "bn": "গরু" },
    { "en": "Bhallu", "bn": "ভাল্লু" },
    { "en": "Singara", "bn": "সিঙাড়া" },
    { "en": "Samosa", "bn": "সামোসা" },
    { "en": "Luchi", "bn": "লুচি" },
    { "en": "Alur Dom", "bn": "আলুর দম" },
    { "en": "Beguni", "bn": "বেগুনি" },
    { "en": "Jhalmuri", "bn": "ঝালমুড়ি" },
    { "en": "Dosa", "bn": "দোসা" },
    { "en": "Idli", "bn": "ইডলি" },
    { "en": "Vada", "bn": "ভড়া" },
    { "en": "Filter Coffee", "bn": "ফিল্টার কফি" },
    { "en": "Biscuit", "bn": "বিস্কুট" },
    { "en": "Marie", "bn": "মেরি" },
    { "en": "Parle G", "bn": "পারলে জি" },
    { "en": "Gari", "bn": "গাড়ি" },
    { "en": "Rickshaw", "bn": "রিকশা" },
    { "en": "Auto", "bn": "অটো" },
    { "en": "Metro", "bn": "মেট্রো" },
    { "en": "Tram", "bn": "ট্রাম" },
    { "en": "Ferry", "bn": "ফেরি" },
    { "en": "Rain", "bn": "বৃষ্টি" },
    { "en": "Kadam Tala", "bn": "কদমতলা" },
    { "en": "Load Shedding", "bn": "লোডশেডিং" },
    { "en": "Fan", "bn": "ফ্যান" },
    { "en": "Mosquito", "bn": "মশা" },
    { "en": "Cockroach", "bn": "তেলাপোকা" },
    { "en": "Lizard", "bn": "টিকটিকি" },
    { "en": "Crow", "bn": "কাক" },
    { "en": "Boka Choda", "bn": "বোকা চোদা" },
    { "en": "Ektu Bosh", "bn": "একটু বস" },
    { "en": "Ki Khobor", "bn": "কী খবর" },
    { "en": "Bhalo Achi", "bn": "ভালো আছি" },
    { "en": "Kemon Achis", "bn": "কেমন আছিস" },
    { "en": "Tumi", "bn": "তুমি" },
    { "en": "Apni", "bn": "আপনি" },
    { "en": "Tui", "bn": "তুই" },
    { "en": "Bhaiya", "bn": "ভাইয়া" },
    { "en": "Dost", "bn": "দোস্ত" },
    { "en": "Bondhu", "bn": "বন্ধু" },
    {
      "en": "Helicopter",
      "bn": "হেলিকপ্টার"
    },
    {
      "en": "Diamond",
      "bn": "হীরা"
    },
    {
      "en": "Earthquake",
      "bn": "ভূমিকম্প"
    },
    {
      "en": "Microscope",
      "bn": "অণুবীক্ষণ যন্ত্র"
    },
    {
      "en": "Astronaut",
      "bn": "মহাকাশচারী"
    },
    {
      "en": "Pyramid",
      "bn": "পিরামিড"
    },
    {
      "en": "Spaceship",
      "bn": "মহাকাশযান"
    },
    {
      "en": "Submarine",
      "bn": "সাবমেরিন"
    },
    {
      "en": "Castle",
      "bn": "দুর্গ"
    },
    {
      "en": "Treasure",
      "bn": "গুপ্তধন"
    },
    {
      "en": "Rainbow",
      "bn": "রংধনু"
    },
    {
      "en": "Tornado",
      "bn": "টর্নেডো"
    },
    {
      "en": "Snowman",
      "bn": "স্নোম্যান"
    },
    {
      "en": "Compass",
      "bn": "কম্পাস"
    },
    {
      "en": "Magnet",
      "bn": "চুম্বক"
    },
    {
      "en": "Keyboard",
      "bn": "কিবোর্ড"
    },
    {
      "en": "Guitar",
      "bn": "গিটার"
    },
    {
      "en": "Library",
      "bn": "গ্রন্থাগার"
    },
    {
      "en": "Museum",
      "bn": "জাদুঘর"
    },
    {
      "en": "Hospital",
      "bn": "হাসপাতাল"
    },
    {
      "en": "Planetarium",
      "bn": "তারাঘর"
    },
    {
      "en": "Amusement Park",
      "bn": "বিনোদন পার্ক"
    },
    {
      "en": "Satellite",
      "bn": "উপগ্রহ"
    },
    {
      "en": "Meteor",
      "bn": "উল্কা"
    },
    {
      "en": "Galaxy",
      "bn": "ছায়াপথ"
    },
    {
      "en": "Robot",
      "bn": "রোবট"
    },
    {
      "en": "Dinosaur",
      "bn": "ডাইনোসর"
    },
    {
      "en": "Vampire",
      "bn": "ভ্যাম্পায়ার"
    },
    {
      "en": "Zombie",
      "bn": "জম্বি"
    },
    {
      "en": "Ghost",
      "bn": "ভূত"
    },
    {
      "en": "Alien",
      "bn": "এলিয়েন"
    },
    {
      "en": "Dragon",
      "bn": "ড্রাগন"
    },
    {
      "en": "Unicorn",
      "bn": "ইউনিকর্ন"
    },
    {
      "en": "Mermaid",
      "bn": "মৎস্যকন্যা"
    },
    {
      "en": "Fairy",
      "bn": "পরী"
    },
    {
      "en": "Monster",
      "bn": "দৈত্য"
    },
    {
      "en": "Pirate",
      "bn": "জলদস্যু"
    },
    {
      "en": "Ninja",
      "bn": "নিনজা"
    },
    {
      "en": "Samurai",
      "bn": "সামুরাই"
    },
    {
      "en": "Knight",
      "bn": "নাইট"
    },
    {
      "en": "King",
      "bn": "রাজা"
    },
    {
      "en": "Queen",
      "bn": "রানী"
    },
    {
      "en": "Prince",
      "bn": "রাজপুত্র"
    },
    {
      "en": "Princess",
      "bn": "রাজকুমারী"
    },
    {
      "en": "Crown",
      "bn": "মুকুট"
    },
    {
      "en": "Sword",
      "bn": "তলোয়ার"
    },
    {
      "en": "Shield",
      "bn": "ঢাল"
    },
    {
      "en": "Bow and Arrow",
      "bn": "তীর ধনুক"
    },
    {
      "en": "Magic Wand",
      "bn": "জাদুর কাঠি"
    },
    {
      "en": "Potion",
      "bn": "জাদুর ওষুধ"
    },
    {
      "en": "Spellbook",
      "bn": "জাদুর বই"
    },
    {
      "en": "Crystal Ball",
      "bn": "স্ফটিক বল"
    },
    {
      "en": "Broomstick",
      "bn": "ঝাঁটা"
    },
    {
      "en": "Cauldron",
      "bn": "কড়াই"
    },
    {
      "en": "Witch",
      "bn": "ডাইনি"
    },
    {
      "en": "Wizard",
      "bn": "জাদুকর"
    },
    {
      "en": "Mountain",
      "bn": "পাহাড়"
    },
    {
      "en": "River",
      "bn": "নদী"
    },
    {
      "en": "Lake",
      "bn": "হ্রদ"
    },
    {
      "en": "Ocean",
      "bn": "মহাসাগর"
    },
    {
      "en": "Waterfall",
      "bn": "জলপ্রপাত"
    },
    {
      "en": "Island",
      "bn": "দ্বীপ"
    },
    {
      "en": "Desert",
      "bn": "মরুভূমি"
    },
    {
      "en": "Forest",
      "bn": "বন"
    },
    {
      "en": "Jungle",
      "bn": "জঙ্গল"
    },
    {
      "en": "Cave",
      "bn": "গুহা"
    },
    {
      "en": "Bridge",
      "bn": "সেতু"
    },
    {
      "en": "Tunnel",
      "bn": "সুড়ঙ্গ"
    },
    {
      "en": "Lighthouse",
      "bn": "বাতিঘর"
    },
    {
      "en": "Windmill",
      "bn": "উইন্ডমিল"
    },
    {
      "en": "Factory",
      "bn": "কারখানা"
    },
    {
      "en": "Skyscraper",
      "bn": "গগনচুম্বী অট্টালিকা"
    },
    {
      "en": "Statue",
      "bn": "মূর্তি"
    },
    {
      "en": "Monument",
      "bn": "স্মৃতিস্তম্ভ"
    },
    {
      "en": "Fountain",
      "bn": "ফোয়ারা"
    },
    {
      "en": "Park",
      "bn": "পার্ক"
    },
    {
      "en": "Playground",
      "bn": "খেলার মাঠ"
    },
    {
      "en": "Zoo",
      "bn": "চিড়িয়াখানা"
    },
    {
      "en": "Aquarium",
      "bn": "অ্যাকোয়ারিয়াম"
    },
    {
      "en": "Circus",
      "bn": "সার্কাস"
    },
    {
      "en": "Theater",
      "bn": "থিয়েটার"
    },
    {
      "en": "Cinema",
      "bn": "সিনেমা"
    },
    {
      "en": "Stadium",
      "bn": "স্টেডিয়াম"
    },
    {
      "en": "Gymnasium",
      "bn": "ব্যায়ামাগার"
    },
    {
      "en": "Swimming Pool",
      "bn": "সুইমিং পুল"
    },
    {
      "en": "Airport",
      "bn": "বিমানবন্দর"
    },
    {
      "en": "Railway Station",
      "bn": "রেলওয়ে স্টেশন"
    },
    {
      "en": "Bus Stop",
      "bn": "বাসস্টপ"
    },
    {
      "en": "Harbor",
      "bn": "বন্দর"
    },
    {
      "en": "Gas Station",
      "bn": "গ্যাস স্টেশন"
    },
    {
      "en": "Post Office",
      "bn": "পোস্ট অফিস"
    },
    {
      "en": "Bank",
      "bn": "ব্যাংক"
    },
    {
      "en": "Supermarket",
      "bn": "সুপারমার্কেট"
    },
    {
      "en": "Shopping Mall",
      "bn": "শপিং মল"
    },
    {
      "en": "Restaurant",
      "bn": "রেস্তোরাঁ"
    },
    {
      "en": "Cafe",
      "bn": "ক্যাফে"
    },
    {
      "en": "Bakery",
      "bn": "বেকারি"
    },
    {
      "en": "Pharmacy",
      "bn": "ফার্মেসি"
    },
    {
      "en": "Black Hole",
      "bn": "কৃষ্ণগহ্বর"
    },
    {
      "en": "Solar System",
      "bn": "সৌরজগত"
    },
    {
      "en": "Shooting Star",
      "bn": "উল্কাপাত"
    },
    {
      "en": "Time Machine",
      "bn": "টাইম মেশিন"
    },
    {
      "en": "Treasure Map",
      "bn": "গুপ্তধনের মানচিত্র"
    },
    {
      "en": "Crystal Ball",
      "bn": "স্ফটিক বল"
    },
    {
      "en": "Magic Carpet",
      "bn": "উড়ন্ত গালিচা"
    },
    {
      "en": "Haunted House",
      "bn": "ভূতুড়ে বাড়ি"
    },
    {
      "en": "Roller Coaster",
      "bn": "রোলার কোস্টার"
    },
    {
      "en": "Ferris Wheel",
      "bn": "নাগরদোলা"
    },
    {
      "en": "Hot Air Balloon",
      "bn": "হট এয়ার বেলুন"
    },
    {
      "en": "Traffic Light",
      "bn": "ট্রাফিক লাইট"
    },
    {
      "en": "Fire Hydrant",
      "bn": "ফায়ার হাইড্রেন্ট"
    },
    {
      "en": "Police Car",
      "bn": "পুলিশের গাড়ি"
    },
    {
      "en": "Ambulance",
      "bn": "অ্যাম্বুলেন্স"
    },
    {
      "en": "Fire Engine",
      "bn": "দমকলের গাড়ি"
    },
    {
      "en": "Space Station",
      "bn": "মহাকাশ স্টেশন"
    },
    {
      "en": "Lunar Eclipse",
      "bn": "চন্দ্রগ্রহণ"
    },
    {
      "en": "Solar Eclipse",
      "bn": "সূর্যগ্রহণ"
    },
    {
      "en": "Milky Way",
      "bn": "ছায়াপথ"
    },
    {
      "en": "Grand Canyon",
      "bn": "গ্র্যান্ড ক্যানিয়ন"
    },
    {
      "en": "Great Wall",
      "bn": "চীনের মহাপ্রাচীর"
    },
    {
      "en": "Eiffel Tower",
      "bn": "আইফেল টাওয়ার"
    },
    {
      "en": "Statue of Liberty",
      "bn": "স্ট্যাচু অফ লিবার্টি"
    },
    {
      "en": "Taj Mahal",
      "bn": "তাজমহল"
    },
    {
      "en": "Bermuda Triangle",
      "bn": "বারমুডা ট্রায়াঙ্গেল"
    },
    {
      "en": "Stonehenge",
      "bn": "স্টোনহেঞ্জ"
    },
    {
      "en": "Mount Everest",
      "bn": "মাউন্ট এভারেস্ট"
    },
    {
      "en": "Sahara Desert",
      "bn": "সাহারার মরুভূমি"
    },
    {
      "en": "Amazon Rainforest",
      "bn": "আমাজন রেইনফরেস্ট"
    },
    {
      "en": "Coral Reef",
      "bn": "প্রবাল প্রাচীর"
    },
    {
      "en": "Northern Lights",
      "bn": "মেরুজ্যোতি"
    },
    {
      "en": "Fossil",
      "bn": "জীবাশ্ম"
    },
    {
      "en": "Meteorite",
      "bn": "উল্কাপিণ্ড"
    },
    {
      "en": "Observatory",
      "bn": "মানমন্দির"
    },
    {
      "en": "Laboratory",
      "bn": "গবেষণাগার"
    },
    {
      "en": "Microchip",
      "bn": "মাইক্রোচিপ"
    },
    {
      "en": "Motherboard",
      "bn": "মাদারবোর্ড"
    },
    {
      "en": "DNA Strand",
      "bn": "ডিএনএ স্ট্র্যান্ড"
    },
    {
      "en": "Virus",
      "bn": "ভাইরাস"
    },
    {
      "en": "Bacteria",
      "bn": "ব্যাকটেরিয়া"
    },
    {
      "en": "Molecule",
      "bn": "অণু"
    }
  ],
  "food": [
    {
      "en": "Pineapple",
      "bn": "আনারস"
    },
    {
      "en": "Watermelon",
      "bn": "তরমুজ"
    },
    {
      "en": "Burger",
      "bn": "বার্গার"
    },
    {
      "en": "Sandwich",
      "bn": "স্যান্ডউইচ"
    },
    {
      "en": "Pancake",
      "bn": "প্যানকেক"
    },
    {
      "en": "Sushi",
      "bn": "সুশি"
    },
    {
      "en": "Chocolate",
      "bn": "চকলেট"
    },
    {
      "en": "Strawberry",
      "bn": "স্ট্রবেরি"
    },
    {
      "en": "Popcorn",
      "bn": "পপকর্ন"
    },
    {
      "en": "Noodles",
      "bn": "নুডুলস"
    },
    {
      "en": "Biryani",
      "bn": "বিরিয়ানি"
    },
    {
      "en": "Rosogolla",
      "bn": "রসগোল্লা"
    },
    {
      "en": "Samosa",
      "bn": "সিঙ্গারা"
    },
    {
      "en": "Jalebi",
      "bn": "জিলাপি"
    },
    {
      "en": "Ice Cream",
      "bn": "আইসক্রিম"
    },
    {
      "en": "Pizza",
      "bn": "পিজা"
    },
    {
      "en": "French Fries",
      "bn": "ফ্রেঞ্চ ফ্রাই"
    },
    {
      "en": "Mango",
      "bn": "আম"
    },
    {
      "en": "Jackfruit",
      "bn": "কাঁঠাল"
    },
    {
      "en": "Fuchka",
      "bn": "ফুচকা"
    },
    {
      "en": "Kebab",
      "bn": "কাবাব"
    },
    {
      "en": "Mutton Curry",
      "bn": "খাসির মাংস"
    },
    {
      "en": "Fish Curry",
      "bn": "মাছের ঝোল"
    },
    {
      "en": "Pithas",
      "bn": "পিঠা"
    },
    {
      "en": "Apple",
      "bn": "আপেল"
    },
    {
      "en": "Banana",
      "bn": "কলা"
    },
    {
      "en": "Orange",
      "bn": "কমলালেবু"
    },
    {
      "en": "Grapes",
      "bn": "আঙ্গুর"
    },
    {
      "en": "Papaya",
      "bn": "পেঁপে"
    },
    {
      "en": "Guava",
      "bn": "পেয়ারা"
    },
    {
      "en": "Pomegranate",
      "bn": "ডালিম"
    },
    {
      "en": "Coconut",
      "bn": "নারকেল"
    },
    {
      "en": "Lemon",
      "bn": "লেবু"
    },
    {
      "en": "Tomato",
      "bn": "টমেটো"
    },
    {
      "en": "Potato",
      "bn": "আলু"
    },
    {
      "en": "Onion",
      "bn": "পেঁয়াজ"
    },
    {
      "en": "Garlic",
      "bn": "রসুন"
    },
    {
      "en": "Ginger",
      "bn": "আদা"
    },
    {
      "en": "Chili",
      "bn": "লঙ্কা"
    },
    {
      "en": "Carrot",
      "bn": "গাজর"
    },
    {
      "en": "Cucumber",
      "bn": "শসা"
    },
    {
      "en": "Eggplant",
      "bn": "বেগুন"
    },
    {
      "en": "Cabbage",
      "bn": "বাঁধাকপি"
    },
    {
      "en": "Cauliflower",
      "bn": "ফুলকপি"
    },
    {
      "en": "Spinach",
      "bn": "পালং শাক"
    },
    {
      "en": "Pumpkin",
      "bn": "কুমড়ো"
    },
    {
      "en": "Mushroom",
      "bn": "মাশরুম"
    },
    {
      "en": "Peas",
      "bn": "মটরশুঁটি"
    },
    {
      "en": "Corn",
      "bn": "ভুট্টা"
    },
    {
      "en": "Rice",
      "bn": "ভাত"
    },
    {
      "en": "Bread",
      "bn": "রুটি"
    },
    {
      "en": "Butter",
      "bn": "মাখন"
    },
    {
      "en": "Cheese",
      "bn": "পনির"
    },
    {
      "en": "Milk",
      "bn": "দুধ"
    },
    {
      "en": "Yogurt",
      "bn": "দই"
    },
    {
      "en": "Egg",
      "bn": "ডিম"
    },
    {
      "en": "Chicken",
      "bn": "মুরগির মাংস"
    },
    {
      "en": "Beef",
      "bn": "গরুর মাংস"
    },
    {
      "en": "Pork",
      "bn": "শুকরের মাংস"
    },
    {
      "en": "Bacon",
      "bn": "বেকন"
    },
    {
      "en": "Sausage",
      "bn": "সসেজ"
    },
    {
      "en": "Soup",
      "bn": "সুপ"
    },
    {
      "en": "Salad",
      "bn": "সালাদ"
    },
    {
      "en": "Pasta",
      "bn": "পাস্তা"
    },
    {
      "en": "Spaghetti",
      "bn": "স্প্যাগেটি"
    },
    {
      "en": "Steak",
      "bn": "স্টেক"
    },
    {
      "en": "Hot Dog",
      "bn": "হট ডগ"
    },
    {
      "en": "Taco",
      "bn": "টাকো"
    },
    {
      "en": "Burrito",
      "bn": "বুরিটো"
    },
    {
      "en": "Donut",
      "bn": "ডোনাট"
    },
    {
      "en": "Cupcake",
      "bn": "কাপকেক"
    },
    {
      "en": "Cookie",
      "bn": "কুকি"
    },
    {
      "en": "Cake",
      "bn": "কেক"
    },
    {
      "en": "Pie",
      "bn": "পাই"
    },
    {
      "en": "Pudding",
      "bn": "পুডিং"
    },
    {
      "en": "Jelly",
      "bn": "জেলি"
    },
    {
      "en": "Honey",
      "bn": "মধু"
    },
    {
      "en": "Jam",
      "bn": "জ্যাম"
    },
    {
      "en": "Sugar",
      "bn": "চিনি"
    },
    {
      "en": "Salt",
      "bn": "লবণ"
    },
    {
      "en": "Pepper",
      "bn": "গোলমরিচ"
    },
    {
      "en": "Spices",
      "bn": "মশলা"
    },
    {
      "en": "Tea",
      "bn": "চা"
    },
    {
      "en": "Coffee",
      "bn": "কফি"
    },
    {
      "en": "Juice",
      "bn": "রস"
    },
    {
      "en": "Water",
      "bn": "জল"
    },
    {
      "en": "Soda",
      "bn": "সোডা"
    },
    {
      "en": "Wine",
      "bn": "ওয়াইন"
    },
    {
      "en": "Beer",
      "bn": "বিয়ার"
    },
    {
      "en": "Luchi",
      "bn": "লুচি"
    },
    {
      "en": "Alur Dom",
      "bn": "আলুর দম"
    },
    {
      "en": "Cholar Dal",
      "bn": "ছোলার ডাল"
    },
    {
      "en": "Beguni",
      "bn": "বেগুনি"
    },
    {
      "en": "Mishti Doi",
      "bn": "মিষ্টি দই"
    },
    {
      "en": "Sandesh",
      "bn": "সন্দেশ"
    },
    {
      "en": "Pantua",
      "bn": "পান্তুয়া"
    },
    {
      "en": "Chumchum",
      "bn": "চমচম"
    },
    {
      "en": "Kalojam",
      "bn": "কালোজাম"
    },
    {
      "en": "Payesh",
      "bn": "পায়েস"
    },
    {
      "en": "Cotton Candy",
      "bn": "হাওয়াই মিঠাই"
    },
    {
      "en": "French Toast",
      "bn": "ফ্রেঞ্চ টোস্ট"
    },
    {
      "en": "Spring Roll",
      "bn": "স্প্রিং রোল"
    },
    {
      "en": "Fried Rice",
      "bn": "ফ্রাইড রাইস"
    },
    {
      "en": "Chicken Tikka",
      "bn": "চিকেন টিক্কা"
    },
    {
      "en": "Mutton Biryani",
      "bn": "মাটন বিরিয়ানি"
    },
    {
      "en": "Fish Fry",
      "bn": "ফিশ ফ্রাই"
    },
    {
      "en": "Pani Puri",
      "bn": "পানিপুরি"
    },
    {
      "en": "Masala Dosa",
      "bn": "মশলা দোসা"
    },
    {
      "en": "Chole Bhature",
      "bn": "ছোলে ভাটুরে"
    },
    {
      "en": "Gulab Jamun",
      "bn": "গোলাপ জাম"
    },
    {
      "en": "Ras Malai",
      "bn": "রসমালাই"
    },
    {
      "en": "Kathi Roll",
      "bn": "কাঠি রোল"
    },
    {
      "en": "Momos",
      "bn": "মোমো"
    },
    {
      "en": "Garlic Bread",
      "bn": "গার্লিক ব্রেড"
    },
    {
      "en": "Onion Rings",
      "bn": "অনিওন রিংস"
    },
    {
      "en": "Cheeseburger",
      "bn": "চিজবার্গার"
    },
    {
      "en": "Hot Chocolate",
      "bn": "হট চকোলেট"
    },
    {
      "en": "Iced Tea",
      "bn": "আইসড টি"
    },
    {
      "en": "Milkshake",
      "bn": "মিল্কশেক"
    },
    {
      "en": "Smoothie",
      "bn": "স্মুদি"
    },
    {
      "en": "Lemonade",
      "bn": "লেবুর শরবত"
    },
    {
      "en": "Coconut Water",
      "bn": "ডাবের জল"
    },
    {
      "en": "Mango Lassi",
      "bn": "ম্যাঙ্গো লস্যি"
    },
    {
      "en": "Sugarcane Juice",
      "bn": "আখের রস"
    },
    {
      "en": "Peanut Butter",
      "bn": "পিনাট বাটার"
    },
    {
      "en": "Maple Syrup",
      "bn": "ম্যাপল সিরাপ"
    },
    {
      "en": "Soy Sauce",
      "bn": "সয়া সস"
    },
    {
      "en": "Chili Sauce",
      "bn": "চিলি সস"
    },
    {
      "en": "Tomato Ketchup",
      "bn": "টমেটো কেচাপ"
    },
    {
      "en": "Mayonnaise",
      "bn": "মেয়োনিজ"
    },
    {
      "en": "Mustard",
      "bn": "সরিষা"
    },
    {
      "en": "Olive Oil",
      "bn": "অলিভ অয়েল"
    },
    {
      "en": "Black Pepper",
      "bn": "গোলমরিচ"
    },
    {
      "en": "Cinnamon",
      "bn": "দারুচিনি"
    },
    {
      "en": "Cardamom",
      "bn": "এলাচ"
    },
    {
      "en": "Cloves",
      "bn": "লবঙ্গ"
    },
    {
      "en": "Nutmeg",
      "bn": "জায়ফল"
    },
    {
      "en": "Saffron",
      "bn": "জাফরান"
    },
    {
      "en": "Turmeric",
      "bn": "হলুদ"
    },
    {
      "en": "Coriander",
      "bn": "ধনে"
    },
    {
      "en": "Cumin",
      "bn": "জিরা"
    }
  ],
  "animals": [
    {
      "en": "Kangaroo",
      "bn": "ক্যাঙ্গারু"
    },
    {
      "en": "Penguin",
      "bn": "পেঙ্গুইন"
    },
    {
      "en": "Elephant",
      "bn": "হাতি"
    },
    {
      "en": "Giraffe",
      "bn": "জিরাফ"
    },
    {
      "en": "Rhinoceros",
      "bn": "গণ্ডার"
    },
    {
      "en": "Hippopotamus",
      "bn": "জলহস্তী"
    },
    {
      "en": "Crocodile",
      "bn": "কুমির"
    },
    {
      "en": "Dolphin",
      "bn": "ডলফিন"
    },
    {
      "en": "Whale",
      "bn": "তিমি"
    },
    {
      "en": "Shark",
      "bn": "হাঙ্গর"
    },
    {
      "en": "Octopus",
      "bn": "অক্টোপাস"
    },
    {
      "en": "Tiger",
      "bn": "বাঘ"
    },
    {
      "en": "Lion",
      "bn": "সিংহ"
    },
    {
      "en": "Cheetah",
      "bn": "চিতাবাঘ"
    },
    {
      "en": "Zebra",
      "bn": "জেব্রা"
    },
    {
      "en": "Gorilla",
      "bn": "গরিলা"
    },
    {
      "en": "Chimpanzee",
      "bn": "শিম্পাঞ্জি"
    },
    {
      "en": "Peacock",
      "bn": "ময়ূর"
    },
    {
      "en": "Ostrich",
      "bn": "উটপাখি"
    },
    {
      "en": "Eagle",
      "bn": "ঈগল"
    },
    {
      "en": "Dog",
      "bn": "কুকুর"
    },
    {
      "en": "Cat",
      "bn": "বিড়াল"
    },
    {
      "en": "Mouse",
      "bn": "ইঁদুর"
    },
    {
      "en": "Rat",
      "bn": "ইঁদুর"
    },
    {
      "en": "Rabbit",
      "bn": "খরগোশ"
    },
    {
      "en": "Hare",
      "bn": "খরগোশ"
    },
    {
      "en": "Squirrel",
      "bn": "কাঠবিড়ালী"
    },
    {
      "en": "Fox",
      "bn": "শিয়াল"
    },
    {
      "en": "Wolf",
      "bn": "নেকড়ে"
    },
    {
      "en": "Bear",
      "bn": "ভাল্লুক"
    },
    {
      "en": "Deer",
      "bn": "হরিণ"
    },
    {
      "en": "Moose",
      "bn": "মুষ"
    },
    {
      "en": "Camel",
      "bn": "উট"
    },
    {
      "en": "Horse",
      "bn": "ঘোড়া"
    },
    {
      "en": "Donkey",
      "bn": "গাধা"
    },
    {
      "en": "Cow",
      "bn": "গরু"
    },
    {
      "en": "Bull",
      "bn": "ষাঁড়"
    },
    {
      "en": "Pig",
      "bn": "শুকর"
    },
    {
      "en": "Sheep",
      "bn": "ভেড়া"
    },
    {
      "en": "Goat",
      "bn": "ছাগল"
    },
    {
      "en": "Chicken",
      "bn": "মুরগি"
    },
    {
      "en": "Rooster",
      "bn": "মোরগ"
    },
    {
      "en": "Duck",
      "bn": "হাঁস"
    },
    {
      "en": "Goose",
      "bn": "হাঁস"
    },
    {
      "en": "Swan",
      "bn": "রাজহাঁস"
    },
    {
      "en": "Pigeon",
      "bn": "পায়রা"
    },
    {
      "en": "Dove",
      "bn": "ঘুঘু"
    },
    {
      "en": "Crow",
      "bn": "কাক"
    },
    {
      "en": "Parrot",
      "bn": "টিয়া"
    },
    {
      "en": "Owl",
      "bn": "পেঁচা"
    },
    {
      "en": "Woodpecker",
      "bn": "কাঠঠোকরা"
    },
    {
      "en": "Bat",
      "bn": "বাদুড়"
    },
    {
      "en": "Frog",
      "bn": "ব্যাঙ"
    },
    {
      "en": "Toad",
      "bn": "কুনোব্যাঙ"
    },
    {
      "en": "Snake",
      "bn": "সাপ"
    },
    {
      "en": "Lizard",
      "bn": "টিকটিকি"
    },
    {
      "en": "Chameleon",
      "bn": "বহুরূপী"
    },
    {
      "en": "Turtle",
      "bn": "কচ্ছপ"
    },
    {
      "en": "Tortoise",
      "bn": "কচ্ছপ"
    },
    {
      "en": "Alligator",
      "bn": "কুমির"
    },
    {
      "en": "Fish",
      "bn": "মাছ"
    },
    {
      "en": "Crab",
      "bn": "কাঁকড়া"
    },
    {
      "en": "Lobster",
      "bn": "গলদা চিংড়ি"
    },
    {
      "en": "Shrimp",
      "bn": "চিংড়ি"
    },
    {
      "en": "Jellyfish",
      "bn": "জেলিফিশ"
    },
    {
      "en": "Starfish",
      "bn": "তারা মাছ"
    },
    {
      "en": "Seahorse",
      "bn": "সমুদ্র ঘোড়া"
    },
    {
      "en": "Walrus",
      "bn": "সিন্ধুঘোটক"
    },
    {
      "en": "Seal",
      "bn": "সীল"
    },
    {
      "en": "Polar Bear",
      "bn": "মেরু ভাল্লুক"
    },
    {
      "en": "Koala",
      "bn": "কোয়ালা"
    },
    {
      "en": "Panda",
      "bn": "পান্ডা"
    },
    {
      "en": "Sloth",
      "bn": "স্লথ"
    },
    {
      "en": "Armadillo",
      "bn": "আর্মাডিলো"
    },
    {
      "en": "Porcupine",
      "bn": "সজারু"
    },
    {
      "en": "Hedgehog",
      "bn": "হেজহগ"
    },
    {
      "en": "Skunk",
      "bn": "স্কাঙ্ক"
    },
    {
      "en": "Raccoon",
      "bn": "র্যাকুন"
    },
    {
      "en": "Badger",
      "bn": "ব্যাজার"
    },
    {
      "en": "Beaver",
      "bn": "বিভার"
    },
    {
      "en": "Otter",
      "bn": "ভোঁদড়"
    },
    {
      "en": "Mongoose",
      "bn": "নেউল"
    },
    {
      "en": "Hyena",
      "bn": "হায়েনা"
    },
    {
      "en": "Leopard",
      "bn": "চিতাবাঘ"
    },
    {
      "en": "Panther",
      "bn": "প্যান্থার"
    },
    {
      "en": "Jaguar",
      "bn": "জাগুয়ার"
    },
    {
      "en": "Puma",
      "bn": "পুমা"
    },
    {
      "en": "Lynx",
      "bn": "বনবিড়াল"
    },
    {
      "en": "Bobcat",
      "bn": "বনবিড়াল"
    },
    {
      "en": "Walrus",
      "bn": "সিন্ধুঘোটক"
    },
    {
      "en": "Polar Bear",
      "bn": "মেরু ভাল্লুক"
    },
    {
      "en": "Guinea Pig",
      "bn": "গিনিপিগ"
    },
    {
      "en": "Red Panda",
      "bn": "লাল পান্ডা"
    },
    {
      "en": "Snow Leopard",
      "bn": "তুষার চিতা"
    },
    {
      "en": "Great White Shark",
      "bn": "গ্রেট হোয়াইট শার্ক"
    },
    {
      "en": "Killer Whale",
      "bn": "কিলার হোয়েল"
    },
    {
      "en": "Blue Whale",
      "bn": "নীল তিমি"
    },
    {
      "en": "Sea Turtle",
      "bn": "সামুদ্রিক কচ্ছপ"
    },
    {
      "en": "Komodo Dragon",
      "bn": "কোমোডো ড্রাগন"
    },
    {
      "en": "King Cobra",
      "bn": "কিং কোবরা"
    },
    {
      "en": "Rattlesnake",
      "bn": "র্যাটলস্নেক"
    },
    {
      "en": "Black Mamba",
      "bn": "ব্ল্যাক মাম্বা"
    },
    {
      "en": "Poison Dart Frog",
      "bn": "পয়জন ডার্ট ফ্রগ"
    },
    {
      "en": "Grizzly Bear",
      "bn": "গ্রিজলি ভাল্লুক"
    },
    {
      "en": "Mountain Lion",
      "bn": "মাউন্টেন লায়ন"
    },
    {
      "en": "Bald Eagle",
      "bn": "বল্ড ঈগল"
    },
    {
      "en": "Golden Eagle",
      "bn": "সোনালী ঈগল"
    },
    {
      "en": "Vampire Bat",
      "bn": "ভ্যাম্পায়ার বাদুড়"
    },
    {
      "en": "Flying Squirrel",
      "bn": "উড়ন্ত কাঠবিড়ালী"
    },
    {
      "en": "Sloth Bear",
      "bn": "স্লথ ভাল্লুক"
    },
    {
      "en": "Honey Badger",
      "bn": "হানি ব্যাজার"
    },
    {
      "en": "Meerkat",
      "bn": "মিরক্যাট"
    },
    {
      "en": "Warthog",
      "bn": "ওয়ারথগ"
    },
    {
      "en": "Wildebeest",
      "bn": "ওয়াইল্ডবিস্ট"
    },
    {
      "en": "Gazelle",
      "bn": "গ্যাজেল"
    },
    {
      "en": "Antelope",
      "bn": "অ্যান্টিলোপ"
    },
    {
      "en": "Impala",
      "bn": "ইম্পালা"
    },
    {
      "en": "Baboon",
      "bn": "ব্যাবুন"
    },
    {
      "en": "Lemur",
      "bn": "লিমুর"
    },
    {
      "en": "Orangutan",
      "bn": "ওরাংওটাং"
    },
    {
      "en": "Chameleon",
      "bn": "বহুরূপী"
    },
    {
      "en": "Iguana",
      "bn": "ইগুয়ানা"
    },
    {
      "en": "Gecko",
      "bn": "গেকো"
    },
    {
      "en": "Praying Mantis",
      "bn": "প্রেয়িং ম্যান্টিস"
    },
    {
      "en": "Ladybug",
      "bn": "লেডিবাগ"
    },
    {
      "en": "Butterfly",
      "bn": "প্রজাপতি"
    },
    {
      "en": "Dragonfly",
      "bn": "ফড়িং"
    },
    {
      "en": "Grasshopper",
      "bn": "ঘাসফড়িং"
    },
    {
      "en": "Centipede",
      "bn": "শতপদী"
    },
    {
      "en": "Scorpion",
      "bn": "কাঁকড়াবিছে"
    },
    {
      "en": "Tarantula",
      "bn": "ট্যারান্টুলা"
    },
    {
      "en": "Black Widow",
      "bn": "ব্ল্যাক উইডো"
    }
  ],
  "objects": [
    {
      "en": "Umbrella",
      "bn": "ছাতা"
    },
    {
      "en": "Scissors",
      "bn": "কাঁচি"
    },
    {
      "en": "Hammer",
      "bn": "হাতুড়ি"
    },
    {
      "en": "Screwdriver",
      "bn": "স্ক্রু ড্রাইভার"
    },
    {
      "en": "Wrench",
      "bn": "রেঞ্চ"
    },
    {
      "en": "Clock",
      "bn": "ঘড়ি"
    },
    {
      "en": "Telephone",
      "bn": "টেলিফোন"
    },
    {
      "en": "Television",
      "bn": "টেলিভিশন"
    },
    {
      "en": "Computer",
      "bn": "কম্পিউটার"
    },
    {
      "en": "Laptop",
      "bn": "ল্যাপটপ"
    },
    {
      "en": "Camera",
      "bn": "ক্যামেরা"
    },
    {
      "en": "Headphones",
      "bn": "হেডফোন"
    },
    {
      "en": "Microphone",
      "bn": "মাইক্রোফোন"
    },
    {
      "en": "Speaker",
      "bn": "স্পিকার"
    },
    {
      "en": "Washing Machine",
      "bn": "ওয়াশিং মেশিন"
    },
    {
      "en": "Refrigerator",
      "bn": "ফ্রিজ"
    },
    {
      "en": "Microwave",
      "bn": "মাইক্রোওয়েভ"
    },
    {
      "en": "Toaster",
      "bn": "টোস্টার"
    },
    {
      "en": "Vacuum Cleaner",
      "bn": "ভ্যাকুয়াম ক্লিনার"
    },
    {
      "en": "Iron",
      "bn": "ইস্ত্রি"
    },
    {
      "en": "Bicycle",
      "bn": "সাইকেল"
    },
    {
      "en": "Motorcycle",
      "bn": "মোটরসাইকেল"
    },
    {
      "en": "Car",
      "bn": "গাড়ি"
    },
    {
      "en": "Bus",
      "bn": "বাস"
    },
    {
      "en": "Truck",
      "bn": "ট্রাক"
    },
    {
      "en": "Train",
      "bn": "ট্রেন"
    },
    {
      "en": "Airplane",
      "bn": "বিমান"
    },
    {
      "en": "Helicopter",
      "bn": "হেলিকপ্টার"
    },
    {
      "en": "Boat",
      "bn": "নৌকা"
    },
    {
      "en": "Ship",
      "bn": "জাহাজ"
    },
    {
      "en": "Table",
      "bn": "টেবিল"
    },
    {
      "en": "Chair",
      "bn": "চেয়ার"
    },
    {
      "en": "Bed",
      "bn": "বিছানা"
    },
    {
      "en": "Sofa",
      "bn": "সোফা"
    },
    {
      "en": "Wardrobe",
      "bn": "আলমারি"
    },
    {
      "en": "Mirror",
      "bn": "আয়না"
    },
    {
      "en": "Lamp",
      "bn": "বাতি"
    },
    {
      "en": "Fan",
      "bn": "পাখা"
    },
    {
      "en": "Air Conditioner",
      "bn": "এসি"
    },
    {
      "en": "Heater",
      "bn": "হিটার"
    },
    {
      "en": "Plate",
      "bn": "থালা"
    },
    {
      "en": "Bowl",
      "bn": "বাটি"
    },
    {
      "en": "Cup",
      "bn": "কাপ"
    },
    {
      "en": "Glass",
      "bn": "গ্লাস"
    },
    {
      "en": "Spoon",
      "bn": "চামচ"
    },
    {
      "en": "Fork",
      "bn": "কাঁটাচামচ"
    },
    {
      "en": "Knife",
      "bn": "ছুরি"
    },
    {
      "en": "Pot",
      "bn": "পাত্র"
    },
    {
      "en": "Pan",
      "bn": "কড়াই"
    },
    {
      "en": "Stove",
      "bn": "চুলা"
    },
    {
      "en": "Oven",
      "bn": "ওভেন"
    },
    {
      "en": "Book",
      "bn": "বই"
    },
    {
      "en": "Notebook",
      "bn": "খাতা"
    },
    {
      "en": "Pen",
      "bn": "কলম"
    },
    {
      "en": "Pencil",
      "bn": "পেন্সিল"
    },
    {
      "en": "Eraser",
      "bn": "রাবার"
    },
    {
      "en": "Sharpener",
      "bn": "শার্পনার"
    },
    {
      "en": "Ruler",
      "bn": "স্কেল"
    },
    {
      "en": "Bag",
      "bn": "ব্যাগ"
    },
    {
      "en": "Backpack",
      "bn": "ব্যাকপ্যাক"
    },
    {
      "en": "Wallet",
      "bn": "মানিব্যাগ"
    },
    {
      "en": "Purse",
      "bn": "পার্স"
    },
    {
      "en": "Glasses",
      "bn": "চশমা"
    },
    {
      "en": "Sunglasses",
      "bn": "রোদচশমা"
    },
    {
      "en": "Watch",
      "bn": "হাতঘড়ি"
    },
    {
      "en": "Ring",
      "bn": "আংটি"
    },
    {
      "en": "Necklace",
      "bn": "হার"
    },
    {
      "en": "Earrings",
      "bn": "কানের দুল"
    },
    {
      "en": "Bracelet",
      "bn": "ব্রেসলেট"
    },
    {
      "en": "Hat",
      "bn": "টুপি"
    },
    {
      "en": "Cap",
      "bn": "ক্যাপ"
    },
    {
      "en": "Scarf",
      "bn": "স্কার্ফ"
    },
    {
      "en": "Gloves",
      "bn": "দস্তানা"
    },
    {
      "en": "Socks",
      "bn": "মোজা"
    },
    {
      "en": "Shoes",
      "bn": "জুতো"
    },
    {
      "en": "Boots",
      "bn": "বুট"
    },
    {
      "en": "Sandals",
      "bn": "স্যান্ডেল"
    },
    {
      "en": "Shirt",
      "bn": "শার্ট"
    },
    {
      "en": "T-shirt",
      "bn": "টি-শার্ট"
    },
    {
      "en": "Pants",
      "bn": "প্যান্ট"
    },
    {
      "en": "Jeans",
      "bn": "জিন্স"
    },
    {
      "en": "Skirt",
      "bn": "স্কার্ট"
    },
    {
      "en": "Dress",
      "bn": "পোশাক"
    },
    {
      "en": "Jacket",
      "bn": "জ্যাকেট"
    },
    {
      "en": "Coat",
      "bn": "কোট"
    },
    {
      "en": "Sweater",
      "bn": "সোয়েটার"
    },
    {
      "en": "Towel",
      "bn": "তোয়ালে"
    },
    {
      "en": "Blanket",
      "bn": "কম্বল"
    },
    {
      "en": "Pillow",
      "bn": "বালিশ"
    },
    {
      "en": "Carpet",
      "bn": "কার্পেট"
    },
    {
      "en": "Coffee Mug",
      "bn": "কফির মগ"
    },
    {
      "en": "Water Bottle",
      "bn": "জলের বোতল"
    },
    {
      "en": "Toothbrush",
      "bn": "টুথব্রাশ"
    },
    {
      "en": "Toothpaste",
      "bn": "টুথপেস্ট"
    },
    {
      "en": "Hairbrush",
      "bn": "চুল আঁচড়ানোর ব্রাশ"
    },
    {
      "en": "Nail Clipper",
      "bn": "নেল কাটার"
    },
    {
      "en": "Toilet Paper",
      "bn": "টয়লেট পেপার"
    },
    {
      "en": "Paper Towel",
      "bn": "পেপার টাওয়েল"
    },
    {
      "en": "Trash Can",
      "bn": "আবর্জনার পাত্র"
    },
    {
      "en": "Broom",
      "bn": "ঝাঁটা"
    },
    {
      "en": "Dustpan",
      "bn": "ডাস্টপ্যান"
    },
    {
      "en": "Mop",
      "bn": "মপ"
    },
    {
      "en": "Bucket",
      "bn": "বালতি"
    },
    {
      "en": "Sponge",
      "bn": "স্পঞ্জ"
    },
    {
      "en": "Dish Soap",
      "bn": "ডিশ সোপ"
    },
    {
      "en": "Laundry Detergent",
      "bn": "লন্ড্রি ডিটারজেন্ট"
    },
    {
      "en": "Clothesline",
      "bn": "দড়ি"
    },
    {
      "en": "Clothespin",
      "bn": "ক্লিপ"
    },
    {
      "en": "Hanger",
      "bn": "হ্যাঙ্গার"
    },
    {
      "en": "Ironing Board",
      "bn": "ইস্ত্রি করার বোর্ড"
    },
    {
      "en": "Sewing Machine",
      "bn": "সেলাই মেশিন"
    },
    {
      "en": "Needle and Thread",
      "bn": "সুই সুতা"
    },
    {
      "en": "Tape Measure",
      "bn": "মাপার ফিতা"
    },
    {
      "en": "Calculator",
      "bn": "ক্যালকুলেটর"
    },
    {
      "en": "Stapler",
      "bn": "স্ট্যাপলার"
    },
    {
      "en": "Paper Clip",
      "bn": "পেপার ক্লিপ"
    },
    {
      "en": "Rubber Band",
      "bn": "রাবার ব্যান্ড"
    },
    {
      "en": "Sticky Note",
      "bn": "স্টিকি নোট"
    },
    {
      "en": "Highlighter",
      "bn": "হাইলাইটার"
    },
    {
      "en": "Marker",
      "bn": "মার্কার"
    },
    {
      "en": "Crayon",
      "bn": "ক্রেয়ন"
    },
    {
      "en": "Paintbrush",
      "bn": "পেইন্টব্রাশ"
    },
    {
      "en": "Easel",
      "bn": "ইজেল"
    },
    {
      "en": "Palette",
      "bn": "প্যালেট"
    },
    {
      "en": "Canvas",
      "bn": "ক্যানভাস"
    },
    {
      "en": "Sketchbook",
      "bn": "স্কেচবুক"
    },
    {
      "en": "Microphone",
      "bn": "মাইক্রোফোন"
    },
    {
      "en": "Video Camera",
      "bn": "ভিডিও ক্যামেরা"
    },
    {
      "en": "Tripod",
      "bn": "ট্রাইপড"
    },
    {
      "en": "Binoculars",
      "bn": "বাইনোকুলার"
    },
    {
      "en": "Telescope",
      "bn": "টেলিস্কোপ"
    },
    {
      "en": "Microscope",
      "bn": "অণুবীক্ষণ যন্ত্র"
    }
  ],
  "profession": [
    {
      "en": "Doctor",
      "bn": "ডাক্তার"
    },
    {
      "en": "Teacher",
      "bn": "শিক্ষক"
    },
    {
      "en": "Engineer",
      "bn": "প্রকৌশলী"
    },
    {
      "en": "Pilot",
      "bn": "পাইলট"
    },
    {
      "en": "Farmer",
      "bn": "কৃষক"
    },
    {
      "en": "Nurse",
      "bn": "নার্স"
    },
    {
      "en": "Scientist",
      "bn": "বিজ্ঞানী"
    },
    {
      "en": "Police Officer",
      "bn": "পুলিশ অফিসার"
    },
    {
      "en": "Firefighter",
      "bn": "দমকলকর্মী"
    },
    {
      "en": "Chef",
      "bn": "শেফ"
    },
    {
      "en": "Baker",
      "bn": "বেকার"
    },
    {
      "en": "Artist",
      "bn": "শিল্পী"
    },
    {
      "en": "Musician",
      "bn": "সঙ্গীতশিল্পী"
    },
    {
      "en": "Actor",
      "bn": "অভিনেতা"
    },
    {
      "en": "Singer",
      "bn": "গায়ক"
    },
    {
      "en": "Writer",
      "bn": "লেখক"
    },
    {
      "en": "Journalist",
      "bn": "সাংবাদিক"
    },
    {
      "en": "Photographer",
      "bn": "আলোকচিত্রী"
    },
    {
      "en": "Lawyer",
      "bn": "আইনজীবী"
    },
    {
      "en": "Judge",
      "bn": "বিচারক"
    },
    {
      "en": "Dentist",
      "bn": "দাঁতের ডাক্তার"
    },
    {
      "en": "Surgeon",
      "bn": "সার্জন"
    },
    {
      "en": "Veterinarian",
      "bn": "পশুচিকিৎসক"
    },
    {
      "en": "Pharmacist",
      "bn": "ফার্মাসিস্ট"
    },
    {
      "en": "Architect",
      "bn": "স্থপতি"
    },
    {
      "en": "Mechanic",
      "bn": "মেকানিক"
    },
    {
      "en": "Electrician",
      "bn": "ইলেকট্রিশিয়ান"
    },
    {
      "en": "Plumber",
      "bn": "প্লাম্বার"
    },
    {
      "en": "Carpenter",
      "bn": "ছুতোর"
    },
    {
      "en": "Painter",
      "bn": "চিত্রকর"
    },
    {
      "en": "Tailor",
      "bn": "দর্জি"
    },
    {
      "en": "Barber",
      "bn": "নাপিত"
    },
    {
      "en": "Hairdresser",
      "bn": "হেয়ারড্রেসার"
    },
    {
      "en": "Driver",
      "bn": "চালক"
    },
    {
      "en": "Conductor",
      "bn": "কন্ডাক্টর"
    },
    {
      "en": "Postman",
      "bn": "পিয়ন"
    },
    {
      "en": "Librarian",
      "bn": "গ্রন্থাগারিক"
    },
    {
      "en": "Accountant",
      "bn": "অ্যাকাউন্ট্যান্ট"
    },
    {
      "en": "Banker",
      "bn": "ব্যাংকার"
    },
    {
      "en": "Cashier",
      "bn": "ক্যাশিয়ার"
    },
    {
      "en": "Salesperson",
      "bn": "বিক্রেতা"
    },
    {
      "en": "Manager",
      "bn": "ম্যানেজার"
    },
    {
      "en": "Secretary",
      "bn": "সেক্রেটারি"
    },
    {
      "en": "Receptionist",
      "bn": "রিসেপশনিস্ট"
    },
    {
      "en": "Waitress",
      "bn": "ওয়েট্রেস"
    },
    {
      "en": "Waiter",
      "bn": "ওয়েটার"
    },
    {
      "en": "Security Guard",
      "bn": "নিরাপত্তারক্ষী"
    },
    {
      "en": "Soldier",
      "bn": "সৈনিক"
    },
    {
      "en": "Sailor",
      "bn": "নাবিক"
    },
    {
      "en": "Detective",
      "bn": "গোয়েন্দা"
    },
    {
      "en": "Politician",
      "bn": "রাজনীতিবিদ"
    },
    {
      "en": "Mayor",
      "bn": "মেয়র"
    },
    {
      "en": "President",
      "bn": "রাষ্ট্রপতি"
    },
    {
      "en": "King",
      "bn": "রাজা"
    },
    {
      "en": "Queen",
      "bn": "রানী"
    },
    {
      "en": "Astronaut",
      "bn": "মহাকাশচারী"
    },
    {
      "en": "Magician",
      "bn": "জাদুকর"
    },
    {
      "en": "Clown",
      "bn": "ভাঁড়"
    },
    {
      "en": "Dancer",
      "bn": "নর্তকী"
    },
    {
      "en": "Gymnast",
      "bn": "জিমন্যাস্ট"
    },
    {
      "en": "Athlete",
      "bn": "অ্যাথলিট"
    },
    {
      "en": "Coach",
      "bn": "কোচ"
    },
    {
      "en": "Umpire",
      "bn": "আম্পায়ার"
    },
    {
      "en": "Referee",
      "bn": "রেফারি"
    },
    {
      "en": "Fisherman",
      "bn": "জেলে"
    },
    {
      "en": "Hunter",
      "bn": "শিকারী"
    },
    {
      "en": "Miner",
      "bn": "খনি শ্রমিক"
    },
    {
      "en": "Blacksmith",
      "bn": "কামার"
    },
    {
      "en": "Potter",
      "bn": "কুমোর"
    },
    {
      "en": "Weaver",
      "bn": "তাঁতি"
    },
    {
      "en": "Cobbler",
      "bn": "মুচি"
    },
    {
      "en": "Florist",
      "bn": "ফুল বিক্রেতা"
    },
    {
      "en": "Jeweler",
      "bn": "স্বর্ণকার"
    },
    {
      "en": "Butcher",
      "bn": "কসাই"
    },
    {
      "en": "Optician",
      "bn": "চশমা বিক্রেতা"
    },
    {
      "en": "Software Engineer",
      "bn": "সফটওয়্যার ইঞ্জিনিয়ার"
    },
    {
      "en": "Data Scientist",
      "bn": "ডেটা সায়েন্টিস্ট"
    },
    {
      "en": "Web Developer",
      "bn": "ওয়েব ডেভেলপার"
    },
    {
      "en": "Graphic Designer",
      "bn": "গ্রাফিক ডিজাইনার"
    },
    {
      "en": "Fashion Designer",
      "bn": "ফ্যাশন ডিজাইনার"
    },
    {
      "en": "Interior Designer",
      "bn": "ইন্টেরিয়র ডিজাইনার"
    },
    {
      "en": "Real Estate Agent",
      "bn": "রিয়েল এস্টেট এজেন্ট"
    },
    {
      "en": "Travel Agent",
      "bn": "ট্রাভেল এজেন্ট"
    },
    {
      "en": "Flight Attendant",
      "bn": "ফ্লাইট অ্যাটেনডেন্ট"
    },
    {
      "en": "Air Traffic Controller",
      "bn": "এয়ার ট্রাফিক কন্ট্রোলার"
    },
    {
      "en": "Train Driver",
      "bn": "ট্রেন ড্রাইভার"
    },
    {
      "en": "Bus Driver",
      "bn": "বাস ড্রাইভার"
    },
    {
      "en": "Taxi Driver",
      "bn": "ট্যাক্সি ড্রাইভার"
    },
    {
      "en": "Delivery Person",
      "bn": "ডেলিভারি বয়"
    },
    {
      "en": "Postman",
      "bn": "পিয়ন"
    },
    {
      "en": "Librarian",
      "bn": "গ্রন্থাগারিক"
    },
    {
      "en": "Archaeologist",
      "bn": "প্রত্নতাত্ত্বিক"
    },
    {
      "en": "Historian",
      "bn": "ঐতিহাসিক"
    },
    {
      "en": "Philosopher",
      "bn": "দার্শনিক"
    },
    {
      "en": "Psychologist",
      "bn": "মনোবিজ্ঞানী"
    },
    {
      "en": "Psychiatrist",
      "bn": "মনোরোগ বিশেষজ্ঞ"
    },
    {
      "en": "Pharmacist",
      "bn": "ফার্মাসিস্ট"
    },
    {
      "en": "Paramedic",
      "bn": "প্যারামেডিক"
    },
    {
      "en": "Veterinarian",
      "bn": "পশুচিকিৎসক"
    },
    {
      "en": "Dentist",
      "bn": "দাঁতের ডাক্তার"
    },
    {
      "en": "Surgeon",
      "bn": "সার্জন"
    },
    {
      "en": "Pediatrician",
      "bn": "শিশু বিশেষজ্ঞ"
    },
    {
      "en": "Cardiologist",
      "bn": "হৃদরোগ বিশেষজ্ঞ"
    },
    {
      "en": "Dermatologist",
      "bn": "চর্মরোগ বিশেষজ্ঞ"
    },
    {
      "en": "Neurologist",
      "bn": "স্নায়ুরোগ বিশেষজ্ঞ"
    },
    {
      "en": "Meteorologist",
      "bn": "আবহাওয়াবিদ"
    },
    {
      "en": "Astronomer",
      "bn": "জ্যোতির্বিজ্ঞানী"
    },
    {
      "en": "Biologist",
      "bn": "জীববিজ্ঞানী"
    },
    {
      "en": "Chemist",
      "bn": "রসায়নবিদ"
    },
    {
      "en": "Physicist",
      "bn": "পদার্থবিজ্ঞানী"
    },
    {
      "en": "Mathematician",
      "bn": "গণিতবিদ"
    },
    {
      "en": "Economist",
      "bn": "অর্থনীতিবিদ"
    },
    {
      "en": "Politician",
      "bn": "রাজনীতিবিদ"
    },
    {
      "en": "Diplomat",
      "bn": "কূটনীতিক"
    },
    {
      "en": "Ambassador",
      "bn": "রাষ্ট্রদূত"
    },
    {
      "en": "Spy",
      "bn": "গুপ্তচর"
    },
    {
      "en": "Detective",
      "bn": "গোয়েন্দা"
    }
  ],
  "sports": [
    {
      "en": "Football",
      "bn": "ফুটবল"
    },
    {
      "en": "Cricket",
      "bn": "ক্রিকেট"
    },
    {
      "en": "Tennis",
      "bn": "টেনিস"
    },
    {
      "en": "Badminton",
      "bn": "ব্যাডমিন্টন"
    },
    {
      "en": "Basketball",
      "bn": "বাস্কেটবল"
    },
    {
      "en": "Volleyball",
      "bn": "ভলিবল"
    },
    {
      "en": "Hockey",
      "bn": "হকি"
    },
    {
      "en": "Table Tennis",
      "bn": "টেবিল টেনিস"
    },
    {
      "en": "Golf",
      "bn": "গলফ"
    },
    {
      "en": "Boxing",
      "bn": "বক্সিং"
    },
    {
      "en": "Wrestling",
      "bn": "কুস্তি"
    },
    {
      "en": "Swimming",
      "bn": "সাঁতার"
    },
    {
      "en": "Cycling",
      "bn": "সাইক্লিং"
    },
    {
      "en": "Athletics",
      "bn": "অ্যাথলেটিক্স"
    },
    {
      "en": "Gymnastics",
      "bn": "জিমন্যাস্টিকস"
    },
    {
      "en": "Chess",
      "bn": "দাবা"
    },
    {
      "en": "Carrom",
      "bn": "ক্যারম"
    },
    {
      "en": "Ludo",
      "bn": "লুডু"
    },
    {
      "en": "Kabaddi",
      "bn": "কাবাডি"
    },
    {
      "en": "Kho Kho",
      "bn": "খোকো"
    },
    {
      "en": "Archery",
      "bn": "তীরন্দাজী"
    },
    {
      "en": "Shooting",
      "bn": "শ্যুটিং"
    },
    {
      "en": "Weightlifting",
      "bn": "ভারোত্তোলন"
    },
    {
      "en": "Judo",
      "bn": "জুডো"
    },
    {
      "en": "Karate",
      "bn": "কারাতে"
    },
    {
      "en": "Taekwondo",
      "bn": "তায়কোয়ান্দো"
    },
    {
      "en": "Fencing",
      "bn": "ফেন্সিং"
    },
    {
      "en": "Rowing",
      "bn": "নৌকা বাইচ"
    },
    {
      "en": "Sailing",
      "bn": "সেলিং"
    },
    {
      "en": "Surfing",
      "bn": "সার্ফিং"
    },
    {
      "en": "Skiing",
      "bn": "স্কিইং"
    },
    {
      "en": "Ice Skating",
      "bn": "আইস স্কেটিং"
    },
    {
      "en": "Snowboarding",
      "bn": "স্নোবোর্ডিং"
    },
    {
      "en": "Rugby",
      "bn": "রাগবি"
    },
    {
      "en": "Baseball",
      "bn": "বেসবল"
    },
    {
      "en": "Softball",
      "bn": "সফটবল"
    },
    {
      "en": "Water Polo",
      "bn": "ওয়াটার পোলো"
    },
    {
      "en": "Diving",
      "bn": "ডাইভিং"
    },
    {
      "en": "Marathon",
      "bn": "ম্যারাথন"
    },
    {
      "en": "Sprint",
      "bn": "স্প্রিন্ট"
    },
    {
      "en": "High Jump",
      "bn": "হাই জাম্প"
    },
    {
      "en": "Long Jump",
      "bn": "লং জাম্প"
    },
    {
      "en": "Javelin Throw",
      "bn": "জ্যাভলিন থ্রো"
    },
    {
      "en": "Discus Throw",
      "bn": "ডিসকাস থ্রো"
    },
    {
      "en": "Shot Put",
      "bn": "শট পুট"
    },
    {
      "en": "Pole Vault",
      "bn": "পোল ভল্ট"
    },
    {
      "en": "Billiards",
      "bn": "বিলিয়ার্ডস"
    },
    {
      "en": "Snooker",
      "bn": "স্নুকার"
    },
    {
      "en": "Darts",
      "bn": "ডার্টস"
    },
    {
      "en": "Bowling",
      "bn": "বোলিং"
    },
    {
      "en": "Polo",
      "bn": "পোলো"
    },
    {
      "en": "Equestrian",
      "bn": "অশ্বারোহণ"
    },
    {
      "en": "Triathlon",
      "bn": "ট্রায়াথলন"
    },
    {
      "en": "Pentathlon",
      "bn": "পেন্টাথলন"
    },
    {
      "en": "Scuba Diving",
      "bn": "স্কুবা ডাইভিং"
    },
    {
      "en": "Skydiving",
      "bn": "স্কাইডাইভিং"
    },
    {
      "en": "Bungee Jumping",
      "bn": "বাঞ্জি জাম্পিং"
    },
    {
      "en": "Rock Climbing",
      "bn": "রক ক্লাইম্বিং"
    },
    {
      "en": "Mountain Biking",
      "bn": "মাউন্টেন বাইকিং"
    },
    {
      "en": "Skateboarding",
      "bn": "স্কেটবোর্ডিং"
    },
    {
      "en": "Roller Skating",
      "bn": "রোলার স্কেটিং"
    },
    {
      "en": "Ice Hockey",
      "bn": "আইস হকি"
    },
    {
      "en": "Figure Skating",
      "bn": "ফিগার স্কেটিং"
    },
    {
      "en": "Snowmobiling",
      "bn": "স্নোমোবিলিং"
    },
    {
      "en": "Water Skiing",
      "bn": "ওয়াটার স্কিইং"
    },
    {
      "en": "Wakeboarding",
      "bn": "ওয়েকবোর্ডিং"
    },
    {
      "en": "Kite Surfing",
      "bn": "কাইট সার্ফিং"
    },
    {
      "en": "Windsurfing",
      "bn": "উইন্ডসার্ফিং"
    },
    {
      "en": "Paddleboarding",
      "bn": "প্যাডেলবোর্ডিং"
    },
    {
      "en": "Canoeing",
      "bn": "ক্যানোয়িং"
    },
    {
      "en": "Kayaking",
      "bn": "কায়াকিং"
    },
    {
      "en": "Rafting",
      "bn": "রাফটিং"
    },
    {
      "en": "Horse Racing",
      "bn": "ঘোড়দৌড়"
    },
    {
      "en": "Show Jumping",
      "bn": "শো জাম্পিং"
    },
    {
      "en": "Dressage",
      "bn": "ড্রেসাজ"
    },
    {
      "en": "Motorcycle Racing",
      "bn": "মোটরসাইকেল রেসিং"
    },
    {
      "en": "Formula One",
      "bn": "ফর্মুলা ওয়ান"
    },
    {
      "en": "Rallying",
      "bn": "র‌্যালিং"
    },
    {
      "en": "Motocross",
      "bn": "মোটোক্রস"
    },
    {
      "en": "BMX Racing",
      "bn": "বিএমএক্স রেসিং"
    },
    {
      "en": "Track and Field",
      "bn": "ট্র্যাক অ্যান্ড ফিল্ড"
    },
    {
      "en": "Cross Country",
      "bn": "ক্রস কান্ট্রি"
    },
    {
      "en": "Ultramarathon",
      "bn": "আল্ট্রাম্যারাথন"
    },
    {
      "en": "Ironman Triathlon",
      "bn": "আয়রনম্যান ট্রায়াথলন"
    },
    {
      "en": "Mixed Martial Arts",
      "bn": "মিক্সড মার্শাল আর্টস"
    },
    {
      "en": "Kickboxing",
      "bn": "কিকবক্সিং"
    },
    {
      "en": "Muay Thai",
      "bn": "মুয়ে থাই"
    },
    {
      "en": "Jiu Jitsu",
      "bn": "জিউ জিতসু"
    },
    {
      "en": "Sumo Wrestling",
      "bn": "সুমো রেসলিং"
    },
    {
      "en": "Capoeira",
      "bn": "ক্যাপোয়েরা"
    },
    {
      "en": "Tai Chi",
      "bn": "তাই চি"
    },
    {
      "en": "Yoga",
      "bn": "যোগব্যায়াম"
    },
    {
      "en": "Pilates",
      "bn": "পাইলেটস"
    },
    {
      "en": "Aerobics",
      "bn": "অ্যারোবিকস"
    },
    {
      "en": "Zumba",
      "bn": "জুম্বা"
    },
    {
      "en": "CrossFit",
      "bn": "ক্রসফিট"
    }
  ],
  "filterFree": [
    { "en": "Dhon", "bn": "ধন" },
    { "en": "Bara", "bn": "বাড়া" },
    { "en": "Lawra", "bn": "লওরা" },
    { "en": "Boga", "bn": "বোগা" },
    { "en": "Gud", "bn": "গুদ" },
    { "en": "Bhoda", "bn": "ভোদা" },
    { "en": "Pod", "bn": "পোদ" },
    { "en": "Gaand", "bn": "গাঁড়" },
    { "en": "Putki", "bn": "পুটকি" },
    { "en": "Bichi", "bn": "বিচি" },
    { "en": "Bal", "bn": "বাল" },
    { "en": "Khanki", "bn": "খানকি" },
    { "en": "Magi", "bn": "মাগি" },
    { "en": "Randi", "bn": "রান্ডি" },
    { "en": "Beshya", "bn": "বেশ্যা" },
    { "en": "Choda", "bn": "চোদা" },
    { "en": "Chudmarani", "bn": "চুদমারানি" },
    { "en": "Madarchod", "bn": "মাদারচোদ" },
    { "en": "Bainchod", "bn": "বাইনচোদ" },
    { "en": "Bokachoda", "bn": "বোকাচোদা" },
    { "en": "Haramjada", "bn": "হারামজাদা" },
    { "en": "Magir Pola", "bn": "মাগির পোলা" },
    { "en": "Khankir Chele", "bn": "খানকির ছেলে" },
    { "en": "Gandu", "bn": "গান্ডু" },
    { "en": "Sagolchoda", "bn": "সাগলচোদা" },
    { "en": "Goruchoda", "bn": "গরুচোদা" },
    { "en": "Kuttar Baccha", "bn": "কুত্তার বাচ্চা" },
    { "en": "Tor Ma Er Gud", "bn": "তোর মা এর গুদ" },
    { "en": "Pedo Gangaram", "bn": "পেদো গঙ্গারাম" },
    { "en": "Dhoner Sata", "bn": "ধনের সাতা" },
    { "en": "Pod Marani", "bn": "পোদ মারানি" },
    { "en": "Gushtir Gud", "bn": "গুষ্টির গুদ" },
    { "en": "Laewra Aga", "bn": "লেওরা আগা" },
    { "en": "Sutmarawni", "bn": "সুতমারানি" },
    { "en": "Foga", "bn": "ফোগা" },
    { "en": "Mainkar Chipa", "bn": "মাইনকার চিপা" },
    { "en": "Hogar Nati", "bn": "হোগার নাতি" },
    { "en": "Mashiker Nekra", "bn": "মাসিকের নেকড়া" },
    { "en": "Gude Acid", "bn": "গুদে অ্যাসিড" },
    { "en": "Bal Kaita", "bn": "বাল কাটা" },
    { "en": "Nengta Magi", "bn": "নেংটা মাগি" },
    { "en": "Tor Boti Tera", "bn": "তোর বোটি তেরা" },
    { "en": "Amar Boga Chosh", "bn": "আমার বোগা চোষ" },
    { "en": "Chudir Bhai", "bn": "চুদির ভাই" },
    { "en": "Khankir Nati", "bn": "খানকির নাতি" },
    { "en": "Gude Gandho", "bn": "গুদে গন্ধ" },
    { "en": "Kabar Khude Chudbo", "bn": "কবর খুঁড়ে চুদবো" },
    { "en": "Tor Ma Sagol", "bn": "তোর মা সাগল" },
    { "en": "Tor Bap Putki", "bn": "তোর বাপ পুটকি" },
    { "en": "Dhon Khecha", "bn": "ধন খ্যাঁচা" },
    { "en": "Gaand Maarano", "bn": "গাঁড় মারানো" },
    { "en": "Bessha Magir Pola", "bn": "বেশ্যা মাগির পোলা" },
    { "en": "Hetamarani", "bn": "হেতামারানি" },
    { "en": "Hauar Pola", "bn": "হাওয়ার পোলা" },
    { "en": "Leora", "bn": "লেওরা" },
    { "en": "Voda", "bn": "ভোডা" },
    { "en": "Choti Boi", "bn": "ছোটি বই" },
    { "en": "Jouno Kaj", "bn": "যৌন কাজ" },
    { "en": "Pani Fela", "bn": "পানি ফেলা" },
    { "en": "Mal Berocche", "bn": "মাল বেরোচ্ছে" },
    { "en": "Jore Thap", "bn": "জোরে থাপ" },
    { "en": "Asthe Dhokao", "bn": "আস্তে ঢোকাও" },
    { "en": "Gud Fatiye De", "bn": "গুদ ফাটিয়ে দে" },
    { "en": "Pod E Dhukiye", "bn": "পোদ এ ঢুকিয়ে" },
    { "en": "Dudh Chapa", "bn": "দুধ চাপা" },
    { "en": "Mai Chosh", "bn": "মাই চোষ" },
    { "en": "Shala", "bn": "শালা" },
    { "en": "Shali", "bn": "শালি" },
    { "en": "Boka Pola", "bn": "বোকা পোলা" },
    { "en": "Haramgadi", "bn": "হারামগাদি" },
    { "en": "Thor Bhap", "bn": "তোর ভাপ" },
    { "en": "Gudey Khuski", "bn": "গুদে খুসকি" },
    { "en": "Dhon Terra", "bn": "ধন তেরা" },
    { "en": "Maaer Gud", "bn": "মায়ের গুদ" },
    { "en": "Baper Poda", "bn": "বাপের পোদ" },
    { "en": "Chude Marani", "bn": "চুদে মারানি" },
    { "en": "Pagla Choda", "bn": "পাগলা চোদা" },
    { "en": "Adhagodha", "bn": "অধাগোধা" },
    { "en": "Kuthar Sow", "bn": "কুত্তার সাও" },
    { "en": "Thor Boga", "bn": "তোর বোগা" },
    { "en": "Goo Kah", "bn": "গু খা" },
    { "en": "Bash Mara", "bn": "বাস মারা" },
    { "en": "Chude Maranir Pola", "bn": "চুদে মারানির পোলা" },
    { "en": "Pedo Pandit", "bn": "পেদো পন্ডিত" },
    { "en": "Tor Dudhe Peshab", "bn": "তোর দুধে পেশাব" },
    { "en": "Tor Ma Doshti Buni", "bn": "তোর মা দশটি বুনি" },
    { "en": "Tui Goru", "bn": "তুই গরু" },
    { "en": "Tor Maa Sagol", "bn": "তোর মা সাগল" },
    { "en": "Baing Chood", "bn": "বাইং চুদ" },
    { "en": "Tor Baper Pasa", "bn": "তোর বাপের পাসা" },
    { "en": "Kutur Kutti", "bn": "কুতুর কুত্তি" },
    { "en": "Jowhra", "bn": "জোহরা" },
    { "en": "Tor Gesai Boto Nai", "bn": "তোর গেসাই বোটো নাই" },
    { "en": "Chuder Bhai", "bn": "চুদের ভাই" },
    { "en": "Amar Nunu Chosh", "bn": "আমার নুনু চোষ" },
    { "en": "Tui Shwor", "bn": "তুই শুয়োর" },
    { "en": "Doggy Style", "bn": "ডগি স্টাইল" },
    { "en": "Cowgirl", "bn": "কাউগার্ল" },
    { "en": "Reverse Cowgirl", "bn": "রিভার্স কাউগার্ল" },
    { "en": "Missionary", "bn": "মিশনারি" },
    { "en": "69", "bn": "৬৯" },
    { "en": "Spooning", "bn": "স্পুনিং" },
    { "en": "Lotus Position", "bn": "লোটাস পজিশন" },
    { "en": "Pile Driver", "bn": "পাইল ড্রাইভার" },
    { "en": "Wall Press", "bn": "ওয়াল প্রেস" },
    { "en": "Standing Doggy", "bn": "স্ট্যান্ডিং ডগি" },
    { "en": "Titfuck", "bn": "টিটফাক" },
    { "en": "Creampie", "bn": "ক্রিমপাই" },
    { "en": "Facial", "bn": "ফেসিয়াল" },
    { "en": "Rimjob", "bn": "রিমজব" },
    { "en": "Blowjob", "bn": "ব্লোজব" },
    { "en": "Deepthroat", "bn": "ডিপথ্রোট" },
    { "en": "Handjob", "bn": "হ্যান্ডজব" },
    { "en": "Fingering", "bn": "ফিঙ্গারিং" },
    { "en": "Fisting", "bn": "ফিস্টিং" },
    { "en": "Anal", "bn": "অ্যানাল" },
    { "en": "Double Penetration", "bn": "ডাবল পেনিট্রেশন" },
    { "en": "Threesome", "bn": "থ্রিসাম" },
    { "en": "Gangbang", "bn": "গ্যাংব্যাং" },
    { "en": "Orgy", "bn": "অর্গি" },
    { "en": "Cuckold", "bn": "কাকোল্ড" },
    { "en": "Hotwife", "bn": "হটওয়াইফ" },
    { "en": "Bondage", "bn": "বন্ডেজ" },
    { "en": "BDSM", "bn": "বিডিএসএম" },
    { "en": "Choking Sex", "bn": "চোকিং সেক্স" },
    { "en": "Spanking", "bn": "স্প্যাঙ্কিং" },
    { "en": "Roleplay", "bn": "রোলপ্লে" },
    { "en": "Public Sex", "bn": "পাবলিক সেক্স" },
    { "en": "Car Sex", "bn": "কার সেক্স" },
    { "en": "Shower Sex", "bn": "শাওয়ার সেক্স" },
    { "en": "Kitchen Sex", "bn": "কিচেন সেক্স" },
    { "en": "Balcony Sex", "bn": "বারান্দা সেক্স" },
    { "en": "Mirror Sex", "bn": "মিরর সেক্স" },
    { "en": "Blindfold", "bn": "ব্লাইন্ডফোল্ড" },
    { "en": "Handcuff", "bn": "হ্যান্ডকাফ" },
    { "en": "Whip Play", "bn": "হুইপ প্লে" },
    { "en": "Gud Dhokao", "bn": "গুদ ঢোকাও" },
    { "en": "Pod Maro", "bn": "পোদ মারো" },
    { "en": "Dudh Chosh", "bn": "দুধ চোষ" },
    { "en": "Mal Fela", "bn": "মাল ফেলা" },
    { "en": "Jore Thap Mar", "bn": "জোরে থাপ মার" },
    { "en": "Asthe Asthe Dhokao", "bn": "আস্তে আস্তে ঢোকাও" },
    { "en": "Gud Fatiye De", "bn": "গুদ ফাটিয়ে দে" },
    { "en": "Pod E Dhukiye", "bn": "পোদ এ ঢুকিয়ে" },
    { "en": "Mukh Dao", "bn": "মুখ দাও" },
    { "en": "Baire Felo", "bn": "বাইরে ফেলো" },
    { "en": "Vetore Mal", "bn": "ভেতরে মাল" },
    { "en": "Dudh Gulo Tip", "bn": "দুধ গুলো টিপ" },
    { "en": "Mai Chapa", "bn": "মাই চাপা" },
    { "en": "Gaand Me Thap", "bn": "গাঁড় মে থাপ" },
    { "en": "Bhije Gud", "bn": "ভিজে গুদ" },
    { "en": "Khara Dhon", "bn": "খাড়া ধন" },
    { "en": "Chodo Jore", "bn": "চোদো জোরে" },
    { "en": "Randi Banaye", "bn": "রান্ডি বানায়ে" },
    { "en": "Sara Raat Chodo", "bn": "সারা রাত চোদো" },
    { "en": "Shilnora Diye", "bn": "শিলনোড়া দিয়ে" },
    { "en": "Gud Ta Mar", "bn": "গুদ টা মার" },
    { "en": "Pod Ta Fatiye", "bn": "পোদ টা ফাটিয়ে" },
    { "en": "Dhon Ghora", "bn": "ধন ঘোরা" },
    { "en": "Mal Felbo", "bn": "মাল ফেলবো" },
    { "en": "Mukh Chosh", "bn": "মুখ চোষ" },
    { "en": "Angul Dhokao", "bn": "আঙুল ঢোকাও" },
    { "en": "Dhon Tip", "bn": "ধন টিপ" },
    { "en": "Bara Chapa", "bn": "বাড়া চাপা" },
    { "en": "Lawra Dhukao", "bn": "লওরা ঢোকাও" },
    { "en": "Boga Mar", "bn": "বোগা মার" },
    { "en": "Gudey Dhon", "bn": "গুদে ধন" },
    { "en": "Bhoda Chodo", "bn": "ভোদা চোদো" },
    { "en": "Putki Chodo", "bn": "পুটকি চোদো" },
    { "en": "Bichi Chapa", "bn": "বিচি চাপা" },
    { "en": "Bal Chere", "bn": "বাল ছিঁড়ে" },
    { "en": "Khanki Chodo", "bn": "খানকি চোদো" },
    { "en": "Magi Thap", "bn": "মাগি থাপ" },
    { "en": "Randi Mal", "bn": "রান্ডি মাল" },
    { "en": "Beshya Berocche", "bn": "বেশ্যা বেরোচ্ছে" },
    { "en": "Choda Jore", "bn": "চোদা জোরে" },
    { "en": "Madar Chodo", "bn": "মাদার চোদো" },
    { "en": "Bain Magi", "bn": "বাইন মাগি" },
    { "en": "Boka Randi", "bn": "বোকা রান্ডি" },
    { "en": "Haram Dhon", "bn": "হারাম ধন" },
    { "en": "Kutta Pod", "bn": "কুত্তা পোদ" },
    { "en": "Hati Gud", "bn": "হাতি গুদ" },
    { "en": "Sagol Chodo", "bn": "সাগল চোদো" },
    { "en": "Goru Magi", "bn": "গরু মাগি" },
    { "en": "Baing Choda", "bn": "বাইং চোদা" },
    { "en": "Tor Ma Chodo", "bn": "তোর মা চোদো" },
    { "en": "Tor Bap Randi", "bn": "তোর বাপ রান্ডি" },
    { "en": "Gud Tel", "bn": "গুদ তেল" },
    { "en": "Pod Mal", "bn": "পোদ মাল" },
    { "en": "Dhon Mal", "bn": "ধন মাল" },
    { "en": "Full Night Bash", "bn": "ফুল নাইট বাস" },
    { "en": "Randi Magi Chodo", "bn": "রান্ডি মাগি চোদো" },
    { "en": "Gud Ta Jore Mar", "bn": "গুদ টা জোরে মার" },
    { "en": "Ganja", "bn": "গাঁজা" },
    { "en": "Bhang", "bn": "ভাং" },
    { "en": "Charas", "bn": "চরস" },
    { "en": "Afeem", "bn": "আফিম" },
    { "en": "Chandu", "bn": "চান্দু" },
    { "en": "Brown Sugar", "bn": "ব্রাউন সুগার" },
    { "en": "Shabu", "bn": "শাবু" },
    { "en": "Ya Ba", "bn": "ইয়াবা" },
    { "en": "Ganja High", "bn": "গাঁজা হাই" },
    { "en": "Bhang Kheye", "bn": "ভাং খেয়ে" },
    { "en": "Charas Tan", "bn": "চরস টান" },
    { "en": "Afeem Lagano", "bn": "আফিম লাগানো" },
    { "en": "Shabu Chodo", "bn": "শাবু চোদো" },
    { "en": "Ya Ba High", "bn": "ইয়াবা হাই" },
    { "en": "Ganja Dhon", "bn": "গাঁজা ধন" },
    { "en": "Bhang Gud", "bn": "ভাং গুদ" },
    { "en": "Charas Randi", "bn": "চরস রান্ডি" },
    { "en": "Afeem Magi", "bn": "আফিম মাগি" },
    { "en": "High Hoye Chodo", "bn": "হাই হয়ে চোদো" },
    { "en": "Ganja Kheye", "bn": "গাঁজা খেয়ে" },
    { "en": "Bhang Effect", "bn": "ভাং ইফেক্ট" },
    { "en": "Charas Mal", "bn": "চরস মাল" },
    { "en": "Afeem Berocche", "bn": "আফিম বেরোচ্ছে" },
    { "en": "Shabu Jore", "bn": "শাবু জোরে" },
    { "en": "Ya Ba Dhokao", "bn": "ইয়াবা ঢোকাও" },
    { "en": "Drug High", "bn": "ড্রাগ হাই" },
    { "en": "Weed", "bn": "উইড" },
    { "en": "Hash", "bn": "হ্যাশ" },
    { "en": "Opium", "bn": "অপিয়াম" },
    { "en": "Heroin", "bn": "হেরোইন" },
    { "en": "Cocaine", "bn": "কোকেইন" },
    { "en": "MDMA", "bn": "এমডিএমএ" },
    { "en": "LSD", "bn": "এলএসডি" },
    { "en": "Ketamine", "bn": "কেটামিন" },
    { "en": "Pill", "bn": "পিল" },
    { "en": "Tablet", "bn": "ট্যাবলেট" },
    { "en": "Supari Mix", "bn": "সুপারি মিক্স" },
    { "en": "Betel Nut High", "bn": "বিটেল নাট হাই" },
    { "en": "Maal", "bn": "মাল" },
    { "en": "Dope", "bn": "ডোপ" },
    { "en": "Stuff", "bn": "স্টাফ" },
    { "en": "Kheyechi", "bn": "খেয়েছি" },
    { "en": "Dhorechi", "bn": "ধরেছি" },
    { "en": "High Level", "bn": "হাই লেভেল" },
    { "en": "Trip", "bn": "ট্রিপ" },
    { "en": "Chill", "bn": "চিল" },
    { "en": "Ganja Tan", "bn": "গাঁজা টান" },
    { "en": "Bhang Drink", "bn": "ভাং ড্রিঙ্ক" },
    { "en": "Charas Smoke", "bn": "চরস স্মোক" },
    { "en": "Afeem Eat", "bn": "আফিম ইট" },
    { "en": "Shabu Powder", "bn": "শাবু পাউডার" },
    { "en": "Ya Ba Pill", "bn": "ইয়াবা পিল" },
    { "en": "Brown Chodo", "bn": "ব্রাউন চোদো" },
    { "en": "Ganja Randi", "bn": "গাঁজা রান্ডি" },
    { "en": "High Magi", "bn": "হাই মাগি" },
    { "en": "Drug Bash Mara", "bn": "ড্রাগ বাস মারা" },
    { "en": "Weed Gud", "bn": "উইড গুদ" },
    { "en": "Hash Pod", "bn": "হ্যাশ পোদ" },
    { "en": "Opium Dhon", "bn": "অপিয়াম ধন" },
    { "en": "Heroin Mal", "bn": "হেরোইন মাল" },
    { "en": "Coke High", "bn": "কোক হাই" },
    { "en": "MDMA Fuck", "bn": "এমডিএমএ ফাক" },
    { "en": "LSD Trip", "bn": "এলএসডি ট্রিপ" },
    { "en": "Ketamine Hole", "bn": "কেটামিন হোল" },
    { "en": "Pill Khanki", "bn": "পিল খানকি" },
    { "en": "Supari Choda", "bn": "সুপারি চোদা" },
    { "en": "Betel High", "bn": "বিটেল হাই" },
    { "en": "Maal Fela", "bn": "মাল ফেলা" },
    { "en": "Dope Chodo", "bn": "ডোপ চোদো" },
    { "en": "Stuff Dhokao", "bn": "স্টাফ ঢোকাও" },
    { "en": "Kheye High", "bn": "খেয়ে হাই" },
    { "en": "Dhore Trip", "bn": "ধরে ট্রিপ" },
    { "en": "Ganja Jore", "bn": "গাঁজা জোরে" },
    { "en": "Bhang Asthe", "bn": "ভাং আস্তে" },
    { "en": "Charas Berocche", "bn": "চরস বেরোচ্ছে" },
    { "en": "Afeem Gud", "bn": "আফিম গুদ" },
    { "en": "Shabu Pod", "bn": "শাবু পোদ" },
    { "en": "Ya Ba Dhon", "bn": "ইয়াবা ধন" },
    { "en": "Brown Sugar Magi", "bn": "ব্রাউন সুগার মাগি" },
    { "en": "Weed Chodo", "bn": "উইড চোদো" },
    { "en": "Hash Mal", "bn": "হ্যাশ মাল" },
    { "en": "Opium Randi", "bn": "অপিয়াম রান্ডি" },
    { "en": "Heroin High", "bn": "হেরোইন হাই" },
    { "en": "Coke Dhokao", "bn": "কোক ঢোকাও" },
    { "en": "MDMA Jore", "bn": "এমডিএমএ জোরে" },
    { "en": "LSD Gud", "bn": "এলএসডি গুদ" },
    { "en": "Ketamine Chosh", "bn": "কেটামিন চোষ" },
    { "en": "Pill Fela", "bn": "পিল ফেলা" },
    { "en": "Supari Pod", "bn": "সুপারি পোদ" },
    { "en": "Betel Nut Dhon", "bn": "বিটেল নাট ধন" },
    { "en": "Maal Chodo", "bn": "মাল চোদো" },
    { "en": "Dope High", "bn": "ডোপ হাই" },
    { "en": "Stuff Randi", "bn": "স্টাফ রান্ডি" },
    { "en": "Kheye Magi", "bn": "খেয়ে মাগি" },
    { "en": "Dhore Chodo", "bn": "ধরে চোদো" },
    { "en": "Incest", "bn": "ইনসেস্ট" },
    { "en": "Molestation", "bn": "মলেস্টেশন" },
    { "en": "Rape", "bn": "রেপ" },
    { "en": "Prostitute", "bn": "প্রস্টিটিউট" },
    { "en": "Sex Slave", "bn": "সেক্স স্লেভ" },
    { "en": "BDSM", "bn": "বিডিএসএম" },
    { "en": "Bondage", "bn": "বন্ডেজ" },
    { "en": "Choking", "bn": "চোকিং" },
    { "en": "Gangbang", "bn": "গ্যাংব্যাং" },
    { "en": "Orgy", "bn": "অর্গি" },
    { "en": "Swingers", "bn": "সুইঙ্গার্স" },
    { "en": "Cuckold", "bn": "কাকোল্ড" },
    { "en": "Hotwife", "bn": "হটওয়াইফ" },
    { "en": "Threesome", "bn": "থ্রিসাম" },
    { "en": "Public Sex", "bn": "পাবলিক সেক্স" },
    { "en": "Car Sex", "bn": "কার সেক্স" },
    { "en": "Shower Sex", "bn": "শাওয়ার সেক্স" },
    { "en": "Kitchen Sex", "bn": "কিচেন সেক্স" },
    { "en": "Balcony Sex", "bn": "বারান্দা সেক্স" },
    { "en": "Mirror Sex", "bn": "মিরর সেক্স" },
    { "en": "Blindfold Sex", "bn": "ব্লাইন্ডফোল্ড সেক্স" },
    { "en": "Handcuff Play", "bn": "হ্যান্ডকাফ প্লে" },
    { "en": "Whip", "bn": "হুইপ" },
    { "en": "Roleplay", "bn": "রোলপ্লে" },
    { "en": "Daddy Play", "bn": "ড্যাডি প্লে" },
    { "en": "Teacher Student", "bn": "টিচার স্টুডেন্ট" },
    { "en": "Doctor Patient", "bn": "ডাক্তার পেশেন্ট" },
    { "en": "Boss Secretary", "bn": "বস সেক্রেটারি" },
    { "en": "Rape Fantasy", "bn": "রেপ ফ্যান্টাসি" },
    { "en": "Forced Sex", "bn": "ফোর্সড সেক্স" },
    { "en": "Creampie", "bn": "ক্রিমপাই" },
    { "en": "Breeding", "bn": "ব্রিডিং" },
    { "en": "Cum Play", "bn": "কাম প্লে" },
    { "en": "Piss Play", "bn": "পিস প্লে" },
    { "en": "Scat", "bn": "স্ক্যাট" },
    { "en": "Foot Fetish", "bn": "ফুট ফেটিশ" },
    { "en": "Armpit", "bn": "আর্মপিট" },
    { "en": "Lactation", "bn": "ল্যাকটেশন" },
    { "en": "Pregnancy Sex", "bn": "প্রেগন্যান্সি সেক্স" },
    { "en": "Virgin", "bn": "ভার্জিন" },
    { "en": "Deflower", "bn": "ডিফ্লাওয়ার" },
    { "en": "Taboo", "bn": "ট্যাবু" },
    { "en": "Forbidden", "bn": "ফরবিডেন" },
    { "en": "Step Sister", "bn": "স্টেপ সিস্টার" },
    { "en": "Step Mother", "bn": "স্টেপ মাদার" },
    { "en": "Step Brother", "bn": "স্টেপ ব্রাদার" },
    { "en": "Step Father", "bn": "স্টেপ ফাদার" },
    { "en": "Age Play", "bn": "এজ প্লে" },
    { "en": "Pet Play", "bn": "পেট প্লে" },
    { "en": "Master Slave", "bn": "মাস্টার স্লেভ" },
    { "en": "Dominatrix", "bn": "ডমিনেট্রিক্স" },
    { "en": "Submissive", "bn": "সাবমিসিভ" },
    { "en": "Sadist", "bn": "স্যাডিস্ট" },
    { "en": "Masochist", "bn": "ম্যাসোকিস্ট" },
    { "en": "Voyeur", "bn": "ভয়েউর" },
    { "en": "Exhibitionist", "bn": "এক্সিবিশনিস্ট" },
    { "en": "Glory Hole", "bn": "গ্লোরি হোল" },
    { "en": "Swing Club", "bn": "সুইং ক্লাব" },
    { "en": "Nude Beach", "bn": "ন্যুড বিচ" },
    { "en": "Sex Party", "bn": "সেক্স পার্টি" },
    { "en": "Orgasm Denial", "bn": "অর্গাজম ডিনায়াল" },
    { "en": "Edging", "bn": "এজিং" },
    { "en": "Squirt", "bn": "স্কোয়ার্ট" },
    { "en": "Female Ejaculation", "bn": "ফিমেল ইজ্যাকুলেশন" },
    { "en": "Multiple Orgasm", "bn": "মাল্টিপল অর্গাজম" },
    { "en": "Dry Hump", "bn": "ড্রাই হাম্প" },
    { "en": "Grinding", "bn": "গ্রাইন্ডিং" },
    { "en": "Humping", "bn": "হাম্পিং" },
    { "en": "Nipple Play", "bn": "নিপল প্লে" },
    { "en": "Clit Play", "bn": "ক্লিট প্লে" },
    { "en": "Prostate Play", "bn": "প্রোস্টেট প্লে" },
    { "en": "Pegging", "bn": "পেগিং" },
    { "en": "Strap On", "bn": "স্ট্র্যাপ অন" },
    { "en": "Dildo", "bn": "ডিলডো" },
    { "en": "Vibrator", "bn": "ভাইব্রেটর" },
    { "en": "Butt Plug", "bn": "বাট প্লাগ" },
    { "en": "Anal Beads", "bn": "অ্যানাল বিডস" },
    { "en": "Sex Toy", "bn": "সেক্স টয়" },
    { "en": "Lingerie", "bn": "লিঙ্গেরি" },
    { "en": "Nude", "bn": "ন্যুড" },
    { "en": "Striptease", "bn": "স্ট্রিপটিজ" },
    { "en": "Lap Dance", "bn": "ল্যাপ ড্যান্স" },
    { "en": "Pole Dance", "bn": "পোল ড্যান্স" },
    { "en": "Dirty Talk", "bn": "ডার্টি টক" },
    { "en": "Bengali Dirty Talk", "bn": "বাংলা ডার্টি টক" },
    { "en": "Moaning", "bn": "মোয়ানিং" },
    { "en": "Aaah Maa Go", "bn": "আআহ মা গো" },
    { "en": "Jore Chodo", "bn": "জোরে চোদো" },
    { "en": "Randi Banaye", "bn": "রান্ডি বানায়ে" },
    { "en": "Tor Gud", "bn": "তোর গুদ" },
    { "en": "Amar Dhon", "bn": "আমার ধন" },
    { "en": "Mal Felbo", "bn": "মাল ফেলবো" },
    { "en": "Mukh Dao", "bn": "মুখ দাও" },
    { "en": "Pod Mar", "bn": "পোদ মার" },
    { "en": "Gud Fatiye", "bn": "গুদ ফাটিয়ে" }
  ]
};

module.exports = words;
