// $("#valor_senha").keyup(function () {
//   const controller = new Controller(
//     $("#valor_email").val(),
//     $("#valor_senha").val()
//   );

//   controller.validandoSenha();
// });

$("#login").click(function () {
  const controller = new Controller(
    $("#valor_email").val(),
    $("#valor_senha").val()
  );

  controller.validandoEmail();
});

// $("#login").click(function () {
//   const controller = new Controller(
//     $("#valor_email").val(),
//     $("#valor_senha").val()
//   );

//   controller.validandoSenha();
// });
