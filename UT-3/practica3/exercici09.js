const prompt = require('prompt-sync')();
let edat = Number(prompt("Introdueix la teva edat:"));


if (edat < 18) {
    console.log("Ets menor d'edat");
} else {
    console.log("Ets major d'edat");
}