import * as FACING from './facing';
import * as TinyMath from '../core/math';
import * as EVENTS from './EVENTS';
import { default as BodyDebug } from './BodyDebug';
import { default as Bound } from './Bound';

/**
* @class Tiny.Physics.Ant.Body
* @constructor
* @param {Tiny.Physics.Ant.World} world - world reference to the currently running world.
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
    /**
      * @property {Tiny.Physics.Ant} world - Ant.World引用
      */
    this.world = world;

    /**
    * @property {Tiny.Application} app - Tiny application引用.
    */
    this.app = this.world.app;

    /**
    * @property {Tiny.Sprite} sprite - body所属sprite.
    */
    this.sprite = sprite;

    /**
    * @property {String} type - 类型 .
    */
    this.type = 'Tiny.Physics.Ant.Body';

    /**
    * @property {boolean} enable -  是否启用物理特性，false 不启用，不进行任何的碰撞检测，preUpdate,postUpdate都不会被调用.
    * @default
    */
    this.enable = true;

    /**
    * 刚体是否是圆形的 通过setCircle设置后会成为true 不要直接设置
    * @property {boolean} isCircle
    * @default
    * @readOnly
    */
    this.isCircle = false;

    /**
    * 球形半径 setCircle中设置 - 不要直接设置这个变量
    * @property {number} radius
    * @default
    * @readOnly
    */
    this.radius = 0;

    /**
    * @property {Tiny.Point} offset - 物理刚体相对于sprite的偏移
    */
    this.offset = new Tiny.Point();

    /**
    * @property {Tiny.Point} position - 刚体的在屏幕中的位置.
    * @readonly
    */
    this.position = new Tiny.Point(sprite.x, sprite.y);

    /**
    * @property {Tiny.Point} prev - 刚体的上一次的位置，用于计算两次update位置的差异
    * @readonly
    */
    this.prev = new Tiny.Point(this.position.x, this.position.y);

    /**
    * @property {boolean} allowRotation - 是否允许旋转
    * @default
    */
    this.allowRotation = true;

    /**
    * The Body's rotation in degrees, as calculated by its angularVelocity and angularAcceleration. Please understand that the collision Body
    * itself never rotates, it is always axis-aligned. However these values are passed up to the parent Sprite and updates its rotation.
    * @property {number} rotation
    */
    this.rotation = sprite.rotation;

    /**
    * @property {number} preRotation - 上一次旋转的值.
    * @readonly
    */
    this.preRotation = this.rotation;

    /**
    * @property {number} width - 物理刚体的宽度.
    * @readonly
    */
    this.width = sprite.width;

    /**
    * @property {number} height - 物理刚体的高度.
    * @readonly
    */
    this.height = sprite.height;

    /**
    * @property {number} sourceWidth - The un-scaled original size.
    * @readonly
    */
    this.sourceWidth = sprite.width;

    /**
    * @property {number} sourceHeight - The un-scaled original size.
    * @readonly
    */
    this.sourceHeight = sprite.height;

    if (sprite.texture) {
      this.sourceWidth = sprite.texture.frame.width;
      this.sourceHeight = sprite.texture.frame.height;
    }

    /**
    * @property {number} halfWidth - The calculated width / 2 of the physics body.
    * @readonly
    */
    this.halfWidth = Math.abs(sprite.width / 2);

    /**
    * @property {number} halfHeight - The calculated height / 2 of the physics body.
    * @readonly
    */
    this.halfHeight = Math.abs(sprite.height / 2);

    /**
    * @property {Tiny.Point} center - The center coordinate of the Physics Body.
    * @readonly
    */
    this.center = new Tiny.Point(sprite.x + this.halfWidth, sprite.y + this.halfHeight);

    /**
    * @property {Tiny.Point} velocity - The velocity, or rate of change in speed of the Body. Measured in pixels per second.
    */
    this.velocity = new Tiny.Point();

    /**
    * @property {Tiny.Point} newVelocity - The new velocity. Calculated during the Body.preUpdate and applied to its position.
    * @readonly
    */
    this.newVelocity = new Tiny.Point();

    /**
    * @property {Tiny.Point} deltaMax - The Sprite position is updated based on the delta x/y values. You can set a cap on those (both +-) using deltaMax.
    */
    this.deltaMax = new Tiny.Point();

    /**
    * @property {Tiny.Point} acceleration - The acceleration is the rate of change of the velocity. Measured in pixels per second squared.
    */
    this.acceleration = new Tiny.Point();

    /**
    * @property {Tiny.Point} drag - The drag applied to the motion of the Body.
    */
    this.drag = new Tiny.Point();

    /**
    * @property {boolean} allowGravity - Allow this Body to be influenced by gravity? Either world or local.
    * @default
    */
    this.allowGravity = true;

    /**
    * @property {Tiny.Point} gravity - A local gravity applied to this Body. If non-zero this over rides any world gravity, unless Body.allowGravity is set to false.
    */
    this.gravity = new Tiny.Point();

    /**
    * @property {Tiny.Point} bounce - The elasticity of the Body when colliding. bounce.x/y = 1 means full rebound, bounce.x/y = 0.5 means 50% rebound velocity.
    */
    this.bounce = new Tiny.Point();

    this.bounce.x = this.world.restitution;
    this.bounce.y = this.world.restitution;

    /**
    * The elasticity of the Body when colliding with the World bounds.
    * By default this property is `null`, in which case `Body.bounce` is used instead. Set this property
    * to a Tiny.Point object in order to enable a World bounds specific bounce value.
    * @property {Tiny.Point} worldBounce
    */
    this.worldBounce = null;

    /**
    * @property {Tiny.Point} maxVelocity - The maximum velocity in pixels per second sq. that the Body can reach.
    * @default
    */
    this.maxVelocity = new Tiny.Point(10000, 10000);

    /**
    * @property {Tiny.Point} friction - The amount of movement that will occur if another object 'rides' this one.
    */
    this.friction = new Tiny.Point(1, 0);

    /**
    * @property {number} angularVelocity - The angular velocity controls the rotation speed of the Body. It is measured in degrees per second.
    * @default
    */
    this.angularVelocity = 0;

    /**
    * @property {number} angularAcceleration - The angular acceleration is the rate of change of the angular velocity. Measured in degrees per second squared.
    * @default
    */
    this.angularAcceleration = 0;

    /**
    * @property {number} angularDrag - The drag applied during the rotation of the Body. Measured in degrees per second squared.
    * @default
    */
    this.angularDrag = 0;

    /**
    * @property {number} maxAngular - The maximum angular velocity in degrees per second that the Body can reach.
    * @default
    */
    this.maxAngular = 1000;

    /**
    * @property {number} mass - The mass of the Body. When two bodies collide their mass is used in the calculation to determine the exchange of velocity.
    * @default
    */
    this.mass = 1;

    /**
    * @property {number} angle - The angle of the Body's velocity in radians.
    * @readonly
    */
    this.angle = 0;

    /**
    * @property {number} speed - The speed of the Body as calculated by its velocity.
    * @readonly
    */
    this.speed = 0;

    /**
    * @property {number} facing - A const reference to the direction the Body is traveling or facing.
    * @default
    */
    this.facing = FACING.NONE;

    /**
    * @property {boolean} immovable - An immovable Body will not receive any impacts from other bodies.
    * @default
    */
    this.immovable = false;

    /**
    * If you have a Body that is being moved around the world via a tween or a Group motion, but its local x/y position never
    * actually changes, then you should set Body.moves = false. Otherwise it will most likely fly off the screen.
    * If you want the physics system to move the body around, then set moves to true.
    * @property {boolean} moves - Set to true to allow the Physics system to move this Body, otherwise false to move it manually.
    * @default
    */
    this.moves = true;

    /**
    * This flag allows you to disable the custom x separation that takes place by Tiny.Physics.Ant.separate.
    * Used in combination with your own collision processHandler you can create whatever type of collision response you need.
    * @property {boolean} customSeparateX - Use a custom separation system or the built-in one?
    * @default
    */
    this.customSeparateX = false;

    /**
    * This flag allows you to disable the custom y separation that takes place by  Tiny.Physics.Ant.separate.
    * Used in combination with your own collision processHandler you can create whatever type of collision response you need.
    * @property {boolean} customSeparateY - Use a custom separation system or the built-in one?
    * @default
    */
    this.customSeparateY = false;

    /**
    * When this body collides with another, the amount of overlap is stored here.
    * @property {number} overlapX - The amount of horizontal overlap during the collision.
    */
    this.overlapX = 0;

    /**
    * When this body collides with another, the amount of overlap is stored here.
    * @property {number} overlapY - The amount of vertical overlap during the collision.
    */
    this.overlapY = 0;

    /**
    * If `Body.isCircle` is true, and this body collides with another circular body, the amount of overlap is stored here.
    * @property {number} overlapR - The amount of overlap during the collision.
    */
    this.overlapR = 0;

    /**
    * If a body is overlapping with another body, but neither of them are moving (maybe they spawned on-top of each other?) this is set to true.
    * @property {boolean} embedded - Body embed value.
    */
    this.embedded = false;

    /**
    * A Body can be set to collide against the World bounds automatically and rebound back into the World if this is set to true. Otherwise it will leave the World.
    * @property {boolean} collideWorldBounds - Should the Body collide with the World bounds?
    */
    this.collideWorldBounds = false;

    /**
    * Set the checkCollision properties to control which directions collision is processed for this Body.
    * For example checkCollision.up = false means it won't collide when the collision happened while moving up.
    * If you need to disable a Body entirely, use `body.enable = false`, this will also disable motion.
    * If you need to disable just collision and/or overlap checks, but retain motion, set `checkCollision.none = true`.
    * @property {object} checkCollision - An object containing allowed collision.
    */
    this.checkCollision = { none: false, any: true, up: true, down: true, left: true, right: true };

    /**
    * This object is populated with boolean values when the Body collides with another.
    * touching.up = true means the collision happened to the top of this Body for example.
    * @property {object} touching - An object containing touching results.
    */
    this.touching = { none: true, up: false, down: false, left: false, right: false };

    /**
    * This object is populated with previous touching values from the bodies previous collision.
    * @property {object} wasTouching - An object containing previous touching results.
    */
    this.wasTouching = { none: true, up: false, down: false, left: false, right: false };

    /**
    * This object is populated with boolean values when the Body collides with the World bounds or a Tile.
    * For example if blocked.up is true then the Body cannot move up.
    * @property {object} blocked - An object containing on which faces this Body is blocked from moving, if any.
    */
    this.blocked = { up: false, down: false, left: false, right: false };

    /**
    * @property {boolean} dirty - If this Body in a preUpdate (true) or postUpdate (false) state?
    */
    this.dirty = false;

    /**
    * If true the Body will check itself against the Sprite.getBounds() dimensions and adjust its width and height accordingly.
    * If false it will compare its dimensions against the Sprite scale instead, and adjust its width height if the scale has changed.
    * Typically you would need to enable syncBounds if your sprite is the child of a responsive display object such as a FlexLayer,
    * or in any situation where the Sprite scale doesn't change, but its parents scale is effecting the dimensions regardless.
    * @property {boolean} syncBounds
    * @default
    */
    this.syncBounds = false;

    /**
    * @property {boolean} stopVelocityOnCollide - Set by the `moveTo` and `moveFrom` methods.
    */
    this.stopVelocityOnCollide = true;

    /**
    * @property {boolean} _reset - Internal cache var.
    * @private
    */
    this._reset = true;

    /**
    * @property {number} _sx - Internal cache var.
    * @private
    */
    this._sx = sprite.scale.x;

    /**
    * @property {number} _sy - Internal cache var.
    * @private
    */
    this._sy = sprite.scale.y;

    /**
    * @property {number} _dx - Internal cache var.
    * @private
    */
    this._dx = 0;

    /**
    * @property {number} _dy - Internal cache var.
    * @private
    */
    this._dy = 0;

    /**
     * 需要与该Body进行碰撞检测的对象数组 放入该数组会自动完成碰撞检测
     * 该数组中的元素与该body不会重叠 碰撞后会根据物理特性进行位置等改变
     * @property {array} collidesWith - Array of CollisionGroups that this Bodies shapes collide with.
     */
    this.collidesWith = [];

    /**
     * 需要与该Body进重叠交叉检测对象数组 放入该数组会自动完成重叠交叉检测 并不会改变物理特性 物体可以重叠
     * @property {array} collidesWith - Array of CollisionGroups that this Bodies shapes collide with.
     */
    this.overlapsWith = [];

    /**
     * 调试的Body信息
     */
    this.debugBody = null;
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
   * 更新刚体的边界
   * @method Tiny.Physics.Ant.Body#updateBounds
   * @protected
   */
  updateBounds() {
    if (this.syncBounds) {
      const b = this.sprite.getBounds();
      b.ceilAll();

      if (b.width !== this.width || b.height !== this.height) {
        this.width = b.width;
        this.height = b.height;
        this._reset = true;
      }
    } else {
      const asx = Math.abs(this.sprite.scale.x);
      const asy = Math.abs(this.sprite.scale.y);

      if (asx !== this._sx || asy !== this._sy) {
        this.width = this.sourceWidth * asx;
        this.height = this.sourceHeight * asy;
        this._sx = asx;
        this._sy = asy;
        this._reset = true;
      }
    }

    if (this._reset) {
      this.halfWidth = Math.floor(this.width / 2);
      this.halfHeight = Math.floor(this.height / 2);
      this.center.set(this.position.x + this.halfWidth, this.position.y + this.halfHeight);
    }
  }

  /**
  * 私有方法 在更新的时候自动调用 外部请不要调用
  * @private
  * @method Tiny.Physics.Ant.Body#updateMotion
  */
  updateMotion() {
    const body = this;
    const velocityDelta = this.world.computeVelocity(0, body, body.angularVelocity, body.angularAcceleration, body.angularDrag, body.maxAngular) - body.angularVelocity;
    body.angularVelocity += velocityDelta;
    body.rotation += (body.angularVelocity * this.world.physicsElapsed);

    body.velocity.x = this.world.computeVelocity(1, body, body.velocity.x, body.acceleration.x, body.drag.x, body.maxVelocity.x);
    body.velocity.y = this.world.computeVelocity(2, body, body.velocity.y, body.acceleration.y, body.drag.y, body.maxVelocity.y);
  }

  /**
   * 将要更新前做的事情放到这里
   * @protected
   * @method Tiny.Physics.Ant.Body#preUpdate
   */
  preUpdate() {
    if (!this.enable || this.world.paused) {
      return;
    }

    this.dirty = true;

    //  Store and reset collision flags
    this.wasTouching.none = this.touching.none;
    this.wasTouching.up = this.touching.up;
    this.wasTouching.down = this.touching.down;
    this.wasTouching.left = this.touching.left;
    this.wasTouching.right = this.touching.right;

    this.touching.none = true;
    this.touching.up = false;
    this.touching.down = false;
    this.touching.left = false;
    this.touching.right = false;

    this.blocked.up = false;
    this.blocked.down = false;
    this.blocked.left = false;
    this.blocked.right = false;

    this.embedded = false;

    this.updateBounds();

    this.position.x = (this.sprite.x - (this.sprite.anchor.x * this.sprite.width)) + this.sprite.scale.x * this.offset.x;
    this.position.x -= this.sprite.scale.x < 0 ? this.width : 0;

    this.position.y = (this.sprite.y - (this.sprite.anchor.y * this.sprite.height)) + this.sprite.scale.y * this.offset.y;
    this.position.y -= this.sprite.scale.y < 0 ? this.height : 0;

    this.rotation = this.sprite.rotation;

    this.preRotation = this.rotation;

    if (this._reset || this.sprite.fresh) {
      this.prev.x = this.position.x;
      this.prev.y = this.position.y;
    }

    if (this.moves) {
      this.updateMotion();

      this.newVelocity.set(this.velocity.x * this.world.physicsElapsed, this.velocity.y * this.world.physicsElapsed);

      this.position.x += this.newVelocity.x;
      this.position.y += this.newVelocity.y;

      if (this.position.x !== this.prev.x || this.position.y !== this.prev.y) {
        this.angle = Math.atan2(this.velocity.y, this.velocity.x);
      }

      this.speed = Math.sqrt(this.velocity.x * this.velocity.x + this.velocity.y * this.velocity.y);

      //  Now the State update will throw collision checks at the Body
      //  And finally we'll integrate the new position back to the Sprite in postUpdate

      if (this.collideWorldBounds) {
        if (this.checkWorldBounds()) {
          this.dispatch(EVENTS.ON_WORLD_BOUNDS, this.sprite, this.blocked.up, this.blocked.down, this.blocked.left, this.blocked.right);
        }
      }
    }

    this._dx = this.deltaX;
    this._dy = this.deltaY;

    this._reset = false;
  }

  /**
  * 内部方法 更新
  * @method Tiny.Physics.Ant.Body#postUpdate
  * @protected
  */
  postUpdate() {
    //  每次更新只允许调用一次postUpdate
    if (!this.enable || !this.dirty) {
      return;
    }

    this.dirty = false;

    if (this.deltaX < 0) {
      this.facing = FACING.LEFT;
    } else if (this.deltaX > 0) {
      this.facing = FACING.RIGHT;
    }

    if (this.deltaY < 0) {
      this.facing = FACING.UP;
    } else if (this.deltaY > 0) {
      this.facing = FACING.DOWN;
    }

    if (this.moves) {
      this._dx = this.deltaX;
      this._dy = this.deltaY;

      if (this.deltaMax.x !== 0 && this._dx !== 0) {
        if (this._dx < 0 && this._dx < -this.deltaMax.x) {
          this._dx = -this.deltaMax.x;
        } else if (this._dx > 0 && this._dx > this.deltaMax.x) {
          this._dx = this.deltaMax.x;
        }
      }

      if (this.deltaMax.y !== 0 && this._dy !== 0) {
        if (this._dy < 0 && this._dy < -this.deltaMax.y) {
          this._dy = -this.deltaMax.y;
        } else if (this._dy > 0 && this._dy > this.deltaMax.y) {
          this._dy = this.deltaMax.y;
        }
      }

      this.sprite.position.x += this._dx;
      this.sprite.position.y += this._dy;

      if (this.debugBody) {
        this.debugBody.updateSpriteTransform();
      }

      this._reset = true;
    }

    this.center.set(this.position.x + this.halfWidth, this.position.y + this.halfHeight);

    if (this.allowRotation) {
      this.sprite.rotation += this.deltaZ;
    }
    // this.processCollide();
    this.prev.x = this.position.x;
    this.prev.y = this.position.y;
  }

  // processCollide() {
  //   if (this.collidesWith.length > 0) {
  //     this.world.collide(this.sprite, this.collidesWith);
  //   }
  //   if (this.overlapsWith.length > 0) {
  //     this.world.overlap(this.sprite, this.overlapsWith);
  //   }
  // }

  /**
  * Internal method.
  *
  * @method Tiny.Physics.Ant.Body#checkWorldBounds
  * @protected
  * @return {boolean} True if the Body collided with the world bounds, otherwise false.
  */
  checkWorldBounds() {
    const pos = this.position;
    const bounds = this.world.bounds;
    const check = this.world.checkCollision;

    const bx = (this.worldBounce) ? -this.worldBounce.x : -this.bounce.x;
    const by = (this.worldBounce) ? -this.worldBounce.y : -this.bounce.y;

    if (this.isCircle) {
      const bodyBounds = {
        x: this.center.x - this.radius,
        y: this.center.y - this.radius,
        right: this.center.x + this.radius,
        bottom: this.center.y + this.radius,
      };

      if (bodyBounds.x < bounds.x && check.left) {
        pos.x = bounds.x - this.halfWidth + this.radius;
        this.velocity.x *= bx;
        this.blocked.left = true;
      } else if (bodyBounds.right > bounds.right && check.right) {
        pos.x = bounds.right - this.halfWidth - this.radius;
        this.velocity.x *= bx;
        this.blocked.right = true;
      }

      if (bodyBounds.y < bounds.y && check.up) {
        pos.y = bounds.y - this.halfHeight + this.radius;
        this.velocity.y *= by;
        this.blocked.up = true;
      } else if (bodyBounds.bottom > bounds.bottom && check.down) {
        pos.y = bounds.bottom - this.halfHeight - this.radius;
        this.velocity.y *= by;
        this.blocked.down = true;
      }
    } else {
      if (pos.x < bounds.x && check.left) {
        pos.x = bounds.x;
        this.velocity.x *= bx;
        this.blocked.left = true;
      } else if (this.right > bounds.right && check.right) {
        pos.x = bounds.right - this.width;
        this.velocity.x *= bx;
        this.blocked.right = true;
      }

      if (pos.y < bounds.y && check.up) {
        pos.y = bounds.y;
        this.velocity.y *= by;
        this.blocked.up = true;
      } else if (this.bottom > bounds.bottom && check.down) {
        pos.y = bounds.bottom - this.height;
        this.velocity.y *= by;
        this.blocked.down = true;
      }
    }
    return (this.blocked.up || this.blocked.down || this.blocked.left || this.blocked.right);
  }

  /**
  * 重新设置刚体的尺寸-矩形，这个方法是已原来sprite矩形左上角为为基准进行设置
  * 请优先使用setRectangle 和 setCircle
  * @method Tiny.Physics.Ant.Body#setSize
  * @param {number} width - 宽度
  * @param {number} height - 高度
  * @param {number} [offsetX] - x偏移量
  * @param {number} [offsetY] - y偏移量
  */
  setSize(width, height, offsetX, offsetY) {
    if (offsetX === undefined) { offsetX = this.offset.x; }
    if (offsetY === undefined) { offsetY = this.offset.y; }

    this.sourceWidth = width;
    this.sourceHeight = height;
    this.width = this.sourceWidth * this._sx;
    this.height = this.sourceHeight * this._sy;
    this.halfWidth = Math.floor(this.width / 2);
    this.halfHeight = Math.floor(this.height / 2);
    this.offset.set(offsetX, offsetY);

    this.center.set(this.position.x + this.halfWidth, this.position.y + this.halfHeight);

    this.isCircle = false;
    this.radius = 0;
    this.shapeChanged();
  }

  /**
   *  刚体设置成矩形 和 P2的接口保持一直 已原来sprite矩形中心为中心
   * @param {number} [width] - 矩形的宽度
   * @param {number} [height] - 矩形的高度
   * @param {number} [offsetX=0] - x偏移量
   * @param {*} [offsetY=0] - y偏移量
   */
  setRectangle(width = 16, height = 16, offsetX = 0, offsetY = 0) {
    // 修改成以中心为坐标进行设置
    const oX = this.sprite.width / this.sprite.scale.x / 2 - width / 2;
    const oY = this.sprite.height / this.sprite.scale.y / 2 - height / 2;
    offsetX += oX;
    offsetY += oY;
    this.setSize(width, height, offsetX, offsetY);
  }

  /**
   *  把刚体设置为圆形 以圆心为原来sprite矩形的中心点
   *
   * @method Tiny.Physics.Ant.Body#setCircle
   * @param {number} [radius] - 半径
   * @param {number} [offsetX=0] - 圆心x坐标的偏移 默认是0. 已sprite原始尺寸为基础的偏移
   * @param {number} [offsetY=0] - 圆心y坐标的偏移 默认是0. 已sprite原始尺寸为基础的偏移
   */
  setCircle(radius = 16, offsetX = 0, offsetY = 0) {
    // if (offsetX === undefined) { offsetX = this.offset.x; }
    // if (offsetY === undefined) { offsetY = this.offset.y; }
    if (radius > 0) {
      // 修改成以中心为坐标进行设置圆
      const oX = this.sprite.width / this.sprite.scale.x / 2 - radius;
      const oY = this.sprite.height / this.sprite.scale.y / 2 - radius;
      offsetX += oX;
      offsetY += oY;

      if (DEBUG) {
        console.log('setCircle:', offsetX, offsetY);
      }

      this.isCircle = true;
      this.radius = radius;

      this.sourceWidth = radius * 2;
      this.sourceHeight = radius * 2;

      this.width = this.sourceWidth * this._sx;
      this.height = this.sourceHeight * this._sy;

      this.halfWidth = Math.floor(this.width / 2);
      this.halfHeight = Math.floor(this.height / 2);

      this.offset.set(offsetX, offsetY);

      this.center.set(this.position.x + this.halfWidth, this.position.y + this.halfHeight);
    } else {
      this.isCircle = false;
    }

    this.shapeChanged();
  }

  /**
  * Resets all Body values (velocity, acceleration, rotation, etc)
  *
  * @method Tiny.Physics.Ant.Body#reset
  * @param {number} x - The new x position of the Body.
  * @param {number} y - The new y position of the Body.
  */
  reset(x, y) {
    this.velocity.set(0);
    this.acceleration.set(0);

    this.speed = 0;
    this.angularVelocity = 0;
    this.angularAcceleration = 0;

    this.position.x = (x - (this.sprite.anchor.x * this.sprite.width)) + this.sprite.scale.x * this.offset.x;
    this.position.x -= this.sprite.scale.x < 0 ? this.width : 0;

    this.position.y = (y - (this.sprite.anchor.y * this.sprite.height)) + this.sprite.scale.y * this.offset.y;
    this.position.y -= this.sprite.scale.y < 0 ? this.height : 0;

    this.prev.x = this.position.x;
    this.prev.y = this.position.y;

    this.rotation = this.sprite.angle;
    this.preRotation = this.rotation;

    this._sx = this.sprite.scale.x;
    this._sy = this.sprite.scale.y;

    this.center.set(this.position.x + this.halfWidth, this.position.y + this.halfHeight);
  }

  /**
  * Returns the bounds of this physics body.
  *
  * Only used internally by the World collision methods.
  * @private
  * @method Tiny.Physics.Ant.Body#getBounds
  * @param {Tiny.Physics.Ant.Bound} obj - The object in which to set the bounds values.
  * @return {Tiny.Physics.Ant.Bound} The object that was given to this method.
  */
  getBounds(obj) {
    obj = obj || new Bound();
    if (this.isCircle) {
      obj.x = this.center.x - this.radius;
      obj.y = this.center.y - this.radius;
      obj.right = this.center.x + this.radius;
      obj.bottom = this.center.y + this.radius;
    } else {
      obj.x = this.x;
      obj.y = this.y;
      obj.right = this.right;
      obj.bottom = this.bottom;
    }
    return obj;
  }

  /**
  * Tests if a world point lies within this Body.
  *
  * @method Tiny.Physics.Ant.Body#hitTest
  * @param {number} x - The world x coordinate to test.
  * @param {number} y - The world y coordinate to test.
  * @return {boolean} True if the given coordinates are inside this Body, otherwise false.
  */
  hitTest(x, y) {
    return (this.isCircle) ? Tiny.Circle.contains.call(this, x, y) : Tiny.Rectangle.contains.call(this, x, y);
  }

  /**
  * 是否在物理系统的下边界
  * @method Tiny.Physics.Ant.Body#onFloor
  * @return {boolean} True 接触到了下边界
  */
  get isOnFloor() {
    return this.blocked.down;
  }

  /**
  * 是否在物理系统的上边界
  * @method Tiny.Physics.Ant.Body#onCeiling
  * @return {boolean} True 接触到了上边界.
  */
  get isOnCeiling() {
    return this.blocked.up;
  }

  /**
  * 是否在物理系统的左边界
  * @method Tiny.Physics.Ant.Body#onCeiling
  * @return {boolean} True 接触到了左边界.
  */
  get isOnLeft() {
    return this.blocked.left;
  }

  /**
  * 是否在物理系统的右边界
  * @method Tiny.Physics.Ant.Body#onCeiling
  * @return {boolean} True 接触到了右边界.
  */
  get isOnRight() {
    return this.blocked.right;
  }

  /**
  * deltaX 的绝对值
  *
  * @method Tiny.Physics.Ant.Body#deltaAbsX
  * @return {number} deltaX 的绝对值.
  */
  get deltaAbsX() {
    return Math.abs(this.deltaX);
  }

  /**
  * deltaY 的绝对值.
  *
  * @method Tiny.Physics.Ant.Body#deltaAbsY
  * @return {number} deltaY 的绝对值 正数.
  */
  get deltaAbsY() {
    return Math.abs(this.deltaY);
  }

  /**
  * 位置在x方向差值
  * 如果是向右移动就是正数 如果是向左移动就是负数
  * @method Tiny.Physics.Ant.Body#deltaX
  * @return {number} The delta value.如果是向右移动就是正数 如果是向左移动就是负数
  */
  get deltaX() {
    return this.position.x - this.prev.x;
  }

  /**
  * 位置在y方向差值
  * 如果是向下移动就是正数 如果是向上移动就是负数
  * @method Tiny.Physics.Ant.Body#deltaY
  * @return {number} 位置在y方向差值  如果是向下移动就是正数 如果是向上移动就是负数
  */
  get deltaY() {
    return this.position.y - this.prev.y;
  }

  /**
  * Body.rotation 角度的差值
  * 顺时针旋转就是正数，逆时针就是负数
  * @method Tiny.Physics.Ant.Body#deltaZ
  * @return {number} rotation的差值. 顺时针旋转就是正数，逆时针就是负数
  */
  get deltaZ() {
    return this.rotation - this.preRotation;
  }

  /**
  * 效果Body 一旦销毁 不可重用
  * @method Tiny.Physics.Ant.Body#destroy
  */
  destroy() {
    this.removeFromWorld();
    this.sprite.body = null;
    this.sprite = null;
    this.enable = false;
  }

  get x() {
    return this.position.x;
  }

  set x(value) {
    this.position.x = value;
  }

  get y() {
    return this.position.y;
  }

  set y(value) {
    this.position.y = value;
  }

  get left() {
    return this.position.x;
  }

  get right() {
    return this.position.x + this.width;
  }

  get top() {
    return this.position.y;
  }

  get bottom() {
    return this.position.y + this.height;
  }

  /**
   * on overlap a body
   * @param {Tiny.Physics.Ant.Body} body - the body which overlap on
   */
  onOverlap(body) {
    this.dispatch(EVENTS.ON_OVER_LAP, this.sprite, body.sprite);
  }

  /**
  * on collide a body
  * @param {Tiny.Physics.Ant.Body} body - the body which collide
  */
  onCollide(body) {
    this.dispatch(EVENTS.ON_COLLIDE, this.sprite, body.sprite);
  }

  /**
   * 把自己添加到物理系统中
   *
   * @method Tiny.Physics.Ant.Body#addToWorld
   */
  addToWorld() {
    this.world.addBody(this);
  }

  /**
   * 将body从物理系统删除，从而也解除了sprite的物理属性
   */
  removeFromWorld() {
    this.world.removeBodyNextStep(this);
  }

  /**
  * 以一个固定的速度朝着一个目标点(x,y)匀速运动
  * Note: 需要注意的是 移动到了目标点也不会停止运动 而是继续朝着这个角度继续移动，如果设置了达到目标点最大时间 那么会根据最大时间来计算移动速度
  * @method Tiny.Physics.Ant#moveToXY
  * @param {number} x - 目标点的x坐标.
  * @param {number} y - 目标点的y坐标.
  * @param {number} [speed=60] - 移动速度 单位:px/秒 (默认:60px/秒)
  * @param {number} [maxTime=0] - 到达目标点的最大时间
  * @return {number} 当前Body和目标点的角度,可以用来设置sprite的旋转角度 实现物体在运动轨迹上保持一个合理的姿势
  */
  moveTo(x, y, speed = 60, maxTime = 0) {
    const displayObject = this;
    const angle = Math.atan2(y - displayObject.y, x - displayObject.x);

    if (maxTime > 0) {
      //  We know how many pixels we need to move, but how fast?
      speed = TinyMath.distance(displayObject.x, displayObject.y, x, y) / (maxTime / 1000);
    }

    this.velocity.x = Math.cos(angle) * speed;
    this.velocity.y = Math.sin(angle) * speed;

    return angle;
  }

  /**
   * 朝一个目标点(x,y)加速运动，最终速度不会超过设置的最大速度，默认最大速度是1000
   * @method Tiny.Physics.Ant#accelerateToObject
   * @param {Number} x - 目标点 x坐标
   * @param {Number} y - 目标点 y 坐标
   * @param {number} [speed=60] - 加速度 px/秒
   * @param {number} [xSpeedMax=500] - x 方向最大速度.
   * @param {number} [ySpeedMax=500] - y 方向最大速度.
   * @return {number} 加速移动的角度（radians 弧度单位）你可以用这个角度去设置sprite的旋转角度 来实现加速运动中 物体的角度是正常的
   */
  accelerateTo(x, y, speed = 60, xSpeedMax = 1000, ySpeedMax = 1000) {
    const angle = TinyMath.angle(this.x, this.y, x, y);
    this.acceleration.set(Math.cos(angle) * speed, Math.sin(angle) * speed);
    this.maxVelocity.set(xSpeedMax, ySpeedMax);
    return angle;
  }

  /**
  * 当时添加或者删除shape的时候会触发
  */
  shapeChanged() {
    if (this.debugBody) {
      this.debugBody.draw();
    }
    this.dispatch(EVENTS.ON_SHAPE_CHANGED, this);
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
      this.debugBody.draw();
    } else if (!value && this.debugBody) {
      this.debugBody.destroy();
      this.debugBody = null;
    }
  }

  get static() {
    return this.immovable;
  }

  /**
   * 是否是静态物体 不受重力等因素影响 如墙 地板等
   */
  set static(value) {
    this.allowGravity = !value;
    this.immovable = !!value;
  }

  /**
   * 是否已经添加了碰撞对象了
   * @param {Tiny.Sprite|Array<Tiny.Sprite>} objects - 需要和当前Body进行碰撞检测的对象
   */
  containsCollide(object) {
    if (object instanceof Body) {
      object = object.sprite;
    }
    return this.collidesWith.indexOf(object) > -1;
  }

  /**
   * 添加和需要和当前刚体进行碰撞检测的对象
   * @param {Tiny.Sprite|Array<Tiny.Sprite>} objects - 需要和当前Body进行碰撞检测的对象
   */
  addCollides(objects) {
    // console.log('addCollides', objects);
    if (Array.isArray(objects)) {
      for (let i = 0; i < objects.length; i++) {
        let o = objects[i];
        if (o instanceof Body) {
          o = o.sprite;
        }
        //  防止A添加了B B又添加了A 重复检测 浪费资源
        if (o.body && o.body !== this && !o.body.containsCollide(this.sprite)) {
          if (!this.containsCollide(o)) {
            this.collidesWith.push(o);
          }
        }
      }
    } else {
      this.collidesWith.push(objects);
    }
  }

  /**
   * 移除和需要和当前刚体进行碰撞检测的对象
   * @param {Tiny.Sprite|Array<Tiny.Sprite>} objects - 之前添加的需要和当前Body进行碰撞检测的对象
   */
  removeCollides(objects) {
    if (Array.isArray(objects)) {
      for (let i = 0; i < objects.length; i++) {
        let o = objects[i];
        if (o instanceof Body) {
          o = o.sprite;
        }
        this._removeCollide(o);
      }
    } else {
      this._removeCollide(objects);
    }
  }

  /**
   * 移除所有需要和当前刚体进行碰撞检测的对象
   * @param {Tiny.Sprite|Array<Tiny.Sprite>} objects - 之前添加的需要和当前Body进行碰撞检测的对象
   */
  removeAllCollides() {
    this.collidesWith = [];
  }

  /**
   * 私有对象 不要调用 从内部数组中 删掉一个碰撞对象
   * @private
   * @param {*@} object
   */
  _removeCollide(object) {
    const idx = this.collidesWith.indexOf(object);
    if (idx > -1) {
      this.collidesWith.splice(idx, 1);
    }
    return object;
  }

  /**
   * 是否已经添加了碰撞对象了
   * @param {Tiny.Sprite|Array<Tiny.Sprite>} objects - 需要和当前Body进行碰撞检测的对象
   */
  containsOverlap(object) {
    if (object instanceof Body) {
      object = object.sprite;
    }
    return this.overlapsWith.indexOf(object) > -1;
  }

  _addToArray(arr, objects) {
    if (Array.isArray(objects)) {
      for (let i = 0; i < objects.length; i++) {
        let o = objects[i];
        if (o instanceof Body) {
          o = o.sprite;
        }
        if (!this.containsOverlap(o)) {
          arr.push(o);
        }
      }
    } else {
      arr.push(objects);
    }
  }

  /**
  * 添加和需要和当前刚体进行重叠交叉检测的对象
  * @param {Tiny.Sprite|Array<Tiny.Sprite>} objects - 需要和当前Body进行重叠交叉检测的Sprite对象或sprite对象数组
  */
  addOverlaps(objects) {
    if (Array.isArray(objects)) {
      for (let i = 0; i < objects.length; i++) {
        let o = objects[i];
        if (o instanceof Body) {
          o = o.sprite;
        }
        if (!this.containsOverlap(o)) {
          this.overlapsWith.push(o);
        }
      }
    } else {
      this.overlapsWith.push(objects);
    }
  }

  /**
  * 移除和需要和当前刚体进行重叠交叉检测的对象
  * @param {Tiny.Sprite|Array<Tiny.Sprite>} objects - 之前添加的需要和当前Body进行重叠交叉检测的对象
  */
  removeOverlaps(objects) {
    if (Array.isArray(objects)) {
      for (let i = 0; i < objects.length; i++) {
        let o = objects[i];
        if (o instanceof Body) {
          o = o.sprite;
        }
        this._removeOverlap(o);
      }
    } else {
      this._removeOverlap(objects);
    }
  }

  /**
   * 移除所有需要和当前刚体进行碰撞检测的对象
   * @param {Tiny.Sprite|Array<Tiny.Sprite>} objects - 之前添加的需要和当前Body进行碰撞检测的对象
   */
  removeAllOverlaps() {
    this.overlapsWith = [];
  }

  /**
  * 私有对象 不要调用 从内部数组中 删掉一个重叠交叉检测的对象
  * @private
  * @param {*@} object
  */
  _removeOverlap(object) {
    const idx = this.overlapsWith.indexOf(object);
    if (idx > -1) {
      this.overlapsWith.splice(idx, 1);
    }
    return object;
  }
}
//

