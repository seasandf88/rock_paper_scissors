// Random computer choice
function getComputerChoice() {
  let x = Math.random();
  if (x <= 1 / 3) {
    return "rock";
  } else if (x <= 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Game rules and scoring counters
let win = 0;
let lose = 0;
let tie = 0;
function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    tie += 1;
    return "Tie!!!";
  } else if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      win += 1;
      return "You Win! Rock beats Scissors";
    } else {
      lose += 1;
      return "You Lose! Paper beats Rock";
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "scissors") {
      lose += 1;
      return "You Lose! Scissors beats Paper";
    } else {
      win += 1;
      return "You Win! Paper beats Rock";
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      win += 1;
      return "You Win! Scissors beats Paper";
    } else if (computerChoice === "rock") {
      lose += 1;
      return "You Lose! Rock beats Scissors";
    }
  }
}
// Five rounds game
for (let i = 0; i < 5; i++) {
  console.log("\n ROUND " + (i + 1));
  askplayer();
  // This function check if the player input is correct,
  // if not, it alert the player and prompt them to enter a value again.
  function askplayer() {
    let playerChoice = prompt(
      "Round: " + (i + 1) + "\nPlease Enter rock, paper or scissors"
    );
    playerChoice = playerChoice.toLowerCase();
    if (
      playerChoice !== "paper" &&
      playerChoice !== "rock" &&
      playerChoice !== "scissors"
    ) {
      alert("You did not enter a correct value");
      askplayer();
    } else {
      let computerChoice = getComputerChoice();
      //console.log(computerChoice);
      console.log(playRound(playerChoice, computerChoice));
    }
  }
}
// Game result
console.log("\nScore: \nWins: " + win + "\nLosses: " + lose + "\nTies: " + tie);
if (win < lose) {
  console.log("\n---You Lost!---");
} else if (win > lose) {
  console.log("\n---You Won!---");
} else {
  console.log("\n---Tie!!!---");
}
