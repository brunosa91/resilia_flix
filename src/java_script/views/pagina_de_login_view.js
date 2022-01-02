class View {
  mostraEmailSenha(resultadoValidaEmailSenha) {
    if (resultadoValidaEmailSenha == "email e senha válidos") {
      $("#erro_email").css("display", "none");
      $("#erro_senha").css("display", "none");
      window.location.href = "pagina_de_cadastro.html";
    } else {
      $("#erro_email").css("display", "flex");
      $("#erro_senha").css("display", "flex");
    }
  }
}
