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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUw5V0hDZ1ZWSERJb1pvUk85aldxZUxndzdFVGxXdUpIUnJ1MzlPSlRsTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidHVrT2FQUGdxODVSVjdkVWhWUSt3ZS9wZGVrM1o3azFkRW43T2RpaUJ4RT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnQ2twTFRiaktHUFBUS1QrR2d4aFE3MExFdHFDZlI5MnJRRUY4UU55L1VRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLZ2NxZXhlZVowejVqRWNZTGJLeUZTZk5WTDNIV3hqVm9naWo1dnpuekVRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJQT0kvV1dyaXZ0R1ppLzFtcFVDcmE5Z2J2dkVkZHB6dUVvVVFnQTBBMmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IncwcU9kZVQ4MWUzYVhBS0RJNGRZTms0Nm95WnFOdSsrMDk3TUVmTDZkUms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUgrQkxlTGVUdjVVMEdxNENaMUt2cm4yU1RxVnpqbmlwckxyRFBmMVUxZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVVyS1BhNGQ2cXdSaXNLU2RuVWxiN0RJTUoxTTBnTVhraVZpSUs1SDBqOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFZWEF5QXdEU2kwVGVsdytMbS9ReXA1bWYyclQwU0JZZlZLV01uSmZLTklFQktySVhUdlN3OVI1a2JZTlRSY09VSnltd05oNEJJRWh1M2FROW5yVkFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NSwiYWR2U2VjcmV0S2V5IjoiZHR3OVNIT2I0OUtYUmF5TWQ0ZW5zOFhzZTFNenNjOHMrQ0QyTmE5b2lYOD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIxNDM4NTU0Njc5OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwODk5MTgxQUE1OTJFNEU3MTNEMUREODg5NzBEMDBCRSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU1MzU3MDM0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJXMnQ1a1p3NlFyT1RablBvS2c1TlBnIiwicGhvbmVJZCI6IjhhMjdlZTMzLTJmN2ItNDlmYi05YTY1LWI2OGZiNzE4M2RlYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJodDQ1eVUybmxaR28vODhxcnAvUjY5RVk3UVU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSXFCS3o0NUJacnU2aHd6VDRHWGVvL3Z1cTVRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkIzWjlCTVQ0IiwibWUiOnsiaWQiOiIxNDM4NTU0Njc5ODoxMkBzLndoYXRzYXBwLm5ldCIsImxpZCI6Ijg0MTMwNDU2OTc3NjE5OjEyQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS1AyeW9ZRkVOYStnc1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRm5MUytDY0NzTFNVOG5QNU5uZTRiNStXUUFXMmVvMjMvby81c1hYL1F4az0iLCJhY2NvdW50U2lnbmF0dXJlIjoienlNaW9SY3JhL0tuMjZZMVJnOGFZRVI4cXN3MlpuRDY3RHVkak9tODN1dzlDYy83bDRoTjdkSDFwRmtod21vRGF3dE42TzNtUEpVb053Z1NFcGN3REE9PSIsImRldmljZVNpZ25hdHVyZSI6ImZDM0FFSGpUN01laHhSN3dTZTN1UUpYeVdhNDV2R1FTQlNUdVAvTkZzRXEwdkw2T1g0dWJlUW1lYjdpUFNUeVQvTVhNVUhoY094MTJhcnlUYk1OREN3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTQzODU1NDY3OTg6MTJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUlp5MHZnbkFyQzBsUEp6K1RaM3VHK2Zsa0FGdG5xTnQvNlArYkYxLzBNWiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1MzU3MDI4LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZXbyJ9",
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
