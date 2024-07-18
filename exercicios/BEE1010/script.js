var input = require("fs").readFileSync("stdin", "utf8");
var lines = input
  .split(/\r?\n/)
  .flatMap((item) => item.split(" ").map((item) => +item))
  .filter((_, index) => index != 0 && index != 3);

const [qtdpeca1, valor, qtdpeca2, valor2] = lines;
function calcularValorFinal(p1, v1, p2, v2) {
  const valorPeca1 = p1 * v1;
  const valorPeca2 = p2 * v2;
  return valorPeca1 + valorPeca2;
}
const total = calcularValorFinal(qtdpeca1, valor, qtdpeca2, valor2).toFixed(2);

console.log(`VALOR A PAGAR: R$ ${total}`);

//flatMap: É usado para mapear cada elemento do array e depois achatar o resultado em um único array.
