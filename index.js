class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor) {
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
    }
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 76920645980;

cliente2.nome = "Alice";
cliente2.cpf = 12457890980;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.saldo = 100; 
console.log(contaCorrenteRicardo.saldo);

contaCorrenteRicardo.sacar(50);
console.log(contaCorrenteRicardo.saldo);


console.log(cliente1);
console.log(cliente2);