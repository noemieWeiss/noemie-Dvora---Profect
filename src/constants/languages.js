// src/constants/languages.js

// Define keyboard layouts for each supported language
export const availableKeys = {
  en: [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '
  ],
  he: [
    'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'כ', 'ל', 'מ',
    'נ', 'ס', 'ע', 'פ', 'צ', 'ק', 'ר', 'ש', 'ת', 'ן', 'ם', 'ף', 'ץ', 'ך',' '
  ],
  emoji: [
    '😊', '😂', '😍', '😎', '🥳', '😢', '😜', '🙌', '🎉', '🚀',
    '❤️', '⭐', '🌟', '🍎', '🍕', '🎈', '🌈', '🔥', '💯', '✨'
  ],
  numbers: [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
  ],
  symbols: [
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', 
    '[', ']', '{', '}', '|', '\\', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/', '~', '`'
  ]
};

// Optional: Define language metadata (e.g., display names for the LanguageSelector)
export const languageOptions = [
  { value: 'en', label: 'English' },
  { value: 'he', label: 'עברית' },
  { value: 'emoji', label: 'Emojis' },
  { value: 'numbers', label: 'Numbers' },
  { value: 'symbols', label: 'Symbols' }
];