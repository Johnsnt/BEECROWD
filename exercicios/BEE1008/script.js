var input = require("fs").readFileSync("stdin", "utf8");
var [A, B, C] = input.split(/\r?\n/).map(item => Number(item))



console.log(`NUMBER = ${A}`)
console.log(`SALARY = U$ ${(B * C).toFixed(2)}`)


//numero
//horas * valor
//valor hora fluoante
