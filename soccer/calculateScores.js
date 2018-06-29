const rules = require('./rules');

calculateScores = (t1Scores, t2Score) => {
  let scores = (t1Scores + t2Score)
    if (!scores) {
      reject("No Scores");
    }

    let t1Points = {}
    let t2Points = {}


    // check for Draws
    if (t1Scores == t2Score) {
      t1Points.score = rules.draw;
      t2Points.score = rules.draw;
    }

    // Check for Winner
    // Check for team win.
    if (t1Points > t2Points) {

      t1Points.score = 3;

    } else {

      t2Points.score += rules.win;
    }

  return [t1Points, t2Points]

}
module.exports = calculateScores;