// Create array for computer to choose from
var wordChoices = ["panda", "zebra", "monkey", "dolphin", "penguin"];

//list of guessed letters 
var guessedLetters = [];

// Define click to start text
var clickText = document.getElementById("start-dialog");

//Define win text
var winText = document.getElementById("win");

//Define lose text
var loseText = document.getElementById("lose");

//Hide win and lose text
winText.style.display = "none";
loseText.style.display = "none";

var totalWins = [];
var reducer = (accumulator, currentValue) => accumulator + currentValue;

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

    //chaange list of guessed letters to 0
    var guessedLetters = [];
    var guessList = [];

    //letters in the word
    var lettersLeft = wordSelection.length;

    //user's wins
    var win = 0;

    //Get rid of commas, make string out of array?, display on page
    var guessList = document.getElementById("guessed");
    guessList.length = 0;


    //Function for user to start guessing
    document.onkeyup = function gamePlayFunction() {
        if (guessesLeft > 0 && lettersLeft > 0) {
            var userGuess = event.key;

            //if letter has not been guessed, add it to the guessed letter array
            if (guessedLetters.indexOf(userGuess) === -1) {
                guessedLetters.push(userGuess);
                console.log(guessedLetters);

                guessList.innerHTML = "Letters guessed: " + guessedLetters.join(" ");

                //display updated guesses left
                guessesLeft--;
                document.getElementById("guesses").innerHTML = "Number of guesses remaining: " + guessesLeft;
            };

            //use for loop so if the letter guessed is in the word selected it will update in game
            for (var j = 0; j < wordSelection.length; j++) {
                if (userGuess === wordSelection[j]) {
                    console.log("Letter guessed is in selected word");
                    //maybe use indexof
                    console.log(wordSelection.indexOf(userGuess));
                    lettersLeft--
                    console.log(lettersLeft);
                }
            }

            if (lettersLeft === 0) {
                winText.style.display = "block";
                win++;
                totalWins.push(win);
                document.getElementById("wins").innerHTML = "Wins: " + totalWins.reduce(reducer);
            }
        }
        if (guessesLeft < 1) {
            loseText.style.display = "block";

        }
    }

    function clickStartHidden() {
        clickText.style.visibility === "hidden";
    }
}

//look at scope activity for underscore replacement?











