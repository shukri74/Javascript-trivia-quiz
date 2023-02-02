var finalscore = 0;

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

console.log(finalscore)


function saveHighscores() {

    submitButton.addEventListener("click", function(event){
    
    event.preventDefault();


    var initials = initialsInput.value;

    if(initials != null){

        window.localStorage.setItem("initials", JSON.stringify(initials));

    }

    if( finalscore != null){

        window.localStorage.setItem("highscores", JSON.stringify(finalscore))

    }

    window.location.href = highscores.html
    
    var highscores = document.querySelector("#highscores")

    highscores.textContent = localStorage.getItem("highscores");
    
    
    console.log(initials.value)
    })
    
    
    }