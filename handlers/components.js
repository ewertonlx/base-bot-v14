const { Client, Collection } = require("discord.js");
const fs = require("fs");
const client = new Client({ intents: 3276799 });
client.components = new Collection()
module.exports = (client) => {
    fs.readdirSync('./components')
.forEach(folders => {
    fs.readdirSync(`./components/${folders}`)
    .filter(files => files.endsWith(".js"))
    .forEach(files => {
        const components = require(`../components/${folders}/${files}`);
        if (!components) return;
        client.components.set(components.name, components)
    })
});
}