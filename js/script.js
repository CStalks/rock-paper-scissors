let playerScore = 0
let computerScore = 0;

function getComputerChoice(){
  let choice = Math.floor(Math.random() * 3) + 1;

  return (choice == 1) ? "rock" : (choice == 2) ? "paper":  "scissors";
}

function playRound(playerSelection, computerSelection){
  if(playerSelection === "rock"){
    if(computerSelection === "rock"){
        return "Draw! Rock tied with Rock";
    } else if(computerSelection === "paper"){
        computerScore++;    
        return "You Lose! Paper beats Rock";
    } else if(computerSelection === "scissors"){
        playerScore++;
        return "You Win! Rock beats Scissors";
    } 
  } else if(playerSelection === "paper"){
    if(computerSelection === "rock"){
        playerScore++;
        return "You Win! Paper beats Rock";
    } else if(computerSelection === "paper"){
        return "Draw! Paper tied with Paper";
    } else if(computerSelection === "scissors"){
        computerScore++;
        return "You Lose! Scissors beats Paper";
    }
  }
  else if(playerSelection == "scissors"){
    if(computerSelection === "rock") {
        computerScore++;
        return "You Lose! Rock beats Scissors";
    } else if(computerSelection === "paper"){
        playerScore++;
        return "You Win! Scissor bears Rock";
    } else if(computerSelection === "scissors") {
        return "Draw! Scissors tied with Scissors";
    }
  }
}

function game(){
  for(let i = 1; i <= 5; i++){
    playerChoice = prompt("Enter rock | paper | scissors");
    console.log(playRound(playerChoice,getComputerChoice()));
  }

  (playerScore > computerScore) ? console.log("You Won")  :
  (computerScore > playerScore) ? console.log("You Lost") :
                                  console.log("You lost");
}

game();
