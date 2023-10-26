export default class Mouse {
  constructor(element) {
    this.element = element;
    this.cube = document.getElementsByClassName('cube');
    this.h2 = document.getElementsByTagName('h2');

    this.init();
  }

  init() {
    document.addEventListener('mousemove', this.mouseMovement.bind(this));
  }

  mouseMovement(evt) {
    const mouseX = evt.pageX;
    const mouseY = evt.pageY;

    for (let i = 0; i < 1; i++) {
      this.cube[i].style.transform =
        'translateX(' +
        mouseX * -0.001 +
        '%) translateY(' +
        mouseY * -0.001 +
        '%)';
    }

    for (let i = 0; i < 1; i++) {
      plant[i].style.left = mouseX * 0.003 + '%';
      plant[i].style.bottom = mouseY * -0.003 + '%';
    }
  }
}
