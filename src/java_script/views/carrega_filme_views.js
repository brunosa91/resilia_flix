class MostraFilmesView {
  carregaCapa(filme) {
    for (let i = 0; i < filme.length; i++) {
      $(`.f${i}`).attr('src', filme[i].novoCapa());
    }
  }
}
