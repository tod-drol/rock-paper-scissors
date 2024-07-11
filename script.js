// This variables stores the winner's score, once the score reaches five an absolute winner will rise to glory!
let humanScore = 0;
let computerScore = 0;

// function stores the computer choice which is randomly generated
function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3);

  if (randomChoice === 1) {
    return "Rock";
  } else if (randomChoice === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// function stores the value the user inputs through the prompt
function getHumanChoice() {
  let humanChoice = prompt("Rock Paper or Scissors?");
  return humanChoice;
}

function playGame() {
  // function plays single rounds using conditional statements and the stored values in the selection variables to select a winner and increases the winner's score
  function playRound(humanSelection, computerSelection) {
    if (humanSelection === "rock" && computerSelection === "scissors") {
      humanScore++;
      console.log("You Won this round!");
    } else if (humanSelection === "paper" && computerSelection === "rock") {
      humanScore++;
      console.log("You Won this round!");
    } else if (humanSelection === "scissors" && computerSelection === "paper") {
      humanScore++;
      console.log("You Won this round!");
    } else if (
      (humanSelection === "rock" && computerSelection === "rock") ||
      (humanSelection === "paper" && computerSelection === "paper") ||
      (humanSelection === "scissors" && computerSelection === "scissors")
    ) {
      console.log("You tied this round!");
    } else {
      computerScore++;
      console.log("Computer won this round!");
    }
  }

  // stores the value both functions return and use it to define the round winner
  // const humanSelection = getHumanChoice().toLowerCase();
  //   playRound(getHumanChoice().toLowerCase(), getComputerChoice().toLowerCase());
  playRound("rock", getComputerChoice().toLowerCase());

  console.log(
    `${"your score: " + humanScore + " Computer's score: " + computerScore}`
  );

  if (humanScore == 5) {
    console.log("You win the game!");
    return;
  }

  if (computerScore == 5) {
    console.log("Computer gets to destroy the world because you lost!");
    return;
  }

  playGame();
}

// console.log(`The computer chose: ${getComputerChoice()}`);
// console.log(getHumanChoice());
// console.log(playRound(humanSelection, computerSelection));

playGame();
