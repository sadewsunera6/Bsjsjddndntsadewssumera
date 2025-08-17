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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0xOWndORmZpM2R0Y2lpN2V2QTRBanRlUHZvM1B1M3JPdTBaZlJJTS9rOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1JHTmJuWXN0RVVyT2d1ZUVyaUJ0SXJRbWRFQVhhT0JUaVhJdlZvc1RuST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLS2lOWG9KZ3M5Q29NT0tOV2E2dlBaREU5RlJ4VExMeVZCR0JmTENVZldRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5S3pydHYwaDFHeWE4VmxCYkNyZE5scjJOZ2xNQ09qenNIQ3grRXB3Z0JBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFEeUE4WU5KM3JReUFGRUc2UVk0eWhBV2t5eHd1L2JKektVelQ2bHgrVTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhCQ0VLWXNraEJqTzVrZmpIRHRmQ3ZSS2NreHdSdVY0WlhFaW5wK3pWbWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEwxNHVRR0R0MXVYN2prbWxqeWxEbzBMcDllU0xzU2hIeGRFWjNkR1VIWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMktxM3hrWTJqdmtiNElncDhvV05zVDdUSjBRenRjbmc0eFFkY0xMaERWVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikx1OFZ0TUw5R2swc3VFYktDb1JEejNwd25GZmZrQWhiZkEyalkrT3Q3NG9ma0hWeUl6Z2xpMU9rejhZUVFRbWVwb084RE83cWp5Mklnd3oxN3I5dGd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI0LCJhZHZTZWNyZXRLZXkiOiJWbzFaakxaRnNtVVQ1ZGlIbzZhNk9ndDFlTG03eUw5SWlrRE95d0UyRC9vPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJZeWZ4TV9oQVJVYUdXVEVTVHZlbG13IiwicGhvbmVJZCI6ImUxOGZiMTA5LTEyOTYtNDg2My1iOGE2LTg3YjE2NmVkODI4YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJERWpjTkcxMGRlWXh3WGZibnRSSmFTb2xIdjg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOUdxTU0xTE5uRURlUFl1V2VlZDNvN282S2NNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjNYN1BSMkY1IiwibWUiOnsiaWQiOiIxNDM4NTU0Njc5ODoxOEBzLndoYXRzYXBwLm5ldCIsImxpZCI6Ijg0MTMwNDU2OTc3NjE5OjE4QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS2YyeW9ZRkVNdTloc1VHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRm5MUytDY0NzTFNVOG5QNU5uZTRiNStXUUFXMmVvMjMvby81c1hYL1F4az0iLCJhY2NvdW50U2lnbmF0dXJlIjoidXRIam9UUy9IMWdnZlZwbXFubElLOHVYSWd3eWZ1dDM2R2h1ZFhFV1NrMmRCT2M3OFVpaFluOTBWcytUK2dyMEN5cmVxMm5FdEtrNVdJMzhPdEI2RFE9PSIsImRldmljZVNpZ25hdHVyZSI6ImxueWxOY2hyVjBkQ25tTW5UOFVnRnA1TURTR29sTGJDMm5sQlRuTVFZWWRiQXhhRkxaWStYN0s4M0Q2Rk9zTmFiamEvU3Z4MlZwc0U3T0gxNXdKbmdRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTQzODU1NDY3OTg6MThAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUlp5MHZnbkFyQzBsUEp6K1RaM3VHK2Zsa0FGdG5xTnQvNlArYkYxLzBNWiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1NDIyNDI0LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUx4NSJ9",
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
