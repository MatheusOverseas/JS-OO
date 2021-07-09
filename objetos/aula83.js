class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  aumentarVolume() {
    this.volume += 2;
  }

  diminuirVolume() {
    this.volume -= 2;
  }

  static trocaPilha(pilha) {
    this.pilha = pilha;
  }
}

const c1 = new ControleRemoto("Tv LG");
c1.aumentarVolume();
console.log(c1);

c1.trocaPilha("duracell");
console.log(c1);
