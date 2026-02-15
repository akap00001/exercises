"use strict";

console.log("Dette theme er gemt: ", localStorage.getItem("theme"));

document.querySelector("#dropdown").addEventListener("change", theChange)
const themeLs = localStorage.getItem("theme");
if (themeLs) {
    setTheme(themeLs);
    document.querySelector("#dropdown").value = themeLs;
} else {
    setTheme("light");
    document.querySelector("#dropdown").value = "light";
}

function theChange(evt) {
    console.log("change", evt.target.value);
    setTheme(evt.target.value);
}

function setTheme(theme) {
    localStorage.setItem("theme", theme);
    document.querySelector("body").dataset.theme = theme;
}