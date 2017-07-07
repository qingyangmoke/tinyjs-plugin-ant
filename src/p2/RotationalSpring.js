const p2 = require('./p2');
/**
* Creates a rotational spring, connecting two bodies. A spring can have a resting length, a stiffness and damping.
*
* @class Tiny.Physics.P2.RotationalSpring
* @constructor
* @param {Tiny.Physics.P2} world - A reference to the P2 World.
* @param {p2.Body} bodyA - First connected body.
* @param {p2.Body} bodyB - Second connected body.
* @param {number} [restAngle] - The relative angle of bodies at which the spring is at rest. If not given, it's set to the current relative angle between the bodies.
* @param {number} [stiffness=100] - Stiffness of the spring. A number >= 0.
* @param {number} [damping=1] - Damping of the spring. A number >= 0.
*/
export default class RotationalSpring {
  constructor(world, bodyA, bodyB, restAngle = null, stiffness = 100, damping = 1) {

    if (restAngle) {
      restAngle = world.pxm(restAngle);
    }

    /**
    * @property {Tiny.Application} app - Local reference to app.
    */
    this.app = world.app;

    /**
    * @property {Tiny.Physics.P2} world - Local reference to Tiny P2 World.
    */
    this.world = world;

    const options = {
      restAngle,
      stiffness,
      damping,
    };

    /**
    * @property {p2.RotationalSpring} data - The actual p2 spring object.
    */
    this.data = new p2.RotationalSpring(bodyA, bodyB, options);

    this.data.parent = this;
  }
}
