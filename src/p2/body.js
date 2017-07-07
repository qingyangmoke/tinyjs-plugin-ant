import { default as InversePointProxy } from './InversePointProxy';
import * as P2Math from '../core/math';
import { default as BodyDebug } from './BodyDebug';

const p2 = require('./p2');
/**
 * Dynamic body. Dynamic bodies body can move and respond to collisions and forces.
 * @property DYNAMIC
 * @type {Number}
 * @static
 */
const DYNAMIC = 1;

/**
 * Static body. Static bodies do not move, and they do not respond to forces or collision.
 * @property STATIC
 * @type {Number}
 * @static
 */
const STATIC = 2;

/**
* @class Tiny.Physics.P2.Body
* @constructor
* @param {Tiny.Physics.P2.World} world - world reference to the currently running world.
* @param {Tiny.Sprite} [sprite] - The Sprite object this physics body belongs to.
* @param {number} [x=0] - The x coordinate of this Body.
* @param {number} [y=0] - The y coordinate of this Body.
* @param {number} [mass=1] - The default mass of this Body (0 = static).
*/
export default class Body extends Tiny.EventEmitter {
  constructor(world, sprite, x, y, mass) {
    super();
    sprite = sprite || null;
    x = x || 0;
    y = y || 0;
    if (mass === undefined) { mass = 1; }

    /**
       * @property {Tiny.Physics.P2} world - Local reference to the P2 World.
       */
    this.world = world;

    /**
    * @property {Tiny.Application} app - Local reference to app.
    */
    this.app = this.world.app;

    /**
    * @property {Tiny.Sprite} sprite - Reference to the parent Sprite.
    */
    this.sprite = sprite;

    /**
    * @property {number} type - The type of physics system this body belongs to.
    */
    this.type = 'Tiny.Physics.P2.Body';

    /**
    * @property {Tiny.Point} offset - The offset of the Physics Body from the Sprite x/y position.
    */
    this.offset = new Tiny.Point();

    /**
    * @property {p2.Body} data - The p2 Body data.
    * @protected
    */
    this.data = new p2.Body({
      position: [this.world.pxmi(x), this.world.pxmi(y)],
      mass: mass
    });

    this.data.parent = this;

    /**
    * @property {Tiny.Physics.P2.InversePointProxy} velocity - The velocity of the body. Set velocity.x to a negative value to move to the left, position to the right. velocity.y negative values move up, positive move down.
    */
    this.velocity = new InversePointProxy(this.world, this.data.velocity);

    /**
    * 作用力。刚体在线性速度方向上收到的扭力
    * @property {Tiny.Physics.P2.InversePointProxy} force - The force applied to the body.
    */
    this.force = new InversePointProxy(this.world, this.data.force);

    /**
    * @property {array} collidesWith - Array of CollisionGroups that this Bodies shapes collide with.
    */
    this.collidesWith = [];

    /**
    * @property {boolean} removeNextStep - To avoid deleting this body during a physics step, and causing all kinds of problems, set removeNextStep to true to have it removed in the next preUpdate.
    */
    this.removeNextStep = false;

    /**
    * @property {Tiny.Physics.P2.BodyDebug} debugBody - Reference to the debug body.
    */
    this.debugBody = null;

    /**
    * @property {boolean} dirty - Internally used by Sprite.x/y
    */
    this.dirty = false;

    /**
    * @property {boolean} _collideWorldBounds - Internal var that determines if this Body collides with the world bounds or not.
    * @private
    */
    this._collideWorldBounds = true;

    /**
    * @property {object} _bodyCallbacks - Array of Body callbacks.
    * @private
    */
    this._bodyCallbacks = {};

    /**
    * @property {object} _bodyCallbackContext - Array of Body callback contexts.
    * @private
    */
    this._bodyCallbackContext = {};

    /**
    * @property {object} _groupCallbacks - Array of Group callbacks.
    * @private
    */
    this._groupCallbacks = {};

    /**
    * @property {object} _bodyCallbackContext - Array of Grouo callback contexts.
    * @private
    */
    this._groupCallbackContext = {};

    /**
    * @property {boolean} _reset - Internal var.
    * @private
    */
    this._reset = false;

    //  Set-up the default shape
    if (sprite) {
      this.setRectangleFromSprite(sprite);
    }
  }

  /**
   * Gets the collision bitmask from the groups this body collides with.
   *
   * @method Tiny.Physics.P2.Body#getCollisionMask
   * @return {number} The bitmask.
   */
  getCollisionMask() {
    let mask = 0;
    if (this._collideWorldBounds) {
      mask = this.world.boundsCollisionGroup.mask;
    }
    for (let i = 0; i < this.collidesWith.length; i++) {
      mask = mask | this.collidesWith[i].mask;
    }
    return mask;
  }
  /**
  * Updates the collisionMask.
  *
  * @method Tiny.Physics.P2.Body#updateCollisionMask
  * @param {p2.Shape} [shape] - An optional Shape. If not provided the collision group will be added to all Shapes in this Body.
  */
  updateCollisionMask(shape) {
    const mask = this.getCollisionMask();

    if (shape === undefined) {
      for (let i = this.data.shapes.length - 1; i >= 0; i--) {
        this.data.shapes[i].collisionMask = mask;
      }
    } else {
      shape.collisionMask = mask;
    }
  }

  /**
  * Sets the given CollisionGroup to be the collision group for all shapes in this Body, unless a shape is specified.
  * This also resets the collisionMask.
  *
  * @method Tiny.Physics.P2.Body#setCollisionGroup
  * @param {Tiny.Physics.CollisionGroup} group - The Collision Group that this Bodies shapes will use.
  * @param {p2.Shape} [shape] - An optional Shape. If not provided the collision group will be added to all Shapes in this Body.
  */
  setCollisionGroup(group, shape) {
    const mask = this.getCollisionMask();
    if (shape === undefined) {
      for (let i = this.data.shapes.length - 1; i >= 0; i--) {
        this.data.shapes[i].collisionGroup = group.mask;
        this.data.shapes[i].collisionMask = mask;
      }
    } else {
      shape.collisionGroup = group.mask;
      shape.collisionMask = mask;
    }
  }

  /**
   * Clears the collision data from the shapes in this Body. Optionally clears Group and/or Mask.
   *
   * @method Tiny.Physics.P2.Body#clearCollision
   * @param {boolean} [clearGroup=true] - Clear the collisionGroup value from the shape/s?
   * @param {boolean} [clearMask=true] - Clear the collisionMask value from the shape/s?
   * @param {p2.Shape} [shape] - An optional Shape. If not provided the collision data will be cleared from all Shapes in this Body.
   */
  clearCollision(clearGroup = true, clearMask = true, shape) {
    if (shape === undefined) {
      for (var i = this.data.shapes.length - 1; i >= 0; i--) {
        if (clearGroup) {
          this.data.shapes[i].collisionGroup = null;
        }
        if (clearMask) {
          this.data.shapes[i].collisionMask = null;
        }
      }
    } else {
      if (clearGroup) {
        shape.collisionGroup = null;
      }
      if (clearMask) {
        shape.collisionMask = null;
      }
    }
    if (clearGroup) {
      this.collidesWith.length = 0;
    }
  }

  /**
  * Removes the given CollisionGroup, or array of CollisionGroups, from the list of groups that this body will collide with and updates the collision masks.
  *
  * @method Tiny.Physics.P2.Body#removeCollisionGroup
  * @param {Tiny.Physics.CollisionGroup|array} group - The Collision Group or Array of Collision Groups that this Bodies shapes should not collide with anymore.
  * @param {boolean} [clearCallback=true] - Clear the callback that will be triggered when this Body impacts with the given Group?
  * @param {p2.Shape} [shape] - An optional Shape. If not provided the updated collision mask will be added to all Shapes in this Body.
  */
  removeCollisionGroup(group, clearCallback = true, shape) {
    let index;

    if (Array.isArray(group)) {
      for (let i = 0; i < group.length; i++) {
        index = this.collidesWith.indexOf(group[i]);
        if (index > -1) {
          this.collidesWith.splice(index, 1);
          if (clearCallback) {
            delete (this._groupCallbacks[group.mask]);
            delete (this._groupCallbackContext[group.mask]);
          }
        }
      }
    } else {
      index = this.collidesWith.indexOf(group);
      if (index > -1) {
        this.collidesWith.splice(index, 1);
        if (clearCallback) {
          delete (this._groupCallbacks[group.mask]);
          delete (this._groupCallbackContext[group.mask]);
        }
      }
    }

    const mask = this.getCollisionMask();
    if (shape === undefined) {
      for (let i = this.data.shapes.length - 1; i >= 0; i--) {
        this.data.shapes[i].collisionMask = mask;
      }
    } else {
      shape.collisionMask = mask;
    }
  }

  /**
   * Adds the given CollisionGroup, or array of CollisionGroups, to the list of groups that this body will collide with and updates the collision masks.
   *
   * @method Tiny.Physics.P2.Body#collides
   * @param {Tiny.Physics.CollisionGroup|array} group - The Collision Group or Array of Collision Groups that this Bodies shapes will collide with.
   * @param {function} [callback] - Optional callback that will be triggered when this Body impacts with the given Group.
   * @param {object} [callbackContext] - The context under which the callback will be called.
   * @param {p2.Shape} [shape] - An optional Shape. If not provided the collision mask will be added to all Shapes in this Body.
   */
  collides(group, callback, callbackContext, shape) {
    if (Array.isArray(group)) {
      for (let i = 0; i < group.length; i++) {
        if (this.collidesWith.indexOf(group[i]) === -1) {
          this.collidesWith.push(group[i]);
          if (callback) {
            this.createGroupCallback(group[i], callback, callbackContext);
          }
        }
      }
    } else {
      if (this.collidesWith.indexOf(group) === -1) {
        this.collidesWith.push(group);
        if (callback) {
          this.createGroupCallback(group, callback, callbackContext);
        }
      }
    }

    const mask = this.getCollisionMask();
    if (shape === undefined) {
      for (let i = this.data.shapes.length - 1; i >= 0; i--) {
        this.data.shapes[i].collisionMask = mask;
      }
    } else {
      shape.collisionMask = mask;
    }
  }

  /**
   * Sets a callback to be fired any time a shape in this Body impacts with a shape in the given Body. The impact test is performed against body.id values.
   * The callback will be sent 4 parameters: This body, the body that impacted, the Shape in this body and the shape in the impacting body.
   * Note that the impact event happens after collision resolution, so it cannot be used to prevent a collision from happening.
   * It also happens mid-step. So do not destroy a Body during this callback, instead set safeDestroy to true so it will be killed on the next preUpdate.
   *
   * @method Tiny.Physics.P2.Body#createBodyCallback
   * @param {Tiny.Sprite|Tiny.Physics.P2.Body|p2.Body} object - The object to send impact events for.
   * @param {function} callback - The callback to fire on impact. Set to null to clear a previously set callback.
   * @param {object} callbackContext - The context under which the callback will fire.
   */
  createBodyCallback(object, callback, callbackContext) {
    let id = -1;

    if (object['id']) {
      id = object.id;
    } else if (object['body']) {
      id = object.body.id;
    }

    if (id > -1) {
      if (callback === null) {
        delete (this._bodyCallbacks[id]);
        delete (this._bodyCallbackContext[id]);
      } else {
        this._bodyCallbacks[id] = callback;
        this._bodyCallbackContext[id] = callbackContext;
      }
    }
  }
  /**
   * Sets a callback to be fired any time this Body impacts with the given Group. The impact test is performed against shape.collisionGroup values.
   * The callback will be sent 4 parameters: This body, the body that impacted, the Shape in this body and the shape in the impacting body.
   * This callback will only fire if this Body has been assigned a collision group.
   * Note that the impact event happens after collision resolution, so it cannot be used to prevent a collision from happening.
   * It also happens mid-step. So do not destroy a Body during this callback, instead set safeDestroy to true so it will be killed on the next preUpdate.
   *
   * @method Tiny.Physics.P2.Body#createGroupCallback
   * @param {Tiny.Physics.CollisionGroup} group - The Group to send impact events for.
   * @param {function} callback - The callback to fire on impact. Set to null to clear a previously set callback.
   * @param {object} callbackContext - The context under which the callback will fire.
   */
  createGroupCallback(group, callback, callbackContext) {
    if (callback === null) {
      delete (this._groupCallbacks[group.mask]);
      delete (this._groupCallbackContext[group.mask]);
    } else {
      this._groupCallbacks[group.mask] = callback;
      this._groupCallbackContext[group.mask] = callbackContext;
    }
  }

  /**
  * Apply damping, see http://code.google.com/p/bullet/issues/detail?id=74 for details.
  *
  * @method Tiny.Physics.P2.Body#applyDamping
  * @param {number} dt - Current time step.
  */
  applyDamping(dt) {
    this.data.applyDamping(dt);
  }

  /**
   * Apply impulse to a point relative to the body.
   * This could for example be a point on the Body surface. An impulse is a force added to a body during a short
   * period of time (impulse = force * time). Impulses will be added to Body.velocity and Body.angularVelocity.
   *
   * @method Tiny.Physics.P2.Body#applyImpulse
   * @param {Float32Array|Array} impulse - The impulse vector to add, oriented in world space.
   * @param {number} worldX - A point relative to the body in world space. If not given, it is set to zero and all of the impulse will be exerted on the center of mass.
   * @param {number} worldY - A point relative to the body in world space. If not given, it is set to zero and all of the impulse will be exerted on the center of mass.
   */
  applyImpulse(impulse, worldX, worldY) {
    this.data.applyImpulse(impulse, [this.world.pxmi(worldX), this.world.pxmi(worldY)]);
  }

  /**
   * Apply impulse to a point local to the body.
   *
   * This could for example be a point on the Body surface. An impulse is a force added to a body during a short
   * period of time (impulse = force * time). Impulses will be added to Body.velocity and Body.angularVelocity.
   *
   * @method Tiny.Physics.P2.Body#applyImpulseLocal
   * @param {Float32Array|Array} impulse - The impulse vector to add, oriented in local space.
   * @param {number} localX - A local point on the body.
   * @param {number} localY - A local point on the body.
   */
  applyImpulseLocal(impulse, localX, localY) {
    this.data.applyImpulseLocal(impulse, [this.world.pxmi(localX), this.world.pxmi(localY)]);
  }

  /**
  * Apply force to a world point.
  *
  * This could for example be a point on the RigidBody surface. Applying force
  * this way will add to Body.force and Body.angularForce.
  *
  * @method Tiny.Physics.P2.Body#applyForce
  * @param {Float32Array|Array} force - The force vector to add.
  * @param {number} worldX - The world x point to apply the force on.
  * @param {number} worldY - The world y point to apply the force on.
  */
  applyForce(force, worldX, worldY) {
    this.data.applyForce(force, [this.world.pxmi(worldX), this.world.pxmi(worldY)]);
  }

  /**
   * Adds a Rectangle shape to this Body. You can control the offset from the center of the body and the rotation.
   *
   * @method Tiny.Physics.P2.Body#addRectangle
   * @param {number} width - The width of the rectangle in pixels.
   * @param {number} height - The height of the rectangle in pixels.
   * @param {number} [offsetX=0] - Local horizontal offset of the shape relative to the body center of mass.
   * @param {number} [offsetY=0] - Local vertical offset of the shape relative to the body center of mass.
   * @param {number} [rotation=0] - Local rotation of the shape relative to the body center of mass, specified in radians.
   * @return {p2.Box} The shape that was added to the Body.
   */
  addRectangle(width, height, offsetX, offsetY, rotation) {
    const shape = new p2.Box({
      width: this.world.pxm(width),
      height: this.world.pxm(height),
    });
    return this.addShape(shape, offsetX, offsetY, rotation);
  }

  /**
  * Reads a polygon shape path, and assembles convex shapes from that and puts them at proper offset points. The shape must be simple and without holes.
  * This function expects the x.y values to be given in pixels. If you want to provide them at p2 world scales then call Body.data.fromPolygon directly.
  *
  * @method Tiny.Physics.P2.Body#addPolygon
  * @param {object} options - An object containing the build options:
  * @param {boolean} [options.optimalDecomp=false] - Set to true if you need optimal decomposition. Warning: very slow for polygons with more than 10 vertices.
  * @param {boolean} [options.skipSimpleCheck=false] - Set to true if you already know that the path is not intersecting itself.
  * @param {boolean|number} [options.removeCollinearPoints=false] - Set to a number (angle threshold value) to remove collinear points, or false to keep all points.
  * @param {(number[]|...number)} points - An array of 2d vectors that form the convex or concave polygon.
  *                                       Either [[0,0], [0,1],...] or a flat array of numbers that will be interpreted as [x,y, x,y, ...],
  *                                       or the arguments passed can be flat x,y values e.g. `setPolygon(options, x,y, x,y, x,y, ...)` where `x` and `y` are numbers.
  * @return {boolean} True on success, else false.
  */
  addPolygon(options, points) {
    options = options || {};
    if (!Array.isArray(points)) {
      points = Array.prototype.slice.call(arguments, 1);
    }
    let path = [];
    //  Did they pass in a single array of points?
    if (points.length === 1 && Array.isArray(points[0])) {
      path = points[0].slice(0);
    } else if (Array.isArray(points[0])) {
      path = points.slice();
    } else if (typeof points[0] === 'number') {
      //  We've a list of numbers
      for (let i = 0, len = points.length; i < len; i += 2) {
        path.push([points[i], points[i + 1]]);
      }
    }
    //  top and tail
    const idx = path.length - 1;
    if (path[idx][0] === path[0][0] && path[idx][1] === path[0][1]) {
      path.pop();
    }
    //  Now process them into p2 values
    for (let p = 0; p < path.length; p++) {
      path[p][0] = this.world.pxmi(path[p][0]);
      path[p][1] = this.world.pxmi(path[p][1]);
    }
    const result = this.data.fromPolygon(path, options);
    this.shapeChanged();
    return result;
  }

  /**
  * Adds a Circle shape to this Body. You can control the offset from the center of the body and the rotation.
  *
  * @method Tiny.Physics.P2.Body#addCircle
  * @param {number} radius - The radius of this circle (in pixels)
  * @param {number} [offsetX=0] - Local horizontal offset of the shape relative to the body center of mass.
  * @param {number} [offsetY=0] - Local vertical offset of the shape relative to the body center of mass.
  * @param {number} [rotation=0] - Local rotation of the shape relative to the body center of mass, specified in radians.
  * @return {p2.Circle} The Circle shape that was added to the Body.
  */
  addCircle(radius, offsetX, offsetY, rotation) {
    const shape = new p2.Circle({ radius: this.world.pxm(radius) });
    return this.addShape(shape, offsetX, offsetY, rotation);
  }

  /**
   * Adds a Plane shape to this Body. The plane is facing in the Y direction. You can control the offset from the center of the body and the rotation.
   *
   * @method Tiny.Physics.P2.Body#addPlane
   * @param {number} [offsetX=0] - Local horizontal offset of the shape relative to the body center of mass.
   * @param {number} [offsetY=0] - Local vertical offset of the shape relative to the body center of mass.
   * @param {number} [rotation=0] - Local rotation of the shape relative to the body center of mass, specified in radians.
   * @return {p2.Plane} The Plane shape that was added to the Body.
   */
  addPlane(offsetX, offsetY, rotation) {
    const shape = new p2.Plane();
    return this.addShape(shape, offsetX, offsetY, rotation);
  }

  /**
  * Adds a Particle shape to this Body. You can control the offset from the center of the body and the rotation.
  *
  * @method Tiny.Physics.P2.Body#addParticle
  * @param {number} [offsetX=0] - Local horizontal offset of the shape relative to the body center of mass.
  * @param {number} [offsetY=0] - Local vertical offset of the shape relative to the body center of mass.
  * @param {number} [rotation=0] - Local rotation of the shape relative to the body center of mass, specified in radians.
  * @return {p2.Particle} The Particle shape that was added to the Body.
  */
  addParticle(offsetX = 0, offsetY = 0, rotation = 0) {
    const shape = new p2.Particle();
    return this.addShape(shape, offsetX, offsetY, rotation);
  }

  /**
  * Adds a Line shape to this Body.
  * The line shape is along the x direction, and stretches from [-length/2, 0] to [length/2,0].
  * You can control the offset from the center of the body and the rotation.
  *
  * @method Tiny.Physics.P2.Body#addLine
  * @param {number} length - The length of this line (in pixels)
  * @param {number} [offsetX=0] - Local horizontal offset of the shape relative to the body center of mass.
  * @param {number} [offsetY=0] - Local vertical offset of the shape relative to the body center of mass.
  * @param {number} [rotation=0] - Local rotation of the shape relative to the body center of mass, specified in radians.
  * @return {p2.Line} The Line shape that was added to the Body.
  */
  addLine(length, offsetX = 0, offsetY = 0, rotation = 0) {
    const shape = new p2.Line({ length: this.world.pxm(length) });
    return this.addShape(shape, offsetX, offsetY, rotation);
  }

  /**
 * Adds a Capsule shape to this Body.
 * You can control the offset from the center of the body and the rotation.
 *
 * @method Tiny.Physics.P2.Body#addCapsule
 * @param {number} length - The distance between the end points in pixels.
 * @param {number} radius - Radius of the capsule in pixels.
 * @param {number} [offsetX=0] - Local horizontal offset of the shape relative to the body center of mass.
 * @param {number} [offsetY=0] - Local vertical offset of the shape relative to the body center of mass.
 * @param {number} [rotation=0] - Local rotation of the shape relative to the body center of mass, specified in radians.
 * @return {p2.Capsule} The Capsule shape that was added to the Body.
 */
  addCapsule(length, radius, offsetX = 0, offsetY = 0, rotation = 0) {
    const shape = new p2.Capsule({ length: this.world.pxm(length), radius: this.world.pxm(radius) });
    return this.addShape(shape, offsetX, offsetY, rotation);
  }

  /**
  * Add a shape to the body. You can pass a local transform when adding a shape, so that the shape gets an offset and an angle relative to the body center of mass.
  * Will automatically update the mass properties and bounding radius.
  * If this Body had a previously set Collision Group you will need to re-apply it to the new Shape this creates.
  *
  * @method P2Body#addShape
  * @param {p2.Shape} shape - The shape to add to the body.
  * @param {number} [offsetX=0] - Local horizontal offset of the shape relative to the body center of mass.
  * @param {number} [offsetY=0] - Local vertical offset of the shape relative to the body center of mass.
  * @param {number} [rotation=0] - Local rotation of the shape relative to the body center of mass, specified in radians.
  * @return {p2.Shape} The shape that was added to the body.
  */
  addShape(shape, offsetX = 0, offsetY = 0, rotation = 0) {
    this.data.addShape(shape, [this.world.pxmi(offsetX), this.world.pxmi(offsetY)], rotation);
    this.shapeChanged();
    return shape;
  }

  /**
  * Remove a shape from the body. Will automatically update the mass properties and bounding radius.
  *
  * @method Tiny.Physics.P2.Body#removeShape
  * @param {p2.Circle|p2.Rectangle|p2.Plane|p2.Line|p2.Particle} shape - The shape to remove from the body.
  * @return {boolean} True if the shape was found and removed, else false.
  */
  removeShape(shape) {
    const result = this.data.removeShape(shape);
    this.shapeChanged();
    return result;
  }

  /**
  * Clears any previously set shapes. Then creates a new Circle shape and adds it to this Body.
  * If this Body had a previously set Collision Group you will need to re-apply it to the new Shape this creates.
  *
  * @method Tiny.Physics.P2.Body#setCircle
  * @param {number} radius - The radius of this circle (in pixels)
  * @param {number} [offsetX=0] - Local horizontal offset of the shape relative to the body center of mass.
  * @param {number} [offsetY=0] - Local vertical offset of the shape relative to the body center of mass.
  * @param {number} [rotation=0] - Local rotation of the shape relative to the body center of mass, specified in radians.
  */
  setCircle(radius, offsetX = 0, offsetY = 0, rotation = 0) {
    this.clearShapes();
    return this.addCircle(radius, offsetX, offsetY, rotation);
  }
  /**
    * Clears any previously set shapes. The creates a new Rectangle shape at the given size and offset, and adds it to this Body.
    * If you wish to create a Rectangle to match the size of a Sprite or Image see Body.setRectangleFromSprite.
    * If this Body had a previously set Collision Group you will need to re-apply it to the new Shape this creates.
    *
    * @method Tiny.Physics.P2.Body#setRectangle
    * @param {number} [width=16] - The width of the rectangle in pixels.
    * @param {number} [height=16] - The height of the rectangle in pixels.
    * @param {number} [offsetX=0] - Local horizontal offset of the shape relative to the body center of mass.
    * @param {number} [offsetY=0] - Local vertical offset of the shape relative to the body center of mass.
    * @param {number} [rotation=0] - Local rotation of the shape relative to the body center of mass, specified in radians.
    * @return {p2.Rectangle} The Rectangle shape that was added to the Body.
    */
  setRectangle(width = 16, height = 16, offsetX = 0, offsetY = 0, rotation = 0) {
    this.clearShapes();
    return this.addRectangle(width, height, offsetX, offsetY, rotation);
  }

  /**
    * 清除掉之前设置的body形状 然后根据给定的sprite设置一个矩形添加的p2.Body中
    * Clears any previously set shapes.
    * Then creates a Rectangle shape sized to match the dimensions and orientation of the Sprite given.
    * If no Sprite is given it defaults to using the parent of this Body.
    * If this Body had a previously set Collision Group you will need to re-apply it to the new Shape this creates.
    *
    * @method Tiny.Physics.P2.Body#setRectangleFromSprite
    * @param {Tiny.Sprite} [sprite] - The Sprite on which the Rectangle will get its dimensions.
    * @return {p2.Rectangle} The Rectangle shape that was added to the Body.
    */
  setRectangleFromSprite(sprite) {
    if (sprite === undefined) {
      sprite = this.sprite;
    }

    this.clearShapes();

    return this.addRectangle(sprite.width, sprite.height, 0, 0, sprite.rotation);
  }

  /**
    * Adds the given Material to all Shapes that belong to this Body.
    * If you only wish to apply it to a specific Shape in this Body then provide that as the 2nd parameter.
    *
    * @method Tiny.Physics.P2.Body#setMaterial
    * @param {p2.Material} material - The Material that will be applied.
    * @param {p2.Shape} [shape] - An optional Shape. If not provided the Material will be added to all Shapes in this Body.
    */
  setMaterial(material, shape) {
    if (shape === undefined) {
      for (let i = this.data.shapes.length - 1; i >= 0; i--) {
        this.data.shapes[i].material = material;
      }
    } else {
      shape.material = material;
    }
  }

  /**
  * Reads the shape data from a physics data file stored in the Game.Cache and adds it as a polygon to this Body.
  *
  * As well as reading the data from the Cache you can also pass `null` as the first argument and a
  * physics data object as the second. When doing this you must ensure the structure of the object is correct in advance.
  *
  * For more details see the format of the Lime / Corona Physics Editor export.
  *
  * @method Tiny.Physics.P2.Body#loadPolygon
  * @param {string|object} object - The key of the object within the Physics data file that you wish to load the shape data from,
  *     or if key is null pass the actual physics data object itself as this parameter.
  * @param {boolean} clear - 是否清除之前添加的shape 默认是清除
  * @return {boolean} True on success, else false.
  */
  loadPolygon(object, clear = true) {
    if (clear) {
      this.clearShapes();
    }
    const data = object;

    //  We've multiple Convex shapes, they should be CCW automatically
    const cm = p2.vec2.create();

    for (let i = 0; i < data.length; i++) {
      const vertices = [];

      for (let s = 0; s < data[i].shape.length; s += 2) {
        vertices.push([this.world.pxmi(data[i].shape[s]), this.world.pxmi(data[i].shape[s + 1])]);
      }

      const c = new p2.Convex({ vertices });

      // Move all vertices so its center of mass is in the local center of the convex
      for (let j = 0; j !== c.vertices.length; j++) {
        const v = c.vertices[j];
        p2.vec2.sub(v, v, c.centerOfMass);
      }

      p2.vec2.scale(cm, c.centerOfMass, 1);

      cm[0] -= this.world.pxmi(this.sprite.width / 2);
      cm[1] -= this.world.pxmi(this.sprite.height / 2);

      c.updateTriangles();
      c.updateCenterOfMass();
      c.updateBoundingRadius();

      this.data.addShape(c, cm);
    }

    this.data.aabbNeedsUpdate = true;
    this.shapeChanged();

    return true;
  }

  /**
   * 清空body中已添加的shape
   */
  clearShapes() {
    let i = this.data.shapes.length;
    while (i--) {
      this.data.removeShape(this.data.shapes[i]);
    }
    this.shapeChanged();
  }

  /**
   * 当时添加或者删除shape的时候会触发
   */
  shapeChanged() {
    if (this.debugBody) {
      this.debugBody.draw();
    }
    // [feature] 每次形状改变的时候就应该去改变mask
    // this.updateCollisionMask();
    this.dispatch('shapeChanged', this);
  }

  /**
  * Internal method. This is called directly before the sprites are sent to the renderer and after the update function has finished.
  *
  * @method Tiny.Physics.P2.Body#preUpdate
  * @protected
  */
  preUpdate() {
    this.dirty = true;
    if (this.removeNextStep) {
      this.removeFromWorld();
      this.removeNextStep = false;
    }
  }

  /**
  * Internal method. This is called directly before the sprites are sent to the renderer and after the update function has finished.
  *
  * @method Tiny.Physics.P2.Body#postUpdate
  * @protected
  */
  postUpdate() {
    this.sprite.x = this.world.mpxi(this.data.position[0]) + this.offset.x;
    this.sprite.y = this.world.mpxi(this.data.position[1]) + this.offset.y;

    if (!this.fixedRotation) {
      this.sprite.rotation = this.data.angle;
    } else {
      //[feature] 如果设置了fixedRotation  那么物理系统中不改变实际物体的角度 角度以实际sprite.rotation为主
      this.data.angle = this.sprite.rotation;
    }

    if (this.debugBody) {
      this.debugBody.updateSpriteTransform();
    }

    this.dirty = false;
  }

  /**
   * Adds this physics body to the world.
   *
   * @method Tiny.Physics.P2.Body#addToWorld
   */
  addToWorld() {
    // if (this.data.world !== this.world.world) {
    this.world.addBody(this);
    // }
  }

  /**
   * 将body从物理系统删除，从而也解除了sprite的物理属性
   */
  removeFromWorld() {
    if (this.data.world === this.world.world) {
      this.world.removeBodyNextStep(this);
    }
  }

  /**
  * Destroys this Body and all references it holds to other objects.
  *
  * @method Tiny.Physics.P2.Body#destroy
  */
  destroy() {
    this.removeFromWorld();

    this.clearShapes();

    this._bodyCallbacks = {};
    this._bodyCallbackContext = {};
    this._groupCallbacks = {};
    this._groupCallbackContext = {};

    if (this.debugBody) {
      this.debugBody.destroy(true, true);
    }

    this.debugBody = null;

    if (this.sprite) {
      this.sprite.body = null;
      this.sprite = null;
    }
  }

  get angle() {
    return P2Math.wrapAngle(P2Math.radToDeg(this.data.angle));
  }

  /**
   * 角度 p2的angle使用的是弧度单位，这里转换成角度单位
   * The angle of the body, in degree.
   * @property angle
   * @type {number}
   */
  set angle(value) {
    this.data.angle = P2Math.degToRad(P2Math.wrapAngle(value));
  }

  get mass() {
    return this.data.mass;
  }

  /**
  * 刚体的质量，用于作用力等需要质量的公式运算
  * 质量 - 具体参考p2.body.mass
  * @name Tiny.Physics.P2.Body#mass
  * @property {number} mass - The mass of the body.
  */
  set mass(value) {
    if (value !== this.data.mass) {
      this.data.mass = value;
      this.data.updateMassProperties();
    }
  }

  get static() {
    return (this.data.type === STATIC);
  }

  /**
   * 具体参考p2.body.type 以下注释从p2代码注释中拷贝过来
   * The type of motion this body has. Should be one of: {{#crossLink "Body/STATIC:property"}}Body.STATIC{{/crossLink}}, {{#crossLink "Body/DYNAMIC:property"}}Body.DYNAMIC{{/crossLink}} and {{#crossLink "Body/KINEMATIC:property"}}Body.KINEMATIC{{/crossLink}}.
   *
   * * Static bodies do not move, and they do not respond to forces or collision.
   * * Dynamic bodies body can move and respond to collisions and forces.
   * * Kinematic bodies only moves according to its .velocity, and does not respond to collisions or force.
   *
   * @property type
   * @type {number} value  - default is true
   */
  set static(value) {
    if (value && this.data.type !== STATIC) {
      this.data.type = STATIC;
      this.mass = 0;
    } else if (!value && this.data.type === STATIC) {
      this.data.type = DYNAMIC;
      this.mass = 1;
    }
  }

  /**
   * @name Tiny.Physics.P2Body#allowSleep
   * @property {boolean} allowSleep - 是否允许休眠
   */
  get allowSleep() {
    return this.data.allowSleep;
  }

  /**
   * @name Tiny.Physics.P2Body#allowSleep
   * @property {boolean} allowSleep - 是否允许休眠
   */
  set allowSleep(value) {
    if (value !== this.data.allowSleep) {
      this.data.allowSleep = value;
    }
  }

  get angularVelocity() {
    return this.data.angularVelocity;
  }

  /**
   * 具体参考p2.body.angularVelocity
   * The angular velocity of the body, in radians per second.
   * @name Tiny.Physics.P2.Body#angularVelocity
   * @property {number} angularVelocity
   */
  set angularVelocity(value) {
    this.data.angularVelocity = value;
  }

  get fixedRotation() {
    return this.data.fixedRotation;
  }

  /**
   * [feature] 如果设置了fixedRotation  那么物理系统中不改变实际物体的角度 角度以实际sprite.rotation为主
   * 具体参考p2.body.fixedRotation
   * @name Tiny.Physics.P2.Body#fixedRotation
   * @property {number} fixedRotation - Set to true if you want to fix the rotation of the body.
   */
  set fixedRotation(value) {
    if (value !== this.data.fixedRotation) {
      this.data.fixedRotation = value;
    }
  }

  get inertia() {
    return this.data.inertia;
  }

  /**
   * 刚体在角速度上的惯性，值越大惯性越大
   * 惯量 - 具体参考p2.body.inertia
   * @name Tiny.Physics.P2.Body#inertia
   * @property {number} inertia - The inertia of the body around the Z axis..
   */
  set inertia(value) {
    this.data.inertia = value;
  }

  get x() {
    return this.world.mpxi(this.data.position[0]);
  }

  /**
   * @name Tiny.Physics.P2.Body#y
   * @property {number} x - The x coordinate of this Body.
   */
  set x(value) {
    this.data.position[0] = this.world.pxmi(value);
  }

  get y() {
    return this.world.mpxi(this.data.position[1]);
  }

  /**
  * @name Tiny.Physics.P2.Body#y
  * @property {number} y - The y coordinate of this Body.
  */
  set y(value) {
    this.data.position[1] = this.world.pxmi(value);
  }

  /**
   * @name Tiny.Physics.P2.Body#id
   * @property {number} id - 引用p2.body的id.
   */
  get id() {
    return this.data.id;
  }

  get damping() {
    return this.data.damping;
  }

  /**
  * 速度阻尼。刚体在线性速度方向上收到的阻尼
  * Damping isspecified as a value between 0 and 1, which is the proportion of velocity lost per second.
  * @name Tiny.Physics.P2.Body#damping
  * @property {number} damping - The linear damping acting on the body in the velocity direction.
  */
  set damping(value) {
    this.data.damping = value;
  }

  /**
  * Damping is specified as a value between 0 and 1, which is the proportion of velocity lost per second.
  * @name Tiny.Physics.P2.Body#angularDamping
  * @property {number} angularDamping - The angular damping acting acting on the body.
  */
  get angularDamping() {
    return this.data.angularDamping;
  }

  set angularDamping(value) {
    this.data.angularDamping = value;
  }

  /**
    * 触发指定事件事件
    * @param {String} eventName
    * @param {any} eventData
    */
  dispatch(eventName, ...args) {
    // this.emit(eventName, args);
    this.emit.apply(this, arguments);
  }

  /**
  *  from p2 demo Body will feel sleepy if speed less than this value (speed is the norm of velocity)
  * @name Tiny.Physics.P2.Body#sleepSpeedLimit
  * @property {number} sleepSpeedLimit - .
  */
  get sleepSpeedLimit() {
    return this.data.sleepSpeedLimit;
  }

  set sleepSpeedLimit(value) {
    this.data.sleepSpeedLimit = value;
  }

  /**
  * Sets the force on the body to zero.
  *
  * @method Tiny.Physics.P2.Body#setZeroForce
  */
  setZeroForce() {
    this.data.setZeroForce();
  }

  /**
  * If this Body is dynamic then this will zero its angular velocity.
  *
  * @method Tiny.Physics.P2.Body#setZeroRotation
  */
  setZeroRotation() {
    this.data.angularVelocity = 0;
  }

  /**
  * If this Body is dynamic then this will zero its velocity on both axis.
  *
  * @method Tiny.Physics.P2.Body#setZeroVelocity
  */
  setZeroVelocity() {
    this.data.velocity[0] = 0;
    this.data.velocity[1] = 0;
  }

  /**
  * Sets the Body damping and angularDamping to zero.
  *
  * @method Tiny.Physics.P2.Body#setZeroDamping
  */
  setZeroDamping() {
    this.damping = 0;
    this.angularDamping = 0;
  }

  /**
  * Moves the Body forwards based on its current angle and the given speed.
  * The speed is represented in pixels per second. So a value of 100 would move 100 pixels in 1 second (1000ms).
  *
  * @method Tiny.Physics.P2.Body#moveForward
  * @param {number} speed - The speed at which it should move forwards.
  */
  moveForward(speed) {
    const magnitude = this.world.pxmi(-speed);
    const angle = this.data.angle + Math.PI / 2;

    this.data.velocity[0] = magnitude * Math.cos(angle);
    this.data.velocity[1] = magnitude * Math.sin(angle);
  }

  /**
  * Moves the Body backwards based on its current angle and the given speed.
  * The speed is represented in pixels per second. So a value of 100 would move 100 pixels in 1 second (1000ms).
  *
  * @method Tiny.Physics.P2.Body#moveBackward
  * @param {number} speed - The speed at which it should move backwards.
  */
  moveBackward(speed) {
    const magnitude = this.world.pxmi(-speed);
    const angle = this.data.angle + Math.PI / 2;

    this.data.velocity[0] = -(magnitude * Math.cos(angle));
    this.data.velocity[1] = -(magnitude * Math.sin(angle));
  }

  /**
  * If this Body is dynamic then this will move it to the left by setting its x velocity to the given speed.
  * The speed is represented in pixels per second. So a value of 100 would move 100 pixels in 1 second (1000ms).
  *
  * @method Tiny.Physics.P2.Body#moveLeft
  * @param {number} speed - The speed at which it should move to the left, in pixels per second.
  */
  moveLeft(speed) {
    this.data.velocity[0] = this.world.pxmi(-speed);
  }

  /**
  * If this Body is dynamic then this will move it to the right by setting its x velocity to the given speed.
  * The speed is represented in pixels per second. So a value of 100 would move 100 pixels in 1 second (1000ms).
  *
  * @method Tiny.Physics.P2.Body#moveRight
  * @param {number} speed - The speed at which it should move to the right, in pixels per second.
  */
  moveRight(speed) {
    this.data.velocity[0] = this.world.pxmi(speed);
  }

  /**
  * If this Body is dynamic then this will move it up by setting its y velocity to the given speed.
  * The speed is represented in pixels per second. So a value of 100 would move 100 pixels in 1 second (1000ms).
  *
  * @method Tiny.Physics.P2.Body#moveUp
  * @param {number} speed - The speed at which it should move up, in pixels per second.
  */
  moveUp(speed) {
    this.data.velocity[1] = this.world.pxmi(-speed);
  }

  /**
  * If this Body is dynamic then this will move it down by setting its y velocity to the given speed.
  * The speed is represented in pixels per second. So a value of 100 would move 100 pixels in 1 second (1000ms).
  *
  * @method Tiny.Physics.P2.Body#moveDown
  * @param {number} speed - The speed at which it should move down, in pixels per second.
  */
  moveDown(speed) {
    this.data.velocity[1] = this.world.pxmi(speed);
  }

  get debug() {
    return (this.debugBody !== null);
  }

  /**
   * 是否开启Body的调试模式
   * @param {boolean} - true 开启调试模式 false 取消调试模式
   */
  set debug(value) {
    if (value && !this.debugBody) {
      this.debugBody = new BodyDebug(this);
    } else if (!value && this.debugBody) {
      this.debugBody.destroy();
      this.debugBody = null;
    }
  }

  get collideWorldBounds() {
    return this._collideWorldBounds;
  }

  set collideWorldBounds(value) {
    if (value && !this._collideWorldBounds) {
      this._collideWorldBounds = true;
      this.updateCollisionMask();
    } else if (!value && this._collideWorldBounds) {
      this._collideWorldBounds = false;
      this.updateCollisionMask();
    }
  }
}
