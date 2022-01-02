class CarregaFilmesController {
  constructor() {
    this.filme = [
      'spider-man: no way home',
      'parasite',
      'the worst person in the world',
      'interstellar',
      'the devil wears prada',
      'homeland',
      'the father',
      'in the heights',
      'pig',
      'sidewalls',
      'shrek',
      'the avengers',
      'mother',
      'soul',
      'minari',
      'gravity',
      'little women',
      'drive my car',
      'inside out',
      'get out',
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
