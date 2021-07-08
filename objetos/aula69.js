function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

const p1 = new Pessoa("Matheus", "Cunha");
const p2 = new Pessoa("Luiz", "Otávio");

console.log(typeof p1);
