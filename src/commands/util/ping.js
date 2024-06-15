module.exports = {
    name: 'ping',
    run: async({client, message}) => {
        message.reply(`🏓 | Pong! \`${client.ws.ping}ms\``)
    }
}