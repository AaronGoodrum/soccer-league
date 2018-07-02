'use strict';
const fs = require('fs');

// let processData = require('./soccer/processData');
let dataParser = require('./soccer/dataParser');
let processData = require('./soccer/processData')

const path = process.argv[2];

let text = "Lions 3, Snakes 3 Tarantulas 1, FC Awesome 0 Lions 1, FC Awesome 1 Tarantulas 3, Snakes 1 Lions 4, Grouches 0"


//Check input file from command line
let testCommandLine = () => {
  if (process.argv.length < 3) {
    console.log('REQUIRE: node index.js <FILE.txt>')
    process.exit(1);
  } else {
    // open up a readable stream
    console.log('TRUE')
    return fs.readFileSync(process.argv[2]).toString();
  }
}

let outputData = testCommandLine();
let returnTeams = processData(outputData);
// let allteams = dataParser(outputData);
console.log('END TEST - ', returnTeams);

