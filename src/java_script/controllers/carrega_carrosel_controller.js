class CarroselController {
  constructor() {
    this.filme = ['hereditary', 'us', 'a quiet place'];
  }
  qualFilme() {
    const objeto = [];
    for (let i = 0; i < this.filme.length; i++) {
      const model = new CarroselModel(this.filme[i]);
      model.buscaFilme();
      objeto.push(model);
    }
    console.log(objeto);
    const view = new CarroselView();
    view.carregaCarrosel(objeto);
  }
}
