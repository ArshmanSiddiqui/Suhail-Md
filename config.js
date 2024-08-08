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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348104830937,447312354503,447305287242,917506167064 ,2348154574139,2347035091262,628971022333,2348056833928";
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_23_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMixcbiAgICAgICAgMjE2LFxuICAgICAgICAzMSxcbiAgICAgICAgMzksXG4gICAgICAgIDEsXG4gICAgICAgIDU0LFxuICAgICAgICA0MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMixcbiAgICAgICAgODQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDM1LFxuICAgICAgICAzOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjEyLFxuICAgICAgICA0MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDc3LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDUyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDYwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc0LFxuICAgICAgICA1MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQxLFxuICAgICAgICA5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDg4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDM4LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxLFxuICAgICAgICAxMTksXG4gICAgICAgIDI5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzksXG4gICAgICAgIDQ3LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5LFxuICAgICAgICA4MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDk1LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjI3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjUsXG4gICAgICAgIDUwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTUwLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDc4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzNixcbiAgICAgICAgNzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNixcbiAgICAgICAgMjgsXG4gICAgICAgIDY4LFxuICAgICAgICA0OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTQxLFxuICAgICAgICA2MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDQyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg0LFxuICBcImFkdlNlY3JldEtleVwiOiBcImkzZkNRNERLRUlNd1E0R1U3ZTdBVmtlNkZTMFN1TEJPUWd2bEVmQXFEbm89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjgxNTE0ODQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4NUQ0NTRCRTAzQzdFQzFFREVFNTg1OEZCMDI0QkNFNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjMxMDkwMzVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwib2NKSEhfTmpSa0NteExad21EZ1ljUVwiLFxuICBcInBob25lSWRcIjogXCJkZTExOGFhYS00NDMyLTQ3YjEtOTM4Mi03ZTM2ODRjMjg4MmNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc5LFxuICAgICAgMTE3LFxuICAgICAgMTM3LFxuICAgICAgMjU0LFxuICAgICAgMjMxLFxuICAgICAgMTkxLFxuICAgICAgMTgxLFxuICAgICAgMTAsXG4gICAgICAyMDEsXG4gICAgICAyMTMsXG4gICAgICAxMDIsXG4gICAgICAxNzEsXG4gICAgICA1MCxcbiAgICAgIDEsXG4gICAgICAxMDksXG4gICAgICA4OSxcbiAgICAgIDI1MCxcbiAgICAgIDgyLFxuICAgICAgMTAzLFxuICAgICAgMjUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMyxcbiAgICAgIDk4LFxuICAgICAgNzYsXG4gICAgICA5MSxcbiAgICAgIDE4LFxuICAgICAgMjIsXG4gICAgICAyNDEsXG4gICAgICAyMjQsXG4gICAgICAyMzgsXG4gICAgICAyMDEsXG4gICAgICAxOTYsXG4gICAgICAyMDksXG4gICAgICA0MixcbiAgICAgIDQ4LFxuICAgICAgMTY0LFxuICAgICAgNDAsXG4gICAgICAyMTksXG4gICAgICAzOSxcbiAgICAgIDk1LFxuICAgICAgNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4S1NDNkZZUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjgxNTE0ODQ0OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzE4ODA2MDcwMTUwMDE6MTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTTZJeDVvR0VLS2QwclVHR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJGdWNNcm05R2JucmxGM2ZRQjR3M3BEN21aNCtaSVdNeHM4MXlSaWtSMlE4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInBNNFhxM0pBMXFSUmVRMldkMWc3MWRUUXZJaFZSUE9pd1hQOG1NNG9oSGxITllYZG9HcUtFYkFHV2NEQkp5Zit0YVVUbmhaQnRsZGxuOXNaY243YUFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkZRVHBmTCtUckgreDNuZ2Y1SmZCaU83YVVBN1lPZS9zTzdDYVc4Zzh0OGl4MnN5dUdyVlRqTm8zaHRWNWw5TTF0dzd1TG1KUnBOWU85YW1ad3kxR2hnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI4MTUxNDg0NDoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzEwOTAyOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUV3c1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRXdzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOGlzZ3JiRHljSXV6YkFUY1JZbnVWWHczTnFET3lNd2xhTG92WnVMM0gvdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjY2MzAzMDU0LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI5MTY4NDY3MDBcIn0iCn0=" ;


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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
