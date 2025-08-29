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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0VmSDh2MDVERWd3ak1tT29ZMUJ0WWZHNmJsTENXZmMvV1FJbmFzalhrTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYTA1djZ4R1dma29YTHUzY0UybVdyRzZJWTBybm9WK1ZQQ2JDazNlREFVZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5RkNPNnNab2gxeXlMcVNUdDg3ZTVaUEloSWY0NXI1RGp5NS9VVkRIeEZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJldS9ZTFltY0w4ajJWQjZCOVdtQ2ZKZlF0K0VRTUZDRWZXSk5QYzg4VHhFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndQZDM0cGlDNGZ6OGRRVzNVTUxhUU5pYTRvZXZxV1RoTC9zL25MY2YvVUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InN0cDlJbE9ocjN5SEJBc29neWYraStoTHBPcmpkRTArKy9YaEpKQnUza3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ081U1hicXJoaWJNOUxXWXlTMzJWdUcrbGV3ZW9JcDdDRzF2ZkdISk9sQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWDFlV29PRkpSVjdYNUUvSzMveTNsQ2dJKzdka2VKSjNlYWFiM2ZNQlBIVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjcvM2V3WUlVaGpPam5pQlU3ZlJzQ3dnZ3ZvY0hYS1lLZFk2VEE3V1d4bXFrakJhRnE5THNpMnlockxYc2JqblRTWDZCWDhCNUZiSVFZajVIY0phM0RnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzcsImFkdlNlY3JldEtleSI6ImN5aWVEdGlyY3c0UjhsM28zTjh4c3VCNmdrN1BIcC9VV2dPTGJSRTJCYjg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMTIzNjMxODk5MDRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOTczODA4QUI3NzFFMUI1QzE3ODAyNTk5NkE4OTE4OTkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NjQ4NDc3M30seyJrZXkiOnsicmVtb3RlSmlkIjoiMTIzNjMxODk5MDRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNjM1OTNEOUNBNThFMEUwMjgwRkNERDNDQzQzQUVGNjEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NjQ4NDc3NH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMTIzNjMxODk5MDRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRTZBQkRGRUY0MEFCN0VGMEEyMzU0REJEMjE0M0UyM0EifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NjQ4NDc3N31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiMEZ1ZUMwX2hSamlYVjZyaTVmcWtlUSIsInBob25lSWQiOiIyMjcyZjQxMi0xMGRjLTQ5NGYtOTAyNy1jZTNjMGMxMTYzYzIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNWWXJSVkdWcUp1R1RFTWdFMEpLTHU4ekVVPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IksvdTNhWmpaelRycEhHd1dhSG9rNUZTbzNidz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIxQzROSEw1RyIsIm1lIjp7ImlkIjoiMTIzNjMxODk5MDQ6MTZAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxNjE3MTQ3Mjk0MTg4MTc6MTZAbGlkIiwibmFtZSI6IvCdkILwnZqu8J2atfCdmrXwnZqt8J2QmOKEouKckzI0LzcifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05MS2cwMFFscW5IeFFZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlV0SHpRWTNEcFZ3YVlUT3RseFdIcGVnbjNDdG01SmZBZnpRQWdOMTkrRGc9IiwiYWNjb3VudFNpZ25hdHVyZSI6InVUNTJsbmc5TGpkTTNpd0dnajJlNWRPSVY2SGpsZVVGaHN4SzZJN2tpZEJrRFRPeUdraU56eDNhYTE1NUJWNUYzbXBGemcxT3d1RjJDUnpHOWVlT0RnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ1U1RVWCtmNXUrNmdyYzZBNGlGdElyWnRtYXhMNUpvMW9oNi95aGZxU3htUnVVVG14dVk5dVZ2WGllNmNmdmsydHo1bGZpV0lxdmw1OEZ3d25ZZG5BUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjEyMzYzMTg5OTA0OjE2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZMUjgwR053NlZjR21FenJaY1ZoNlhvSjl3clp1U1h3SDgwQUlEZGZmZzQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjQ4NDc3MiwibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOTXAifQ==",
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
