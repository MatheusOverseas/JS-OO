function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: true,
    get: function () {
      return estoque;
    },
    set: function (valor) {
      if (typeof valor !== "number") {
        throw new TypeError("Mensagem");
      }
      this.estoque = valor;
    },
  });
}

const p1 = new Produto("Camiseta", 20.9, 90);
p1.estoque = "MAahsahis";
console.log(p1.estoque);
