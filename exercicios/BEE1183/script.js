var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('/\r?\n/');
var tipo = lines.shift(lines[0])
var numerosMatriz = lines.map((i) => +i);
let matriz = new Array(12).fill("null").map(() => new Array(12));



let c = 0;
for (let i = 0; i < 12; i++) {
  for (let x = 0; x < 12; x++) {
    matriz[i][x] = numerosMatriz[c];
    c++;
  }
}

if (tipo === "S") {
  let soma = 0;
  for (let i = 0; i < 12; i++) {
    for (let x = i + 1; x < 12; x++) {
      soma += matriz[i][x];
    }
  }
  console.log(soma)
}

if (tipo === "M") {
  let soma = 0;
  let media = 0;
  for (let i = 0; i < 12; i++) {
    for (let x = i + 1; x < 12; x++) {
      soma += matriz[i][x];
						media++
    }
  }
		let total = soma / media
  console.log((total).toFixed(1));
}