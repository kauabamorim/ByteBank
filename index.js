class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    // #saldo = 0; Classe Privada
    _saldo = 0;

    sacar(valor) {
        if(this._saldo >= valor){
            this._saldo -= valor;
        }
    }
    
    depositar(valor) {
        if(valor > 0) {
            this._saldo += valor;
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
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(600);
contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo);