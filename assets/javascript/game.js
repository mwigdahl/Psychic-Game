// create array for computer choice

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// create variables - for wins, losses, guesses left
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var userChoice = [];

// create function for key events
document.onkeyup = function (event) {

    // create variable for key event and convert to lowercase
    var userGuess = event.key.toLowerCase();

    // create computer selection for user to guess from array
    var computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // Store user input in an array


    function addUserChoice() {
        userChoice.push(userGuess);
        document.getElementById('userguess-text').innerHTML = userGuess;

    }

    addUserChoice();

    if (userChoice.indexOf(userGuess) > -1) {


        if (userGuess === computerPick) {
            // if user guess correct, give win and reset guesses left
            wins++;
            guessesLeft = 10;
        } else if (userGuess !== computerPick && guessesLeft > 0) {
            // if selection is wrong and their are still guesses left, remove a guess
            guessesLeft--;
        } else if (userGuess !== computerPick && guessesLeft === 0) {
            // if selection is wrong and no guesses left, add a loss and reset guesses
            losses++;
            guessesLeft = 10;
        } else {
            return;
        }

    } else {
        alert('This is not a letter.');
    }

    // Display results on web page
    document.getElementById("wins-text").textContent = "Wins: " + wins;
    document.getElementById("losses-text").textContent = "Losses: " + losses;
    document.getElementById("guessesleft-text").textContent = "Guesses Left: " + guessesLeft;
    document.getElementById("userguess-text").textContent = "Your guesses so far: " + userChoice; // want to show input array "userChoice[i]"
};
