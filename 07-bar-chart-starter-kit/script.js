const list = document.querySelector("ul");


const columnArray = [];

setInterval(generateColumns, 1000)

function generateColumns() {

    const randomNum = Math.floor(Math.random() * 100) + 1;
    columnArray.push(randomNum)

    const li = document.createElement("li");
    li.style.setProperty("--height", randomNum);
    list.appendChild(li);

    // console.log("columnArray", columnArray);


    if (columnArray.length > 20) {
        columnArray.shift();
        list.removeChild(list.firstElementChild);
    }
    console.log(columnArray)
}

