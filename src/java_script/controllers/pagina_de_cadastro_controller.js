class Controller {
  constructor(valorinputemail, valorcep, valorSenha) {
    this.valor_input_email = valorinputemail; //$("#valor_email").val())
    this.valor_input_cep = valorcep;
    this.valor_input_senha = valorSenha;
  }
  validandoEmail() {
    let model = new Model(this.valor_input_email);
    console.log(model.validaEmail());
  }

  cep_preenchido() {
    let modelcep = new Model(this.valor_input_email, this.valor_input_cep);
    modelcep.preencheCep();
    let viewCep = new View();
    if (modelcep.getErro() == true) {
      viewCep.mostraErro();
    } else {
      viewCep.mostraCep(modelcep);
    }
  }

  validandoSenha() {
    let model = new Model(this.valor_input_senha);
    model.validaSenha(this.valor_input_senha);
  }
}
