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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVBwcmYrLzkyN2xUeWszdC80bStQdnAzZVN4aVhqWWRsK2h1VmVsZ0JrVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia2RpZmF1RFduQjNIWXI5dU96RUFXeGN5TlVjcUo0N2VuaUI2aEw3SDVRaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrQkwrUHlseVhWVTFPcUp6VmljUDl4eWM1dExETGFDV3Z0UzN5OC9DQzFjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCMWN2Znp4YUgyZEVRcTV0cElCc25ncyswanBkVk5lTCtoaE5ZbVdHcGhzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVPa3RqT3VmZmJCKzByTmQyUGE2K25rZktjcWlNT3FZUHJZd0pSd3RiM3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJQSkc3WlNFTGs1dW5rcWd0cW5ZVHU0TkVhMWhmZCsxNGpTQlVXeEZSUU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEhnK2MwNk1jc1hNcWhheUVTTmEyOFUvYXhDbDdHMnBRQjI5ZjNBbmFGUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR2R4ekVZVlhLUEIzL2dNUTdMMDk5SGI1ZmN3cmVJOGc5SVBEczVqYy9Bbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImY1K0xoa1N0ZWtqS1RPUjFBbVVBeFFpSTRDTnpxTGZrZjJ4bkdCZWhpODRiRXh3dHo0ektMM0l1aWlUelcwY3YvNlA2cVhhbXJ0VEJEWkdKTWI1VGlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzUsImFkdlNlY3JldEtleSI6IlEzU1M5NkttelBZRStEZHkyL24vdnlkTEZicWRMNlJSNDdRZkJpRVFMZlE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InA3Y0NvOUIxVE9PZlNEUER6eTIwcEEiLCJwaG9uZUlkIjoiYWQyMTBjYjQtNzRjMy00ZDE1LWJhMDQtOTI2YThlOTg0NTUyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFBT2hCUVRaZFk2cjZhOXlJZGF0ZDc0MHVIWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrMnJIMldGeE5iZWhHa2pUbzZvd3B1bCtORms9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRUI1WjhMWEciLCJtZSI6eyJpZCI6IjE0Mzg1NTQ2Nzk4OjIyQHMud2hhdHNhcHAubmV0IiwibGlkIjoiODQxMzA0NTY5Nzc2MTk6MjJAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLZjJ5b1lGRU9LZ3E4VUdHQVlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJGbkxTK0NjQ3NMU1U4blA1Tm5lNGI1K1dRQVcyZW8yMy9vLzVzWFgvUXhrPSIsImFjY291bnRTaWduYXR1cmUiOiI1dzgyRzYza09weHNyOGhMU3hCc0Z3RzJrWUxjNW8rNXBLVlR1NDFmK3dKMm5EM2hBOU5OMnhSUVFPNm5OSFBJWlFiREVRSlZEd1ZybXIrT1cvZE5BUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoidG5IYnJ0VEk2cFV1dVV2NEFRS3I4RVQ5NnhUSkJVNFNHMjAwUGxJZ3Azb2JkMmQrWmhhNkZaSFkxdUI3dHEvdVJLYmFOV2dQU3E4dzAvUTgvTlpIZ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxNDM4NTU0Njc5ODoyMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSWnkwdmduQXJDMGxQSnorVFozdUcrZmxrQUZ0bnFOdC82UCtiRjEvME1aIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTYwMjQ5NDMsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTHg3In0=",
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
