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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0FoeTRxcHp1dE5nV3FvelNGdXp6QWhRaGppOWdBelBJUjBsV1VvbmJrVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRHlPNDZDK0FzRVR0RFNrM3RXTWVPOGd6UjVRMklYTEtBbThGSmpMQ2FSTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLQmxYdUExUCtIbnNOUk5BWkd4SGlSQ29IcDNKazMvSkV2SHZ1T2NhVUhJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNbmxVRXlBUWQ2YXVMRmdoSEVoa2lKeXlaakFNaHA3MXhmaEsyOVU1cGdjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVLMnFMVU9lR05jWmNTS2FRdjBpSk5wbVYxVHpMbjJHRE9Kb0Y3Nnk2bUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFWNEdmanYvVFJwQmRMQUNoM01Ua1FXQmxUbEVPQjhVNWxQR25qSkxiRWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU4zeWdydkgzbnFqM095UjVLZHpFbmQ1U0NwblhpaXBqbEJIY045UGdYOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYm1HejF5RDYrckhYV0pRSlZhaE1FMC9zanVPNmFhTENMbW51cllVRE1oWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFYM3AxcFlXQjZhVFYrRXZjeHdJZktoWFZkZCtYZ0VCbTJHaGZzckRRanJla1FiNDRvbFh0RnM3THgyR2lhVTU5T3YwOVhlajFoYUVzU3FIeS80WENnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQxLCJhZHZTZWNyZXRLZXkiOiJKWG9qVjd3V3UwNnZmS2JLOGxVNDJCMDVyYm15MStTNUdhSDc1VXRDdUw4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJfTkVGdlZjOVJKMms2UzdEYzh0ZG1BIiwicGhvbmVJZCI6ImRhMjE4ZjZjLWMwNDAtNDkwMS1hNmI4LTIyMGQwNTU2MDE5YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMMmcyeXFPSURRYmoxN1NXVFBUc0lJRXpDOVU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidFR4ZzNOVDdoUDBkNkJtSXkvSm5TSks5NHhzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IllOOTU5UkpIIiwibWUiOnsiaWQiOiIxMzY3ODQ4NTUzMzoyQHMud2hhdHNhcHAubmV0IiwibGlkIjoiNjAxMDg3NzE5NzEwODA6MkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ042LzdKa0ZFTDNJMmNVR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InF6ekkwc0dDS2gwMzdpaUNkdGtmRlNocVIzejFJRG1EMElINUhWMEVva289IiwiYWNjb3VudFNpZ25hdHVyZSI6Ijk2eGJ6NlE3aUd3WjRBSTZKanEzb2p6cEtlZXJrMncyR1M3eVJVcXEvVVN2ZkplZ0VTTmt2M2FGS25td0Vtc0pwekVHU1NyZHVyZU5LQ0ZmOERoaURBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI5TU5qV3BkdDU3eDRhVG1Bb0tUWnZpeXpTVnkwWUlkY2NmdFQ3QU8xWHVsSHhMTGhmZGR5YnlxSjRRYXZaR01hZ0N6cWdpdjVtcG02TmNwcUVsN2tCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjEzNjc4NDg1NTMzOjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYXM4eU5MQmdpb2ROKzRvZ25iWkh4VW9ha2Q4OVNBNWc5Q0IrUjFkQktKSyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2NzgzNjkwLCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNjZyJ9",
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
