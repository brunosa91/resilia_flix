$("#valor_senha").keyup(function () {
  const controller = new Controller(
    $("#valor_email").val(),
    $("#cep").val(),
    $("#valor_senha").val()
  );

  controller.validandoSenha();
});

$("#cadastrar").click(function () {
  const controller = new Controller(
    $("#valor_email").val(),
    $("#cep").val(),
    $("#valor_senha").val()
  );

  controller.validandoEmail();
});
$("#cep").blur(function () {
  const controller = new Controller(
    $("#valor_email").val(),
    $("#cep").val(),
    $("#valor_senha").val()
  );
  controller.cep_preenchido();
});
