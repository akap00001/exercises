"use strict";

getJson();

setInterval(getJson, 1000);

async function getJson() {
    const response = await fetch("https://kea-alt-del.dk/kata-distortion/");
    const data = await response.json();
    console.log(data.inQueue);

    showData(data.inQueue)
}