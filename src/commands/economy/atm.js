const User = require("../../../Schemas/user");
module.exports = {
    name: 'atm',
    aliases: ['saldo', 'bal'],
    requiredDb: true,
    run: async ({message,authorDb, args}) => {
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        const allUsers = await User.find({}).sort({ 'coins': -1 });
        console.log(authorDb)
        let indexOfUser = allUsers.findIndex(userposi => userposi._id === user.user.id);
        message.reply(`:coin: | ${message.author}, ${user.user.id === message.author.id ? 'você' : user.user.username} tem \`${authorDb.coins.toLocaleString()}\` **coins**, e está na posição **${++indexOfUser}°** do rank!`);
    }
}