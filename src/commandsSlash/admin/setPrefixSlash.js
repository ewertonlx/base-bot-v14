const Discord = require("discord.js");
const guilds = require("../.././../Schemas/guilds");
module.exports = {
  name: "setprefix",
  description: "Altere meu prefixo",
  type: 1,
  options: [
    {
      name: "prefix",
      description: "Novo prefixo",
      type: Discord.ApplicationCommandOptionType.String,
      required: true,
    },
  ],
  run: async ({interaction }) => {
    const prefix = interaction.options.getString("prefix");
    interaction.reply(`${interaction.user}, meu prefixo foi alterado para \`${prefix}\` com sucesso!`);
    await guilds.updateOne({_id: interaction.guild.id},{
        $set: {
            prefix: prefix
        }
    })
  }
}