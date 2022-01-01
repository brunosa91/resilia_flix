class Controller {
  constructor(nomeFilme) {
    this.filme = nomeFilme;
  }

  qualeOfilme() {
    let model = new Model(this.filme);
    model.buscaFilme();
    let view = new View();
    if (model.response === 'True') {
      if (model.capa === 'N/A') {
        console.log(model.capa);
        view.removeAppend();
        view.semBanner(model);
      } else {
        view.removeAppend();
        view.resultadoFilme(model);
      }
    } else {
      view.mostraErro();
    }
  }
}
