const { Client, Collection } = require("discord.js");
const Discord = require('discord.js');
require("dotenv").config();
const client = new Client({ intents: 3276799 });
client.commands = new Collection();
client.components = new Collection()
client.login(process.env.TOKEN);

client.slashCommands = new Discord.Collection();
client.developers = ['seuId']; 
require('./handlers/indexSlash')(client) // slashCommands loader
require('./handlers/mongodb') // mongodb connect
require('./handlers/indexPrefix')(client) // commands loader
require('./handlers/components')(client) // components loader
require('./handlers/events')(client) // events loader