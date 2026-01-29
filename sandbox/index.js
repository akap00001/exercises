// //ØVELSE 1
// function sayHello(firstName, lastName) {
//     console.log(`Hello ${firstName} ${lastName}!`);
// }

// sayHello("Akua", "Appiah");

// // let myName = sayHello("Akua");
// // console.log(myName);

// // firstName = "Aku";

// //   ØVERLSE 2
// function presentPet (firstName, animalType, animalName) {
//     console.log(`My name is ${firstName}, I have a ${animalType} called ${animalName}.`);
// }

// presentPet("Akua", "cat","miso")


// //MOMS BREGNER
"use strict";

// let beloeb = 100;
// let moms = 25;

function beregnMoms (beloeb, moms = 25) {
    console.log("beløbet med momsen lagt til", beloeb * (moms / 100) + beloeb);
}

beregnMoms (200 , 25);