class View {
  mostraEmail(resultadoEmail) {
    if (resultadoEmail == "email certo") {
      $("#erro_email").css("display", "none");
      $(".input").css("display", "none");
      $("#recuperacao").css("display", "none");
      $(".valor_email").css("display", "none");
      $("#email_enviado").css("display", "flex");
    } else {
      $("#erro_email").css("display", "flex");
    }
  }
}
