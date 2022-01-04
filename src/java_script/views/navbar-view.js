class NavbarView {
  ficaTransparente(tema) {
    tema == 'rolou'
      ? $('nav').addClass('transparencia-navbar')
      : $('nav').removeClass('transparencia-navbar');
  }
  someBusca(tema) {
    if (tema == 'rolou') {
      $('.motor-pesquisa').css('display', 'none');
    } else {
      $('.motor-pesquisa').css('display', 'flex');
    }
  }
}
