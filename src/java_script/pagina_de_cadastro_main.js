$("#cadastrar").click(function () {
  const controller = new Controller($("#valor_email").val(), $("#cep").val());

  controller.validandoEmail();
});
$("#cep").blur(function () {
  const controller = new Controller($("#valor_email").val(), $("#cep").val());
  controller.cep_preenchido();
});
