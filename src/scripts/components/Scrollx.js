export default class Scrollx {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    this.element.addEventListener('wheel', (evt) => {
      evt.preventDefault();
      this.element.scrollBy({
        left: evt.deltaY < 0 ? -100 : 100,
      });
    });
  }
}
