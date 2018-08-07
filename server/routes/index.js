var express = require('express')
var router = express.Router()
var axios = require('axios')

const users = {
	invited:[],
	going:[],
	notgoing:[]
}

/* GET home page. */
router.get('/users', (req, res, next) => {
	axios.get('https://randomuser.me/api/').then(resp => {
		users.invited = resp.data
		res.json({
			users:users.invited
		})
	})
})

console.log(users)

module.exports = router
