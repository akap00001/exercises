// console.log("Welcome to Rock, Paper, Scissors!");

"use strict";

const rock_btn = document.querySelector(".rock");
const paper_btn = document.querySelector(".paper");
const scissors_btn = document.querySelector(".scissors");


let userChoice;
let computerChoice;

document.addEventListener("DOMContentLoaded", init)

function init() {
    // console.log("hej")
    rock_btn.addEventListener("click", rockClick)
    paper_btn.addEventListener("click", paperClick)
    scissors_btn.addEventListener("click", scissorsClick)
    player1.addEventListener("animationend", animationEnd)
}

function rockClick() {
    // console.log("ROCK!");
    userChoice = "rock";
    computerChooses();
}
function paperClick() {
    // console.log("PAPER!");
    userChoice = "paper";
    computerChooses();
}
function scissorsClick() {
    // console.log("SCISSORS!");
    userChoice = "scissors";
    computerChooses();
}

function computerChooses() {
// console.log("COMPUTERCHOICE userChoice", userChoice)
    computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        computerChoice = "rock"}
        else if (computerChoice === 1) {
            computerChoice = "paper"
        } else {
            computerChoice = "scissors"
        }

    handShakeStart();
}

function handShakeStart() {
    // console.log("bla", userChoice)
    const player1 = document.querySelector("#player1");
    const player2 = document.querySelector("#player2");

    player1.classList.add("shake");
    player2.classList.add("shake");

    // setTimeout(() => {
    //     player1.classList.remove("shake");
    //     player2.classList.remove("shake");
        
    //     player1.style.backgroundImage = `url(hand_${userChoice}.png)`;
    //     player2.style.backgroundImage = `url(hand_${computerChoice}.png)`;

    //     determineWinner();
    // }, 2300);
}

function animationEnd() {
    player1.classList.remove("shake");
    player2.classList.remove("shake");
    player1.classList.remove("rock", "paper", "scissors")
    player2.classList.remove("rock", "paper", "scissors")
    player1.classList.add(userChoice)
    player2.classList.add(computerChoice)

    if (userChoice === computerChoice){
        console.log("draw!")
        draw.classList.add("hidden")
        setTimeout(function (){
            draw.classList.add("hidden")
        }, 2300)
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ){
        console.log("player wins!")
        win.classList.remove("hidden")
        setTimeout(function(){
            win.classList.add("hidden")
        }, 2300)
    } else {
        console.log("you lose!")
        lose.classList.remove("hidden")
        setTimeout(function(){
            lose.classList.add("hidden")
        }, 2300)
    }
}

// const win = document.getElementById("win");
// const lose = document.getElementById("lose");
// const draw = document.getElementById("draw");

// win.classList.add("hidden");
// lose.classList.add("hidden");

// function determineWinner() {
//     // console.log("USER:", userChoice, "COMPUTER:", computerChoice);
//     if (userChoice === computerChoice) {
//         draw.classList.remove("hidden"); }
//         else if (
//             (userCoice === "rock" && computerChoice === "scissors") ||
//             (userChoice === "paper" && computerChoice === "rock") ||
//             (userChoice === "scissors" && computerChoice === "paper")
//         ) {
//             win.classList.remove("hidden"); }
//         else {
//             lose.classList.remove("hidden"); 
//         }
//     }

