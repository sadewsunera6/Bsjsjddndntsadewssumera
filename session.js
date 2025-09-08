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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0VDZHArMjdUaTRkNnN5akpPSjFRSkNJSkJDLzdxMUZQd29GN3RDSFdYcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicndHelBPd0dxWitxTGpDZU92YzN2YW5CbllHanFVTkhIZkhRVGlZV0YwMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTRHplL0dTTUhPVWN1QUJ0UE9KMnM3Nmc1RXR4Ri9jSzNZWUFGd3hDcjJnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUNVB4N0JhUUFabGdmc2owekV3S3gwWEZuQjBBTHZITVR6NWkvWUZ5cWhrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklGN3FWWU5oeDVINGJWdG9KWHVZMGhXeEFQYnhaNW1kWVRSZ0FiTlk2bUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9nZkE3TFFqMExOSmpnR3NWNXlra0tHS2Z2V2RlSkVHZjRqaWgrbWdsRlk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0ZEYWg3Vnd6bWFlV0VmVEFlSDVvTllSbFY5UUhkRTNWelNZTkt2VGVIcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia3BVSXB4S1E5NG15YytTRGplcDFzTXFIVnk3bmNUVFV6KzUwSDhaUVJTcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFOQmRzSHFoQWpJUVhHVHBSalQ0QTZ3dUhHWm9leFc4R09MYnNQMDdrdmhpRldEZVZmVjFvQXcrTEZEYjZDNFRVTnVCSVBWSDlJM0p3R1ByVGx3M2p3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDYsImFkdlNlY3JldEtleSI6Ijl3TlNrY3YxK0QwRjY2eHl2ZVhNY0dBZlRDb2pWTTFGbk5DSFo1WHpiSDg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImpLZnhaT0FKUXVPTkRyaFczY0xVNUEiLCJwaG9uZUlkIjoiOTdkODk0ZGQtZGUyZi00NTgxLTg3ZjUtMjg3OGU1Mjc2YTlmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im82ZTdjbjFHRWFocTIxQnE1aVYzSTRSYTdrVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3OHpDb0VMVEQzSUo1UmlBcXZ4dTNhVVJkUzA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMUZIRlJTQkUiLCJtZSI6eyJpZCI6IjEzNjc4NDg1NTMzOjI4QHMud2hhdHNhcHAubmV0IiwibGlkIjoiNjAxMDg3NzE5NzEwODA6MjhAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPQy83SmtGRUt5Ti9NVUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJxenpJMHNHQ0toMDM3aWlDZHRrZkZTaHFSM3oxSURtRDBJSDVIVjBFb2tvPSIsImFjY291bnRTaWduYXR1cmUiOiJPMHJwYXduSG5UekZPMG83YU94VmdXZkZWbnQwSzdvbzJ3d0I3QVNtSFBkV2krb0RTcXYraDAxWUg3ekgzVE5iWXVMRmVzVENiYTBZTy9wSmFNaEJDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiT2RWdFpRaW9VUzczcXFOR0o4eDRBdUpVcDV4YnJnekJtR3E5YmxDWlQzZFYrWVBIc2lzaW5BN29yYk9tL3M0NlRJQmV0bVBVQmYycHpQZHFqZEFXaWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxMzY3ODQ4NTUzMzoyOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhczh5TkxCZ2lvZE4rNG9nbmJaSHhVb2FrZDg5U0E1ZzlDQitSMWRCS0pLIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTczNDk1NjIsImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRXVkIn0=",
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
