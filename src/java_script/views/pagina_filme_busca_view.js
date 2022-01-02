class View {
  removeAppend() {
    $('p').remove();
  }
  resultadoFilme(filme) {
    $('.nomeFilme').text(filme.novoTitulo());
    $('.imagem').attr('src', filme.novoCapa());
    $('.sinopse').text(filme.novoSinopse());
    $('.imagem-erro').css('display', 'none');
    $('.imagem').css('display', 'flex');
    const ano = $('<p>').text(`Ano: ${filme.novoAno()}`);
    const tipo = $('<p>').text(filme.novoTipo());
    const duracao = $('<p>').text(filme.novoDuracao());
    const diretor = $('<p>').text(`Diretor: ${filme.novoDiretor()}`);
    const genero = $('<p>').text(filme.novoGenero());
    $('.info').append(ano);
    $('.info').append(tipo);
    $('.info').append(duracao);
    $('.texto').append(diretor);
    $('.texto').append(genero);
  }
  semBanner(filme) {
    $('.nomeFilme').text(filme.novoTitulo());
    $('.imagem-erro').css('display', 'flex');
    $('.imagem').css('display', 'none');
    $('.sinopse').text(filme.novoSinopse());
    const ano = $('<p>').text(`Ano: ${filme.novoAno()}`);
    const tipo = $('<p>').text(filme.novoTipo());
    const duracao = $('<p>').text(filme.novoDuracao());
    console.log(filme.novoAno());
    $('.info').append(ano);
    $('.info').append(tipo);
    $('.info').append(duracao);
  }
}
