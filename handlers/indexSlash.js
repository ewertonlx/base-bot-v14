const fs = require("fs")
module.exports = async (client) => {

const SlashsArray = []

  fs.readdir(`./src/commandsSlash`, (error, folder) => {
  folder.forEach(subfolder => {
fs.readdir(`./src/commandsSlash/${subfolder}/`, (error, files) => { 
  files.forEach(files => {
      
  if(!files?.endsWith('.js')) return;
  files = require(`../src/commandsSlash/${subfolder}/${files}`);
  if(!files?.name) return;
  client.slashCommands.set(files?.name, files);
   
  SlashsArray.push(files)
  });
    });
  });
});
client.on('ready', () => {
  client.application.commands.set(client.slashCommands)
});
};