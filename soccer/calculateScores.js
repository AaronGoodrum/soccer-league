const rules = require('./rules');
const dataParser = require('./dataParser')

calculateScores = (team1, team2) => {

  //get only teams points
  const t1Scores = dataParser(team1)
  const t2Scores = dataParser(team2)
  
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

module.exports = calculateScores;