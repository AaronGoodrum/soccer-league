let expect = require('chai').expect;
let assert = require('chai').assert;


let calculateScores = require('../soccer/calculateScores');
let processData = require('../soccer/processData');
let dataParser = require('../soccer/dataParser');
let sortTeams = require('../soccer/sortTeams');
let rules = require('../soccer/rules');


let data = 'Lions 3, Snakes 3, Tarantulas 1, FC Awesome 0, Lions 1, FC Awesome 1,  Tarantulas 3, Snakes 1,  Lions 4, Grouches 0'

//Processfile test handling
describe('processData', function () {

  it('should return an array', function () {
    processData((data), function () {
      expect((data[0])).to.have.any.keys('Team', 'points');
    })
  });
});

describe('dataParser', function () {
  it('should return only score number', function () {
    dataParser(('Lions 3'), function () {
      expect('Lions 3').to.equal(3)
    })
  });
});

describe('calculateScores', function () {
  
  
    it('should calculate a draw', function () {
      calculateScores(('Lions 3'), ('Snakes 9')), function(score){
        expect(score).equal(rules.draw);
      }
    });
     it('should calculate a winx2', function () {
       assert.equal(calculateScores(['Lions 3, Snakes 0']), 'score: 0')
     });

   it('should calculate a loss', function () {
     calculateScores(('Tarantulas 3'), ('Snakes 1'), function (score) {
       expect(score[1]).to.equal('score: 0');
     })
   });

  it('should calculate a win', function() {
    calculateScores(('Lions 4'), ('Grouches 0'), function (score) {
      expect(score).to.equal('score: 3')
    })
  });

  it('should return an object');

});


describe('sortScores', function () {
  var obj = {
    'Snakes': 1,
    'Lions': 5,
    'FC Awesome': 1,
    'Tarantulas': 6,
    'Grouches': 0
  };

  it('should sort scores in descending order');

  it('should sort alphabetically if scores are same');

});