/**
* @private
* @name Bound
* @class Bound
* @constructor
* @memberof Tiny.Physics.Ant
*/
export default class Bound {
  /**
   * @private
   * @param {Number} x - x 坐标
   * @param {Number} y - y 坐标
   * @param {Number} right - 右边界
   * @param {Number} bottom - 下部边界
   */
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
