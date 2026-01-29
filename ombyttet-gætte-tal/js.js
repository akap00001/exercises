let min = 0;
let max = 100;
let guess;

const highBtn = document.getElementById("high");
const lowBtn = document.getElementById("low");
const rightBtn = document.getElementById("right");
const feedback = document.getElementById("feedback")

const startBtn = document.getElementById("start");
startBtn.addEventListener("click", startGame);

highBtn.addEventListener("click", highGuess);
lowBtn.addEventListener("click", lowGuess);
rightBtn.addEventListener("click", rightGuess);



function guessNum() {
    guess = Math.floor((max - min) / 2 + min);
    // console.log("Mit gæt er " + guess + "?");
    feedback.textContent = "Er dit tal " + guess + "?";
    
    highBtn.disabled = false;
    lowBtn.disabled = false;
    rightBtn.disabled = false;
}

function highGuess() {
    max = guess;
    guessNum();
}

function lowGuess() {
    min = guess;
    guessNum();
}

function rightGuess() {
    // console.log("Gættet er korrekt! " + guess);
    feedback.textContent = "Gættet er korrekt! Tallet er " + guess + "!";
    
    highBtn.disabled = true;
    lowBtn.disabled = true;
    rightBtn.disabled = true;
    
}

function startGame() {
    min = 0;
    max = 100;
    
    highBtn.disabled = false;
    lowBtn.disabled = false;
    rightBtn.disabled = false;
    startBtn.disabled = true;

    
    guessNum();
}


    