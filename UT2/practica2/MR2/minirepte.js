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