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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEZZMXBwK3plUlc4Q1liL3RNd2NiWmR6TXUrZXV0M0xDTkFvY3o5TWVYdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiclVkSVVOa3BzU0JvbmhiOTZGYU9HOFgxd1dCdHBzb095Wm1VVGM2dXhWTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDSXYrU2M3eFk4SVFoM1RSam9BYWtSM09tTEdSeXJHSW02VzZ6ZGxJSUdFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyOTdNazhpa01BeHNjekIvS2w4Q1hsMW00QndGK0Y5Z1p2Z20rSnZqa2trPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9QbkttYXQ5d0FOdHFJSmlSZXFobDN1QzFMdHIwbFk4UVIwUEloNDVmRWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJ3N2t2N2YxKzdjMGUwcTNNaGllSkpYRnNibkVEQS9Pd256ZnRBOEc2Umc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUdvM0lONnpoL3RCZ013bURCTEtHWTZWRkk3SVBVS0I1N0VVbDBLbmVHVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibE9zYllPeDFwRDlZeGZvaTNEV09BUDNvOS9PTzlJVExqRmlkWksyMi9TRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikd6c2JLMFVVeGpORmpBTkhHVGJpb1grZ1VFVWNSejVHTkltcld3LzVNQ0F5RnZMV0YyK1NsUU1FT3dBNnppNEFDV3MxYmZKbkJ2N2VxWkVkSyt6ckFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ5LCJhZHZTZWNyZXRLZXkiOiJOTWlMNTlJeml3QmJoenF1V0xsTmNwTVNpOE8yMjBhRWZFb3J0eVBvWjlnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJobkZMUURDMFM2ZVhyMkR0dnQ3b0pnIiwicGhvbmVJZCI6IjU2OGVmOTRkLTgxMGMtNDNmNy1hMTMxLWNjMmQ0NGMxYjYwYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3T212RDhCN1p2Zm90Q2JnTitOb3RndGNqMW89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMm1WR090L3ZMNGR1L2YyaklmeXphVkRPcGtzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjQ2VDI4RFZGIiwibWUiOnsiaWQiOiI5NDcyMDQxNzU5MDo2MkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjI2OTc2NzQ5OTg3NDMyNzo2MkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ012ZjVvRUdFSnErd01ZR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Imk3NUYycDUxNGFVN3RuMDFMbWJMalBGTFM5WlRzcHNYbjhNYUR6SVo0RzA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlJMeVZjUFJMbjZmWGdkWHZPYURFbTFpRU1IRW9IV2UwRjdEU3hkVVZyYlBtRmxKVFdlMWdQR25MYlgyS2E2bDA2TGdVMkQxN3k2L3RXNWJKVXlDR0RBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJSaW8zUjF2Njc2UVZocVY5Y1ZSdFNBZHlSWENCWDZGRnZZOVFXUnI1NjB6UDRGdy9lcXhtMmNuV2R3b21qamFTbHo0cFB1MUduUExrV3lRZjlROEpBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzIwNDE3NTkwOjYyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQll1K1JkcWVkZUdsTzdaOU5TNW15NHp4UzB2V1U3S2JGNS9ER2c4eUdlQnQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1ODQ2OTkyOSwibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHeVUifQ==",
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
