function capitalize(text = "") {
  let firstLetter = text.charAt(0);
  let firstUpper = firstLetter.toUpperCase();
  let lowerText = text.toLowerCase();
  let lowArray = lowerText.split("");
  lowArray[0] = firstUpper;
  let word = lowArray.join("");
  return word;
}

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
  //document.getElementById("#computerSelection").innerHTML = `Computer plays: ${selection}`;
  return selection;
}

function humanPlay() {
  let selection;
  let continueInput = true;
  while (continueInput) {
    let userInput = prompt("Select Rock, Paper, or Scissors", "Rock");
    selection = capitalize(userInput);
    if (
      selection === "Rock" ||
      selection === "Paper" ||
      selection === "Scissors"
    ) {
      continueInput = false;
    } else {
      alert("Please enter a valid option!");
    }
  }
  //document.getElementById("#playerSelection").innerHTML = `Player plays: ${selection}`;
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
  console.log(message);
  return winner;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let continueGame = true;
  console.log("Welcome to Rock Paper Scissors game!");
  while (continueGame) {
    let player = humanPlay();
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

game();
