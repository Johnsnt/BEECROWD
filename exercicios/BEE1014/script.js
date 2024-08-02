var input = require("fs").readFileSync("stdin", "utf8");
var [dist, fuel] = input.split(/\r?\n/).flatMap(item => item.split(' ')).map(i => +i)

function calcAverageConsumption(distance, fuel) {
	const total = (distance/fuel).toFixed(3);
	return total;
}

console.log(`${calcAverageConsumption(dist, fuel)} km/l`);
