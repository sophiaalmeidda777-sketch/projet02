let valor = Number(prompt("Valor do carro:"));
let opcao = prompt("Pagamento: 1-Pix | 2-Cartão | 3-Financiamento");
let taxa = 0;
let maxParcelas = 1;
// Definindo taxa e limite
if (opcao == "1") {
  taxa = -0.15; // desconto
} else if (opcao == "2") {
  taxa = 0.05;
  maxParcelas = 24;
} else if (opcao == "3") {
  taxa = 0.20;
  maxParcelas = 48;
}
// Calcula valor final
let valorFinal = valor * (1 + taxa);
// Se tiver parcelamento
if (maxParcelas > 1) {
  let parcelas = Number(prompt(`Quantas parcelas? (até ${maxParcelas})`));
  let valorParcela = valorFinal / parcelas;
  alert(`Total: R$ ${valorFinal.toFixed(2)}
Parcelas: ${parcelas}x de R$ ${valorParcela.toFixed(2)}`);
} else {
  alert(`Total à vista: R$ ${valorFinal.toFixed(2)}`);
}