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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEt4V1hBT3kvcElKUU9sMk9mdmFiMmdPT0lrVzI4ajd6NTBOejc2UWUxcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTFFoNjR0eW5DZ1ZHNC9aVUwyWGxRWk5uTUlPK0RGczJ6L25jYzRXd2hYYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvRElla3BydXFYQ0pReDNDZlJJUnZPcUJ2MEFMSEhHbS93bzIzYU5lZDFJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmclZjUHI0NWpNTk1PNTZxTFNyTy9HNThhSEFOdkN2cXdsY2FLL0pNZXlVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJKL1NKUG91UWdGY1FRek1QVjdTejdEYUY0dWdmbW5leVQ3bTk4VDkvRjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjE5NHh4TEU2RXZtUUhqcFN1M0tOU1lBZUdwaTUvcjNSeDBGaDFIWHFSbVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS01CSm96RE5FZ0ltWkNJZUdjbUVLaWRqUmxlNXpWTkpENnU5ZzdwT2gyQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid2RuSGdWdmFnKzZVL1R5dUpUUDJRdEN5WW5XcU9aOTRidjRUYjV2S1pYaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ill6dXBMME9IL3ZEZkk0TkVZYWFtbDFvdFl5MnI0Q2FZakNZKzYrcHRQYlBqaVlpTjNja3c3WkFlTlRLMnRNbFV1SjBiaHY4Z0pBSnh2UkNhZnhIdEJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjExLCJhZHZTZWNyZXRLZXkiOiJSVG81WlNKcUlodFVQWlBTeURONjB1MXVBMEJaQjlsMU5OdmxLbk9aVE0wPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjE0Mzg1NTQ2Nzk4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjA3MzNDOTU2NEQwRUUxMzM3M0JBNDE2RjRFRjE1NzlDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTUzMzg0NDd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjE0Mzg1NTQ2Nzk4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjA4ODgwN0I4QkQ4NkIxNzI2NEE2RDhGMUM1RDM2QTAxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTUzMzg0NDd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InFsZUl6bHRVUmtPWXE4WW9CREJqSFEiLCJwaG9uZUlkIjoiNTdjZTI1YjYtNTQwNi00NTE2LTk0YmItMWVjMTU5YmZhODU1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpWczFTRURha1JGaDlmVTViN3R0Ri8vTU9WQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlZExWeVF0T3R6YithWnFEdzZQNzlndkRnWlU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNEw2VEs1UjIiLCJtZSI6eyJpZCI6IjE0Mzg1NTQ2Nzk4OjdAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI4NDEzMDQ1Njk3NzYxOTo3QGxpZCIsIm5hbWUiOiLwn4eo4oCK8J+HreKAivCfh6rigIrwn4eq4oCK8J+Hv+KAivCfh74ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0o3MnlvWUZFTCt0Z2NVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkZuTFMrQ2NDc0xTVThuUDVObmU0YjUrV1FBVzJlbzIzL28vNXNYWC9ReGs9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik5HeVkxdkY4b3RmSFR2cXpnd1ErYy8wNDM0dU9UdnlqazBJaDdSRlFscFpYVFlzMlkyeFNPdnUzcU1qTVBiRU93V3ltN1N1eU1oQ0NGRGhXOFRFZ0JnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJabjF4ZjhTZHhZZUJGK01BS0sremoxZG03cmVYZ3BHNzBDa0NkTzFobWU3K29WbGM0Y0hDRzlpZWVUSXhtZ1RsamFUamxONnhVYjRWSjQ1MVdncFpCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjE0Mzg1NTQ2Nzk4OjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUlp5MHZnbkFyQzBsUEp6K1RaM3VHK2Zsa0FGdG5xTnQvNlArYkYxLzBNWiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1MzM4NDQ0LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU50bSJ9",
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
