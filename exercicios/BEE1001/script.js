var input = require('fs').readFileSync('stdin', 'utf8');
var [A, B] = input.split(/\r?\n/).map((item) => parseInt(item));


let X = A + B;

console.log(`X = ${X}`)

