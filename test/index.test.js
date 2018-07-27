describe('processData', function () {
  describe('Data return as array', function () {
    let data = ('Lions 3, Snakes 3, Tarantulas 1, FC Awesome 0, Lions 1, FC Awesome 1,  Tarantulas 3, Snakes 1,  Lions 4, Grouches 0');
    let rData = processData(data);
        
    it("should return data with property TEAM ", function() {
      console.log(rData)
      expect(rData).to.have.property("team");
    });

    it("should return data with property POINTS ", function() {
      expect(rData).to.have.property("points");
    });

  });
});






























// let expect = require('chai').expect;
// // let assert = require('chai').assert;
// // let should = require('chai').should();
// // let chai = require('chai');

// // let calculateScores = require('../soccer/calculateScores');
// let processData = require('../soccer/processData');
// // let dataParser = require('../soccer/dataParser');
// // let sortTeams = require('../soccer/sortTeams');
// // let rules = require('../soccer/rules');

// let data = ('Lions 3, Snakes 3, Tarantulas 1, FC Awesome 0, Lions 1, FC Awesome 1,  Tarantulas 3, Snakes 1,  Lions 4, Grouches 0');
// //Processfile test handling




// describe('processData', function () {
//   describe("Data with Obj: value", function() {
//     let rData = processData(data);

//     it("should return data with property TEAM ", function() {
//       console.log(rData)
//       expect(rData).to.have.property("team");
//     });

//     it("should return data with property POINTS ", function() {
//       expect(rData).to.have.property("points");
//     });

//     it("should return an array");
//   });
// })


// // describe('processData', function () {

// //   describe('Array', function () {

// //     it('should return an array', async function () {
// //       arrayData = await processData(data);
// //       expect(arrayData).to.be.an('array').to.have.property('Team', 'Lions');
// //     });

// //     it('should have key property', async function () {

// //     expect(arrayData).to.have.property('Team', 'Lions');
// //   });
// // });

// // describe('dataParser', function () {
// //   it('should return only score number', function () {
// //     dataParser(('Lions 3'), function () {
// //       expect('Lions 3').to.equal(3)
// //     })
// //   });
// // });

// // describe('calculateScores', function () {


// //     it('should calculate a draw', function () {
// //       calculateScores(('Lions 3'), ('Snakes 9')), function(score){
// //         expect(score).equal(rules.draw);
// //       }
// //     });
// //      it('should calculate a winx2', function () {
// //        assert.equal(calculateScores(['Lions 3, Snakes 0']), 'score: 0')
// //      });

// //    it('should calculate a loss', function () {
// //      calculateScores(('Tarantulas 3'), ('Snakes 1'), function (score) {
// //        expect(score[1]).to.equal('score: 0');
// //      })
// //    });

// //   it('should calculate a win', function() {
// //     calculateScores(('Lions 4'), ('Grouches 0'), function (score) {
// //       expect(score).to.equal('score: 3')
// //     })
// //   });

// //   it('should return an object');

// // });


// // describe('sortScores', function () {
// //   var obj = {
// //     'Snakes': 1,
// //     'Lions': 5,
// //     'FC Awesome': 1,
// //     'Tarantulas': 6,
// //     'Grouches': 0
// //   };

// //   it('should sort scores in descending order');

// //   it('should sort alphabetically if scores are same');

// // });

// // {
// //   Lions: {
// //     Team: 'Lions',
// //     points: NaN
// //   },
// //   Snakes: {
// //     Team: 'Snakes',
// //     points: NaN
// //   },
// //   Tarantulas: {
// //     Team: 'Tarantulas',
// //     points: NaN
// //   },
// //   'FC Awesome': {
// //     Team: 'FC Awesome',
// //     points: NaN
// //   },
// //   Grouches: {
// //     Team: 'Grouches',
// //     points: undefined
// //   }
// // }