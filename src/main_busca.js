$('.btn-busca').click((e) => {
  e.preventDefault();
  const filme = new Controller($('#valFilme').val());
  filme.qualeOfilme();
});
