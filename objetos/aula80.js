class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  falar() {
    console.log(`${this.nome} está falando`);
  }
}

Pessoa2.prototype.falar = function () {};

const p1 = new Pessoa("Matheus", "Cunha");
