let valorCompra = parseFloat(prompt("Digite o valor da compra:"));
let regiao = parseInt(prompt("Digite a região (1-Sul, 2-Sudeste, 3-Outras):"));
if (isNaN(valorCompra) || valorCompra < 0) {
  alert("Valor da compra inválido!");
} else if (![1, 2, 3].includes(regiao)) {
  alert("Região inválida! Use 1, 2 ou 3.");
} else {
  let frete;
if (valorCompra > 250) {
  frete = 0;
} else {
if (regiao === 1) {
  frete = 20;
} else if (regiao === 2) {
  frete = 10;
} else {
  frete = 30;
}
}
let total = valorCompra + frete;
  alert(
"Valor da compra: R$ " + valorCompra.toFixed(2) + "\n" +
"Frete: R$ " + frete.toFixed(2) + "\n" +
"Total a pagar: R$ " + total.toFixed(2)
);
}
