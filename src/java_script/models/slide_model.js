class SlideNextModel {
  constructor(indexSlide) {
    this.index = indexSlide;
  }
  passaSlide() {
    const indexNovo = 0;
    indexNovo == this.index.lenght - 1 ? (indexNovo = 0) : indexNovo++;
  }
}
