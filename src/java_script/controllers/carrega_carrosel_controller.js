class CarroselController {
  constructor() {
    this.filme = [
      'hereditary',
      'the cabin in the woods',
      'us',
      'a quiet place',
      'host',
      'the witch',
      'midsommar',
      'la llorona',
      'it follows',
      'boy behind the door',
      'room',
      'the amusement park',
    ];
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
