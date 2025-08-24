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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0NFTC9yNDZBb3hWUFM4b3N2TXNmZkhhc2lCNDJYc1U1UmJlY1FZU21rUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid01ISFl5d215UFN1bHNzZlErdjFmK3dJTzhuN1djNlY5WEVQVjNOWmN6bz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrQitLWUVjcUNONjQwQWtKM3dLSHhpWmRoNHJ6NnVySEZraGNsU2lWRG40PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvejZ3RjMyc25xK2NBUW40Qms3ZmQ2cFpBb2VEbU1FL1dIQ0Nsbm9uQkM4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNMRWMxS1puUWFIR25tRk1sdTJwRUhFZitXNS93d3Z5UStDTU5MS2VtMVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNqRmdVZ1F6SHNIdDJwR3B0R0J0czl5TVE1UkROc1pvell2bkQvWktvRG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUlPVzdaNkdBajIwVmRkc1hxSng0RW1BT0g2aHVnVzdmUFVwWkJrSnptTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNnI3OHRTckplUGJVWmxBWEhMTE1SdVdEbzFucFVSOUFvcFFkdkFBcWNYND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRMWWZXODZpWXdYOVRBeVlNUmRMamM0OFRWOWxRaHRxUTByNXRIdTlPV3ZZK1UzWnBDNzA4YkFoTTdmbk15Y2NMZ0NRWDAzdUVTQjdkWUlpV3IyM0FnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAsImFkdlNlY3JldEtleSI6InlZTTI2MlJ2R3BmL1JVU3E4WU9MUytHV2tGVSt3UTRZQXJualZrcy9nL2c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjBiclZ0NmJPUzZxcF8wb25VcGJXcmciLCJwaG9uZUlkIjoiNjVmNmE2NTktZjk3Yy00YTcxLTg5YmUtODAyY2U4MDUxODFhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFvcndwek1ZVEo1S1VpMzM1dWQ2SHhkOGMrUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLNEtsTjVMaGtSZEQzRGo3RUpLMlRPTFR1bjg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRVhZUFJLR1EiLCJtZSI6eyJpZCI6IjE0Mzg1NTQ2Nzk4OjIxQHMud2hhdHNhcHAubmV0IiwibGlkIjoiODQxMzA0NTY5Nzc2MTk6MjFAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLZjJ5b1lGRVBtVHE4VUdHQVVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJGbkxTK0NjQ3NMU1U4blA1Tm5lNGI1K1dRQVcyZW8yMy9vLzVzWFgvUXhrPSIsImFjY291bnRTaWduYXR1cmUiOiJLUERLTlFsZ21CK2ZZb3FPWnVPZCsyN3A2M09YWlNoQTVGbjNVL2xRM3FaSWx5ek1rcHJ6Q25oSGVuNjFybm00TFE4cEY3Y1Q1VGg1V3NWWTgzTDhDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiU2h4REtpNjcvbWs2b3FnWjBEWkVWbmlqSTU1OGFRWFVEYlBPdUVYVmVrdnNEeGJ5VkR0OXFrVVhpL0dvY2t4SHJydnNiUW54YXJSRVEzWVozWkU2QVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxNDM4NTU0Njc5ODoyMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSWnkwdmduQXJDMGxQSnorVFozdUcrZmxrQUZ0bnFOdC82UCtiRjEvME1aIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTYwMjMzMDMsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTHg3In0=",
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
