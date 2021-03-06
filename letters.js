// Letter: Used for each letter in the current word. Each letter object should either display an underlying character,
// or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter.
// This should contain letter specific logic and data.

// takes in word
var Letter = function (letter, index) {
    // letter = one of letters of the current word
    this.letter = letter,
    // guessed = boolean; if letter has been guessed correctly -- initially set to false
    this.guessed = false
}

module.exports = Letter;