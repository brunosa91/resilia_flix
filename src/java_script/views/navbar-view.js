class NavbarView {
  ficaTransparente(tema) {
    console.log(tema);
    tema == 'rolou'
      ? $('nav').addClass('transparencia-navbar')
      : $('nav').removeClass('transparencia-navbar');
  }
}
