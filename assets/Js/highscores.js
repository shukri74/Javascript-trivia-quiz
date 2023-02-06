

var choices1 = document.querySelector("#choices1")

var choices2 = document.querySelector("#choices2")

var choices3 = document.querySelector("#choices3")

var choices4 = document.querySelector("#choices4")

var submitButton = document.querySelector("#submit")



function displayHighscores () {

    newscore = document.createElement("li");

    highscores.appendChild(newscore);

    newscore.className = "a"

    var records = JSON.parse(window.localStorage.getItem("Records"))

    console.log(records)

    newscore.textContent = records.name[0] + " " + records.score[0]

}

displayHighscores();