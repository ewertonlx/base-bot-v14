const { ActivityType, Presence } = require('discord.js');
const colorize = require('strcolorize');
module.exports = {
    name: 'ready',
    run: async(client) => { 
        colorize('[[BOT](#5f9ea0)] conectado!', true)
        const status = [
            {
                name: `Status 1`,
                type: ActivityType.Custom,
            },
            {
                name: `Status 2`,
                type: ActivityType.Playing,
            }
        ]
        setInterval(() => {
            const random = Math.floor(Math.random()* status.length)
            client.user.setActivity(status[random])
        }, 10000) 
    }
}