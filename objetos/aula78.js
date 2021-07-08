//Superclasse
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacarValor = function (valor) {
  if (this.saldo < valor) {
    console.log(`Saldo insuficiente: ${this.saldo}`);
    this.verSaldo();
    console.log(" ");
    return;
  }
  this.saldo -= valor;
  console.log("Você sacou: " + valor);
  this.verSaldo();
  console.log(" ");
};

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  console.log("Você Depositou: " + valor);
  this.verSaldo();
  console.log(" ");
};

Conta.prototype.verSaldo = function () {
  console.log(
    `Ag/Conta: ${this.agencia}/${this.conta} | ` +
      `Saldo: R$${this.saldo.toFixed(2)}`
  );
};

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacarValor = function (valor) {
  if (this.saldo + this.limite < valor) {
    console.log(`Saldo insuficiente: ${this.saldo}`);
    this.verSaldo();
    return;
  }
  this.saldo -= valor;
  console.log("Você sacou: " + valor);
  this.verSaldo();
};

function CP(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

// const cc = new ContaCorrente(11, 22, 0, 100);
// cc.depositar(10);
// cc.sacarValor(110);
// cc.sacarValor(1);

const cp = new CP(12, 33, 0);
cp.depositar(10);
cp.sacarValor(110);
cp.sacarValor(1);
