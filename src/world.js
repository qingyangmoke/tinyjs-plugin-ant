import { default as Group } from './core/Group';
import { default as Body } from './Body';
import * as EVENTS from './EVENTS';
import * as TinyMath from './core/math';

export default class World extends Tiny.EventEmitter {
  constructor(app, config) {
    super();
    if (config === undefined) {
      config = {
        gravity: [0, 0],
      };
    } else {
      if (!config.hasOwnProperty('gravity')) {
        config.gravity = [0, 0];
      }
    }
    this.type = 'Tiny.Physics.Ant.World';

    /**
        * @property {Tiny.Application} app - Tiny.Application实例
        * @public
        */
    this.app = app;

    /**
    * 给Tiny.Application 增加了一个physics命名空间 所有的物理系统都放到这个命名空间下
    */
    this.app.physics = this.app.physics || {};

    /**
     * 注入到app 物理引擎命名空间下
     */
    this.app.physics.ant = this;

    /**
    * @property {object} config - The World configuration object.
    * @protected
    */
    this.config = config;

    /**
    * @property {Tiny.Point} gravity - The World gravity setting. Defaults to x: 0, y: 0, or no gravity.
    */
    this.gravity = new Tiny.Point();
    this.gravity.x = config.gravity[0];
    this.gravity.y = config.gravity[1];

    /**
     * @property {Tiny.Rectangle} bounds - The bounds inside of which the physics world exists. Defaults to match the world bounds.
     */
    this.bounds = new Tiny.Rectangle(0, 0, 0, 0);

    /**
    * Set the checkCollision properties to control for which bounds collision is processed.
    * For example checkCollision.down = false means Bodies cannot collide with the World.bounds.bottom.
    * @property {object} checkCollision - An object containing allowed collision flags.
    */
    this.checkCollision = { up: true, down: true, left: true, right: true };

    /**
    * @property {number} maxObjects - Used by the QuadTree to set the maximum number of objects per quad.
    */
    this.maxObjects = 10;

    /**
    * @property {number} maxLevels - Used by the QuadTree to set the maximum number of iteration levels.
    */
    this.maxLevels = 4;

    /**
    * @property {number} OVERLAP_BIAS - A value added to the delta values during collision checks.
    */
    this.OVERLAP_BIAS = 4;

    /**
    * @property {boolean} forceX - If true World.separate will always separate on the X axis before Y. Otherwise it will check gravity totals first.
    */
    this.forceX = false;

    /**
    * @property {boolean} skipQuadTree - If true the QuadTree will not be used for any collision. QuadTrees are great if objects are well spread out in your game, otherwise they are a performance hit. If you enable this you can disable on a per body basis via `Body.skipQuadTree`.
    */
    this.skipQuadTree = true;

    /**
    * @property {boolean} _paused - If `true` the `Body.preUpdate` method will be skipped, halting all motion for all bodies. Note that other methods such as `collide` will still work, so be careful not to call them on paused bodies.
    */
    this._paused = false;

    /**
    * @property {number} _total - Internal cache var.
    * @private
    */
    this._total = 0;

    this._restitution = 0;

    this._toRemove = [];

    this._bodies = [];

    // 设置帧率 60dps
    this.physicsElapsed = 1 / 60;

    // 设置物理系统边界 和游戏边界一样
    this.setBoundsToWorld(true, true, true, true);
  }

  /**
   * 触发指定事件事件
   * @param {String} eventName
   * @param {any} eventData
   */
  dispatch(eventName, ...args) {
    this.emit.apply(this, arguments);
  }

  /**
   * 设置ant物理系统的边界
   *
   * @method Tiny.Physics.Ant#setBounds
   * @param {number} x - 物理系统边界的左上角x坐标.
   * @param {number} y - 物理系统边界的左上角y坐标.
   * @param {number} width - 物理系统边界的宽度.
   * @param {number} height - 物理系统边界的高度.
   */
  setBounds(x, y, width, height, left = true, right = true, top = true, bottom = true) {
    this.bounds.x = x;
    this.bounds.y = y;
    this.bounds.width = width;
    this.bounds.height = height;
    if (left !== undefined) {
      this.checkCollision.left = !!left;
    }
    if (right !== undefined) {
      this.checkCollision.right = !!right;
    }
    if (top !== undefined) {
      this.checkCollision.top = !!top;
    }
    if (bottom !== undefined) {
      this.checkCollision.bottom = !!bottom;
    }
  }

  /**
  * 设置tiny的边界为ant物理系统的边界
  *
  * @method Tiny.Physics.Ant#setBoundsToWorld
  * @param {boolean} [left=true] - 是否设置ant物理系统左边界
  * @param {boolean} [right=true] - 是否设置ant物理系统右边界
  * @param {boolean} [top=true] - 是否设置ant物理系统上边界
  * @param {boolean} [bottom=true] - 是否设置ant物理系统下边界
  */
  setBoundsToWorld(left, right, top, bottom) {
    this.setBounds(0, 0, this.app.renderer.width, this.app.renderer.height, left, right, top, bottom);
  }

  /**
   * 对Tiny显示对象或数组 启用物理特性 参考了p2 保持了和p2的方法兼容性
   * 调用后会自动在Tiny.Sprite中注入body对象 可以用过sprite.body来访问和操作物理系统
   * @method Tiny.Physics.Ant#enable
   * @param {Tiny.Sprite|Array<Tiny.Sprite>} object - Tiny显示对象或者对象数组
   * @param {boolean} [debug=true] - 是否开启Body调试
   * @param {boolean} [children=true] - 是否启用子级元素
   */
  enable(object, debug = false, children = true) {
    let i = 1;
    if (Array.isArray(object)) {
      i = object.length;
      while (i--) {
        if (object[i] instanceof Group) {
          this.enable(object[i].children, debug, children);
        } else {
          this.enableBody(object[i], debug);
          if (children && object[i].hasOwnProperty('children') && object[i].children.length > 0) {
            this.enable(object[i], debug, true);
          }
        }
      }
    } else {
      if (object instanceof Group) {
        //  If it's a Group then we do it on the children regardless
        this.enable(object.children, debug, children);
      } else {
        this.enableBody(object, debug);
        if (children && object.hasOwnProperty('children') && object.children.length > 0) {
          this.enable(object.children, debug, true);
        }
      }
    }
  }

  /**
   * 对单个 Tiny显示对象 启用物理特性 参考了p2 保持了和p2的方法兼容性
   * 启用物理特性后 anchor都会自动设置成0.5 中心点
   * @method Tiny.Physics.Ant#enableBody
   * @param {Tiny.Sprite|object} object - Tiny中的显示对象 Tiny.Sprite
   */
  enableBody(object, debug) {
    if (!object.body) {
      object.body = new Body(this, object);
      object.body.debug = debug;
      if (typeof object.anchor !== 'undefined') {
        object.anchor.set(0.5, 0.5);
      }
      this.addBody(object.body);
    }
  }

  /**
  * 添加一个body刚体到物理系统中
  *
  * @method Tiny.Physics.P2#addBody
  * @param {Tiny.Physics.P2.Body} body - 刚体.
  * @return {boolean}  True 添加成功, false 添加失败.
  */
  addBody(body) {
    if (this._toRemove) {
      for (let i = 0; i < this._toRemove.length; i++) {
        if (this._toRemove[i] === this) {
          this._toRemove.splice(i, 1);
        }
      }
    }
    if (this._bodies.indexOf(body) === -1) {
      this._bodies.push(body);
      this.dispatch(EVENTS.ON_BODY_ADDED, body);
    }
  }

  /**
   * 放到延迟删除临时队列
   * @param {Tiny.Physics.P2.Body} body - 要延迟到下一次渲染删除的Body对象
   */
  removeBodyNextStep(body) {
    this._toRemove.push(body);
  }

  /**
   * A tween-like function that takes a starting velocity and some other factors and returns an altered velocity.
   * Based on a function in Flixel by @ADAMATOMIC
   *
   * @method Tiny.Physics.Ant#computeVelocity
   * @param {number} axis - 0 for nothing, 1 for horizontal, 2 for vertical.
   * @param {Tiny.Physics.Ant.Body} body - The Body object to be updated.
   * @param {number} velocity - Any component of velocity (e.g. 20).
   * @param {number} acceleration - Rate at which the velocity is changing.
   * @param {number} drag - Really kind of a deceleration, this is how much the velocity changes if Acceleration is not set.
   * @param {number} [max=10000] - An absolute value cap for the velocity.
   * @return {number} The altered Velocity value.
   */
  computeVelocity(axis, body, velocity, acceleration, drag, max = 10000) {
    if (axis === 1 && body.allowGravity) {
      velocity += (this.gravity.x + body.gravity.x) * this.physicsElapsed;
    } else if (axis === 2 && body.allowGravity) {
      velocity += (this.gravity.y + body.gravity.y) * this.physicsElapsed;
    }

    if (acceleration) {
      velocity += acceleration * this.physicsElapsed;
    } else if (drag) {
      drag *= this.physicsElapsed;

      if (velocity - drag > 0) {
        velocity -= drag;
      } else if (velocity + drag < 0) {
        velocity += drag;
      } else {
        velocity = 0;
      }
    }

    if (velocity > max) {
      velocity = max;
    } else if (velocity < -max) {
      velocity = -max;
    }

    return velocity;
  }

  /**
  * Checks for overlaps between two game objects. The objects can be Sprites, Groups or Emitters.
  * You can perform Sprite vs. Sprite, Sprite vs. Group and Group vs. Group overlap checks.
  * Unlike collide the objects are NOT automatically separated or have any physics applied, they merely test for overlap results.
  * Both the first and second parameter can be arrays of objects, of differing types.
  * If two arrays are passed, the contents of the first parameter will be tested against all contents of the 2nd parameter.
  * NOTE: This function is not recursive, and will not test against children of objects passed (i.e. Groups within Groups).
  *
  * @method Tiny.Physics.Ant#overlap
  * @param {Tiny.Sprite|array} object1 - The first object or array of objects to check. Can be Tiny.Sprite
  * @param {Tiny.Sprite|array} object2 - The second object or array of objects to check. Can be Tiny.Sprite
  * @param {function} [overlapCallback=null] - An optional callback function that is called if the objects overlap. The two objects will be passed to this function in the same order in which you specified them, unless you are checking Group vs. Sprite, in which case Sprite will always be the first parameter.
  * @param {function} [processCallback=null] - A callback function that lets you perform additional checks against the two objects if they overlap. If this is set then `overlapCallback` will only be called if this callback returns `true`.
  * @param {object} [callbackContext] - The context in which to run the callbacks.
  * @return {boolean} True if an overlap occurred otherwise false.
  */
  overlap(object1, object2, overlapCallback, processCallback, callbackContext) {
    overlapCallback = overlapCallback || null;
    processCallback = processCallback || null;
    callbackContext = callbackContext || this;
    this._total = 0;
    if (!Array.isArray(object1) && Array.isArray(object2)) {
      for (let i = 0; i < object2.length; i++) {
        this.collideHandler(object1, object2[i], overlapCallback, processCallback, callbackContext, true);
      }
    } else if (Array.isArray(object1) && !Array.isArray(object2)) {
      for (let i = 0; i < object1.length; i++) {
        this.collideHandler(object1[i], object2, overlapCallback, processCallback, callbackContext, true);
      }
    } else if (Array.isArray(object1) && Array.isArray(object2)) {
      for (let i = 0; i < object1.length; i++) {
        for (let j = 0; j < object2.length; j++) {
          this.collideHandler(object1[i], object2[j], overlapCallback, processCallback, callbackContext, true);
        }
      }
    } else {
      this.collideHandler(object1, object2, overlapCallback, processCallback, callbackContext, true);
    }
    return (this._total > 0);
  }

  /**
   * Checks for collision between two game objects. You can perform Sprite vs. Sprite, Sprite vs. Group, Group vs. Group, Sprite vs. Tilemap Layer or Group vs. Tilemap Layer collisions.
   * Both the first and second parameter can be arrays of objects, of differing types.
   * If two arrays are passed, the contents of the first parameter will be tested against all contents of the 2nd parameter.
   * The objects are also automatically separated. If you don't require separation then use ant Physics.overlap instead.
   * An optional processCallback can be provided. If given this function will be called when two sprites are found to be colliding. It is called before any separation takes place,
   * giving you the chance to perform additional checks. If the function returns true then the collision and separation is carried out. If it returns false it is skipped.
   * The collideCallback is an optional function that is only called if two sprites collide. If a processCallback has been set then it needs to return true for collideCallback to be called.
   * NOTE: This function is not recursive, and will not test against children of objects passed (i.e. Groups or Tilemaps within other Groups).
   *
   * @method Tiny.Physics.Ant#collide
   * @param {Tiny.Sprite|array} object1 - The first object or array of objects to check. Can be Tiny.Sprite
   * @param {Tiny.Sprite|array} object2 - The second object or array of objects to check. Can be Tiny.Sprite
   * @param {function} [collideCallback=null] - An optional callback function that is called if the objects collide. The two objects will be passed to this function in the same order in which you specified them, unless you are colliding Group vs. Sprite, in which case Sprite will always be the first parameter.
   * @param {function} [processCallback=null] - A callback function that lets you perform additional checks against the two objects if they overlap. If this is set then collision will only happen if processCallback returns true. The two objects will be passed to this function in the same order in which you specified them, unless you are colliding Group vs. Sprite, in which case Sprite will always be the first parameter.
   * @param {object} [callbackContext] - The context in which to run the callbacks.
   * @return {boolean} True if a collision occurred otherwise false.
   */
  collide(object1, object2, collideCallback, processCallback, callbackContext) {
    collideCallback = collideCallback || null;
    processCallback = processCallback || null;
    callbackContext = callbackContext || collideCallback;

    this._total = 0;

    if (!Array.isArray(object1) && Array.isArray(object2)) {
      for (let i = 0; i < object2.length; i++) {
        this.collideHandler(object1, object2[i], collideCallback, processCallback, callbackContext, false);
      }
    } else if (Array.isArray(object1) && !Array.isArray(object2)) {
      for (let i = 0; i < object1.length; i++) {
        this.collideHandler(object1[i], object2, collideCallback, processCallback, callbackContext, false);
      }
    } else if (Array.isArray(object1) && Array.isArray(object2)) {
      for (let i = 0; i < object1.length; i++) {
        for (let j = 0; j < object2.length; j++) {
          this.collideHandler(object1[i], object2[j], collideCallback, processCallback, callbackContext, false);
        }
      }
    } else {
      this.collideHandler(object1, object2, collideCallback, processCallback, callbackContext, false);
    }

    return (this._total > 0);
  }

  /**
  * Internal collision handler.
  *
  * @method Tiny.Physics.Ant#collideHandler
  * @private
  * @param {Tiny.Sprite} object1 - The first object to check. Can be an instance of Tiny.Sprite
  * @param {Tiny.Sprite} object2 - The second object to check. Can be an instance of Tiny.Sprite. Can also be an array of objects to check.
  * @param {function} collideCallback - An optional callback function that is called if the objects collide. The two objects will be passed to this function in the same order in which you specified them.
  * @param {function} processCallback - A callback function that lets you perform additional checks against the two objects if they overlap. If this is set then collision will only happen if processCallback returns true. The two objects will be passed to this function in the same order in which you specified them.
  * @param {object} callbackContext - The context in which to run the callbacks.
  * @param {boolean} overlapOnly - Just run an overlap or a full collision.
  */
  collideHandler(object1, object2, collideCallback, processCallback, callbackContext, overlapOnly) {
    //  If neither of the objects are set or exist then bail out
    if (!object1 || !object2 || !object1.visible || !object2.visible) {
      if (DEBUG) {
        console.warn('object1 is null or not visible');
      }
      return;
    }

    if (object1 instanceof Tiny.Sprite && object2 instanceof Tiny.Sprite) {
      this.collideSpriteVsSprite(object1, object2, collideCallback, processCallback, callbackContext, overlapOnly);
    } else {
      if (DEBUG) {
        console.warn('只支持Tiny.Sprite');
      }
    }

    return;
  }

  /**
   * An internal function. Use Tiny.Physics.Ant.collide instead.
   *
   * @method Tiny.Physics.Ant#collideSpriteVsSprite
   * @private
   * @param {Tiny.Sprite} sprite1 - The first sprite to check.
   * @param {Tiny.Sprite} sprite2 - The second sprite to check.
   * @param {function} collideCallback - An optional callback function that is called if the objects collide. The two objects will be passed to this function in the same order in which you specified them.
   * @param {function} processCallback - A callback function that lets you perform additional checks against the two objects if they overlap. If this is set then collision will only happen if processCallback returns true. The two objects will be passed to this function in the same order in which you specified them.
   * @param {object} callbackContext - The context in which to run the callbacks.
   * @param {boolean} overlapOnly - Just run an overlap or a full collision.
   * @return {boolean} True if there was a collision, otherwise false.
   */
  collideSpriteVsSprite(sprite1, sprite2, collideCallback, processCallback, callbackContext, overlapOnly) {
    if (!sprite1.body || !sprite2.body) {
      return false;
    }
    if (this.separate(sprite1.body, sprite2.body, processCallback, callbackContext, overlapOnly)) {
      if (collideCallback) {
        collideCallback.call(callbackContext, sprite1, sprite2);
      }
      this._total++;
    }
    return true;
  }

  /**
  * The core separation function to separate two physics bodies.
  *
  * @private
  * @method Tiny.Physics.Ant#separate
  * @param {Tiny.Physics.Ant.Body} body1 - The first Body object to separate.
  * @param {Tiny.Physics.Ant.Body} body2 - The second Body object to separate.
  * @param {function} [processCallback=null] - A callback function that lets you perform additional checks against the two objects if they overlap. If this function is set then the sprites will only be collided if it returns true.
  * @param {object} [callbackContext] - The context in which to run the process callback.
  * @param {boolean} overlapOnly - Just run an overlap or a full collision.
  * @return {boolean} Returns true if the bodies collided, otherwise false.
  */
  separate(body1, body2, processCallback, callbackContext, overlapOnly) {
    if (
      !body1.enable ||
      !body2.enable ||
      body1.checkCollision.none ||
      body2.checkCollision.none ||
      !this.intersects(body1, body2)) {
      return false;
    }
    //  They overlap. Is there a custom process callback? If it returns true then we can carry on, otherwise we should abort.
    if (processCallback && processCallback.call(callbackContext, body1.sprite, body2.sprite) === false) {
      return false;
    }
    //  Circle vs. Circle quick bail out
    if (body1.isCircle && body2.isCircle) {
      return this.separateCircle(body1, body2, overlapOnly);
    }
    // We define the behavior of bodies in a collision circle and rectangle
    // If a collision occurs in the corner points of the rectangle, the body behave like circles
    //  Either body1 or body2 is a circle
    if (body1.isCircle !== body2.isCircle) {
      const bodyRect = (body1.isCircle) ? body2 : body1;
      const bodyCircle = (body1.isCircle) ? body1 : body2;

      const rect = {
        x: bodyRect.x,
        y: bodyRect.y,
        right: bodyRect.right,
        bottom: bodyRect.bottom,
      };

      const circle = {
        x: bodyCircle.x + bodyCircle.radius,
        y: bodyCircle.y + bodyCircle.radius,
      };

      if (circle.y < rect.y || circle.y > rect.bottom) {
        if (circle.x < rect.x || circle.x > rect.right) {
          return this.separateCircle(body1, body2, overlapOnly);
        }
      }
    }

    let resultX = false;
    let resultY = false;

    //  Do we separate on x or y first?
    if (this.forceX || Math.abs(this.gravity.y + body1.gravity.y) < Math.abs(this.gravity.x + body1.gravity.x)) {
      resultX = this.separateX(body1, body2, overlapOnly);

      //  Are they still intersecting? Let's do the other axis then
      if (this.intersects(body1, body2)) {
        resultY = this.separateY(body1, body2, overlapOnly);
      }
    } else {
      resultY = this.separateY(body1, body2, overlapOnly);

      //  Are they still intersecting? Let's do the other axis then
      if (this.intersects(body1, body2)) {
        resultX = this.separateX(body1, body2, overlapOnly);
      }
      // console.log(resultY, resultX);
    }

    const result = (resultX || resultY);

    if (result) {
      //触发事件
      if (overlapOnly) {
        body1.onOverlap(body2);
        body2.onOverlap(body1);
      } else {
        body1.onCollide(body2);
        body2.onCollide(body1);
      }
    }
    return result;
  }

  /**
  * The core separation function to separate two physics bodies on the x axis.
  *
  * @method Tiny.Physics.Ant#separateX
  * @private
  * @param {Tiny.Physics.Ant.Body} body1 - The first Body to separate.
  * @param {Tiny.Physics.Ant.Body} body2 - The second Body to separate.
  * @param {boolean} overlapOnly - If true the bodies will only have their overlap data set, no separation or exchange of velocity will take place.
  * @return {boolean} Returns true if the bodies were separated or overlap, otherwise false.
  */
  separateX(body1, body2, overlapOnly) {
    let overlap = this.getOverlapX(body1, body2, overlapOnly);

    //  Can't separate two immovable bodies, or a body with its own custom separation logic
    if (overlapOnly || overlap === 0 || (body1.immovable && body2.immovable) || body1.customSeparateX || body2.customSeparateX) {
      //  return true if there was some overlap, otherwise false
      return (overlap !== 0) || (body1.embedded && body2.embedded);
    }

    //  Adjust their positions and velocities accordingly (if there was any overlap)
    const v1 = body1.velocity.x;
    const v2 = body2.velocity.x;

    if (!body1.immovable && !body2.immovable) {
      overlap *= 0.5;

      body1.x -= overlap;
      body2.x += overlap;

      let nv1 = Math.sqrt((v2 * v2 * body2.mass) / body1.mass) * ((v2 > 0) ? 1 : -1);
      let nv2 = Math.sqrt((v1 * v1 * body1.mass) / body2.mass) * ((v1 > 0) ? 1 : -1);
      const avg = (nv1 + nv2) * 0.5;

      nv1 -= avg;
      nv2 -= avg;

      body1.velocity.x = avg + nv1 * body1.bounce.x;
      body2.velocity.x = avg + nv2 * body2.bounce.x;
    } else if (!body1.immovable) {
      body1.x -= overlap;
      body1.velocity.x = v2 - v1 * body1.bounce.x;

      //  This is special case code that handles things like vertically moving platforms you can ride
      if (body2.moves) {
        body1.y += (body2.y - body2.prev.y) * body2.friction.y;
      }
    } else {
      body2.x += overlap;
      body2.velocity.x = v1 - v2 * body2.bounce.x;

      //  This is special case code that handles things like vertically moving platforms you can ride
      if (body1.moves) {
        body2.y += (body1.y - body1.prev.y) * body1.friction.y;
      }
    }
    //  If we got this far then there WAS overlap, and separation is complete, so return true
    return true;
  }

  /**
  * The core separation function to separate two physics bodies on the y axis.
  *
  * @private
  * @method Tiny.Physics.Ant#separateY
  * @param {Tiny.Physics.Ant.Body} body1 - The first Body to separate.
  * @param {Tiny.Physics.Ant.Body} body2 - The second Body to separate.
  * @param {boolean} overlapOnly - If true the bodies will only have their overlap data set, no separation or exchange of velocity will take place.
  * @return {boolean} Returns true if the bodies were separated or overlap, otherwise false.
  */
  separateY(body1, body2, overlapOnly) {
    let overlap = this.getOverlapY(body1, body2, overlapOnly);
    // console.debug('separateY [0] > ', overlap);
    //  Can't separate two immovable bodies, or a body with its own custom separation logic
    if (overlapOnly || overlap === 0 || (body1.immovable && body2.immovable) || body1.customSeparateY || body2.customSeparateY) {
      //  return true if there was some overlap, otherwise false
      return (overlap !== 0) || (body1.embedded && body2.embedded);
    }

    //  Adjust their positions and velocities accordingly (if there was any overlap)
    const v1 = body1.velocity.y;
    const v2 = body2.velocity.y;

    if (!body1.immovable && !body2.immovable) {
      // console.debug('separateY 1', overlap);
      overlap *= 0.5;

      body1.y -= overlap;
      body2.y += overlap;

      let nv1 = Math.sqrt((v2 * v2 * body2.mass) / body1.mass) * ((v2 > 0) ? 1 : -1);
      let nv2 = Math.sqrt((v1 * v1 * body1.mass) / body2.mass) * ((v1 > 0) ? 1 : -1);
      const avg = (nv1 + nv2) * 0.5;

      nv1 -= avg;
      nv2 -= avg;

      body1.velocity.y = avg + nv1 * body1.bounce.y;
      body2.velocity.y = avg + nv2 * body2.bounce.y;
    } else if (!body1.immovable) {
      // console.debug('separateY 2', overlap);
      body1.y -= overlap;
      body1.velocity.y = v2 - v1 * body1.bounce.y;

      //  This is special case code that handles things like horizontal moving platforms you can ride
      if (body2.moves) {
        body1.x += (body2.x - body2.prev.x) * body2.friction.x;
      }
      // console.debug('separateY [0.1] > ', body2.y, overlap);
    } else {
      // console.debug('separateY 3', overlap);
      body2.y += overlap;
      body2.velocity.y = v1 - v2 * body2.bounce.y;

      //  This is special case code that handles things like horizontal moving platforms you can ride
      if (body1.moves) {
        body2.x += (body1.x - body1.prev.x) * body1.friction.x;
      }

      // console.debug('separateY [0.2] > ', body2.y);
    }

    //  If we got this far then there WAS overlap, and separation is complete, so return true
    return true;
  }

  /**
   * Calculates the horizontal overlap between two Bodies and sets their properties accordingly, including:
   * `touching.left`, `touching.right` and `overlapX`.
   *
   * @method Tiny.Physics.Ant#getOverlapX
   * @param {Tiny.Physics.Ant.Body} body1 - The first Body to separate.
   * @param {Tiny.Physics.Ant.Body} body2 - The second Body to separate.
   * @param {boolean} overlapOnly - Is this an overlap only check, or part of separation?
   * @return {float} Returns the amount of horizontal overlap between the two bodies.
   */
  getOverlapX(body1, body2, overlapOnly) {
    let overlap = 0;
    const maxOverlap = body1.deltaAbsX + body2.deltaAbsX + this.OVERLAP_BIAS;
    // console.debug('getOverlapX', body1.deltaX, body2.deltaX, maxOverlap);
    if (body1.deltaX === 0 && body2.deltaX === 0) {
      //  They overlap but neither of them are moving
      body1.embedded = true;
      body2.embedded = true;
    } else if (body1.deltaX > body2.deltaX) {
      //  Body1 is moving right and / or Body2 is moving left
      overlap = body1.right - body2.x;

      if ((overlap > maxOverlap && !overlapOnly) || body1.checkCollision.right === false || body2.checkCollision.left === false) {
        overlap = 0;
      } else {
        body1.touching.none = false;
        body1.touching.right = true;
        body2.touching.none = false;
        body2.touching.left = true;
      }
    } else if (body1.deltaX < body2.deltaX) {
      //  Body1 is moving left and/or Body2 is moving right
      overlap = body1.x - body2.width - body2.x;

      if ((-overlap > maxOverlap && !overlapOnly) || body1.checkCollision.left === false || body2.checkCollision.right === false) {
        overlap = 0;
      } else {
        body1.touching.none = false;
        body1.touching.left = true;
        body2.touching.none = false;
        body2.touching.right = true;
      }
    }

    //  Resets the overlapX to zero if there is no overlap, or to the actual pixel value if there is
    body1.overlapX = overlap;
    body2.overlapX = overlap;

    return overlap;
  }

  /**
  * Calculates the vertical overlap between two Bodies and sets their properties accordingly, including:
  * `touching.up`, `touching.down` and `overlapY`.
  *
  * @method Tiny.Physics.Ant#getOverlapY
  * @param {Tiny.Physics.Ant.Body} body1 - The first Body to separate.
  * @param {Tiny.Physics.Ant.Body} body2 - The second Body to separate.
  * @param {boolean} overlapOnly - Is this an overlap only check, or part of separation?
  * @return {float} Returns the amount of vertical overlap between the two bodies.
  */
  getOverlapY(body1, body2, overlapOnly) {
    let overlap = 0;
    const maxOverlap = body1.deltaAbsY + body2.deltaAbsY + this.OVERLAP_BIAS;
    // console.debug('getOverlapY [1] > ', maxOverlap, body1.deltaY, body2.deltaY);
    if (body1.deltaY === 0 && body2.deltaY === 0) {
      //  They overlap but neither of them are moving
      body1.embedded = true;
      body2.embedded = true;
    } else if (body1.deltaY > body2.deltaY) {
      //  Body1 is moving down and/or Body2 is moving up
      overlap = body1.bottom - body2.y;
      // overlap = body1.y + body1.height / 2 - body2.y + body2.height / 2;
      // console.debug('getOverlapY [2] > ', overlap, body1.bottom, body2.y, body1.sprite.name, body2.sprite.name);
      // [fixed] 防重叠 by 清扬陌客
      if ((overlap > maxOverlap && !overlapOnly) || body1.checkCollision.down === false || body2.checkCollision.up === false) {
        // if (body1.checkCollision.down === false || body2.checkCollision.up === false) {
        overlap = 0;
        // console.debug('getOverlapY [2.1] > ', overlap, maxOverlap, -overlap > maxOverlap);
      } else {
        body1.touching.none = false;
        body1.touching.down = true;
        body2.touching.none = false;
        body2.touching.up = true;

        // console.debug('getOverlapY [2.2] > ', overlap, maxOverlap, -overlap > maxOverlap);
      }
    } else if (body1.deltaY < body2.deltaY) {
      //  Body1 is moving up and/or Body2 is moving down
      overlap = body1.y - body2.bottom;
      // console.debug('getOverlapY [3] > ', overlap);
      if ((-overlap > maxOverlap && !overlapOnly) || body1.checkCollision.up === false || body2.checkCollision.down === false) {
        // [fixed] 防重叠 by 清扬陌客
        // if ((Math.abs(overlap) > maxOverlap && !overlapOnly) || body1.checkCollision.up === false || body2.checkCollision.down === false) {
        // if (body1.checkCollision.up === false || body2.checkCollision.down === false) {
        // console.debug('getOverlapY [3.1] > ', overlap, maxOverlap, -overlap > maxOverlap);
        overlap = 0;
      } else {
        body1.touching.none = false;
        body1.touching.up = true;
        body2.touching.none = false;
        body2.touching.down = true;
        // console.debug('getOverlapY [3.2] > ', overlap, maxOverlap);
      }
    }

    //  Resets the overlapY to zero if there is no overlap, or to the actual pixel value if there is
    body1.overlapY = overlap;
    body2.overlapY = overlap;

    // console.debug('getOverlapY [4] > ', body1.touching, body2.touching);

    return overlap;
  }

  /**
  * The core separation function to separate two circular physics bodies.
  *
  * @method Tiny.Physics.Ant#separateCircle
  * @private
  * @param {Tiny.Physics.Ant.Body} body1 - The first Body to separate. Must have `Body.isCircle` true and a positive `radius`.
  * @param {Tiny.Physics.Ant.Body} body2 - The second Body to separate. Must have `Body.isCircle` true and a positive `radius`.
  * @param {boolean} overlapOnly - If true the bodies will only have their overlap data set, no separation or exchange of velocity will take place.
  * @return {boolean} Returns true if the bodies were separated or overlap, otherwise false.
  */
  separateCircle(body1, body2, overlapOnly) {
    // console.debug('separateCircle');

    //  Set the bounding box overlap values
    this.getOverlapX(body1, body2);
    this.getOverlapY(body1, body2);

    const dx = body2.center.x - body1.center.x;
    const dy = body2.center.y - body1.center.y;

    const angleCollision = Math.atan2(dy, dx);

    let overlap = 0;

    if (body1.isCircle !== body2.isCircle) {
      const rect = {
        x: (body2.isCircle) ? body1.position.x : body2.position.x,
        y: (body2.isCircle) ? body1.position.y : body2.position.y,
        right: (body2.isCircle) ? body1.right : body2.right,
        bottom: (body2.isCircle) ? body1.bottom : body2.bottom,
      };

      const circle = {
        x: (body1.isCircle) ? (body1.position.x + body1.radius) : (body2.position.x + body2.radius),
        y: (body1.isCircle) ? (body1.position.y + body1.radius) : (body2.position.y + body2.radius),
        radius: (body1.isCircle) ? body1.radius : body2.radius,
      };

      if (circle.y < rect.y) {
        if (circle.x < rect.x) {
          overlap = TinyMath.distance(circle.x, circle.y, rect.x, rect.y) - circle.radius;
        } else if (circle.x > rect.right) {
          overlap = TinyMath.distance(circle.x, circle.y, rect.right, rect.y) - circle.radius;
        }
      } else if (circle.y > rect.bottom) {
        if (circle.x < rect.x) {
          overlap = TinyMath.distance(circle.x, circle.y, rect.x, rect.bottom) - circle.radius;
        } else if (circle.x > rect.right) {
          overlap = TinyMath.distance(circle.x, circle.y, rect.right, rect.bottom) - circle.radius;
        }
      }

      overlap *= -1;
    } else {
      overlap = (body1.radius + body2.radius) - TinyMath.distance(body1.center.x, body1.center.y, body2.center.x, body2.center.y);
    }

    //  Can't separate two immovable bodies, or a body with its own custom separation logic
    if (overlapOnly || overlap === 0 || (body1.immovable && body2.immovable) || body1.customSeparateX || body2.customSeparateX) {
      if (overlap !== 0) {
        body1.onOverlap(body2);
        body2.onOverlap(body1);
      }

      //  return true if there was some overlap, otherwise false
      return (overlap !== 0);
    }

    // Transform the velocity vector to the coordinate system oriented along the direction of impact.
    // This is done to eliminate the vertical component of the velocity
    const v1 = {
      x: body1.velocity.x * Math.cos(angleCollision) + body1.velocity.y * Math.sin(angleCollision),
      y: body1.velocity.x * Math.sin(angleCollision) - body1.velocity.y * Math.cos(angleCollision)
    };

    const v2 = {
      x: body2.velocity.x * Math.cos(angleCollision) + body2.velocity.y * Math.sin(angleCollision),
      y: body2.velocity.x * Math.sin(angleCollision) - body2.velocity.y * Math.cos(angleCollision)
    };

    // We expect the new velocity after impact
    const tempVel1 = ((body1.mass - body2.mass) * v1.x + 2 * body2.mass * v2.x) / (body1.mass + body2.mass);
    const tempVel2 = (2 * body1.mass * v1.x + (body2.mass - body1.mass) * v2.x) / (body1.mass + body2.mass);

    // We convert the vector to the original coordinate system and multiplied by factor of rebound
    if (!body1.immovable) {
      body1.velocity.x = (tempVel1 * Math.cos(angleCollision) - v1.y * Math.sin(angleCollision)) * body1.bounce.x;
      body1.velocity.y = (v1.y * Math.cos(angleCollision) + tempVel1 * Math.sin(angleCollision)) * body1.bounce.y;
    }

    if (!body2.immovable) {
      body2.velocity.x = (tempVel2 * Math.cos(angleCollision) - v2.y * Math.sin(angleCollision)) * body2.bounce.x;
      body2.velocity.y = (v2.y * Math.cos(angleCollision) + tempVel2 * Math.sin(angleCollision)) * body2.bounce.y;
    }

    // When the collision angle is almost perpendicular to the total initial velocity vector
    // (collision on a tangent) vector direction can be determined incorrectly.
    // This code fixes the problem

    if (Math.abs(angleCollision) < Math.PI / 2) {
      if ((body1.velocity.x > 0) && !body1.immovable && (body2.velocity.x > body1.velocity.x)) {
        body1.velocity.x *= -1;
      } else if ((body2.velocity.x < 0) && !body2.immovable && (body1.velocity.x < body2.velocity.x)) {
        body2.velocity.x *= -1;
      } else if ((body1.velocity.y > 0) && !body1.immovable && (body2.velocity.y > body1.velocity.y)) {
        body1.velocity.y *= -1;
      } else if ((body2.velocity.y < 0) && !body2.immovable && (body1.velocity.y < body2.velocity.y)) {
        body2.velocity.y *= -1;
      }
    } else if (Math.abs(angleCollision) > Math.PI / 2) {
      if ((body1.velocity.x < 0) && !body1.immovable && (body2.velocity.x < body1.velocity.x)) {
        body1.velocity.x *= -1;
      } else if ((body2.velocity.x > 0) && !body2.immovable && (body1.velocity.x > body2.velocity.x)) {
        body2.velocity.x *= -1;
      } else if ((body1.velocity.y < 0) && !body1.immovable && (body2.velocity.y < body1.velocity.y)) {
        body1.velocity.y *= -1;
      } else if ((body2.velocity.y > 0) && !body2.immovable && (body1.velocity.x > body2.velocity.y)) {
        body2.velocity.y *= -1;
      }
    }

    if (!body1.immovable) {
      body1.x += (body1.velocity.x * this.physicsElapsed) - overlap * Math.cos(angleCollision);
      body1.y += (body1.velocity.y * this.physicsElapsed) - overlap * Math.sin(angleCollision);
    }

    if (!body2.immovable) {
      body2.x += (body2.velocity.x * this.physicsElapsed) + overlap * Math.cos(angleCollision);
      body2.y += (body2.velocity.y * this.physicsElapsed) + overlap * Math.sin(angleCollision);
    }
    body1.onCollide(body2);
    body2.onCollide(body1);
    return true;
  }

  /**
   * Check for intersection against two bodies.
   *
   * @method Tiny.Physics.Ant#intersects
   * @param {Tiny.Physics.Ant.Body} body1 - The first Body object to check.
   * @param {Tiny.Physics.Ant.Body} body2 - The second Body object to check.
   * @return {boolean} True if they intersect, otherwise false.
   */
  intersects(body1, body2) {
    if (body1 === body2) {
      return false;
    }
    if (body1.isCircle) {
      if (body2.isCircle) {
        //  Circle vs. Circle
        return TinyMath.distance(body1.center.x, body1.center.y, body2.center.x, body2.center.y) <= (body1.radius + body2.radius);
      } else {
        //  Circle vs. Rect
        return this.circleBodyIntersects(body1, body2);
      }
    } else {
      if (body2.isCircle) {
        //  Rect vs. Circle
        return this.circleBodyIntersects(body2, body1);
      } else {
        //  Rect vs. Rect
        if (body1.right <= body2.position.x) {
          return false;
        }
        if (body1.bottom <= body2.position.y) {
          return false;
        }
        if (body1.position.x >= body2.right) {
          return false;
        }
        if (body1.position.y >= body2.bottom) {
          return false;
        }
        return true;
      }
    }
  }

  /**
   * Checks to see if a circular Body intersects with a Rectangular Body.
   *
   * @method Tiny.Physics.Ant#circleBodyIntersects
   * @param {Tiny.Physics.Ant.Body} circle - The Body with `isCircle` set.
   * @param {Tiny.Physics.Ant.Body} body - The Body with `isCircle` not set (i.e. uses Rectangle shape)
   * @return {boolean} Returns true if the bodies intersect, otherwise false.
   */
  circleBodyIntersects(circle, body) {
    const x = TinyMath.clamp(circle.center.x, body.left, body.right);
    const y = TinyMath.clamp(circle.center.y, body.top, body.bottom);

    const dx = (circle.center.x - x) * (circle.center.x - x);
    const dy = (circle.center.y - y) * (circle.center.y - y);

    return (dx + dy) <= (circle.radius * circle.radius);
  }

  /**
   * Given the angle (in degrees) and speed calculate the velocity and return it as a Point object, or set it to the given point object.
   * One way to use this is: velocityFromAngle(angle, 200, sprite.velocity) which will set the values directly to the sprites velocity and not create a new Point object.
   *
   * @method Tiny.Physics.Ant#velocityFromAngle
   * @param {number} angle - The angle in degrees calculated in clockwise positive direction (down = 90 degrees positive, right = 0 degrees positive, up = 90 degrees negative)
   * @param {number} [speed=60] - The speed it will move, in pixels per second sq.
   * @param {Tiny.Point|object} [point] - The Point object in which the x and y properties will be set to the calculated velocity.
   * @return {Tiny.Point} - A Point where point.x contains the velocity x value and point.y contains the velocity y value.
   */
  velocityFromAngle(angle, speed = 60, point = null) {
    point = point || new Tiny.Point();
    point.x = (Math.cos(TinyMath.degToRad(angle)) * speed);
    point.y = (Math.sin(TinyMath.degToRad(angle)) * speed);
    return point;
  }

  /**
   * Given the rotation (in radians) and speed calculate the velocity and return it as a Point object, or set it to the given point object.
   * One way to use this is: velocityFromRotation(rotation, 200, sprite.velocity) which will set the values directly to the sprites velocity and not create a new Point object.
   *
   * @method Tiny.Physics.Ant#velocityFromRotation
   * @param {number} rotation - The angle in radians.
   * @param {number} [speed=60] - The speed it will move, in pixels per second sq.
   * @param {Tiny.Point|object} [point=null] - The Point object in which the x and y properties will be set to the calculated velocity.
   * @return {Tiny.Point} - A Point where point.x contains the velocity x value and point.y contains the velocity y value.
   */
  velocityFromRotation(rotation, speed = 60, point) {
    point = point || new Tiny.Point();
    point.x = (Math.cos(rotation) * speed);
    point.y = (Math.sin(rotation) * speed);
    return point;
  }

  /**
   * Given the rotation (in radians) and speed calculate the acceleration and return it as a Point object, or set it to the given point object.
   * One way to use this is: accelerationFromRotation(rotation, 200, sprite.acceleration) which will set the values directly to the sprites acceleration and not create a new Point object.
   *
   * @method Tiny.Physics.Ant#accelerationFromRotation
   * @param {number} rotation - The angle in radians.
   * @param {number} [speed=60] - The speed it will move, in pixels per second sq.
   * @param {Tiny.Point} [point=null] - The Point object in which the x and y properties will be set to the calculated acceleration.
   * @return {Tiny.Point} - A Point where point.x contains the acceleration x value and point.y contains the acceleration y value.
   */
  accelerationFromRotation(rotation, speed = 60, point) {
    point = point || new Tiny.Point();
    point.x = (Math.cos(rotation) * speed);
    point.y = (Math.sin(rotation) * speed);
    return point;
  }

  get paused() {
    return this._paused;
  }

  /**
   * 恢复已暂停的物理系统
   *
   * @method Tiny.Physics.Ant#resume
   */
  pause() {
    this._paused = true;
  }

  /**
  * 将要更新物理系统之前要做的事情放到这里 内部使用 外部不要调用
  * @private
  */
  _preUpdate() {
    let i = this._toRemove.length;
    while (i--) {
      this.removeBody(this._toRemove[i]);
    }
    this._toRemove.length = 0;
  }

  /**
   * 更新物理系统 内部使用 外部不要调用
   * @private
   */
  update() {
    if (this.paused) {
      return;
    }
    this._bodies.forEach((body) => {
      body.preUpdate();
    });
    this._preUpdate();
    this._processCollide();
    this._bodies.forEach((body) => {
      body.postUpdate();
    });
  }

  /**
   * 这里实现一个碰撞检测的hack  在这里对所有碰撞检测的类进行检查
   */
  _processCollide() {
    this._bodies.forEach((body) => {
      if (body.collidesWith.length > 0) {
        this.collide(body.sprite, body.collidesWith);
      }
      if (body.overlapsWith.length > 0) {
        this.overlap(body.sprite, body.overlapsWith);
      }
    });
  }

  /**
   * 把body从物理系统中移除
   * 会触发Tiny.Physics.Ant.EVENTS.ON_BODY_REMOVED事件
   * @method Tiny.Physics.Ant#removeBody
   * @param {Tiny.Physics.Ant.Body} body -要移除的body对象
   * @return {Tiny.Physics.Ant.Body} 已经移除掉的Body对象
   */
  removeBody(body) {
    const idx = this._bodies.indexOf(body);
    if (idx === -1) {
      return body;
    }
    this._bodies.splice(idx, 1);
    this.dispatch(EVENTS.ON_BODY_REMOVED, body);
    return body;
  }

  /**
   * 反弹系数 - 为了兼容P2 对应于 p2.world.defaultContactMaterial.restitution
  * @name Tiny.Physics.Ant#restitution
  * @property {number} restitution - Default coefficient of restitution between colliding bodies. This value is used if no matching ContactMaterial is found for a Material pair.
  */
  get restitution() {
    return this._restitution;
  }

  set restitution(value) {
    this._restitution = value;
  }

  destroy() {
    this._bodies.forEach((body) => {
      body.destroy();
    });
    this._bodies = null;
    if (this.app.physics.ant === this) {
      this.app.physics.ant = null;
    }
    this.app = null;
  }
}
