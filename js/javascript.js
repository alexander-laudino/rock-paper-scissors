function capitalize(text="") {
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
        selection = "Scissors"
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
        if (selection === "Rock" || selection === "Paper" || selection === "Scissors") {
            continueInput = false;
        } else {
            alert("Please enter a valid option!");
        }
    };
    //document.getElementById("#playerSelection").innerHTML = `Player plays: ${selection}`;
    return selection;
}

