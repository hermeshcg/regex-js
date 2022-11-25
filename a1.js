// g - global (encontra todas as ocorrências)
// i - insensitive 
// (()()) grupos
// | ou

const { texto } = require('./base');

const regexp = /(maria|joão)(, hoje sua esposa)/i

//test verifica se tem e retorna boolean
const test = regexp.test(texto);
console.log('test regex',test)

//exec retorna mais infos
const found2= regexp.exec(texto);

if(found2){
  console.log('arr pos 0',found2[0])
  console.log('arr pos 1',found2[1])
  console.log('arr pos 2',found2[2])
}