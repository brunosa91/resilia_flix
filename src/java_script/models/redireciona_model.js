class RedirecionaModel {
  constructor(nomeFilme) {
    this.filme = nomeFilme;
    this.titulo = '';
    this.sinopse = '';
    this.diretor = '';
    this.genero = '';
    this.capa = '';
    this.ano = '';
    this.tipo = '';
    this.duracao = '';
    this.response = '';
  }

  buscaFilme() {
    let chave = '81849d08';
    const requisicao = new XMLHttpRequest();
    console.log(this.filme);
    requisicao.open(
      'GET',
      `http://www.omdbapi.com/?apikey=${chave}&t=${this.filme}`,
      false
    );
    requisicao.onload = () => {
      if (requisicao.status == 200) {
        const response = JSON.parse(requisicao.response);
        console.log(response);
        this._atualizaFilmes(response);
      }
    };
    requisicao.send();
  }
  _atualizaFilmes(objetoFilme) {
    this.titulo = objetoFilme.Title;
    this.sinopse = objetoFilme.Plot;
    this.diretor = objetoFilme.Director;
    this.genero = objetoFilme.Genre;
    this.capa = objetoFilme.Poster;
    this.ano = objetoFilme.Year;
    this.duracao = objetoFilme.Runtime;
    this.tipo = objetoFilme.Type;
    this.response = objetoFilme.Response;
  }
  novoTitulo() {
    return this.titulo;
  }

  novoSinopse() {
    return this.sinopse;
  }

  novoDiretor() {
    return this.diretor;
  }

  novoGenero() {
    return this.genero;
  }

  novoCapa() {
    return this.capa;
  }

  novoTipo() {
    return this.tipo;
  }
  novoDuracao() {
    return this.duracao;
  }

  novoAno() {
    return this.ano;
  }

  novoResponse() {
    return this.response;
  }
}
