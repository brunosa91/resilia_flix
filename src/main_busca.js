$(document).ready((e) => {
  var filme = location.hash.split('#')[1];
  const controller = new Controller(filme);
  console.log(filme);
  controller.qualeOfilme();
  window.location.href = '/resilia_flix/src/html/pagina_filme_busca.html#';
});

$('.btn-busca').click((e) => {
  e.preventDefault();
  const filme = new Controller($('#valFilme').val());
  filme.qualeOfilme();
});
