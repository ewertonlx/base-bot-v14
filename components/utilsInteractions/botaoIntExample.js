module.exports = {
    name: 'botao',
    authorOnly: true,
    execute: async ({client, interaction, userdb}) => {
        interaction.reply({content: 'Clicou'})
    }
}