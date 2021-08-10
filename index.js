import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

const cliente1 = new Cliente("Ricardo", 76920645980);

const contaCorrenteRicardo = new Conta(0, cliente1, 1001);
contaCorrenteRicardo.depositar(900);

const contaPoupanca = new Conta(100, cliente1, 1001);

console.log(contaPoupanca);