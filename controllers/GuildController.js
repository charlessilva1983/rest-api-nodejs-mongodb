const Guild = require('../models/Guild')

module.exports = {

    get: (params) => {
        // Return a primisse
        return new Promise((resolve, reject) => {
            Guild.find(params)
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