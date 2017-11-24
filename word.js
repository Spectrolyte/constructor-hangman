// Word: Used to create an object representing the current word the user is attempting to guess.
// This should contain word specific logic and data.

// takes in randomly chosen word from word bank
var Word = function (word) {
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

module.exports = Word;