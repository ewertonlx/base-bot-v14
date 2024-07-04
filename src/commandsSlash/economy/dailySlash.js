const User = require("../../../Schemas/user");
module.exports = {
    name: 'daily',
    description: "｢Economia｣ Ganhe coins",
    requiredDb: true,
    run: async({interaction, userdb}) => {
        if(userdb?.cooldowns?.daily > Date.now()) return interaction.reply(`:x: | ${interaction.user}, você resgatou seu daily recentemente, volte <t:${parseInt(userdb.cooldowns.daily / 1000)}:R>!`)
        function getRandomNumber(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        let valor = getRandomNumber(3000, 5000); // Valor mínimo e máximo que o usuário pode ganhar
        await User.updateOne({_id: interaction.user.id}, {
          $inc: {
            "coins": valor
          },
          $set: {
            "cooldowns.daily": Date.now() + 86400000
          },
        })
        interaction.reply({
            content: `:coin: | ${interaction.user} você resgatou \`${valor.toLocaleString()}\` **coins** do seu daily!`
        })
    }
}
