module.exports = {
    name: "ping",
    description: "｢Utility｣ Visualize my ping",
    type: 1,
    run: async ({client, interaction}) => {
    interaction.reply(`🏓 | Pong! \`${client.ws.ping}ms\``)
  }
};