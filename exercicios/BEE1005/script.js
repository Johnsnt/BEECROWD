var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(/\r?\n/).map((number) => parseFloat(number))

const A = lines[0]
const B = lines[1]
const MEDIA = (A*3.5 + B*7.5) / 11
console.log(`MEDIA = ${MEDIA.toFixed(5)}`)



