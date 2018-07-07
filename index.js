'use strict';
const fs = require('fs');

let processData = require('./soccer/processData')
let sortTeams = require('./soccer/sortTeams')

//Check input file from command line
let testCommandLine = () => {
  if (process.argv.length < 3) {
    console.log('REQUIRE: node index.js <FILE.txt>')
    process.exit(1);
  } else {
    // return input readable stream
    const dataFile = fs.readFileSync(process.argv[2]).toString();
    return dataFile;
  }
}

//Test incoming data
let outputData = testCommandLine();

//Process all data incoming
let returnTeams = processData(outputData);

//Sort out Team by Score
//Then Return input data back to console
let sortedTeams = sortTeams(returnTeams)
// Return input data back to console

for (let i = 0; i < sortedTeams.length; i++) {
  const val = Object.values(sortedTeams[i])
  // console.log(Object.values(sortedTeams[i]))
  let x = i - 1;
  if (x > 1) {
    const val2 = Object.values(sortedTeams[x])
    if( val2[x] === val[i]){
      console.log(x + 1 + ". " + val[0] + ", " + val[1] + ' pts');
    } else {
      console.log(i + 1 + ". " + val[0] + ", " + val[1] + ' pts');
    }
  } else{
    console.log(i + 1 + ". " + val[0] + ", " + val[1] + ' pts');
  }
};
