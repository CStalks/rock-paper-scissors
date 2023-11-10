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
  let buttons = document.querySelectorAll('button');
  let points = document.querySelector('.points');
  let message = document.querySelector('.msg');

  let scoreboard = document.querySelector('.scoreboard');
  let endMessage = document.createElement('button');
  endMessage.style.color = 'black';
  endMessage.textContent = 'Click to restart game';

  buttons.forEach(button => {
    button.addEventListener('click', () => {
        
      message.textContent = (playRound(button.id.toLocaleLowerCase(),getComputerChoice()));
      points.textContent = `${playerScore} : ${computerScore}`;

      if(computerScore === 5 || playerScore === 5){
        buttons.forEach(button => {
          button.setAttribute("disabled", 1);
          playerScore = computerScore = 0;

          setTimeout(() => {
          //reset score only if user wants to play again
          message.textContent = "Game Over!!!"
          scoreboard.appendChild(endMessage);

          endMessage.addEventListener('click', () => {
          points.textContent = `${playerScore} : ${computerScore}`;

          endMessage.remove();
          buttons.forEach(button => {
            button.removeAttribute("disabled");     
          });
        });
        }, 1000);
      });
    }});
  });
}

game();
