export default class Scrollx {
  constructor(element) {
    this.element = element;
    this.init();
    this.isDown = false;
    this.startX;
    this.scrollLeft;
  }

  init() {
    this.element.addEventListener('mousewheel', (evt) => {
      evt.preventDefault();
      this.element.scrollBy({
        left: evt.deltaY < 0 ? -100 : 100,
      });
    });

    // this.element.addEventListener('mousedown', (evt) => mouseDown(evt));
    // this.element.addEventListener('mouseup', (evt) => mouseUp(evt));
    // this.element.addEventListener('mouseleave', (evt) => mouseLeave(evt));
    // this.element.addEventListener('mousemove', (evt) => mouseMove(evt));
  }

  // mouseDown(evt) {
  //   this.isDown = true;
  //   this.element.classList.add('active');
  //   startX = evt.pageX - this.element.offsetLeft;
  //   scrollLeft = this.element.scrollLeft;
  // }

  // mouseUp() {
  //   this.isDown = false;
  //   this.element.classList.remove('active');
  // }
  // mouseLeave() {
  //   this.isDown = false;
  //   this.element.classList.remove('active');
  // }

  // mouseMove(evt) {
  //   if (!this.isDown) return;
  //   evt.preventDefault();
  //   const x = evt.pageX - this.element.offsetLeft;
  //   const walk = (x - startX) * 3; //scroll-fast
  //   this.element.scrollLeft = scrollLeft - walk;
  //   console.log(walk);
  // }
}
