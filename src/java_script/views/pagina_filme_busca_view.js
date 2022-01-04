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
    const diretor = $('<p>').text(`Director: ${filme.novoDiretor()}`);
    const genero = $('<p>').text(filme.novoGenero());
    const avaliacao = $('<p>').text(`Metacritic: ${filme.novoAvaliacao()}`);
    const ator = $('<p>').text(`Atores: ${filme.novoAtor()}`);
    $('.info').append(ano);
    $('.info').append(tipo);
    $('.info').append(duracao);
    $('.info').append(avaliacao);
    $('.texto').append(diretor);
    $('.texto').append(genero);
    $('.texto').append(ator);
    $('.erro').css('display', 'none');
  }
  semBanner(filme) {
    $('.nomeFilme').text(filme.novoTitulo());
    $('.sinopse').text(filme.novoSinopse());
    $('.imagem-erro').css('display', 'flex');
    $('.imagem').css('display', 'none');
    const ano = $('<p>').text(`Ano: ${filme.novoAno()}`);
    const tipo = $('<p>').text(filme.novoTipo());
    const duracao = $('<p>').text(filme.novoDuracao());
    const diretor = $('<p>').text(`Director: ${filme.novoDiretor()}`);
    const genero = $('<p>').text(filme.novoGenero());
    const avaliacao = $('<p>').text(`Metacritic: ${filme.novoAvaliacao()}`);
    const ator = $('<p>').text(`Atores: ${filme.novoAtor()}`);
    $('.info').append(ano);
    $('.info').append(tipo);
    $('.info').append(duracao);
    $('.info').append(avaliacao);
    $('.texto').append(diretor);
    $('.texto').append(genero);
    $('.texto').append(ator);
    $('.erro').css('display', 'none');
  }

  mostraErro() {
    $('.erro').css('display', 'flex');
    $('.imagem-erro').css('display', 'none');
    $('.imagem').css('display', 'none');
    $('.sinopse').text('');
    $('.nomeFilme').text('');
  }
}
