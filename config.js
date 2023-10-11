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
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUtvSkQ5emg3SDkzUVR3Njllc3F2aDJEbUVYN3Uxc0ZJV1lyVnhRYkMzST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN292ZHZjWUYyY0pSL000OURnWVFSalR6K0RORXNoajlkVU1YSVZ2RCtuOD0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrTFFRNTUxekM1NE03TVlUSTk5cElxRnpYUjB6Qm1lMFBzWnNpcWdDVVdBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDeWpTZEticmE4VUQ2SFI0bm1MdDQxT3dkOWJpNUp4bTFwek5xcElJTG5FPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBESE1HNDJLRHBwaWlnZEFzaXRGSVBmY1FyRjFkWWJkQUtjWHk3MUwwRlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpUeXJqM0xmS2ZtV2ZLbE93ZjY5TUVSeG40U3F3ZERYTEFvU24rVW8zUVU9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSVhSZEI3YVRHYTNvbXMyb3dUNk1pQ2oyQXBIOTdGc1Bma0Z3QjlXSWU0MkZBQVBKbC8ydTU1VFBPWngzZU14NFBJWmQ1akhLb2U4eVpaTlFtOHdoQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjEzNiwiYWR2U2VjcmV0S2V5Ijoic3JwMkwybGNyZWttWW1FM2NvaEVrQWJiWVorejZVQ0RwWFhyV2VDdDdORT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiZGtpaERXZzBSOEdoYnc3UXhwRkU4QSIsInBob25lSWQiOiIyOTE5M2E4NS1iNjQ2LTRkMTItYjI4ZS02NDRkMGE5ZTc3ODciLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTXVHZGxpZUVrb0RUaHhZazhNUi93Vi9SZ0FvPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwZ3hBRVRQWld2NXc4MkpqN2lNR0M3b1ZMN009In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNNeVo1ZFVGRU15TG02a0dHQms9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkkzZDluN3RhbmludlZvTlE3dHI5UmVreXlLbUVjN1Q4R1FrWkxaYWp1VGs9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im50T1Zid09EVVowOXdKdTZRSDF0RVJOZGRzTmR1RlpqUUV4QmlFZ0VNYVM3Sm1ZTlMwUmtkSVBSWmRyeDFucUtVckRDM1N3QUdmTXdpbWtTRkVqRERnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJmSVNoSSthRFprTktSU3YyR012c2kycUdtc1MrOUU3YzNTQWVBTmdWRTNFMUxWYThpZFF4c1NQRUFtTW5iZVhud2s3SUE3aTNuWDN3SkF1eHZYSzdpZz09In0sIm1lIjp7ImlkIjoiOTIzMzIzOTYzNzg4Ojg4QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzMyMzk2Mzc4ODo4OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTTjNmWis3V3A0cDcxYURVTzdhL1VYcE1zaXBoSE8wL0JrSkdTMldvN2s1In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNjk3MDM5ODIzfQ==",  //PUT Session Id Here, 
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
