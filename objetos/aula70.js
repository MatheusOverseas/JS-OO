const pessoa1 = new Object();
pessoa1.nome = "Matheus";
pessoa1.sobrenome = "Cunha";
pessoa1.idade = 18;

pessoa1.falarNome = function () {
  console.log(`${this.nome}, está falando seu nome`);
};

pessoa1.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade - 1;
};

for (let chave in pessoa1) {
  console.log(pessoa1[chave]);
}
