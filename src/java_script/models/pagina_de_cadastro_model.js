class Model {
  constructor(valorinputemail) {
    this.valor_input_email = valorinputemail;
  }
  validaEmail() {
    if (
      this.valor_input_email.indexOf("@") > 0 &&
      this.valor_input_email.indexOf(".com") >
        this.valor_input_email.indexOf("@")
    ) {
      alert("e-mail válido");
      // localStorage.setItem("e-mail", email); // nome , bruno
      // return true;
    } else {
      alert("e-mail inválido");
      // return false;
    }
    return this.validaEmail;
  }
}
// $("#cadastrar").click(function () {
//     const inputname = document.getElementById("valor_email");
//     // var inp = document.getElementById("entrar");

//     var email = inputname.value;

//     if (email.indexOf("@") > 0 && email.indexOf(".com") > email.indexOf("@")) {
//       alert("e-mail válido");
//       localStorage.setItem("e-mail", email); // nome , bruno
//       // return true;
//     } else {
//       alert("e-mail inválido");
//       // return false;
//     }

// }

//   let apod = $("#date").val();
//   $.ajax({
//     url: `https://api.nasa.gov/planetary/apod?api_key=Ac7EEBSoSA2Jp3YNjDjCDRUy2HmkO86O0rwhaq1o&date=${apod}`,
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

// var inputname = document.getElementById("inputuser");
// var inp = document.getElementById("entrar");
// function valida() {
//   var email = inputname.value;

//   if (email.indexOf("@") > 0 && email.indexOf(".com") > email.indexOf("@")) {
//     localStorage.setItem("e-mail", email); // nome , bruno
//     // return true;
//   } else {
//     // return false;
//   }
// }

// function escreve(parametro) {
//   if (parametro) {
//     alert("email valido");
//   } else {
//     alert("email invalido");
//   }
// }

// console.log(escreve(valida));

// function log() {
//   var entra = localStorage.getItem("e-mail");
//   var login = inp.value;

//   if (entra === login) {
//     alert("logou");
//     // nome , bruno
//     // return true;
//   } else {
//     alert("ferro");

//     // return false;
//   }
// }
