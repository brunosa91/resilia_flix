$("#recuperacao").click(function () {
  const controller = new Controller($("#valor_email").val());

  controller.validandoEmail();
});
