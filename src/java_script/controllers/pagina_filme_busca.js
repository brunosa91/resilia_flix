class Controller {
  constructor(nomeFilme) {
    this.filme = nomeFilme;
  }

  qualeOfilme() {
    let model = new Model(this.filme);
    model.buscaFilme();
    let view = new View();
    if (model.response === 'True') {
      view.resultadoFilme(model);
    } else {
      view.mostraErro();
    }
  }
}
