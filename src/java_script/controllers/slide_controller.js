class SlideController {
  constructor(indexSlide, contador) {
    this.index = indexSlide;
    this.contador = contador;
  }

  qualSlide() {
    const model = new SlideNextModel(this.index, this.contador);
    console.log(this.index);
    console.log(this.contador);
    model.passaSlide();
    this.contador = model.contador;
    const view = new SlideView();
    view.mostraSlide(model.contador);
    return this.contador;
  }
}

class SlideControllerPrev {
  constructor(indexSlide, contador) {
    this.index = indexSlide;
    this.contador = contador;
  }

  qualSlide() {
    const model = new SlidePrevModel(this.index, this.contador);
    console.log(this.index);
    console.log(this.contador);
    model.passaSlide();
    this.contador = model.contador;
    const view = new SlideViewPrev();
    view.mostraSlide(model.contador);
    return this.contador;
  }
}
