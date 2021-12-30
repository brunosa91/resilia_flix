class View {
  resultadoFilme(filme) {
    $('#titulo').text(filme.novoTitulo());
    $('#sinopse').text(filme.novoSinopse());
    $('#genero').text(filme.novoGenero());
    $('#diretor').text(filme.novoDiretor());
    $('.poster').attr('src', filme.novoCapa());
    $('.poster').css('display', 'flex');
    $('.texto').css('display', 'flex');
    $('.staff').css('display', 'flex');
  }
}
