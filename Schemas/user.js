const mongoose = require('mongoose');
const user = new mongoose.Schema({
    _id: {type: String, required: true},
    status: {type: Boolean, default: false},
    coins: {type: Number, default: 0},
    cooldowns: {
        daily:{
            type: Number, default: 0
        },
    },
})
module.exports = mongoose.model('Users', user)