class EscolheFilmesModel {
  constructor(nomeFilme) {
    this.filme = nomeFilme;
    this.capa = '';
  }

  buscaFilme() {
    const requisicao = new XMLHttpRequest();
    requisicao.addEventListener('load', () => {
      if (requisicao.status == 200 && requisicao.readyState == 4) {
        const dados = JSON.parse(requisicao.responseText);
        console.log(dados);
        this._atualizaFilmes(dados);
      }
    });
    requisicao.open(
      'GET',
      `//www.omdbapi.com/?t=${this.filme}&apikey=81849d08`,
      false
    );
    requisicao.send();
  }
  _atualizaFilmes(objetoFilme) {
    this.titulo = objetoFilme.Title;
    this.capa = objetoFilme.Poster;
  }

  novoTitulo() {
    return this.titulo;
  }

  novoCapa() {
    return this.capa;
  }
}
