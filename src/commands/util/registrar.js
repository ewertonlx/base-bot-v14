const User = require("../../../Schemas/user");
module.exports = {
    name: 'registrar',
    run: async({message, authordb}) => {
        if(authordb) return message.reply(`${message.author}, você já está registrado no banco de dados!`)
        message.reply({content: 'Registrado com sucesso!!'})
        await User.create({_id: message.author.id});
    }
}