
let randomNumber = 50;
let guessHistory = document.getElementById("guessHistory");
let guessCount = 1;
let lives = 8;
let highScore = 0;
let congratsScores = document.getElementById("congratsHighScores");
let congratsBest = document.getElementById("congratsBest");


function checkGuess(){ 
  let userGuess = Number(guessNumber.value);

  if (userGuess <= 0 || userGuess > 100 ) {
    document.getElementById("changingP").innerHTML = "No input or invalid value :( <br> Please write a number between 1-100";

  }
  else {
    if (userGuess === randomNumber) {
      document.getElementById("line2box").style.backgroundColor = "#";
      document.querySelector("img").src = "trophy.png";
      document.querySelector("input").hidden = true;
      document.getElementById("changingP").hidden = true;
      document.getElementById("correctNumber").innerHTML = randomNumber;
      document.getElementById("congrats").hidden = false;
      document.getElementById("button").hidden = true;
      document.getElementById("button2").hidden = false;
      highScore++;
      document.getElementById("highScore").textContent = highScore;
      congratsScores.innerHTML = highScore;
      congratsBest.innerHTML = highScore;
      win();

    }
    else if (guessCount === 8) {
      document.getElementById("changingP").innerHTML = "game over";
      document.getElementById("line2box").style.backgroundColor = "#";
      document.querySelector("img").src = "lost.png";
      document.querySelector("input").hidden = true;
      document.getElementById("changingP").hidden = true;
      document.getElementById("correctNumberInWrong").innerHTML = randomNumber;
      document.getElementById("gameOver").hidden = false;
      document.getElementById("button").hidden = true;
      document.getElementById("lives").innerHTML = 0;
      gameover();
    }

    else if (userGuess < randomNumber) {
      document.getElementById("changingP").innerHTML = "Number is too low";
      lives--;
      document.getElementById("lives").innerHTML = lives;
    }
    
    else if (userGuess > randomNumber) {
      document.getElementById("changingP").innerHTML = "Number is too high";
      lives--;
      document.getElementById("lives").innerHTML = lives;
    } 
    guessHistory.textContent += "  " + userGuess + " ,";
    guessCount++;
  }
  
}




function reload() {
    document.getElementById("onRight").addEventListener("click", function() {
     location.reload();
    }
  );    
}



function playAgain(){
   randomNumber = 50;
    guessCount =1;
    document.getElementById("congrats").hidden = true;
    document.getElementById("button2").hidden = true;
    document.querySelector("img").src = "thinking.png";
    document.getElementById("button").hidden = false;
    document.getElementById("line2box").style.backgroundColor = "rgb(237, 226, 18)";
    document.getElementById("lives").innerHTML = 8;
    guessHistory.textContent = "Guess History: ,";
    document.querySelector("input").hidden = false;
    document.querySelector("input").value = "";
    document.getElementById("changingP").hidden = false;
}