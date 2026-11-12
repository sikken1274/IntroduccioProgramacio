const prompt = require('prompt-sync')();

let numeroUsuari = Number(prompt("Endevina el numero secret (escriu un número):"));


if (numeroUsuari === 7) {
    console.log("Has endevinat el número!");
} else {
    console.log("No has encertat. Torna-ho a provar!");
}