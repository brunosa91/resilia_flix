class RedirecionaView {
  direcionar() {
    window.location.href = '/resilia_flix/src/html/pagina_filme_busca.html';
  }
  novaPagina(filme) {
    $('.nomeFilme').text(filme.novoTitulo());
    $('.imagem').attr('src', filme.novoCapa());
    $('.imagem').css('display', 'flex');
    const ano = $('<p>').text(`Ano: ${filme.novoAno()}`);
    const tipo = $('<p>').text(filme.novoTipo());
    const duracao = $('<p>').text(filme.novoDuracao());
    console.log(filme.novoAno());
    $('.info').append(ano);
    $('.info').append(tipo);
    $('.info').append(duracao);
  }
}
