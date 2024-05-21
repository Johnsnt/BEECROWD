var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(/\r?\n/).map((item) => (parseFloat(item)))

//area = n * raio^2   |
// n = 3.14159

let raio = lines[0]
let n = 3.14159
let area = n * Math.pow(raio, 2)

console.log(`A=${area.toFixed(4)}`)




