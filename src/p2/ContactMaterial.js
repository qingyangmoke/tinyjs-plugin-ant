const p2 = require('./p2');
/**
* Defines a physics material
*
* @class Tiny.Physics.P2.ContactMaterial
* @constructor
* @param {Tiny.Physics.P2.Material} materialA - First material participating in the contact material.
* @param {Tiny.Physics.P2.Material} materialB - Second material participating in the contact material.
* @param {object} [options] - Additional configuration options.
* @param {object} [friction=0.3] - Friction to use in the contact of these two materials.
* @param {number} [restitution=0.0] - Restitution to use in the contact of these two materials.
* @param {number} [stiffness=1e7] - Stiffness of the resulting ContactEquation that this ContactMaterial generates.
* @param {number} [relaxation=3] - Relaxation of the resulting ContactEquation that this ContactMaterial generates.
* @param {number} [frictionStiffness=1e7] - Stiffness of the resulting FrictionEquation that this ContactMaterial generates.
* @param {number} [frictionRelaxation=3] - Relaxation of the resulting FrictionEquation that this ContactMaterial generates.
* @param {number} [surfaceVelocity=0] - Will add surface velocity to this material. If bodyA rests on top if bodyB, and the surface velocity is positive, bodyA will slide to the right.
*/
export default class ContactMaterial extends p2.ContactMaterial {
  constructor(materialA, materialB, options) {
    super(materialA, materialB, options);
  }
}
