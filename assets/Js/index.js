 var questionText = [  "Commonly used data types DO NOT include:",
         
  "The condition in an if/else statement is placed within ____",

  "Strings values must be enclosed within _____ when being assigned to variables",

  "a very useful tool used during development and debugging for printing to the debugger is:"
      
]
    
   var options = [

         ["commas", "curly brackets", "quotes", "parenthses"],

         ["strings", "booleans", "alerts", "numbers"],

         ["quotes", "curly brackets", "parentheses", "square brackets"],

         ["Javascript", "terminal/bash","for loops", "console log"],

]


 var answers =   [ "parentheses", "alerts", "quotes", "console log"]



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



function showQuestions(){

    questionsContainer.classList.remove("hide");

    let i = 0

    questionTitle.textContent = questionText[i] 

    choices1.textContent = options[i][i]

    choices2.textContent = options[i+1][i+1]

    choices3.textContent = options[i+2][i+2]

    choices4.textContent = options[i+3][i+3]


}






