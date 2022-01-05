class Model {
  constructor(valorinputemail) {
    this.valor_input_email = valorinputemail; //$("#valor_email").val())
  }

  validaEmail() {
    if (
      this.valor_input_email.indexOf("@") > 0 &&
      this.valor_input_email.indexOf(".com") >
        this.valor_input_email.indexOf("@")
    ) {
      return "email certo";
    } else {
      return "email incorreto";
    }
  }
}
