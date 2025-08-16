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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib01YZ3FCWTduUTZ6UlJHQ2tMdlJtcm9HZ3IvRWJPYm16cXNZZENaVzhWUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTC9TU3JNMGNnK3RQWVNxUEI3N3BEaVlkblNQdW5zTEtTQWUzMVlKaUlHST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2Skt6Y2Z2dmVxL0h3Zm1paytvdGFYaGVoSWdCYUhobWgzUDRoVW9JdG04PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2MEFrT1dkYWJlL3dyTGlOeXJndmVSQU1HTGh0OWRuUXZ4dWQzWVVVU2xZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFOaURLRm1DdmFsZGMwOVNETW5vQ1RLM3lXeXJEaFdUemlZeElXNHZWSEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii85cFk4RHg0cCtySytKT0pZbjEveDhpMWFvK1VYNE5DczlwUWxtQy8reHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0x1cUQwS09sY1NpR3o4eFlUVkhCU2I1T3RueFIxYkRZenhMR2kyQWhYRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1NTNWNwMWJzNzVLUXlOdE9FYmIvaFBITkJHbm1pVUhCbTI0NGNSWjdBbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRhR2pKZ1VWa25ETDVsaGFSMEZqd1cwOG9LbHhSYTgrelUwNGtpTlYrOHloWDZBU2V3c2VxL3BKR2habnErNnZnQWMvODNlNytiTm5KcUt1OGxsV2dRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM4LCJhZHZTZWNyZXRLZXkiOiJUTFNOUXNQamxPT0lQNzd1QTFnRk91dno5WERpN0pLR0ZzVVRwazlRdy9BPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjE0Mzg1NTQ2Nzk4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNFNjJFQzZGMTI5ODJEREYzMEM5MkJGMDlBNzcyN0NDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTUzNTA5MjV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjE0Mzg1NTQ2Nzk4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjgxQUEwRjZCQkREQzIxN0E1QkQ0NjRDNjk5NEFGOUVEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTUzNTA5MjV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlEyMUxKOTk3Uk1xS3NqNV9mdTMtblEiLCJwaG9uZUlkIjoiMDg4NWY1ZGQtZDZkZC00Yjc1LWEyMmQtMDFlNWVlNjY3ZDVlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InQ2Zm9qNzlVZXFtV2xQMUplV3lWNCtYbGpUaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyaEZLVUNnaW5YcFU2TDI4RlFEZHVqTnVMTXc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMVBSNEJZVEYiLCJtZSI6eyJpZCI6IjE0Mzg1NTQ2Nzk4OjlAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI4NDEzMDQ1Njk3NzYxOTo5QGxpZCIsIm5hbWUiOiLwn4eo4oCK8J+HreKAivCfh6rigIrwn4eq4oCK8J+Hv+KAivCfh74ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tEMnlvWUZFUHlPZ3NVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkZuTFMrQ2NDc0xTVThuUDVObmU0YjUrV1FBVzJlbzIzL28vNXNYWC9ReGs9IiwiYWNjb3VudFNpZ25hdHVyZSI6InUwZUVmR1ZWL1daSjNnZ2xQT0gzTXFMbDc1MUtEcjdZMzVId0p1MTZ4VDcvNWJYK0RJMjBEcHo2bTJPZ1BHY1M1NEU3b3k5eSt5eTVjUkV0bEtJN0RBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI3SHpSOUk5ZE5wN003QnpOdk4wUXVqaTlLVkJOa3IyR09XTzAzMFJzSmFTaURYVGpnL2FjZ0QxeGFTWDY3Qk1VTXJuSUtIZzNDWHo2Z09RL2wvYUdqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjE0Mzg1NTQ2Nzk4OjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUlp5MHZnbkFyQzBsUEp6K1RaM3VHK2Zsa0FGdG5xTnQvNlArYkYxLzBNWiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1MzUwOTIxLCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1LdSJ9",
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
