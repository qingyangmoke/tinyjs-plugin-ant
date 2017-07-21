import * as FACING from './facing';
import * as TinyMath from './core/math';
import * as EVENTS from './EVENTS';
import { default as BodyDebug } from './BodyDebug';
import { default as Bound } from './Bound';

/**
* 物理系统的刚体
* @class Body
* @constructor
* @memberof Tiny.Physics.Ant
*/
class Body extends Tiny.EventEmitter {
  /**
  * @constructor
  * @param {Tiny.Physics.Ant.World} world - Tiny.Physics.Ant.World引用 app.physics.ant
  * @param {Tiny.Sprite} [sprite] - body 关联的sprite对象
   */
  constructor(world, sprite) {
    super();

    sprite = sprite || null;

    /**
    * @name Tiny.Physics.Ant.Body#world
    * @property {Tiny.Physics.Ant.World} world - Ant.World引用
    */
    this.world = world;

    /**
    * @name Tiny.Physics.Ant.Body#app
    * @property {Tiny.Application} app - Tiny application引用.
    */
    this.app = this.world.app;

    /**
    * @name Tiny.Physics.Ant.Body#sprite
    * @property {Tiny.Sprite} sprite - body所属sprite.
    */
    this.sprite = sprite;

    /**
    * @name Tiny.Physics.Ant.Body#type
    * @property {String} type - body类型字符串描述.
    */
    this.type = 'Tiny.Physics.Ant.Body';

    /**
    * @name Tiny.Physics.Ant.Body#enable
    * @property {boolean} enable -  是否启用物理特性，false 不启用，不进行任何的碰撞检测，preUpdate,postUpdate都不会被调用.
    * @default true
    */
    this.enable = true;

    /**
    * 刚体是否是圆形的 通过setCircle设置后会成为true 不要直接设置
    * @default false
    * @private
    */
    this._isCircle = false;

    /**
    * 球形半径 setCircle中设置 - 不要直接设置这个变量
    * @property {number} radius
    * @default
    * @readOnly
    * @private
    */
    this.radius = 0;

    /**
    * @name Tiny.Physics.Ant.Body#offset
    * @property {Tiny.Point} offset - 物理刚体相对于sprite的偏移
    */
    this.offset = new Tiny.Point();

    /**
    * @name Tiny.Physics.Ant.Body#position
    * @property {Tiny.Point} position - 刚体的在屏幕中的位置.
    * @readonly
    */
    this.position = new Tiny.Point(sprite.x, sprite.y);

    /**
    * @name Tiny.Physics.Ant.Body#prev
    * @property {Tiny.Point} prev - 刚体的上一次的位置，用于计算两次update位置的差异
    * @readonly
    * @private
    */
    this.prev = new Tiny.Point(this.position.x, this.position.y);

    /**
    * @name Tiny.Physics.Ant.Body#allowRotation
    * @property {boolean} allowRotation - 是否允许旋转
    * @default true
    */
    this.allowRotation = true;

    /**
    * The Body's rotation in degrees, as calculated by its angularVelocity and angularAcceleration. Please understand that the collision Body
    * itself never rotates, it is always axis-aligned. However these values are passed up to the parent Sprite and updates its rotation.
    * @name Tiny.Physics.Ant.Body#allowRotation
    * @property {number} rotation
    * @private
    */
    this.rotation = sprite.rotation;

    /**
    * @private
    * @name Tiny.Physics.Ant.Body#preRotation
    * @property {number} preRotation - 上一次旋转的值.
    * @readonly
    */
    this.preRotation = this.rotation;

    /**
    * @name Tiny.Physics.Ant.Body#width
    * @property {number} width - 只读，物理刚体的宽度.
    * @readonly
    */
    this.width = sprite.width;

    /**
    * @name Tiny.Physics.Ant.Body#height
    * @property {number} height - 只读，物理刚体的高度.
    * @readonly
    */
    this.height = sprite.height;

    /**
    * @private
    * @property {number} sourceWidth - The un-scaled original size.
    * @readonly
    */
    this.sourceWidth = sprite.width;

    /**
    * @private
    * @property {number} sourceHeight - The un-scaled original size.
    * @readonly
    */
    this.sourceHeight = sprite.height;

    if (sprite.texture) {
      this.sourceWidth = sprite.texture.frame.width;
      this.sourceHeight = sprite.texture.frame.height;
    }

    /**
    * @private
    * @property {number} halfWidth - The calculated width / 2 of the physics body.
    * @readonly
    */
    this.halfWidth = Math.abs(sprite.width / 2);

    /**
    * @private
    * @property {number} halfHeight - The calculated height / 2 of the physics body.
    * @readonly
    */
    this.halfHeight = Math.abs(sprite.height / 2);

    /**
    * @name Tiny.Physics.Ant.Body#center
    * @property {Tiny.Point} center - Body的中心坐标.
    * @readonly
    */
    this.center = new Tiny.Point(sprite.x + this.halfWidth, sprite.y + this.halfHeight);

    /**
    * @name Tiny.Physics.Ant.Body#velocity
    * @property {Tiny.Point} velocity - Body移动的速度,以每秒像素为单位。
    */
    this.velocity = new Tiny.Point();

    /**
    * @private
    * @name Tiny.Physics.Ant.Body#velocity
    * @property {Tiny.Point} newVelocity - 新的速度 在Body.preUpdate期间计算
    * @readonly
    */
    this.newVelocity = new Tiny.Point();

    /**
    * @name Tiny.Physics.Ant.Body#velocity
    * @property {Tiny.Point} deltaMax - 基于delta x / y值更新Sprite位置。 您可以使用deltaMax设置上限
    */
    this.deltaMax = new Tiny.Point();

    /**
    * @name Tiny.Physics.Ant.Body#acceleration
    * @property {Tiny.Point} acceleration - 加速度,以每秒像素为单位
    */
    this.acceleration = new Tiny.Point();

    /**
    * @private
    * @property {Tiny.Point} drag - The drag applied to the motion of the Body.
    */
    this.drag = new Tiny.Point();

    /**
    * @name Tiny.Physics.Ant.Body#allowGravity
    * @property {boolean} allowGravity - 是否允许这个Body受重力的影响
    * @default true
    */
    this.allowGravity = true;

    /**
    * @name Tiny.Physics.Ant.Body#gravity
    * @property {Tiny.Point} gravity -作用于Body的局部重力。 如果非零，改body重力=全局重力+自身设置的重力，除非Body.allowGravity被设置为false。
    */
    this.gravity = new Tiny.Point();

    /**
    * @name Tiny.Physics.Ant.Body#bounce
    * @property {Tiny.Point} bounce - 碰撞时身体的弹性。 bounce.x / y = 1表示完全反弹，bounce.x / y = 0.5表示回弹速度为50％。
    */
    this.bounce = new Tiny.Point();

    this.bounce.x = this.world.restitution;
    this.bounce.y = this.world.restitution;

    /**
    * @name Tiny.Physics.Ant.Body#worldBounce
    * @property {Tiny.Point} worldBounce - 身体与世界的距离碰撞时的弹性。默认情况下，该属性为“null”，在这种情况下使用“Body.bounce”。 设置此属性到一个Tiny.Point对象，使用全局world范围的反弹值，会覆盖bounce。
    */
    this.worldBounce = null;

    /**
    * @name Tiny.Physics.Ant.Body#maxVelocity
    * @property {Tiny.Point} maxVelocity - 物体可以达到的最大速度（以每秒像素为单位）。
    * @default x=10000, y=10000
    */
    this.maxVelocity = new Tiny.Point(10000, 10000);

    /**
    * @name Tiny.Physics.Ant.Body#friction
    * @property {Tiny.Point} friction - 摩擦力
    * @default x=1,y=0
    */
    this.friction = new Tiny.Point(1, 0);

    /**
    * @name Tiny.Physics.Ant.Body#angularVelocity
    * @property {number} angularVelocity - 角速度，控制body的旋转速度。 以度/秒为单位。
    * @default 0
    */
    this.angularVelocity = 0;

    /**
    * @name Tiny.Physics.Ant.Body#angularAcceleration
    * @property {number} angularAcceleration - 角加速度，角速度的变化率。 以度/秒为单位。
    * @default 0
    */
    this.angularAcceleration = 0;

    /**
    * @name Tiny.Physics.Ant.Body#angularDrag
    * @property {number} angularDrag - 在body旋转期间施加的阻力。 以度/秒为单位进行测量。
    * @default 0
    */
    this.angularDrag = 0;

    /**
    * @name Tiny.Physics.Ant.Body#maxAngular
    * @property {number} maxAngular - Body可以达到的每秒最大角速度。
    * @default 1000
    */
    this.maxAngular = 1000;

    /**
    * @name Tiny.Physics.Ant.Body#mass
    * @property {number} mass - 身体的质量。 当两个物体碰撞时，它们的质量被用于计算以确定速度的改变。
    * @default
    */
    this.mass = 1;

    /**
    * @name Tiny.Physics.Ant.Body#angle
    * @property {number} angle - body速度角度（以弧度为单位）
    * @readonly
    */
    this.angle = 0;

    /**
    * @name Tiny.Physics.Ant.Body#speed
    * @property {number} speed - Body的速度，根据velocity计算得到
    * @readonly
    */
    this.speed = 0;

    /**
    * @name Tiny.Physics.Ant.Body#facing
    * @property {number} facing - 身体的运动方向或面对的方向。
    * @readonly
    * @default Tiny.Physics.Ant.FACING.NONE
    */
    this.facing = FACING.NONE;

    /**
    * @private
    * @name Tiny.Physics.Ant.Body#immovable
    * @property {boolean} immovable - 静态物体不会受到其他body的任何影响，请通过static进行设置
    * @default
    */
    this.immovable = false;

    /**
    * 如果您通过补间动画移动Body，其本地x / y位置不会实际更改，那么您应该设置Body.moves = false。 否则它很可能会飞离屏幕。 如果您希望物理系统移动身体，则将移动设置为true。
    * @name Tiny.Physics.Ant.Body#moves
    * @property {boolean} moves - 设置为true以允许物理系统移动此Body，否则为false以手动移动。
    * @default
    */
    this.moves = true;

    /**
    * 高级属性 此标志允许您禁用Tiny.Physics.Ant.World.separate。 使用您自己自定义separateX方法，这样您可以自定义去创建任何类型的碰撞响应。
    * @name Tiny.Physics.Ant.Body#customSeparateX
    * @property {boolean} customSeparateX - 使用自定义的separateX方法 不建议使用
    * @default false
    * @private
    */
    this.customSeparateX = false;

    /**
    * 高级属性 此标志允许您禁用Tiny.Physics.Ant.World.separate。 使用您自己自定义separateX方法，这样您可以自定义去创建任何类型的碰撞响应。
    * @name Tiny.Physics.Ant.Body#customSeparateY
    * @property {boolean} customSeparateY - 使用自定义的separateY方法
    * @default false
    * @private
    */
    this.customSeparateY = false;

    /**
    * 当这个Body与另一个物体碰撞时，重叠的x部分被存储在这里。
    * @name Tiny.Physics.Ant.Body#overlapX
    * @property {number} overlapX - 碰撞期间的水平重叠量。
    * @default 0
    */
    this.overlapX = 0;

    /**
     * 当这个Body与另一个物体碰撞时，重叠的y部分被存储在这里。
     * @name Tiny.Physics.Ant.Body#overlapY
     * @property {number} overlapX - 碰撞期间的垂直重叠量。
     * @default 0
     */
    this.overlapY = 0;

    /**
    * 如果“Body.isCircle”为true，那么该body与另一个圆形体发生碰撞时，重叠的量存储在这个变量里。
    * @name Tiny.Physics.Ant.Body#overlapR
    * @property {number} overlapR - 两个圆形body碰撞时的重叠量。
    */
    this.overlapR = 0;

    /**
    * 如果一个身体与另一个身体重叠，但他们都没有移动，这个值会被设置成true。
    * @name Tiny.Physics.Ant.Body#embedded
    * @property {boolean} embedded - Body embed value.
    */
    this.embedded = false;

    /**
    * 如果设置为true，则可以将Body自动设置为与物理系统边界进行碰撞检测，将物体限制在物理边界之内。 否则会超出物理边界之外。
    * @name Tiny.Physics.Ant.Body#collideWorldBounds
    * @property {boolean} collideWorldBounds - body与物理边界是否进行碰撞检测
    */
    this.collideWorldBounds = false;

    /**
    * 设置checkCollision属性以控制Body处理哪个方向的碰撞。
    * 例如checkCollision.up =false 表示上移动时不会进行碰撞检测
    * 如果您需要完全禁用一个Body，请使用`body.enable = false'，这样也会禁用运动。
    * 如果您需要禁用碰撞和/或重叠overlaps检查，但保留运动，请设置`checkCollision.none = true'。
    * @name Tiny.Physics.Ant.Body#checkCollision
    * @property {object} checkCollision - 设置checkCollision属性以控制Body处理哪个方向的碰撞
    * @default { none: false, any: true, up: true, down: true, left: true, right: true };
    */
    this.checkCollision = { none: false, any: true, up: true, down: true, left: true, right: true };

    /**
    * @name Tiny.Physics.Ant.Body#touching
    * @property {object} touching - 当body对象与另一个对象相撞时，用来记录发生碰撞的位置.例如touch.up = true表示碰撞发生在这个身体的顶部
    * @default { none: true, up: false, down: false, left: false, right: false };
    * @readonly
    */
    this.touching = { none: true, up: false, down: false, left: false, right: false };

    /**
    * 保存上次碰撞的数据
    * @name Tiny.Physics.Ant.Body#wasTouching
    * @property {object} wasTouching - 保存上次碰撞的数据
    * @private
    */
    this.wasTouching = { none: true, up: false, down: false, left: false, right: false };

    /**
    * @name Tiny.Physics.Ant.Body#blocked
    * @property {object} blocked - 一个对象，包含该body被阻止移动的面。当Body与物理边界相撞时，此对象将使用布尔值填充。例如，如果blocked.up为true，那么Body不能向上移动。
    * @default { up: false, down: false, left: false, right: false }
    */
    this.blocked = { up: false, down: false, left: false, right: false };

    /**
    * @name Tiny.Physics.Ant.Body#dirty
    * @property {boolean} dirty - 一个标识，记录这个Body是否正处在在preUpdate（true）或postUpdate（false）状态下
    * @readonly
    * @default false
    */
    this.dirty = false;

    /**
    * 如果为true，则Body将根据Sprite.getBounds（）尺寸进行检查，并相应地调整其宽度和高度。
    * 如果为false，它将通过Sprite的scale来比较，并在scale变化的时候调整其宽高
    * 通常，如果您的精灵是响应式显示对象的子级或者在Sprite的scale属性不会改变，但其parent的scale变化正在影响其大小的情况下，需要启用syncBounds=true,
    * @name Tiny.Physics.Ant.Body#dirty
    * @property {boolean} syncBounds - 如果为true，则Body将根据Sprite.getBounds（）尺寸进行检查，并相应地调整其宽度和高度。
    * @default false
    * @private
    */
    this.syncBounds = false;

    /**
    * @property {boolean} stopVelocityOnCollide - 由'moveTo'和'moveFrom'方法设置。
    * @private
    * @deprecated
    */
    // this.stopVelocityOnCollide = true;

    /**
    * @property {boolean} _reset
    * @private
    */
    this._reset = true;

    /**
    * @property {number} _sx
    * @private
    */
    this._sx = sprite.scale.x;

    /**
    * @property {number} _sy
    * @private
    */
    this._sy = sprite.scale.y;

    /**
    * @property {number} _dx
    * @private
    */
    this._dx = 0;

    /**
    * @property {number} _dy
    * @private
    */
    this._dy = 0;

    /**
     * 需要与该Body进行碰撞检测的对象数组 放入该数组会自动完成碰撞检测
     * 该数组中的元素与该body不会重叠 碰撞后会根据物理特性进行位置等改变
     * @name Tiny.Physics.Ant.Body#collidesWith
     * @property {Array<Sprite>} collidesWith - 需要与该物体进行碰撞检测的对象数组
     * @private
     */
    this.collidesWith = [];

    /**
     * 需要与该Body进重叠overlap检测对象数组 放入该数组会自动完成重叠检测 并不会改变物理特性 物体可以重叠
     * @name Tiny.Physics.Ant.Body#overlapsWith
     * @property {Array<Sprite>} overlapsWith - 需要与该物体进行重叠检测的对象数组
     * @private
     */
    this.overlapsWith = [];

    /**
     * 调试的Body信息
     * @private
     */
    this.debugBody = null;
  }

  /**
   * @name Tiny.Physics.Ant.Body#isCircle
   * @property {boolean} isCircle 刚体是否是圆形的只读属性，通过setCircle设置后会成为true 不要直接操作
   * @default false
   * @readonly
   */
  get isCircle() {
    return this._isCircle;
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
   * @private
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
  * @private
  * @method Tiny.Physics.Ant.Body#postUpdate
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
    this.prev.x = this.position.x;
    this.prev.y = this.position.y;
  }

  /**
  * @private
  * @method Tiny.Physics.Ant.Body#checkWorldBounds
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

    this._isCircle = false;
    this.radius = 0;
    this.shapeChanged();
  }

  /**
   *  刚体设置成矩形 和 P2的接口保持一直 已原来sprite矩形中心为中心
   * @param {number} [width] - 矩形的宽度
   * @param {number} [height] - 矩形的高度
   * @param {number} [offsetX=0] - x偏移量
   * @param {number} [offsetY=0] - y偏移量
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

      this._isCircle = true;
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
      this._isCircle = false;
    }

    this.shapeChanged();
  }

  /**
  * 重置所有body物理属性
  * @method Tiny.Physics.Ant.Body#reset
  * @param {number} x - x 坐标.
  * @param {number} y - y 坐标
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
  * 返回物理body的Bound
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
  * 检查某一个点是否在body里
  * @method Tiny.Physics.Ant.Body#hitTest
  * @param {number} x - x 坐标
  * @param {number} y - y 坐标
  * @return {boolean} true or false
  */
  hitTest(x, y) {
    return (this.isCircle) ? Tiny.Circle.contains.call(this, x, y) : Tiny.Rectangle.contains.call(this, x, y);
  }

  /**
  * 是否在物理系统的下边界
  * @property Tiny.Physics.Ant.Body#isOnFloor
  * @return {boolean} True 接触到了下边界
  */
  get isOnFloor() {
    return this.blocked.down;
  }

  /**
  * 是否在物理系统的上边界
  * @property Tiny.Physics.Ant.Body#isOnCeiling
  * @return {boolean} True 接触到了上边界.
  */
  get isOnCeiling() {
    return this.blocked.up;
  }

  /**
  * 是否在物理系统的左边界
  * @property Tiny.Physics.Ant.Body#isOnLeft
  * @return {boolean} True 接触到了左边界.
  */
  get isOnLeft() {
    return this.blocked.left;
  }

  /**
  * 是否在物理系统的右边界
  * @property Tiny.Physics.Ant.Body#isOnRight
  * @return {boolean} True 接触到了右边界.
  */
  get isOnRight() {
    return this.blocked.right;
  }

  /**
  * deltaX 的绝对值
  * @private
  * @method Tiny.Physics.Ant.Body#deltaAbsX
  * @return {number} deltaX 的绝对值.
  */
  get deltaAbsX() {
    return Math.abs(this.deltaX);
  }

  /**
  * deltaY 的绝对值.
  * @private
  * @method Tiny.Physics.Ant.Body#deltaAbsY
  * @return {number} deltaY 的绝对值 正数.
  */
  get deltaAbsY() {
    return Math.abs(this.deltaY);
  }

  /**
  * 位置在x方向差值
  * 如果是向右移动就是正数 如果是向左移动就是负数
  * @private
  * @method Tiny.Physics.Ant.Body#deltaX
  * @return {number} The delta value.如果是向右移动就是正数 如果是向左移动就是负数
  */
  get deltaX() {
    return this.position.x - this.prev.x;
  }

  /**
  * 位置在y方向差值
  * 如果是向下移动就是正数 如果是向上移动就是负数
  * @private
  * @method Tiny.Physics.Ant.Body#deltaY
  * @return {number} 位置在y方向差值  如果是向下移动就是正数 如果是向上移动就是负数
  */
  get deltaY() {
    return this.position.y - this.prev.y;
  }

  /**
  * Body.rotation 角度的差值
  * 顺时针旋转就是正数，逆时针就是负数
  * @private
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
   * @private
   * @param {Tiny.Physics.Ant.Body} body - the body which overlap on
   */
  onOverlap(body) {
    this.dispatch(EVENTS.ON_OVER_LAP, this.sprite, body.sprite);
  }

  /**
  * @private
  * @param {Tiny.Physics.Ant.Body} body - the body which collide
  */
  onCollide(body) {
    this.dispatch(EVENTS.ON_COLLIDE, this.sprite, body.sprite);
  }

  /**
   * 把自己添加到物理系统中
   * @method Tiny.Physics.Ant.Body#addToWorld
   */
  addToWorld() {
    this.world.addBody(this);
  }

  /**
   * 将body从物理系统删除，从而也解除了sprite的物理属性
   * @method Tiny.Physics.Ant.Body#removeFromWorld
   */
  removeFromWorld() {
    this.world.removeBodyNextStep(this);
  }

  /**
  * 以一个固定的速度朝着一个目标点(x,y)匀速运动
  * Note: 需要注意的是 移动到了目标点也不会停止运动 而是继续朝着这个角度继续移动，如果设置了达到目标点最大时间 那么会根据最大时间来计算移动速度
  * @method Tiny.Physics.Ant.Body#moveTo
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
   * @method Tiny.Physics.Ant.Body#accelerateTo
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
  * @private
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
   * @private
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
   * @method Tiny.Physics.Ant.Body#addCollides
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
   * @method Tiny.Physics.Ant.Body#removeCollides
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
   * @method Tiny.Physics.Ant.Body#removeAllCollides
   * @param {Tiny.Sprite|Array<Tiny.Sprite>} objects - 之前添加的需要和当前Body进行碰撞检测的对象
   */
  removeAllCollides() {
    this.collidesWith = [];
  }

  /**
   * 私有对象 不要调用 从内部数组中 删掉一个碰撞对象
   * @private
   * @param {*} object
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
   * @private
   * @param {Tiny.Sprite|Array<Tiny.Sprite>} objects - 需要和当前Body进行碰撞检测的对象
   */
  containsOverlap(object) {
    if (object instanceof Body) {
      object = object.sprite;
    }
    return this.overlapsWith.indexOf(object) > -1;
  }

  /**
   * @private
   */
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
  * @method Tiny.Physics.Ant.Body#addOverlaps
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
  * @method Tiny.Physics.Ant.Body#removeOverlaps
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
   * @method Tiny.Physics.Ant.Body#removeAllOverlaps
   * @param {Tiny.Sprite|Array<Tiny.Sprite>} objects - 之前添加的需要和当前Body进行碰撞检测的对象
   */
  removeAllOverlaps() {
    this.overlapsWith = [];
  }

  /**
  * 私有对象 不要调用 从内部数组中 删掉一个重叠交叉检测的对象
  * @private
  * @param {*} object
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

export default Body;
