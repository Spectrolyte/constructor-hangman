// Letter: Used for each letter in the current word. Each letter object should either display an underlying character,
// or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter.
// This should contain letter specific logic and data.

var currentWord = require('./word.js');

var letters = currentWord.makeLetters();
var placeholder = currentWord.makeUnderscores();

var letterData = [];

// iterate through list of letters and create new objects for them -- store in array of objects
for (var i=0; i < letters.length; i++) {
    letterData.push(new Letter (letters[i], i));
}

console.log(JSON.stringify(letterData));

// takes in word
function Letter (letter, index) {
    // letter = one of letters of the current word
    this.letter = letter,
    // index = array of index where the letter appears in the word
    this.index = index,
    // guessed = boolean; if letter has been guessed correctly -- initially set to false
    this.guess = false
}

console.log(letterData);
console.log('hello');