const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="apgking208@gmail.com"
global.location="Mutan,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@cluster0.t1wsjlv.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923281514844" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923281514844";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_35_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMyLFxuICAgICAgICA5MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjU0LFxuICAgICAgICA2OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDU3LFxuICAgICAgICA1NixcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDk2LFxuICAgICAgICAzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjEyLFxuICAgICAgICA4MixcbiAgICAgICAgMzYsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUxLFxuICAgICAgICA4OCxcbiAgICAgICAgODksXG4gICAgICAgIDE1LFxuICAgICAgICAzNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3NixcbiAgICAgICAgODgsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjEyLFxuICAgICAgICA4MSxcbiAgICAgICAgMixcbiAgICAgICAgOTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDgsXG4gICAgICAgIDIyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDUsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODksXG4gICAgICAgIDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDgyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTYxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NSxcbiAgICAgICAgMTY3LFxuICAgICAgICA1OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODIsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyLFxuICAgICAgICA0MyxcbiAgICAgICAgMixcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODEsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTgyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE5LFxuICAgICAgICA0NixcbiAgICAgICAgNjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDcwLFxuICAgICAgICA1NCxcbiAgICAgICAgODEsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDU5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE2LFxuICAgICAgICA1NixcbiAgICAgICAgMTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMixcbiAgICAgICAgMjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJvc0JOUXBtdldpZGwrNWYvRmhWY2N4dC9SSnlvUThEN09xekMvd3lKQWNvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJxVUt0elNlbFRDU1BXT2NGNFUtaDJRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjllNTFlODg2LTM0YzUtNDMyNS04ZjdmLTk1Y2EwYTMzNTU4NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMixcbiAgICAgIDE3MSxcbiAgICAgIDEyMCxcbiAgICAgIDE1MCxcbiAgICAgIDI1NCxcbiAgICAgIDIxMyxcbiAgICAgIDE1OCxcbiAgICAgIDEwMCxcbiAgICAgIDI1MixcbiAgICAgIDU4LFxuICAgICAgMTk5LFxuICAgICAgMjU1LFxuICAgICAgMjAxLFxuICAgICAgMjYsXG4gICAgICAxMTYsXG4gICAgICAzLFxuICAgICAgMTcxLFxuICAgICAgMjM3LFxuICAgICAgMTA0LFxuICAgICAgMTgyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ5LFxuICAgICAgMjAxLFxuICAgICAgMTM2LFxuICAgICAgNTcsXG4gICAgICAxNDYsXG4gICAgICAxNjEsXG4gICAgICAzNCxcbiAgICAgIDIwMixcbiAgICAgIDI0MixcbiAgICAgIDIzNyxcbiAgICAgIDQzLFxuICAgICAgMTk0LFxuICAgICAgNDAsXG4gICAgICAxNSxcbiAgICAgIDIyNyxcbiAgICAgIDIxMixcbiAgICAgIDQ3LFxuICAgICAgMTQyLFxuICAgICAgMTIxLFxuICAgICAgMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSkE4TkdFS1ZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI4MTUxNDg0NDo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzE4ODA2MDcwMTUwMDE6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNeUl4NW9HRUlXR2hMVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkZ1Y01ybTlHYm5ybEYzZlFCNHczcEQ3bVo0K1pJV014czgxeVJpa1IyUTg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaXFWU243eVdsMnBTL09VQTFZWTh5Uk5oVGZRaGZHbisrLzNGNjgzNzR2cXExYStXSHVReWQxL3JMcUhva29nRmhBVmtCd1pWZTNYblBVZi9Hc2lGQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZGNaYzFucFZlckxVcXh5dWoxb3JVWEwrMjFPeHZDNUI1SWpyRUpaZGNlbnFKcDM5TXova3JWdXhockdleGpMaWVMRnFUbENjRE1McjhNZytzOStRQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjgxNTE0ODQ0OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE4MjgxMDUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNVVBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1VUC5qc29uIjogIntcImtleURhdGFcIjpcInZxc0Q4YXVLdUNUMEU3ZDVReElFS1QxajVkeWw2U01HNWt1UE9BSzBUSGs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY2NjMwMzA1MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxODI4MTA5MzQyXCJ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aizen, 2: Aizen, 3: Aizen Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "Aizen",
 
  author : process.env.PACK_AUTHER|| "Aizen",
  packname: process.env.PACK_NAME || "Kyoka Suigetsu",
  botname : process.env.BOT_NAME  || "Soul Society",
  ownername:process.env.OWNER_NAME|| "Aizen",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
