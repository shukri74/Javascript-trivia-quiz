 var questionText = [  "Commonly used data types DO NOT include:",
         
  "The condition in an if/else statement is placed within ____",

  "Strings values must be enclosed within _____ when being assigned to variables",

  "a very useful tool used during development and debugging for printing to the debugger is:"
      
]
    
   var options = [

    ["strings", "booleans", "alerts", "numbers"],
    
    ["commas", "curly brackets", "quotes", "parentheses"],

    ["quotes", "curly brackets", "parentheses", "square brackets"],

    ["Javascript", "terminal/bash","for loops", "console log"],

]


 var answers =   [ "alerts" , "parentheses", "quotes", "console log"]



var score = 0;

var questionIndex = 0;

var startTime = document.querySelector("#start")

var questionsContainer = document.querySelector("#questions");

var wrapper = document.querySelector(".wrapper");

var timer = document.querySelector("#time")

var questionTitle = document.querySelector("#question-title")

var choices = document.querySelector("#choices")

var secondsRemaining = 75;

var startScreen = document.querySelector("#start-screen")

var choices1 = document.querySelector("#choices1")

var choices2 = document.querySelector("#choices2")

var choices3 = document.querySelector("#choices3")

var choices4 = document.querySelector("#choices4")

var button = document.querySelector(".answerButton")

var endScreen = document.querySelector("#end-screen")

var finalScore = document.querySelector("#final-score")

function countDown(){

        if (secondsRemaining <= 0){

            clearInterval(timer);
        
        }
    
        else{
        
            secondsRemaining--;
        }


    timer.textContent = secondsRemaining;
  
}

function beginQuiz(){

   setInterval(countDown, 1000)

   hideStartScreen();
    
} 


function hideStartScreen(){

   startScreen.style.display = "none";

   questionsContainer.removeAttribute("hide")
    

};

startTime.addEventListener("click", beginQuiz)

startTime.addEventListener("click", showQuestions)

var i = 0;

function showQuestions(){

    questionsContainer.classList.remove("hide");

    questionTitle.textContent = questionText[i] 

    choices1.textContent = options[i][i]

    choices2.textContent = options[i][i+1]

    choices3.textContent = options[i][i+2]

    choices4.textContent = options[i][i+3]

    nextQuestion();

 
}


 function nextQuestion(){


    choices.addEventListener("click", function(){

     i  = i + 1

     if ( secondsRemaining <= 0 ||  i >= 4 ){

        endQuiz();
     }

     console.log(i)

    questionTitle.textContent = questionText[i] 
        
    choices1.textContent = options[i][0]

    choices2.textContent = options[i][1]

    choices3.textContent = options[i][2]

    choices4.textContent = options[i][3]

    addEventListener("click", function(){

        
    })

        score = 10 + score
    
        console.log(answers[i].textContent)
    
        console.log(score)
    
 
})



}

function endQuiz() {

    clearInterval(timer);

    endScreen.classList.remove("hide")

    questionsContainer.style.display = "none";

}

finalScore.textContent = score


console.log(score)


