const body = document.querySelector("body");
const background = []

window.addEventListener("mousemove", changeColor)

function changeColor(mouse) {
    const procent = (mouse.clientX / window.innerWidth) * 100;
    body.style.setProperty("--lightness", `${procent}%`)
}

// body.style.backgroundColor = `hsl(33, 100%, ${procent}`;


// "mousemove"
// window.innerWidth
// style.setProperty
// clientX
// procentregning: delen/detHele * 100
