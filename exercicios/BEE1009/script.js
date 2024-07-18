var input = require("fs").readFileSync("stdin", "utf8");
var lines = input
  .split(/\r?\n/)
  .splice(1, 2)
  .map((item) => +item);


const [salario, commisao] = lines;
const valorTotal = ((commisao * 15) / 100 + salario).toFixed(2);
console.log(`TOTAL = R$ ${valorTotal}`);





//salario fixo
//total de vendas
//15% com base no valor da venda  + salario fixo
