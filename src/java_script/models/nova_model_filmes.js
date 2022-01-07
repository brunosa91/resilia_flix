class Model {
  constructor(filme) {
    this.filme = filme;
  }

  async acessaApi() {
    let chave = '81849d08';
    fech(`http://www.omdbapi.com/?apikey=${chave}&t=${this.filme}`).then(
      function (response) {
        return response.jason();
      }
    );
  }
}
