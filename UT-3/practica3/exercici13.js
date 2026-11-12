const prompt = require('prompt-sync')();

let opcio = Number(prompt("Introdueix un número de l al 4 per saber la talla:"));

if (opcio === 1) {
    console.log("Talla XS");
} else if (opcio === 2) {
    console.log("Talla S");
} else if (opcio === 3) {
    console.log("Talla M");
} else if (opcio === 4) {
    console.log("Talla L");
} else {
    console.log("Talla no disponible");
}