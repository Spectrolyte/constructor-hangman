// You must keep track of the user's remaining guesses and prompt the user if they would like to end the game if none remain.

// when user enters game, ask if they would like to play
    // if yes, start the game
    // else, stop script

var Word = require('./word.js');
var Letter = require('./letters.js');
var inquirer = require('inquirer');

// helper function to generate a random index according to the word bank
function getRandomNum () {
    return Math.floor(Math.random() * wordBank.length);
}

// word bank of possible word choices
var wordBank = ['hello','worlld','codding'];

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

// starting user stats
var guesses = 10;
var guessedLetters = [];

// inquirer.prompt([
//     {
//         type: 'confirm',
//         message: 'Welcome to Hangman! Are you ready to play?',
//         name: 'confirm'
//     }
// ]).then(function(data){
//     if (data.confirm) {
//         console.log(data.confirm);
//     }
//     else {
//         console.log('hello');
//     }
// })

// else if the word has been guessed correctly, display the word and ask to play again
// else if the user doesn't have guesses left and the word hasn't been guessed yet, display word and ask to try again
// only run this if user has guesses remaining and the word hasn't been guessed yet
function play () {
    if (guesses > 0 && !currentWord.guessed) {
        console.log(placeholder.join(' '));
        inquirer.prompt([
            {
                type: 'input',
                message: 'Guess a letter!',
                name: 'guess'
            }
        ]).then(function(data){
            var guess = data.guess;
            // if user already guessed that letter, notify them and prompt again
            if (guessedLetters.includes(guess)) {
                console.log('You already guessed that.');
                play();
            }
            // if guess isn't present in word, decrement guesses remaining
            else if (!letters.includes(guess) && !guessedLetters.includes(guess)) {
                guessedLetters.push(guess);
                guesses--;
                console.log('Guesses remaining: ' + guesses);
                play();
            }
            // else, check where the user's guess is in the word
            else {
                for (var i=0; i < letterData.length; i++) {
                    // if user's guess is in letterData and has not already been guessed, replace underscores in placeholder
                    if (guess === letterData[i].letter && !letterData[i].guessed) {
                        letterData[i].guessed = true;
                        placeholder[i] = letterData[i].letter
                    }
                }
                guessedLetters.push(guess);
                // if all letters have been guessed, change status of word guess to true
                var hasBeenGuessed = letterData.every(function (currentVal) {
                    return currentVal.guessed === true;
                });

                console.log(hasBeenGuessed);

                if (hasBeenGuessed) {
                    currentWord.guessed = true;
                }

                play();
            }
        })
    }
    else {
        console.log('gg');
    }
}

play();

// console.log('hello');