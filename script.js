let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
  let humanChoice = prompt("Rock Paper or Scissors?").toLowerCase();
  return humanChoice;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanSelection, computerSelection) {
    return `The human chose: ${humanSelection} and the computer chose: ${computerSelection}` ;
}

// console.log(`The computer chose: ${getComputerChoice()}`);
// console.log(getHumanChoice());
console.log(playRound(humanSelection, computerSelection));