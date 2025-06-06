const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
  // 💾 Session & Database
  SESSION_ID: process.env.SESSION_ID || "𝐋ᴀᴋᴀ-𝐌ᴅ=h4oxHLBb#8NYX0dlkNnNeXqOM7bKiEA8oEVjLOz6GbVJ7Y050GY8",
  POSTGRESQL_URL: process.env.POSTGRESQL_URL || "your-db-url",

  // 🤖 Auto features
  AUTO_REPLY: true,
  AUTO_AUDIO_REPLY: true,
  AUTO_STATUS_SEEN: true,
  AUTO_STATUS_REACT: true,
  AUTO_STICKER_REPLY: true,      // reply with sticker
  AUTO_EMOJI_REACT: true,        // react with emoji
  AUTO_REPLY_COMMANDS: true,     // enable command auto replies

  // 🛡️ Protection features
  ANTI_BOT: true,
  ANTI_LINK: true,
  ANTI_BAD_WORDS: true,
  ANTI_CALL: true,
  ANTI_DELETE: true,             // detect deleted messages
  ANTI_VIEW_ONCE: true,          // reveal view once messages
  ANTI_BAN: true,

  // 👑 Owner Info
  OWNER_NAME: "Lakindu Mihiran",
  OWNER_NUMBER: "947726130869",
  OWNER_INSTAGRAM: "https://instagram.com/your_profile",
  OWNER_GITHUB: "https://github.com/lakinduox",

  // 🤖 Bot Info
  BOT_NAME: "Laka MD",
  BOT_VERSION: "v3.0.0",
  BOT_LANG: "si",                // 'en', 'si', 'hi', etc.
  BOT_REACT_EMOJI: "🤖",

  // 💬 UI Messages
  WELCOME_MESSAGE: "👋 හෙලෝ! මම Laka MD බොට් එක!",
  GOODBYE_MESSAGE: "👋 ජයවේවා!",
  AUTO_REPLY_TEXT: "ඔයාට උදව් ඕනද? 💬",
  ERROR_MESSAGE: "⚠️ දෝෂයක් වෙලා",
  
  // 🛠 Control
  COOLDOWN_TIME: 3,             // seconds between same commands
  COMMAND_PREFIX: ".",
  ENABLE_LOGS: true,
  ENABLE_DEBUG: false,
};
