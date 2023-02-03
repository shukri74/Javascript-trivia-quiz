var finalscore = 0;

var choices1 = document.querySelector("#choices1")

var choices2 = document.querySelector("#choices2")

var choices3 = document.querySelector("#choices3")

var choices4 = document.querySelector("#choices4")

var submitButton = document.querySelector("#submit")


function ScoreCalculator(){

choices2.addEventListener("click", function(){

    if(choices2.textContent == answers[i]){
        
        let score1 = 0;

        score1  += 10

        console.log(score1)
    
        finalscore += score1

        feedbackContainer.textContent = "Right!"
    }

    else{

        secondsRemaining -= 10

        feedbackContainer.textContent = "Wrong!"
    }
})

choices3.addEventListener("click", function(){

    if(choices3.textContent == answers[i]){
        
       
        let score2 = 0;

        score2  += 10

        console.log(score2)
    
        finalscore += score2

        feedbackContainer.textContent = "Right!"
    
    }

    else{
        
        secondsRemaining -= 10

        feedbackContainer.textContent = "Wrong!"
    }
})

choices4.addEventListener("click", function(){

    if(choices4.textContent == answers[i]){
        
         let score3 = 0;

         score3 += 10;

        console.log(score3)

        finalscore += score3;

        feedbackContainer.textContent = "Right!"
    
    }

    else{
        
        secondsRemaining -= 10

        feedbackContainer.textContent = "Wrong!"
    }

})
    

choices1.addEventListener("click", function(){

    if(choices1.textContent == answers[i]){
        
       let score4 = 0;

       score4 += 10

        console.log(score4)
     
        finalscore += score4;

        feedbackContainer.textContent = "Right!"
    }

    else{
        
        secondsRemaining -= 10

        feedbackContainer.textContent = "Wrong!"
    }
})

}



function saveHighscores() {

    submitButton.addEventListener("click", function(){

    window.location.href = "highscores.html"
    
    var initials = initialsInput.value;
    
    window.localStorage.setItem("initials", JSON.stringify(initials));

    window.localStorage.setItem("highscores", JSON.stringify(finalscore))

    highscoresArray = JSON.parse(window.localStorage.getItem("highscores")) || {};
    
    var highscores = document.querySelector("#highscores")

    var newScore = document.createElement("li");

    highscores.appendChild(newScore)

    newScore.textContent = localStorage.getItem("initials") + localStorage.getItem("highscores");
    
    console.log(initials.value)
   
})
    
    
}


saveHighscores();