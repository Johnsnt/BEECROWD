var input = require("fs").readFileSync("stdin", "utf8");
var [dist] = input
  .split(/\r?\n/)
  .flatMap((item) => item.split(" "))
  .map((i) => +i);

function calcCarDistance(distance) {
  const carX = 60;
  const carY = 90;

  const totalDistance = (distance / (carY - carX)) * 60;
  return `${totalDistance} minutos`;
}

console.log(calcCarDistance(dist));

//t = d / y - x * 60
