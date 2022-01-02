class Controller {
  constructor(nomeFilme) {
    this.filme = nomeFilme;
  }

  qualeOfilme() {
    if (this.filme === undefined) {
      console.log(this.filme);
    } else {
      let model = new Model(this.filme);
      console.log(this.filme);
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
}
