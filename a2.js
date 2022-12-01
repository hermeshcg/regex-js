const { texto } = require('./base');

const regexp = /João|Maria/i;

// (...) (...) (...) $1 $2 $3 -> sequencial

// console.log(texto)
// console.log(texto.match(regexp))
// console.log(texto.replace(/(João|Maria)/gi, '"$1"')) //$1 referencia o primeiro ()
console.log(texto.replace(/(João|Maria)/gi, (input) => {return input.toUpperCase()}))

//replace is very powerfull with regex