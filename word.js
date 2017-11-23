// Word: Used to create an object representing the current word the user is attempting to guess.
// This should contain word specific logic and data.

// helper function to generate a random index according to the word bank
function getRandomNum () {
    return Math.floor(Math.random() * wordBank.length);
}

// word bank of possible word choices
var wordBank = ['hello','world','coding'];

// takes in randomly chosen word from word bank
function Word (word) {
    // word = chosen word
    this.word = word,
    this.makeLetters = function () {
        return this.word.split('');
    },
    // placeholder = chosen word replaced with underscores
    this.makeUnderscores = function () {
        var underscores = [];
        for (var i=0; i < word.length; i++) {
            underscores.push('_');
        }
        return underscores
    },
    // guessed = boolean; if word has been guessed correctly -- initially set to false
    this.guessed = false
}

// need to reassign this at every new round
var currentWord = new Word(wordBank[getRandomNum()]);

module.exports = currentWord;