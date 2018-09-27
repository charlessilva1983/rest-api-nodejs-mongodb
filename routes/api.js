// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const controllers = require('../controllers')

// GET, POST, PUT, DELETE

// Define a end-point to handle the resource request specified in the api

// Get all resources specified
router.get('/:resource', (req, res) => {
	const resource = req.params.resource;
	const controller = controllers[resource]
	const filters = req.query

	if(controller == null){
		// If controller doesn't exist, return a error
		res.json({
			confirmation: 'fail',
			message: 'Invalid resource!'
		})

		return
	}

	controller.get(filters)
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

// Get the resources with the id specified
router.get('/:resource/:id', (req, res) => {
	const resource = req.params.resource
	const id = req.params.id

	const controller = controllers[resource]

	if(controller == null){
		// If controller doesn't exist, return a error
		res.json({
			confirmation: 'fail',
			message: 'Invalid resource!'
		})

		return
	}

	controller.getById(id)
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

// POST - create new entities:
router.post('/:resource', (req, res) => {
	const resource = req.params.resource
	
	const controller = controllers[resource]

	if(controller == null){
		// If controller doesn't exist, return a error
		res.json({
			confirmation: 'fail',
			message: 'Invalid resource!'
		})

		return
	}

	controller.post(req.body)
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

module.exports = router
