class Model {
  constructor(valorinputemail, valorSenha) {
    this.valor_input_email = valorinputemail; //$("#valor_email").val())
    this.valor_input_senha = valorSenha;
  }

  validaEmail() {
    try {
      if (
        this.valor_input_email.indexOf("@") > 0 &&
        this.valor_input_email.indexOf(".com") >
          this.valor_input_email.indexOf("@") &&
        this.valor_input_senha.length > 6
      ) {
        $("#erro_email").css("display", "none");

        // alert("deu certo");
        window.location.href = "pagina_de_cadastro.html";
      } else {
        throw new Error("Login e Senha inválidos, tente novamente");
      }
    } catch (erro) {
      $("#erro_email").css("display", "flex");
    }
    return this.validaEmail;
  }

  //   validaSenha() {
  //     if (
  //       this.valor_input_email.indexOf("@") > 0 &&
  //       this.valor_input_email.indexOf(".com") >
  //         this.valor_input_email.indexOf("@") &&
  //       this.valor_input_senha > 6
  //     ) {
  //       $("#erro_senha").css("display", "none");
  //       console.log(this.valor_input_senha);
  //       alert("deu certo");
  //     } else {
  //       $("#erro_senha").css("display", "flex");
  //     }
  //   }
}
