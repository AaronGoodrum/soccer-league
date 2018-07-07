'use strict';

let dataParser = (teamScore) => {
  //Grab the last value as the score.
  //remove all nonNumbers
  let returnScore = teamScore.replace(/[^0-9]/g, '').trim();
  return returnScore;
}

module.exports = dataParser;