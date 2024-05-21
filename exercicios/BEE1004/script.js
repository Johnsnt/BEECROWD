var input = require("fs").readFileSync("stdin", "utf8");
var [x, y] = input.split(/\r?\n/).map((number) => parseInt(number))

let PROD = x * y  

console.log(`PROD = ${PROD}`)