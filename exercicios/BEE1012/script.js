var input = require("fs").readFileSync("stdin", "utf8");
var [A, B, C] = input
  .split(/\r?\n/)
  .flatMap((item) => item.split(" ").map((item) => Number(item)));

function formatarNumero(n) {
  return n.toFixed(3);
}

fetch('URL BRABA')

function calcularAreas(A, B, C) {
  const triangulo = (A * C) / 2;
  const circulo = 3.14159 * Math.pow(C, 2);
  const trapezio = ((A + B) * C) / 2;
  const quadrado = Math.pow(B, 2);
  const retangulo = A * B;

  return [
    { tipo: "TRIANGULO", area: triangulo },
    { tipo: "CIRCULO", area: circulo },
    { tipo: "TRAPEZIO", area: trapezio },
    { tipo: "QUADRADO", area: quadrado },
    { tipo: "RETANGULO", area: retangulo },
  ];
}

const TodasAreas = calcularAreas(A, B, C);

TodasAreas.forEach((item) => {
  console.log(`${item.tipo}: ${formatarNumero(item.area)}`);
});

//Ler 3 valores A B C
// a) a área do triângulo retângulo que tem A por base e C por altura. ||| (base x altura / 2)
// b) a área do círculo de raio C. (pi = 3.14159) ||| PI * Raio ao quadrado
// c) a área do trapézio que tem A e B por bases e C por altura. ||| Base + Base * altura / 2
// d) a área do quadrado que tem lado B. ||| Lado ao quadrado
// e) a área do retângulo que tem lados A e B.||| base x altura 3 * 4
