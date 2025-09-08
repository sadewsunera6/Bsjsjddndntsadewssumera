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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUtNMmJVeHllYjBLM1NQakw2aThHbnVvWERwMjVydTRsVDd1Z2tWKyszYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSGc0TVBrVXY1OGF4WTJoSUZ0aVROOGFtZTB1M09jUTY1U2dPaFZjSk5WQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhS3BseXArM0JSdUVXYTBVYWtTcTRxZ2crWlNsRlZvVVBVZnlocE9lM0VJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzSlI1VEdMa0wxdVpTTUFXcjFZcXhPMkF5RlBqaFBpYUFwK1BtUm0wOGdVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlIZ3pzd2ZBcHJZenBKbUdKbVcxU3FweW9vUU43UDZJQUZIMWhTT1k3MkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdablZpSUNSUXVXVEFWOTdIaFdHbGZOdloydjYyeWlkZGljaTEzR25mQVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0paMmZsN2t2ZzFudks0c21iVWJ3RjVQd3hxb1VyT2Z2VWxpUUp3dTIyMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0Y3cHFSZDk3MmU4c2gzWmcwSFFQck9KK1Z1RXZYamJtRFhJQVo5aGgxQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFEbU0wT0xrL05OS2JoUlM2UVhzVENSOU9lMGlLQ1FIY0ZyS2Q3ajZZYStLQnAxRGpHeE81ZzdMbzhmWjFFTzNQRG1FWlV0MGlRMFZ2dU9rbFk0a0NRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEzLCJhZHZTZWNyZXRLZXkiOiIxZUc4UHJDaGxVUzNnRm56Y2lOVnRTRkZUZ3VFSzUwVkE3Sjd3dkp2L1JnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI3OXU3V3BJSlJVQ2lpb2FudTd6S293IiwicGhvbmVJZCI6IjVlODg4NzZjLTg1MzMtNGExOS04NDcxLTY5NjM2NjQxZTk5YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvRzZLaFlTdGQ3ZFFNUFVIUGV6L29mNnlhRTg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiekxRVFZtWldIWTM3bGJFenFXL1FoMER4UHFRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlpZM1hDU0xaIiwibWUiOnsiaWQiOiIxMzY3ODQ4NTUzMzoyNkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjYwMTA4NzcxOTcxMDgwOjI2QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT0MvN0prRkVPZW0rY1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicXp6STBzR0NLaDAzN2lpQ2R0a2ZGU2hxUjN6MUlEbUQwSUg1SFYwRW9rbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUm92MEtmMjBuTEZtNHFtQ3l0NWNZWjFIL3Z0QjVBUkdZRW5zNEJlbVp5cmY0V2IxTm5BUUswOWFGWGw0S3RYcDVobUZ6QlcyUHZlRW9ka3gyQ0MyQWc9PSIsImRldmljZVNpZ25hdHVyZSI6InlZSnpoNGpXQ2t1S1lzc254Y1Q0akFOTVNueVhJMTdOY0dEOEV3eFVVQ1F5MEpUQWpNVE5FY29kNEorR0xlNE9Sb2pjSDZuajEzeUxhOTQ4RlRrNkR3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTM2Nzg0ODU1MzM6MjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYXM4eU5MQmdpb2ROKzRvZ25iWkh4VW9ha2Q4OVNBNWc5Q0IrUjFkQktKSyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU3MzAzNjY4LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUV1ZCJ9",
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
