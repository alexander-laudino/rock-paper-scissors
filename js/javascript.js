const buttons = document.querySelectorAll("#buttons");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector("#results");
let humanSelection;
let winner;
let round = 0;
let playerScore = 0;
let computerScore = 0;
let ties = 0;

function computerPlay() {
  let selection;
  let randomNum = Math.random() * 100;
  if (randomNum >= 67) {
    selection = "Rock";
  } else if (randomNum < 67 && randomNum >= 34) {
    selection = "Paper";
  } else {
    selection = "Scissors";
  }
  return selection;
}

function playRound(playerSelection, computerSelection, round = 0) {
  let winner;
  let message = `Round ${round}:`;
  if (playerSelection === computerSelection) {
    message += ` Game ends in tie, no winner.`;
    winner = "Tie";
  } else if (playerSelection === "Rock") {
    if (computerSelection === "Paper") {
      message += ` You Lose! ${computerSelection} beats ${playerSelection}`;
      winner = "Computer";
    } else {
      message += ` You win! ${playerSelection} beats ${computerSelection}`;
      winner = "Player";
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Scissors") {
      message += ` You Lose! ${computerSelection} beats ${playerSelection}`;
      winner = "Computer";
    } else {
      message += ` You win! ${playerSelection} beats ${computerSelection}`;
      winner = "Player";
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Rock") {
      message += ` You Lose! ${computerSelection} beats ${playerSelection}`;
      winner = "Computer";
    } else {
      message += ` You win! ${playerSelection} beats ${computerSelection}`;
      winner = "Player";
    }
  }
  let para = document.createElement("p");
  para.setAttribute("class", "round");
  para.textContent = message;
  results.appendChild(para);
  return winner;
}

function game(winner) {
  if (winner === "Player") {
    playerScore++;
  } else if (winner === "Computer") {
    computerScore++;
  } else {
    ties++;
  }

  let roundResult = `User: ${playerScore} - Computer: ${computerScore} | Ties: ${ties}`;
  let score = document.getElementById("score");
  score.textContent = roundResult;

  if (playerScore >= 5) {
    let rounds = document.querySelectorAll(".round");
    rounds.forEach((round) => {
      round.parentNode.removeChild(round);
    });
    let gameWinner = document.createElement("p");
    gameWinner.setAttribute("id", "winner");
    gameWinner.textContent = "User wins the game";
    results.appendChild(gameWinner);
  } else if (computerScore >= 5) {
    let rounds = document.querySelectorAll(".round");
    rounds.forEach((round) => {
      round.parentNode.removeChild(round);
    });
    let gameWinner = document.createElement("p");
    gameWinner.setAttribute("id", "winner");
    gameWinner.textContent = "Computer wins the game";
    results.appendChild(gameWinner);
  }
}

buttons.forEach((button) => {
  button.addEventListener(
    "click",
    () => {
      ++round;
      winner = playRound(humanSelection, computerPlay(), round);
      game(winner);
    },
    {
      capture: false,
      once: false,
    }
  );
});

rock.addEventListener("click", () => {
  humanSelection = "Rock";
});

paper.addEventListener("click", () => {
  humanSelection = "Paper";
});

scissors.addEventListener("click", () => {
  humanSelection = "Scissors";
});

let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
  let results = document.querySelector("#results").querySelectorAll("*");
  results.forEach((node) => {
    node.parentNode.removeChild(node);
  });
  playerScore = 0;
  computerScore = 0;
  ties = 0;
  round = 0;
  let score = document.getElementById("score");
  score.textContent = "";
});
