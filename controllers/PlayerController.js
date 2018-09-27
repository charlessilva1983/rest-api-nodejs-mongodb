const Player = require('../models/Player')

module.exports = {
    // GET
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
    },
    
    getById: (id) => {
        // Return a primisse
        return new Promise((resolve, reject) => {
            Player.findById(id)
            // Sucess block
            .then(data => {
                resolve(data)
            })
            // Error block
            .catch(err => {
                reject(new Error('Player ' + id + ' not found.'))
            })
        })
    },

    // POST
    post: (params) => {
        // Return a primisse
        return new Promise((resolve, reject) => {
            Player.create(params)
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

    // PUT
    put: (id, params) => {
        // Return a primisse
        return new Promise((resolve, reject) => {
            Player.findByIdAndUpdate(id, params, {new:true})
            // Sucess block
            .then(data => {
                resolve(data)
            })
            // Error block
            .catch(err => {
                reject(new Error('Player ' + id + ' not found.'))
            })
        })
    },

    // DELETE
    delete: (id) => {
        // Return a primisse
        return new Promise((resolve, reject) => {
            Player.findByIdAndRemove(id)
            // Sucess block
            .then(data => {
                resolve({id: id})
            })
            // Error block
            .catch(err => {
                reject(new Error('Player ' + id + ' not found.'))
            })
        })
    }
}