// You must keep track of the user's remaining guesses and prompt the user if they would like to end the game if none remain.

var Word = require('./word.js');
var Letter = require('./letters.js');
var inquirer = require('inquirer');
var chalk = require('chalk');

// helper function to generate a random index according to the word bank
function getRandomNum () {
    return Math.floor(Math.random() * wordBank.length);
}

// starting user stats
var guesses;
var guessedLetters;

// word bank of possible word choices
var wordBank = ['mario','bowser','peach','luigi','daisy','toad','yoshi'];

var currentWord;
var letters;
var placeholder;
var letterData;

// chooses new word and changes placeholder and letter data accordingly
function reset () {
    // current word user has to guess
    currentWord = new Word(wordBank[getRandomNum()]);
    // letters of current word in array
    letters = currentWord.makeLetters();
    // underscores in place of letter in array
    placeholder = currentWord.makeUnderscores();
    // stores letter objects
    letterData = [];
    // iterate through list of letters and create new objects for them -- store in array of objects
    for (var i=0; i < letters.length; i++) {
        letterData.push(new Letter (letters[i], i));
    }
    guesses = 10;
    guessedLetters = [];
}


// welcome message when script is initially run
console.log('Welcome to Hangman!');
console.log('=========================================');
console.log('You have 10 guesses to figure out the mystery word. Good luck!');
console.log('=========================================');

// starts the game
reset();
play();

// asks user to play again if no guesses remain
function readyUp () {
    inquirer.prompt([
        {
            type: 'confirm',
            message: 'Looks like you ran out of guesses. The word was: ' + chalk.yellow(currentWord.word) + '. Would you like to play again?',
            name: 'confirm'
        }
    ]).then(function(data){
        if (data.confirm) {
            console.log('Good luck!')
            reset();
            play();
        }
        else {
            console.log('That\'s okay. We\'ll see you next time!');
        }
    })
}

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
            var guess = data.guess.toLowerCase();
            console.log('=========================================');            
            // if user already guessed that letter, notify them and prompt again
            if (guessedLetters.includes(guess)) {
                console.log('You already guessed that.');
                play();
            }
            // if guess isn't present in word, decrement guesses remaining
            else if (!letters.includes(guess) && !guessedLetters.includes(guess)) {
                guessedLetters.push(guess);
                guesses--;
                console.log(chalk.red('Incorrect!'));
                console.log('Guesses remaining: ' + guesses);
                play();
            }
            // else, check where the user's guess is in the word
            else {
                console.log(chalk.green('Correct!'));
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

                if (hasBeenGuessed) {
                    currentWord.guessed = true;
                }

                play();
            }
        })
    }
    else {
        // if user has guesses remaining, reset stats and play again
        if (guesses > 0) {
            console.log('You solved it! The word was: ' + chalk.yellow(currentWord.word) + '. Here\'s the next word!');
            reset();
            play();
        }
        // if user ran out of guesses, ask them if he/she wants to play again.
        else {
            readyUp();
        }
    }
}