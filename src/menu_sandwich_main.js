$(window).resize((e) => {
  if ($(window).innerWidth() > 790) {
    $('.btn-sandwich1').css('display', 'none');
    $('.btn-sandwich0').css('display', 'none');
    $('.sanduiche').css('display', 'none');
    $('.buscaAbs').css('display', 'none');
  } else {
    $('.btn-sandwich0').css('display', 'flex');
  }
});

$('.btn-sandwich0').click((e) => {
  $('.sanduiche').css('display', 'flex');
  $('.btn-sandwich0').css('display', 'none');
  $('.btn-sandwich1').css('display', 'flex');
  $('.buscaAbs').css('display', 'none');
});

$('.btn-sandwich1').click((e) => {
  $('.sanduiche').css('display', 'none');
  $('.btn-sandwich0').css('display', 'flex');
  $('.btn-sandwich1').css('display', 'none');
});

$('.motor-pesquisa').click((e) => {
  $('.sanduiche').css('display', 'none');
  $('.btn-sandwich0').css('display', 'flex');
  $('.btn-sandwich1').css('display', 'none');
  $('.buscaAbs').css('display', 'flex');
});

$('.btn-busca2').click((e) => {
  $('.btn-sandwich0').css('display', 'flex');
  $('.buscaAbs').css('display', 'none');
});
