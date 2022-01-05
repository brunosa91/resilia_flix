$(document).ready((e) => {
  let contador = 0;
  $(".prev").click((e) => {
    const slides = document.querySelector(".slide").children;
    const controller = new SlideControllerPrev(slides.length, contador);
    controller.qualSlide();
    contador = controller.contador;
    console.log(controller.contador);
  });
});

$(document).ready((e) => {
  let contador = 0;
  $(".next").click((e) => {
    const slides = document.querySelector(".slide").children;
    const controller = new SlideController(slides.length, contador);
    controller.qualSlide();
    contador = controller.contador;
    console.log(controller.contador);
  });
});
