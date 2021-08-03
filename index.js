import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./contaPoupanca.js";

const cliente1 = new Cliente("Ricardo", 76920645980);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(900);

const contaPoupanca = new ContaPoupanca(100, cliente1, 1001);

console.log(contaPoupanca);
console.log("Numero de Contas: " + ContaCorrente.numeroDeContas)