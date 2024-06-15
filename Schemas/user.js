const mongoose = require('mongoose');
const user = new mongoose.Schema({
    _id: {type: String, required: true},
    status: {type: Boolean, default: false},
})
module.exports = mongoose.model('Users', user)