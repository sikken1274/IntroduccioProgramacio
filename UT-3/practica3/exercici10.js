const prompt = require('prompt-sync')();

let temperatura = Number(prompt("Introdueix la temperatura en graus Celsius:"));

if (temperatura < 10) {
    console.log("Fa fred");
} else {
    console.log("Temperatura moderada");
}