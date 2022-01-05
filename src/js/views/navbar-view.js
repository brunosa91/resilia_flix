class NavbarView {
  ficaTransparente(tema) {
    tema == 'rolou'
      ? $('nav').addClass('transparencia-navbar')
      : $('nav').removeClass('transparencia-navbar');
  }
}
