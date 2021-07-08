const produto = { nome: "caneca", preco: 1.8 };
const caneca = Object.assign({}, produto, { material: "Porcelana" });

console.log(caneca);
console.log(produto);
