class Model {
  constructor(valorinputemail, valorcep) {
    this.valor_input_email = valorinputemail; //$("#valor_email").val())
    this.valor_input_cep = valorcep;
    this._logradouro = "";
    this._bairro = "";
    this._localidade = "";
    this._uf = "";
  }
  validaEmail() {
    if (
      this.valor_input_email.indexOf("@") > 0 &&
      this.valor_input_email.indexOf(".com") >
        this.valor_input_email.indexOf("@")
    ) {
      alert("e-mail válido");
      // localStorage.setItem("e-mail", email); // nome , bruno
      // return true;
    } else {
      alert("e-mail inválido");
      // return false;
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
      }
    };
    requisicao.send();
  }
  _atualizaDados(objeto) {
    this._logradouro = objeto.logradouro;
    this._bairro = objeto.bairro;
    this._localidade = objeto.localidade;
    this._uf = objeto.uf;
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
}
// $("#cadastrar").click(function () {
//     const inputname = document.getElementById("valor_email");
//     // var inp = document.getElementById("entrar");

//     var email = inputname.value;

//     if (email.indexOf("@") > 0 && email.indexOf(".com") > email.indexOf("@")) {
//       alert("e-mail válido");
//       localStorage.setItem("e-mail", email); // nome , bruno
//       // return true;
//     } else {
//       alert("e-mail inválido");
//       // return false;
//     }

// }

// var inputname = document.getElementById("inputuser");
// var inp = document.getElementById("entrar");
// function valida() {
//   var email = inputname.value;

//   if (email.indexOf("@") > 0 && email.indexOf(".com") > email.indexOf("@")) {
//     localStorage.setItem("e-mail", email); // nome , bruno
//     // return true;
//   } else {
//     // return false;
//   }
// }

// function escreve(parametro) {
//   if (parametro) {
//     alert("email valido");
//   } else {
//     alert("email invalido");
//   }
// }

// console.log(escreve(valida));

// function log() {
//   var entra = localStorage.getItem("e-mail");
//   var login = inp.value;

//   if (entra === login) {
//     alert("logou");
//     // nome , bruno
//     // return true;
//   } else {
//     alert("ferro");

//     // return false;
//   }
// }
