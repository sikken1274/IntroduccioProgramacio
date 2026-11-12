const prompt = require('prompt-sync')();
let edat = Number(prompt("Introdueix la teva edat:"));
let teCarnet = prompt("Tens carnet d'estudiant? (si / no):").toLowerCase();

if (edat < 18 || edat > 65 || teCarnet === "si") {
    console.log("Tens descompte");
} else {
    console.log("Preu normal");
}