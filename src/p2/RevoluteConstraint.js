const p2 = require('./p2');

/**
* Connects two bodies at given offset points, letting them rotate relative to each other around this point.
* The pivot points are given in world (pixel) coordinates.
*
* @class Tiny.Physics.P2.RevoluteConstraint
* @constructor
* @param {Tiny.Physics.P2} world - A reference to the P2 World.
* @param {p2.Body} bodyA - First connected body.
* @param {Float32Array} pivotA - The point relative to the center of mass of bodyA which bodyA is constrained to. The value is an array with 2 elements matching x and y, i.e: [32, 32].
* @param {p2.Body} bodyB - Second connected body.
* @param {Float32Array} pivotB - The point relative to the center of mass of bodyB which bodyB is constrained to. The value is an array with 2 elements matching x and y, i.e: [32, 32].
* @param {number} [maxForce=0] - The maximum force that should be applied to constrain the bodies.
* @param {Float32Array} [worldPivot=null] - A pivot point given in world coordinates. If specified, localPivotA and localPivotB are automatically computed from this value.
*/
export class RevoluteConstraint extends p2.RevoluteConstraint {
  constructor(world, bodyA, pivotA, bodyB, pivotB, maxForce = Number.MAX_VALUE, worldPivot = null) {
    pivotA = [world.pxmi(pivotA[0]), world.pxmi(pivotA[1])];
    pivotB = [world.pxmi(pivotB[0]), world.pxmi(pivotB[1])];

    if (worldPivot) {
      worldPivot = [world.pxmi(worldPivot[0]), world.pxmi(worldPivot[1])];
    }

    const options = {
      worldPivot,
      localPivotA: pivotA,
      localPivotB: pivotB,
      maxForce,
    };

    super(bodyA, bodyB, options);

    /**
     * @property {Tiny.Physics.P2} world - Local reference to P2 World.
     */
    this.world = world;
  }
}
