// Create array for computer to choose from
var wordChoices = ["panda", "zebra", "monkey", "dolphin", "penguin", "lion", "tiger", "elephant", "seal", "otter",];

// Define click to start text
var clickText = document.getElementById("start-dialog");

//Define win text
var winText = document.getElementById("win");

//Define lose text
var loseText = document.getElementById("lose");

//Hide win and lose text
winText.style.display = "none";
loseText.style.display = "none";

//Sum of total wins
var totalWins = [];
var reducer = (accumulator, currentValue) => accumulator + currentValue;

//Watch document for click to start game function
document.addEventListener("click", gameStartFunction);

function gameStartFunction() {

    //Make start, win, and lose text dissapear.
    winText.style.display = "none";
    loseText.style.display = "none";
    clickText.style.display = "none";

    //Randomly chooses a choice from the wordChoices array
    var wordSelection = wordChoices[Math.floor(Math.random() * wordChoices.length)];

    //Check words are being randomly selected
    console.log(wordSelection);

    //Define guessed letters
    var guessedLetters = [];

    //Create underscores for number of letters in the selected word
    var spaces = [];
    for (var i = 0; i < wordSelection.length; i++) {
        spaces[i] = "_ ";
    };

    //Display spaced on screen
    document.getElementById("word-spaces").innerHTML = spaces.join(" ");


    //Determine number of guesses the user will get
    var guessesLeft = 8;
    document.getElementById("guesses").innerHTML = "Number of guesses remaining: " + guessesLeft;

    //letters in the word
    var lettersLeft = wordSelection.length;

    //user's wins
    var win = 0;

    //Display guesses
    document.getElementById("letters-guessed").innerHTML = "Letters guessed: " + guessedLetters.join(" ");


    //Function for user to start guessing
    document.onkeyup = function gamePlayFunction() {
        if (guessesLeft > 0 && lettersLeft > 0) {
            var userGuess = event.key.toLowerCase();

            //check if letter has been guessed 
            if (guessedLetters.indexOf(userGuess) === -1) {
                //check each letter in the selected word to determine if guess is correct
                for (var j = 0; j < wordSelection.length; j++) {
                    if (userGuess === wordSelection[j]) {
                        //index in selected word of correct guess
                        console.log("Index in selected word: " + wordSelection.indexOf(userGuess));
                        spaces[j] = userGuess;
                        document.getElementById("word-spaces").innerHTML = spaces.join(" ");

                        console.log("Letter guessed is in selected word");

                        //subtract 1 from letters left to guess
                        lettersLeft--
                        console.log("Letters left to guess: " + lettersLeft);
                    }
                }

                //add guess to array of guessed letters
                guessedLetters.push(userGuess);

                //display guesses on document
                document.getElementById("letters-guessed").innerHTML = "Letters guessed: " + guessedLetters.join(" ");

                //subtract 1 from guesses left
                guessesLeft--;

                //display updated guesses left
                document.getElementById("guesses").innerHTML = "Number of guesses remaining: " + guessesLeft;

                //game over if letters left = 0 (user guessed all letters in the word)
                if (lettersLeft === 0) {

                    //display winning text on document
                    winText.style.display = "block";

                    //add 1 to wins
                    win++;

                    //push this win into totalWins array
                    totalWins.push(win);

                    //reduce totalWins array to sum and display on document
                    document.getElementById("wins").innerHTML = "Wins: " + totalWins.reduce(reducer);
                }
            }
        }
        //game over if guesses left is less than one
        if (guessesLeft < 1) {

            //display losing text on document
            loseText.style.display = "block";

        }
    }
}

//look at scope activity for underscore replacement?











