


var words = [
    "horse",
    "cowboy",
    "lasso",
    "saddle",
    "sixshooter",
    "tombstone",
    "westworld",
    "sheriff",
    "cattle",
    "gunslinger",
    "ranch",
    "rodeo",
    "roundup",
    "shotgun",
    "clint",
    "duke"
];

const attempts = 10

var guessedLetters = [];
var currentWordId;
var guessingWord = [];
var remainingGuesses = 0;
var started = false;
var finished = false;
var wins = -1;

function reset() {
    remainingGuesses = attempts;
    started = false;

    currentWordId = Math.floor(Math.random() * (words.length));

    guessedLetters = [];
    guessingWord = [];

    for (var i = 0; i < words[currentWordId].length; i++) {
        guessingWord.push("_");
    }

    document.getElementById("tryAgain").style.cssText = "display: none";
    document.getElementById("youLose").style.cssText = "display: none";
    document.getElementById("youWin").style.cssText = "display: none";

    display();

};

function display() {

    document.getElementById("allWins").innerText = wins;
    document.getElementById("currentWord").innerText = "";
    for (var i = 0; i < guessingWord.length; i++) {
        document.getElementById("currentWord").innerText += guessingWord[i];
    }
    document.getElementById("guesses").innerText = remainingGuesses;
    document.getElementById("letters").innerText = guessedLetters;
    if(remainingGuesses <= 0) {
        document.getElementById("youLose").style.cssText = "display: block";
        document.getElementById("tryAgain").style.cssText = "display: block";
        finished = true;
    }
};
var audio = document.getElementById("playAudio");

document.onkeydown = function(event) {
    if(finished) {
        reset();
        finished = false;
        audio.play();

    } else {
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key.toLowerCase());
            audio.play();
        }
    }
};
function pauseAudio(){
    audio.pause();
}
function playAudio(){
    audio.play();
}
function makeGuess(letter) {
    if (remainingGuesses > 0) {
        if(!started) {
            started = true;
        }
        if (guessedLetters.indexOf(letter) === -1) {
            guessedLetters.push(letter);
            evaluateGuess(letter);
        }
    }
    display();
    checkWin();
};

function evaluateGuess(letter) {
    var x = [];
    for (var i = 0; i < words[currentWordId].length; i++){
        if(words[currentWordId][i] === letter) {
            x.push(i);
        }
    }
    if(x.length <= 0) {
        remainingGuesses--;
    } else {
        for (var i = 0; i < x.length; i++) {
            guessingWord[x[i]] = letter;
        }
    }
};

function checkWin() {
    if(guessingWord.indexOf("_") === -1) {
        document.getElementById("youWin").style.cssText = "display: block";
        document.getElementById("tryAgain").style.cssText = "display: block";
        wins++
        finished = true;
    }
};
