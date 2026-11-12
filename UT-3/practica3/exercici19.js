const prompt = require('prompt-sync')();

let numero = Number(prompt("Introdueix un número entre 1 i 100:"));


if (numero >= 1 && numero <= 100) {
    console.log("Número correcte");
} else {
    console.log("Número fora del rang");
}