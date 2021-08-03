import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 76920645980);
const cliente2 = new Cliente("Alice", 12457890980);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(900);

const conta2 = new ContaCorrente(cliente2, 102);

let valor = 200;
contaCorrenteRicardo.transferir(200, conta2);

console.log(contaCorrenteRicardo)
console.log("Numero de Contas: " + ContaCorrente.numeroDeContas)