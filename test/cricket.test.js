let assert = require("assert");
let Cricket = require("../cricket.js");

describe('The cricket function', function () {

    it(' should be able to get the score and add it to the total score for the game ', function () {
        let cricketScore = Cricket()

        cricketScore.scoreTrack('-2--2-')

        assert.deepEqual(cricketScore.scoreTrack("4"));
    })

    it(' should be able to get the score and add it to the total score for the game ', function () {
        let cricketScore = Cricket()

       cricketScore.scoreTrack('----')

        assert.deepEqual(cricketScore.scoreTrack(0));
    })

    it(' should be able to get the amount of wickets fallen ', function () {
        let cricketScore = Cricket()

        cricketScore.scoreTrack('-2-4-3-')

        assert.deepEqual(cricketScore.scoreTrack(9));
    })

    it(' should be able to stop the score when wickets have reached 10', function () {
        let cricketScore = Cricket()


        assert.deepEqual(cricketScore.gameOver(10));
    })
    });