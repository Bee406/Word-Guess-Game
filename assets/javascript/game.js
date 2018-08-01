// Create array for computer to choose from
var wordChoices = ["panda", "zebra", "monkey", "dolphin", "penguin"];

document.addEventListener("click", gameStartFunction);

function gameStartFunction() {
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


    //Determine number of guesses the user will get...we'll start at 15
    var guessesLeft = 15;
    document.getElementById("guesses").innerHTML = "Number of guesses remaining: " + guessesLeft;

    //list of guessed letters 
    var guessedLetters = [];
    

    //letters in the word
    var lettersLeft = wordSelection.length;

    //user's wins
    var win = 0;
    document.getElementById("wins").innerHTML = "Wins: " + win;


    //Function for user to start guessing
    document.onkeyup = function gamePlayFunction() {
        if (guessesLeft > 0 && lettersLeft > 0) {
            var userGuess = event.key;

            //if letter has not been guessed, add it to the guessed letter array
            if (guessedLetters.indexOf(userGuess) === -1) {
                guessedLetters.push(userGuess);
                console.log(guessedLetters);

                //Get rid of commas, make string out of array?, display on page
                var guessList = document.getElementById("guessed");
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
                alert("You win!");
                win++;
                document.getElementById("wins").innerHTML = "Wins: " + win;
                function gameStartFunction() { };
            }
        }
        if (guessesLeft < 1) {
            alert("You lose!");
            function gameStartFunction() { };
        }
    }
}











