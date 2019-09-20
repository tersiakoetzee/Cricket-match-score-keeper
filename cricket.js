module.exports = function Cricket(oversmax) {
    let score = 0;
    let wicket = 0;
    let perOver = 0;


    function scoreTrack(currentScore) {

        let scorenow = currentScore.split("")

        for (i = 0; i < scorenow.length; i++) {
            let point = scorenow[i];
            
            if (perOver.length === 6) {
                perOver++
            }
            if(perOver.length === 36){
                return oversmax;
            }
            if (point !== 'w'&& point !== '-') {
                score += Number(point)
            }

            if (point === 'w') {
                wicket = wicket + 1
            }
        }
        return score;
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
    function totalScore(){
        return score;
    }



    return {
        scoreTrack,
        gameOver,
        totalScore

    }

}
