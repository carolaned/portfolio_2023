export default class Scrollx {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    this.element.addEventListener('wheel', (evt) => {
      evt.preventDefault();
      this.element.scrollLeft += evt.deltaY * 1.5;
    });
  }
}
