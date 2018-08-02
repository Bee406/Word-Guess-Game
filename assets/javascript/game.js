// Create array for computer to choose from
var wordChoices = ["panda", "zebra", "monkey", "dolphin", "penguin"];

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

//Define guessed letters and list 
var guessedLetters = [];
var guessList = [];

//Watch document for click to start game function
document.addEventListener("click", gameStartFunction);

function gameStartFunction() {

    //Make start, win, and lose text dissapear
    winText.style.display = "none";
    loseText.style.display = "none";
    clickText.style.display = "none";

    //Randomly chooses a choice from the wordChoices array
    var wordSelection = wordChoices[Math.floor(Math.random() * wordChoices.length)];

    //Check words are being randomly selected
    console.log(wordSelection);

    //Create underscores for number of letters in the selected word
    var spaces = [];
    for (var i = 0; i < wordSelection.length; i++) {
        spaces[i] = "_ ";
    };

    //Get rid of commas, make string out of array?
    var wordAnswer = document.getElementById("spaces");
    wordAnswer.innerHTML = spaces.join(" ");


    //Determine number of guesses the user will get
    var guessesLeft = 8;
    document.getElementById("guesses").innerHTML = "Number of guesses remaining: " + guessesLeft;

    //letters in the word
    var lettersLeft = wordSelection.length;

    //user's wins
    var win = 0;

    //Display guesses
    var guessList = document.getElementById("guessed");


    //Function for user to start guessing
    document.onkeyup = function gamePlayFunction() {
        if (guessesLeft > 0 && lettersLeft > 0) {
            var userGuess = event.key;

            //check if letter has been guessed 
            if (guessedLetters.indexOf(userGuess) === -1) {

                //add guess to array of guessed letters
                guessedLetters.push(userGuess);

                //put spaces between letters and disply on document
                guessList.innerHTML = "Letters guessed: " + guessedLetters.join(" ");

                //subtract 1 from guesses left
                guessesLeft--;

                //display updated guesses left
                document.getElementById("guesses").innerHTML = "Number of guesses remaining: " + guessesLeft;


                //check each letter in the selected word to determine if guess is correct
                for (var j = 0; j < wordSelection.length; j++) {
                    if (userGuess === wordSelection[j]) {
                        console.log("Letter guessed is in selected word");

                        //index in selected word of correct guess
                        console.log(wordSelection.indexOf(userGuess));

                        //subtract 1 from letters left to guess
                        lettersLeft--
                        console.log(lettersLeft);
                    }
                }
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











