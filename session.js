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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU93MGsxdE1yVE5wRXJrS1ltQXIrTGpSdEtvWHNSYU9kSXRyVDAvTUZXVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZWx2TjVPbmY1RWRXZk9kNk5tTTB5K2UxUERYZE4rV2F0eVplWE1rREoxaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTUHZMNnoxUmEvN1ZMNENISWdsYkk0czdRc2lZd2ZJMDBoSlQ4Z1M2QkZnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnZTBxT2FqclFpelFlUmNTM1dCSklDQ1RZc21YU3AwRjlsSE02bXR1b0YwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdIUC9LSzFDZ2dVRXppTHF5azZqYkJlajhyMDEzVi92TklGVkE2M2Jma0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNnMjBWZng2eDlIb3grSEFvZDgyZDExZWs0SW4wcWM4RXhBRW1yU1oveEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUQ5Rm9tV2RVVGc5MytpSm1BVGt1YVVQQmlSNFZsNlNZNmdlR1FTV2Mzaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibXloQjlvZkd5N01mS01ENWNMYWYydU9kOHhreDZvZDlGWHRlTVBBTlhuOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inh2OGtnejJwdSt0clRzNVVmOXVMTGt4NkZaL0JydzhweTUwcjNsQ2VneFRSV0R0dDV6T0xwWlhISTdyR0RBOW9oUHRKaWtURmhUWnZ0YmkrdTFBdmpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjgsImFkdlNlY3JldEtleSI6ImE3ejBWQ0ZPUDVJVCtkRlFMSHU1TmszQk4vRmtIb2E1S1FabHZYY3pxTTg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMTQzODU1NDY3OThAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUVGOUE3OTlGMDBCNzM5MEQ5QjAzODZBNzdDNUU2MTYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTM5OTM0OH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMTQzODU1NDY3OThAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNERCRTA2MzMzNzhCOUJFMTc5OTZCODkyNUVENzE1QkIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTM5OTM0OH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiakhUTHFRaHVTTVNrdW5xYWwzX3g1QSIsInBob25lSWQiOiIyODFkMjA0MC1jNDQ1LTRkNjYtOWRmNy02MTliNWYwYzc3NjIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSC9sWGU1RE5FQ2dXTHVhMjgxSVBFdTVyVnRFPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjE5TFhNR1NoczZ5RjIwbEwyTGhiWW5aWVFUWT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI5RzVDUkFMUyIsIm1lIjp7ImlkIjoiMTQzODU1NDY3OTg6MTVAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI4NDEzMDQ1Njk3NzYxOToxNUBsaWQiLCJuYW1lIjoi8J+HqOKAivCfh63igIrwn4eq4oCK8J+HquKAivCfh7/igIrwn4e+In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLWDJ5b1lGRUtLSmhjVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJGbkxTK0NjQ3NMU1U4blA1Tm5lNGI1K1dRQVcyZW8yMy9vLzVzWFgvUXhrPSIsImFjY291bnRTaWduYXR1cmUiOiJLMHVteWphWHV1enRreTBETVM3N1RMVERxbXJUK0VHYVpkTnZtRUdFcVBsWVJkMUtwVlN0WEs4Q2RsbWc1Y014QkxpREc2ZjZHNUQ4N3BzM0l0U0RCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTFZySjVERmJjbThyOU5vNXc2REFJQ2JTejlYUC9xT3pHMTBjU2Y5amhYYXoxY2xndVF3S1V5cG1vUEI4NDlpTFAzdW5OekNSb25LOGw5elFkRDJCZ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxNDM4NTU0Njc5ODoxNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSWnkwdmduQXJDMGxQSnorVFozdUcrZmxrQUZ0bnFOdC82UCtiRjEvME1aIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTUzOTkzNDQsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSjF6In0=",
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
