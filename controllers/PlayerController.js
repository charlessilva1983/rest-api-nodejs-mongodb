const Player = require('../models/Player')

module.exports = {

    get: (params) => {
        // Return a primisse
        return new Promise((resolve, reject) => {
            Player.find(params)
            // Sucess block
            .then(data => {
                resolve(data)
            })
            // Error block
            .catch(err => {
                reject(err)
            })

        })
        
    }
}