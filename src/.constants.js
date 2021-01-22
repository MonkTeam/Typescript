module.exports = Object.freeze({
  TOKEN: '1566501627:AAGAmDO8h29SA4z3EwOYtL-MYxokZytryzw',
  ARIA_SECRET: 'aitorrentware@2020',
  ARIA_DOWNLOAD_LOCATION: '/aria-telegram-mirror-bot/downloads',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: [], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: [], // Files/top level directories with these substrings in the filename won't be downloaded
  ARIA_PORT: 8210, // Port for aria2c RPC server, if you change this here, make sure to update aria.sh as well
  GDRIVE_PARENT_DIR_ID: '1cYADLvCWzQWZ4Vls-NcF3TsjaQffqOkQ',
  OTHER_GDRIVE_DIR_IDS: [], // This is needed if u want to look for files in multiple dirs on list command
  SUDO_USERS: [1004538768, 1327934109, 1566501627, 1054316613, 1152240399, 960156861, 761781845],	// Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [-1001491078689],	// Telegram chat IDs. Anyone in these chats can use the bot.
  STATUS_UPDATE_INTERVAL_MS: 12000, // A smaller number will update faster, but might cause rate limiting
  DRIVE_FILE_PRIVATE: {
    ENABLED: false,
    EMAILS: ['someMail@gmail.com', 'someOtherMail@gmail.com']
  },
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  },
  COMMANDS_USE_BOT_NAME: {
    ENABLED: true,  // If true, all commands except '/list' has to have the bot username after the command
    NAME: "@AiDriveLink_Bot"
  },
  IS_TEAM_DRIVE: true,
  USE_SERVICE_ACCOUNT: true,
  INDEX_DOMAIN: "https://6.aitorrent-ware.workers.dev/Bot%20Uploads",
  TELEGRAPH_TOKEN: '1ffcd8130e82675b514d8f50c40284c2b4517cd3d66b7facb285e3d6484c' // Telegraph token, if you want to show search results in telegra.ph else keep it blank
});
