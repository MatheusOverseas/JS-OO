class ValidaCpf {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      writable: false,
      configurable: false,
      enumerable: true,
      value: cpfEnviado.replace(/\D+/g, ""),
    });
  }

  geraNovoCpf() {
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = ValidaCpf.geraDigito(cpfParcial);
    const digito2 = ValidaCpf.geraDigito(cpfParcial + digito1);
    this.novoCPF = cpfParcial + digito1 + digito2;
  }

  static geraDigito(cpfParcial) {
    let total = 0;
    let reverso = cpfParcial.length + 1;

    for (let StringNumerica of cpfParcial) {
      total += reverso * Number(StringNumerica);
      reverso--;
    }
    const digito = 11 - (total % 11);
    return digito <= 9 ? digito : "0";
  }

  isSequencia() {
    return (
      this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo
    );
  }
  valida() {
    if (!this.cpfLimpo) return false;
    if (typeof this.cpfLimpo !== "string") return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;
    this.geraNovoCpf();

    return this.novoCPF === this.cpfLimpo;
  }
}

let validaCpf = new ValidaCpf("404.882.778-25");
// validaCpf = new ValidaCpf("999.999.99-99");

if (validaCpf.valida()) {
  console.log("CPF Válido");
} else {
  console.log("CPF Inválido");
}
