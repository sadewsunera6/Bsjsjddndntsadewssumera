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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEZsUFJCTVY5UXp2UDdBYzNCTU5hd3BsZTBML2xUMzZRcktJY2xPZmlYZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT3NQMENmaHU0NEJES2hFVk92SGNXNGw2WDRuSXVJRDRhUmVGcndKMURWND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvSnJBREhqNHBFK3VJVkNJdVlWdXEwVlZnOVkrOWJVbU9CMkpiSWxYYTM4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBR3lZUG43NHZOa2VRdHZUdjJvbU5YY29vSkxseGJ0bVNOcThnMWJtN0FnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNQVnViUi9oVFltUzNyZkJQdWQ5YlVkbW5HbThjek9DKzJlYzdHWTZJRU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdLUjFUR3ZHTjFTQ3AxNjVTKzY5cENrVUhSTFBJLzR1b2pjWTZ5WC9HeDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0w2b3pQODdkZnNhZlFnQ3NwSnk3VTVQenp2eXNyaVJadE1pV3ZwUGdXUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWjluWnNEckl4SXpkZG1MOXFJZ0dUZnNGMzlQT1RzREVzaE1DOVdrRHZ4Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBWYnpmOGJoUnNUMDB2LzVUS2hlSzNuLyt2eUZUUlRxNVlyQWNTaVovK3l1Y2pYRTVtWWtvTitKNkVUM095a0JPeUJzQ0Z4TXhobTh4djNlUUNxb2hnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAzLCJhZHZTZWNyZXRLZXkiOiJlenJCNU5CMmZrNGc0UkVxZ1NlVEppazZEcXZkaXB4L3M1OGQ2ZkRHZnRBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjE0Mzg1NTQ2Nzk4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjA2NDRDMDRGODVBMjQ0MjJDQ0VBQjVCN0MwMEZFQkEwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTUzNTE1NzN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjE0Mzg1NTQ2Nzk4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkQ0Q0Y1QUY0RDM5NzdCQTRCMzlEMDdEMkJBQTQ0QkNBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTUzNTE1NzN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IllRRlFLRDNNIiwibWUiOnsiaWQiOiIxNDM4NTU0Njc5ODoxMEBzLndoYXRzYXBwLm5ldCIsImxpZCI6Ijg0MTMwNDU2OTc3NjE5OjEwQGxpZCIsIm5hbWUiOiLwn4eo4oCK8J+HreKAivCfh6rigIrwn4eq4oCK8J+Hv+KAivCfh74ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tIMnlvWUZFSUtVZ3NVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkZuTFMrQ2NDc0xTVThuUDVObmU0YjUrV1FBVzJlbzIzL28vNXNYWC9ReGs9IiwiYWNjb3VudFNpZ25hdHVyZSI6InppTGMxR05ldTEya1lRWUVWMlFGWHV4NVFxZkJnUWkzZXpzakcvb3BUZDk3R2Fpb0pONVFESmhVSTZtMHpWUDExS01xLzI5azk5SWZYbjN5d2xwL0RRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJQdFpaSXhWcHFZakVlQ1p0YlNsLzBSc05tNHg4Yk1CYTJJRlBTYWVVbGNPb1YzT2IzbE4zUGp1aEI1Um5BdnpSbXUxWXpsRm91OXJ0cE43V3ZSeW5nZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjE0Mzg1NTQ2Nzk4OjEwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJaeTB2Z25BckMwbFBKeitUWjN1RytmbGtBRnRucU50LzZQK2JGMS8wTVoifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTM1MTU2OCwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNZmUifQ==",
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
