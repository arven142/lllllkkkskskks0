const Discord = require('discord.js');
const ms = require('ms');

exports.run = async (client, message, args) => {

 const embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setAuthor("Giveaway")
   .addField('Commands' , '`\`start`\`, `\`end`\`, `\`reroll`\`')
   message.channel.send(embed)
};