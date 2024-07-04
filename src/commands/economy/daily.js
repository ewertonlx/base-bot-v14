const User = require("../../../Schemas/user");
module.exports = {
    name: 'daily',
    requiredDb: true,
    run: async({message, authorDb}) => {
        if(authorDb?.cooldowns?.daily > Date.now()) return message.reply(`:x: | ${message.author}, você resgatou seu daily recentemente, volte <t:${parseInt(authorDb.cooldowns.daily / 1000)}:R>!`)
        function getRandomNumber(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        let valor = getRandomNumber(3000, 5000); // Valor mínimo e máximo que o usuário pode ganhar
        await User.updateOne({_id: message.author.id}, {
          $inc: {
            "coins": valor
          },
          $set: {
            "cooldowns.daily": Date.now() + 86400000
          },
        })
        message.reply({
            content: `:coin: | ${message.author} você resgatou \`${valor.toLocaleString()}\` **coins** do seu daily!`
        })
    }
}
