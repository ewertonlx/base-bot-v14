const User = require("../../Schemas/user");
const Discord = require("discord.js");
module.exports = {
    name: "interactionCreate",
    run: async (client, interaction) => {
        const userdb = await User.findById(interaction.user.id);
        if (interaction.type === Discord.InteractionType.ApplicationCommand) {
            const cmd = client.slashCommands.get(interaction.commandName);
            if (!cmd) return interaction.reply(`Error`);
            interaction["member"] = interaction.guild.members.cache.get(interaction.user.id);
            //cmd.run(client, interaction)
            const user = interaction.options.getUser('user') || interaction.user;
            const mentionDb =  await User.findById(user?.id);
            const authorDb = await User.findById(interaction.user.id);
          
            if ((!authorDb && cmd?.requiredDb) && interaction.commandName !== 'registrar') return interaction.reply(`:x: | ${interaction.user}, voce nao ta registrado`);
            
            if ((!mentionDb && user) && cmd?.requiredDb) return interaction.reply(`:x: | ${interaction.user}, o usuario **${user.username}** nao ta registrado`);
            try {
                if(cmd) {
                    cmd.run({client, interaction, userdb})
                }
            } catch (err) {
                console.log(err);
            }
        }
    }
}