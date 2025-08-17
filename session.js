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
    "YASIYA-MD=eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0N4SXpZekxRVitLSUNRd2F5VngyMmtiQmpLMVdvNE9UMVEvRnVGOUNFWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSDQrdEh1NHpsUHM4cE5FRjk1cFRTK2JQbTRTcmFBeU5WSm5sUXByNWh4UT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRQ2dKWXZRbThrbVQ0OGNqZUZON2xMZkV4UFIrdlJ3MzVXbnZFdXpmL25NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLd1pmNDlxWHVQMWhDUDNLSHoyODBZa3JUNzFDZkRJd3hGY3drcll4VVRnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklKWEJDTXRRU1Njd1lCZnBnN0hzLy9xRnJta1pzWUlIZUJKamxraGt3WFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJVYmVvSlkvYW1CSjl6b00xR1NkN1JMM3E0a3k4WFdvT0M5QlNTeVFLd2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0NuWEpOZGZ6blVtcllYcDdaUzdyNGVtc3JNUXB1ZlBvenlSVFFQNUNVdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVGJwY1dDS09pSFUzVTBaV2xkem9XTEhUNXNMUmRXQVcvS1NSNklaZ3cxQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlduWlBxcU1xb2kxNVE4eXFTM2xPaU1WTmtqSjdDSERNdmZseHFlWHprUGlOVWtTQW53TnBGRnBnUURIS1d4Q3VUWmpBeEVhb0twQ2Zab0F6ZmkxdUFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTIsImFkdlNlY3JldEtleSI6Imk5aFlLQkduSEhxNHEzamJ6dENtNEVhYThTOGxPREdjOTIxb2Mram9EMk09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMTQzODU1NDY3OThAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRkZENEY2QTZFOTVERjNGNDVCMDM0NDM3Q0VFMjNFM0IifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTQyMDQzNH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMTQzODU1NDY3OThAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQ0EyNTE3QjhERThDMTU2NEFGQjdENjU3RkU1RDc0NEEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTQyMDQzNH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiV1hOSkNBSEQiLCJtZSI6eyJpZCI6IjE0Mzg1NTQ2Nzk4OjE2QHMud2hhdHNhcHAubmV0IiwibGlkIjoiODQxMzA0NTY5Nzc2MTk6MTZAbGlkIiwibmFtZSI6IvCfh6jigIrwn4et4oCK8J+HquKAivCfh6rigIrwn4e/4oCK8J+HviJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS2IyeW9ZRkVQK3Roc1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRm5MUytDY0NzTFNVOG5QNU5uZTRiNStXUUFXMmVvMjMvby81c1hYL1F4az0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWE9PNW1YTlJJakNKZDRjeEJXZXdQTFlwcGxhakU3enIyeHRxcWlUd21NazRKWTlVMU9nbFJ2TmVCMVdUbjNOU1I5WmIyeWR5TGdzYm1XRTh6K1pwQmc9PSIsImRldmljZVNpZ25hdHVyZSI6Ii8wcVJEczNFSmwxWlhUWi9PekJ2S3hIMW5jRkgvdzBaRnl2OHFHTERuMlpxN3ZLeXVBM3VHRC9yRXhkY2N0Rm1Ock5MUUZDSUorbk9ycUo2UWVmVkFRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTQzODU1NDY3OTg6MTZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUlp5MHZnbkFyQzBsUEp6K1RaM3VHK2Zsa0FGdG5xTnQvNlArYkYxLzBNWiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1NDIwNDMwLCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1jTyJ9",
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
