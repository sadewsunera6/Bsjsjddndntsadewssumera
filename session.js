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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkxvc1FQa3hOR2h5U3Y0Y085L2lSN1NlSDZvK1dleGJsaXBsQ25RdU0zQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQnk0aEFRRXlTeThJNTc0cGpsMmZLMW9NUXpoSzBHR1ZOQ0NLL1c2T21EST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0SFJVbjIrYVlTc3lndHNlRyswbEhyQTQySFc3dVBDdGhZaTVFMGs4NWxJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwRmMzVGx3ZFA3Q25pMFltSnRxNnVFRThSeDFKMHN2V3RaMnNiT1psM0RJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitLa09pWmhiSlhjQWVrTDlIa0M4aGViTGZYTk55WlRoZ3FWN3N2U1NYRmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ino1YldsMnQzUmxKM2hjRHJlcmJOdlA4bDRYU1A3YVYrNkVhc2padDZ4eEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWVBVSHpqT1g0Q3FWN2pJalpySnRQcW5lbnVxdyt2OU1xNURvUitRZHhIdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYWF6aUhMb1NRYjkvU2J0Y3d6c0lBVmVPU3EyNkMxbUxhclRBT3ZoL096Zz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InYyTlJKaHZVNS9wMkoyZFhLNEdLZ2ZZWm9SbEtzR0N3MVNyWjFBWDVTU2xaWGZJSUszOHB3TzN0TUQ3eXU1dG5KV0FPZTFJaFI4Z2FtUHA5cDZud0NBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE4LCJhZHZTZWNyZXRLZXkiOiJ1d2YvWGVMdWlOUUVpa0dCVDZiSExUOVJSaXFjYVQvalhsK3NzMjR4RktNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJMUXItWFhOeVMxS040a3Zhb1VvQWxBIiwicGhvbmVJZCI6IjcxNTk2MzMxLTJhNGEtNGY4Ni1hZjNkLTEyZWZmMjE2NTFkYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyejRPUWZwc2tYUUhMV2VTQVhyK2ZpRWFHR0k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0orVW1GSTFraU9KMkd4QnlyTlZSaVdpWW9JPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IktYQjFaN1pDIiwibWUiOnsiaWQiOiIxMzY3ODQ4NTUzMzoyMEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjYwMTA4NzcxOTcxMDgwOjIwQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTisvN0prRkVJcnE0Y1VHR0FnZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicXp6STBzR0NLaDAzN2lpQ2R0a2ZGU2hxUjN6MUlEbUQwSUg1SFYwRW9rbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiekJiUDhVYjloU1pwZEhValhJbG4wRzJFUVhQcXFqRXNtSU1tRGVZUS9IbnAxQ290ei8vSnYwekJ3Nm1UblJ4R1VTZTR1cWxScC9hQkxMSVJJQnZOQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6InAzYXNjdVkwVUdhK0h5amxrS1pXcG0yZlNNM0tVakszNVJyUmkzeXg1N0pQek1FVWQvSGx2RU1kOVowNkx0VDY1QWN3c2pOQ0xGOWpsV0daNXZPdURRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTM2Nzg0ODU1MzM6MjBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYXM4eU5MQmdpb2ROKzRvZ25iWkh4VW9ha2Q4OVNBNWc5Q0IrUjFkQktKSyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2OTE5MDY1LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUxNZCJ9",
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
