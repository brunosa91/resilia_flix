class NavbarController {
  checaSroll() {
    const model = new NavbarModel();
    const tema = model.rolaPagina();
    const view = new NavbarView();
    view.ficaTransparente(tema);
    view.someBusca(tema);
  }
}
