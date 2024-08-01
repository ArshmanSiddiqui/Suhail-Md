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
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VakBHyrAYlUIPoj8es1n";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VakBHyrAYlUIPoj8es1n" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/327d2ddca14db518b59e1.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923281514844" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "263778389057,2348169546065,2348162139814,2349066696753";
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
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/327d2ddca14db518b59e1.jpge6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_54_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4MixcbiAgICAgICAgMjgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODMsXG4gICAgICAgIDU4LFxuICAgICAgICA5LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgxLFxuICAgICAgICA0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjM4LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQzLFxuICAgICAgICA3NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDQyLFxuICAgICAgICAzMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDU3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA2LFxuICAgICAgICA3NyxcbiAgICAgICAgOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTcyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDMyLFxuICAgICAgICAxODksXG4gICAgICAgIDc3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDM4LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA1LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODYsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODUsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyLFxuICAgICAgICAxODksXG4gICAgICAgIDMzLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjksXG4gICAgICAgIDc2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNCxcbiAgICAgICAgMzksXG4gICAgICAgIDc4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzksXG4gICAgICAgIDk2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDMwLFxuICAgICAgICAxODYsXG4gICAgICAgIDcyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE1MixcbiAgICAgICAgNixcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE1LFxuICAgICAgICA0LFxuICAgICAgICA2MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDQwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjQsXG4gICAgICAgIDYyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjMxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTM3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjI3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTU0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJtTExNZUtnNS9LVXZpZXdnRUJXVEovWW5KTU42YWpEVDA5ckFWRzh2SUdrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5Z0xVZ3dhRFM4NllzXzNrMUNUXzJnXCIsXG4gIFwicGhvbmVJZFwiOiBcImJkY2NhNTAyLTdiYmItNDQ5OC05YTUxLTM0ZTY1NGVhMzNkMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMCxcbiAgICAgIDcsXG4gICAgICAxNzMsXG4gICAgICAxMTMsXG4gICAgICAxMzAsXG4gICAgICAxMDAsXG4gICAgICAyNTAsXG4gICAgICAxNixcbiAgICAgIDE1NyxcbiAgICAgIDU3LFxuICAgICAgMjQwLFxuICAgICAgNDksXG4gICAgICAxMjYsXG4gICAgICA2OCxcbiAgICAgIDExMixcbiAgICAgIDExMyxcbiAgICAgIDEyNSxcbiAgICAgIDEzMSxcbiAgICAgIDE3OCxcbiAgICAgIDE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4LFxuICAgICAgMTIyLFxuICAgICAgMTA2LFxuICAgICAgOTcsXG4gICAgICAxMTcsXG4gICAgICAxODcsXG4gICAgICA3NSxcbiAgICAgIDI0NCxcbiAgICAgIDUwLFxuICAgICAgNzQsXG4gICAgICAyMTEsXG4gICAgICA0NixcbiAgICAgIDMzLFxuICAgICAgMTg2LFxuICAgICAgOCxcbiAgICAgIDE2MSxcbiAgICAgIDIzMCxcbiAgICAgIDM4LFxuICAgICAgMTA2LFxuICAgICAgMTk3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRXMktYMTRLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyODE1MTQ4NDQ6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3MTg4MDYwNzAxNTAwMToxM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNMkl4NW9HRUxIN3JyVUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkZ1Y01ybTlHYm5ybEYzZlFCNHczcEQ3bVo0K1pJV014czgxeVJpa1IyUTg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaFZMQkxuc1FQL0ZVUm1iVnlidDFjSzk4Z29uZ04wbUFWQ1UxYm15RHFKVzRoMTJvN1IrRmJGZ2cwdjBvQ05tWFFFcWFkTlRCM0JhS2cvelF3aHU2QXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWHNXNmNSaWFLbDdrMVdRc1B0RndQRWhmS0RjZVYxQnFuUTNpM2d3TFpvb1pFbHROTlBuZVJqczB5dEVvbW9YM0FVN1MwMDhUanU2d0xOTER6NDFJanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjgxNTE0ODQ0OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNTMxMjU0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTThCXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNOEIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ1Q1dFYm0zaU1Nb2FYYVFsZHRkbjdXRDBPVmlBSy9mMUU0bktIM3hHV09vPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NjYzMDMwNTMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjUzMDU2NzA0MVwifSIKfQ==" ;


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
