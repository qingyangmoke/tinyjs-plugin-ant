const p2 = require('./p2');
/**
* Connects two bodies at given offset points, letting them rotate relative to each other around this point.
*
* @class Tiny.Physics.P2.GearConstraint
* @constructor
* @param {Tiny.Physics.P2} world - A reference to the P2 World.
* @param {p2.Body} bodyA - First connected body.
* @param {p2.Body} bodyB - Second connected body.
* @param {number} [angle=0] - The relative angle
* @param {number} [ratio=1] - The gear ratio.
*/
export default class GearConstraint extends p2.GearConstraint {
  constructor(world, bodyA, bodyB, angle = 0, ratio = 1) {
    const options = {
      angle,
      ratio,
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
