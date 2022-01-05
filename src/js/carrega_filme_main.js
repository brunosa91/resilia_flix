$(document).ready((e) => {
  const controller = new CarregaFilmesController();
  controller.qualFilme();
});

$(document).ready((e) => {
  const controllerIndex = new FilmesController();
  controllerIndex.qualFilme();
});
