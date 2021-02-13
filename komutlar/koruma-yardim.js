const Discord = require ("discord.js");

exports.run = (client, message) => {
const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("DarkQuin Youtube Channel")
.setURL("https://www.youtube.com/c/darkquinbots")
.addField(":white_check_mark: d!antiraid",":white_check_mark: Sunucunuza gelen botları girer girmaz sunucudan atar.",true)
.addField(":white_check_mark: d!ban-koruma #kanal**", ":white_check_mark: Sunucudan Birini Banlayan Kişiyi Sunucudan Atar Ve Banlananın Banını Açar",true)
.addField(":white_check_mark: d!ban-koruma-sıfırla **", ":white_check_mark: Ayarlanan Ban Koruma Sistemini Sıfırlar.",true)
.addField(":white_check_mark: d!kanal-koruma #kanal**", ":white_check_mark: Sunucuda Açılan veya Kapatılan Kanalı Otomatik Kapatır Veya Açar.",true)
.addField(":white_check_mark: d!kanal-koruma-sıfırla**", ":white_check_mark: Ayarlanan Kanal Koruma Sistemini Sıfırlar.",true)
.addField(":white_check_mark: d!rol-koruma #kanal**", ":white_check_mark: Sunucuda Açılan veya Kapatılan Rolü Otomatık Kapatır Veya Açar.",true)
.addField(":white_check_mark: d!rol-koruma-sıfırla #kanal**", ":white_check_mark: Ayarlanan Rol Koruma Sistemini Sıfırlar.",true)
.addField(":white_check_mark: d!spam #kanal**", ":white_check_mark: Spam engel açar",true)
.addField(":white_check_mark: d!spamkapat #kanal**", ":white_check_mark: Spam engel kapatır.",true)
.setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))

message.channel.send(embed)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["koruma-sistemi","help","yardim"], 
    permLevel: 0 
  };
  
  exports.help = {
    name: 'yardım', 
    description: 'The Help Command',
    usage: 'help'
  };