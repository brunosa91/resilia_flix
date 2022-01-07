class Model {
  constructor(nomeFilme) {
    this.filme = nomeFilme;
    this.titulo = "";
    this.sinopse = "";
    this.diretor = "";
    this.genero = "";
    this.avaliacao = "";
    this.capa = "";
    this.ano = "";
    this.tipo = "";
    this.duracao = "";
    this.ator = "";
    this.response = "";
  }

  buscaFilme() {
    // let chave = "81849d08";
    const requisicao = new XMLHttpRequest();
    requisicao.open(
      "GET",
      `http://www.omdbapi.com/?t=${this.filme}&apikey=81849d08`,
      false
    );
    // requisicao.onload = () => {
    //   if (requisicao.status == 200) {
    //     const response = JSON.parse(requisicao.response);
    //     if (response.Response == 'True') {
    //       console.log(response);
    //       this._atualizaFilmes(response);
    //     } else {
    //       return (this.response = false);
    //     }
    //   }
    // };
    requisicao.addEventListener("load", () => {
      if ((requisicao.status == 200) & (requisicao.readyState == 4)) {
        const dados = JSON.parse(requisicao.responseText);
        this._atualizaFilmes(dados);
      }
    });
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
    this.ator = objetoFilme.Actors;
    this.avaliacao = objetoFilme.Ratings[0].Value;
    console.log(this.avaliacao);
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

  novoAvaliacao() {
    return this.avaliacao;
  }
  novoAtor() {
    return this.ator;
  }
}
