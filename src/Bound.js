export default class Bound {
  constructor(x, y, right, bottom) {
    this.x = 0;
    this.y = 0;
    this.right = 0;
    this.bottom = 0;
  }
  get top() {
    return this.y;
  }
  get left() {
    return this.x;
  }
}
