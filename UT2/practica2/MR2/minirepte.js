const prompt = require('prompt-sync')();
let bytes = Number (prompt('Introduce el número de bytes: '));

let kilobytes = bytes / 1024;
let megabytes = kilobytes / 1024;
let gigabytes = megabytes / 1024;

let nom = "Convertim Bytes a -> KM, MG, GB";
console.log(nom);

console.log(`Bytes: ${bytes} `);
console.log(`Kilobytes: ${Math.round(kilobytes * 100) / 100} KB`);
console.log(`Megabytes: ${Math.round(megabytes*100) / 100} MB`);
console.log(`Gigabytes: ${Math.round(gigabytes * 100) / 100} GB`);    

let nom2 = "Convertim GB a -> Bytes";
console.log(nom2);

let number2 = Number(prompt(`Insereix la mida en GB: `));
let gigabytes2 = (number2);
console.log(`Mida en bytes: ${gigabytes2 * 1024 * 1024 * 1024} Bytes`);

let nom3 = "Calculem el Temps de descàrrega";
console.log(nom3);

let number3 = Number(prompt(`Insereix la Mida del fitxer a descaarregar (GB): `));
let number4 = Number(prompt(`Quina es la velocitat de descàrrega en Mbps: `));

let midaFitxer = parseFloat(number3);
let velocitatDescarga = parseFloat(number4);

let tempsDescarga = midaFitxer / velocitatDescarga;

console.log(`Temps de descàrrega: ${tempsDescarga} segons`);
