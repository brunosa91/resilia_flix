class View {
  mostraCep(parametromodel) {
    const logradouro = parametromodel.getLogradouro();
    const bairro = parametromodel.getBairro();
    const localidade = parametromodel.getLocalidade();
    const uf = parametromodel.getUf();
    $("#logradouro").val(logradouro);
    $("#bairro").val(bairro);
    $("#localidade").val(localidade);
    $("#uf").val(uf);
    console.log(parametromodel);
  }
}
