var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if(!isChrome){
    $('#iframeAudio').remove();
} else {
    $('#playAudio').remove();
} //trying to get background audio to play in chrome, still no success

var words = [
    "clint eastwood",
    "john wayne",
    "horse",
    "cowboy",
    "lasso",
    "saddle",
    "six shooter",
    "tombstone",
    "wyatt earp",
    "sheriff",
    "cattle",
    "gunslinger",
    "ranch",
    "rodeo"
];

const attempts = 10

var guessedLetters = [];
var currentWordId;
var guessingWord = [];
var remainingGuesses = 0;
var started = false;
var finished = false;
var wins = 0;

function reset() {
    remaingingGuesses = attempts;
    started = false;

    currentWordId = Math.floor(Math.random() * (selectableWords.length));

    guessedLetters = [];
    guessingWord = [];

    for (var i = 0; i < words[currentWord].length; i++) {
        guessingWord.push("_");
    }

    document.getElementById("tryAgain").style.cssText = "display: none";

    display();

};

function display() {

    document.getElementById("allWins").innerText = wins;
    document.getElementById("currentWord").innerText = "";
    for (var i = 0; i < guessingWord.length; i++) {
        document.getElementById("currentWord").innerText += guessingWord[i];
    }
    document.getElementById("guesses").innerText = remaingingGuesses;
    document.getElementById("letters").innerText = guessedLetters;
    if(remaingingGuesses <= 0) {
        document.getElementById("youLose").style.cssText = "display: block";
        document.getElementById("youWin").style.cssText = "display: block":
        finished = true;
    }
};
