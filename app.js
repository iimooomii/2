

const calculateMatchProbability = (matchToPredict, hteamHistory, ateamHistory) => {
console.log(matchToPredict)
	console.log('Ateam Name: ',  matchToPredict.ateam.name)
	console.log('Hteam Name: ',  matchToPredict.hteam.name)
	console.log('Home Team first match schore: ', hteamHistory[0].result.fullTime.home, '; ', hteamHistory[0].result.fullTime.away)
	console.log('Away Team first match schore: ', ateamHistory[0].result.fullTime.home, '; ', ateamHistory[0].result.fullTime.away)

	let hteamdrawcount = 0
	let hteamlosecount = 0
	let hteamwincount = 0
 	for(let i = 0; i < hteamHistory.length; i++) {
 		if ( hteamHistory[i].result.fullTime.home > hteamHistory[i].result.fullTime.away){
 			hteamwincount++
 		}

 		if ( hteamHistory[i].result.fullTime.home < hteamHistory[i].result.fullTime.away){
 			hteamlosecount++
 		}

 		if(hteamHistory[i].result.fullTime.home == hteamHistory[i].result.fullTime.away){ 
 			hteamdrawcount++
 		}
 	}

 	console.log("namu komandos pergaliu skaicius: ", hteamwincount)
 	const homeTeamWinProbability = hteamwincount/ hteamHistory.length * 100
 	const homeTeamLoseProbability = hteamlosecount/ hteamHistory.length * 100
 	const homeTeamDrawProbability = hteamdrawcount/ hteamHistory.length * 100

 	console.log('tikimybe namu komandai laimeti', homeTeamWinProbability)
 	console.log('tikimybe namu komandai pralaimeti', homeTeamLoseProbability)
  	console.log('tikimybe lygiosioms', homeTeamDrawProbability)
	
	//for(let i = 0; i < hteamHistory.length; i++) {
	//	console.log('HTEAM MATCH '+i+' => ')
		
	//	console.log(hteamHistory[i])

	//	if (hteamHistory[i].result.fullTime.home > hteamHistory[i].result.fullTime.away){
	//		console.log('WIN')
	//	}else{
	//		console.log('LOST')
	//	}

	//	console.log('----------------')
	//}

	//if (hteamHistory.result.fullTime.home > hteamHistory.result.fullTime.away){ }

	return ''

	console.log("matchToPredict =>>>> ", matchToPredict)
	//console.log("homeTeamMatches =>>>> ", homeTeamMatches)
	//console.log("awayTeamMatches =>>>> ", awayTeamMatches)

	const homeTeamName = matchToPredict.hteam.name
	const awayTeamName = matchToPredict.ateam.name

	let countHomeWin = 0
	let countAwayWin = 0

	//const totalMatches = matches.length
	
	for (let i = 0; i < matches.length; i++) {
		const match = matches[i]
		
	}
	
	//const homeTeamWinProbability = countHomeWin / totalMatches * 100
	//const AwayTeamWinProbability = countAwayWin / totalMatches * 100
	//const DrawProbability = 100 - (countHomeWin / totalMatches * 100) - (countAwayWin / totalMatches * 100)
 
	return { home: 71, draw: 20, away: 10 }
}

//const matchPredictions =  calculateMatchProbability(todayMatch, matches)

//console.log(matchPredictions)

module.exports = {
	calculateMatchProbability: calculateMatchProbability
}