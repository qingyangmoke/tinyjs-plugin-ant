/**
* Collision Group
*
* @class Tiny.Physics.P2.CollisionGroup
* @constructor
* @param {number} bitmask - The CollisionGroup bitmask.
*/
export default class CollisionGroup {
  constructor(bitmask) {
    /**
    * @property {number} mask - The CollisionGroup bitmask.
    */
    this.mask = bitmask;
  }
};
