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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk1rYXNEdmVTSGtkNE5VOS80aVJZT2JkUUVFRVkwSlY1bENoUFFjbEVFRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVGRsSnFDY3BENzdHYnFDcFloUlI2Yzhnc2hZVk0rbE1NWVZGc3JQTUFuaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhREFtNzd3ZEVxdUNCS3ZMWjFKL05RRS9hWk51aEp3eVRTemNWOE1iL2w0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5NXN3aUhkOTJBMSt4b2tldzloaEFGL3hUWmE0TWJNUXp5emtYWlFEVnc0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhERWNOQ2tLaWtmWnlkNWlqbThQQmRGV0xnL2ZyTXZoUGdYL3JNTTZFMG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkViWW03MWhBZ2RqMzlPVU91UGhGSlBmTjhJNWhnK1JXTktpZW5rMEpVQ1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0VHSy92L2VoemZZZ0NoZUxBRWNURVQxSUdnQ2R2b0xFVGt4WC9MVWpsbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEtJRlRoYmcyUUFRZUFKR3NzeVVOQlQxUGRZYUo4Zk1oYTZTSWJ5dHhSYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBU0s3N1QvNE81VnU1aklDaXAxQnE3SDRUeGV2ZTJFYmZKN0pOemFCQ3Qycm5JS09ObnhaRS80WWMxcm9sZGtJcmswK2tWYk42cTRCeDd5Q2RlMkNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ0LCJhZHZTZWNyZXRLZXkiOiJ6Vy9rWmdsZVlyM3ptY2pwdkdLc2Y0ZDM0Y1NzUjVmcWtyWTRlZVB4d2dFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI2U2FYcndSNVRPT1ZPOWlrQ3pjbW9BIiwicGhvbmVJZCI6IjgzZDRhY2E4LTYwZTQtNGZlZS1hZGQ4LWZlZjZmYjc2MjM3NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTTEhOQ2JkcjJsVHcwNFhCNE4rZ0ZQN3piUnM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibGZ4N0g3Z3doT0l2RURBOHRKSGg2cVRyeVBJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkhMR1NWUTlQIiwibWUiOnsiaWQiOiI2MTQ4NTk3NTE1MDo4QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTMxMjk3NzcxMDQwODAzOjhAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOMk4zcDhFRU83aWtjY0dHQWNnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJWeEpmRXRtVWtKbDNRZ2RqSmxlTjBNUFBLa2F4TWt3TVZ6L09MeXdwY0ZFPSIsImFjY291bnRTaWduYXR1cmUiOiJISEx1YWQ1aTJseFBLMG45aTcwSjhPeVkrTkdMV2dITE9WWVV4ZzhWRGFPQkMyeHpWR0pJcXVjaXc3THE4V3NMMGozWGNKY2hzbVhCSCs1bUkwSUhBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoieVYyZ0Vwa25iRU9Qbll1UVJhQmNBM2ZrbzBZOElJaWd2cWRNVitRZGVHM1BOTTVlQ0NsR0hhM0MrMmN6MWw1VDFWZm5ZMzdsOE51dkppUUZhN0R6Qnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI2MTQ4NTk3NTE1MDo4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZjU1h4TFpsSkNaZDBJSFl5WlhqZEREenlwR3NUSk1ERmMvemk4c0tYQlIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1OTgwMTcyMywibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQeG0ifQ==",
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
