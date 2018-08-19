const calculateMatchProbability = require('./app').calculateMatchProbability

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.post('/predict', (req, res) => {
	const prediction = calculateMatchProbability(req.body.match, req.body.hteamHistory, req.body.ateamHistory)

	console.log('Home matches: ', req.body.hteamHistory.length)
	console.log('Away matches: ', req.body.ateamHistory.length)
	console.log('--------------------------------------------------')
	console.log(prediction)

	res.send( calculateMatchProbability.homeTeamWinProbability )
})

const port = 3003

app.listen(port, () => console.log('Gepick api server listening on port '+port+'!'))