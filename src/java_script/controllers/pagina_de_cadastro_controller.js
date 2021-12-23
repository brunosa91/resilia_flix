class Controller {
  constructor(valorinputemail) {
    this.valor_input_email = valorinputemail;
  }
  validandoEmail() {
    let model = new Model(this.valor_input_email);
    console.log(model.validaEmail());
  }
}
