'use strict';
const fs = require('fs');

// let processData = require('./soccer/processData');
let dataParser = require('./soccer/dataParser');

const path = process.argv[2];

let text = "Lions 3, Snakes 3 Tarantulas 1, FC Awesome 0 Lions 1, FC Awesome 1 Tarantulas 3, Snakes 1 Lions 4, Grouches 0"


//Check input file from command line
let testCommandLine = () => {
  if (process.argv.length < 3) {
    console.log('REQUIRE: node index.js <FILE.txt>')
    process.exit;
  } else {
    // open up a readable stream
    return fs.readFileSync(process.argv[2]).toString().split('\n');
  }
}

//find the team name and scores pre game
class getTeamArray {
  constructor(team_name, team_scores) {
    this.team_name = team_name;
    this.team_scores = team_scores;
  }
}

let outputData = testCommandLine();
let test = dataParser(outputData);
console.log('TEST - ', test);

