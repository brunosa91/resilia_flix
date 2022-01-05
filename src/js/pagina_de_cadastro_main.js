$("#cadastrar").click(function () {
  const controller = new Controller(
    $("#valor_email").val(),
    $("#cep").val(),
    $("#valor_senha").val()
  );

  controller.validandoEmail();
});

$("#valor_senha").keyup(function () {
  const controller = new Controller(
    $("#valor_email").val(),
    $("#cep").val(),
    $("#valor_senha").val()
  );

  controller.validandoSenha();
});

$("#valor_confirma_senha").keyup(function () {
  const controller = new Controller(
    $("#valor_email").val(),
    $("#cep").val(),
    $("#valor_senha").val(),
    $("#valor_confirma_senha").val()
  );

  controller.validando_confirma_senha();
});

$("#cep").blur(function () {
  const controller = new Controller(
    $("#valor_email").val(),
    $("#cep").val(),
    $("#valor_senha").val()
  );
  controller.cep_preenchido();
});
