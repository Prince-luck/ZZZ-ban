//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "no@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Nigeria/Lagos";
global.github = process.env.GITHUB || "https://github.com/Prince-luck/ZZZ-ban";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vacs3IIIiRp0FeDDcJ1G";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vacs3IIIiRp0FeDDcJ1G";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/Izl8wT1.jpeg";
global.devs = "none";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349129361416";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/Xiqru2L.jpeg,https://i.imgur.com/Izl8wT1.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUNISkdsLzFNckRlYUdhRTNQZXVTZml3bHFPWkxMTS9JcTduaTNPTU5IUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmNlSVZ4TGNqRDM4L2M0bzhieGtuWWt2b3N0cHcwNlZleTdNNWNud1JHYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVTHpVWVlxVUp2eWI3ZXZyWlhEZU1RYUlOZHV3MU5haElSK2Zlb05oVUVVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqejNmaTdtbzlrZkQvOHFlUWtudzJwUXdaR0p4MVJNU3ZTY0NrMERwZkJFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFNaHBvR1ppb2xGK21sK3BjUWdCWTlzVVVabWZxeURaSS9uTE5FM2tmMGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhDbW9hL0JGblRHMmZGbjZ5blA0SlRBckVrRjcxQUxBenNtaExOZlV2alk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUkyMkhDTVFSL1paaHc0WHF5TEZSZlM3aUdVUHpwcm81R2RpR0xYS2hXWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM1B4dWY4MTQwQnR0VG9RekJBYk5xUHBUZU9lYUZwcmhIYmh1NDc5c3RVWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRGZkVXSXRKOGpHSFRWbTVLOVBmL0ZtSGR6UE9JMHVKaUE0TDMvTGVScWtLVEpHTFJ1S1MvU0Q1cklvK1RuRWN4Tys5clA0blpkUEMwQU03R0VnVERRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcxLCJhZHZTZWNyZXRLZXkiOiJNdHhoS3dyOGxQUG5DMjcxOWdCbzQzTU9FWm02Z0w2OVcrS2lBVDNVVkljPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiItYldxUWVEZ1FoZVlxb3dnR2d0SjNRIiwicGhvbmVJZCI6IjRlMzllNWQ4LTg3ZGMtNDkxYS05YWM1LTQ4M2QyN2VjMGZjOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6aWV4dk00YWdUYkMwWnU3WkRnQnBCblE4dEU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVd2YWdxY25YRjFRNTU4RllXTzYzWm9wejhFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlZQVzczNjM0IiwibWUiOnsiaWQiOiIyMzQ5MTI5MzYxNDE2OjEzQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJRHgyRXNRbCtXb3RRWVlCU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJOMGdrNWFaUmI4dXJncXcwV1M2bDFSUEUxSm1IM3hxV2pBRUsxY2VOMVMwPSIsImFjY291bnRTaWduYXR1cmUiOiJ4YzYwZjNsRUhSTmNUdDQrcGdMZGRuODJ3ODMwc0NLMTZLMXdtNVcwd09tcmF0UTZkcGUxY1duWHJnREVXUVdISmZ1WEx4OEVYMkIwUlpBcVFUaWRDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNjY2ajRDZ2NkczRzRzRlUHZDazNJSXB1RzlSeU9qMUp2L0U0Tkh0NEFONng0L2xVNElHeXdsS3NvZ2pUcGJ2VUdXdlhGZEt1Wm93R09WSTBBMGJhQ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTI5MzYxNDE2OjEzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRkSUpPV21VVy9McTRLc05Ga3VwZFVUeE5TWmg5OGFsb3dCQ3RYSGpkVXQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI0MzAxMTYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR1dsIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`WOLF-V2™`",
  author: process.env.PACK_AUTHER || "WOLF-V2",
  packname: process.env.PACK_NAME || "WOLF",
  botname: process.env.BOT_NAME || "WOLF-V2",
  ownername: process.env.OWNER_NAME || " WOLF",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WOLF").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
