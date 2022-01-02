class CarregaFilmesController {
  constructor() {
    this.filme = [
      'sidewalls',
      'shrek',
      'the avengers',
      'mother',
      'arrow',
      'naruto',
      'interstellar',
      'the devil wears prada',
    ];
  }
  qualFilme() {
    const objeto = [];
    for (let i = 0; i < this.filme.length; i++) {
      const model = new EscolheFilmesModel(this.filme[i]);
      model.buscaFilme();
      objeto.push(model);
    }
    console.log(objeto);
    const view = new MostraFilmesView();
    view.carregaCapa(objeto);
  }
}
