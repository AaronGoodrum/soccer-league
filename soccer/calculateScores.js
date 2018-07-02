const rules = require('./rules');

calculateScores = (team1, team2) => {
  //get only teams points

  let t1Scores = getTeamScore(team1)
  let t2Scores = getTeamScore(team2)

  //for error
  let scores = (t1Scores + t2Scores)
  if (!scores) {
    reject("No Scores");
  }

  let t1Points = {}
  let t2Points = {}

  // check for Draws
  if (t1Scores == t2Scores) {
    t1Points.score = rules.draw;
    t2Points.score = rules.draw;
  } else {
    // Check for Winner
    // Check for team win.
    if (t1Scores > t2Scores) {

      t1Points.score = rules.win;
      t2Points.score = rules.loss;
    } else {
        t1Points.score = rules.loss;
        t2Points.score = rules.win;
      }
    }
  return [t1Points.score, t2Points.score]
}

function getTeamScore(teamScore) {
  //Grab the last value as the score.
  this.teamScore = teamScore.toString()
  //remove all nonNumbers
  this.teamScore = this.teamScore.replace(/[^0-9]/g, '').trim();
  return this.teamScore;
}

module.exports = calculateScores;