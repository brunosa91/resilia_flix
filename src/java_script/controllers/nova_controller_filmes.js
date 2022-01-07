class Controller {
  constructor(nomeFilme) {
    this.filme = nomeFilme;
  }

  async procuraFilme() {
    let model = new Model(this.filme);
    let resultado = await model.acessaApi();
  }
}
