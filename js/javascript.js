const buttons = document.querySelectorAll("#buttons");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector("#results");
let humanSelection;

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

function playRound(playerSelection, computerSelection) {
  let winner;
  let message;
  if (playerSelection === computerSelection) {
    message = `Game ends in tie, no winner.`;
    winner = "Tie";
  } else if (playerSelection === "Rock") {
    if (computerSelection === "Paper") {
      message = `You Lose! ${computerSelection} beats ${playerSelection}`;
      winner = "Computer";
    } else {
      message = `You win! ${playerSelection} beats ${computerSelection}`;
      winner = "Player";
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Scissors") {
      message = `You Lose! ${computerSelection} beats ${playerSelection}`;
      winner = "Computer";
    } else {
      message = `You win! ${playerSelection} beats ${computerSelection}`;
      winner = "Player";
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Rock") {
      message = `You Lose! ${computerSelection} beats ${playerSelection}`;
      winner = "Computer";
    } else {
      message = `You win! ${playerSelection} beats ${computerSelection}`;
      winner = "Player";
    }
  }
  let para = document.createElement("p");
  para.textContent = message;
  results.appendChild(para);
  return winner;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let continueGame = true;
  console.log("Welcome to Rock Paper Scissors game!");
  while (continueGame) {
    let player;
    let computer = computerPlay();
    let winner = playRound(player, computer);
    if (winner === "Player") {
      playerScore++;
    } else if (winner === "Computer") {
      computerScore++;
    }
    console.log(`User: ${playerScore} - Computer: ${computerScore} `);
    if (playerScore >= 5) {
      console.log("User wins the game");
      continueGame = false;
    } else if (computerScore >= 5) {
      console.log("Computer wins the game");
      continueGame = false;
    }
  }
}

buttons.forEach((button) => {
  button.addEventListener(
    "click",
    () => {
      playRound(humanSelection, computerPlay());
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

//game();
