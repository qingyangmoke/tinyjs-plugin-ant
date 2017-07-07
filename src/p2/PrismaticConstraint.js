const p2 = require('./p2');
/**
* Connects two bodies at given offset points, letting them rotate relative to each other around this point.
*
* @class Tiny.Physics.P2.PrismaticConstraint
* @constructor
* @param {Tiny.Physics.P2} world - A reference to the P2 World.
* @param {p2.Body} bodyA - First connected body.
* @param {p2.Body} bodyB - Second connected body.
* @param {boolean} [lockRotation=true] - If set to false, bodyB will be free to rotate around its anchor point.
* @param {Array} [anchorA] - Body A's anchor point, defined in its own local frame. The value is an array with 2 elements matching x and y, i.e: [32, 32].
* @param {Array} [anchorB] - Body A's anchor point, defined in its own local frame. The value is an array with 2 elements matching x and y, i.e: [32, 32].
* @param {Array} [axis] - An axis, defined in body A frame, that body B's anchor point may slide along. The value is an array with 2 elements matching x and y, i.e: [32, 32].
* @param {number} [maxForce] - The maximum force that should be applied to constrain the bodies.
*/
export default class PrismaticConstraint extends p2.PrismaticConstraint {
  constructor(world, bodyA, bodyB, lockRotation = true, anchorA = [0, 0], anchorB = [0, 0], axis = [0, 0], maxForce = Number.MAX_VALUE) {
    anchorA = [world.pxmi(anchorA[0]), world.pxmi(anchorA[1])];
    anchorB = [world.pxmi(anchorB[0]), world.pxmi(anchorB[1])];

    const options = {
      localAnchorA: anchorA,
      localAnchorB: anchorB,
      localAxisA: axis,
      maxForce,
      disableRotationalLock: !lockRotation,
    };
    super(bodyA, bodyB, options);

    /**
    * @property {Tiny.Application} game - Local reference to app.
    */
    this.app = world.app;

    /**
    * @property {Tiny.Physics.P2} world - Local reference to P2 World.
    */
    this.world = world;
  }
}
