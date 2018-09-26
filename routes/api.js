// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const controllers = require('../controllers')

/*  This is a sample API route. */

const Player = require('../models/Player')
const Guild = require('../models/Guild')

//
router.get('/:resource', (req, res) => {
	const resource = req.params.resource;
	const controller = controllers[resource]

	if(controller == null){
		// If controller doesn't exist, return a error
		res.json({
			confirmation: 'fail',
			message: 'Invalid request!'
		})

		return
	}

	controller.get()
	// Sucess callback
	.then(data => {
		res.json({
			confirmation: 'sucess',
			data: data
		})

	})
	// Fail callback
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})

	})

})

// Set-up a individual get for each resource

// Get Players data from Mongo DB
router.get('/player', (req, res) => {
	
	// Find all Players data and return a json response with that
	Player.find(null)
	.then(data => {
		res.json({
			confirmation: 'sucess',
			data: data
		})
	})
	// return a json response with a error mensage if got a error
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

// Get Guild data from Mongo DB
router.get('/guild', (req, res) => {
	
	// Find all Players data and return a json response with that
	Guild.find(null)
	.then(data => {
		res.json({
			confirmation: 'sucess',
			data: data
		})
	})
	// return a json response with a error mensage if got a error
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

module.exports = router
