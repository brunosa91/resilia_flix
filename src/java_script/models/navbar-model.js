class NavbarModel {
  rolaPagina() {
    if ($(window).scrollTop() > 200) {
      const tema = 'rolou';
      return tema;
    } else {
      const tema = 'parado';
      return tema;
    }
  }
}
