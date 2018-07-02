let calculateScores = require('./calculateScores')

const TEAMS = {}


processData = (data) => {
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

      let points = valTeamPoints[x]

      if (TEAMS[name] === undefined) {
        TEAMS[name] = {
          Team: name,
          points
        }
      } else {
        points += TEAMS[name].points
        TEAMS[name] = {
          Team: name,
          points
        }
      }
    }

    i++
  }

  function getTeamName(teamName) {
    //Grab the last value as the score.
    this.teamName = teamName.toString()
    //remove all nonNumbers
    this.teamName = this.teamName.replace(/[0-9]/g, '').trim();
    return this.teamName;
  }

  return TEAMS;
};

module.exports = processData;