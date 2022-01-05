class Model {
  constructor(valorinputemail, valorSenha) {
    this.valor_input_email = valorinputemail; //$("#valor_email").val())
    this.valor_input_senha = valorSenha;
  }

  validaEmail() {
    if (
      this.valor_input_email.indexOf("@") > 0 &&
      this.valor_input_email.indexOf(".com") >
        this.valor_input_email.indexOf("@") &&
      this.valor_input_senha.length > 6
    ) {
      return "email e senha válidos";
    } else {
      return "email e senha inválidos";
    }
  }
}
