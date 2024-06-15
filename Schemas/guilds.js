const mongoose = require('mongoose')
const guild = new mongoose.Schema({
    _id: {type: String, required: true},
    prefix: {type: String, default: 'h.'},
})
module.exports = mongoose.model("Guilds", guild)