function capitalize(text="") {
    let firstLetter = text.charAt(0);
    let firstUpper = firstLetter.toUpperCase();
    let lowerText = text.toLowerCase();
    let lowArray = lowerText.split("");
    lowArray[0] = firstUpper;
    let word = lowArray.join("");
    return word;
}