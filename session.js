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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUwxOHJOcWNPb0ZoMm5SeXFTdXVlbTlvemZueTR0MkdSOUV6RFp4REZVbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMTA1SGNqMVdCN29YNDVEdjE1T296MUtYYnRaT3lIZUZUQ3VSMlFiRmNERT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQU5yV2dKWFN5djd6TkZBOEt3QW1tcmdUZE93RTZOZ0pRVjNzek9MNEZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIWFU1ekZvdG5wc21tc0V2T3AybnBiczBBWU92cU1OUG9ubVoxRm9uVmdzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVFNVNXbExxcy9OcCt2UlZXZFUxOEJ1Q3dFRUtKQ003ekQ2QjZQSGxJWGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9yazRtczNzdEY0bytKNnJ6QTl0ajdORnF4czRsSGdJRThMbHZLaWhseDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0w1VTVTSkFKS2s4SWVud1U1cnVhd2kvcFFZRG9EUXEvM2F6SWljZU1Xaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZnBQd2twMlZIKzYzVXBwWE9LaEQ4QVJ5M202R1lvN016UG1WMmdCRGZ5TT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjMwaEdCek90ZHZqd0NzZ2ErL3l1VFVGeG82R2JHU3h1U25VTFNucVVKUWR1TUxjUWYvMVE4VEFDOE1TREtDVVduTUp2RTRpYVp6ZyttVlkwc3ExcUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI0LCJhZHZTZWNyZXRLZXkiOiIxbEJGNjM1bVJIM2lJRFJjMlpQbERGWHY3Y3RWU2xIK2VNTER3L1F3YUE4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI5NUM0WWEyV1FNdVlCUEJONy1tRDJRIiwicGhvbmVJZCI6ImFlNWI0MmIyLTFlZjktNGNiZS1iZDRhLWQ3ZGNiNWNlN2Q3MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHdHlqbCsxdmloQ0FXcWJoVTFSMmJhTHBrdEE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0dJTG1pWWYxUno5clNINnFzS3ZFU2sxZzdvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlBaRVY0Q0tKIiwibWUiOnsiaWQiOiI5NDcyMDQxNzU5MDo2MEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjI2OTc2NzQ5OTg3NDMyNzo2MEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ012ZjVvRUdFTXE3c01ZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Imk3NUYycDUxNGFVN3RuMDFMbWJMalBGTFM5WlRzcHNYbjhNYUR6SVo0RzA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IllidnRWZy91RlN0bW9iT1JUQzQvTjZPWnNDWDAza2cwZW5FMmtzcnRlcVZvUXVkaFAwWXdtRlpmMWVoWElYeU1xUURGbXczYzAzQXNTek1TV2pKakF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJLK1pDRURrOUU5YzcweFREK0VLek5vV2R5MkF0ZDJjKzFZRmpVTlMrbGdOUlRFTEtPRmlBMkxtdEQySTE2UjBqNDVncG5Sd2xrU3JsRWtoUmVGQnJCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzIwNDE3NTkwOjYwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQll1K1JkcWVkZUdsTzdaOU5TNW15NHp4UzB2V1U3S2JGNS9ER2c4eUdlQnQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1ODIwNzQ0OSwibGFzdFByb3BIYXNoIjoiM1I5WjM5In0=",
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
