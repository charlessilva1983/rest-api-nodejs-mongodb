const Guild = require('../models/Guild')

module.exports = {

    // GET
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
    },
    getById: (id) => {
        // Return a primisse
        return new Promise((resolve, reject) => {
            Guild.findById(id)
            // Sucess block
            .then(data => {
                resolve(data)
            })
            // Error block
            .catch(err => {
                reject(new Error('Guild ' + id + ' not found.'))
            })
        })
    },

    // POST
    post: (params) => {
        // Return a primisse
        return new Promise((resolve, reject) => {
            Guild.create(params)
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