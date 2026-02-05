const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");
showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";

  arr.forEach((each) => {

  //   let fuel = "";
  //   let stops = "";
  //   let ownedBy = "";
  //   let isElectric = "";
  //   let isTandem = "";

  //   if (each.fuel) {
  //     fuel = each.fuel;
  //   }
  //   if (each.stops) {
  //     stops = each.stops;
  //   }
  //   if (each.ownedBy) {
  //     ownedBy = each.ownedBy;
  //   }
  //   if (each.isElectric === true) {
  //     isElectric = "Yes";
  //   }
  //   if (each.isTandem === true) {
  //     isTandem = "Yes";
  //   }
    
    tbodyPointer.innerHTML +=
`<tr>
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td> 
  <td>${each.stops}</td>
  <td>${each.ownedBy}</td>
  <td>${each.isElectric}</td>
  <td>${each.isTandem}</td>
</tr>`;
  });

}

// FILTRERINGER
// 1. en der viser alle el drevne fartøjer
const elFartøjer = vehicles.filter((each) => {
  return each.isElectric === true;
});
// console.log(elFartøjer)

// 2. en der viser alle fartøjer med mere end 2 sæder
const flereSæder = vehicles.filter((each) => {
  return each.passengers > 2;
});
// console.log(flereSæder)

// 3. alle fartøjer el-drevne fartøjer ejet af Jonas
const elJonas = vehicles.filter((each) => {
  return each.ownedBy === "Jonas";
});
// console.log(elJonas)

// 4. alle rugbrøds drevne fartøjer med plads til mere end en.
const rugbrødsFartøj = vehicles.filter((each) => {
  return each.fuel === "Rugbrød" && each.passengers > 1;
});
// console.log(rugbrødsFartøj)


// FILTRERINGSKNAPPER
// Flyt filtreringerne over på 4 knapper der viser de filtreringer der før var hardcodede + 1 knap til at vise alle (ufiltreret)
const allBtn = document.getElementById("all");
const elBtn = document.getElementById("el");
const seatsBtn = document.getElementById("seats");
const jonasBtn = document.getElementById("jonas");
const rugBtn = document.getElementById("rug");

function showFiltered() {
  showTheseVehicles(vehicles);
}

function showElectric() {
  const elFartøjer = vehicles.filter((each) => {
  return each.isElectric === true;
});
  showTheseVehicles(elFartøjer)
}

function showSeats() {
  const flereSæder = vehicles.filter((each) => {
  return each.passengers > 2;
});
  showTheseVehicles(flereSæder)
}

function showJonas() {
  const elJonas = vehicles.filter((each) => {
  return each.ownedBy === "Jonas";
});
  showTheseVehicles(elJonas)
}

function showRugbrødSeats() {
  const rugbrødsFartøj = vehicles.filter((each) => {
  return each.fuel === "Rugbrød" && each.passengers > 1;
});
  showTheseVehicles(rugbrødsFartøj)
}

allBtn.addEventListener("click", showFiltered);
elBtn.addEventListener("click", showElectric);
seatsBtn.addEventListener("click", showSeats);
jonasBtn.addEventListener("click", showJonas);
rugBtn.addEventListener("click", showRugbrødSeats);



