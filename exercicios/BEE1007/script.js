var input = require("fs").readFileSync("stdin", "utf8");
var [a, b, c, d] = input.split(/\r?\n/)

const a1 = a * b
const b1 = c * d
const dif = a1 - b1
console.log(`DIFERENCA = ${dif}`)