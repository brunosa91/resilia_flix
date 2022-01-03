class SlideController {
  contrutor(indexSlide) {
    this.index = indexSlide;
  }

  qualoSlide() {
    const model = new SlideModel(this.index);
    model.passaSlide();
  }
}
