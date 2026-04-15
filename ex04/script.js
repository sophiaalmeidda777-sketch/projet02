let salario = Number (prompt("Digite o seu salário: R$"));
let parcela = Number (prompt("Digite o valor da parcela desejada: R$"));
if (parcela > salario * 0.3) {
    alert("Empréstimo Negado: Parcela muito alta");
} else {
    alert("Empréstimo Pré-aprovado");
}