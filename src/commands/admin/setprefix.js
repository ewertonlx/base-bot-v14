const Discord = require("discord.js")
const guilds  = require("../../../Schemas/guilds")

module.exports = {
  name: "setprefix",  
  aliases: ['prefix','sp'],
  run: async({message, args}) => {

    if (!message.member.permissions.has(Discord.PermissionFlagsBits.Administrator)) return message.channel.send(`:x: | ${message.author}, você não possui a permissão de \`Administrador\`!`)
    const GuildDB = await guilds.findOne({ _id: message.guild.id })
    const p = GuildDB.prefix ?? '.'                                                                                  
    let newPrefix = args.join(' ');
    if(!args[0]) return message.reply(`:x: | ${message.author}, defina o prefixo!`)
        
    if (newPrefix.length > 2) {
        message.reply(`:x: | ${message.author}, o limte de caracteres é \`2\`!`)
    } else if (!isNaN(newPrefix)) {
        return message.reply(`:x: | ${message.author}, o prefixo não pode conter números!`)}
    
    else if (newPrefix === p) {
        message.reply(`:x: | <@${message.author.id}>, este prefixo \`${p}\` já está setado como meu prefixo atual!`)
    }
    else {
        message.reply(`${message.author}, meu prefixo foi alterado para \`${newPrefix}\` com sucesso!`);
            await guilds.updateOne({_id: message.guild.id},{
                $set: {
                    prefix: newPrefix
                }
            })
    }
  },
}