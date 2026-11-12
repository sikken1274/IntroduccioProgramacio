
let hora = 9;
if (hora < 10 || hora > 18) {
    console.log("Cas A: Accés denegat");
}

hora = 15;
let capDeSetmana = false;
if (hora < 10 || hora > 18 || capDeSetmana) {
    console.log("Cas B: Accés denegat");
}

hora = 17;
capDeSetmana = true;
if (hora < 10 && hora > 18 && capDeSetmana) {
    console.log("Cas C: Accés denegat");
}
