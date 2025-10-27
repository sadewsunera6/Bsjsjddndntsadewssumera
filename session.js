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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUNhRzVrSDd3dGR5UEU4QnpvdmVVMDF3V0NVSS9jVmRnbzFLNCtKWkdVWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVDBQZnNHOEZxMy9DV1NUR1pZZFNQcmtSM2F2bDFvWnJEYjRDc0IrdXVBYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSWdNbWUwUTVNakFEK21zTGJ3NnhOOU9keXdwRHNzSXBFRkZGYW54N25NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxMEw3Q29Ya1V3d0V3R0pjeFVFckVNUXRkeVFzUHFrWWRqelE5NDdMdHdRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNITzlSWkZRQklhcHpQT1lyOGtMaHJrTGtFaE9Sa1hpUjZKcGpMNTYwSEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFCeXJxNGR2ZlFsS3gyQThwSWtPY3NMek0xUVR5WkdQTTlBclFyQm5ObFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEdxLzJlM0Uvam1KOW5mMkVBaDRSUVdIR0xFNGtKZ1d6c21LSER4VWgyUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSERzekxxUjBEU0RJdzU0a0hTb2FDM2tlbnNJbUs1K3JndDJWclIvS3kzTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imp4dmF5cCtpVWpnaEIwQi9YQkJWZmxSOCtoQStLYVhSRjlYeklDRWNnTjZEdk8zQW05VWtxK3pmTVF3T3o0dkdxS1VkWHh0WGhyUW5aNFR6Yjgya2lnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQxLCJhZHZTZWNyZXRLZXkiOiJaSnlyTXhYRzczbGliaXhEUE5BUStidXhDUGgxZzZGc2NlazNDSzNiNVowPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI1eDdsdUZGVVJ2YVQ5SUhOZFBaNGJRIiwicGhvbmVJZCI6IjdkMGRlMzE1LTZkZDUtNDdlZi1iZmY3LThhNDc0ZTU1ZjZjYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzVXVSUDRPeXlqS2l1NTlWd3JrYURYcG5NcjQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieWUxRnlucDJ5ZDZZMVVyTXdPQks3UmxhOVZrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IllLVFZKNlNKIiwibWUiOnsiaWQiOiI5NDc2OTE2MjU4Mzo1M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLvvLMg77yhIO+8pCDvvKUg77y3IH4iLCJsaWQiOiIzOTUxODA0NDQ0MjY2Nzo1M0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ08vajhCOFE5S244eHdZWUFpQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IldHMlpPeUswOUZMUURtV1kvc3dHRzhOSjN2OTg3Qi9tei94WU1wdDFyaFE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlpCWE00SS94cVp2Y2Zud0hUTGJUenNUSjlEM0VpMGxjUzZ0NlpiTnFhWStuZEZ4VjNvVTBRdTJLc0ZlMldMdWx4ek5UZzBhVklDNFVUbXJ0TXpzeENRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJMUXNPaW9RTzcwZEhwUzlIR1VTREUrdlNMNElUU2U2V1hZc242c01pNzdhWkFmbkxQeXNucVpLRHFTdmpaSk5velR3SGExOSswc3RENENsd085Yk9qUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzY5MTYyNTgzOjUzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZodG1Uc2l0UFJTMEE1bG1QN01CaHZEU2Q3L2ZPd2Y1cy84V0RLYmRhNFUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2MTU0NzUyMiwibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCY1gifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "+94769162583",
  PASSWORD: 
    process.env.PASSWORD || "Sadew4321",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94769162583", "94724304850"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
