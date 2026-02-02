"use strict";  

// console.log("Lommeregner JS er connected");


document.getElementById("beregn").addEventListener("click", beregn);

function beregn() {
    const regneArt = document.querySelector("#regneart").value;
    let tal1 = Number(document.querySelector("#tal1").value);
    let tal2 = Number(document.querySelector("#tal2").value);

let result;

if (regneArt === "+") {
    result = tal1 + tal2;
} else if (regneArt === "-") {
    result = tal1 - tal2;
} else if (regneArt === "*") {
    result = tal1 * tal2;
} else {
    result = tal1 / tal2;
}

document.getElementById("resultat").value = result;

// console.log("Resultatet er: " + result);

}

// EKSTRA OPGAVE
// Vis resultatet med 2 decimaler
// Vis en fejl, hvis et inputfelt er tomt eller der bliver dividerer med 0