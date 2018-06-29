'use strict';

const rules = require('./rules');

let dataParser = (data) => {
  for (let i = 0; data.length > 0; i++) {
    teamByLine(data);
    data.shift();
  }
}

let teamByLine = (dataSplit) => {
  let i = 0;
  let x = 0;
  let team1 = {}
  let team2 = {}
  while (i < dataSplit.length) {
    //Split our teams in two
    //Get team name and score
    var team = dataSplit[i].split(',')

    while (x < 1) {
      var team_names1 = team[0].split(',')
      var team_names2 = team[1].split(',')

      // TEAM 1
      team1.name = new getTeamName(team_names1)
      team1.scores = new getTeamScore(team_names1)
      //TEAM 2
      team2.name = new getTeamName(team_names2)
      team2.scores = new getTeamScore(team_names2)

      //Need to calculate Scores find Winner
      let scoreResult = calculateScores(team1.scores, team2.scores)
      team1.points = scoreResult.t1Points;
      team2.points = scoreResult.t2Points;

      x++
    }
    i++
  };

  function getTeamScore(teamScore) {
    //Grab the last value as the score.
    this.teamScore = teamScore.toString()
    //remove all nonNumbers
    this.teamScore = this.teamScore.replace(/[^0-9]/g, '');
    return this.teamScore;
  }

  function getTeamName(teamName) {
    //Grab the last value as the score.
    this.teamName = teamName.toString()
    //remove all nonNumbers
    this.teamName = this.teamName.replace(/[0-9]/g, '').trim();
    return this.teamName;
  }

  // function getTeamsNames(team_name, team_scores) {
  //   this.team_name = team_name;
  //   this.team_scores = team_scores;
  // }

  function calculateScores(t1Scores, t2Score) {

    let scores = (t1Scores.teamScore + t2Score.teamScore)
    if (!scores) {
      reject("No Scores");
    }

    let t1Points = {}
    let t2Points = {}


    // check for Draws
    if (t1Scores.teamScore == t2Score.teamScore) {
      t1Points.score = rules.draw;
      t2Points.score = rules.draw;
    } else {
      // Check for Winner
      // Check for team win.
      if (t1Scores.teamScore > t2Score.teamScore) {

        t1Points.score += rules.win;

      } else {

        t2Points.score += rules.win;
      }
    }

    return {
      t1Points: t1Points,
      t2Points: t2Points
    }
  }

  return [team1, team2]

}
module.exports = dataParser;