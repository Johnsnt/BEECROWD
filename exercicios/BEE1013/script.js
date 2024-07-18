var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(/\r?\n/).flatMap(item => item.split(' ')).map(i => +i)

const maior = Math.max(...lines)
console.log(`${maior} eh o maior`)