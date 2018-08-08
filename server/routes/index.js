const express = require('express')
const router = express.Router()
const axios = require('axios')
const shortid = require('shortid')

const invite = {
	users:[],
	going:[],
	notgoing:[]
}

/* Call Random User Generator API with 1 result, map result to new array (users), add status property to object within array, send JSON (users array) to frontend, call API again if/when the array is empty  */
router.get('/users', (req, res, next) => {
	if (invite.users.length === 0) {
		axios.get('https://randomuser.me/api/?results=1').then(resp => {
			const users = resp.data.results.map(user => {
				return {
					id:shortid.generate(),
					picture:user.picture.large,
					name:user.name.first + ' ' + user.name.last,
					phone:user.phone,
					email:user.email,
					status:'invited'
				}
			})
			invite.users = users
			res.json(users)
		})
	} else {
		res.json(invite.users)
	}
})

/* Receive id/status properties from frontend, find user in array (users) with id, change status property based on what was received, push user to new array (going/notgoing) based on status, filter array (users) to exclude user, send JSON (user object) to frontend */
router.patch('/users/:id', (req, res, next) => {
	const id = req.params.id
	const status = req.body.status
	const user = invite.users.find(user => user.id === id)
	user.status = status
	invite[status].push(user)
	invite.users = invite.users.filter(user => user.id !== id)
	res.json(user)
})

/* Receive id property from frontend, find user in array (users) with id, send JSON (user object) to frontend */
router.get('/users/:id', (req, res, next) => {
	const id = req.params.id
	const user = invite.users.find(user => user.id === id)
	res.json(user)
})

/* Send JSON (going array) to frontend */
router.get('/going', (req, res, next) => {
	res.json(invite.going)
})

/* Send JSON (notgoing array) to frontend */
router.get('/notgoing', (req, res, next) => {
	res.json(invite.notgoing)
})

module.exports = router
