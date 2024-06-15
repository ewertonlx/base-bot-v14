const fs = require("fs");
module.exports = (client) => {
    fs.readdirSync('./src/events').forEach(event => {
        const eventData = require(`../src/events/${event}`)
        client.on(eventData.name, (...args) => eventData.run(client, ...args) )
    })
    process.on("unhandledRejection", (error) => {
        console.error(error);
    });
    process.on("uncaughtException", (error) => {
        console.error(error);
    });   
}