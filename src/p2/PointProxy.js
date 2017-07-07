/**
*
* A PointProxy is an internal class that allows for direct getter/setter style property access to Arrays and TypedArrays.
*
* @class Tiny.Physics.P2.PointProxy
* @constructor
* @param {Tiny.Physics.P2} world - A reference to the P2 World.
* @param {any} destination - The object to bind to.
*/
export class PointProxy {
  constructor(world, destination) {
    this.world = world;
    this.destination = destination;
  }
  get x() {
    return this.world.mpx(this.destination[0]);
  }

  /**
   * @name Tiny.Physics.P2.PointProxy#x
   * @property {number} x - The x property of this PointProxy get and set in pixels.
   */
  set x(value) {
    this.destination[0] = this.world.pxm(value);
  }

  get y() {
    return this.world.mpx(this.destination[1]);
  }

  /**
   * @name Tiny.Physics.P2.PointProxy#y
   * @property {number} y - The y property of this PointProxy get and set in pixels.
   */
  set y(value) {
    this.destination[1] = this.world.pxm(value);
  }

  get mx() {
    return this.destination[0];
  }

  /**
   * @name Tiny.Physics.P2.PointProxy#mx
   * @property {number} mx - The x property of this PointProxy get and set in meters.
   */
  set mx(value) {
    this.destination[0] = value;
  }

  get my() {
    return this.destination[1];
  }

  /**
  * @name Tiny.Physics.P2.PointProxy#my
  * @property {number} my - The x property of this PointProxy get and set in meters.
  */
  set my(value) {
    this.destination[1] = value;
  }
}
