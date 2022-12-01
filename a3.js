const { texto, arquivos } = require('./base');

// * (opcionais) 0 ou n {0,}
// + (obrigatorio) 1 ou n {1,}
// ? (opcionais) 0 ou 1 {0,1}
// \ scape char

// const regex = /Jo+ão+/gi
// console.log(texto.match(regex))

const regex2 = /\.jpe?g/gi

for (const arquivo of arquivos){
  console.log(arquivo, arquivo.match(regex2))
}



