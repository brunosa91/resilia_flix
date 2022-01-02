class RedirecionaController {
  constructor(nomeFilme) {
    this.filme = nomeFilme;
  }
  pegaInfo() {
    const model = new RedirecionaModel(this.filme);
    this.filme == ''
      ? model.buscaFilme()
      : (window.location.href =
          '/resilia_flix/src/html/pagina_filme_busca.html');
    console.log(this.filme);
    // const view = new RedirecionaView();
    // view.novaPagina(model);
  }
}
