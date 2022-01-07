class Controller {
  constructor(nomeFilme) {
    this.filme = nomeFilme;
  }

  qualeOfilme() {
    if (this.filme === undefined) {
      console.log(this.filme);
    } else if (this.filme != "") {
      let model = new Model(this.filme);
      console.log(this.filme);
      model.buscaFilme();
      let view = new View();
      if (model.response === false) {
        console.log(model.response);
        view.mostraErro();
        view.removeAppend();
      } else if (model.capa === "N/A") {
        console.log(model.capa);
        view.removeAppend();
        view.semBanner(model);
      } else {
        view.removeAppend();
        view.resultadoFilme(model);
      }
    }
    // const model = new Model(this.filme);
    // const filme = model.carregarBuscaFilmes(this.filme);
    // filme.done((result) => console.log(result));
  }
}
