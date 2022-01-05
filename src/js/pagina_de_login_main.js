$("#login").click(function () {
  const controller = new Controller(
    $("#valor_email").val(),
    $("#valor_senha").val()
  );

  controller.validandoEmail();
});
