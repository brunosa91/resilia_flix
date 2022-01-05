$(document).ready((e) => {
  $(window).scroll((e) => {
    const controller = new NavbarController();
    controller.checaSroll();
  });
});
