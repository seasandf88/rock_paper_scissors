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

let win = 0;
let lose = 0;
let tie = 0;

//Empty images placeholders
const pImg = document.querySelector("#pImg");
const cImg = document.querySelector("#cImg");
pImg.src = `./images/none.png`;
cImg.src = `./images/none.png`;

const pScore = document.querySelector("#pScore");
const cScore = document.querySelector("#cScore");
const tScore = document.querySelector("#tScore");
pScore.textContent = "0";
cScore.textContent = "0";
tScore.textContent = "0";

const buttons = document.querySelectorAll(".play");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    turn(button, computerChoice);
    pImg.src = `./images/${button.id}2.png`;
    cImg.src = `./images/${computerChoice}.png`;
    gsap.from("#pImg", { duration: 0.17, y: "-100%", x: "-20%", opacity: 0 });
    gsap.from("#cImg", {
      duration: 0.15,
      y: "-100%",
      x: "20%",
      opacity: 0,
      delay: 0.02,
    });
  });
});

const overlayDiv = document.querySelector(".overlay");
const finalMsg = document.querySelector("#finalMsg");

function turn(button, computerChoice) {
  playRound(button.id, computerChoice);
  pScore.textContent = win;
  cScore.textContent = lose;
  tScore.textContent = tie;
  if (win == 3) {
    overlayDiv.classList.add("active");
    finalMsg.textContent = "You Won!";
    button.disabled = true;
  } else if (lose == 3) {
    overlayDiv.classList.add("active");
    finalMsg.textContent = "You Lost!";
    button.disabled = true;
  }
}

const finalButton = document.querySelector("#finalButton");
finalButton.addEventListener("click", () => {
  overlayDiv.classList.remove("active");
  reset();
});

function reset() {
  pScore.textContent = win = 0;
  cScore.textContent = lose = 0;
  tScore.textContent = tie = 0;
  pImg.src = `./images/none.png`;
  cImg.src = `./images/none.png`;
  buttons.forEach((button) => {
    button.disabled = false;
  });
}

// Game rules and scoring counters
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
