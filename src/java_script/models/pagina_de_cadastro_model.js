class Model {
  constructor(valorinputemail, valorcep, valorSenha) {
    this.valor_input_email = valorinputemail; //$("#valor_email").val())
    this.valor_input_cep = valorcep;
    this.valor_input_senha = valorSenha;
    this._logradouro = "";
    this._bairro = "";
    this._localidade = "";
    this._uf = "";
    this.erro = "";
  }

  validaEmail() {
    try {
      if (
        this.valor_input_email.indexOf("@") > 0 &&
        this.valor_input_email.indexOf(".com") >
          this.valor_input_email.indexOf("@")
      ) {
        $("#erro_email").css("display", "none");
      } else {
        throw new Error("Login e Senha inválidos, tente novamente");
      }
    } catch (erro) {
      $("#erro_email").css("display", "flex");
    }
    return this.validaEmail;
  }

  preencheCep() {
    let urlviacep = `https://viacep.com.br/ws/${this.valor_input_cep}/json/`;
    const requisicao = new XMLHttpRequest();
    requisicao.open("GET", urlviacep, false);
    requisicao.onload = () => {
      if (requisicao.status == 200) {
        const response = JSON.parse(requisicao.response);
        console.log(response);
        this._atualizaDados(response);
      } else {
        $("#erro").css("display", "flex");
        $("#erro").text("Servidor fora do ar:complete os dados");
      }
    };
    requisicao.send();
  }
  _atualizaDados(objeto) {
    this._logradouro = objeto.logradouro;
    this._bairro = objeto.bairro;
    this._localidade = objeto.localidade;
    this._uf = objeto.uf;
    this.erro = objeto.erro;
  }
  getLogradouro() {
    return this._logradouro;
  }
  getBairro() {
    return this._bairro;
  }
  getLocalidade() {
    return this._localidade;
  }
  getUf() {
    return this._uf;
  }
  getErro() {
    console.log(this.erro);
    return this.erro;
  }

  validaSenha(senha) {
    if (senha.length > 6) {
      $("#erro_senha").css("display", "none");
    } else {
      $("#erro_senha").css("display", "flex");
    }
  }
}
