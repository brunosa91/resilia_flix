class SlideNextModel {
  constructor(indexSlide, contador) {
    this.index = indexSlide;
    this.contador = contador;
  }
  passaSlide() {
    if (this.index - 1 == this.contador) {
      this.contador = 0;
    } else {
      this.contador++;
    }
    console.log(this.contador);
    return this.contador;
  }
}

class SlidePrevModel {
  constructor(indexSlide, contador) {
    this.index = indexSlide;
    this.contador = contador;
  }
  passaSlide() {
    if (this.contador == 0) {
      this.contador = this.index - 1;
    } else {
      this.contador--;
    }
    console.log(this.contador);
    return this.contador;
  }
}
