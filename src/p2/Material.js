const p2 = require('./p2');
/**
* A P2 Material.
* @class Tiny.Physics.P2.Material
* @constructor
* @param {string} name - The user defined name given to this Material.
*/
export default class Material extends p2.Material {
  constructor(name) {
    super();
    /**
    * @property {string} name - The user defined name given to this Material.
    * @default
    */
    this.name = name;
  }
}
