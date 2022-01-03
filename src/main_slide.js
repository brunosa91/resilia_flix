$('.prev').click((e) => {
  const controller = new SlideController();
  controller.qualSlide();
});

$('.next').click((e) => {
  const slides = document.querySelector('.slide').children;
  // const controller = new SlideController(slides);
  console.log(slides.length);
  // controller.qualSlide();
});
