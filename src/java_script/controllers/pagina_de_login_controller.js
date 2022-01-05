class Controller {
  constructor(valorinputemail, valorSenha) {
    this.valor_input_email = valorinputemail; //$("#valor_email").val())
    this.valor_input_senha = valorSenha;
  }
  validandoEmail() {
    let model = new Model(this.valor_input_email, this.valor_input_senha);
    let view = new View();
    view.mostraEmailSenha(model.validaEmail());
  }
}
