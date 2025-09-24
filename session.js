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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUhwdnJndlNHSmUxUTEyZzNoSHV1ck5ROW15a2VVTk5maXBhcy9ycFRVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUEowSjdTNmxKWmMzQmNWN3RoM0RaQjc1Z3Q3aXd0VXBWUG5hSVR6YXMzcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1RGZmMFJOZXJjS3RHY3F4NTZCY3ArZHJaRkVUK0p6aFVWNllKQ2VuN1dvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3cWRTQTI4ZWZJQ3dqNnlkZE1DOTdSeUdtZVczVCsvREEvR1djQjVDMURrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktEU0FHT25QeENubXp0SHdXUTlEMmVoQStTTVMzOUFBOHJGM1VOQ1ZmM009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVyZ3lyYitJOWYwekVFb2JCMElpSE1Ed1NZcXk3eXlaSXlOQUVTclZublE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU5BZHh3S1hZK0drRE5iWGVJZU5FT1N0MjdLSzZzdUFTZGM5N3pKYnhWST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiazBNR3g4U1djTS9nS3pSUTdIWVpqOCt5K1ZGZHZzMk9OdGJpWEFLZ3ppUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZVTnpnQ09HQ042T2NIeTZ6L21nbU1zN3pnQkNkMmNrQ1hpaFBPdmJwVWtQSWlRZTZVaGhIaUpRMlE2cjdvOXJnN1pDTU14NG5jbXhKbVVPa2IrOWpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQwLCJhZHZTZWNyZXRLZXkiOiJLM1FaV2wyL0lGMng2cjBhUHVLamJkY1orZ2hBTnZQdTZnQlNPc1Y1K3owPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJoRkljZThnY1QzNjBCTXhWYzdKWmZBIiwicGhvbmVJZCI6Ijk3OTFlNmMyLTVhYmUtNGM2Mi04NzcxLTYxNmZmZmE3MDllOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFazVMWGpsS2ZPais0MTVkanNSQ0RFT3ZuTlk9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdFQ0ZoTERTZlNxVnFjTFovQmFKQzI2STFhcz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ012ZjVvRUdFUGkvd01ZR0dBWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Imk3NUYycDUxNGFVN3RuMDFMbWJMalBGTFM5WlRzcHNYbjhNYUR6SVo0RzA9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ijl4Ung0S205Y09LQkx4Z0hTYTRBcU1ybXNhbjVOUzZXc1RIQ2tIbjJUOEJSajk5RWlhSmNpc0pld21aMTRQQmM5SENlM3g1Z2lzYkJVT2gvb085OUJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIyRURuTTNGSzJ5RGlHUUR0WDBSbjlRL3EzUldwcTdISStEeGhRMEFxaEpvNlVkWXBBVjJmcW8zcTNIL2dKYTBCTkRzNHdMRGplaURHT2htRVFCMDhqZz09In0sIm1lIjp7ImlkIjoiOTQ3MjA0MTc1OTA6NjVAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyNjk3Njc0OTk4NzQzMjc6NjVAbGlkIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzIwNDE3NTkwOjY1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQll1K1JkcWVkZUdsTzdaOU5TNW15NHp4UzB2V1U3S2JGNS9ER2c4eUdlQnQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1ODQ3MDEzOSwibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHeVUifQ==",
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
