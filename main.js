// You must keep track of the user's remaining guesses and prompt the user if they would like to end the game if none remain.

// when user enters game, ask if they would like to play
    // if yes, start the game
    // else, stop script

// start of game
    // pick random word
        // have a word bank with related terms
        // pick a word from word bank using a randomly generated number
        // set the word to the current word -- use constructor
            // word = chosen word
            // placeholder = chosen word replaced with underscores
            // guessed = boolean; if word has been guessed correctly -- initially set to false
            // split up word into individual letters
        // iterate through list of letters and create new objects for them -- store in array of objects
            // if letter object already exists, add new index to index prop
        // letter constructor
            // letter = one of letters of the current word
            // index = array of indexes where the letter appears in the word
            // guessed = boolean; if letter has been guessed correctly -- initially set to false