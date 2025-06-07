const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "𝐋ᴀᴋᴀ-𝐌ᴅ=h4oxHLBb#8NYX0dlkNnNeXqOM7bKiEA8oEVjLOz6GbVJ7Y050GY8",
  POSTGRESQL_URL: process.env.POSTGRESQL_URL || "your-db-url",
  AUTO_REPLY: false,
  AUTO_AUDIO_REPLY: true,
  AUTO_STATUS_SEEN: true,
  AUTO_STATUS_REACT: true,
  AUTO_STICKER_REPLY: false,      // reply with sticker
  AUTO_EMOJI_REACT: false,        // react with emoji
  AUTO_REPLY_COMMANDS: false,     // enable command auto replies
  ANTI_BOT: false,
  ANTI_LINK: false,
  ANTI_BAD_WORDS: true,
  ANTI_CALL: false,
  ANTI_DELETE: false,             // detect deleted messages
  ANTI_VIEW_ONCE: false,          // reveal view once messages
  ANTI_BAN: true,
  OWNER_NAME: "Rrohana kumara",
  OWNER_NUMBER: "94724120451",
  OWNER_GITHUB: "https://github.com/lakinduox",
  BOT_NAME: "Laka MD",
  BOT_VERSION: "v3.0.0",
  BOT_LANG: "si",                // 'en', 'si', 'hi', etc.
  BOT_REACT_EMOJI: "🤖",
  WELCOME_MESSAGE: "👋 හෙලෝ! මම rohana!",
  GOODBYE_MESSAGE: "👋 ජයවේවා!",
  AUTO_REPLY_TEXT: "ඔයාට උදව් ඕනද? 💬",
  ERROR_MESSAGE: "⚠️ දෝෂයක් වෙලා",
  COOLDOWN_TIME: 1,             // seconds between same commands
  COMMAND_PREFIX: ".",
  ENABLE_LOGS: false,
  ENABLE_DEBUG: false,
};
