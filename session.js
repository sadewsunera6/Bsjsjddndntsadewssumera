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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVURrYnpsb2FNaGR5ZU8xVEtRS1FoUDgrQmwza2hjcDkvVHl6UDhrVEVXYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia3M1Tzh4SFZiSTR3d2Q2OGVuQVhoaE9qM09nTEkvTE90MHEzNEVIRXhURT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4RU1qaUxEbDBaanYzUzJxT0NQRm51S0l5VjVERHgxekJGdndieGV3aVd3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsMU9oSzZwVUhWRU40bGdYZHZMU2F4emZFSVd0cWt6dGliWE1NdUp1eTJRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktHTnI3SGJnamkvTEJySVNmOWVQUnhoMUJWaWZnRU9BaTlHRk9ROWZHRjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZBRS8zdVpsbjF3VURhTjlnalBUeWZhK3AwRjV1Uk1UYlVSalJJY2RtR2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0JPQnlkQ3pjcUU3UlRMd3Q2S281YjZxOU1wRy9qdFN0a1NrbXdGT1pXMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1pId1Qzb3Fkc0dsVU03WmIxbzZzZlJqTWdjaGE0dHh2YjVkeEZYem1tUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZsblpNdmJtdUxqUVdqQVpoVEo2SVRMWnVZYUo4Z2ZnQlMxbWRxS1RrV1NKYjRqZHlkSnVRbWxaV1VpYnlDNHBOUWV5dHdhVmszYlZHakpRbXN2ZWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjYsImFkdlNlY3JldEtleSI6ImZFeEdxc2RiL29HbG1EOU5PUVQra0lkWEdYNHAwTlh6Rm1EcVRJWmwyeTg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImVhcHZBUUMyUnYyb2k2c0pBNTlQY1EiLCJwaG9uZUlkIjoiMjY0NDkyNDUtMGQ4MS00YzU1LWIyODMtNTM5NzQ0YTUwMjEzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJucmlEWG5XcGxVdlBDZlBiUHVxQnJQbGZoQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHald2TWFSZVdPVklNWGdRQ0pPUzAzMFE4Q009In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiR0xYRzEzMkEiLCJtZSI6eyJpZCI6Ijk0NzIwNDE3NTkwOjcwQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjY5NzY3NDk5ODc0MzI3OjcwQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTTNmNW9FR0VKZU1sOGNHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaTc1RjJwNTE0YVU3dG4wMUxtYkxqUEZMUzlaVHNwc1huOE1hRHpJWjRHMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQXBrekRMUjh2QTFBdzY0aUUrSjVQNzlueVMzUUZkWUFQZ0c5RGNRcThpa2RORkVsZ29XVDRTb2pQWGhDTmJvUjFBWTZmVWhEMW8zMU1RdHp5RzJVRGc9PSIsImRldmljZVNpZ25hdHVyZSI6IndEdGpPbXloRmF3Nk9jcmdYOTFpdDRxYWpxYVNEcnNBWlpCa3IzWWJ5dXVXM2pobEtLMGYxWXJGWHZwOXhzbnFtbkp0QUlveWRxQWsvU1hRUHh1U2dBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MjA0MTc1OTA6NzBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWXUrUmRxZWRlR2xPN1o5TlM1bXk0enhTMHZXVTdLYkY1L0RHZzh5R2VCdCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU5ODg4OTMyLCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhTVSJ9",
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
