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