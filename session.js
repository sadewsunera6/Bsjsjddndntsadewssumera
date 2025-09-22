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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkVzWG1SNzBaWGFaQmdEeDUvNitITmZtVXBsTkV1R2tSb3V0N0QxVWoxaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZkV0Z0I4RlgyczZjazBNaE93VkQ2OC8rMisycjBwTjBKTStzdDZlWC9Dbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPR3EzaGlPWlNOb3VHVTZ5NHN5RndSOWlVUzhaWERQak9Wc25IZlUyOVZVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjdnJpUGxVQ29RZkFWSXRobXRMeDJVVTMwemtxdHIvdGhnNnZkUVg1MERFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdOWlZWbUJmZnpwQkxFNzlNa2Z0Q01RMnd4L1hEQVNxdUU5bEJBZkIyV0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlprcHB1bmJzS2JGc0dBdWFPSFlPY1Vvd3JlWE16TWw3dzVxQ2wzVlU4Z1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0Y3TloxWTJPV3ZoRXRRTmlaVzVrT0JIZEpmWisvUUN3SHY2SUowMUNVZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTVN1djhvbHAvdGgrOCt1TytCUU12MmRNR3FjSzNVTlF5U01QU0VzbnJUVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJTVWtTRXBZbVJMZmZpYTJweW9XS1QxK2ZUSUNCZTZsNWl2UWVyUkJ1Q0lCTWxTM2NzOWdUbktxUktmZTRVOEIyNnhNbk5JeFgxTjVJZTVnWTNZOGdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ0LCJhZHZTZWNyZXRLZXkiOiI2VFZncEYxOEcxbHRud0xvcjFNaUNhUzU4T2RCbzgwTnpRTkQwcXJXMkk4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJwTEtTRzNxblRtLWNoRjBVWS1UVU1nIiwicGhvbmVJZCI6Ijc1YjJmNWY1LTMxMTAtNDIzNC1iY2JlLWJlMzMzMDYwZWFlYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1bkJoQUtIUWxjWjVBNlpaUS85b0t1M0VTa009In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlIvL0hONXM0QTU2dnRjWVFYSDFTVmxVWVNwST0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ012ZjVvRUdFSTYvd01ZR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Imk3NUYycDUxNGFVN3RuMDFMbWJMalBGTFM5WlRzcHNYbjhNYUR6SVo0RzA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IitCendGSmZVQm5xYTZrR1p2QlQ2ZzAycEsyVXVoTk05NVluMHJNM0ZYUUZ5MHdrWjNJTlBweUJ0RWZuR0hIWlFaZGIzbFg1U1hEOFFNMjV0Nzc0NURBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ4T09UdkUxci9Yb0pRRVZYTk1JZU9mWmxOV25wME5vRGlySG82UGU5MmJEa2VXNis0VEYwUzdEN0RaM09ucmlyWHV4bjc1RzdFblJTelpveUNTVDdndz09In0sIm1lIjp7ImlkIjoiOTQ3MjA0MTc1OTA6NjNAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyNjk3Njc0OTk4NzQzMjc6NjNAbGlkIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzIwNDE3NTkwOjYzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQll1K1JkcWVkZUdsTzdaOU5TNW15NHp4UzB2V1U3S2JGNS9ER2c4eUdlQnQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1ODQ3MDAzMywibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHeVUifQ==",
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
