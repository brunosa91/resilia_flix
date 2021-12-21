var inputname = document.getElementById("inputuser");
var inp = document.getElementById("entrar");
function valida() {
  var email = inputname.value;

  if (email.indexOf("@") > 0 && email.indexOf(".com") > email.indexOf("@")) {
    localStorage.setItem("e-mail", email); // nome , bruno
    // return true;
  } else {
    // return false;
  }
}

// function escreve(parametro) {
//   if (parametro) {
//     alert("email valido");
//   } else {
//     alert("email invalido");
//   }
// }

// console.log(escreve(valida));

function log() {
  var entra = localStorage.getItem("e-mail");
  var login = inp.value;

  if (entra === login) {
    alert("logou");
    // nome , bruno
    // return true;
  } else {
    alert("ferro");

    // return false;
  }
}
