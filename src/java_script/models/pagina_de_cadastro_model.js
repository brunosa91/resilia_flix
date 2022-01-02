class Model {
  constructor(valorinputemail, valorcep, valorSenha, valorConfirmaSenha) {
    this.valor_input_email = valorinputemail; //$("#valor_email").val())
    this.valor_input_cep = valorcep;
    this.valor_input_senha = valorSenha;
    this.valor_input_confirma_senha = valorConfirmaSenha;
    this._logradouro = "";
    this._bairro = "";
    this._localidade = "";
    this._uf = "";
    this.erro = "";
  }

  validaEmail() {
    if (
      this.valor_input_email.indexOf("@") > 0 &&
      this.valor_input_email.indexOf(".com") >
        this.valor_input_email.indexOf("@")
    ) {
      return "e-mail válido";
    } else {
      return "e-mail inválido";
    }
  }

  validaSenha() {
    if (this.valor_input_senha.length > 6) {
      return "senha válida";
    } else {
      return "senha inválida";
    }
  }

  confirmaSenha() {
    if (this.valor_input_confirma_senha == this.valor_input_senha) {
      return "senha igual";
    } else {
      return "senha diferente";
    }
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
}
