$("#cadastrar").click(function () {
  const controller = new Controller($("#valor_email").val());
  controller.validandoEmail();
});

// $("#enviar").click(function () {
//   let cep = $("#date").val();
//   $.ajax({
//     url: `viacep.com.br/ws/${cep}/json/`,
//     type: "GET",
//     success: function (apodData) {
//       console.log(apodData);
//       $("#foto").attr("src", apodData.url);
//       $("#titulo").text(apodData.title);
//       $("#texto").text(apodData.explanation);

//       $("#foto_entrada").css("display", "none");
//       $(".texto_entrada").css("display", "none");
//       $("#foto").css("display", "flex");
//     },
//   });
// });
