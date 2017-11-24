// You must keep track of the user's remaining guesses and prompt the user if they would like to end the game if none remain.

// when user enters game, ask if they would like to play
    // if yes, start the game
    // else, stop script

var Word = require('./word.js');
var Letter = require('./letters.js');

// helper function to generate a random index according to the word bank
function getRandomNum () {
    return Math.floor(Math.random() * wordBank.length);
}

// word bank of possible word choices
var wordBank = ['hello','world','coding'];

// current word user has to guess
var currentWord = new Word(wordBank[getRandomNum()]);

// letters of current word in array
var letters = currentWord.makeLetters();
// underscores in place of letter in array
var placeholder = currentWord.makeUnderscores();

// stores letter objects
var letterData = [];

// iterate through list of letters and create new objects for them -- store in array of objects
for (var i=0; i < letters.length; i++) {
    letterData.push(new Letter (letters[i], i));
}

console.log(letterData);
console.log('hello');