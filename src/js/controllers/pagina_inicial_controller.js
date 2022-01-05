class FilmesController {
  constructor() {
    this.filme = [
      "naruto",
      "one piece",
      "evangelion",
      "soul",
      "coco",
      "inside out",
      "it",
      "boy behind the door",
      "room",
    ];
  }
  qualFilme() {
    const objeto = [];
    for (let i = 0; i < this.filme.length; i++) {
      const model = new FilmesModel(this.filme[i]);
      model.buscaFilme();
      objeto.push(model);
    }
    const view = new FilmesView();
    view.carregaFilmes(objeto);
  }
}
