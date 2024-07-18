var input = require("fs").readFileSync("stdin", "utf8");
var [raio] = input.split(/\r?\n/).map((i) => +i);

function calcularVolume(r) {
  const raioCubico = Math.pow(r, 3);
  const pi = 3.14159;
  const VolumeEsfera = (4 / 3.0) * pi * raioCubico;
  return VolumeEsfera;
}

console.log(`VOLUME = ${calcularVolume(raio).toFixed(3)}`);
