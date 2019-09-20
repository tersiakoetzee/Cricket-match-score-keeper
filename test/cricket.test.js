let assert = require("assert");
let Cricket = require("../cricket.js");

describe('The cricket function', function () {

    it(' should be able to get the score and add it to the total score for the game ', function () {
        let cricketScore = Cricket()

        cricketScore.scoreTrack('-2--2-')

        assert.deepEqual(4, cricketScore.totalScore());
    })

    it(' should be able to get the score and add it to the total score for the game ', function () {
        let cricketScore = Cricket()

       cricketScore.scoreTrack('----')

        assert.equal(0, cricketScore.totalScore());
    })

    it(' should be able to get the amount of wickets fallen ', function () {
        let cricketScore = Cricket()
        
        cricketScore.scoreTrack('-2-4-3-')

        assert.equal(9,cricketScore.totalScore());
    })

    it(' should be able to stop the score when wickets have reached 10', function () {
        let cricketScore = Cricket()

        cricketScore.totalScore('-w-w-w-w-w-w-w-w-w-w')

        assert.equal(10,cricketScore.gameOver());
    })
    });