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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVBYT2p5MnhwdS9DdDhaSjZKZVBWQzJvWU1GYStpZHE1WVZBdm5hRmRrOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaFdlL3F6VU42b05KbkVUeHFtdzEza3h4RFhNQlpYZTZkTkp0US9TZXh5dz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpRkUyY08xMzYxYUVFVFB2cWlCbzRVc0ZtNEErajY0UG1qRkltTG9odjJVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5ZFpqaTRCczlQYUxlYUw1eDJWTStPaGplVHpZN2w1b3NmL1F5UjN6Wm1BPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNMNzlpRWxpbldoUlZHd2tNTDlTRkVkZlYxSGY5emt2alJtZHlSUW5jV0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InN5aVpmU1IwSlN3bmZWTGtLN0pJdUc3czhacTRTM2dOanE0Lzk4dWNDbWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0Nxb3ZWWVVmZXUzTHkxaUI4cVZ6R2NBYkhiKzR4ZlJ5K0NUN29XbVprOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ1p2YUxiMlMwV2U1T2JXRGVGd2dZQnFtQlZvMU53SkhWRkdSWnczMzUxUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJaK0lKbjhvSS9qV2RuSjVDSFRIRXk2THFlUytHdU9pdXk3WFlHWFpOMjBuUHl4Rm1VN2hrRHVKV0xHcllmWjFneVRFNkpQSW9QeGF1WisycUxib2p3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ4LCJhZHZTZWNyZXRLZXkiOiJROGthSkFjUW56MzE2MUEwN2dmYVI1L01YY1JGb2l2L3V1bDVMdGNhV21JPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ2cVJfUGZEZlFheVdUWTZ5aHNYbVN3IiwicGhvbmVJZCI6IjM5OGMzYjdhLTZmMzctNGRjMC1iNWZiLWMxMTAwNGI3ZTMxNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXMUlIK3RtSnZxdzhRS1h0N3BONlNCN1lwbkk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVEZhUzY2WURUVGRZN2M5R3dYRDZIZmdHTGcwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFQOFJETUNUIiwibWUiOnsiaWQiOiI5NDc2OTE2MjU4Mzo1MEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLvvLMg77yhIO+8pCDvvKUg77y3IH4iLCJsaWQiOiIzOTUxODA0NDQ0MjY2Nzo1MEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ083ajhCOFE0cm5QeGdZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IldHMlpPeUswOUZMUURtV1kvc3dHRzhOSjN2OTg3Qi9tei94WU1wdDFyaFE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkhGZXRYTlhPRmcxY1FiOUV0L29ZM1orS3ptR3JpbWdyUG0vcWdSWHFxeUFWa1ZLeENKcGFERWxqRDNiZlpadGRYaGJBbnFmZ1ZCc29MQ1lBY054akN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIrTDgyK210Z3JtM3g1cEVvUUdhN2xJUEVVdlZJYnpPdkVmRVNLeE45Uno5c2NTNCt4RitUd0VkdVB3YnYyL25KclZwTjZQam1DYlRVdWIyeHA0cDdoZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzY5MTYyNTgzOjUwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZodG1Uc2l0UFJTMEE1bG1QN01CaHZEU2Q3L2ZPd2Y1cy84V0RLYmRhNFUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1ODcxNTEyMCwibGFzdFByb3BIYXNoIjoiM1I5WjM5In0=",
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
