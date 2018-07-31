// Create array for computer to choose from
var wordChoices = ["panda", "zebra", "monkey", "dolphin", "penguin"];

//Set number of wins
var wins = 0;
document.getElementById("wins").innerHTML = wins;

//This function is run when the user presses a key
document.onkeyup = function(start){

    //Randomly chooses a choice from the wordChoices array
    var wordSelection = wordChoices[Math.floor(Math.random()*wordChoices.length)];

    //Check words are being randomly selected
    console.log (wordSelection);

    //Create underscores for number of letters in the selected word
    var wordAnswer = [];
    for (var i=0; i<wordSelection.length; i++){
    wordAnswer[i]="_ ";}
    document.getElementById("spaces").innerHTML = wordAnswer;

    //Create a variable to track the letters left to guess and know when the player has won
    var lettersLeft = wordSelection.length;

    //User guess
    var userGuess = event.key;

    //Determine number of guesses the user will get...we'll start at 15
    var guessesLeft = 15;
    document.getElementById("guesses").innerHTML = guessesLeft; 

    //display key that was pressed
    document.getElementById("key-pressed").innerHTML = "You guessed " + userGuess;

    //use for loop so if the letter guessed is in the word selected it will update in game
    for (var j=0; j<wordSelection.length; j++){
        if (wordSelection[j]===userGuess){
            wordAnswer[j] = userGuess;
            lettersLeft--;
            }
        else {guessesLeft--;}
            }

    //Creating an empty arrary for guessed letters to be pushed into
        var guessedLetters = [];

    //Display guessed letters on the screen
        for (var i=0; i<guessedLetters.length; i++){
        document.getElementById("letters-guessed").innerHTML = guessedLetters++
        }
    }






