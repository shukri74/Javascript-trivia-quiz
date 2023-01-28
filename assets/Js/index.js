var questions = [

    { 
        questionText: "commonly used data types DO NOT include:",
      
        options: ["strings", "booleans", "alerts", "numbers"],
      
        answer: "alerts"

    },

    {
        questionText: "The condition in an if/else statement is placed within ____",

        options: ["quotes", "curly brackets", "parentheses", "square brackets"],

        answer: ["parentheses"],
    },

    {
        questionText: "Strings values must be enclosed within _____ when being assigned to variables",

        options: ["commas", "curly brackets", "quotes", "parenthses"],

        answer: "quotes"
    },

    {
        questionText: "a very useful tool used during development and debugging for printing to the debugger is:",

        options: ["Javascript", "terminal/bash","for loops", "console log"],

        answer: "console log"
    }
]

var score = 0;

var startTime = document.querySelector("#start")

var questionsDIV = document.querySelector("#questions");

var wrapper = document.querySelector(".wrapper");

var timer = document.querySelector("#time")

var secondsRemaining = 75;


function countDown(){

    timer.setInterval(function(){

        if (secondsRemaining <= 0){

            clearInterval(timer);
        
        }
    
        else{
        
            secondsRemaining--;
        }



    })

    timer.textContent = secondsRemaining;

    console.log(secondsRemaining);
   
     

}

function beginQuiz(){

   setInterval(countDown(), 1000)
    
} 


function hideStartScreen(){

   wrapper.style.display = "none";
    

};

startTime.addEventListener("click", beginQuiz())



function showQuestions(){




}

beginQuiz();






