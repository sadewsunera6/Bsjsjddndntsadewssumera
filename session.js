//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0llYkxuMFFYYmNsbzZvNi81NnRUazBvbUMzdmJHcG13RUZjQmMxMjVHST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1I0M09wQVJicTdiVXYySzRPQUExYjBQelN3VFFteWJWUUhHTCtTQzYyMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnUGoyK0ZET080Z1dTVnpuTGxUczBITE45Qmdtd2NNblZDME1iZzFCMVVRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTbjJYaWh5aFJQK0pPWXJncHNWekRncE1YZ3RwNFhVUzRtYTl0bEhyVkd3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVNbUVaL3VjY3RWcStRbUtFaWFwYVdNMkhMYmdBcEV5dmRxOFg0ZDhFbWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkY0TmlKQzN1bDBLQ01wR21oeXdUaTUvdUw3cW42eHNiV25ETUcxc3RKMDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUpqVllKTmFkTS8xbWxsWDlQd1dKT2hUUDZkTjNUejQrcld4Wm9MdWoxRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOG9vNCtWTU5yaTg1NmhqYkNxVVJWNW5KTC90S2VxVW56RWp6OHp2ZmNVbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im0yNXBsWGdIUjF5M2pBUkhXeTN6OHY5T1g4QzF0TlNvdlpjNExrbEFzc05sNjFJMm5ST0FCUHRwaDdWNDJpOEdqU2E2aGlQeW94U0tKa0xvUjV3N0F3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkyLCJhZHZTZWNyZXRLZXkiOiJZR25zazhXdFBuNmFZc21TUy9NT1d5QlQxSU9vMHJtMm5HTS8veUZNaUw4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjEzNjc4NDg1NTMzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkY4M0I0OTEyMDQ0RDJGRkUwREExQjE0QzczNjM1NTg5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTc0MjA2ODF9LHsia2V5Ijp7InJlbW90ZUppZCI6IjEzNjc4NDg1NTMzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE5Q0ZDQzg0Nzk2RUQ0ODc1RTNDQjRGMkRGQTFGNkIyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTc0MjA2ODF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkxrR2RRNzVpUmVLMmszTjMxM0FoSGciLCJwaG9uZUlkIjoiMWEwYjdkMzItZDdkZi00MTRhLTllYTYtYmVkZjBlMTM1ZjdiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdoTk5JV0dBeldrRlNvNFVtVnkrQXdKT1JHRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyTkFRUG13NmtCKzRjcGJzcTlaYzBzZGJSdHc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQkVYWVRDU1giLCJtZSI6eyJpZCI6IjEzNjc4NDg1NTMzOjI5QHMud2hhdHNhcHAubmV0IiwibGlkIjoiNjAxMDg3NzE5NzEwODA6MjlAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPRy83SmtGRVBpNGdNWUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJxenpJMHNHQ0toMDM3aWlDZHRrZkZTaHFSM3oxSURtRDBJSDVIVjBFb2tvPSIsImFjY291bnRTaWduYXR1cmUiOiJrZlNMUkY5WlZqWDEvUHdtZC82dUxxanVVc3lxcS9uV2EzblBBU3FBd1oxVnpKb25jRm52TEhITWZPYnpZamx2dllvN0VBaVVEWmE1anREZ3NNVGtCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNDVtNnhIRXM2alA1RWwvbk9tZkRuRjAzZnNSdVdjWGFFcUlGRklHSXcxdnBiczM2RHk0Vk4vUVJwMTBScEtYc2lqRlRSK0Q0WkRMeW92cmNCbFU4Q3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxMzY3ODQ4NTUzMzoyOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhczh5TkxCZ2lvZE4rNG9nbmJaSHhVb2FrZDg5U0E1ZzlDQitSMWRCS0pLIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTc0MjA2NzcsImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSmxzIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94773757505",
  PASSWORD: 
    process.env.PASSWORD || "Sadew4321",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94769162583", "94724304850"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
