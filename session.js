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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUoxSG1hbEhaRDRSNnNaOHFwYU5WbE5obTRPOEltSkRoNTZ4NmR0RE5XRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNmhIMG9pcGdCM1E1R1NGNUc1Z2grYThrYyt0eVA5OFFvaHpudmNnSEszaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTjJZVWJyeFFKL1hGckVrVVFySlIzNEd0aDFRYkczdXJJa1huaGgrWkU0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuZ082SmNwUE8zMGhFWDZ2R2JENWcxUno2TkNNYXpzZm53WG1qWVJIcWtVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldQODZISkJPRmdiNVg3OWtJT0p5NmIyKzREWTh4L2pzK2hDSFJpMUEwMms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNRaHNXU1BVOXZwZ0ZZcU9kaHNTK2VkdkNqa0JxdklqNXZYVzNtSFJFQmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUFvaVRON282TjJzM3JtaXFkRnBZQ1NrenZoazFEdkdkWjVmYTlQWTJXRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM2ZWVjF5ejFCWDd4RnZWWDNGc0F4bmRIQzJia091WnhGTzNnVDNwTVIzYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9WZjV1cWl0dW8xbU1GRWFQUDRxSnEyUTVGcWtRWWJUalUxbHJsazdVWnhpTWFmT3hZNHBrbkpCTDkyVWMwUzNBMHlRaHJZMGx4UmxaTkk1c05FcWl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcsImFkdlNlY3JldEtleSI6IjhRSHZUbzNLdzVzb05zdDRpOTlSVkFBQUNhd2ZLK0UzdHRjc3pjbXd2WUk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjktOERUREtKUVAtdzRDOEphZHJ4dnciLCJwaG9uZUlkIjoiNDhhNWIyNDEtNDg2NS00NDEwLWFiNWEtMmE2ZDBmNjA3Y2ZhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjduVVF1cTBZS3pRb1NSRjFFSlk1MmlrQldPZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUM29LL3dOeml4WHZnWjBqcW1BNWlDaFFndjA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWlBUTU1BTFMiLCJtZSI6eyJpZCI6IjE0Mzg1NTQ2Nzk4OjEzQHMud2hhdHNhcHAubmV0IiwibGlkIjoiODQxMzA0NTY5Nzc2MTk6MTNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLVDJ5b1lGRVB6TWdzVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJGbkxTK0NjQ3NMU1U4blA1Tm5lNGI1K1dRQVcyZW8yMy9vLzVzWFgvUXhrPSIsImFjY291bnRTaWduYXR1cmUiOiJFcFFsVkg4TmpwN1JpZ3UrY0ZHK2xreU04R2NTOEs2aWQzWVZIKytGTEVRZFhobVplVjhkYzZYY0YxVDQ0ZGNyOFFsSjZiV25SMnBYeWZzdlplM3FEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZUVBbGwvL1hhVXRSNytnU0x5bFJxcm84Yzl1Z0RBYXN3YVFUbUJHelVyREptR2ZOU1NiQzRHRWl3RWhpUDEvOXpjNWYzUG5YcUlkQ3h1RHM0RXRRaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxNDM4NTU0Njc5ODoxM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSWnkwdmduQXJDMGxQSnorVFozdUcrZmxrQUZ0bnFOdC82UCtiRjEvME1aIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTUzNTg4NTcsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSWIyIn0=",
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
