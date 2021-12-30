class Model {
  constructor(nomeFilme) {
    this.filme = nomeFilme;
    this.titulo = '';
    this.sinopse = '';
    this.diretor = '';
    this.genero = '';
    this.capa = '';
    this.response = '';
  }

  buscaFilme() {
    let chave = '81849d08';
    const requisicao = new XMLHttpRequest();
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
}
