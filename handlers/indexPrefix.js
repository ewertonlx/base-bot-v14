const { Client, Collection } = require("discord.js");
const fs = require("fs");
const colorize = require('strcolorize');
const client = new Client({ intents: 3276799 });
client.commands = new Collection();
module.exports = (client) => {
try {
    fs.readdirSync("./src/commands").forEach((subFolder) => {
      fs.readdirSync(`./src/commands/${subFolder}`).forEach((cmd) => {
        const cmds = require(`../src/commands/${subFolder}/${cmd}`);
        client.commands.set(cmds.name, cmds);
      });
    });
    colorize('[[COMMANDS 🔧](#1E90FF)] carregados!', true)
  } catch (err) {
    console.log(err);
  }
}