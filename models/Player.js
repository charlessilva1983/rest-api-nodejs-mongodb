const mongoose = require('mongoose')

const Player = new mongoose.Schema({
    firstName: {type: String, default: ''}, 
    class: {type: String, default: ''}, 
    selectedBuild: {type: String},
    createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Player', Player)