const prompt = require('prompt-sync')();

let num1 = Number(prompt("Introdueix el primer nombre:"));
let num2 = Number(prompt("Introdueix el segon nombre:"));
let operacio = prompt("Introdueix l'operació (+, -, * o /):");

// Avaluem l'operació triada
if (operacio === "+") {
    console.log("Resultat:", num1 + num2);
} else if (operacio === "-") {
    console.log("Resultat:", num1 - num2);
} else if (operacio === "*") {
    console.log("Resultat:", num1 * num2);
} else if (operacio === "/") {
    if (num2 === 0) {
        console.log("No es pot dividir entre zero");
    } else {
        console.log("Resultat:", num1 / num2);
    }
} else {
    console.log("Operació no vàlida");
}