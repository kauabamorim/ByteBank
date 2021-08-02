import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 76920645980;

cliente2.nome = "Alice";
cliente2.cpf = 12457890980;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(600);

const valorSacado = contaCorrenteRicardo.sacar(50);
console.log("Valor Sacado: " + valorSacado);

console.log(contaCorrenteRicardo);