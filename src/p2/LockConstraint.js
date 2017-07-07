const p2 = require('./p2');
/**
* Locks the relative position between two bodies.
*
* @class Tiny.Physics.P2.LockConstraint
* @constructor
* @param {Tiny.Physics.P2} world - A reference to the P2 World.
* @param {p2.Body} bodyA - First connected body.
* @param {p2.Body} bodyB - Second connected body.
* @param {Array} [offset] - The offset of bodyB in bodyA's frame. The value is an array with 2 elements matching x and y, i.e: [32, 32].
* @param {number} [angle=0] - The angle of bodyB in bodyA's frame.
* @param {number} [maxForce] - The maximum force that should be applied to constrain the bodies.
*/
export default class LockConstraint extends p2.LockConstraint {
  constructor(world, bodyA, bodyB, offset = [0, 0], angle = 0, maxForce = Number.MAX_VALUE) {
    offset = [world.pxm(offset[0]), world.pxm(offset[1])];

    const options = {
      localOffsetB: offset,
      localAngleB: angle,
      maxForce,
    };

    super(bodyA, bodyB, options);

    /**
   * @property {Tiny.Application} app - Local reference to game.
   */
    this.app = world.app;

    /**
    * @property {Tiny.Physics.P2} world - Local reference to P2 World.
    */
    this.world = world;
  }
}
