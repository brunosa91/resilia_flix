class Controller {
  constructor(valorinputemail) {
    this.valor_input_email = valorinputemail; //$("#valor_email").val())
  }
  validandoEmail() {
    let model = new Model(this.valor_input_email);
    let view = new View();
    view.mostraEmail(model.validaEmail());
  }
}
