const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar yüklendi! - DarkQuin Youtube Channel`);
  console.log(`Altyapı DarkQuin Youtube Channel'e Aittir`)
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${client.user.username} ismi ile giriş yapıldı! - DarkQuin Youtube Channel`); 
  client.user.setStatus("dnd");
  client.user.setActivity(`DarkQuin Youtube Channel`);
};
