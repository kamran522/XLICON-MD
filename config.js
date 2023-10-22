const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "923323963788"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanytofficial:s4salmanyt@cluster0.6wtgil3.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'kamranhasilbaloch@gmail.com'
global.github = 'https://github.com/kamran522'
global.location = 'BALOCHISTAN'
global.gurl = 'https://instagram.com/kamran_.hasil/' // add your username
global.sudo = process.env.SUDO || '923323963788' 
global.devs = '923323964788';
global.website = 'https://github.com/kamran522' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.imgur.com/rmCgpTY.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUVnUEI0L0JpUkh1dWtSYURFQk9GcHMveSs2TDVBaHhyWFJZYUQ3cVpHTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVGxieG5YL0w0N2t3YVdCcThHbHFaeVhGUWJIZm9MUFByUkVJamMyOU1HTT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3TEVXSEdiUWVKZ3hmYUduRURUbERqTllZZkJPOUlnQ2VSRnQ5emVOVFcwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlWnMvdW1RaUdla283SmYwNVdJMnU3V0U2NThyVUh2aDVPOGwvd1oxb1JFPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitLbzVtTlY1Z3JJTms2M3VtTGhnMzI4S3c0d1VObVZZd0VnK2ljc2p4R289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJpV3p2ZjB4RzFPN09wRWpsM0ttcndXaXU0NkZmTEhyZHloNkhhcVBFUmM9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBNUFoeCtrUTNNU3ZIaUhrTzZJU2kzRUlFVHU3MkxuaEhJdU5YNmVSU3cyNUxLMFJwSTlLL3p6ZVFDbUxQK25GQkhydTFTdjAvNmNJRVVOVmR6aGdEQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjIyNiwiYWR2U2VjcmV0S2V5IjoiL0JNNEJvWThVMlQ0ZFNzUXBvZ1dnNVJDS3ZJc3BzNDFXZFVvUGJZV05ORT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiMFhqN0xBQXBSWnEtcDBsV1lhaVp2USIsInBob25lSWQiOiJjMjdmMWFjMC0wYTVlLTQ1M2ItYTgzZi00OGJjODk5NDU5ZDMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN0VaWm9Ra3BRN0VrNkdJbGJVRXdISU9ZeEFvPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUSHdxWDlXWG5wUDNSUUM2czgzTDNEQ0ZtUDA9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNNeVo1ZFVGRU55RDFha0dHRWs9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkkzZDluN3RhbmludlZvTlE3dHI5UmVreXlLbUVjN1Q4R1FrWkxaYWp1VGs9IiwiYWNjb3VudFNpZ25hdHVyZSI6IitNZ2Z2RnhtNzQxYVRpN21CRWF3bzduOEh3a1BncXhvR1hJaTg3Y3I4Rks4Zy9wNEZkOWE3d053YTBJdkg1M09MbkZtS1prY2gzczRBQkFEc1UxdENBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIxVjlUSjd1dXVUeXhsTjUrVTNHQjFQcEpnOEc4T1Z6aHoxTGtzSXp4VTVDNVZkaWZ4aENFM1JXR3NWRjRMVVlWR0JqY1AxVzYrM1piRFRXT2hkaFNBQT09In0sIm1lIjp7ImlkIjoiOTIzMzIzOTYzNzg4OjMwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuG0hyDKnyDKnyDJqiDhtI8g4bSbIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzMyMzk2Mzc4ODozMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTTjNmWis3V3A0cDcxYURVTzdhL1VYcE1zaXBoSE8wL0JrSkdTMldvN2s1In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNjk3OTg5MDg3fQ==",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER || "K A M I"
  packname:  process.env.PACK_NAME || "K A M I"
   
  botname:   process.env.BOT_NAME === undefined ? "K A M I" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Kamran Hasil' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? 'false' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'K A M I',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
