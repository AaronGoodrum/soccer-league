let calculateScores = require('./calculateScores')

const TEAMS = {}


processData = (data) => {
  console.log(data)
  let i = 0
  let gameMatch = data.split('\n')
  
  while (i < gameMatch.length) {
    let matchSplit = gameMatch[i].split(',')
    
    let t1 = matchSplit[0]
    let t2 = matchSplit[1]

    for (x = 0; x < matchSplit.length; x++) {
      //Get Name and Calculate Scores  
      let name = getTeamName(matchSplit[x])
      let valTeamPoints = calculateScores(t1, t2);
      if (TEAMS[name] === undefined) {
        TEAMS[name] = {
          team: name,
          points: valTeamPoints[x]
        }
      } else {
        let addPoints = (TEAMS[name].points + valTeamPoints[x])
        TEAMS[name] = {
          team: name,
          points: addPoints

        }
      }
      console.log(TEAMS)
    }

    i++
  }

  function getTeamName(teamName) {
    //Grab the last value as the score.
    this.teamName = teamName
    //remove all nonNumbers
    this.teamName = this.teamName.replace(/[0-9]/g, '').trim();
    return this.teamName;
  }
  console.log(TEAMS)
  return TEAMS;
};

module.exports = processData;