var input = require("fs").readFileSync("stdin", "utf8");
var [x1, y1, x2, y2] = input
  .split(/\r?\n/)
  .flatMap((item) => item.split(" "))
  .map((i) => +i);

function calcDistanceBetweenTwoPoints(x1, y1, x2, y2) {
  const total = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  return total.toFixed(4);
}

console.log(calcDistanceBetweenTwoPoints(x1, y1, x2, y2));