"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

const locale = "da";
let daArray = texts[locale].texts;
// console.log(daArray)

daArray.forEach((each) => {
  const showText = document.querySelector(each.location);
  if(showText) {
    showText.textContent = each.text;
  }
})

const language = document.querySelector("#dropdown")

switchLanguage("da");

language.addEventListener("change", () => {
  switchLanguage(language.value);
});

function switchLanguage(locale) {
  texts[locale].texts.forEach((each) => {
    const showText = document.querySelector(each.location);
    if(showText) {
      showText.textContent = each.text;
    }
  });
}


// const global = "de";
// let deArray = texts[global].texts;
// console.log(deArray)

// deArray.forEach((each) => {
//   const location = document.querySelector(each.location);
//   if(location) {
//     location.textContent = each.text;
//   }
// })
 