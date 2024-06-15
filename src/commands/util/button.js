const Discord = require('discord.js');
module.exports = {
    name: 'button',
    description: 'Button example',
    run: async ({client, message}) => {
        const botao = new Discord.ButtonBuilder()
        .setCustomId(`botao-${message.author.id}`)
        .setLabel('Clique em mim')
        .setStyle(Discord.ButtonStyle.Secondary)

        const row = new Discord.ActionRowBuilder().addComponents(botao);
        message.reply({content: 'Clique no botão', components: [row]})
    },
};