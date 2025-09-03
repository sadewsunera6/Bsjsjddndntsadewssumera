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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0NvbnRKNSsrTTd1cWV0WURUQXhocGs0eFF2U1pHRWV3c1RMeXJXVlNXcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiREpmdnFSRk1BTllyL2ZKR2Vpa0ZtMGVzdzBZV25oQ0lWalpIM1NqSlhBUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJTGhBaDQ3NUJYZVVlWU5OS1JtQStXaWF4Y2VJdHQvOTR1Wm1oL09SMVYwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDcXZHUzgvRzVuSmVVQ0NhMHJQNVV3WlN4dkVQS0Ftb052Y2IyNlpNcG1BPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklEMitOWkFlUTdjZmMzY0FUWThqMnVYQ0x0Skh6THRoVWVmVHpCRXdQV1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlcvcFZGTkNDd0dDeUlUaG02S0M0UUIwdmJITFdDK29LVzNudEpKWGhPbUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR05UanFtcXBram5CVDl4ellzRmlhT0IxTE5ZcHpsT1hLbGJiTUsrM3kyND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiak1ZenRtMUp4dVBOeUdoY0hzbmtEZ3B2bklRaHhvbnhETTNSbVc5VFpIaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkM0QmZHcnZhcTdrL2EyZWZuemdoNy9CRklubHBRQjRDMzU4TmdmWkd2Mms1K1hiWjhVV3hMeDZYbWZnRjA2bTJSSWpwcUlHQ1FyZm5tQi9qN09qdmd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTQsImFkdlNlY3JldEtleSI6InVsRWxBZ3h1VW9iaUNLS2haSmdrOVUwQVpmVURrVktOM1F0U1Q3Z3N0Vlk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMTM2Nzg0ODU1MzNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTU5NUUzQzNCODlDQUM5OURGQTk4MThGNjI5MkM5QzMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NjkxNDI4Mn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMTM2Nzg0ODU1MzNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOTkyNUIwMzg5QTI4NjU1NTc0RkMzODY3OTc5OTE4RTUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NjkxNDI4Mn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiMG5ZTWRvdTlUZEt0NC1rbThMV3FQUSIsInBob25lSWQiOiJmYzFjZDFlYy03MWY2LTQyYWEtOGIzNi01ZWJhYTBmZDk0OTciLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYTY3dG1remtKUkJBZVJCZi9QeGpWY1U4TmhvPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJGaWVrUnRZelNRdDZ1eUhnbTR6TlliUlBJZz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI3TVJXUEwyNiIsIm1lIjp7ImlkIjoiMTM2Nzg0ODU1MzM6MTNAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI2MDEwODc3MTk3MTA4MDoxM0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ04rLzdKa0ZFTmpFNGNVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InF6ekkwc0dDS2gwMzdpaUNkdGtmRlNocVIzejFJRG1EMElINUhWMEVva289IiwiYWNjb3VudFNpZ25hdHVyZSI6InBXSW8vTmMva2FIK2VtRjFkSktTU1BmMHN4RWcrOFRwWlMvQ242eEJmT0M4Zmx2RlJXVXh3c1A4aUdNYkgwZlpadm80bThLSk1DbGlrM0JWL2RKaENnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJiR2NuZ2hEWG9TVmZMcGIzQUdmNE1kN3JGOW9NZDlsalFiWlBkUGJrUm1Zd1JvM05VdHVKUlNJcFRZUHp2ME5OakZmQ1R4SFptaUdvRzdQU2NNQkpnUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjEzNjc4NDg1NTMzOjEzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFzOHlOTEJnaW9kTis0b2duYlpIeFVvYWtkODlTQTVnOUNCK1IxZEJLSksifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjkxNDI3OCwibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMTWMifQ==",
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
