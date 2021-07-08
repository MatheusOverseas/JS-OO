function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function () {
  return this.nome + " " + this, this.sobrenome;
};

const pessoa1 = new Pessoa("Matheus", "Cunha");
const data = new Date();

console.log(pessoa1.nomeCompleto());
