class CarroselView {
  carregaCarrosel(filme) {
    for (let i = 0; i < filme.length; i++) {
      $(`.c${i}`).attr('src', filme[i].novoCapa());
    }
  }
}
