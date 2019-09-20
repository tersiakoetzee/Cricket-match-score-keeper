module.exports = function Cricket(oversmax) {
    let score = 0
    let wicket = 0
    let perOver = 0;


    function scoreTrack() {

        let cScore = "1-2-3-4-6-w"
        let Tscore = cScore.split(" ")

        for (i = 0; i < Tscore.length; i++) {
            let point = Tscore[i]
            if (perOver.length === 6) {
                perOver++
            }
            if(perOver.length === 36){
                return oversmax
            }
            if (point !== 'w') {
                score += Number(point)
            }
            if (point === 'w') {
                wicket = wicket + Number(point)
            }
        }

    }

    function gameOver() {
         oversmax = {
          score,
          wicket,
          perOver   
         }   
        if(wicket >= 10){
            return oversmax
        }
      

    }



    return {
        scoreTrack,
        gameOver

    }

}
