// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

/*  This is a sample API route. */

/*router.get('/:resource', (req, res) => {
	res.json({
		confirmation: 'success',
		resource: req.params.resource,
		query: req.query // from the url query string
	})
})

router.get('/:resource/:id', (req, res) => {
	res.json({
		confirmation: 'success',
		resource: req.params.resource,
		id: req.params.id,
		query: req.query // from the url query string
	})
})*/

const players = [
	{firstName:"Bromelia", class: "Dragonknight", selectedBuild: "2-Handed"},
	{firstName:"Darknessheart", class: "Ranger", selectedBuild: "2-Handed"},
	{firstName:"Harra", class: "Spellweaver", selectedBuild: "1-Handed"}
]

const guilds = [
	{name: "RainningBlood", members: 10, createdat: "09/26/2018"},
	{name: "FairyTail", members: 50, createdat: "09/26/2018"}
]

const db = {
	guild: guilds,
	player: players
}

router.get('/:resource', (req, res) => {
	const resource = req.params.resource;

	const data = db[resource];

	if (data == null){
		res.json({
			confirmation: 'fail',
			message: 'Invalid request!'
		})

		return
	}

	res.json({
		confirmation: 'sucess',
		data: data
	})

	// if(resource == 'player'){
	// 	res.json({
	// 		confirmation: 'sucess',
	// 		data: players
	// 	})

	// 	return
	// }

	// if(resource == 'guild'){
	// 	res.json({
	// 		confirmation: 'sucess',
	// 		data: guilds
	// 	})

	// 	return
	// }

	// res.json({
	// 	confirmation: 'fail',
	// 	message: 'Invalid request!'
	// })

})

/* 	router.get('/test', (req, res) => {

		res.json({
			confirmation: 'sucess',
			data: 'this is a test endpoint'
		})
	})

	router.get('/guild', (req, res) => {

		res.json({
			confirmation: 'sucess',
			data: guilds
		})
	}) */

module.exports = router
