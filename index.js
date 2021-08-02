import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 76920645980;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 12457890980;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.depositar(900);

const conta2 = new ContaCorrente();
conta2.cliente = cliente1;
conta2.agencia = 102;

let valor = 200;
contaCorrenteRicardo.transferir(200, conta2);

console.log(conta2.saldo);