// GÆT ET TAL
// Lav et program der generer et tilfældigt tal mellem 0 og 100.
// Brugeren skal herefter gætte tallet ved at taste det ind i et inputfelt og trykke på en knap.
// Programmet skal herefter give feedback om tallet er for højt, for lavt eller om tallet er gættet.
// Når tallet bliver gættet skal der være en fejringsgrafik/animation

let max = 100;
let secret = Math.floor(Math.random() * 101);

document.querySelector("button").addEventListener("click", () => {
    let guess = Number(document.getElementById("guessInput").value);
    let feedback = document.getElementById("feedback");

    if (guess < secret) {
        feedback.textContent = "For lavt! Prøv igen.";
    } else if (guess > secret) {
        feedback.textContent = "For højt! Prøv igen.";
    } else {
        feedback.textContent = "Tillykke! Du har gættet rigtigt!";
    }
});


// TILFÆLDIGT TAL

// console.log("Random", Math.floor(Math.random() * 101));

// document.querySelectorAll("button").forEach((btn) => 
//     btn.addEventListener("click", () => {
//         console.log("Random", Math.floor(Math.random() * 101));
//         }), 
//     );


// DATA CONVERSION

// const n1 = 1;
// const n2 = 2;

// const s1 = "1";
// const s2 = "2";

// console.log("Number + Number =", n1 + n2);

// TEST FALSY OG TRUTHY

const value = true;

if (value) {
    console.log("Value is truthy");
} else {
    console.log("Value is falsy");
}