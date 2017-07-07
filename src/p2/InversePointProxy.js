/**
* p2 和 tiny 系统相反的坐标代理 实现坐标点的直接转换
* A InversePointProxy is an internal class that allows for direct getter/setter style property access to Arrays and TypedArrays but inverses the values on set.
*
* @class Tiny.Physics.P2.InversePointProxy
* @constructor
* @param {Tiny.Physics.P2.World} world - A reference to the P2 World.
* @param {any} destination - The object to bind to.
*/
export default class InversePointProxy {
  constructor(world, destination) {
    this.world = world;
    this.destination = destination;
  }
  /**
   * @name Tiny.Physics.P2.InversePointProxy#x
   * @property {number} x - The x property of this InversePointProxy get and set in pixels.
   */
  get x() {
    return this.world.mpxi(this.destination[0]);
  }
  /**
   * @name Tiny.Physics.P2.InversePointProxy#x
   * @property {number} x - The x property of this InversePointProxy get and set in pixels.
   */
  set x(value) {
    this.destination[0] = this.world.pxmi(value);
  }
  /**
  * @name Tiny.Physics.P2.InversePointProxy#y
  * @property {number} y - The y property of this InversePointProxy get and set in pixels.
  */
  get y() {
    return this.world.mpxi(this.destination[1]);
  }
  set y(value) {
    this.destination[1] = this.world.pxmi(value);
  }
  get mx() {
    return this.destination[0];
  }
  set mx(value) {
    this.destination[0] = -value;
  }
  /**
  * @name Tiny.Physics.P2.InversePointProxy#my
  * @property {number} my - The y property of this InversePointProxy get and set in meters.
  */
  get my() {
    return this.destination[1];
  }
  set my(value) {
    this.destination[1] = -value;
  }
}
