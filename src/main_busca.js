$('.busca').click((e) => {
  e.preventDefault();
  const filme = new Controller($('.filme').val());
  filme.qualeOfilme();
});
