const bc = [
    { name: "Hvidevarer", link: "/hvidevarer" },
    { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
    { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

const krummer = document.querySelector("#kategori")
const btn = document.querySelector("#generateBtn")


function genBreadcrumbs() {
let htmlStr = "";
bc.forEach((kat) => {
    htmlStr +=`<a href=${kat.link}>${kat.name}</a>`
    // console.log(kat.name)
    // console.log(kat.link)
    // console.log("**********")
}); 
    krummer.innerHTML = htmlStr;
}

btn.addEventListener("click", genBreadcrumbs)
// console.log(genBreadcrumbs)
