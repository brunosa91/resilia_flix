class SlideView {
  mostraSlide(contador) {
    if (contador == 0) {
      $(`.test${2}`).css('display', 'none');
      $(`.nome${2}`).css('display', 'none');
      $(`.banner${2}`).css('display', 'none');
      $(`.test${contador}`).css('display', 'flex');
      $(`.nome${contador}`).css('display', 'flex');
      $(`.banner${contador}`).css('display', 'flex');
    } else {
      $(`.banner${contador - 1}`).css('display', 'none');
      $(`.banner${contador}`).css('display', 'flex');
      $(`.test${contador - 1}`).css('display', 'none');
      $(`.nome${contador - 1}`).css('display', 'none');
      $(`.test${contador}`).css('display', 'flex');
      $(`.nome${contador}`).css('display', 'flex');
    }
  }
}

class SlideViewPrev {
  mostraSlide(contador) {
    if (contador == 2) {
      $(`.test${0}`).css('display', 'none');
      $(`.nome${0}`).css('display', 'none');
      $(`.banner${0}`).css('display', 'none');
      $(`.test${contador}`).css('display', 'flex');
      $(`.nome${contador}`).css('display', 'flex');
      $(`.banner${contador}`).css('display', 'flex');
    } else {
      $(`.banner${contador + 1}`).css('display', 'none');
      $(`.banner${contador}`).css('display', 'flex');
      $(`.test${contador + 1}`).css('display', 'none');
      $(`.nome${contador + 1}`).css('display', 'none');
      $(`.test${contador}`).css('display', 'flex');
      $(`.nome${contador}`).css('display', 'flex');
    }
  }
}
