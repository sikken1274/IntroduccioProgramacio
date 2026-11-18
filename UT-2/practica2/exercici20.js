const prompt = require('prompt-sync')();
let a = prompt (`Escirbe cualquier cosa`)
console.log(`tu texto es ${a}`)
console.log(`El tipo de dato es ${typeof a}`)
console.log(`${Boolean(a)}`)

// Porque la variable boolean detecta si hay algo o no si no seria fols pero en este cassp es true porque hay informacion
// Es como el binario