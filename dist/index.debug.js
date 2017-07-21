/*!
 * Tiny.Physics.Ant
 * Description: 轻量级物理引擎，从Phaser 的arcade的改造过来的 感谢Phaser提供的解决方案
 * Author: 采东 <qingyangmoke@qq.com>
 * Version: v0.0.4
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Ant"] = factory();
	else
		root["Tiny"] = root["Tiny"] || {}, root["Tiny"]["Physics"] = root["Tiny"]["Physics"] || {}, root["Tiny"]["Physics"]["Ant"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/Users/song/Develop/github/tinyjs-plugin-ant/dist";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EVENTS = exports.Math = exports.startSystem = undefined;

	var _world = __webpack_require__(2);

	var _world2 = _interopRequireDefault(_world);

	var _utils = __webpack_require__(9);

	var Utils = _interopRequireWildcard(_utils);

	var _math = __webpack_require__(6);

	var Math = _interopRequireWildcard(_math);

	var _EVENTS = __webpack_require__(7);

	var EVENTS = _interopRequireWildcard(_EVENTS);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*!
	 * Name: Tiny.Physics.Ant
	 * Description: 轻量级物理引擎，从Phaser 的arcade的改造过来的 感谢Phaser提供的解决方案
	 * Author: 清扬陌客
	 * Version: v0.0.1
	 */

	/**
	* Tiny.js
	* @external Tiny
	* @see {@link http://tinyjs.net/}
	*/

	/**
	 * @namespace Tiny
	 */

	/**
	 * @namespace Physics
	 * @memberof Tiny
	 */

	/**
	* @namespace Ant
	* @memberof Tiny.Physics
	*/

	/**
	 * @class Math
	 * @memberof Tiny.Physics.Ant
	 */

	var system = null;
	/**
	 * 启用ant物理系统
	 * @method Tiny.Physics.Ant#startSystem
	 * @param {Tiny.Application} app
	 * @param {object} config
	 */
	function startSystem(app, config) {
	  if (system === null) {
	    system = new _world2.default(app, config);
	    app.onUpdate(function () {
	      system.update();
	    });
	  } else {
	    console.warn('物理系统已经启用了，请不要重复调用！');
	  }
	}

	exports.startSystem = startSystem;
	exports.Math = Math;
	exports.EVENTS = EVENTS;

	// TODO:: 未完成

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Group = __webpack_require__(3);

	var _Group2 = _interopRequireDefault(_Group);

	var _Body = __webpack_require__(4);

	var _Body2 = _interopRequireDefault(_Body);

	var _EVENTS = __webpack_require__(7);

	var EVENTS = _interopRequireWildcard(_EVENTS);

	var _math = __webpack_require__(6);

	var TinyMath = _interopRequireWildcard(_math);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	* World
	* @class World
	* @constructor
	* @memberof Tiny.Physics.Ant
	*/
	var World = function (_Tiny$EventEmitter) {
	  _inherits(World, _Tiny$EventEmitter);

	  /**
	   * @constructor
	   * @param {Tiny.Application} app - Tiny.Application实例
	   * @param {object} config - 配置 {
	      gravity: [0, 0],
	      debug: {
	        lineWidth: 1,
	        alpha: 1,
	        fill: false,
	        fillColor: 0xff0000,
	        lineColor: 0x0000ff,
	      }
	    }
	   */
	  function World(app, config) {
	    _classCallCheck(this, World);

	    var _this = _possibleConstructorReturn(this, (World.__proto__ || Object.getPrototypeOf(World)).call(this));

	    if (config === undefined) {
	      config = {
	        gravity: [0, 0]
	      };
	    } else {
	      if (!config.hasOwnProperty('gravity')) {
	        config.gravity = [0, 0];
	      }
	    }
	    _this.type = 'Tiny.Physics.Ant.World';

	    /**
	        * @property {Tiny.Application} app - Tiny.Application实例
	        * @public
	        */
	    _this.app = app;

	    /**
	    * 给Tiny.Application 增加了一个physics命名空间 所有的物理系统都放到这个命名空间下
	    */
	    _this.app.physics = _this.app.physics || {};

	    /**
	     * 注入到app 物理引擎命名空间下
	     */
	    _this.app.physics.ant = _this;

	    /**
	    * @property {object} config - The World configuration object.
	    * @protected
	    */
	    _this.config = config;

	    /**
	    * @property {Tiny.Point} gravity - The World gravity setting. Defaults to x: 0, y: 0, or no gravity.
	    */
	    _this.gravity = new Tiny.Point();
	    _this.gravity.x = config.gravity[0];
	    _this.gravity.y = config.gravity[1];

	    /**
	     * @property {Tiny.Rectangle} bounds - The bounds inside of which the physics world exists. Defaults to match the world bounds.
	     */
	    _this.bounds = new Tiny.Rectangle(0, 0, 0, 0);

	    /**
	    * Set the checkCollision properties to control for which bounds collision is processed.
	    * For example checkCollision.down = false means Bodies cannot collide with the World.bounds.bottom.
	    * @property {object} checkCollision - An object containing allowed collision flags.
	    */
	    _this.checkCollision = { up: true, down: true, left: true, right: true };

	    /**
	    * @property {number} maxObjects - Used by the QuadTree to set the maximum number of objects per quad.
	    */
	    _this.maxObjects = 10;

	    /**
	    * @property {number} maxLevels - Used by the QuadTree to set the maximum number of iteration levels.
	    */
	    _this.maxLevels = 4;

	    /**
	    * @property {number} OVERLAP_BIAS - A value added to the delta values during collision checks.
	    */
	    _this.OVERLAP_BIAS = 4;

	    /**
	    * @property {boolean} forceX - If true World.separate will always separate on the X axis before Y. Otherwise it will check gravity totals first.
	    */
	    _this.forceX = false;

	    /**
	    * @property {boolean} skipQuadTree - If true the QuadTree will not be used for any collision. QuadTrees are great if objects are well spread out in your game, otherwise they are a performance hit. If you enable this you can disable on a per body basis via `Body.skipQuadTree`.
	    */
	    _this.skipQuadTree = true;

	    /**
	    * @property {boolean} _paused - If `true` the `Body.preUpdate` method will be skipped, halting all motion for all bodies. Note that other methods such as `collide` will still work, so be careful not to call them on paused bodies.
	    */
	    _this._paused = false;

	    /**
	    * @property {number} _total - Internal cache var.
	    * @private
	    */
	    _this._total = 0;

	    _this._restitution = 0;

	    _this._toRemove = [];

	    _this._bodies = [];

	    // 设置帧率 60dps
	    _this.physicsElapsed = 1 / 60;

	    // 设置物理系统边界 和游戏边界一样
	    _this.setBoundsToWorld(true, true, true, true);
	    return _this;
	  }

	  /**
	   * 触发指定事件事件
	   * @private
	   * @method Tiny.Physics.Ant.World#dispatch
	   * @param {String} eventName
	   * @param {any} eventData
	   */


	  _createClass(World, [{
	    key: 'dispatch',
	    value: function dispatch(eventName) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      this.emit.apply(this, arguments);
	    }

	    /**
	     * 设置ant物理系统的边界
	     * @method Tiny.Physics.Ant.World#setBounds
	     * @param {number} x - 物理系统边界的左上角x坐标.
	     * @param {number} y - 物理系统边界的左上角y坐标.
	     * @param {number} width - 物理系统边界的宽度.
	     * @param {number} height - 物理系统边界的高度.
	     * @param {boolean} [left=true] - 是否启用左边界 默认true
	     * @param {number} [right=true] - 是否启用右边界 默认true.
	     * @param {number} [top=true] - 是否启用上边界 默认true.
	     * @param {number} [bottom=true] - 是否启用下边界 默认true.
	     */

	  }, {
	    key: 'setBounds',
	    value: function setBounds(x, y, width, height) {
	      var left = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
	      var right = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
	      var top = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;
	      var bottom = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : true;

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
	    * @method Tiny.Physics.Ant.World#setBoundsToWorld
	    * @param {boolean} [left=true] - 是否设置ant物理系统左边界
	    * @param {boolean} [right=true] - 是否设置ant物理系统右边界
	    * @param {boolean} [top=true] - 是否设置ant物理系统上边界
	    * @param {boolean} [bottom=true] - 是否设置ant物理系统下边界
	    */

	  }, {
	    key: 'setBoundsToWorld',
	    value: function setBoundsToWorld(left, right, top, bottom) {
	      this.setBounds(0, 0, this.app.renderer.width, this.app.renderer.height, left, right, top, bottom);
	    }

	    /**
	     * 对Tiny显示对象或数组 启用物理特性 参考了p2 保持了和p2的方法兼容性
	     * 调用后会自动在Tiny.Sprite中注入body对象 可以用过sprite.body来访问和操作物理系统
	     * @method Tiny.Physics.Ant.World#enable
	     * @param {Tiny.Sprite|Array<Tiny.Sprite>} object - Tiny显示对象或者对象数组
	     * @param {boolean} [debug=true] - 是否开启Body调试
	     * @param {boolean} [children=false] - 是否启用子级元素
	     */

	  }, {
	    key: 'enable',
	    value: function enable(object) {
	      var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	      var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	      var i = 1;
	      if (Array.isArray(object)) {
	        i = object.length;
	        while (i--) {
	          if (object[i] instanceof _Group2.default) {
	            this.enable(object[i].children, debug, children);
	          } else {
	            this.enableBody(object[i], debug);
	            if (children && object[i].hasOwnProperty('children') && object[i].children.length > 0) {
	              this.enable(object[i], debug, true);
	            }
	          }
	        }
	      } else {
	        if (object instanceof _Group2.default) {
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
	     * @method Tiny.Physics.Ant.World#enableBody
	     * @param {Tiny.Sprite|object} object - Tiny中的显示对象 Tiny.Sprite
	     * @param {boolean} [debug=false] - 是否启用body调试
	     */

	  }, {
	    key: 'enableBody',
	    value: function enableBody(object) {
	      var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	      if (!object.body) {
	        object.body = new _Body2.default(this, object);
	        object.body.debug = debug;
	        if (typeof object.anchor !== 'undefined') {
	          object.anchor.set(0.5, 0.5);
	        }
	        this.addBody(object.body);
	      }
	    }

	    /**
	    * 添加一个body刚体到物理系统中
	    * @method Tiny.Physics.Ant.World#addBody
	    * @param {Tiny.Physics.Ant.Body} body - 刚体.
	    */

	  }, {
	    key: 'addBody',
	    value: function addBody(body) {
	      if (this._toRemove) {
	        for (var i = 0; i < this._toRemove.length; i++) {
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
	     * @private
	     * @method Tiny.Physics.Ant.World#removeBodyNextStep
	     * @param {Tiny.Physics.Ant.Body} body - 要延迟到下一次渲染删除的Body对象
	     */

	  }, {
	    key: 'removeBodyNextStep',
	    value: function removeBodyNextStep(body) {
	      this._toRemove.push(body);
	    }

	    /**
	     * A tween-like function that takes a starting velocity and some other factors and returns an altered velocity.
	     * Based on a function in Flixel by @ADAMATOMIC
	     * @private
	     * @method Tiny.Physics.Ant#computeVelocity
	     * @param {number} axis - 0 for nothing, 1 for horizontal, 2 for vertical.
	     * @param {Tiny.Physics.Ant.Body} body - The Body object to be updated.
	     * @param {number} velocity - Any component of velocity (e.g. 20).
	     * @param {number} acceleration - Rate at which the velocity is changing.
	     * @param {number} drag - Really kind of a deceleration, this is how much the velocity changes if Acceleration is not set.
	     * @param {number} [max=10000] - An absolute value cap for the velocity.
	     * @return {number} The altered Velocity value.
	     */

	  }, {
	    key: 'computeVelocity',
	    value: function computeVelocity(axis, body, velocity, acceleration, drag) {
	      var max = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 10000;

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
	    * 检查两个sprite是否发生重叠
	    * @private
	    * @method Tiny.Physics.Ant.World#overlap
	    * @param {Tiny.Sprite|array} object1 - Tiny.Sprite
	    * @param {Tiny.Sprite|array} object2 - Tiny.Sprite
	    * @return {boolean}
	    */

	  }, {
	    key: 'overlap',
	    value: function overlap(object1, object2) {
	      var overlapCallback = null;
	      var processCallback = null;
	      var callbackContext = this;
	      this._total = 0;
	      if (!Array.isArray(object1) && Array.isArray(object2)) {
	        for (var i = 0; i < object2.length; i++) {
	          this.collideHandler(object1, object2[i], overlapCallback, processCallback, callbackContext, true);
	        }
	      } else if (Array.isArray(object1) && !Array.isArray(object2)) {
	        for (var _i = 0; _i < object1.length; _i++) {
	          this.collideHandler(object1[_i], object2, overlapCallback, processCallback, callbackContext, true);
	        }
	      } else if (Array.isArray(object1) && Array.isArray(object2)) {
	        for (var _i2 = 0; _i2 < object1.length; _i2++) {
	          for (var j = 0; j < object2.length; j++) {
	            this.collideHandler(object1[_i2], object2[j], overlapCallback, processCallback, callbackContext, true);
	          }
	        }
	      } else {
	        this.collideHandler(object1, object2, overlapCallback, processCallback, callbackContext, true);
	      }
	      return this._total > 0;
	    }

	    /**
	     * 碰撞检测
	     * @private
	     * @method Tiny.Physics.Ant.World#collide
	     * @param {Tiny.Sprite|array} object1 - Tiny.Sprite
	     * @param {Tiny.Sprite|array} object2 - Tiny.Sprite
	     * @return {boolean}
	     */

	  }, {
	    key: 'collide',
	    value: function collide(object1, object2) {
	      var collideCallback = null;
	      var processCallback = null;
	      var callbackContext = this;

	      this._total = 0;

	      if (!Array.isArray(object1) && Array.isArray(object2)) {
	        for (var i = 0; i < object2.length; i++) {
	          this.collideHandler(object1, object2[i], collideCallback, processCallback, callbackContext, false);
	        }
	      } else if (Array.isArray(object1) && !Array.isArray(object2)) {
	        for (var _i3 = 0; _i3 < object1.length; _i3++) {
	          this.collideHandler(object1[_i3], object2, collideCallback, processCallback, callbackContext, false);
	        }
	      } else if (Array.isArray(object1) && Array.isArray(object2)) {
	        for (var _i4 = 0; _i4 < object1.length; _i4++) {
	          for (var j = 0; j < object2.length; j++) {
	            this.collideHandler(object1[_i4], object2[j], collideCallback, processCallback, callbackContext, false);
	          }
	        }
	      } else {
	        this.collideHandler(object1, object2, collideCallback, processCallback, callbackContext, false);
	      }

	      return this._total > 0;
	    }

	    /**
	    * 私有内部使用的碰撞检测方法
	    * @private
	    * @method Tiny.Physics.Ant.World#collideHandler
	    * @param {Tiny.Sprite} object1 - Tiny.Sprite
	    * @param {Tiny.Sprite} object2 - Tiny.Sprite
	    * @param {function} collideCallback - 已废弃
	    * @param {function} processCallback - 已废弃
	    * @param {object} callbackContext - 已废弃
	    * @param {boolean} overlapOnly - true 只检查overlap
	    */

	  }, {
	    key: 'collideHandler',
	    value: function collideHandler(object1, object2, collideCallback, processCallback, callbackContext, overlapOnly) {
	      if (!object1 || !object2 || !object1.visible || !object2.visible) {
	        if (true) {
	          console.warn('object1 is null or not visible');
	        }
	        return;
	      }

	      if (object1 instanceof Tiny.Sprite && object2 instanceof Tiny.Sprite) {
	        this.collideSpriteVsSprite(object1, object2, collideCallback, processCallback, callbackContext, overlapOnly);
	      } else {
	        if (true) {
	          console.warn('只支持Tiny.Sprite');
	        }
	      }

	      return;
	    }

	    /**
	     * 内部方法 外部不要调用
	     * @private
	     * @method Tiny.Physics.Ant.World#collideSpriteVsSprite
	     * @param {Tiny.Sprite} sprite1 - Tiny.Sprite
	     * @param {Tiny.Sprite} sprite2 - Tiny.Sprite
	     */

	  }, {
	    key: 'collideSpriteVsSprite',
	    value: function collideSpriteVsSprite(sprite1, sprite2, collideCallback, processCallback, callbackContext, overlapOnly) {
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
	    * 核心的碰撞类 用来检测两个对象是否发生碰撞
	    * @private
	    * @method Tiny.Physics.Ant#separate
	    * @param {Tiny.Physics.Ant.Body} body1 - body1
	    * @param {Tiny.Physics.Ant.Body} body2 - body2
	    * @param {function} [processCallback=null] - 已废弃
	    * @param {object} [callbackContext] - 已废弃
	    * @param {boolean} overlapOnly
	    * @return {boolean} true 两个body发生的碰撞 ，否则false
	    */

	  }, {
	    key: 'separate',
	    value: function separate(body1, body2, processCallback, callbackContext, overlapOnly) {
	      if (!body1.enable || !body2.enable || body1.checkCollision.none || body2.checkCollision.none || !this.intersects(body1, body2)) {
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
	        var bodyRect = body1.isCircle ? body2 : body1;
	        var bodyCircle = body1.isCircle ? body1 : body2;

	        var rect = {
	          x: bodyRect.x,
	          y: bodyRect.y,
	          right: bodyRect.right,
	          bottom: bodyRect.bottom
	        };

	        var circle = {
	          x: bodyCircle.x + bodyCircle.radius,
	          y: bodyCircle.y + bodyCircle.radius
	        };

	        if (circle.y < rect.y || circle.y > rect.bottom) {
	          if (circle.x < rect.x || circle.x > rect.right) {
	            return this.separateCircle(body1, body2, overlapOnly);
	          }
	        }
	      }

	      var resultX = false;
	      var resultY = false;

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

	      var result = resultX || resultY;

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
	    * x 轴横向检测
	    * @private
	    * @method Tiny.Physics.Ant.World#separateX
	    * @param {Tiny.Physics.Ant.Body} body1 - body1
	    * @param {Tiny.Physics.Ant.Body} body2 - body2
	    * @param {boolean} overlapOnly
	    * @return {boolean}
	    */

	  }, {
	    key: 'separateX',
	    value: function separateX(body1, body2, overlapOnly) {
	      var overlap = this.getOverlapX(body1, body2, overlapOnly);

	      //  Can't separate two immovable bodies, or a body with its own custom separation logic
	      if (overlapOnly || overlap === 0 || body1.immovable && body2.immovable || body1.customSeparateX || body2.customSeparateX) {
	        //  return true if there was some overlap, otherwise false
	        return overlap !== 0 || body1.embedded && body2.embedded;
	      }

	      //  Adjust their positions and velocities accordingly (if there was any overlap)
	      var v1 = body1.velocity.x;
	      var v2 = body2.velocity.x;

	      if (!body1.immovable && !body2.immovable) {
	        overlap *= 0.5;

	        body1.x -= overlap;
	        body2.x += overlap;

	        var nv1 = Math.sqrt(v2 * v2 * body2.mass / body1.mass) * (v2 > 0 ? 1 : -1);
	        var nv2 = Math.sqrt(v1 * v1 * body1.mass / body2.mass) * (v1 > 0 ? 1 : -1);
	        var avg = (nv1 + nv2) * 0.5;

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
	    * y轴 纵向检测
	    * @private
	    * @method Tiny.Physics.Ant#separateY
	    * @param {Tiny.Physics.Ant.Body} body1 - body1
	    * @param {Tiny.Physics.Ant.Body} body2 - body2
	    * @param {boolean} overlapOnly
	    * @return {boolean}
	    */

	  }, {
	    key: 'separateY',
	    value: function separateY(body1, body2, overlapOnly) {
	      var overlap = this.getOverlapY(body1, body2, overlapOnly);
	      // console.debug('separateY [0] > ', overlap);
	      //  Can't separate two immovable bodies, or a body with its own custom separation logic
	      if (overlapOnly || overlap === 0 || body1.immovable && body2.immovable || body1.customSeparateY || body2.customSeparateY) {
	        //  return true if there was some overlap, otherwise false
	        return overlap !== 0 || body1.embedded && body2.embedded;
	      }

	      //  Adjust their positions and velocities accordingly (if there was any overlap)
	      var v1 = body1.velocity.y;
	      var v2 = body2.velocity.y;

	      if (!body1.immovable && !body2.immovable) {
	        // console.debug('separateY 1', overlap);
	        overlap *= 0.5;

	        body1.y -= overlap;
	        body2.y += overlap;

	        var nv1 = Math.sqrt(v2 * v2 * body2.mass / body1.mass) * (v2 > 0 ? 1 : -1);
	        var nv2 = Math.sqrt(v1 * v1 * body1.mass / body2.mass) * (v1 > 0 ? 1 : -1);
	        var avg = (nv1 + nv2) * 0.5;

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
	     * 计算两个sprite横向overlap 值
	     * @private
	     * @method Tiny.Physics.Ant#getOverlapX
	     * @param {Tiny.Physics.Ant.Body} body1 - body1
	     * @param {Tiny.Physics.Ant.Body} body2 - body2
	     * @param {boolean} overlapOnly
	     * @return {float}
	     */

	  }, {
	    key: 'getOverlapX',
	    value: function getOverlapX(body1, body2, overlapOnly) {
	      var overlap = 0;
	      var maxOverlap = body1.deltaAbsX + body2.deltaAbsX + this.OVERLAP_BIAS;
	      // console.debug('getOverlapX', body1.deltaX, body2.deltaX, maxOverlap);
	      if (body1.deltaX === 0 && body2.deltaX === 0) {
	        //  They overlap but neither of them are moving
	        body1.embedded = true;
	        body2.embedded = true;
	      } else if (body1.deltaX > body2.deltaX) {
	        //  Body1 is moving right and / or Body2 is moving left
	        overlap = body1.right - body2.x;

	        if (overlap > maxOverlap && !overlapOnly || body1.checkCollision.right === false || body2.checkCollision.left === false) {
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

	        if (-overlap > maxOverlap && !overlapOnly || body1.checkCollision.left === false || body2.checkCollision.right === false) {
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
	    * 计算两个sprite纵向overlap 值
	    * @private
	    * @method Tiny.Physics.Ant.World#getOverlapY
	    * @param {Tiny.Physics.Ant.Body} body1 - body1
	    * @param {Tiny.Physics.Ant.Body} body2 - body2
	    * @param {boolean} overlapOnly
	    * @return {float}
	    */

	  }, {
	    key: 'getOverlapY',
	    value: function getOverlapY(body1, body2, overlapOnly) {
	      var overlap = 0;
	      var maxOverlap = body1.deltaAbsY + body2.deltaAbsY + this.OVERLAP_BIAS;
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
	        if (overlap > maxOverlap && !overlapOnly || body1.checkCollision.down === false || body2.checkCollision.up === false) {
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
	        if (-overlap > maxOverlap && !overlapOnly || body1.checkCollision.up === false || body2.checkCollision.down === false) {
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
	    * 如果两个sprite都是setCircle了 那么通过这个方法进行检测
	    * @private
	    * @method Tiny.Physics.Ant.World#separateCircle
	    * @param {Tiny.Physics.Ant.Body} body1 - body1
	    * @param {Tiny.Physics.Ant.Body} body2 - The second Body to separate. Must have `Body.isCircle` true and a positive `radius`.
	    * @param {boolean} overlapOnly - If true the bodies will only have their overlap data set, no separation or exchange of velocity will take place.
	    * @return {boolean} Returns true if the bodies were separated or overlap, otherwise false.
	    */

	  }, {
	    key: 'separateCircle',
	    value: function separateCircle(body1, body2, overlapOnly) {
	      // console.debug('separateCircle');
	      //  Set the bounding box overlap values
	      this.getOverlapX(body1, body2);
	      this.getOverlapY(body1, body2);

	      var dx = body2.center.x - body1.center.x;
	      var dy = body2.center.y - body1.center.y;

	      var angleCollision = Math.atan2(dy, dx);

	      var overlap = 0;

	      if (body1.isCircle !== body2.isCircle) {
	        var rect = {
	          x: body2.isCircle ? body1.position.x : body2.position.x,
	          y: body2.isCircle ? body1.position.y : body2.position.y,
	          right: body2.isCircle ? body1.right : body2.right,
	          bottom: body2.isCircle ? body1.bottom : body2.bottom
	        };

	        var circle = {
	          x: body1.isCircle ? body1.position.x + body1.radius : body2.position.x + body2.radius,
	          y: body1.isCircle ? body1.position.y + body1.radius : body2.position.y + body2.radius,
	          radius: body1.isCircle ? body1.radius : body2.radius
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
	        overlap = body1.radius + body2.radius - TinyMath.distance(body1.center.x, body1.center.y, body2.center.x, body2.center.y);
	      }

	      //  Can't separate two immovable bodies, or a body with its own custom separation logic
	      if (overlapOnly || overlap === 0 || body1.immovable && body2.immovable || body1.customSeparateX || body2.customSeparateX) {
	        if (overlap !== 0) {
	          body1.onOverlap(body2);
	          body2.onOverlap(body1);
	        }

	        //  return true if there was some overlap, otherwise false
	        return overlap !== 0;
	      }

	      // Transform the velocity vector to the coordinate system oriented along the direction of impact.
	      // This is done to eliminate the vertical component of the velocity
	      var v1 = {
	        x: body1.velocity.x * Math.cos(angleCollision) + body1.velocity.y * Math.sin(angleCollision),
	        y: body1.velocity.x * Math.sin(angleCollision) - body1.velocity.y * Math.cos(angleCollision)
	      };

	      var v2 = {
	        x: body2.velocity.x * Math.cos(angleCollision) + body2.velocity.y * Math.sin(angleCollision),
	        y: body2.velocity.x * Math.sin(angleCollision) - body2.velocity.y * Math.cos(angleCollision)
	      };

	      // We expect the new velocity after impact
	      var tempVel1 = ((body1.mass - body2.mass) * v1.x + 2 * body2.mass * v2.x) / (body1.mass + body2.mass);
	      var tempVel2 = (2 * body1.mass * v1.x + (body2.mass - body1.mass) * v2.x) / (body1.mass + body2.mass);

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
	        if (body1.velocity.x > 0 && !body1.immovable && body2.velocity.x > body1.velocity.x) {
	          body1.velocity.x *= -1;
	        } else if (body2.velocity.x < 0 && !body2.immovable && body1.velocity.x < body2.velocity.x) {
	          body2.velocity.x *= -1;
	        } else if (body1.velocity.y > 0 && !body1.immovable && body2.velocity.y > body1.velocity.y) {
	          body1.velocity.y *= -1;
	        } else if (body2.velocity.y < 0 && !body2.immovable && body1.velocity.y < body2.velocity.y) {
	          body2.velocity.y *= -1;
	        }
	      } else if (Math.abs(angleCollision) > Math.PI / 2) {
	        if (body1.velocity.x < 0 && !body1.immovable && body2.velocity.x < body1.velocity.x) {
	          body1.velocity.x *= -1;
	        } else if (body2.velocity.x > 0 && !body2.immovable && body1.velocity.x > body2.velocity.x) {
	          body2.velocity.x *= -1;
	        } else if (body1.velocity.y < 0 && !body1.immovable && body2.velocity.y < body1.velocity.y) {
	          body1.velocity.y *= -1;
	        } else if (body2.velocity.y > 0 && !body2.immovable && body1.velocity.x > body2.velocity.y) {
	          body2.velocity.y *= -1;
	        }
	      }

	      if (!body1.immovable) {
	        body1.x += body1.velocity.x * this.physicsElapsed - overlap * Math.cos(angleCollision);
	        body1.y += body1.velocity.y * this.physicsElapsed - overlap * Math.sin(angleCollision);
	      }

	      if (!body2.immovable) {
	        body2.x += body2.velocity.x * this.physicsElapsed + overlap * Math.cos(angleCollision);
	        body2.y += body2.velocity.y * this.physicsElapsed + overlap * Math.sin(angleCollision);
	      }
	      body1.onCollide(body2);
	      body2.onCollide(body1);
	      return true;
	    }

	    /**
	     * 检查两个body是否相交
	     * @method Tiny.Physics.Ant.World#intersects
	     * @param {Tiny.Physics.Ant.Body} body1 - body1
	     * @param {Tiny.Physics.Ant.Body} body2 - body2
	     * @return {boolean} True 相交, false 不相交.
	     */

	  }, {
	    key: 'intersects',
	    value: function intersects(body1, body2) {
	      if (body1 === body2) {
	        return false;
	      }
	      if (body1.isCircle) {
	        if (body2.isCircle) {
	          //  Circle vs. Circle
	          return TinyMath.distance(body1.center.x, body1.center.y, body2.center.x, body2.center.y) <= body1.radius + body2.radius;
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
	     * 检查circle和Rect是否相交
	     * @private
	     * @method Tiny.Physics.Ant.World#circleBodyIntersects
	     * @param {Tiny.Physics.Ant.Body} circle - Circle body
	     * @param {Tiny.Physics.Ant.Body} body - rect body
	     * @return {boolean}  true 相交, false 不相交.
	     */

	  }, {
	    key: 'circleBodyIntersects',
	    value: function circleBodyIntersects(circle, body) {
	      var x = TinyMath.clamp(circle.center.x, body.left, body.right);
	      var y = TinyMath.clamp(circle.center.y, body.top, body.bottom);

	      var dx = (circle.center.x - x) * (circle.center.x - x);
	      var dy = (circle.center.y - y) * (circle.center.y - y);

	      return dx + dy <= circle.radius * circle.radius;
	    }

	    /**
	     * Given the angle (in degrees) and speed calculate the velocity and return it as a Point object, or set it to the given point object.
	     * One way to use this is: velocityFromAngle(angle, 200, sprite.velocity) which will set the values directly to the sprites velocity and not create a new Point object.
	     * @private
	     * @method Tiny.Physics.Ant.World#velocityFromAngle
	     * @param {number} angle - The angle in degrees calculated in clockwise positive direction (down = 90 degrees positive, right = 0 degrees positive, up = 90 degrees negative)
	     * @param {number} [speed=60] - The speed it will move, in pixels per second sq.
	     * @param {Tiny.Point|object} [point] - The Point object in which the x and y properties will be set to the calculated velocity.
	     * @return {Tiny.Point} - A Point where point.x contains the velocity x value and point.y contains the velocity y value.
	     */
	    // velocityFromAngle(angle, speed = 60, point = null) {
	    //   point = point || new Tiny.Point();
	    //   point.x = (Math.cos(TinyMath.degToRad(angle)) * speed);
	    //   point.y = (Math.sin(TinyMath.degToRad(angle)) * speed);
	    //   return point;
	    // }

	    /**
	     * Given the rotation (in radians) and speed calculate the velocity and return it as a Point object, or set it to the given point object.
	     * One way to use this is: velocityFromRotation(rotation, 200, sprite.velocity) which will set the values directly to the sprites velocity and not create a new Point object.
	     * @private
	     * @method Tiny.Physics.Ant.World#velocityFromRotation
	     * @param {number} rotation - The angle in radians.
	     * @param {number} [speed=60] - The speed it will move, in pixels per second sq.
	     * @param {Tiny.Point|object} [point=null] - The Point object in which the x and y properties will be set to the calculated velocity.
	     * @return {Tiny.Point} - A Point where point.x contains the velocity x value and point.y contains the velocity y value.
	     */
	    // velocityFromRotation(rotation, speed = 60, point) {
	    //   point = point || new Tiny.Point();
	    //   point.x = (Math.cos(rotation) * speed);
	    //   point.y = (Math.sin(rotation) * speed);
	    //   return point;
	    // }

	    /**
	     * Given the rotation (in radians) and speed calculate the acceleration and return it as a Point object, or set it to the given point object.
	     * One way to use this is: accelerationFromRotation(rotation, 200, sprite.acceleration) which will set the values directly to the sprites acceleration and not create a new Point object.
	     * @private
	     * @method Tiny.Physics.Ant.World#accelerationFromRotation
	     * @param {number} rotation - The angle in radians.
	     * @param {number} [speed=60] - The speed it will move, in pixels per second sq.
	     * @param {Tiny.Point} [point=null] - The Point object in which the x and y properties will be set to the calculated acceleration.
	     * @return {Tiny.Point} - A Point where point.x contains the acceleration x value and point.y contains the acceleration y value.
	     */
	    // accelerationFromRotation(rotation, speed = 60, point) {
	    //   point = point || new Tiny.Point();
	    //   point.x = (Math.cos(rotation) * speed);
	    //   point.y = (Math.sin(rotation) * speed);
	    //   return point;
	    // }

	  }, {
	    key: 'pause',


	    /**
	     * 暂停物理系统
	     * @method Tiny.Physics.Ant.World#pause
	     */
	    value: function pause() {
	      this._paused = true;
	    }

	    /**
	     * 恢复已暂停物理系统
	     * @method Tiny.Physics.Ant.World#resume
	     */

	  }, {
	    key: 'resume',
	    value: function resume() {
	      this._paused = false;
	    }

	    /**
	    * 将要更新物理系统之前要做的事情放到这里 内部使用 外部不要调用
	    * @private
	    * @method Tiny.Physics.Ant.World#_preUpdate
	    */

	  }, {
	    key: '_preUpdate',
	    value: function _preUpdate() {
	      var i = this._toRemove.length;
	      while (i--) {
	        this.removeBody(this._toRemove[i]);
	      }
	      this._toRemove.length = 0;
	    }

	    /**
	     * 更新物理系统 内部使用 外部不要调用
	     * @private
	     * @method Tiny.Physics.Ant.World#update
	     */

	  }, {
	    key: 'update',
	    value: function update() {
	      if (this.paused) {
	        return;
	      }
	      this._bodies.forEach(function (body) {
	        body.preUpdate();
	      });
	      this._preUpdate();
	      this._processCollide();
	      this._bodies.forEach(function (body) {
	        body.postUpdate();
	      });
	    }

	    /**
	     * 这里实现一个碰撞检测的hack  在这里对所有碰撞检测的类进行检查
	     * @private
	     * @method Tiny.Physics.Ant.World#_processCollide
	     */

	  }, {
	    key: '_processCollide',
	    value: function _processCollide() {
	      var _this2 = this;

	      this._bodies.forEach(function (body) {
	        if (body.collidesWith.length > 0) {
	          _this2.collide(body.sprite, body.collidesWith);
	        }
	        if (body.overlapsWith.length > 0) {
	          _this2.overlap(body.sprite, body.overlapsWith);
	        }
	      });
	    }

	    /**
	     * 把body从物理系统中移除
	     * 会触发Tiny.Physics.Ant.EVENTS.ON_BODY_REMOVED事件
	     * @method Tiny.Physics.Ant.World#removeBody
	     * @param {Tiny.Physics.Ant.Body} body -要移除的body对象
	     * @return {Tiny.Physics.Ant.Body} 已经移除掉的Body对象
	     */

	  }, {
	    key: 'removeBody',
	    value: function removeBody(body) {
	      var idx = this._bodies.indexOf(body);
	      if (idx === -1) {
	        return body;
	      }
	      this._bodies.splice(idx, 1);
	      this.dispatch(EVENTS.ON_BODY_REMOVED, body);
	      return body;
	    }

	    /**
	     * 反弹系数 - 为了兼容P2 对应于 p2.world.defaultContactMaterial.restitution
	    * @name Tiny.Physics.Ant.World#restitution
	    * @property {number} restitution - Default coefficient of restitution between colliding bodies. This value is used if no matching ContactMaterial is found for a Material pair.
	    */

	  }, {
	    key: 'destroy',


	    /**
	     * 销毁ant 物理系统
	     * @method Tiny.Physics.Ant.World#destroy
	     */
	    value: function destroy() {
	      this._bodies.forEach(function (body) {
	        body.destroy();
	      });
	      this._bodies = null;
	      if (this.app.physics.ant === this) {
	        this.app.physics.ant = null;
	      }
	      this.app = null;
	    }
	  }, {
	    key: 'paused',
	    get: function get() {
	      return this._paused;
	    }
	  }, {
	    key: 'restitution',
	    get: function get() {
	      return this._restitution;
	    },
	    set: function set(value) {
	      this._restitution = value;
	    }
	  }]);

	  return World;
	}(Tiny.EventEmitter);

	exports.default = World;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Group = function (_Tiny$Container) {
	  _inherits(Group, _Tiny$Container);

	  function Group() {
	    _classCallCheck(this, Group);

	    return _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).call(this));
	  }

	  return Group;
	}(Tiny.Container);

	exports.default = Group;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _facing = __webpack_require__(5);

	var FACING = _interopRequireWildcard(_facing);

	var _math = __webpack_require__(6);

	var TinyMath = _interopRequireWildcard(_math);

	var _EVENTS = __webpack_require__(7);

	var EVENTS = _interopRequireWildcard(_EVENTS);

	var _BodyDebug = __webpack_require__(8);

	var _BodyDebug2 = _interopRequireDefault(_BodyDebug);

	var _Bound = __webpack_require__(10);

	var _Bound2 = _interopRequireDefault(_Bound);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	* Body
	* @class Body
	* @constructor
	* @memberof Tiny.Physics.Ant
	*/
	var Body = function (_Tiny$EventEmitter) {
	  _inherits(Body, _Tiny$EventEmitter);

	  /**
	  * @constructor
	  * @param {Tiny.Physics.Ant.World} world - world reference to the currently running world.
	  * @param {Tiny.Sprite} [sprite] - The Sprite object this physics body belongs to.
	  * @param {number} [x=0] - The x coordinate of this Body.
	  * @param {number} [y=0] - The y coordinate of this Body.
	  * @param {number} [mass=1] - The default mass of this Body (0 = static).
	   */
	  function Body(world, sprite, x, y, mass) {
	    _classCallCheck(this, Body);

	    var _this = _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).call(this));

	    sprite = sprite || null;
	    x = x || 0;
	    y = y || 0;
	    /**
	      * @property {Tiny.Physics.Ant} world - Ant.World引用
	      */
	    _this.world = world;

	    /**
	    * @property {Tiny.Application} app - Tiny application引用.
	    */
	    _this.app = _this.world.app;

	    /**
	    * @property {Tiny.Sprite} sprite - body所属sprite.
	    */
	    _this.sprite = sprite;

	    /**
	    * @property {String} type - 类型 .
	    */
	    _this.type = 'Tiny.Physics.Ant.Body';

	    /**
	    * @property {boolean} enable -  是否启用物理特性，false 不启用，不进行任何的碰撞检测，preUpdate,postUpdate都不会被调用.
	    * @default
	    */
	    _this.enable = true;

	    /**
	    * 刚体是否是圆形的 通过setCircle设置后会成为true 不要直接设置
	    * @property {boolean} isCircle
	    * @default
	    * @readOnly
	    */
	    _this.isCircle = false;

	    /**
	    * 球形半径 setCircle中设置 - 不要直接设置这个变量
	    * @property {number} radius
	    * @default
	    * @readOnly
	    */
	    _this.radius = 0;

	    /**
	    * @property {Tiny.Point} offset - 物理刚体相对于sprite的偏移
	    */
	    _this.offset = new Tiny.Point();

	    /**
	    * @property {Tiny.Point} position - 刚体的在屏幕中的位置.
	    * @readonly
	    */
	    _this.position = new Tiny.Point(sprite.x, sprite.y);

	    /**
	    * @property {Tiny.Point} prev - 刚体的上一次的位置，用于计算两次update位置的差异
	    * @readonly
	    */
	    _this.prev = new Tiny.Point(_this.position.x, _this.position.y);

	    /**
	    * @property {boolean} allowRotation - 是否允许旋转
	    * @default
	    */
	    _this.allowRotation = true;

	    /**
	    * The Body's rotation in degrees, as calculated by its angularVelocity and angularAcceleration. Please understand that the collision Body
	    * itself never rotates, it is always axis-aligned. However these values are passed up to the parent Sprite and updates its rotation.
	    * @property {number} rotation
	    */
	    _this.rotation = sprite.rotation;

	    /**
	    * @property {number} preRotation - 上一次旋转的值.
	    * @readonly
	    */
	    _this.preRotation = _this.rotation;

	    /**
	    * @property {number} width - 物理刚体的宽度.
	    * @readonly
	    */
	    _this.width = sprite.width;

	    /**
	    * @property {number} height - 物理刚体的高度.
	    * @readonly
	    */
	    _this.height = sprite.height;

	    /**
	    * @property {number} sourceWidth - The un-scaled original size.
	    * @readonly
	    */
	    _this.sourceWidth = sprite.width;

	    /**
	    * @property {number} sourceHeight - The un-scaled original size.
	    * @readonly
	    */
	    _this.sourceHeight = sprite.height;

	    if (sprite.texture) {
	      _this.sourceWidth = sprite.texture.frame.width;
	      _this.sourceHeight = sprite.texture.frame.height;
	    }

	    /**
	    * @property {number} halfWidth - The calculated width / 2 of the physics body.
	    * @readonly
	    */
	    _this.halfWidth = Math.abs(sprite.width / 2);

	    /**
	    * @property {number} halfHeight - The calculated height / 2 of the physics body.
	    * @readonly
	    */
	    _this.halfHeight = Math.abs(sprite.height / 2);

	    /**
	    * @property {Tiny.Point} center - The center coordinate of the Physics Body.
	    * @readonly
	    */
	    _this.center = new Tiny.Point(sprite.x + _this.halfWidth, sprite.y + _this.halfHeight);

	    /**
	    * @property {Tiny.Point} velocity - The velocity, or rate of change in speed of the Body. Measured in pixels per second.
	    */
	    _this.velocity = new Tiny.Point();

	    /**
	    * @property {Tiny.Point} newVelocity - The new velocity. Calculated during the Body.preUpdate and applied to its position.
	    * @readonly
	    */
	    _this.newVelocity = new Tiny.Point();

	    /**
	    * @property {Tiny.Point} deltaMax - The Sprite position is updated based on the delta x/y values. You can set a cap on those (both +-) using deltaMax.
	    */
	    _this.deltaMax = new Tiny.Point();

	    /**
	    * @property {Tiny.Point} acceleration - The acceleration is the rate of change of the velocity. Measured in pixels per second squared.
	    */
	    _this.acceleration = new Tiny.Point();

	    /**
	    * @property {Tiny.Point} drag - The drag applied to the motion of the Body.
	    */
	    _this.drag = new Tiny.Point();

	    /**
	    * @property {boolean} allowGravity - Allow this Body to be influenced by gravity? Either world or local.
	    * @default
	    */
	    _this.allowGravity = true;

	    /**
	    * @property {Tiny.Point} gravity - A local gravity applied to this Body. If non-zero this over rides any world gravity, unless Body.allowGravity is set to false.
	    */
	    _this.gravity = new Tiny.Point();

	    /**
	    * @property {Tiny.Point} bounce - The elasticity of the Body when colliding. bounce.x/y = 1 means full rebound, bounce.x/y = 0.5 means 50% rebound velocity.
	    */
	    _this.bounce = new Tiny.Point();

	    _this.bounce.x = _this.world.restitution;
	    _this.bounce.y = _this.world.restitution;

	    /**
	    * The elasticity of the Body when colliding with the World bounds.
	    * By default this property is `null`, in which case `Body.bounce` is used instead. Set this property
	    * to a Tiny.Point object in order to enable a World bounds specific bounce value.
	    * @property {Tiny.Point} worldBounce
	    */
	    _this.worldBounce = null;

	    /**
	    * @property {Tiny.Point} maxVelocity - The maximum velocity in pixels per second sq. that the Body can reach.
	    * @default
	    */
	    _this.maxVelocity = new Tiny.Point(10000, 10000);

	    /**
	    * @property {Tiny.Point} friction - The amount of movement that will occur if another object 'rides' this one.
	    */
	    _this.friction = new Tiny.Point(1, 0);

	    /**
	    * @property {number} angularVelocity - The angular velocity controls the rotation speed of the Body. It is measured in degrees per second.
	    * @default
	    */
	    _this.angularVelocity = 0;

	    /**
	    * @property {number} angularAcceleration - The angular acceleration is the rate of change of the angular velocity. Measured in degrees per second squared.
	    * @default
	    */
	    _this.angularAcceleration = 0;

	    /**
	    * @property {number} angularDrag - The drag applied during the rotation of the Body. Measured in degrees per second squared.
	    * @default
	    */
	    _this.angularDrag = 0;

	    /**
	    * @property {number} maxAngular - The maximum angular velocity in degrees per second that the Body can reach.
	    * @default
	    */
	    _this.maxAngular = 1000;

	    /**
	    * @property {number} mass - The mass of the Body. When two bodies collide their mass is used in the calculation to determine the exchange of velocity.
	    * @default
	    */
	    _this.mass = 1;

	    /**
	    * @property {number} angle - The angle of the Body's velocity in radians.
	    * @readonly
	    */
	    _this.angle = 0;

	    /**
	    * @property {number} speed - The speed of the Body as calculated by its velocity.
	    * @readonly
	    */
	    _this.speed = 0;

	    /**
	    * @property {number} facing - A const reference to the direction the Body is traveling or facing.
	    * @default
	    */
	    _this.facing = FACING.NONE;

	    /**
	    * @property {boolean} immovable - An immovable Body will not receive any impacts from other bodies.
	    * @default
	    */
	    _this.immovable = false;

	    /**
	    * If you have a Body that is being moved around the world via a tween or a Group motion, but its local x/y position never
	    * actually changes, then you should set Body.moves = false. Otherwise it will most likely fly off the screen.
	    * If you want the physics system to move the body around, then set moves to true.
	    * @property {boolean} moves - Set to true to allow the Physics system to move this Body, otherwise false to move it manually.
	    * @default
	    */
	    _this.moves = true;

	    /**
	    * This flag allows you to disable the custom x separation that takes place by Tiny.Physics.Ant.separate.
	    * Used in combination with your own collision processHandler you can create whatever type of collision response you need.
	    * @property {boolean} customSeparateX - Use a custom separation system or the built-in one?
	    * @default
	    */
	    _this.customSeparateX = false;

	    /**
	    * This flag allows you to disable the custom y separation that takes place by  Tiny.Physics.Ant.separate.
	    * Used in combination with your own collision processHandler you can create whatever type of collision response you need.
	    * @property {boolean} customSeparateY - Use a custom separation system or the built-in one?
	    * @default
	    */
	    _this.customSeparateY = false;

	    /**
	    * When this body collides with another, the amount of overlap is stored here.
	    * @property {number} overlapX - The amount of horizontal overlap during the collision.
	    */
	    _this.overlapX = 0;

	    /**
	    * When this body collides with another, the amount of overlap is stored here.
	    * @property {number} overlapY - The amount of vertical overlap during the collision.
	    */
	    _this.overlapY = 0;

	    /**
	    * If `Body.isCircle` is true, and this body collides with another circular body, the amount of overlap is stored here.
	    * @property {number} overlapR - The amount of overlap during the collision.
	    */
	    _this.overlapR = 0;

	    /**
	    * If a body is overlapping with another body, but neither of them are moving (maybe they spawned on-top of each other?) this is set to true.
	    * @property {boolean} embedded - Body embed value.
	    */
	    _this.embedded = false;

	    /**
	    * A Body can be set to collide against the World bounds automatically and rebound back into the World if this is set to true. Otherwise it will leave the World.
	    * @property {boolean} collideWorldBounds - Should the Body collide with the World bounds?
	    */
	    _this.collideWorldBounds = false;

	    /**
	    * Set the checkCollision properties to control which directions collision is processed for this Body.
	    * For example checkCollision.up = false means it won't collide when the collision happened while moving up.
	    * If you need to disable a Body entirely, use `body.enable = false`, this will also disable motion.
	    * If you need to disable just collision and/or overlap checks, but retain motion, set `checkCollision.none = true`.
	    * @property {object} checkCollision - An object containing allowed collision.
	    */
	    _this.checkCollision = { none: false, any: true, up: true, down: true, left: true, right: true };

	    /**
	    * This object is populated with boolean values when the Body collides with another.
	    * touching.up = true means the collision happened to the top of this Body for example.
	    * @property {object} touching - An object containing touching results.
	    */
	    _this.touching = { none: true, up: false, down: false, left: false, right: false };

	    /**
	    * This object is populated with previous touching values from the bodies previous collision.
	    * @property {object} wasTouching - An object containing previous touching results.
	    */
	    _this.wasTouching = { none: true, up: false, down: false, left: false, right: false };

	    /**
	    * This object is populated with boolean values when the Body collides with the World bounds or a Tile.
	    * For example if blocked.up is true then the Body cannot move up.
	    * @property {object} blocked - An object containing on which faces this Body is blocked from moving, if any.
	    */
	    _this.blocked = { up: false, down: false, left: false, right: false };

	    /**
	    * @property {boolean} dirty - If this Body in a preUpdate (true) or postUpdate (false) state?
	    */
	    _this.dirty = false;

	    /**
	    * If true the Body will check itself against the Sprite.getBounds() dimensions and adjust its width and height accordingly.
	    * If false it will compare its dimensions against the Sprite scale instead, and adjust its width height if the scale has changed.
	    * Typically you would need to enable syncBounds if your sprite is the child of a responsive display object such as a FlexLayer,
	    * or in any situation where the Sprite scale doesn't change, but its parents scale is effecting the dimensions regardless.
	    * @property {boolean} syncBounds
	    * @default
	    */
	    _this.syncBounds = false;

	    /**
	    * @property {boolean} stopVelocityOnCollide - Set by the `moveTo` and `moveFrom` methods.
	    */
	    _this.stopVelocityOnCollide = true;

	    /**
	    * @property {boolean} _reset - Internal cache var.
	    * @private
	    */
	    _this._reset = true;

	    /**
	    * @property {number} _sx - Internal cache var.
	    * @private
	    */
	    _this._sx = sprite.scale.x;

	    /**
	    * @property {number} _sy - Internal cache var.
	    * @private
	    */
	    _this._sy = sprite.scale.y;

	    /**
	    * @property {number} _dx - Internal cache var.
	    * @private
	    */
	    _this._dx = 0;

	    /**
	    * @property {number} _dy - Internal cache var.
	    * @private
	    */
	    _this._dy = 0;

	    /**
	     * 需要与该Body进行碰撞检测的对象数组 放入该数组会自动完成碰撞检测
	     * 该数组中的元素与该body不会重叠 碰撞后会根据物理特性进行位置等改变
	     * @property {array} collidesWith - Array of CollisionGroups that this Bodies shapes collide with.
	     */
	    _this.collidesWith = [];

	    /**
	     * 需要与该Body进重叠交叉检测对象数组 放入该数组会自动完成重叠交叉检测 并不会改变物理特性 物体可以重叠
	     * @property {array} collidesWith - Array of CollisionGroups that this Bodies shapes collide with.
	     */
	    _this.overlapsWith = [];

	    /**
	     * 调试的Body信息
	     */
	    _this.debugBody = null;
	    return _this;
	  }

	  /**
	  * 触发指定事件事件
	  * @param {String} eventName
	  * @param {any} eventData
	  */


	  _createClass(Body, [{
	    key: 'dispatch',
	    value: function dispatch(eventName) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      // this.emit(eventName, args);
	      this.emit.apply(this, arguments);
	    }

	    /**
	     * 更新刚体的边界
	     * @method Tiny.Physics.Ant.Body#updateBounds
	     * @protected
	     */

	  }, {
	    key: 'updateBounds',
	    value: function updateBounds() {
	      if (this.syncBounds) {
	        var b = this.sprite.getBounds();
	        b.ceilAll();

	        if (b.width !== this.width || b.height !== this.height) {
	          this.width = b.width;
	          this.height = b.height;
	          this._reset = true;
	        }
	      } else {
	        var asx = Math.abs(this.sprite.scale.x);
	        var asy = Math.abs(this.sprite.scale.y);

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

	  }, {
	    key: 'updateMotion',
	    value: function updateMotion() {
	      var body = this;
	      var velocityDelta = this.world.computeVelocity(0, body, body.angularVelocity, body.angularAcceleration, body.angularDrag, body.maxAngular) - body.angularVelocity;
	      body.angularVelocity += velocityDelta;
	      body.rotation += body.angularVelocity * this.world.physicsElapsed;

	      body.velocity.x = this.world.computeVelocity(1, body, body.velocity.x, body.acceleration.x, body.drag.x, body.maxVelocity.x);
	      body.velocity.y = this.world.computeVelocity(2, body, body.velocity.y, body.acceleration.y, body.drag.y, body.maxVelocity.y);
	    }

	    /**
	     * 将要更新前做的事情放到这里
	     * @private
	     * @method Tiny.Physics.Ant.Body#preUpdate
	     */

	  }, {
	    key: 'preUpdate',
	    value: function preUpdate() {
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

	      this.position.x = this.sprite.x - this.sprite.anchor.x * this.sprite.width + this.sprite.scale.x * this.offset.x;
	      this.position.x -= this.sprite.scale.x < 0 ? this.width : 0;

	      this.position.y = this.sprite.y - this.sprite.anchor.y * this.sprite.height + this.sprite.scale.y * this.offset.y;
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

	  }, {
	    key: 'postUpdate',
	    value: function postUpdate() {
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

	  }, {
	    key: 'checkWorldBounds',
	    value: function checkWorldBounds() {
	      var pos = this.position;
	      var bounds = this.world.bounds;
	      var check = this.world.checkCollision;

	      var bx = this.worldBounce ? -this.worldBounce.x : -this.bounce.x;
	      var by = this.worldBounce ? -this.worldBounce.y : -this.bounce.y;

	      if (this.isCircle) {
	        var bodyBounds = {
	          x: this.center.x - this.radius,
	          y: this.center.y - this.radius,
	          right: this.center.x + this.radius,
	          bottom: this.center.y + this.radius
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
	      return this.blocked.up || this.blocked.down || this.blocked.left || this.blocked.right;
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

	  }, {
	    key: 'setSize',
	    value: function setSize(width, height, offsetX, offsetY) {
	      if (offsetX === undefined) {
	        offsetX = this.offset.x;
	      }
	      if (offsetY === undefined) {
	        offsetY = this.offset.y;
	      }

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
	     * @param {number} [offsetY=0] - y偏移量
	     */

	  }, {
	    key: 'setRectangle',
	    value: function setRectangle() {
	      var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16;
	      var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;
	      var offsetX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	      var offsetY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

	      // 修改成以中心为坐标进行设置
	      var oX = this.sprite.width / this.sprite.scale.x / 2 - width / 2;
	      var oY = this.sprite.height / this.sprite.scale.y / 2 - height / 2;
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

	  }, {
	    key: 'setCircle',
	    value: function setCircle() {
	      var radius = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16;
	      var offsetX = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	      var offsetY = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

	      // if (offsetX === undefined) { offsetX = this.offset.x; }
	      // if (offsetY === undefined) { offsetY = this.offset.y; }
	      if (radius > 0) {
	        // 修改成以中心为坐标进行设置圆
	        var oX = this.sprite.width / this.sprite.scale.x / 2 - radius;
	        var oY = this.sprite.height / this.sprite.scale.y / 2 - radius;
	        offsetX += oX;
	        offsetY += oY;

	        if (true) {
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
	    * 重置所有body物理属性
	    * @method Tiny.Physics.Ant.Body#reset
	    * @param {number} x - x 坐标.
	    * @param {number} y - y 坐标
	    */

	  }, {
	    key: 'reset',
	    value: function reset(x, y) {
	      this.velocity.set(0);
	      this.acceleration.set(0);

	      this.speed = 0;
	      this.angularVelocity = 0;
	      this.angularAcceleration = 0;

	      this.position.x = x - this.sprite.anchor.x * this.sprite.width + this.sprite.scale.x * this.offset.x;
	      this.position.x -= this.sprite.scale.x < 0 ? this.width : 0;

	      this.position.y = y - this.sprite.anchor.y * this.sprite.height + this.sprite.scale.y * this.offset.y;
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

	  }, {
	    key: 'getBounds',
	    value: function getBounds(obj) {
	      obj = obj || new _Bound2.default();
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

	  }, {
	    key: 'hitTest',
	    value: function hitTest(x, y) {
	      return this.isCircle ? Tiny.Circle.contains.call(this, x, y) : Tiny.Rectangle.contains.call(this, x, y);
	    }

	    /**
	    * 是否在物理系统的下边界
	    * @property Tiny.Physics.Ant.Body#isOnFloor
	    * @return {boolean} True 接触到了下边界
	    */

	  }, {
	    key: 'destroy',


	    /**
	    * 效果Body 一旦销毁 不可重用
	    * @method Tiny.Physics.Ant.Body#destroy
	    */
	    value: function destroy() {
	      this.removeFromWorld();
	      this.sprite.body = null;
	      this.sprite = null;
	      this.enable = false;
	    }
	  }, {
	    key: 'onOverlap',


	    /**
	     * @private
	     * @param {Tiny.Physics.Ant.Body} body - the body which overlap on
	     */
	    value: function onOverlap(body) {
	      this.dispatch(EVENTS.ON_OVER_LAP, this.sprite, body.sprite);
	    }

	    /**
	    * @private
	    * @param {Tiny.Physics.Ant.Body} body - the body which collide
	    */

	  }, {
	    key: 'onCollide',
	    value: function onCollide(body) {
	      this.dispatch(EVENTS.ON_COLLIDE, this.sprite, body.sprite);
	    }

	    /**
	     * 把自己添加到物理系统中
	     * @method Tiny.Physics.Ant.Body#addToWorld
	     */

	  }, {
	    key: 'addToWorld',
	    value: function addToWorld() {
	      this.world.addBody(this);
	    }

	    /**
	     * 将body从物理系统删除，从而也解除了sprite的物理属性
	     * @method Tiny.Physics.Ant.Body#removeFromWorld
	     */

	  }, {
	    key: 'removeFromWorld',
	    value: function removeFromWorld() {
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

	  }, {
	    key: 'moveTo',
	    value: function moveTo(x, y) {
	      var speed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 60;
	      var maxTime = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

	      var displayObject = this;
	      var angle = Math.atan2(y - displayObject.y, x - displayObject.x);

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

	  }, {
	    key: 'accelerateTo',
	    value: function accelerateTo(x, y) {
	      var speed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 60;
	      var xSpeedMax = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1000;
	      var ySpeedMax = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1000;

	      var angle = TinyMath.angle(this.x, this.y, x, y);
	      this.acceleration.set(Math.cos(angle) * speed, Math.sin(angle) * speed);
	      this.maxVelocity.set(xSpeedMax, ySpeedMax);
	      return angle;
	    }

	    /**
	    * 当时添加或者删除shape的时候会触发
	    * @private
	    */

	  }, {
	    key: 'shapeChanged',
	    value: function shapeChanged() {
	      if (this.debugBody) {
	        this.debugBody.draw();
	      }
	      this.dispatch(EVENTS.ON_SHAPE_CHANGED, this);
	    }
	  }, {
	    key: 'containsCollide',


	    /**
	     * 是否已经添加了碰撞对象了
	     * @private
	     * @param {Tiny.Sprite|Array<Tiny.Sprite>} objects - 需要和当前Body进行碰撞检测的对象
	     */
	    value: function containsCollide(object) {
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

	  }, {
	    key: 'addCollides',
	    value: function addCollides(objects) {
	      // console.log('addCollides', objects);
	      if (Array.isArray(objects)) {
	        for (var i = 0; i < objects.length; i++) {
	          var o = objects[i];
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

	  }, {
	    key: 'removeCollides',
	    value: function removeCollides(objects) {
	      if (Array.isArray(objects)) {
	        for (var i = 0; i < objects.length; i++) {
	          var o = objects[i];
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

	  }, {
	    key: 'removeAllCollides',
	    value: function removeAllCollides() {
	      this.collidesWith = [];
	    }

	    /**
	     * 私有对象 不要调用 从内部数组中 删掉一个碰撞对象
	     * @private
	     * @param {*} object
	     */

	  }, {
	    key: '_removeCollide',
	    value: function _removeCollide(object) {
	      var idx = this.collidesWith.indexOf(object);
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

	  }, {
	    key: 'containsOverlap',
	    value: function containsOverlap(object) {
	      if (object instanceof Body) {
	        object = object.sprite;
	      }
	      return this.overlapsWith.indexOf(object) > -1;
	    }

	    /**
	     * @private
	     */

	  }, {
	    key: '_addToArray',
	    value: function _addToArray(arr, objects) {
	      if (Array.isArray(objects)) {
	        for (var i = 0; i < objects.length; i++) {
	          var o = objects[i];
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

	  }, {
	    key: 'addOverlaps',
	    value: function addOverlaps(objects) {
	      if (Array.isArray(objects)) {
	        for (var i = 0; i < objects.length; i++) {
	          var o = objects[i];
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

	  }, {
	    key: 'removeOverlaps',
	    value: function removeOverlaps(objects) {
	      if (Array.isArray(objects)) {
	        for (var i = 0; i < objects.length; i++) {
	          var o = objects[i];
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

	  }, {
	    key: 'removeAllOverlaps',
	    value: function removeAllOverlaps() {
	      this.overlapsWith = [];
	    }

	    /**
	    * 私有对象 不要调用 从内部数组中 删掉一个重叠交叉检测的对象
	    * @private
	    * @param {*} object
	    */

	  }, {
	    key: '_removeOverlap',
	    value: function _removeOverlap(object) {
	      var idx = this.overlapsWith.indexOf(object);
	      if (idx > -1) {
	        this.overlapsWith.splice(idx, 1);
	      }
	      return object;
	    }
	  }, {
	    key: 'isOnFloor',
	    get: function get() {
	      return this.blocked.down;
	    }

	    /**
	    * 是否在物理系统的上边界
	    * @property Tiny.Physics.Ant.Body#isOnCeiling
	    * @return {boolean} True 接触到了上边界.
	    */

	  }, {
	    key: 'isOnCeiling',
	    get: function get() {
	      return this.blocked.up;
	    }

	    /**
	    * 是否在物理系统的左边界
	    * @property Tiny.Physics.Ant.Body#isOnLeft
	    * @return {boolean} True 接触到了左边界.
	    */

	  }, {
	    key: 'isOnLeft',
	    get: function get() {
	      return this.blocked.left;
	    }

	    /**
	    * 是否在物理系统的右边界
	    * @property Tiny.Physics.Ant.Body#isOnRight
	    * @return {boolean} True 接触到了右边界.
	    */

	  }, {
	    key: 'isOnRight',
	    get: function get() {
	      return this.blocked.right;
	    }

	    /**
	    * deltaX 的绝对值
	    * @private
	    * @method Tiny.Physics.Ant.Body#deltaAbsX
	    * @return {number} deltaX 的绝对值.
	    */

	  }, {
	    key: 'deltaAbsX',
	    get: function get() {
	      return Math.abs(this.deltaX);
	    }

	    /**
	    * deltaY 的绝对值.
	    * @private
	    * @method Tiny.Physics.Ant.Body#deltaAbsY
	    * @return {number} deltaY 的绝对值 正数.
	    */

	  }, {
	    key: 'deltaAbsY',
	    get: function get() {
	      return Math.abs(this.deltaY);
	    }

	    /**
	    * 位置在x方向差值
	    * 如果是向右移动就是正数 如果是向左移动就是负数
	    * @private
	    * @method Tiny.Physics.Ant.Body#deltaX
	    * @return {number} The delta value.如果是向右移动就是正数 如果是向左移动就是负数
	    */

	  }, {
	    key: 'deltaX',
	    get: function get() {
	      return this.position.x - this.prev.x;
	    }

	    /**
	    * 位置在y方向差值
	    * 如果是向下移动就是正数 如果是向上移动就是负数
	    * @private
	    * @method Tiny.Physics.Ant.Body#deltaY
	    * @return {number} 位置在y方向差值  如果是向下移动就是正数 如果是向上移动就是负数
	    */

	  }, {
	    key: 'deltaY',
	    get: function get() {
	      return this.position.y - this.prev.y;
	    }

	    /**
	    * Body.rotation 角度的差值
	    * 顺时针旋转就是正数，逆时针就是负数
	    * @private
	    * @method Tiny.Physics.Ant.Body#deltaZ
	    * @return {number} rotation的差值. 顺时针旋转就是正数，逆时针就是负数
	    */

	  }, {
	    key: 'deltaZ',
	    get: function get() {
	      return this.rotation - this.preRotation;
	    }
	  }, {
	    key: 'x',
	    get: function get() {
	      return this.position.x;
	    },
	    set: function set(value) {
	      this.position.x = value;
	    }
	  }, {
	    key: 'y',
	    get: function get() {
	      return this.position.y;
	    },
	    set: function set(value) {
	      this.position.y = value;
	    }
	  }, {
	    key: 'left',
	    get: function get() {
	      return this.position.x;
	    }
	  }, {
	    key: 'right',
	    get: function get() {
	      return this.position.x + this.width;
	    }
	  }, {
	    key: 'top',
	    get: function get() {
	      return this.position.y;
	    }
	  }, {
	    key: 'bottom',
	    get: function get() {
	      return this.position.y + this.height;
	    }
	  }, {
	    key: 'debug',
	    get: function get() {
	      return this.debugBody !== null;
	    }

	    /**
	     * 是否开启Body的调试模式
	     * @param {boolean} - true 开启调试模式 false 取消调试模式
	     */
	    ,
	    set: function set(value) {
	      if (value && !this.debugBody) {
	        this.debugBody = new _BodyDebug2.default(this);
	        this.debugBody.draw();
	      } else if (!value && this.debugBody) {
	        this.debugBody.destroy();
	        this.debugBody = null;
	      }
	    }
	  }, {
	    key: 'static',
	    get: function get() {
	      return this.immovable;
	    }

	    /**
	     * 是否是静态物体 不受重力等因素影响 如墙 地板等
	     */
	    ,
	    set: function set(value) {
	      this.allowGravity = !value;
	      this.immovable = !!value;
	    }
	  }]);

	  return Body;
	}(Tiny.EventEmitter);
	//

	exports.default = Body;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var NONE = exports.NONE = 0;
	var LEFT = exports.LEFT = 1;
	var RIGHT = exports.RIGHT = 2;
	var UP = exports.UP = 3;
	var DOWN = exports.DOWN = 4;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.wrapAngle = wrapAngle;
	exports.wrap = wrap;
	exports.degToRad = degToRad;
	exports.radToDeg = radToDeg;
	exports.distance = distance;
	exports.angle = angle;
	exports.clamp = clamp;
	/**
	* 保证给定的angle的值在-180 到 180之间 或者 -PI 到 PI之间
	* @function
	* @static
	* @name wrapAngle
	* @memberof Tiny.Physics.Ant.Math
	* @param {number} angle - 角度
	* @param {boolean} [radians=false] - 如果是true使用弧度 false角度 默认false
	* @return {number} 角度或者弧度 单位和angle参数一致
	*/
	function wrapAngle(angle, radians) {
	  return radians ? wrap(angle, -Math.PI, Math.PI) : wrap(angle, -180, 180);
	}

	/**
	* Ensures that the value always stays between min and max, by wrapping the value around.
	*
	* If `max` is not larger than `min` the result is 0.
	* @private
	* @function
	* @static
	* @name wrap
	* @memberof Tiny.Physics.Ant.Math
	* @param {number} value - The value to wrap.
	* @param {number} min - The minimum the value is allowed to be.
	* @param {number} max - The maximum the value is allowed to be, should be larger than `min`.
	* @return {number} The wrapped value.
	*/
	function wrap(value, min, max) {
	  var range = max - min;

	  if (range <= 0) {
	    return 0;
	  }

	  var result = (value - min) % range;

	  if (result < 0) {
	    result += range;
	  }

	  return result + min;
	}

	var degreeToRadiansFactor = Math.PI / 180;
	var radianToDegreesFactor = 180 / Math.PI;

	/**
	* 把角度转成弧度
	* @function
	* @static
	* @name degToRad
	* @memberof Tiny.Physics.Ant.Math
	* @param {number} degrees - 角度.
	* @return {number} 弧度
	*/
	function degToRad(degrees) {
	  return degrees * degreeToRadiansFactor;
	};

	/**
	* 弧度转角度
	* @function
	* @static
	* @name radToDeg
	* @memberof Tiny.Physics.Ant.Math
	* @param {number} radians - 弧度
	* @return {number} 角度
	*/
	function radToDeg(radians) {
	  return radians * radianToDegreesFactor;
	};

	/**
	* 计算两个点的距离
	* @function
	* @static
	* @name distance
	* @memberof Tiny.Physics.Ant.Math
	* @param {number} x1
	* @param {number} y1
	* @param {number} x2
	* @param {number} y2
	* @return {number}
	*/
	function distance(x1, y1, x2, y2) {
	  var dx = x1 - x2;
	  var dy = y1 - y2;
	  return Math.sqrt(dx * dx + dy * dy);
	}

	/**
	* 两点之间的角度
	* @function
	* @static
	* @name angle
	* @memberof Tiny.Physics.Ant.Math
	* @param {number} x1
	* @param {number} y1
	* @param {number} x2
	* @param {number} y2
	* @return {number}
	*/
	function angle(x1, y1, x2, y2) {
	  return Math.atan2(y2 - y1, x2 - x1);
	}

	/**
	* 保持v在min和max之间 如果v小于min 返回min ，如果v>max 返回max 否则返回v
	* @function
	* @static
	* @name clamp
	* @memberof Tiny.Physics.Ant.Math
	* @param {float} v - The value to be clamped.
	* @param {float} min - The minimum bounds.
	* @param {float} max - The maximum bounds.
	* @return {number} The clamped value.
	*/
	function clamp(v, min, max) {
	  if (v < min) {
	    return min;
	  } else if (max < v) {
	    return max;
	  } else {
	    return v;
	  }
	}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// body 删除
	var ON_BODY_REMOVED = exports.ON_BODY_REMOVED = 'bodyRemoved';
	// Body 被添加
	var ON_BODY_ADDED = exports.ON_BODY_ADDED = 'bodyAdded';
	// 碰到了边界
	var ON_WORLD_BOUNDS = exports.ON_WORLD_BOUNDS = 'worldBounds';
	//
	// export const ON_MOVE_COMPLETE = 'moveComplete';
	// 两个物体有接触的时候触发
	var ON_OVER_LAP = exports.ON_OVER_LAP = 'overlap';
	// 两个物体碰撞到一起的时候触发
	var ON_COLLIDE = exports.ON_COLLIDE = 'collide';
	var ON_SHAPE_CHANGED = exports.ON_SHAPE_CHANGED = 'shapeChanged';

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(9);

	var Utils = _interopRequireWildcard(_utils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*!
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Tiny.Physics.Ant.BodyDebug
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Description: Body的调试类 - 自主实现，接口方式和P2保持一致
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author: fusheng.sfs
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Version: v0.0.1
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	/**
	* 调试的时候画出来p2.body的轮廓
	* @private
	* @name BodyDebug
	* @class BodyDebug
	* @constructor
	* @memberof Tiny.Physics.Ant
	* @extends Tiny.Sprite
	*/
	var BodyDebug = function (_Tiny$Sprite) {
	  _inherits(BodyDebug, _Tiny$Sprite);

	  /**
	   * @private
	   * @constructor
	   * @param {Tiny.Physics.P2.Body} body - The P2 Body to display debug data for.
	   * @param {object} settings - Settings object.
	   */
	  function BodyDebug(body, settings) {
	    _classCallCheck(this, BodyDebug);

	    var _this = _possibleConstructorReturn(this, (BodyDebug.__proto__ || Object.getPrototypeOf(BodyDebug)).call(this));

	    var world = body.world;
	    /**
	    * @property {object} defaultSettings - Default debug settings.
	    * @private
	    */
	    var defaultSettings = {
	      lineWidth: 1,
	      alpha: 0.5,
	      fill: 0.5,
	      lineColor: 0x0000ff,
	      fillColor: 0xff0000
	    };

	    _this.settings = Utils.extend(defaultSettings, world.config.debug || {});

	    _this.world = world;
	    _this.body = body;
	    _this.app = _this.world.app;
	    /**
	    * @property {Tiny.Graphics} canvas - The canvas to render the debug info to.
	    */
	    _this.graphics = new Tiny.Graphics();

	    _this.graphics.alpha = _this.settings.alpha;

	    _this.addChild(_this.graphics);

	    if (_this.app.stageDebugLayer === void 0) {
	      // 这里参考 Tiny.Application中的stage的写法 创建了一个一样的layer
	      var stageDebugLayer = new Tiny.Container();
	      stageDebugLayer.scale.set(Tiny.config.multiplier);
	      _this.app.camera.addChild(stageDebugLayer);
	      _this.app.stageDebugLayer = stageDebugLayer;
	    }

	    if (_this.world.app.stageDebugLayer.ant === void 0) {
	      var antDebugLayer = new Tiny.Container();
	      _this.app.stageDebugLayer.addChild(antDebugLayer);
	      _this.app.stageDebugLayer.ant = antDebugLayer;
	    }

	    _this.app.stageDebugLayer.ant.addChild(_this);

	    _this.prescale = new Tiny.Point(_this.body.sprite.scale.x, _this.body.sprite.scale.y);

	    _this.draw();

	    _this.updateSpriteTransform();
	    return _this;
	  }

	  /**
	   * @private
	   */


	  _createClass(BodyDebug, [{
	    key: 'updateSpriteTransform',
	    value: function updateSpriteTransform() {
	      this.position.x = this.body.x;
	      this.position.y = this.body.y;
	      // this.rotation = this.body.sprite.rotation;
	      if (!this.prescale.equals(this.body.sprite.scale)) {
	        this.prescale.copy(this.body.sprite.scale);
	        this.draw();
	      }
	    }

	    /**
	     * @private
	     */

	  }, {
	    key: 'draw',
	    value: function draw() {
	      // this.updateSpriteTransform();
	      var lineWidth = this.settings.lineWidth;
	      // const color = parseInt(Utils.randomPastelHex(), 16);
	      var lineColor = this.settings.lineColor;
	      var fillColor = this.settings.fillColor;
	      this.graphics.clear();
	      if (this.body.isCircle) {
	        this.drawCircle(this.graphics, this.body.halfWidth, this.body.halfHeight, this.body.halfWidth, 0, fillColor, lineColor, lineWidth);
	      } else {
	        this.drawRectangle(this.graphics, 0, 0, this.body.width, this.body.height, 0, fillColor, lineColor, lineWidth);
	      }
	      // console.log('draw3 ');
	    }

	    /**
	    * 圆形刚体的轮廓调试
	    *
	    * @method Tiny.Physics.P2.BodyDebug#drawCircle
	    * @private
	    */

	  }, {
	    key: 'drawCircle',
	    value: function drawCircle(g, x, y, radius, angle, fillColor, lineColor) {
	      var lineWidth = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;

	      g.lineStyle(lineWidth, lineColor, 1);
	      if (this.settings.fill) {
	        g.beginFill(fillColor, 1.0);
	      }
	      g.drawCircle(x, y, radius);
	      if (this.settings.fill) {
	        g.endFill();
	      }
	      g.lineStyle(lineWidth, lineColor, 1);
	      g.moveTo(x, y);
	      g.lineTo(x + radius * Math.cos(-angle), y + radius * Math.sin(-angle));
	      // console.log('[BodyDebug] >> drawCircle', x, y, radius);
	    }

	    /**
	    * 矩形刚体的轮廓调试
	    *
	    * @method Tiny.Physics.P2.BodyDebug#drawRectangle
	    * @private
	    */

	  }, {
	    key: 'drawRectangle',
	    value: function drawRectangle(g, x, y, w, h, angle, fillColor, lineColor) {
	      var lineWidth = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 1;

	      g.lineStyle(lineWidth, lineColor, 1);
	      if (this.settings.fill) {
	        g.beginFill(fillColor);
	      }
	      g.drawRect(x, y, w, h);
	      if (this.settings.fill) {
	        g.endFill();
	      }
	      // console.log('[BodyDebug] >> drawRectangles:', x, y, w, h, this.body.width, this.body.height);
	    }
	  }]);

	  return BodyDebug;
	}(Tiny.Sprite);

	exports.default = BodyDebug;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.extend = extend;
	exports.randomPastelHex = randomPastelHex;
	exports.rgbToHex = rgbToHex;
	exports.componentToHex = componentToHex;
	/**
	* 精简版extend  把B的键值对 拷贝到A  http://api.jquery.com/jQuery.extend/
	* @function
	* @static
	* @name extend
	* @memberof Tiny.Physics.Ant.Utils
	* @param {object} a - 目标对象
	* @param {object} b - 来源对象
	* @return {object} 修改后的a
	*/
	function extend(a, b) {
	  for (var key in b) {
	    a[key] = b[key];
	  }
	  return a;
	};

	/**
	* @function
	* @static
	* @name randomPastelHex
	* @memberof Tiny.Physics.Ant.Utils
	  */
	function randomPastelHex() {
	  var blue = void 0,
	      green = void 0,
	      mix = void 0,
	      red = void 0;
	  mix = [255, 255, 255];

	  red = Math.floor(Math.random() * 256);
	  green = Math.floor(Math.random() * 256);
	  blue = Math.floor(Math.random() * 256);

	  red = Math.floor((red + 3 * mix[0]) / 4);
	  green = Math.floor((green + 3 * mix[1]) / 4);
	  blue = Math.floor((blue + 3 * mix[2]) / 4);

	  return rgbToHex(red, green, blue);
	}

	/**
	* @function
	* @static
	* @name rgbToHex
	* @memberof Tiny.Physics.Ant.Utils
	*/
	function rgbToHex(r, g, b) {
	  return componentToHex(r) + componentToHex(g) + componentToHex(b);
	}

	/**
	* @function
	* @static
	* @name componentToHex
	* @memberof Tiny.Physics.Ant.Utils
	*/
	function componentToHex(c) {
	  var hex = c.toString(16);
	  if (hex.length === 2) {
	    return hex;
	  } else {
	    return hex + '0';
	  }
	}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	* @private
	* @name Bound
	* @class Bound
	* @constructor
	* @memberof Tiny.Physics.Ant
	*/
	var Bound = function () {
	  /**
	   * @private
	   * @param {Number} x - x 坐标
	   * @param {Number} y - y 坐标
	   * @param {Number} right - 右边界
	   * @param {Number} bottom - 下部边界
	   */
	  function Bound(x, y, right, bottom) {
	    _classCallCheck(this, Bound);

	    this.x = 0;
	    this.y = 0;
	    this.right = 0;
	    this.bottom = 0;
	  }

	  _createClass(Bound, [{
	    key: "top",
	    get: function get() {
	      return this.y;
	    }
	  }, {
	    key: "left",
	    get: function get() {
	      return this.x;
	    }
	  }]);

	  return Bound;
	}();

	exports.default = Bound;

/***/ })
/******/ ])
});
;