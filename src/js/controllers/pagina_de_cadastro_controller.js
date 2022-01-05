class Controller {
  constructor(valorinputemail, valorcep, valorSenha, valorConfirmaSenha) {
    this.valor_input_email = valorinputemail;
    this.valor_input_cep = valorcep;
    this.valor_input_senha = valorSenha;
    this.valor_input_confirma_senha = valorConfirmaSenha;
  }
  validandoEmail() {
    let model = new Model(this.valor_input_email);
    let view = new View();
    view.mostraEmail(model.validaEmail());
  }
  validandoSenha() {
    let model = new Model(
      this.valor_input_email,
      this.valor_input_cep,
      this.valor_input_senha
    );
    let view = new View();
    view.mostraSenha(model.validaSenha());
  }
  validando_confirma_senha() {
    let model = new Model(
      this.valor_input_email,
      this.valor_input_cep,
      this.valor_input_senha,
      this.valor_input_confirma_senha
    );
    let view = new View();
    view.mostraConfirmaSenha(model.confirmaSenha());
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
}
