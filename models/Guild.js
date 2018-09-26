const mongoose = require('mongoose')

const Guild = new mongoose.Schema({
    name: {type: String, default: ''}, 
    members: {type: Number, default: 0}, 
    createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Guild', Guild)