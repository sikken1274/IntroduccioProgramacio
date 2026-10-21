const prompt = require('prompt-sync')();
let nom = prompt (`Como te llamas`)
let edat = prompt (`Cuantos años tienes`)
console.log(`Hola ${nom}, tienes ${edat} años`)
console.log(`El año que viene tendras ${Number(edat)+1} años`)
