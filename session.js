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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEptYWRvRkpkbjRVRFlCbjdYaXZyc0JZYkNPcWkwYWpET3BUN1hydysxST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU9lZElLR3d6RS9vZmV4WnVOQSs3RzJzU01oaGpuZVp0T3hudStaZkwzYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTT0RjbHBBNnQ2UnVGOGtpQ1lXMy9iaXZDRG95bFYyVDYraWtZaG9wYm5vPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqTHlVKzYxQk5BNDVFRWR2US9wNUhGakxBbHlIVlVOam93TEVQWDFSdGhJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldNUTZnNU9wUGo2enQwdVIxd00rYlFRSllwbFlqQXV5aGE0VFFXM052RTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImorUnBEV3MvVVUvVTR3YVAzYzFUVlVPaVBuVnVBWE54WEdVa3k0TFEzRTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0g3emRuVU9pNEpWZFBuMUVmVllIaXJ2MUtrT1YycmJUc1pMYTFVMmIwaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSDQvazh4TUJ4ekNFcWtyaHFORkYxd3dCM3llUEdYaldsQnpjZ1M3ZXBFWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1YK2NhMkMwUkhsOFNrTWdxRWFMVnd0T0JGdXVNRHNxSnNOMGoxc0k1S3NZRUlxTzRBcmYyOHdCb09XYlZYaFJZZjVDc1F4WHU4WExNdVlTeGNNWWdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODcsImFkdlNlY3JldEtleSI6InZEV2d1WEVnSk9ZTzF1WmVHL24zdHBNZ3ZFMHlkTEp1Uk9SOVE2MTBpWWc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMTQzODU1NDY3OThAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMDFCQkIzNzAzRUMwQzY1NDQwNjQ0RUFEM0ZCODBBNEMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTM1Mjg5MH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMTQzODU1NDY3OThAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOTAzNDMxNEM0MDBGOUQ1NEMwMkJEOTYxN0Y1RThEQUQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTM1Mjg5MH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiVHZ6Yl80TFNUVFdVNjR5Vl9BZlNEUSIsInBob25lSWQiOiIyZGNlZmQxMS04MzI3LTQwZGYtOGU1NS1iMWQ2ODg4MjI3NjYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia3dGRXVXTUdwb09YYlpoQUdTMXhqSERXMzY0PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFqSzhUcUNXQzN4NTZXZWtOVzczMEV4RExqcz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJKSDZTODRIUCIsIm1lIjp7ImlkIjoiMTQzODU1NDY3OTg6MTFAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI4NDEzMDQ1Njk3NzYxOToxMUBsaWQiLCJuYW1lIjoi8J+HqOKAivCfh63igIrwn4eq4oCK8J+HquKAivCfh7/igIrwn4e+In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLTDJ5b1lGRUtpZWdzVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJGbkxTK0NjQ3NMU1U4blA1Tm5lNGI1K1dRQVcyZW8yMy9vLzVzWFgvUXhrPSIsImFjY291bnRTaWduYXR1cmUiOiJpWEJCN0pjalFCOWRiaUROZFRvbUQwdk1Sdmt5Z0lkOHF1VG1HekU4QTE2dHhHWktrVkh2OExXNUNBUHY0dFRoWHVRREl3YUQzd3RuT3Joam1QMTJBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiamFic0E0QXlFbmpuUUZpMnAxZDYzbjJ5dEFUSHdaUDIyZlEwTHRjb014REl2bHNLZW4weS94bUVKQiswbTZtdjFXQ2FBRkYzY2xaK1NJNmNuLzBQaUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxNDM4NTU0Njc5ODoxMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSWnkwdmduQXJDMGxQSnorVFozdUcrZmxrQUZ0bnFOdC82UCtiRjEvME1aIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTUzNTI4ODYsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSkNGIn0=",
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
