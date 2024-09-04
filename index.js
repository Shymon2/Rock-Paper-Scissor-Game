const choices = ["rock", "paper", "scissors"];

const playerDisplay = document.getElementById("player");
const computerDisplay = document.getElementById("computer");
const resultDisplay = document.getElementById("result");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
let playerScore = 0;
let computerScore = 0;

function playGame(choice){
   let result = "";
   computerChoice = choices[Math.floor(Math.random() * 3)];
   
   if(choice == computerChoice)
      result = "It's a Tie !";
   else{
      switch(choice){
         case "rock":
            computerChoice == "paper" ? result = "You lose !" : result = "You win !";
            break;
         case "paper":
            computerChoice == "scissors" ? result = "You lose !" : result = "You win !";
            break;
         case "scissors":
            computerChoice == "rock" ? result = "You lose !" : result = "You win !";
            break;
      }
   }
   
   resultDisplay.classList.remove("win", "lose");

   playerDisplay.textContent = "Player: " + choice;
   computerDisplay.textContent = "Computer: " + computerChoice;
   resultDisplay.textContent = result;

   switch(result){
      case "You win !":
         playerScore++;
         playerScoreDisplay.textContent = "Player Score: " + playerScore;
         resultDisplay.classList.add("win");
         break;
      case "You lose !":
         computerScore++;
         computerScoreDisplay.textContent = "Computer Score: " + computerScore;
         resultDisplay.classList.add("lose");
         break;
   }
}

