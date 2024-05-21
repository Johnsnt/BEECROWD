var input = require("fs").readFileSync("stdin.txt", "utf8");
var lines = input.split(/\r?\n/)
var [a, b] = input.split(/\r?\n/).map((item) => parseInt(item))

//No txt ver
var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(/\r?\n/)

console.log(typeof input)
// console.log(lines)
console.log(a, b)
console.log(typeof a,typeof b)