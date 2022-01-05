class View {
  mostraCep(parametromodel) {
    const logradouro = parametromodel.getLogradouro();
    const bairro = parametromodel.getBairro();
    const localidade = parametromodel.getLocalidade();
    const uf = parametromodel.getUf();
    $("#logradouro").val(logradouro);
    $("#bairro").val(bairro);
    $("#localidade").val(localidade);
    $("#uf").val(uf);
    console.log(parametromodel);
  }

  mostraErro() {
    $("#erro").css("display", "flex");
  }

  mostraEmail(resultadoValidaEmail) {
    if (resultadoValidaEmail == "e-mail válido") {
      $("#erro_email").css("display", "none");
    } else {
      $("#erro_email").css("display", "flex");
    }
  }
  //solution
  mostraSenha(resultadoValidaSenha) {
    if (resultadoValidaSenha == "senha válida") {
      $("#erro_senha").css("display", "none");
    } else {
      $("#erro_senha").css("display", "flex");
    }
  }
  mostraConfirmaSenha(resultadoConfirmaSenha) {
    if (resultadoConfirmaSenha == "senha igual") {
      $("#erro_confirma_senha").css("display", "none");
    } else {
      $("#erro_confirma_senha").css("display", "flex");
    }
  }
}
