/*!
 * tinyjs-plugin-physics
 * Description: tiny 物理引擎基础库
 * Author: 清扬陌客 <qingyangmoke@qq.com>
 * Version: v0.0.1
 */
exports["Tiny"] = exports["Tiny"] || {}; exports["Tiny"]["Physics"] =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/Users/song/Develop/github/tinyjs-plugin-physics/dist";

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

	var _p = __webpack_require__(2);

	var P2 = _interopRequireWildcard(_p);

	var _ant = __webpack_require__(77);

	var Ant = _interopRequireWildcard(_ant);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	module.exports = {
	  P2: P2,
	  Ant: Ant
	};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.p2 = exports.EVENTS = exports.Math = exports.startSystem = undefined;

	var _utils = __webpack_require__(3);

	Object.keys(_utils).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _utils[key];
	    }
	  });
	});

	var _world = __webpack_require__(4);

	var _world2 = _interopRequireDefault(_world);

	var _math = __webpack_require__(7);

	var Math = _interopRequireWildcard(_math);

	var _EVENTS = __webpack_require__(76);

	var EVENTS = _interopRequireWildcard(_EVENTS);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var p2 = __webpack_require__(9);

	var system = null;
	function startSystem(app, config) {
	  if (system === null) {
	    system = new _world2.default(app, config);
	    app.onUpdate(function () {
	      system && system.update();
	    });
	  } else {
	    console.warn('物理系统已经启用了，请不要重复调用！');
	  }
	}

	// const AABB = p2.AABB;
	// const Capsule = p2.Capsule;
	// const Circle = p2.Circle;
	// const Convex = p2.Convex;
	// const EventEmitter = p2.EventEmitter;

	// const Material = p2.Material;
	// const ContactMaterial = p2.ContactMaterial;

	// const Constraint = p2.Constraint;
	// const RevoluteConstraint = p2.RevoluteConstraint;
	// const GearConstraint = p2.GearConstraint;
	// const DistanceConstraint = p2.DistanceConstraint;
	// const PrismaticConstraint = p2.PrismaticConstraint;
	// const LockConstraint = p2.LockConstraint;

	// const Equation = p2.Equation;
	// const ContactEquation = p2.ContactEquation;
	// const AngleLockEquation = p2.AngleLockEquation;
	// const FrictionEquation = p2.FrictionEquation;
	// const FrictionEquationPool = p2.FrictionEquationPool;
	// const RotationalVelocityEquation = p2.RotationalVelocityEquation;

	// const Pool = p2.Pool;
	// const ContactEquationPool = p2.ContactEquationPool;

	// const Solver = p2.Solver;
	// const GSSolver = p2.GSSolver;

	// const Heightfield = p2.Heightfield;

	// const Broadphase = p2.Broadphase;
	// const Narrowphase = p2.Narrowphase;
	// const NaiveBroadphase = p2.NaiveBroadphase;
	// const SAPBroadphase = p2.SAPBroadphase;

	// const Particle = p2.Particle;
	// const Plane = p2.Plane;

	// // const Utils = p2.Utils;
	// // const World = p2.World;
	// const Line = p2.Line;
	// const vec2 = p2.vec2;

	// const Ray = p2.Ray;
	// const RaycastResult = p2.RaycastResult;

	// const Box = p2.Box;
	// const Spring = p2.Spring;
	// const LinearSpring = p2.LinearSpring;
	// const RotationalSpring = p2.RotationalSpring;

	// const TopDownVehicle = p2.TopDownVehicle;

	exports.startSystem = startSystem;
	exports.Math = Math;
	exports.EVENTS = EVENTS;
	exports.p2 = p2;

/***/ }),
/* 3 */
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
	* This is a slightly modified version of http://api.jquery.com/jQuery.extend/
	*
	* @method Tiny.Physics.P2.Utils.extend
	* @param {boolean} deep - Perform a deep copy?
	* @param {object} target - The target object to copy to.
	* @return {object} The extended object.
	*/
	function extend(a, b) {
	  for (var key in b) {
	    a[key] = b[key];
	  }
	  return a;
	};

	/**
	  * Picks a random pastel color.
	  *
	  * @method Tiny.Physics.P2.BodyDebug#randomPastelHex
	  * @private
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
	  * Converts from RGB to Hex.
	  *
	  * @method Tiny.Physics.P2.BodyDebug#rgbToHex
	  * @private
	  */
	function rgbToHex(r, g, b) {
	  return componentToHex(r) + componentToHex(g) + componentToHex(b);
	}

	/**
	* Component to hex conversion.
	*
	* @method Tiny.Physics.P2.BodyDebug#componentToHex
	* @private
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _body = __webpack_require__(5);

	var _body2 = _interopRequireDefault(_body);

	var _Container = __webpack_require__(65);

	var _Container2 = _interopRequireDefault(_Container);

	var _CollisionGroup = __webpack_require__(66);

	var _CollisionGroup2 = _interopRequireDefault(_CollisionGroup);

	var _InversePointProxy = __webpack_require__(6);

	var _InversePointProxy2 = _interopRequireDefault(_InversePointProxy);

	var _Spring = __webpack_require__(67);

	var _Spring2 = _interopRequireDefault(_Spring);

	var _RotationalSpring = __webpack_require__(68);

	var _RotationalSpring2 = _interopRequireDefault(_RotationalSpring);

	var _LockConstraint = __webpack_require__(69);

	var _LockConstraint2 = _interopRequireDefault(_LockConstraint);

	var _DistanceConstraint = __webpack_require__(70);

	var _DistanceConstraint2 = _interopRequireDefault(_DistanceConstraint);

	var _GearConstraint = __webpack_require__(71);

	var _GearConstraint2 = _interopRequireDefault(_GearConstraint);

	var _RevoluteConstraint = __webpack_require__(72);

	var _RevoluteConstraint2 = _interopRequireDefault(_RevoluteConstraint);

	var _PrismaticConstraint = __webpack_require__(73);

	var _PrismaticConstraint2 = _interopRequireDefault(_PrismaticConstraint);

	var _Material = __webpack_require__(74);

	var _Material2 = _interopRequireDefault(_Material);

	var _ContactMaterial = __webpack_require__(75);

	var _ContactMaterial2 = _interopRequireDefault(_ContactMaterial);

	var _EVENTS = __webpack_require__(76);

	var EVENTS = _interopRequireWildcard(_EVENTS);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BODY_TYPE = 'Tiny.Physics.P2.Body';
	var p2 = __webpack_require__(9);

	var World = function (_Tiny$EventEmitter) {
	  _inherits(World, _Tiny$EventEmitter);

	  function World(app, config) {
	    _classCallCheck(this, World);

	    var _this = _possibleConstructorReturn(this, (World.__proto__ || Object.getPrototypeOf(World)).call(this));

	    _this.type = 'Tiny.Physics.P2.World';

	    if (config === undefined) {
	      config = {
	        gravity: [0, 0],
	        broadphase: new p2.SAPBroadphase()
	      };
	    } else {
	      if (!config.hasOwnProperty('gravity')) {
	        config.gravity = [0, 0];
	      } else {
	        // 需要做一次系统的转换
	        config.gravity[0] = -config.gravity[0];
	        config.gravity[1] = -config.gravity[1];
	      }
	      if (!config.hasOwnProperty('broadphase')) {
	        config.broadphase = new p2.SAPBroadphase();
	      }
	    }

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
	    _this.app.physics.p2 = _this;

	    /**
	    * @property {object} config - The p2 World configuration object.
	    * @protected
	    */
	    _this.config = config;

	    /**
	    * @property {p2.World} world - The p2 World in which the simulation is run.
	    * @protected
	    */
	    _this.world = new p2.World(_this.config);

	    /**
	    * @property {number} frameRate - The frame rate the world will be stepped at. Defaults to 1 / 60, but you can change here. Also see useElapsedTime property.
	    * @default
	    */
	    _this.frameRate = 1 / 60;

	    /**
	    * @property {boolean} _paused - The paused state of the P2 World.
	    * @default
	    */
	    _this._paused = false;

	    /**
	     * @property {array} _toRemove - 一个临时数组 用于临时存储不立刻删除 需要在下一次渲染的时候删除掉的Tiny.physics.p2.Body 对象
	     * @private
	     */
	    _this._toRemove = [];

	    /**
	    * @property {object} _bodies - 存储管理物理系统中的所有的Tiny.physics.p2.Body 对象
	    * @private
	    */
	    _this._bodies = [];

	    /**
	    * @property {InversePointProxy} gravity - The gravity applied to all bodies each step.
	    */
	    _this.gravity = new _InversePointProxy2.default(_this, _this.world.gravity);

	    /**
	    * @property {object} walls - 物理系统的四个边界 类似特朗普要修建的墨西哥wall一样 把物理系统中的对象封闭到这个墙内
	    */
	    _this.walls = { left: null, right: null, top: null, bottom: null };

	    /**
	    * @property {number} _collisionGroupID - Internal var.
	    * @private
	    */
	    _this._collisionGroupID = 2;

	    /**
	       * @property {boolean} _boundsLeft - Internal var that keeps track of world bounds settings.
	       * @private
	       */
	    _this._boundsLeft = true;

	    /**
	    * @property {boolean} _boundsRight - Internal var that keeps track of world bounds settings.
	    * @private
	    */
	    _this._boundsRight = true;

	    /**
	    * @property {boolean} _boundsTop - Internal var that keeps track of world bounds settings.
	    * @private
	    */
	    _this._boundsTop = true;

	    /**
	    * @property {boolean} _boundsBottom - Internal var that keeps track of world bounds settings.
	    * @private
	    */
	    _this._boundsBottom = true;

	    /**
	    * @property {boolean} _boundsOwnGroup - Internal var that keeps track of world bounds settings.
	    * @private
	    */
	    _this._boundsOwnGroup = false;

	    /**
	    * @property {array} collisionGroups - An array containing the collision groups that have been defined in the World.
	    */
	    _this.collisionGroups = [];

	    /**
	       * @property {Tiny.Physics.P2.CollisionGroup} nothingCollisionGroup - A default collision group.
	       */
	    _this.nothingCollisionGroup = new _CollisionGroup2.default(1);

	    /**
	    * @property {Tiny.Physics.P2.CollisionGroup} boundsCollisionGroup - A default collision group.
	    */
	    _this.boundsCollisionGroup = new _CollisionGroup2.default(2);

	    /**
	    * @property {Tiny.Physics.P2.CollisionGroup} everythingCollisionGroup - A default collision group.
	    */
	    _this.everythingCollisionGroup = new _CollisionGroup2.default(2147483648);

	    _this._impactEvents = false;

	    _this.world.on(EVENTS.ON_BEGIN_CONTACT, _this.beginContactHandler, _this);
	    _this.world.on(EVENTS.ON_END_CONTACT, _this.endContactHandler, _this);

	    _this.setBoundsToWorld(true, true, true, true, false);
	    return _this;
	  }

	  _createClass(World, [{
	    key: 'enable',
	    value: function enable(object, debug, children) {
	      if (debug === undefined) {
	        debug = false;
	      }
	      if (children === undefined) {
	        children = true;
	      }

	      var i = 1;

	      if (Array.isArray(object)) {
	        i = object.length;

	        while (i--) {
	          if (object[i] instanceof _Container2.default) {
	            this.enable(object[i].children, debug, children);
	          } else {
	            this.enableBody(object[i], debug);

	            if (children && object[i].hasOwnProperty('children') && object[i].children.length > 0) {
	              this.enable(object[i], debug, true);
	            }
	          }
	          // this.enableBody(object[i], debug);
	          // if (children && object[i].hasOwnProperty('children') && object[i].children.length > 0) {
	          //   this.enable(object[i].children, debug, true);
	          // }
	        }
	      } else {
	        if (object instanceof _Container2.default) {
	          this.enable(object.children, debug, children);
	        } else {
	          this.enableBody(object, debug);
	          if (children && object.hasOwnProperty('children') && object.children.length > 0) {
	            this.enable(object.children, debug, true);
	          }
	        }
	        // this.enableBody(object, debug);

	        // if (children && object.hasOwnProperty('children') && object.children.length > 0) {
	        //   this.enable(object.children, debug, true);
	        // }
	      }
	    }
	  }, {
	    key: 'enableBody',
	    value: function enableBody(object, debug) {
	      console.log('enableBody', object.body);
	      if (object.body === void 0) {
	        object.body = new _body2.default(this, object, object.x, object.y, 1);
	        object.body.debug = debug;
	        if (typeof object.anchor !== 'undefined') {
	          object.anchor.set(0.5, 0.5);
	        }
	        // 添加到world中
	        this.addBody(object.body);
	      }
	    }

	    /**
	     * Add a body to the world.
	     *
	     * @method Tiny.Physics.P2#addBody
	     * @param {Tiny.Physics.P2.Body} body - The Body to add to the World.
	     * @return {boolean} True if the Body was added successfully, otherwise false.
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

	      if (body.data.world === this.world) {
	        return false;
	      } else {
	        this.world.addBody(body.data);
	        this.dispatch(EVENTS.ON_BODY_ADDED, body);
	        if (this._bodies.indexOf(body) === -1) {
	          this._bodies.push(body);
	        }
	        return true;
	      }
	    }
	  }, {
	    key: 'preUpdate',
	    value: function preUpdate() {
	      var i = this._toRemove.length;
	      while (i--) {
	        this.removeBody(this._toRemove[i]);
	      }
	      this._toRemove.length = 0;
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      if (this.paused) {
	        return;
	      }
	      this._bodies.forEach(function (body) {
	        body.preUpdate();
	      });
	      this.preUpdate();
	      this._bodies.forEach(function (body) {
	        body.postUpdate();
	      });
	      this.world.step(this.frameRate);
	    }

	    /**
	     * 检查是否安装
	     */

	  }, {
	    key: 'checkIfSetup',
	    value: function checkIfSetup() {
	      if (this.app === null) {
	        throw new Error('引擎未setup');
	      }
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      this.world.time = 0;
	      this.world.fixedStepTime = 0;

	      // Remove all solver equations
	      if (this.world.solver && this.world.solver.equations.length) {
	        this.world.solver.removeAllEquations();
	      }

	      // Remove all constraints
	      var cs = this.world.constraints;

	      for (var i = cs.length - 1; i >= 0; i--) {
	        this.world.removeConstraint(cs[i]);
	      }

	      // Remove all bodies
	      var bodies = this.world.bodies;

	      for (var _i = bodies.length - 1; _i >= 0; _i--) {
	        this.world.removeBody(bodies[_i]);
	      }

	      // Remove all springs
	      var springs = this.world.springs;

	      for (var _i2 = springs.length - 1; _i2 >= 0; _i2--) {
	        this.world.removeSpring(springs[_i2]);
	      }

	      // Remove all contact materials
	      var cms = this.world.contactMaterials;

	      for (var _i3 = cms.length - 1; _i3 >= 0; _i3--) {
	        this.world.removeContactMaterial(cms[_i3]);
	      }

	      this.world.off(EVENTS.ON_BEGIN_CONTACT, this.beginContactHandler, this);
	      this.world.off(EVENTS.ON_END_CONTACT, this.endContactHandler, this);

	      this.postBroadphaseCallback = null;
	      this.callbackContext = null;
	      this.impactCallback = null;

	      this.collisionGroups = [];
	      this._toRemove = [];
	      this.boundsCollidesWith = [];

	      //  Remove the world bounds
	      this.walls = { left: null, right: null, top: null, bottom: null };
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      this.world.on(EVENTS.ON_BEGIN_CONTACT, this.beginContactHandler, this);
	      this.world.on(EVENTS.ON_END_CONTACT, this.endContactHandler, this);

	      this.nothingCollisionGroup = new _CollisionGroup2.default(1);
	      this.boundsCollisionGroup = new _CollisionGroup2.default(2);
	      this.everythingCollisionGroup = new _CollisionGroup2.default(2147483648);

	      this._collisionGroupID = 2;

	      this.setBoundsToWorld(true, true, true, true, false);
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.clear();
	      if (this.app.physics === this) {
	        this.app.physics = null;
	      }
	      this.app = null;
	    }

	    /**
	     * 触发指定事件事件
	     * @param {String} eventName
	     * @param {any} eventData
	     */

	  }, {
	    key: 'dispatch',
	    value: function dispatch(eventName) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      // this.emit(eventName, ...args);
	      this.emit.apply(this, arguments);
	    }

	    /**
	     * pixi 转 p2
	     * @param {Number} v - Tiny系统数值单位
	     * @return {Number} - p2系统数值单位
	     */

	  }, {
	    key: 'pxm',
	    value: function pxm(v) {
	      return v * 0.05;
	    }

	    /**
	     * pixi 转 p2 在取反
	     * @param {Number} v - Tiny系统数值单位
	     * @return {Number} - p2系统数值单位
	     */

	  }, {
	    key: 'pxmi',
	    value: function pxmi(v) {
	      return -this.pxm(v);
	    }

	    /**
	     * p2 转 pixi
	     * @param {Number} v  - 要转换的p2系统单位
	     * @return {Number} - Tiny系统单位
	     */

	  }, {
	    key: 'mpx',
	    value: function mpx(v) {
	      return v * 20;
	    }

	    /**
	     * p2 转 pixi 在取反
	     * @param {Number} v - 要转换的p2系统单位
	     * @return {Number} - Tiny系统单位
	     */

	  }, {
	    key: 'mpxi',
	    value: function mpxi(v) {
	      return -this.mpx(v);
	    }

	    /**
	     * 放到延迟删除临时队列
	     * @param {Tiny.Physics.P2.Body} body - 要延迟到下一次渲染删除的Body对象
	     */

	  }, {
	    key: 'removeBodyNextStep',
	    value: function removeBodyNextStep(body) {
	      this._toRemove.push(body);
	    }

	    /**
	      * Removes a body from the world. This will silently fail if the body wasn't part of the world to begin with.
	      *
	      * @method Tiny.Physics.P2#removeBody
	      * @param {Tiny.Physics.P2.Body} body - The Body to remove from the World.
	      * @return {Tiny.Physics.P2.Body} The Body that was removed.
	      */

	  }, {
	    key: 'removeBody',
	    value: function removeBody(body) {
	      if (body.data.world === this.world) {
	        this.world.removeBody(body.data);
	        body.debug = false;
	        this.dispatch(EVENTS.ON_BODY_REMOVED, body);
	      }
	      return body;
	    }
	  }, {
	    key: 'pause',


	    /**
	     * 恢复已暂停的p2.world
	     *
	     * @method Tiny.Physics.P2#resume
	     */
	    value: function pause() {
	      this._paused = true;
	    }

	    /**
	    * 恢复已暂停的p2.world
	    *
	    * @method Tiny.Physics.P2#resume
	    */

	  }, {
	    key: 'resume',
	    value: function resume() {
	      this._paused = false;
	    }

	    /**
	     * 处理p2的 beginContact事件.
	     *
	     * @method Tiny.Physics.P2#beginContactHandler
	     * @param {object} event - The p2 event data.
	     */

	  }, {
	    key: 'beginContactHandler',
	    value: function beginContactHandler(event) {
	      if (event.bodyA && event.bodyB) {
	        this.dispatch(EVENTS.ON_BEGIN_CONTACT, {
	          bodyA: event.bodyA.parent,
	          bodyB: event.bodyB.parent,
	          shapeA: event.shapeA,
	          shapeB: event.shapeB,
	          contactEquations: event.contactEquations
	        });

	        if (event.bodyA.parent) {
	          event.bodyA.parent.dispatch(EVENTS.ON_BEGIN_CONTACT, event.bodyB.parent, event.shapeB, event.bodyA.parent, event.shapeA, event.contactEquations);
	        }

	        if (event.bodyB.parent) {
	          event.bodyB.parent.dispatch(EVENTS.ON_BEGIN_CONTACT, event.bodyA.parent, event.shapeA, event.bodyB.parent, event.shapeB, event.contactEquations);
	        }
	      }
	    }

	    /**
	     * Handles a p2 end contact event.
	     *
	     * @method Tiny.Physics.P2#endContactHandler
	     * @param {object} event - The event data.
	     */

	  }, {
	    key: 'endContactHandler',
	    value: function endContactHandler(event) {
	      if (event.bodyA && event.bodyB) {
	        this.dispatch(EVENTS.ON_END_CONTACT, {
	          bodyA: event.bodyA.parent,
	          bodyB: event.bodyB.parent,
	          shapeA: event.shapeA,
	          shapeB: event.shapeB
	        });

	        if (event.bodyA.parent) {
	          event.bodyA.parent.dispatch(EVENTS.ON_END_CONTACT, event.bodyB.parent, event.bodyB, event.bodyA.parent, event.shapeA, event.shapeB);
	        }

	        if (event.bodyB.parent) {
	          event.bodyB.parent.dispatch(EVENTS.ON_END_CONTACT, event.bodyA.parent, event.bodyA, event.shapeB.parent, event.shapeB);
	        }
	      }
	    }

	    /**
	    * Creates a new Body and adds it to the World.
	    *
	    * @method Tiny.Physics.P2#createBody
	    * @param {number} x - The x coordinate of Body.
	    * @param {number} y - The y coordinate of Body.
	    * @param {number} mass - The mass of the Body. A mass of 0 means a 'static' Body is created.
	    * @param {boolean} [addToWorld=false] - Automatically add this Body to the world? (usually false as it won't have any shapes on construction).
	    * @param {object} options - An object containing the build options:
	    * @param {boolean} [options.optimalDecomp=false] - Set to true if you need optimal decomposition. Warning: very slow for polygons with more than 10 vertices.
	    * @param {boolean} [options.skipSimpleCheck=false] - Set to true if you already know that the path is not intersecting itself.
	    * @param {boolean|number} [options.removeCollinearPoints=false] - Set to a number (angle threshold value) to remove collinear points, or false to keep all points.
	    * @param {(number[]|...number)} points - An array of 2d vectors that form the convex or concave polygon.
	    *                                       Either [[0,0], [0,1],...] or a flat array of numbers that will be interpreted as [x,y, x,y, ...],
	    *                                       or the arguments passed can be flat x,y values e.g. `setPolygon(options, x,y, x,y, x,y, ...)` where `x` and `y` are numbers.
	    * @return {Tiny.Physics.P2.Body} The body
	    */

	  }, {
	    key: 'createBody',
	    value: function createBody(x, y, mass, addToWorld, options, data) {
	      if (addToWorld === undefined) {
	        addToWorld = false;
	      }
	      var body = new _body2.default(this, null, x, y, mass);
	      if (data) {
	        var result = body.addPolygon(options, data);
	        if (!result) {
	          return false;
	        }
	      }
	      if (addToWorld) {
	        this.world.addBody(body.data);
	      }
	      return body;
	    }

	    /**
	    * Sets the bounds of the Physics world to match the Game.World dimensions.
	    * You can optionally set which 'walls' to create: left, right, top or bottom.
	    *
	    * @method Tiny.Physics#setBoundsToWorld
	    * @param {boolean} [left=true] - If true will create the left bounds wall.
	    * @param {boolean} [right=true] - If true will create the right bounds wall.
	    * @param {boolean} [top=true] - If true will create the top bounds wall.
	    * @param {boolean} [bottom=true] - If true will create the bottom bounds wall.
	    * @param {boolean} [setCollisionGroup=false] - If true the Bounds will be set to use its own Collision Group.
	    */

	  }, {
	    key: 'setBoundsToWorld',
	    value: function setBoundsToWorld(left, right, top, bottom, setCollisionGroup) {
	      this.setBounds(0, 0, this.app.renderer.width, this.app.renderer.height, left, right, top, bottom, setCollisionGroup);
	    }

	    /**
	    * Sets the bounds of the Physics world to match the given world pixel dimensions.
	    * You can optionally set which 'walls' to create: left, right, top or bottom.
	    * If none of the walls are given it will default to use the walls settings it had previously.
	    * I.e. if you previously told it to not have the left or right walls, and you then adjust the world size
	    * the newly created bounds will also not have the left and right walls.
	    * Explicitly state them in the parameters to override this.
	    *
	    * @method Tiny.Physics.P2#setBounds
	    * @param {number} x - The x coordinate of the top-left corner of the bounds.
	    * @param {number} y - The y coordinate of the top-left corner of the bounds.
	    * @param {number} width - The width of the bounds.
	    * @param {number} height - The height of the bounds.
	    * @param {boolean} [left=true] - If true will create the left bounds wall.
	    * @param {boolean} [right=true] - If true will create the right bounds wall.
	    * @param {boolean} [top=true] - If true will create the top bounds wall.
	    * @param {boolean} [bottom=true] - If true will create the bottom bounds wall.
	    * @param {boolean} [setCollisionGroup=false] - If true the Bounds will be set to use its own Collision Group.
	    */

	  }, {
	    key: 'setBounds',
	    value: function setBounds(x, y, width, height, left, right, top, bottom, setCollisionGroup) {
	      if (left === undefined) {
	        left = this._boundsLeft;
	      }
	      if (right === undefined) {
	        right = this._boundsRight;
	      }
	      if (top === undefined) {
	        top = this._boundsTop;
	      }
	      if (bottom === undefined) {
	        bottom = this._boundsBottom;
	      }
	      if (setCollisionGroup === undefined) {
	        setCollisionGroup = this._boundsOwnGroup;
	      }

	      this.setupWall(left, 'left', x, y, 1.5707963267948966, setCollisionGroup);
	      this.setupWall(right, 'right', x + width, y, -1.5707963267948966, setCollisionGroup);
	      this.setupWall(top, 'top', x, y, -3.141592653589793, setCollisionGroup);
	      this.setupWall(bottom, 'bottom', x, y + height, 0, setCollisionGroup);

	      //  Remember the bounds settings in case they change later on via World.setBounds
	      this._boundsLeft = left;
	      this._boundsRight = right;
	      this._boundsTop = top;
	      this._boundsBottom = bottom;
	      this._boundsOwnGroup = setCollisionGroup;
	    }

	    /**
	     * Internal method called by setBounds. Responsible for creating, updating or
	     * removing the wall body shapes.
	     *
	     * @method Tiny.Physics.P2#setupWall
	     * @private
	     * @param {boolean} create - True to create the wall shape, false to remove it.
	     * @param {string} wall - The wall segment to update.
	     * @param {number} x - The x coordinate of the wall.
	     * @param {number} y - The y coordinate of the wall.
	     * @param {float} angle - The angle of the wall.
	     * @param {boolean} [setCollisionGroup=true] - If true the Bounds will be set to use its own Collision Group.
	     */

	  }, {
	    key: 'setupWall',
	    value: function setupWall(create, wall, x, y, angle, setCollisionGroup) {
	      console.log('setupWall', create, wall, x, y, angle, setCollisionGroup);
	      if (create) {
	        //  We need a left wall. Do we have one already?
	        if (this.walls[wall]) {
	          this.walls[wall].position = [this.pxmi(x), this.pxmi(y)];
	        } else {
	          var opts = { mass: 0, position: [this.pxmi(x), this.pxmi(y)], angle: angle };
	          console.log(wall, opts);
	          this.walls[wall] = new p2.Body(opts);
	          this.walls[wall].addShape(new p2.Plane());
	          this.world.addBody(this.walls[wall]);

	          console.log('add wall');
	        }

	        if (setCollisionGroup) {
	          this.walls[wall].shapes[0].collisionGroup = this.boundsCollisionGroup.mask;
	          console.log('setCollisionGroup', this.boundsCollisionGroup.mask);
	        }
	      } else {
	        if (this.walls[wall]) {
	          this.world.removeBody(this.walls[wall]);
	          this.walls[wall] = null;
	        }
	      }
	    }

	    /**
	    * Sets the given material against the 4 bounds of this World.
	    *
	    * @method Tiny.Physics#setWorldMaterial
	    * @param {Tiny.Physics.P2.Material} material - The material to set.
	    * @param {boolean} [left=true] - If true will set the material on the left bounds wall.
	    * @param {boolean} [right=true] - If true will set the material on the right bounds wall.
	    * @param {boolean} [top=true] - If true will set the material on the top bounds wall.
	    * @param {boolean} [bottom=true] - If true will set the material on the bottom bounds wall.
	    */

	  }, {
	    key: 'setWallMaterial',
	    value: function setWallMaterial(material) {
	      var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	      var right = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	      var top = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
	      var bottom = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

	      if (left && this.walls.left) {
	        this.walls.left.shapes[0].material = material;
	      }

	      if (right && this.walls.right) {
	        this.walls.right.shapes[0].material = material;
	      }

	      if (top && this.walls.top) {
	        this.walls.top.shapes[0].material = material;
	      }

	      if (bottom && this.walls.bottom) {
	        this.walls.bottom.shapes[0].material = material;
	      }
	    }

	    /**
	     * By default the World will be set to collide everything with everything. The bounds of the world is a Body with 4 shapes, one for each face.
	     * If you start to use your own collision groups then your objects will no longer collide with the bounds.
	     * To fix this you need to adjust the bounds to use its own collision group first BEFORE changing your Sprites collision group.
	     *
	     * @method Tiny.Physics.P2#updateBoundsCollisionGroup
	     * @param {boolean} [setCollisionGroup=true] - If true the Bounds will be set to use its own Collision Group.
	     */

	  }, {
	    key: 'updateBoundsCollisionGroup',
	    value: function updateBoundsCollisionGroup() {
	      var setCollisionGroup = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

	      var mask = setCollisionGroup ? this.boundsCollisionGroup.mask : this.everythingCollisionGroup.mask;

	      if (this.walls.left) {
	        this.walls.left.shapes[0].collisionGroup = mask;
	      }

	      if (this.walls.right) {
	        this.walls.right.shapes[0].collisionGroup = mask;
	      }

	      if (this.walls.top) {
	        this.walls.top.shapes[0].collisionGroup = mask;
	      }

	      if (this.walls.bottom) {
	        this.walls.bottom.shapes[0].collisionGroup = mask;
	      }

	      this._boundsOwnGroup = setCollisionGroup;
	    }

	    /**
	    * 参考 p2.world toJSON.
	    *
	    * @method Tiny.Physics.P2#toJSON
	    * @return {object} A JSON representation of the world.
	    */

	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      return this.world.toJSON();
	    }

	    /**
	    * 摩擦系数 - 对应于 p2.world.defaultContactMaterial.friction
	    * @name Tiny.Physics.P2#friction
	    * @property {number} friction - Friction between colliding bodies. This value is used if no matching ContactMaterial is found for a Material pair.
	    */

	  }, {
	    key: 'hitTest',


	    /**
	     * Test if a world point overlaps bodies. You will get an array of actual P2 bodies back. You can find out which Sprite a Body belongs to
	     * (if any) by checking the Body.parent.sprite property. Body.parent is a Tiny.Physics.P2.Body property.
	     *
	     * @method Tiny.Physics.P2#hitTest
	     * @param {Tiny.Point} worldPoint - Point to use for intersection tests. The points values must be in world (pixel) coordinates.
	     * @param {Array<Tiny.Physics.P2.Body|Tiny.Sprite|p2.Body>} [bodies] - A list of objects to check for intersection. If not given it will check Tiny.Physics.P2.world.bodies (i.e. all world bodies)
	     * @param {number} [precision=5] - Used for matching against particles and lines. Adds some margin to these infinitesimal objects.
	     * @param {boolean} [filterStatic=false] - If true all Static objects will be removed from the results array.
	     * @return {Array} Array of bodies that overlap the point.
	     */
	    value: function hitTest(worldPoint, bodies, precision, filterStatic) {
	      if (bodies === undefined) {
	        bodies = this.world.bodies;
	      }
	      if (precision === undefined) {
	        precision = 5;
	      }
	      if (filterStatic === undefined) {
	        filterStatic = false;
	      }

	      var physicsPosition = [this.pxmi(worldPoint.x), this.pxmi(worldPoint.y)];

	      var query = [];
	      var i = bodies.length;

	      while (i--) {
	        if (bodies[i] instanceof _body2.default && !(filterStatic && bodies[i].data.type === p2.Body.STATIC)) {
	          query.push(bodies[i].data);
	        } else if (bodies[i] instanceof p2.Body && bodies[i].parent && !(filterStatic && bodies[i].type === p2.Body.STATIC)) {
	          query.push(bodies[i]);
	        } else if (bodies[i] instanceof Tiny.Sprite && bodies[i].hasOwnProperty('body') && !(filterStatic && bodies[i].body.data.type === p2.Body.STATIC)) {
	          query.push(bodies[i].body.data);
	        }
	      }
	      return this.world.hitTest(physicsPosition, query, precision);
	    }

	    /**
	     * Checks the given object to see if it has a p2.Body and if so returns it.
	     *
	     * @method Tiny.Physics.P2#getBody
	     * @param {object} object - The object to check for a p2.Body on.
	     * @return {p2.Body} The p2.Body, or null if not found.
	     */

	  }, {
	    key: 'getBody',
	    value: function getBody(object) {
	      if (object instanceof p2.Body) {
	        //  Native p2 body
	        return object;
	      } else if (object instanceof _body2.default) {
	        //  Tiny P2 Body
	        return object.data;
	      } else if (object['body'] && object['body'].type === BODY_TYPE) {
	        // any extends type has Tiny.Physics.P2.Body
	        return object.body.data;
	      }
	      return null;
	    }

	    /**
	    * Populates and returns an array with references to of all current Bodies in the world.
	    *
	    * @method Tiny.Physics.P2#getBodies
	    * @return {array<Tiny.Physics.P2.Body>} An array containing all current Bodies in the world.
	    */

	  }, {
	    key: 'getBodies',
	    value: function getBodies() {
	      var output = [];
	      var i = this.world.bodies.length;
	      while (i--) {
	        output.push(this.world.bodies[i].parent);
	      }
	      return output;
	    }

	    /**
	     * Adds a Spring to the world.
	     *
	     * @method Tiny.Physics.P2#addSpring
	     * @param {Tiny.Physics.P2.Spring|p2.LinearSpring|p2.RotationalSpring} spring - The Spring to add to the World.
	     * @return {Tiny.Physics.P2.Spring} The Spring that was added.
	     */

	  }, {
	    key: 'addSpring',
	    value: function addSpring(spring) {
	      if (spring instanceof _Spring2.default || spring instanceof _RotationalSpring2.default) {
	        this.world.addSpring(spring.data);
	      } else {
	        this.world.addSpring(spring);
	      }
	      this.dispatch(EVENTS.ON_SPRING_ADDED, spring);
	      return spring;
	    }

	    /**
	     * Creates a linear spring, connecting two bodies. A spring can have a resting length, a stiffness and damping.
	     *
	     * @method Tiny.Physics.P2#createSpring
	     * @param {Tiny.Sprite|Tiny.Physics.P2.Body|p2.Body} bodyA - First connected body.
	     * @param {Tiny.Sprite|Tiny.Physics.P2.Body|p2.Body} bodyB - Second connected body.
	     * @param {number} [restLength=1] - Rest length of the spring. A number > 0.
	     * @param {number} [stiffness=100] - Stiffness of the spring. A number >= 0.
	     * @param {number} [damping=1] - Damping of the spring. A number >= 0.
	     * @param {Array} [worldA] - Where to hook the spring to body A in world coordinates. This value is an array by 2 elements, x and y, i.e: [32, 32].
	     * @param {Array} [worldB] - Where to hook the spring to body B in world coordinates. This value is an array by 2 elements, x and y, i.e: [32, 32].
	     * @param {Array} [localA] - Where to hook the spring to body A in local body coordinates. This value is an array by 2 elements, x and y, i.e: [32, 32].
	     * @param {Array} [localB] - Where to hook the spring to body B in local body coordinates. This value is an array by 2 elements, x and y, i.e: [32, 32].
	     * @return {Tiny.Physics.P2.Spring} The spring
	     */

	  }, {
	    key: 'createSpring',
	    value: function createSpring(bodyA, bodyB, restLength, stiffness, damping, worldA, worldB, localA, localB) {
	      bodyA = this.getBody(bodyA);
	      bodyB = this.getBody(bodyB);
	      if (!bodyA || !bodyB) {
	        console.warn('Cannot create Spring, invalid body objects given');
	      } else {
	        return this.addSpring(new _Spring2.default(this, bodyA, bodyB, restLength, stiffness, damping, worldA, worldB, localA, localB));
	      }
	    }

	    /**
	    * Creates a rotational spring, connecting two bodies. A spring can have a resting length, a stiffness and damping.
	    *
	    * @method Tiny.Physics.P2#createRotationalSpring
	    * @param {Tiny.Sprite|Tiny.Physics.P2.Body|p2.Body} bodyA - First connected body.
	    * @param {Tiny.Sprite|Tiny.Physics.P2.Body|p2.Body} bodyB - Second connected body.
	    * @param {number} [restAngle] - The relative angle of bodies at which the spring is at rest. If not given, it's set to the current relative angle between the bodies.
	    * @param {number} [stiffness=100] - Stiffness of the spring. A number >= 0.
	    * @param {number} [damping=1] - Damping of the spring. A number >= 0.
	    * @return {Tiny.Physics.P2.RotationalSpring} The spring
	    */

	  }, {
	    key: 'createRotationalSpring',
	    value: function createRotationalSpring(bodyA, bodyB, restAngle, stiffness, damping) {
	      bodyA = this.getBody(bodyA);
	      bodyB = this.getBody(bodyB);
	      if (!bodyA || !bodyB) {
	        console.warn('Cannot create Rotational Spring, invalid body objects given');
	      } else {
	        return this.addSpring(new _RotationalSpring2.default(this, bodyA, bodyB, restAngle, stiffness, damping));
	      }
	    }

	    /**
	    * Removes a Spring from the world.
	    *
	    * @method Tiny.Physics.P2#removeSpring
	    * @param {Tiny.Physics.P2.Spring} spring - The Spring to remove from the World.
	    * @return {Tiny.Physics.P2.Spring} The Spring that was removed.
	    */

	  }, {
	    key: 'removeSpring',
	    value: function removeSpring(spring) {
	      if (spring instanceof _Spring2.default || spring instanceof _RotationalSpring2.default) {
	        this.world.removeSpring(spring.data);
	      } else {
	        this.world.removeSpring(spring);
	      }
	      this.dispatch(EVENTS.ON_SPRING_REMOVED, spring);
	      return spring;
	    }

	    /**
	    * Populates and returns an array of all current Springs in the world.
	    *
	    * @method Tiny.Physics.P2#getSprings
	    * @return {array<Tiny.Physics.P2.Spring>} An array containing all current Springs in the world.
	    */

	  }, {
	    key: 'getSprings',
	    value: function getSprings() {
	      var output = [];
	      var i = this.world.springs.length;
	      while (i--) {
	        output.push(this.world.springs[i].parent);
	      }
	      return output;
	    }

	    /**
	    * Populates and returns an array of all current Constraints in the world.
	    * You will get an array of p2 constraints back. This can be of mixed types, for example the array may contain
	    * PrismaticConstraints, RevoluteConstraints or any other valid p2 constraint type.
	    *
	    * @method Tiny.Physics.P2#getConstraints
	    * @return {array<Tiny.Physics.P2.Constraint>} An array containing all current Constraints in the world.
	    */

	  }, {
	    key: 'getConstraints',
	    value: function getConstraints() {
	      var output = [];
	      var i = this.world.constraints.length;
	      while (i--) {
	        output.push(this.world.constraints[i]);
	      }
	      return output;
	    }

	    /**
	    * Locks the relative position between two bodies.
	    *
	    * @method Tiny.Physics.P2#createLockConstraint
	    * @param {Tiny.Sprite|Tiny.Physics.P2.Body|p2.Body} bodyA - First connected body.
	    * @param {Tiny.Sprite|Tiny.Physics.P2.Body|p2.Body} bodyB - Second connected body.
	    * @param {Array} [offset] - The offset of bodyB in bodyA's frame. The value is an array with 2 elements matching x and y, i.e: [32, 32].
	    * @param {number} [angle=0] - The angle of bodyB in bodyA's frame.
	    * @param {number} [maxForce] - The maximum force that should be applied to constrain the bodies.
	    * @return {Tiny.Physics.P2.LockConstraint} The constraint
	    */

	  }, {
	    key: 'createLockConstraint',
	    value: function createLockConstraint(bodyA, bodyB, offset, angle, maxForce) {
	      bodyA = this.getBody(bodyA);
	      bodyB = this.getBody(bodyB);
	      if (!bodyA || !bodyB) {
	        console.warn('Cannot create Constraint, invalid body objects given');
	      } else {
	        return this.addConstraint(new _LockConstraint2.default(this, bodyA, bodyB, offset, angle, maxForce));
	      }
	    }

	    /**
	     * Creates a constraint that tries to keep the distance between two bodies constant.
	     *
	     * @method Tiny.Physics.P2#createDistanceConstraint
	     * @param {Tiny.Sprite|Tiny.Physics.P2.Body|p2.Body} bodyA - First connected body.
	     * @param {Tiny.Sprite|Tiny.Physics.P2.Body|p2.Body} bodyB - Second connected body.
	     * @param {number} distance - The distance to keep between the bodies.
	     * @param {Array} [localAnchorA] - The anchor point for bodyA, defined locally in bodyA frame. Defaults to [0,0].
	     * @param {Array} [localAnchorB] - The anchor point for bodyB, defined locally in bodyB frame. Defaults to [0,0].
	     * @param {number} [maxForce] - The maximum force that should be applied to constrain the bodies.
	     * @return {Tiny.Physics.P2.DistanceConstraint} The constraint
	     */

	  }, {
	    key: 'createDistanceConstraint',
	    value: function createDistanceConstraint(bodyA, bodyB, distance, localAnchorA, localAnchorB, maxForce) {
	      bodyA = this.getBody(bodyA);
	      bodyB = this.getBody(bodyB);
	      if (!bodyA || !bodyB) {
	        console.warn('Cannot create Constraint, invalid body objects given');
	      } else {
	        return this.addConstraint(new _DistanceConstraint2.default(this, bodyA, bodyB, distance, localAnchorA, localAnchorB, maxForce));
	      }
	    }

	    /**
	    * Creates a constraint that tries to keep the distance between two bodies constant.
	    *
	    * @method Tiny.Physics.P2#createGearConstraint
	    * @param {Tiny.Sprite|Tiny.Physics.P2.Body|p2.Body} bodyA - First connected body.
	    * @param {Tiny.Sprite|Tiny.Physics.P2.Body|p2.Body} bodyB - Second connected body.
	    * @param {number} [angle=0] - The relative angle
	    * @param {number} [ratio=1] - The gear ratio.
	    * @return {Tiny.Physics.P2.GearConstraint} The constraint
	    */

	  }, {
	    key: 'createGearConstraint',
	    value: function createGearConstraint(bodyA, bodyB, angle, ratio) {
	      bodyA = this.getBody(bodyA);
	      bodyB = this.getBody(bodyB);
	      if (!bodyA || !bodyB) {
	        console.warn('Cannot create Constraint, invalid body objects given');
	      } else {
	        return this.addConstraint(new _GearConstraint2.default(this, bodyA, bodyB, angle, ratio));
	      }
	    }

	    /**
	    * Connects two bodies at given offset points, letting them rotate relative to each other around this point.
	    * The pivot points are given in world (pixel) coordinates.
	    *
	    * @method Tiny.Physics.P2#createRevoluteConstraint
	    * @param {Tiny.Sprite|Tiny.Physics.P2.Body|p2.Body} bodyA - First connected body.
	    * @param {Array} pivotA - The point relative to the center of mass of bodyA which bodyA is constrained to. The value is an array with 2 elements matching x and y, i.e: [32, 32].
	    * @param {Tiny.Sprite|Tiny.Physics.P2.Body|p2.Body} bodyB - Second connected body.
	    * @param {Array} pivotB - The point relative to the center of mass of bodyB which bodyB is constrained to. The value is an array with 2 elements matching x and y, i.e: [32, 32].
	    * @param {number} [maxForce=0] - The maximum force that should be applied to constrain the bodies.
	    * @param {Float32Array} [worldPivot=null] - A pivot point given in world coordinates. If specified, localPivotA and localPivotB are automatically computed from this value.
	    * @return {Tiny.Physics.P2.RevoluteConstraint} The constraint
	    */

	  }, {
	    key: 'createRevoluteConstraint',
	    value: function createRevoluteConstraint(bodyA, pivotA, bodyB, pivotB, maxForce, worldPivot) {
	      bodyA = this.getBody(bodyA);
	      bodyB = this.getBody(bodyB);
	      if (!bodyA || !bodyB) {
	        console.warn('Cannot create Constraint, invalid body objects given');
	      } else {
	        return this.addConstraint(new _RevoluteConstraint2.default(this, bodyA, pivotA, bodyB, pivotB, maxForce, worldPivot));
	      }
	    }

	    /**
	     * Constraint that only allows bodies to move along a line, relative to each other.
	     * See http://www.iforce2d.net/b2dtut/joints-prismatic
	     *
	     * @method Tiny.Physics.P2#createPrismaticConstraint
	     * @param {Tiny.Sprite|Tiny.Physics.P2.Body|p2.Body} bodyA - First connected body.
	     * @param {Tiny.Sprite|Tiny.Physics.P2.Body|p2.Body} bodyB - Second connected body.
	     * @param {boolean} [lockRotation=true] - If set to false, bodyB will be free to rotate around its anchor point.
	     * @param {Array} [anchorA] - Body A's anchor point, defined in its own local frame. The value is an array with 2 elements matching x and y, i.e: [32, 32].
	     * @param {Array} [anchorB] - Body A's anchor point, defined in its own local frame. The value is an array with 2 elements matching x and y, i.e: [32, 32].
	     * @param {Array} [axis] - An axis, defined in body A frame, that body B's anchor point may slide along. The value is an array with 2 elements matching x and y, i.e: [32, 32].
	     * @param {number} [maxForce] - The maximum force that should be applied to constrain the bodies.
	     * @return {Tiny.Physics.P2.PrismaticConstraint} The constraint
	     */

	  }, {
	    key: 'createPrismaticConstraint',
	    value: function createPrismaticConstraint(bodyA, bodyB, lockRotation, anchorA, anchorB, axis, maxForce) {
	      bodyA = this.getBody(bodyA);
	      bodyB = this.getBody(bodyB);
	      if (!bodyA || !bodyB) {
	        console.warn('Cannot create Constraint, invalid body objects given');
	      } else {
	        return this.addConstraint(new _PrismaticConstraint2.default(this, bodyA, bodyB, lockRotation, anchorA, anchorB, axis, maxForce));
	      }
	    }

	    /**
	    * Adds a Constraint to the world.
	    *
	    * @method Tiny.Physics.P2#addConstraint
	    * @param {Tiny.Physics.P2.Constraint} constraint - The Constraint to add to the World.
	    * @return {Tiny.Physics.P2.Constraint} The Constraint that was added.
	    */

	  }, {
	    key: 'addConstraint',
	    value: function addConstraint(constraint) {
	      this.world.addConstraint(constraint);
	      this.dispatch(EVENTS.ON_CONSTRAIN_ADDED, constraint);
	      return constraint;
	    }

	    /**
	    * Removes a Constraint from the world.
	    *
	    * @method Tiny.Physics.P2#removeConstraint
	    * @param {Tiny.Physics.P2.Constraint} constraint - The Constraint to be removed from the World.
	    * @return {Tiny.Physics.P2.Constraint} The Constraint that was removed.
	    */

	  }, {
	    key: 'removeConstraint',
	    value: function removeConstraint(constraint) {
	      this.world.removeConstraint(constraint);
	      this.dispatch(EVENTS.ON_CONSTRAIN_REMOVED, constraint);
	      return constraint;
	    }

	    /**
	     * Adds a Contact Material to the world.
	     *
	     * @method Tiny.Physics.P2#addContactMaterial
	     * @param {Tiny.Physics.P2.ContactMaterial} material - The Contact Material to be added to the World.
	     * @return {Tiny.Physics.P2.ContactMaterial} The Contact Material that was added.
	     */

	  }, {
	    key: 'addContactMaterial',
	    value: function addContactMaterial(material) {
	      this.world.addContactMaterial(material);
	      this.dispatch(EVENTS.ON_CONTACTMATERIAL_ADDED, material);
	      return material;
	    }
	    /**
	     * Removes a Contact Material from the world.
	     *
	     * @method Tiny.Physics.P2#removeContactMaterial
	     * @param {Tiny.Physics.P2.ContactMaterial} material - The Contact Material to be removed from the World.
	     * @return {Tiny.Physics.P2.ContactMaterial} The Contact Material that was removed.
	     */

	  }, {
	    key: 'removeContactMaterial',
	    value: function removeContactMaterial(material) {
	      this.world.removeContactMaterial(material);
	      this.dispatch(EVENTS.ON_CONTACTMATERIAL_REMOVED, material);
	      return material;
	    }

	    /**
	    * Gets a Contact Material based on the two given Materials.
	    *
	    * @method Tiny.Physics.P2#getContactMaterial
	    * @param {Tiny.Physics.P2.Material} materialA - The first Material to search for.
	    * @param {Tiny.Physics.P2.Material} materialB - The second Material to search for.
	    * @return {Tiny.Physics.P2.ContactMaterial|boolean} The Contact Material or false if none was found matching the Materials given.
	    */

	  }, {
	    key: 'getContactMaterial',
	    value: function getContactMaterial(materialA, materialB) {
	      return this.world.getContactMaterial(materialA, materialB);
	    }

	    /**
	    * Sets the given Material against all Shapes owned by all the Bodies in the given array.
	    *
	    * @method Tiny.Physics.P2#setMaterial
	    * @param {Tiny.Physics.P2.Material} material - The Material to be applied to the given Bodies.
	    * @param {array<Tiny.Physics.P2.Body>} bodies - An Array of Body objects that the given Material will be set on.
	    */

	  }, {
	    key: 'setMaterial',
	    value: function setMaterial(material, bodies) {
	      var i = bodies.length;
	      while (i--) {
	        bodies[i].setMaterial(material);
	      }
	    }

	    /**
	       * Creates a Material. Materials are applied to Shapes owned by a Body and can be set with Body.setMaterial().
	       * Materials are a way to control what happens when Shapes collide. Combine unique Materials together to create Contact Materials.
	       * Contact Materials have properties such as friction and restitution that allow for fine-grained collision control between different Materials.
	       *
	       * @method Tiny.Physics.P2#createMaterial
	       * @param {string} [name] - Optional name of the Material. Each Material has a unique ID but string names are handy for debugging.
	       * @param {Tiny.Physics.P2.Body} [body] - Optional Body. If given it will assign the newly created Material to the Body shapes.
	       * @return {Tiny.Physics.P2.Material} The Material that was created. This is also stored in Tiny.Physics.P2.materials.
	       */

	  }, {
	    key: 'createMaterial',
	    value: function createMaterial(name, body) {
	      name = name || '';
	      var material = new _Material2.default(name);
	      this.materials.push(material);
	      if (typeof body !== 'undefined') {
	        body.setMaterial(material);
	      }
	      return material;
	    }

	    /**
	     * Creates a Contact Material from the two given Materials. You can then edit the properties of the Contact Material directly.
	     *
	     * @method Tiny.Physics.P2#createContactMaterial
	     * @param {Tiny.Physics.P2.Material} [materialA] - The first Material to create the ContactMaterial from. If undefined it will create a new Material object first.
	     * @param {Tiny.Physics.P2.Material} [materialB] - The second Material to create the ContactMaterial from. If undefined it will create a new Material object first.
	     * @param {object} [options] - Material options object.
	     * @return {Tiny.Physics.P2.ContactMaterial} The Contact Material that was created.
	     */

	  }, {
	    key: 'createContactMaterial',
	    value: function createContactMaterial(materialA, materialB, options) {
	      if (materialA === undefined) {
	        materialA = this.createMaterial();
	      }
	      if (materialB === undefined) {
	        materialB = this.createMaterial();
	      }
	      var contact = new _ContactMaterial2.default(materialA, materialB, options);
	      return this.addContactMaterial(contact);
	    }

	    /**
	    * Creates a new Collision Group and optionally applies it to the given object.
	    * Collision Groups are handled using bitmasks, therefore you have a fixed limit you can create before you need to re-use older groups.
	    *
	    * @method Tiny.Physics.P2#createCollisionGroup
	    * @param {Tiny.Group|Tiny.Sprite} [object] - An optional Sprite or Group to apply the Collision Group to. If a Group is given it will be applied to all top-level children.
	    */

	  }, {
	    key: 'createCollisionGroup',
	    value: function createCollisionGroup(object) {
	      var bitmask = Math.pow(2, this._collisionGroupID);
	      if (this.walls.left) {
	        this.walls.left.shapes[0].collisionMask = this.walls.left.shapes[0].collisionMask | bitmask;
	      }
	      if (this.walls.right) {
	        this.walls.right.shapes[0].collisionMask = this.walls.right.shapes[0].collisionMask | bitmask;
	      }
	      if (this.walls.top) {
	        this.walls.top.shapes[0].collisionMask = this.walls.top.shapes[0].collisionMask | bitmask;
	      }
	      if (this.walls.bottom) {
	        this.walls.bottom.shapes[0].collisionMask = this.walls.bottom.shapes[0].collisionMask | bitmask;
	      }
	      this._collisionGroupID++;
	      var group = new _CollisionGroup2.default(bitmask);
	      this.collisionGroups.push(group);
	      if (object) {
	        this.setCollisionGroup(object, group);
	      }
	      return group;
	    }

	    /**
	    * Sets the given CollisionGroup to be the collision group for all shapes in this Body, unless a shape is specified.
	    * Note that this resets the collisionMask and any previously set groups. See Body.collides() for appending them.
	    *
	    * @method Tiny.Physics.P2y#setCollisionGroup
	    * @param {Tiny.Group|Tiny.Sprite} object - A Sprite or Group to apply the Collision Group to. If a Group is given it will be applied to all top-level children.
	    * @param {Tiny.Physics.CollisionGroup} group - The Collision Group that this Bodies shapes will use.
	    */

	  }, {
	    key: 'setCollisionGroup',
	    value: function setCollisionGroup(object, group) {
	      if (object instanceof _Container2.default) {
	        for (var i = 0; i < object.total; i++) {
	          if (object.children[i]['body'] && object.children[i]['body'].type === BODY_TYPE) {
	            object.children[i].body.setCollisionGroup(group);
	          }
	        }
	      } else {
	        object.body.setCollisionGroup(group);
	      }
	    }

	    /**
	     * Handles a p2 impact event.
	     *
	     * @method Tiny.Physics.P2#impactHandler
	     * @private
	     * @param {object} event - The event data.
	     */

	  }, {
	    key: 'impactHandler',
	    value: function impactHandler(event) {
	      if (event.bodyA.parent && event.bodyB.parent) {
	        //  Body vs. Body callbacks
	        var a = event.bodyA.parent;
	        var b = event.bodyB.parent;

	        if (a._bodyCallbacks[event.bodyB.id]) {
	          a._bodyCallbacks[event.bodyB.id].call(a._bodyCallbackContext[event.bodyB.id], a, b, event.shapeA, event.shapeB);
	        }

	        if (b._bodyCallbacks[event.bodyA.id]) {
	          b._bodyCallbacks[event.bodyA.id].call(b._bodyCallbackContext[event.bodyA.id], b, a, event.shapeB, event.shapeA);
	        }

	        //  Body vs. Group callbacks
	        if (a._groupCallbacks[event.shapeB.collisionGroup]) {
	          a._groupCallbacks[event.shapeB.collisionGroup].call(a._groupCallbackContext[event.shapeB.collisionGroup], a, b, event.shapeA, event.shapeB);
	        }

	        if (b._groupCallbacks[event.shapeA.collisionGroup]) {
	          b._groupCallbacks[event.shapeA.collisionGroup].call(b._groupCallbackContext[event.shapeA.collisionGroup], b, a, event.shapeB, event.shapeA);
	        }
	      }
	    }
	    /**
	    * Impact event handling is disabled by default. Enable it before any impact events will be dispatched.
	    * In a busy world hundreds of impact events can be generated every step, so only enable this if you cannot do what you need via beginContact or collision masks.
	    *
	    * @method Tiny.Physics.P2#setImpactEvents
	    * @param {boolean} state - Set to true to enable impact events, or false to disable.
	    */

	  }, {
	    key: 'setupImpactEvents',
	    value: function setupImpactEvents() {
	      var enable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

	      if (this._impactEvents === enable) return;
	      if (enable) {
	        this.world.on('impact', this.impactHandler, this);
	      } else {
	        this.world.off('impact', this.impactHandler, this);
	      }
	      this._impactEvents = enable;
	    }
	  }, {
	    key: 'paused',
	    get: function get() {
	      return this._paused;
	    }
	  }, {
	    key: 'friction',
	    get: function get() {
	      return this.world.defaultContactMaterial.friction;
	    },
	    set: function set(value) {
	      this.world.defaultContactMaterial.friction = value;
	    }

	    /**
	     * 反弹系数 - 对应于 p2.world.defaultContactMaterial.restitution
	    * @name Tiny.Physics.P2#restitution
	    * @property {number} restitution - Default coefficient of restitution between colliding bodies. This value is used if no matching ContactMaterial is found for a Material pair.
	    */

	  }, {
	    key: 'restitution',
	    get: function get() {
	      return this.world.defaultContactMaterial.restitution;
	    },
	    set: function set(value) {
	      this.world.defaultContactMaterial.restitution = value;
	    }

	    /**
	     * 默认材质 对应于 p2.world.defaultContactMaterial
	    * @name Tiny.Physics.P2#defaultContactMaterial
	    * @property {p2.ContactMaterial} defaultContactMaterial - The default Contact Material being used by the World.
	    */

	  }, {
	    key: 'defaultContactMaterial',
	    get: function get() {
	      return this.world.defaultContactMaterial;
	    },
	    set: function set(value) {
	      this.world.defaultContactMaterial = value;
	    }

	    /**
	     * 参考p2.world.applySpringForces
	    * @name Tiny.Physics.P2#applySpringForces
	    * @property {boolean} applySpringForces - Enable to automatically apply spring forces each step.
	    */

	  }, {
	    key: 'applySpringForces',
	    get: function get() {
	      return this.world.applySpringForces;
	    },
	    set: function set(value) {
	      this.world.applySpringForces = value;
	    }

	    /**
	    * 旋转运动阻尼
	    * @name Tiny.Physics.P2#applyDamping
	    * @property {boolean} applyDamping - Enable to automatically apply body damping each step.
	    */

	  }, {
	    key: 'applyDamping',
	    get: function get() {
	      return this.world.applyDamping;
	    },
	    set: function set(value) {
	      this.world.applyDamping = value;
	    }

	    /**
	     * false Turn off global gravity
	    * @name Tiny.Physics.P2#applyGravity
	    * @property {boolean} applyGravity - Enable to automatically apply gravity each step.
	    */

	  }, {
	    key: 'applyGravity',
	    get: function get() {
	      return this.world.applyGravity;
	    },
	    set: function set(value) {
	      this.world.applyGravity = value;
	    }

	    /**
	    * 参考p2.world.solveConstraints
	    * @name Tiny.Physics.P2#solveConstraints
	    * @property {boolean} solveConstraints - Enable/disable constraint solving in each step.
	    */

	  }, {
	    key: 'solveConstraints',
	    get: function get() {
	      return this.world.solveConstraints;
	    },
	    set: function set(value) {
	      this.world.solveConstraints = value;
	    }

	    /**
	    * 参考p2.world.time
	    * @name Tiny.Physics.P2#time
	    * @property {boolean} time - The World time.
	    * @readonly
	    */

	  }, {
	    key: 'time',
	    get: function get() {
	      return this.world.time;
	    }

	    /**
	    * p2.world.emitImpactEvent
	    * @name Tiny.Physics.P2#emitImpactEvent
	    * @property {boolean} emitImpactEvent - Set to true if you want to the world to emit the "impact" event. Turning this off could improve performance.
	    */

	  }, {
	    key: 'emitImpactEvent',
	    get: function get() {
	      return this.world.emitImpactEvent;
	    },
	    set: function set(value) {
	      this.world.emitImpactEvent = value;
	    }

	    /**
	    * p2.World.BODY_SLEEPING
	    * How to deactivate bodies during simulation. Possible modes are: World.NO_SLEEPING, World.BODY_SLEEPING and World.ISLAND_SLEEPING.
	    * If sleeping is enabled, you might need to wake up the bodies if they fall asleep when they shouldn't. If you want to enable sleeping in the world, but want to disable it for a particular body, see Body.allowSleep.
	    * @name Tiny.Physics.P2#sleepMode
	    * @property {number} sleepMode
	    */

	  }, {
	    key: 'sleepMode',
	    get: function get() {
	      return this.world.sleepMode;
	    },
	    set: function set(value) {
	      this.world.sleepMode = value;
	    }

	    /**
	    * @name Tiny.Physics.P2#bodyCount
	    * @property {number} bodyCount - The total number of bodies in the world.
	    * @readonly
	    */

	  }, {
	    key: 'bodyCount',
	    get: function get() {
	      return this.world.bodies.length;
	    }
	  }]);

	  return World;
	}(Tiny.EventEmitter);

	exports.default = World;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _InversePointProxy = __webpack_require__(6);

	var _InversePointProxy2 = _interopRequireDefault(_InversePointProxy);

	var _math = __webpack_require__(7);

	var P2Math = _interopRequireWildcard(_math);

	var _BodyDebug = __webpack_require__(8);

	var _BodyDebug2 = _interopRequireDefault(_BodyDebug);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var p2 = __webpack_require__(9);
	/**
	 * Dynamic body. Dynamic bodies body can move and respond to collisions and forces.
	 * @property DYNAMIC
	 * @type {Number}
	 * @static
	 */
	var DYNAMIC = 1;

	/**
	 * Static body. Static bodies do not move, and they do not respond to forces or collision.
	 * @property STATIC
	 * @type {Number}
	 * @static
	 */
	var STATIC = 2;

	/**
	* @class Tiny.Physics.P2.Body
	* @constructor
	* @param {Tiny.Physics.P2.World} world - world reference to the currently running world.
	* @param {Tiny.Sprite} [sprite] - The Sprite object this physics body belongs to.
	* @param {number} [x=0] - The x coordinate of this Body.
	* @param {number} [y=0] - The y coordinate of this Body.
	* @param {number} [mass=1] - The default mass of this Body (0 = static).
	*/

	var Body = function (_Tiny$EventEmitter) {
	  _inherits(Body, _Tiny$EventEmitter);

	  function Body(world, sprite, x, y, mass) {
	    _classCallCheck(this, Body);

	    var _this = _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).call(this));

	    sprite = sprite || null;
	    x = x || 0;
	    y = y || 0;
	    if (mass === undefined) {
	      mass = 1;
	    }

	    /**
	       * @property {Tiny.Physics.P2} world - Local reference to the P2 World.
	       */
	    _this.world = world;

	    /**
	    * @property {Tiny.Application} app - Local reference to app.
	    */
	    _this.app = _this.world.app;

	    /**
	    * @property {Tiny.Sprite} sprite - Reference to the parent Sprite.
	    */
	    _this.sprite = sprite;

	    /**
	    * @property {number} type - The type of physics system this body belongs to.
	    */
	    _this.type = 'Tiny.Physics.P2.Body';

	    /**
	    * @property {Tiny.Point} offset - The offset of the Physics Body from the Sprite x/y position.
	    */
	    _this.offset = new Tiny.Point();

	    /**
	    * @property {p2.Body} data - The p2 Body data.
	    * @protected
	    */
	    _this.data = new p2.Body({
	      position: [_this.world.pxmi(x), _this.world.pxmi(y)],
	      mass: mass
	    });

	    _this.data.parent = _this;

	    /**
	    * @property {Tiny.Physics.P2.InversePointProxy} velocity - The velocity of the body. Set velocity.x to a negative value to move to the left, position to the right. velocity.y negative values move up, positive move down.
	    */
	    _this.velocity = new _InversePointProxy2.default(_this.world, _this.data.velocity);

	    /**
	    * 作用力。刚体在线性速度方向上收到的扭力
	    * @property {Tiny.Physics.P2.InversePointProxy} force - The force applied to the body.
	    */
	    _this.force = new _InversePointProxy2.default(_this.world, _this.data.force);

	    /**
	    * @property {array} collidesWith - Array of CollisionGroups that this Bodies shapes collide with.
	    */
	    _this.collidesWith = [];

	    /**
	    * @property {boolean} removeNextStep - To avoid deleting this body during a physics step, and causing all kinds of problems, set removeNextStep to true to have it removed in the next preUpdate.
	    */
	    _this.removeNextStep = false;

	    /**
	    * @property {Tiny.Physics.P2.BodyDebug} debugBody - Reference to the debug body.
	    */
	    _this.debugBody = null;

	    /**
	    * @property {boolean} dirty - Internally used by Sprite.x/y
	    */
	    _this.dirty = false;

	    /**
	    * @property {boolean} _collideWorldBounds - Internal var that determines if this Body collides with the world bounds or not.
	    * @private
	    */
	    _this._collideWorldBounds = true;

	    /**
	    * @property {object} _bodyCallbacks - Array of Body callbacks.
	    * @private
	    */
	    _this._bodyCallbacks = {};

	    /**
	    * @property {object} _bodyCallbackContext - Array of Body callback contexts.
	    * @private
	    */
	    _this._bodyCallbackContext = {};

	    /**
	    * @property {object} _groupCallbacks - Array of Group callbacks.
	    * @private
	    */
	    _this._groupCallbacks = {};

	    /**
	    * @property {object} _bodyCallbackContext - Array of Grouo callback contexts.
	    * @private
	    */
	    _this._groupCallbackContext = {};

	    /**
	    * @property {boolean} _reset - Internal var.
	    * @private
	    */
	    _this._reset = false;

	    //  Set-up the default shape
	    if (sprite) {
	      _this.setRectangleFromSprite(sprite);
	    }
	    return _this;
	  }

	  /**
	   * Gets the collision bitmask from the groups this body collides with.
	   *
	   * @method Tiny.Physics.P2.Body#getCollisionMask
	   * @return {number} The bitmask.
	   */


	  _createClass(Body, [{
	    key: 'getCollisionMask',
	    value: function getCollisionMask() {
	      var mask = 0;
	      if (this._collideWorldBounds) {
	        mask = this.world.boundsCollisionGroup.mask;
	      }
	      for (var i = 0; i < this.collidesWith.length; i++) {
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

	  }, {
	    key: 'updateCollisionMask',
	    value: function updateCollisionMask(shape) {
	      var mask = this.getCollisionMask();

	      if (shape === undefined) {
	        for (var i = this.data.shapes.length - 1; i >= 0; i--) {
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

	  }, {
	    key: 'setCollisionGroup',
	    value: function setCollisionGroup(group, shape) {
	      var mask = this.getCollisionMask();
	      if (shape === undefined) {
	        for (var i = this.data.shapes.length - 1; i >= 0; i--) {
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

	  }, {
	    key: 'clearCollision',
	    value: function clearCollision() {
	      var clearGroup = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	      var clearMask = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	      var shape = arguments[2];

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

	  }, {
	    key: 'removeCollisionGroup',
	    value: function removeCollisionGroup(group) {
	      var clearCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	      var shape = arguments[2];

	      var index = void 0;

	      if (Array.isArray(group)) {
	        for (var i = 0; i < group.length; i++) {
	          index = this.collidesWith.indexOf(group[i]);
	          if (index > -1) {
	            this.collidesWith.splice(index, 1);
	            if (clearCallback) {
	              delete this._groupCallbacks[group.mask];
	              delete this._groupCallbackContext[group.mask];
	            }
	          }
	        }
	      } else {
	        index = this.collidesWith.indexOf(group);
	        if (index > -1) {
	          this.collidesWith.splice(index, 1);
	          if (clearCallback) {
	            delete this._groupCallbacks[group.mask];
	            delete this._groupCallbackContext[group.mask];
	          }
	        }
	      }

	      var mask = this.getCollisionMask();
	      if (shape === undefined) {
	        for (var _i = this.data.shapes.length - 1; _i >= 0; _i--) {
	          this.data.shapes[_i].collisionMask = mask;
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

	  }, {
	    key: 'collides',
	    value: function collides(group, callback, callbackContext, shape) {
	      if (Array.isArray(group)) {
	        for (var i = 0; i < group.length; i++) {
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

	      var mask = this.getCollisionMask();
	      if (shape === undefined) {
	        for (var _i2 = this.data.shapes.length - 1; _i2 >= 0; _i2--) {
	          this.data.shapes[_i2].collisionMask = mask;
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

	  }, {
	    key: 'createBodyCallback',
	    value: function createBodyCallback(object, callback, callbackContext) {
	      var id = -1;

	      if (object['id']) {
	        id = object.id;
	      } else if (object['body']) {
	        id = object.body.id;
	      }

	      if (id > -1) {
	        if (callback === null) {
	          delete this._bodyCallbacks[id];
	          delete this._bodyCallbackContext[id];
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

	  }, {
	    key: 'createGroupCallback',
	    value: function createGroupCallback(group, callback, callbackContext) {
	      if (callback === null) {
	        delete this._groupCallbacks[group.mask];
	        delete this._groupCallbackContext[group.mask];
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

	  }, {
	    key: 'applyDamping',
	    value: function applyDamping(dt) {
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

	  }, {
	    key: 'applyImpulse',
	    value: function applyImpulse(impulse, worldX, worldY) {
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

	  }, {
	    key: 'applyImpulseLocal',
	    value: function applyImpulseLocal(impulse, localX, localY) {
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

	  }, {
	    key: 'applyForce',
	    value: function applyForce(force, worldX, worldY) {
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

	  }, {
	    key: 'addRectangle',
	    value: function addRectangle(width, height, offsetX, offsetY, rotation) {
	      var shape = new p2.Box({
	        width: this.world.pxm(width),
	        height: this.world.pxm(height)
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

	  }, {
	    key: 'addPolygon',
	    value: function addPolygon(options, points) {
	      options = options || {};
	      if (!Array.isArray(points)) {
	        points = Array.prototype.slice.call(arguments, 1);
	      }
	      var path = [];
	      //  Did they pass in a single array of points?
	      if (points.length === 1 && Array.isArray(points[0])) {
	        path = points[0].slice(0);
	      } else if (Array.isArray(points[0])) {
	        path = points.slice();
	      } else if (typeof points[0] === 'number') {
	        //  We've a list of numbers
	        for (var i = 0, len = points.length; i < len; i += 2) {
	          path.push([points[i], points[i + 1]]);
	        }
	      }
	      //  top and tail
	      var idx = path.length - 1;
	      if (path[idx][0] === path[0][0] && path[idx][1] === path[0][1]) {
	        path.pop();
	      }
	      //  Now process them into p2 values
	      for (var p = 0; p < path.length; p++) {
	        path[p][0] = this.world.pxmi(path[p][0]);
	        path[p][1] = this.world.pxmi(path[p][1]);
	      }
	      var result = this.data.fromPolygon(path, options);
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

	  }, {
	    key: 'addCircle',
	    value: function addCircle(radius, offsetX, offsetY, rotation) {
	      var shape = new p2.Circle({ radius: this.world.pxm(radius) });
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

	  }, {
	    key: 'addPlane',
	    value: function addPlane(offsetX, offsetY, rotation) {
	      var shape = new p2.Plane();
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

	  }, {
	    key: 'addParticle',
	    value: function addParticle() {
	      var offsetX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var offsetY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	      var rotation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

	      var shape = new p2.Particle();
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

	  }, {
	    key: 'addLine',
	    value: function addLine(length) {
	      var offsetX = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	      var offsetY = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	      var rotation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

	      var shape = new p2.Line({ length: this.world.pxm(length) });
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

	  }, {
	    key: 'addCapsule',
	    value: function addCapsule(length, radius) {
	      var offsetX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	      var offsetY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	      var rotation = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

	      var shape = new p2.Capsule({ length: this.world.pxm(length), radius: this.world.pxm(radius) });
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

	  }, {
	    key: 'addShape',
	    value: function addShape(shape) {
	      var offsetX = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	      var offsetY = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	      var rotation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

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

	  }, {
	    key: 'removeShape',
	    value: function removeShape(shape) {
	      var result = this.data.removeShape(shape);
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

	  }, {
	    key: 'setCircle',
	    value: function setCircle(radius) {
	      var offsetX = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	      var offsetY = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	      var rotation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

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

	  }, {
	    key: 'setRectangle',
	    value: function setRectangle() {
	      var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16;
	      var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;
	      var offsetX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	      var offsetY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	      var rotation = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

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

	  }, {
	    key: 'setRectangleFromSprite',
	    value: function setRectangleFromSprite(sprite) {
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

	  }, {
	    key: 'setMaterial',
	    value: function setMaterial(material, shape) {
	      if (shape === undefined) {
	        for (var i = this.data.shapes.length - 1; i >= 0; i--) {
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

	  }, {
	    key: 'loadPolygon',
	    value: function loadPolygon(object) {
	      var clear = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	      if (clear) {
	        this.clearShapes();
	      }
	      var data = object;

	      //  We've multiple Convex shapes, they should be CCW automatically
	      var cm = p2.vec2.create();

	      for (var i = 0; i < data.length; i++) {
	        var vertices = [];

	        for (var s = 0; s < data[i].shape.length; s += 2) {
	          vertices.push([this.world.pxmi(data[i].shape[s]), this.world.pxmi(data[i].shape[s + 1])]);
	        }

	        var c = new p2.Convex({ vertices: vertices });

	        // Move all vertices so its center of mass is in the local center of the convex
	        for (var j = 0; j !== c.vertices.length; j++) {
	          var v = c.vertices[j];
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

	  }, {
	    key: 'clearShapes',
	    value: function clearShapes() {
	      var i = this.data.shapes.length;
	      while (i--) {
	        this.data.removeShape(this.data.shapes[i]);
	      }
	      this.shapeChanged();
	    }

	    /**
	     * 当时添加或者删除shape的时候会触发
	     */

	  }, {
	    key: 'shapeChanged',
	    value: function shapeChanged() {
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

	  }, {
	    key: 'preUpdate',
	    value: function preUpdate() {
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

	  }, {
	    key: 'postUpdate',
	    value: function postUpdate() {
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

	  }, {
	    key: 'addToWorld',
	    value: function addToWorld() {
	      // if (this.data.world !== this.world.world) {
	      this.world.addBody(this);
	      // }
	    }

	    /**
	     * 将body从物理系统删除，从而也解除了sprite的物理属性
	     */

	  }, {
	    key: 'removeFromWorld',
	    value: function removeFromWorld() {
	      if (this.data.world === this.world.world) {
	        this.world.removeBodyNextStep(this);
	      }
	    }

	    /**
	    * Destroys this Body and all references it holds to other objects.
	    *
	    * @method Tiny.Physics.P2.Body#destroy
	    */

	  }, {
	    key: 'destroy',
	    value: function destroy() {
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
	  }, {
	    key: 'dispatch',


	    /**
	      * 触发指定事件事件
	      * @param {String} eventName
	      * @param {any} eventData
	      */
	    value: function dispatch(eventName) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      // this.emit(eventName, args);
	      this.emit.apply(this, arguments);
	    }

	    /**
	    *  from p2 demo Body will feel sleepy if speed less than this value (speed is the norm of velocity)
	    * @name Tiny.Physics.P2.Body#sleepSpeedLimit
	    * @property {number} sleepSpeedLimit - .
	    */

	  }, {
	    key: 'setZeroForce',


	    /**
	    * Sets the force on the body to zero.
	    *
	    * @method Tiny.Physics.P2.Body#setZeroForce
	    */
	    value: function setZeroForce() {
	      this.data.setZeroForce();
	    }

	    /**
	    * If this Body is dynamic then this will zero its angular velocity.
	    *
	    * @method Tiny.Physics.P2.Body#setZeroRotation
	    */

	  }, {
	    key: 'setZeroRotation',
	    value: function setZeroRotation() {
	      this.data.angularVelocity = 0;
	    }

	    /**
	    * If this Body is dynamic then this will zero its velocity on both axis.
	    *
	    * @method Tiny.Physics.P2.Body#setZeroVelocity
	    */

	  }, {
	    key: 'setZeroVelocity',
	    value: function setZeroVelocity() {
	      this.data.velocity[0] = 0;
	      this.data.velocity[1] = 0;
	    }

	    /**
	    * Sets the Body damping and angularDamping to zero.
	    *
	    * @method Tiny.Physics.P2.Body#setZeroDamping
	    */

	  }, {
	    key: 'setZeroDamping',
	    value: function setZeroDamping() {
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

	  }, {
	    key: 'moveForward',
	    value: function moveForward(speed) {
	      var magnitude = this.world.pxmi(-speed);
	      var angle = this.data.angle + Math.PI / 2;

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

	  }, {
	    key: 'moveBackward',
	    value: function moveBackward(speed) {
	      var magnitude = this.world.pxmi(-speed);
	      var angle = this.data.angle + Math.PI / 2;

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

	  }, {
	    key: 'moveLeft',
	    value: function moveLeft(speed) {
	      this.data.velocity[0] = this.world.pxmi(-speed);
	    }

	    /**
	    * If this Body is dynamic then this will move it to the right by setting its x velocity to the given speed.
	    * The speed is represented in pixels per second. So a value of 100 would move 100 pixels in 1 second (1000ms).
	    *
	    * @method Tiny.Physics.P2.Body#moveRight
	    * @param {number} speed - The speed at which it should move to the right, in pixels per second.
	    */

	  }, {
	    key: 'moveRight',
	    value: function moveRight(speed) {
	      this.data.velocity[0] = this.world.pxmi(speed);
	    }

	    /**
	    * If this Body is dynamic then this will move it up by setting its y velocity to the given speed.
	    * The speed is represented in pixels per second. So a value of 100 would move 100 pixels in 1 second (1000ms).
	    *
	    * @method Tiny.Physics.P2.Body#moveUp
	    * @param {number} speed - The speed at which it should move up, in pixels per second.
	    */

	  }, {
	    key: 'moveUp',
	    value: function moveUp(speed) {
	      this.data.velocity[1] = this.world.pxmi(-speed);
	    }

	    /**
	    * If this Body is dynamic then this will move it down by setting its y velocity to the given speed.
	    * The speed is represented in pixels per second. So a value of 100 would move 100 pixels in 1 second (1000ms).
	    *
	    * @method Tiny.Physics.P2.Body#moveDown
	    * @param {number} speed - The speed at which it should move down, in pixels per second.
	    */

	  }, {
	    key: 'moveDown',
	    value: function moveDown(speed) {
	      this.data.velocity[1] = this.world.pxmi(speed);
	    }
	  }, {
	    key: 'angle',
	    get: function get() {
	      return P2Math.wrapAngle(P2Math.radToDeg(this.data.angle));
	    }

	    /**
	     * 角度 p2的angle使用的是弧度单位，这里转换成角度单位
	     * The angle of the body, in degree.
	     * @property angle
	     * @type {number}
	     */
	    ,
	    set: function set(value) {
	      this.data.angle = P2Math.degToRad(P2Math.wrapAngle(value));
	    }
	  }, {
	    key: 'mass',
	    get: function get() {
	      return this.data.mass;
	    }

	    /**
	    * 刚体的质量，用于作用力等需要质量的公式运算
	    * 质量 - 具体参考p2.body.mass
	    * @name Tiny.Physics.P2.Body#mass
	    * @property {number} mass - The mass of the body.
	    */
	    ,
	    set: function set(value) {
	      if (value !== this.data.mass) {
	        this.data.mass = value;
	        this.data.updateMassProperties();
	      }
	    }
	  }, {
	    key: 'static',
	    get: function get() {
	      return this.data.type === STATIC;
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
	    ,
	    set: function set(value) {
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

	  }, {
	    key: 'allowSleep',
	    get: function get() {
	      return this.data.allowSleep;
	    }

	    /**
	     * @name Tiny.Physics.P2Body#allowSleep
	     * @property {boolean} allowSleep - 是否允许休眠
	     */
	    ,
	    set: function set(value) {
	      if (value !== this.data.allowSleep) {
	        this.data.allowSleep = value;
	      }
	    }
	  }, {
	    key: 'angularVelocity',
	    get: function get() {
	      return this.data.angularVelocity;
	    }

	    /**
	     * 具体参考p2.body.angularVelocity
	     * The angular velocity of the body, in radians per second.
	     * @name Tiny.Physics.P2.Body#angularVelocity
	     * @property {number} angularVelocity
	     */
	    ,
	    set: function set(value) {
	      this.data.angularVelocity = value;
	    }
	  }, {
	    key: 'fixedRotation',
	    get: function get() {
	      return this.data.fixedRotation;
	    }

	    /**
	     * [feature] 如果设置了fixedRotation  那么物理系统中不改变实际物体的角度 角度以实际sprite.rotation为主
	     * 具体参考p2.body.fixedRotation
	     * @name Tiny.Physics.P2.Body#fixedRotation
	     * @property {number} fixedRotation - Set to true if you want to fix the rotation of the body.
	     */
	    ,
	    set: function set(value) {
	      if (value !== this.data.fixedRotation) {
	        this.data.fixedRotation = value;
	      }
	    }
	  }, {
	    key: 'inertia',
	    get: function get() {
	      return this.data.inertia;
	    }

	    /**
	     * 刚体在角速度上的惯性，值越大惯性越大
	     * 惯量 - 具体参考p2.body.inertia
	     * @name Tiny.Physics.P2.Body#inertia
	     * @property {number} inertia - The inertia of the body around the Z axis..
	     */
	    ,
	    set: function set(value) {
	      this.data.inertia = value;
	    }
	  }, {
	    key: 'x',
	    get: function get() {
	      return this.world.mpxi(this.data.position[0]);
	    }

	    /**
	     * @name Tiny.Physics.P2.Body#y
	     * @property {number} x - The x coordinate of this Body.
	     */
	    ,
	    set: function set(value) {
	      this.data.position[0] = this.world.pxmi(value);
	    }
	  }, {
	    key: 'y',
	    get: function get() {
	      return this.world.mpxi(this.data.position[1]);
	    }

	    /**
	    * @name Tiny.Physics.P2.Body#y
	    * @property {number} y - The y coordinate of this Body.
	    */
	    ,
	    set: function set(value) {
	      this.data.position[1] = this.world.pxmi(value);
	    }

	    /**
	     * @name Tiny.Physics.P2.Body#id
	     * @property {number} id - 引用p2.body的id.
	     */

	  }, {
	    key: 'id',
	    get: function get() {
	      return this.data.id;
	    }
	  }, {
	    key: 'damping',
	    get: function get() {
	      return this.data.damping;
	    }

	    /**
	    * 速度阻尼。刚体在线性速度方向上收到的阻尼
	    * Damping isspecified as a value between 0 and 1, which is the proportion of velocity lost per second.
	    * @name Tiny.Physics.P2.Body#damping
	    * @property {number} damping - The linear damping acting on the body in the velocity direction.
	    */
	    ,
	    set: function set(value) {
	      this.data.damping = value;
	    }

	    /**
	    * Damping is specified as a value between 0 and 1, which is the proportion of velocity lost per second.
	    * @name Tiny.Physics.P2.Body#angularDamping
	    * @property {number} angularDamping - The angular damping acting acting on the body.
	    */

	  }, {
	    key: 'angularDamping',
	    get: function get() {
	      return this.data.angularDamping;
	    },
	    set: function set(value) {
	      this.data.angularDamping = value;
	    }
	  }, {
	    key: 'sleepSpeedLimit',
	    get: function get() {
	      return this.data.sleepSpeedLimit;
	    },
	    set: function set(value) {
	      this.data.sleepSpeedLimit = value;
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
	      } else if (!value && this.debugBody) {
	        this.debugBody.destroy();
	        this.debugBody = null;
	      }
	    }
	  }, {
	    key: 'collideWorldBounds',
	    get: function get() {
	      return this._collideWorldBounds;
	    },
	    set: function set(value) {
	      if (value && !this._collideWorldBounds) {
	        this._collideWorldBounds = true;
	        this.updateCollisionMask();
	      } else if (!value && this._collideWorldBounds) {
	        this._collideWorldBounds = false;
	        this.updateCollisionMask();
	      }
	    }
	  }]);

	  return Body;
	}(Tiny.EventEmitter);

	exports.default = Body;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	* p2 和 tiny 系统相反的坐标代理 实现坐标点的直接转换
	* A InversePointProxy is an internal class that allows for direct getter/setter style property access to Arrays and TypedArrays but inverses the values on set.
	*
	* @class Tiny.Physics.P2.InversePointProxy
	* @constructor
	* @param {Tiny.Physics.P2.World} world - A reference to the P2 World.
	* @param {any} destination - The object to bind to.
	*/
	var InversePointProxy = function () {
	  function InversePointProxy(world, destination) {
	    _classCallCheck(this, InversePointProxy);

	    this.world = world;
	    this.destination = destination;
	  }
	  /**
	   * @name Tiny.Physics.P2.InversePointProxy#x
	   * @property {number} x - The x property of this InversePointProxy get and set in pixels.
	   */


	  _createClass(InversePointProxy, [{
	    key: "x",
	    get: function get() {
	      return this.world.mpxi(this.destination[0]);
	    }
	    /**
	     * @name Tiny.Physics.P2.InversePointProxy#x
	     * @property {number} x - The x property of this InversePointProxy get and set in pixels.
	     */
	    ,
	    set: function set(value) {
	      this.destination[0] = this.world.pxmi(value);
	    }
	    /**
	    * @name Tiny.Physics.P2.InversePointProxy#y
	    * @property {number} y - The y property of this InversePointProxy get and set in pixels.
	    */

	  }, {
	    key: "y",
	    get: function get() {
	      return this.world.mpxi(this.destination[1]);
	    },
	    set: function set(value) {
	      this.destination[1] = this.world.pxmi(value);
	    }
	  }, {
	    key: "mx",
	    get: function get() {
	      return this.destination[0];
	    },
	    set: function set(value) {
	      this.destination[0] = -value;
	    }
	    /**
	    * @name Tiny.Physics.P2.InversePointProxy#my
	    * @property {number} my - The y property of this InversePointProxy get and set in meters.
	    */

	  }, {
	    key: "my",
	    get: function get() {
	      return this.destination[1];
	    },
	    set: function set(value) {
	      this.destination[1] = -value;
	    }
	  }]);

	  return InversePointProxy;
	}();

	exports.default = InversePointProxy;

/***/ }),
/* 7 */
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
	* Keeps an angle value between -180 and +180; or -PI and PI if radians.
	*
	* @method Tiny.Physics.Math#wrapAngle
	* @param {number} angle - The angle value to wrap
	* @param {boolean} [radians=false] - Set to `true` if the angle is given in radians, otherwise degrees is expected.
	* @return {number} The new angle value; will be the same as the input angle if it was within bounds.
	*/
	function wrapAngle(angle, radians) {
	  return radians ? this.wrap(angle, -Math.PI, Math.PI) : this.wrap(angle, -180, 180);
	}

	/**
	* Ensures that the value always stays between min and max, by wrapping the value around.
	*
	* If `max` is not larger than `min` the result is 0.
	*
	* @method Tiny.Physics.Math#wrap
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
	* Convert degrees to radians.
	*
	* @method Tiny.Physics.P2..Math#degToRad
	* @param {number} degrees - Angle in degrees.
	* @return {number} Angle in radians.
	*/
	function degToRad(degrees) {
	  return degrees * degreeToRadiansFactor;
	};

	/**
	* Convert radians to degrees.
	*
	* @method Tiny.Physics.Math#radToDeg
	* @param {number} radians - Angle in radians.
	* @return {number} Angle in degrees
	*/
	function radToDeg(radians) {
	  return radians * radianToDegreesFactor;
	};

	/**
	* Returns the euclidian distance between the two given set of coordinates.
	*
	* @method Tiny.Physics.Math#distance
	* @param {number} x1
	* @param {number} y1
	* @param {number} x2
	* @param {number} y2
	* @return {number} The distance between the two sets of coordinates.
	*/
	function distance(x1, y1, x2, y2) {
	  var dx = x1 - x2;
	  var dy = y1 - y2;
	  return Math.sqrt(dx * dx + dy * dy);
	}

	/**
	 * 两点之间的角度
	* @param {number} x1
	* @param {number} y1
	* @param {number} x2
	* @param {number} y2
	* @return {number} The distance between the two sets of coordinates.
	*/
	function angle(x1, y1, x2, y2) {
	  return Math.atan2(y2 - y1, x2 - x1);
	}

	/**
	* Force a value within the boundaries by clamping it to the range `min`, `max`.
	*
	* @method Tiny.Physics.Math#clamp
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(3);

	var Utils = _interopRequireWildcard(_utils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var p2 = __webpack_require__(9);
	/**
	* 调试的时候画出来p2.body的轮廓
	* @class Tiny.Physics.P2.BodyDebug
	* @constructor
	* @extends Tiny.Sprite
	* @param {Tiny.Physices.P2.world} game - Game reference to the currently running game.
	* @param {Tiny.Physics.P2.Body} body - The P2 Body to display debug data for.
	* @param {object} settings - Settings object.
	*/

	var BodyDebug = function (_Tiny$Sprite) {
	  _inherits(BodyDebug, _Tiny$Sprite);

	  function BodyDebug(body, settings) {
	    _classCallCheck(this, BodyDebug);

	    var _this = _possibleConstructorReturn(this, (BodyDebug.__proto__ || Object.getPrototypeOf(BodyDebug)).call(this));

	    var world = body.world;

	    /**
	    * @property {object} defaultSettings - Default debug settings.
	    * @private
	    */
	    var defaultSettings = {
	      pixelsPerLengthUnit: world.mpx(1),
	      debugPolygons: false,
	      lineWidth: 1,
	      alpha: 0.5,
	      lineColor: 0xff0000,
	      fill: 0.5,
	      fillColor: 0xff0000
	    };

	    _this.settings = Utils.extend(defaultSettings, settings);

	    /**
	    * @property {number} ppu - Pixels per Length Unit.
	    */
	    _this.ppu = _this.settings.pixelsPerLengthUnit;
	    _this.ppu = -1 * _this.ppu;

	    _this.world = world;
	    /**
	    * @property {Tiny.Physics.P2.Body} body - The P2 Body to display debug data for.
	    */
	    _this.body = body;
	    _this.p2body = body.data;

	    /**
	    * @property {Tiny.Graphics} canvas - The canvas to render the debug info to.
	    */
	    _this.canvas = new Tiny.Graphics();

	    _this.canvas.alpha = _this.settings.alpha;

	    _this.addChild(_this.canvas);

	    if (_this.world.app.stageDebugLayer === void 0) {
	      // 这里参考 Tiny.Application中的stage的写法 创建了一个一样的layer
	      var stageDebugLayer = new Tiny.Container();
	      stageDebugLayer.scale.set(Tiny.config.multiplier);
	      _this.world.app.camera.addChild(stageDebugLayer);
	      _this.world.app.stageDebugLayer = stageDebugLayer;
	    }

	    if (_this.world.app.stageDebugLayer.p2 === void 0) {
	      var p2DebugLayer = new Tiny.Container();
	      _this.world.app.stageDebugLayer.addChild(p2DebugLayer);
	      _this.world.app.stageDebugLayer.p2 = p2DebugLayer;
	    }

	    _this.world.app.stageDebugLayer.p2.addChild(_this);

	    // this.anchor.set(0.5, 0.5);

	    _this.draw();

	    _this.updateSpriteTransform();
	    return _this;
	  }

	  _createClass(BodyDebug, [{
	    key: 'updateSpriteTransform',
	    value: function updateSpriteTransform() {
	      this.position.x = this.body.x;
	      this.position.y = this.body.y;
	      this.rotation = this.body.sprite.rotation;
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      var angle = void 0,
	          child = void 0,
	          color = void 0,
	          i = void 0,
	          j = void 0,
	          lineColor = void 0,
	          lw = void 0,
	          obj = void 0,
	          offset = void 0,
	          sprite = void 0,
	          v = void 0,
	          verts = void 0,
	          vrot = void 0,
	          _j = void 0,
	          _ref1 = void 0;

	      obj = this.p2body;
	      sprite = this.canvas;
	      sprite.clear();
	      color = parseInt(Utils.randomPastelHex(), 16);
	      lineColor = this.settings.lineColor;
	      lw = this.settings.lineWidth;

	      if (obj instanceof p2.Body && obj.shapes.length) {
	        var l = obj.shapes.length;

	        i = 0;

	        while (i !== l) {
	          child = obj.shapes[i];
	          offset = child.position || 0;
	          angle = child.angle || 0;

	          if (child instanceof p2.Circle) {
	            this.drawCircle(sprite, offset[0] * this.ppu, offset[1] * this.ppu, angle, child.radius * this.ppu, color, lw);
	          } else if (child instanceof p2.Capsule) {
	            this.drawCapsule(sprite, offset[0] * this.ppu, offset[1] * this.ppu, angle, child.length * this.ppu, child.radius * this.ppu, lineColor, color, lw);
	          } else if (child instanceof p2.Plane) {
	            this.drawPlane(sprite, offset[0] * this.ppu, -offset[1] * this.ppu, color, lineColor, lw * 5, lw * 10, lw * 10, this.ppu * 100, angle);
	          } else if (child instanceof p2.Line) {
	            this.drawLine(sprite, child.length * this.ppu, lineColor, lw);
	          } else if (child instanceof p2.Box) {
	            this.drawRectangle(sprite, offset[0] * this.ppu, offset[1] * this.ppu, angle, child.width * this.ppu, child.height * this.ppu, lineColor, color, lw);
	          } else if (child instanceof p2.Convex) {
	            verts = [];
	            vrot = p2.vec2.create();

	            for (j = _j = 0, _ref1 = child.vertices.length; 0 <= _ref1 ? _j < _ref1 : _j > _ref1; j = 0 <= _ref1 ? ++_j : --_j) {
	              v = child.vertices[j];
	              p2.vec2.rotate(vrot, v, angle);
	              verts.push([(vrot[0] + offset[0]) * this.ppu, -(vrot[1] + offset[1]) * this.ppu]);
	            }

	            this.drawConvex(sprite, verts, child.triangles, lineColor, color, lw, this.settings.debugPolygons, [offset[0] * this.ppu, -offset[1] * this.ppu]);
	          } else {
	            console.log('[BodyDebug] >> not defined');
	          }

	          i++;
	        }
	      }
	    }

	    /**
	    * Draws a p2.Box to the Graphics object.
	    *
	    * @method Tiny.Physics.P2.BodyDebug#drawRectangle
	    * @private
	    */

	  }, {
	    key: 'drawRectangle',
	    value: function drawRectangle(g, x, y, angle, w, h) {
	      var color = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0x000000;
	      var fillColor = arguments[7];
	      var lineWidth = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 1;

	      w = -w;
	      h = -h;
	      g.lineStyle(lineWidth, color, 1);
	      g.beginFill(0xff0000);
	      g.drawRect(x - w / 2, y - h / 2, w, h);
	      console.log('[BodyDebug] >> drawRectangles', x - w / 2, y - h / 2, w, h);
	    }

	    /**
	    * Draws a p2.Circle to the Graphics object.
	    *
	    * @method Tiny.Physics.P2.BodyDebug#drawCircle
	    * @private
	    */

	  }, {
	    key: 'drawCircle',
	    value: function drawCircle(g, x, y, angle, radius) {
	      var color = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0xffffff;
	      var lineWidth = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;

	      g.lineStyle(lineWidth, 0x000000, 1);
	      g.beginFill(color, 1.0);
	      // 这地方错误 不应该乘2
	      // g.drawCircle(x, y, -radius * 2);
	      g.drawCircle(x, y, -radius);
	      g.endFill();
	      g.moveTo(x, y);
	      g.lineTo(x + radius * Math.cos(-angle), y + radius * Math.sin(-angle));
	      console.log('[BodyDebug] >> drawCircle', x, y, -radius);
	    }

	    /**
	    * Draws a p2.Line to the Graphics object.
	    *
	    * @method Tiny.Physics.P2.BodyDebug#drawLine
	    * @private
	    */

	  }, {
	    key: 'drawLine',
	    value: function drawLine(g, len) {
	      var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0x000000;
	      var lineWidth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

	      g.lineStyle(lineWidth * 5, color, 1);
	      g.moveTo(-len / 2, 0);
	      g.lineTo(len / 2, 0);
	      console.log('[BodyDebug] >> drawLine', -len / 2, 0, len / 2, 0);
	    }

	    /**
	    * Draws a p2.Convex to the Graphics object.
	    *
	    * @method Tiny.Physics.P2.BodyDebug#drawConvex
	    * @private
	    */

	  }, {
	    key: 'drawConvex',
	    value: function drawConvex(g, verts, triangles) {
	      var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0x000000;
	      var fillColor = arguments[4];
	      var lineWidth = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
	      var debug = arguments[6];
	      var offset = arguments[7];

	      var colors = void 0,
	          i = void 0,
	          v = void 0,
	          v0 = void 0,
	          v1 = void 0,
	          x = void 0,
	          x0 = void 0,
	          x1 = void 0,
	          y = void 0,
	          y0 = void 0,
	          y1 = void 0;

	      if (!debug) {
	        g.lineStyle(lineWidth, color, 1);
	        g.beginFill(fillColor);
	        i = 0;

	        while (i !== verts.length) {
	          v = verts[i];
	          x = v[0];
	          y = v[1];

	          if (i === 0) {
	            g.moveTo(x, -y);
	          } else {
	            g.lineTo(x, -y);
	          }

	          i++;
	        }

	        g.endFill();

	        if (verts.length > 2) {
	          g.moveTo(verts[verts.length - 1][0], -verts[verts.length - 1][1]);
	          return g.lineTo(verts[0][0], -verts[0][1]);
	        }
	      } else {
	        colors = [0xff0000, 0x00ff00, 0x0000ff];
	        i = 0;

	        while (i !== verts.length + 1) {
	          v0 = verts[i % verts.length];
	          v1 = verts[(i + 1) % verts.length];
	          x0 = v0[0];
	          y0 = v0[1];
	          x1 = v1[0];
	          y1 = v1[1];
	          g.lineStyle(lineWidth, colors[i % colors.length], 1);
	          g.moveTo(x0, -y0);
	          g.lineTo(x1, -y1);
	          g.drawCircle(x0, -y0, lineWidth * 2);
	          i++;
	        }

	        g.lineStyle(lineWidth, 0x000000, 1);
	        return g.drawCircle(offset[0], offset[1], lineWidth * 2);
	      }
	      console.log('[BodyDebug] >> drawConvex');
	    }

	    /**
	    * Draws a p2.Path to the Graphics object.
	    *
	    * @method Tiny.Physics.P2.BodyDebug#drawPath
	    * @private
	    */

	  }, {
	    key: 'drawPath',
	    value: function drawPath(g, path) {
	      var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0x000000;
	      var fillColor = arguments[3];
	      var lineWidth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;

	      var area = void 0,
	          i = void 0,
	          lastx = void 0,
	          lasty = void 0,
	          p1x = void 0,
	          p1y = void 0,
	          p2x = void 0,
	          p2y = void 0,
	          p3x = void 0,
	          p3y = void 0,
	          v = void 0,
	          x = void 0,
	          y = void 0;

	      g.lineStyle(lineWidth, color, 1);

	      if (typeof fillColor === "number") {
	        g.beginFill(fillColor);
	      }

	      lastx = null;
	      lasty = null;
	      i = 0;

	      while (i < path.length) {
	        v = path[i];
	        x = v[0];
	        y = v[1];

	        if (x !== lastx || y !== lasty) {
	          if (i === 0) {
	            g.moveTo(x, y);
	          } else {
	            p1x = lastx;
	            p1y = lasty;
	            p2x = x;
	            p2y = y;
	            p3x = path[(i + 1) % path.length][0];
	            p3y = path[(i + 1) % path.length][1];
	            area = (p2x - p1x) * (p3y - p1y) - (p3x - p1x) * (p2y - p1y);

	            if (area !== 0) {
	              g.lineTo(x, y);
	            }
	          }
	          lastx = x;
	          lasty = y;
	        }

	        i++;
	      }

	      if (typeof fillColor === 'number') {
	        g.endFill();
	      }

	      if (path.length > 2 && typeof fillColor === 'number') {
	        g.moveTo(path[path.length - 1][0], path[path.length - 1][1]);
	        g.lineTo(path[0][0], path[0][1]);
	      }
	      console.log('[BodyDebug] >> drawPath');
	    }

	    /**
	    * Draws a p2.Plane to the Graphics object.
	    *
	    * @method Tiny.Physics.P2.BodyDebug#drawPlane
	    * @private
	    */

	  }, {
	    key: 'drawPlane',
	    value: function drawPlane(g, x0, x1) {
	      var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0xffffff;
	      var lineColor = arguments[4];
	      var lineWidth = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
	      var diagMargin = arguments[6];
	      var diagSize = arguments[7];
	      var maxLength = arguments[8];
	      var angle = arguments[9];

	      var max = void 0,
	          xd = void 0,
	          yd = void 0;

	      g.lineStyle(lineWidth, lineColor, 11);
	      g.beginFill(color);
	      max = maxLength;

	      g.moveTo(x0, -x1);
	      xd = x0 + Math.cos(angle) * this.game.width;
	      yd = x1 + Math.sin(angle) * this.game.height;
	      g.lineTo(xd, -yd);

	      g.moveTo(x0, -x1);
	      xd = x0 + Math.cos(angle) * -this.game.width;
	      yd = x1 + Math.sin(angle) * -this.game.height;
	      g.lineTo(xd, -yd);
	      console.log('[BodyDebug] >> drawPlane');
	    }

	    /**
	    * Draws a p2.Capsule to the Graphics object.
	    *
	    * @method Tiny.Physics.P2.BodyDebug#drawCapsule
	    * @private
	    */

	  }, {
	    key: 'drawCapsule',
	    value: function drawCapsule(g, x, y, angle, len, radius) {
	      var color = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0x000000;
	      var fillColor = arguments[7];
	      var lineWidth = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 1;

	      g.lineStyle(lineWidth, color, 1);

	      // Draw circles at ends
	      var c = Math.cos(angle);
	      var s = Math.sin(angle);

	      g.beginFill(fillColor, 1);
	      g.drawCircle(-len / 2 * c + x, -len / 2 * s + y, -radius * 2);
	      g.drawCircle(len / 2 * c + x, len / 2 * s + y, -radius * 2);
	      g.endFill();

	      // Draw rectangle
	      g.lineStyle(lineWidth, color, 0);
	      g.beginFill(fillColor, 1);
	      g.moveTo(-len / 2 * c + radius * s + x, -len / 2 * s + radius * c + y);
	      g.lineTo(len / 2 * c + radius * s + x, len / 2 * s + radius * c + y);
	      g.lineTo(len / 2 * c - radius * s + x, len / 2 * s - radius * c + y);
	      g.lineTo(-len / 2 * c - radius * s + x, -len / 2 * s - radius * c + y);
	      g.endFill();

	      // Draw lines in between
	      g.lineStyle(lineWidth, color, 1);
	      g.moveTo(-len / 2 * c + radius * s + x, -len / 2 * s + radius * c + y);
	      g.lineTo(len / 2 * c + radius * s + x, len / 2 * s + radius * c + y);
	      g.moveTo(-len / 2 * c - radius * s + x, -len / 2 * s - radius * c + y);
	      g.lineTo(len / 2 * c - radius * s + x, len / 2 * s - radius * c + y);
	      console.log('[BodyDebug] >> drawCapsule');
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      if (this.canvas) {
	        // 防止重复销毁
	        this.removeChild(this.canvas);
	        this.world.app.stage.addChild(this);
	        this.canvas = null;
	      }
	    }
	  }]);

	  return BodyDebug;
	}(Tiny.Sprite);

	exports.default = BodyDebug;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// Export p2 classes
	var p2 = module.exports = {
	  AABB: __webpack_require__(10),
	  AngleLockEquation: __webpack_require__(13),
	  Body: __webpack_require__(15),
	  Broadphase: __webpack_require__(27),
	  Capsule: __webpack_require__(28),
	  Circle: __webpack_require__(29),
	  Constraint: __webpack_require__(30),
	  ContactEquation: __webpack_require__(31),
	  ContactEquationPool: __webpack_require__(32),
	  ContactMaterial: __webpack_require__(34),
	  Convex: __webpack_require__(21),
	  DistanceConstraint: __webpack_require__(36),
	  Equation: __webpack_require__(14),
	  EventEmitter: __webpack_require__(26),
	  FrictionEquation: __webpack_require__(37),
	  FrictionEquationPool: __webpack_require__(38),
	  GearConstraint: __webpack_require__(39),
	  GSSolver: __webpack_require__(40),
	  Heightfield: __webpack_require__(42),
	  Line: __webpack_require__(43),
	  LockConstraint: __webpack_require__(44),
	  Material: __webpack_require__(35),
	  Narrowphase: __webpack_require__(45),
	  NaiveBroadphase: __webpack_require__(48),
	  Particle: __webpack_require__(49),
	  Plane: __webpack_require__(50),
	  Pool: __webpack_require__(33),
	  RevoluteConstraint: __webpack_require__(51),
	  PrismaticConstraint: __webpack_require__(54),
	  Ray: __webpack_require__(25),
	  RaycastResult: __webpack_require__(24),
	  Box: __webpack_require__(47),
	  RotationalVelocityEquation: __webpack_require__(52),
	  SAPBroadphase: __webpack_require__(55),
	  Shape: __webpack_require__(22),
	  Solver: __webpack_require__(41),
	  Spring: __webpack_require__(56),
	  TopDownVehicle: __webpack_require__(57),
	  LinearSpring: __webpack_require__(58),
	  RotationalSpring: __webpack_require__(59),
	  Utils: __webpack_require__(12),
	  World: __webpack_require__(60),
	  vec2: __webpack_require__(11),
	  version: '0.7.1'
	};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var vec2 = __webpack_require__(11);

	module.exports = AABB;

	/**
	 * Axis aligned bounding box class.
	 * @class AABB
	 * @constructor
	 * @param {Object}  [options]
	 * @param {Array}   [options.upperBound]
	 * @param {Array}   [options.lowerBound]
	 * @example
	 *     var aabb = new AABB({
	 *         upperBound: [1, 1],
	 *         lowerBound: [-1, -1]
	 *     });
	 */
	function AABB(options) {
	  options = options || {};

	  /**
	   * The lower bound of the bounding box.
	   * @property lowerBound
	   * @type {Array}
	   */
	  this.lowerBound = options.lowerBound ? vec2.clone(options.lowerBound) : vec2.create();

	  /**
	   * The upper bound of the bounding box.
	   * @property upperBound
	   * @type {Array}
	   */
	  this.upperBound = options.upperBound ? vec2.clone(options.upperBound) : vec2.create();
	}

	var tmp = vec2.create();

	/**
	 * Set the AABB bounds from a set of points, transformed by the given position and angle.
	 * @method setFromPoints
	 * @param {Array} points An array of vec2's.
	 * @param {Array} position
	 * @param {number} [angle=0]
	 * @param {number} [skinSize=0] Some margin to be added to the AABB.
	 */
	AABB.prototype.setFromPoints = function (points, position, angle, skinSize) {
	  var l = this.lowerBound,
	      u = this.upperBound;

	  angle = angle || 0;

	  // Set to the first point
	  if (angle !== 0) {
	    vec2.rotate(l, points[0], angle);
	  } else {
	    vec2.copy(l, points[0]);
	  }
	  vec2.copy(u, l);

	  // Compute cosines and sines just once
	  var cosAngle = Math.cos(angle),
	      sinAngle = Math.sin(angle);
	  for (var i = 1; i < points.length; i++) {
	    var p = points[i];

	    if (angle !== 0) {
	      var x = p[0],
	          y = p[1];
	      tmp[0] = cosAngle * x - sinAngle * y;
	      tmp[1] = sinAngle * x + cosAngle * y;
	      p = tmp;
	    }

	    for (var j = 0; j < 2; j++) {
	      if (p[j] > u[j]) {
	        u[j] = p[j];
	      }
	      if (p[j] < l[j]) {
	        l[j] = p[j];
	      }
	    }
	  }

	  // Add offset
	  if (position) {
	    vec2.add(l, l, position);
	    vec2.add(u, u, position);
	  }

	  if (skinSize) {
	    l[0] -= skinSize;
	    l[1] -= skinSize;
	    u[0] += skinSize;
	    u[1] += skinSize;
	  }
	};

	/**
	 * Copy bounds from an AABB to this AABB
	 * @method copy
	 * @param  {AABB} aabb
	 */
	AABB.prototype.copy = function (aabb) {
	  vec2.copy(this.lowerBound, aabb.lowerBound);
	  vec2.copy(this.upperBound, aabb.upperBound);
	};

	/**
	 * Extend this AABB so that it covers the given AABB too.
	 * @method extend
	 * @param  {AABB} aabb
	 */
	AABB.prototype.extend = function (aabb) {
	  var lower = this.lowerBound,
	      upper = this.upperBound;

	  // Loop over x and y
	  var i = 2;
	  while (i--) {
	    // Extend lower bound
	    var l = aabb.lowerBound[i];
	    if (lower[i] > l) {
	      lower[i] = l;
	    }

	    // Upper
	    var u = aabb.upperBound[i];
	    if (upper[i] < u) {
	      upper[i] = u;
	    }
	  }
	};

	/**
	 * Returns true if the given AABB overlaps this AABB.
	 * @method overlaps
	 * @param  {AABB} aabb
	 * @return {Boolean}
	 */
	AABB.prototype.overlaps = function (aabb) {
	  var l1 = this.lowerBound,
	      u1 = this.upperBound,
	      l2 = aabb.lowerBound,
	      u2 = aabb.upperBound;

	  //      l2        u2
	  //      |---------|
	  // |--------|
	  // l1       u1

	  return (l2[0] <= u1[0] && u1[0] <= u2[0] || l1[0] <= u2[0] && u2[0] <= u1[0]) && (l2[1] <= u1[1] && u1[1] <= u2[1] || l1[1] <= u2[1] && u2[1] <= u1[1]);
	};

	/**
	 * @method containsPoint
	 * @param  {Array} point
	 * @return {boolean}
	 */
	AABB.prototype.containsPoint = function (point) {
	  var l = this.lowerBound,
	      u = this.upperBound;
	  return l[0] <= point[0] && point[0] <= u[0] && l[1] <= point[1] && point[1] <= u[1];
	};

	/**
	 * Check if the AABB is hit by a ray.
	 * @method overlapsRay
	 * @param  {Ray} ray
	 * @return {number} -1 if no hit, a number between 0 and 1 if hit, indicating the position between the "from" and "to" points.
	 * @example
	 *     var aabb = new AABB({
	 *         upperBound: [1, 1],
	 *         lowerBound: [-1, -1]
	 *     });
	 *     var ray = new Ray({
	 *         from: [-2, 0],
	 *         to: [0, 0]
	 *     });
	 *     var fraction = aabb.overlapsRay(ray); // fraction == 0.5
	 */
	AABB.prototype.overlapsRay = function (ray) {

	  // ray.direction is unit direction vector of ray
	  var dirFracX = 1 / ray.direction[0];
	  var dirFracY = 1 / ray.direction[1];

	  // this.lowerBound is the corner of AABB with minimal coordinates - left bottom, rt is maximal corner
	  var from = ray.from;
	  var lowerBound = this.lowerBound;
	  var upperBound = this.upperBound;
	  var t1 = (lowerBound[0] - from[0]) * dirFracX;
	  var t2 = (upperBound[0] - from[0]) * dirFracX;
	  var t3 = (lowerBound[1] - from[1]) * dirFracY;
	  var t4 = (upperBound[1] - from[1]) * dirFracY;

	  var tmin = Math.max(Math.max(Math.min(t1, t2), Math.min(t3, t4)));
	  var tmax = Math.min(Math.min(Math.max(t1, t2), Math.max(t3, t4)));

	  // if tmax < 0, ray (line) is intersecting AABB, but whole AABB is behing us
	  if (tmax < 0) {
	    //t = tmax;
	    return -1;
	  }

	  // if tmin > tmax, ray doesn't intersect AABB
	  if (tmin > tmax) {
	    //t = tmax;
	    return -1;
	  }

	  return tmin / ray.length;
	};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

	Redistribution and use in source and binary forms, with or without modification,
	are permitted provided that the following conditions are met:

	  * Redistributions of source code must retain the above copyright notice, this
	    list of conditions and the following disclaimer.
	  * Redistributions in binary form must reproduce the above copyright notice,
	    this list of conditions and the following disclaimer in the documentation
	    and/or other materials provided with the distribution.

	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
	ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
	WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
	DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
	ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
	(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
	LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
	ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
	SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

	/**
	 * The vec2 object from glMatrix, with some extensions and some removed methods. See http://glmatrix.net.
	 * @class vec2
	 */

	var vec2 = module.exports = {};

	var Utils = __webpack_require__(12);

	/**
	 * Make a cross product and only return the z component
	 * @method crossLength
	 * @static
	 * @param  {Array} a
	 * @param  {Array} b
	 * @return {Number}
	 */
	vec2.crossLength = function (a, b) {
	    return a[0] * b[1] - a[1] * b[0];
	};

	/**
	 * Cross product between a vector and the Z component of a vector
	 * @method crossVZ
	 * @static
	 * @param  {Array} out
	 * @param  {Array} vec
	 * @param  {Number} zcomp
	 * @return {Array}
	 */
	vec2.crossVZ = function (out, vec, zcomp) {
	    vec2.rotate(out, vec, -Math.PI / 2); // Rotate according to the right hand rule
	    vec2.scale(out, out, zcomp); // Scale with z
	    return out;
	};

	/**
	 * Cross product between a vector and the Z component of a vector
	 * @method crossZV
	 * @static
	 * @param  {Array} out
	 * @param  {Number} zcomp
	 * @param  {Array} vec
	 * @return {Array}
	 */
	vec2.crossZV = function (out, zcomp, vec) {
	    vec2.rotate(out, vec, Math.PI / 2); // Rotate according to the right hand rule
	    vec2.scale(out, out, zcomp); // Scale with z
	    return out;
	};

	/**
	 * Rotate a vector by an angle
	 * @method rotate
	 * @static
	 * @param  {Array} out
	 * @param  {Array} a
	 * @param  {Number} angle
	 * @return {Array}
	 */
	vec2.rotate = function (out, a, angle) {
	    if (angle !== 0) {
	        var c = Math.cos(angle),
	            s = Math.sin(angle),
	            x = a[0],
	            y = a[1];
	        out[0] = c * x - s * y;
	        out[1] = s * x + c * y;
	    } else {
	        out[0] = a[0];
	        out[1] = a[1];
	    }
	    return out;
	};

	/**
	 * Rotate a vector 90 degrees clockwise
	 * @method rotate90cw
	 * @static
	 * @param  {Array} out
	 * @param  {Array} a
	 * @param  {Number} angle
	 * @return {Array}
	 */
	vec2.rotate90cw = function (out, a) {
	    var x = a[0];
	    var y = a[1];
	    out[0] = y;
	    out[1] = -x;
	    return out;
	};

	/**
	 * Transform a point position to local frame.
	 * @method toLocalFrame
	 * @param  {Array} out
	 * @param  {Array} worldPoint
	 * @param  {Array} framePosition
	 * @param  {Number} frameAngle
	 * @return {Array}
	 */
	vec2.toLocalFrame = function (out, worldPoint, framePosition, frameAngle) {
	    var c = Math.cos(-frameAngle),
	        s = Math.sin(-frameAngle),
	        x = worldPoint[0] - framePosition[0],
	        y = worldPoint[1] - framePosition[1];
	    out[0] = c * x - s * y;
	    out[1] = s * x + c * y;
	    return out;
	};

	/**
	 * Transform a point position to global frame.
	 * @method toGlobalFrame
	 * @param  {Array} out
	 * @param  {Array} localPoint
	 * @param  {Array} framePosition
	 * @param  {Number} frameAngle
	 */
	vec2.toGlobalFrame = function (out, localPoint, framePosition, frameAngle) {
	    var c = Math.cos(frameAngle),
	        s = Math.sin(frameAngle),
	        x = localPoint[0],
	        y = localPoint[1],
	        addX = framePosition[0],
	        addY = framePosition[1];
	    out[0] = c * x - s * y + addX;
	    out[1] = s * x + c * y + addY;
	};

	/**
	 * Transform a vector to local frame.
	 * @method vectorToLocalFrame
	 * @param  {Array} out
	 * @param  {Array} worldVector
	 * @param  {Number} frameAngle
	 * @return {Array}
	 */
	vec2.vectorToLocalFrame = function (out, worldVector, frameAngle) {
	    var c = Math.cos(-frameAngle),
	        s = Math.sin(-frameAngle),
	        x = worldVector[0],
	        y = worldVector[1];
	    out[0] = c * x - s * y;
	    out[1] = s * x + c * y;
	    return out;
	};

	/**
	 * Transform a vector to global frame.
	 * @method vectorToGlobalFrame
	 * @param  {Array} out
	 * @param  {Array} localVector
	 * @param  {Number} frameAngle
	 */
	vec2.vectorToGlobalFrame = vec2.rotate;

	/**
	 * Compute centroid of a triangle spanned by vectors a,b,c. See http://easycalculation.com/analytical/learn-centroid.php
	 * @method centroid
	 * @static
	 * @param  {Array} out
	 * @param  {Array} a
	 * @param  {Array} b
	 * @param  {Array} c
	 * @return  {Array} The "out" vector.
	 */
	vec2.centroid = function (out, a, b, c) {
	    vec2.add(out, a, b);
	    vec2.add(out, out, c);
	    vec2.scale(out, out, 1 / 3);
	    return out;
	};

	/**
	 * Creates a new, empty vec2
	 * @static
	 * @method create
	 * @return {Array} a new 2D vector
	 */
	vec2.create = function () {
	    var out = new Utils.ARRAY_TYPE(2);
	    out[0] = 0;
	    out[1] = 0;
	    return out;
	};

	/**
	 * Creates a new vec2 initialized with values from an existing vector
	 * @static
	 * @method clone
	 * @param {Array} a vector to clone
	 * @return {Array} a new 2D vector
	 */
	vec2.clone = function (a) {
	    var out = new Utils.ARRAY_TYPE(2);
	    out[0] = a[0];
	    out[1] = a[1];
	    return out;
	};

	/**
	 * Creates a new vec2 initialized with the given values
	 * @static
	 * @method fromValues
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @return {Array} a new 2D vector
	 */
	vec2.fromValues = function (x, y) {
	    var out = new Utils.ARRAY_TYPE(2);
	    out[0] = x;
	    out[1] = y;
	    return out;
	};

	/**
	 * Copy the values from one vec2 to another
	 * @static
	 * @method copy
	 * @param {Array} out the receiving vector
	 * @param {Array} a the source vector
	 * @return {Array} out
	 */
	vec2.copy = function (out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    return out;
	};

	/**
	 * Set the components of a vec2 to the given values
	 * @static
	 * @method set
	 * @param {Array} out the receiving vector
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @return {Array} out
	 */
	vec2.set = function (out, x, y) {
	    out[0] = x;
	    out[1] = y;
	    return out;
	};

	/**
	 * Adds two vec2's
	 * @static
	 * @method add
	 * @param {Array} out the receiving vector
	 * @param {Array} a the first operand
	 * @param {Array} b the second operand
	 * @return {Array} out
	 */
	vec2.add = function (out, a, b) {
	    out[0] = a[0] + b[0];
	    out[1] = a[1] + b[1];
	    return out;
	};

	/**
	 * Subtracts two vec2's
	 * @static
	 * @method subtract
	 * @param {Array} out the receiving vector
	 * @param {Array} a the first operand
	 * @param {Array} b the second operand
	 * @return {Array} out
	 */
	vec2.sub = vec2.subtract = function (out, a, b) {
	    out[0] = a[0] - b[0];
	    out[1] = a[1] - b[1];
	    return out;
	};

	/**
	 * Multiplies two vec2's
	 * @static
	 * @method multiply
	 * @param {Array} out the receiving vector
	 * @param {Array} a the first operand
	 * @param {Array} b the second operand
	 * @return {Array} out
	 */
	vec2.multiply = function (out, a, b) {
	    out[0] = a[0] * b[0];
	    out[1] = a[1] * b[1];
	    return out;
	};

	/**
	 * Divides two vec2's
	 * @static
	 * @method divide
	 * @param {Array} out the receiving vector
	 * @param {Array} a the first operand
	 * @param {Array} b the second operand
	 * @return {Array} out
	 */
	vec2.divide = function (out, a, b) {
	    out[0] = a[0] / b[0];
	    out[1] = a[1] / b[1];
	    return out;
	};

	/**
	 * Scales a vec2 by a scalar number
	 * @static
	 * @method scale
	 * @param {Array} out the receiving vector
	 * @param {Array} a the vector to scale
	 * @param {Number} b amount to scale the vector by
	 * @return {Array} out
	 */
	vec2.scale = function (out, a, b) {
	    out[0] = a[0] * b;
	    out[1] = a[1] * b;
	    return out;
	};

	/**
	 * Calculates the euclidian distance between two vec2's
	 * @static
	 * @method distance
	 * @param {Array} a the first operand
	 * @param {Array} b the second operand
	 * @return {Number} distance between a and b
	 */
	vec2.distance = function (a, b) {
	    var x = b[0] - a[0],
	        y = b[1] - a[1];
	    return Math.sqrt(x * x + y * y);
	};

	/**
	 * Calculates the squared euclidian distance between two vec2's
	 * @static
	 * @method squaredDistance
	 * @param {Array} a the first operand
	 * @param {Array} b the second operand
	 * @return {Number} squared distance between a and b
	 */
	vec2.squaredDistance = function (a, b) {
	    var x = b[0] - a[0],
	        y = b[1] - a[1];
	    return x * x + y * y;
	};

	/**
	 * Calculates the length of a vec2
	 * @static
	 * @method length
	 * @param {Array} a vector to calculate length of
	 * @return {Number} length of a
	 */
	vec2.length = function (a) {
	    var x = a[0],
	        y = a[1];
	    return Math.sqrt(x * x + y * y);
	};

	/**
	 * Calculates the squared length of a vec2
	 * @static
	 * @method squaredLength
	 * @param {Array} a vector to calculate squared length of
	 * @return {Number} squared length of a
	 */
	vec2.squaredLength = function (a) {
	    var x = a[0],
	        y = a[1];
	    return x * x + y * y;
	};

	/**
	 * Negates the components of a vec2
	 * @static
	 * @method negate
	 * @param {Array} out the receiving vector
	 * @param {Array} a vector to negate
	 * @return {Array} out
	 */
	vec2.negate = function (out, a) {
	    out[0] = -a[0];
	    out[1] = -a[1];
	    return out;
	};

	/**
	 * Normalize a vec2
	 * @static
	 * @method normalize
	 * @param {Array} out the receiving vector
	 * @param {Array} a vector to normalize
	 * @return {Array} out
	 */
	vec2.normalize = function (out, a) {
	    var x = a[0],
	        y = a[1];
	    var len = x * x + y * y;
	    if (len > 0) {
	        //TODO: evaluate use of glm_invsqrt here?
	        len = 1 / Math.sqrt(len);
	        out[0] = a[0] * len;
	        out[1] = a[1] * len;
	    }
	    return out;
	};

	/**
	 * Calculates the dot product of two vec2's
	 * @static
	 * @method dot
	 * @param {Array} a the first operand
	 * @param {Array} b the second operand
	 * @return {Number} dot product of a and b
	 */
	vec2.dot = function (a, b) {
	    return a[0] * b[0] + a[1] * b[1];
	};

	/**
	 * Returns a string representation of a vector
	 * @static
	 * @method str
	 * @param {Array} vec vector to represent as a string
	 * @return {String} string representation of the vector
	 */
	vec2.str = function (a) {
	    return 'vec2(' + a[0] + ', ' + a[1] + ')';
	};

	/**
	 * Linearly interpolate/mix two vectors.
	 * @static
	 * @method lerp
	 * @param {Array} out
	 * @param {Array} a First vector
	 * @param {Array} b Second vector
	 * @param {number} t Lerp factor
	 */
	vec2.lerp = function (out, a, b, t) {
	    var ax = a[0],
	        ay = a[1];
	    out[0] = ax + t * (b[0] - ax);
	    out[1] = ay + t * (b[1] - ay);
	    return out;
	};

	/**
	 * Reflect a vector along a normal.
	 * @static
	 * @method reflect
	 * @param {Array} out
	 * @param {Array} vector
	 * @param {Array} normal
	 */
	vec2.reflect = function (out, vector, normal) {
	    var dot = vector[0] * normal[0] + vector[1] * normal[1];
	    out[0] = vector[0] - 2 * normal[0] * dot;
	    out[1] = vector[1] - 2 * normal[1] * dot;
	};

	/**
	 * Get the intersection point between two line segments.
	 * @static
	 * @method getLineSegmentsIntersection
	 * @param  {Array} out
	 * @param  {Array} p0
	 * @param  {Array} p1
	 * @param  {Array} p2
	 * @param  {Array} p3
	 * @return {boolean} True if there was an intersection, otherwise false.
	 */
	vec2.getLineSegmentsIntersection = function (out, p0, p1, p2, p3) {
	    var t = vec2.getLineSegmentsIntersectionFraction(p0, p1, p2, p3);
	    if (t < 0) {
	        return false;
	    } else {
	        out[0] = p0[0] + t * (p1[0] - p0[0]);
	        out[1] = p0[1] + t * (p1[1] - p0[1]);
	        return true;
	    }
	};

	/**
	 * Get the intersection fraction between two line segments. If successful, the intersection is at p0 + t * (p1 - p0)
	 * @static
	 * @method getLineSegmentsIntersectionFraction
	 * @param  {Array} p0
	 * @param  {Array} p1
	 * @param  {Array} p2
	 * @param  {Array} p3
	 * @return {number} A number between 0 and 1 if there was an intersection, otherwise -1.
	 */
	vec2.getLineSegmentsIntersectionFraction = function (p0, p1, p2, p3) {
	    var s1_x = p1[0] - p0[0];
	    var s1_y = p1[1] - p0[1];
	    var s2_x = p3[0] - p2[0];
	    var s2_y = p3[1] - p2[1];

	    var s, t;
	    s = (-s1_y * (p0[0] - p2[0]) + s1_x * (p0[1] - p2[1])) / (-s2_x * s1_y + s1_x * s2_y);
	    t = (s2_x * (p0[1] - p2[1]) - s2_y * (p0[0] - p2[0])) / (-s2_x * s1_y + s1_x * s2_y);
	    if (s >= 0 && s <= 1 && t >= 0 && t <= 1) {
	        // Collision detected
	        return t;
	    }
	    return -1; // No collision
	};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';

	/* global P2_ARRAY_TYPE */

	module.exports = Utils;

	/**
	 * Misc utility functions
	 * @class Utils
	 * @constructor
	 */
	function Utils() {}

	/**
	 * Append the values in array b to the array a. See <a href="http://stackoverflow.com/questions/1374126/how-to-append-an-array-to-an-existing-javascript-array/1374131#1374131">this</a> for an explanation.
	 * @method appendArray
	 * @static
	 * @param  {Array} a
	 * @param  {Array} b
	 */
	Utils.appendArray = function (a, b) {
	  if (b.length < 150000) {
	    a.push.apply(a, b);
	  } else {
	    for (var i = 0, len = b.length; i !== len; ++i) {
	      a.push(b[i]);
	    }
	  }
	};

	/**
	 * Garbage free Array.splice(). Does not allocate a new array.
	 * @method splice
	 * @static
	 * @param  {Array} array
	 * @param  {Number} index
	 * @param  {Number} howmany
	 */
	Utils.splice = function (array, index, howmany) {
	  howmany = howmany || 1;
	  for (var i = index, len = array.length - howmany; i < len; i++) {
	    array[i] = array[i + howmany];
	  }
	  array.length = len;
	};

	/**
	 * Remove an element from an array, if the array contains the element.
	 * @method arrayRemove
	 * @static
	 * @param  {Array} array
	 * @param  {Number} element
	 */
	Utils.arrayRemove = function (array, element) {
	  var idx = array.indexOf(element);
	  if (idx !== -1) {
	    Utils.splice(array, idx, 1);
	  }
	};

	/**
	 * The array type to use for internal numeric computations throughout the library. Float32Array is used if it is available, but falls back on Array. If you want to set array type manually, inject it via the global variable P2_ARRAY_TYPE. See example below.
	 * @static
	 * @property {function} ARRAY_TYPE
	 * @example
	 *     <script>
	 *         <!-- Inject your preferred array type before loading p2.js -->
	 *         P2_ARRAY_TYPE = Array;
	 *     </script>
	 *     <script src="p2.js"></script>
	 */
	if (typeof P2_ARRAY_TYPE !== 'undefined') {
	  Utils.ARRAY_TYPE = P2_ARRAY_TYPE;
	} else if (typeof Float32Array !== 'undefined') {
	  Utils.ARRAY_TYPE = Float32Array;
	} else {
	  Utils.ARRAY_TYPE = Array;
	}

	/**
	 * Extend an object with the properties of another
	 * @static
	 * @method extend
	 * @param  {object} a
	 * @param  {object} b
	 */
	Utils.extend = function (a, b) {
	  for (var key in b) {
	    a[key] = b[key];
	  }
	};

	/**
	 * Shallow clone an object. Returns a new object instance with the same properties as the input instance.
	 * @static
	 * @method shallowClone
	 * @param  {object} obj
	 */
	Utils.shallowClone = function (obj) {
	  var newObj = {};
	  Utils.extend(newObj, obj);
	  return newObj;
	};

	/**
	 * Extend an options object with default values.
	 * @deprecated Not used internally, will be removed.
	 * @static
	 * @method defaults
	 * @param  {object} options The options object. May be falsy: in this case, a new object is created and returned.
	 * @param  {object} defaults An object containing default values.
	 * @return {object} The modified options object.
	 */
	Utils.defaults = function (options, defaults) {
	  console.warn('Utils.defaults is deprecated.');
	  options = options || {};
	  for (var key in defaults) {
	    if (!(key in options)) {
	      options[key] = defaults[key];
	    }
	  }
	  return options;
	};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var Equation = __webpack_require__(14);

	module.exports = AngleLockEquation;

	/**
	 * Locks the relative angle between two bodies. The constraint tries to keep the dot product between two vectors, local in each body, to zero. The local angle in body i is a parameter.
	 *
	 * @class AngleLockEquation
	 * @constructor
	 * @extends Equation
	 * @param {Body} bodyA
	 * @param {Body} bodyB
	 * @param {Object} [options]
	 * @param {Number} [options.angle] Angle to add to the local vector in body A.
	 * @param {Number} [options.ratio] Gear ratio
	 */
	function AngleLockEquation(bodyA, bodyB, options) {
	  options = options || {};
	  Equation.call(this, bodyA, bodyB, -Number.MAX_VALUE, Number.MAX_VALUE);
	  this.angle = options.angle || 0;

	  /**
	   * The gear ratio.
	   * @property {Number} ratio
	   * @readonly
	   * @see setRatio
	   */
	  this.ratio = options.ratio !== undefined ? options.ratio : 1;

	  this.setRatio(this.ratio);
	}
	AngleLockEquation.prototype = new Equation();
	AngleLockEquation.prototype.constructor = AngleLockEquation;

	AngleLockEquation.prototype.computeGq = function () {
	  return this.ratio * this.bodyA.angle - this.bodyB.angle + this.angle;
	};

	/**
	 * Set the gear ratio for this equation
	 * @method setRatio
	 * @param {Number} ratio
	 */
	AngleLockEquation.prototype.setRatio = function (ratio) {
	  var G = this.G;
	  G[2] = ratio;
	  G[5] = -1;
	  this.ratio = ratio;
	};

	/**
	 * Set the max force for the equation.
	 * @method setMaxTorque
	 * @param {Number} torque
	 */
	AngleLockEquation.prototype.setMaxTorque = function (torque) {
	  this.maxForce = torque;
	  this.minForce = -torque;
	};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = Equation;

	var vec2 = __webpack_require__(11),
	    scale = vec2.scale,
	    multiply = vec2.multiply,
	    createVec2 = vec2.create,
	    Utils = __webpack_require__(12);

	/**
	 * Base class for constraint equations.
	 * @class Equation
	 * @constructor
	 * @param {Body} bodyA First body participating in the equation
	 * @param {Body} bodyB Second body participating in the equation
	 * @param {number} minForce Minimum force to apply. Default: -Number.MAX_VALUE
	 * @param {number} maxForce Maximum force to apply. Default: Number.MAX_VALUE
	 */
	function Equation(bodyA, bodyB, minForce, maxForce) {
	  /**
	   * Minimum force to apply when solving.
	   * @property minForce
	   * @type {Number}
	   */
	  this.minForce = minForce === undefined ? -Number.MAX_VALUE : minForce;

	  /**
	   * Max force to apply when solving.
	   * @property maxForce
	   * @type {Number}
	   */
	  this.maxForce = maxForce === undefined ? Number.MAX_VALUE : maxForce;

	  /**
	   * Cap the constraint violation (G*q) to this value.
	   * @property maxBias
	   * @type {Number}
	   */
	  this.maxBias = Number.MAX_VALUE;

	  /**
	   * First body participating in the constraint
	   * @property bodyA
	   * @type {Body}
	   */
	  this.bodyA = bodyA;

	  /**
	   * Second body participating in the constraint
	   * @property bodyB
	   * @type {Body}
	   */
	  this.bodyB = bodyB;

	  /**
	   * The stiffness of this equation. Typically chosen to a large number (~1e7), but can be chosen somewhat freely to get a stable simulation.
	   * @property stiffness
	   * @type {Number}
	   */
	  this.stiffness = Equation.DEFAULT_STIFFNESS;

	  /**
	   * The number of time steps needed to stabilize the constraint equation. Typically between 3 and 5 time steps.
	   * @property relaxation
	   * @type {Number}
	   */
	  this.relaxation = Equation.DEFAULT_RELAXATION;

	  /**
	   * The Jacobian entry of this equation. 6 numbers, 3 per body (x,y,angle).
	   * @property G
	   * @type {Array}
	   */
	  this.G = new Utils.ARRAY_TYPE(6);
	  for (var i = 0; i < 6; i++) {
	    this.G[i] = 0;
	  }

	  this.offset = 0;

	  this.a = 0;
	  this.b = 0;
	  this.epsilon = 0;
	  this.timeStep = 1 / 60;

	  /**
	   * Indicates if stiffness or relaxation was changed.
	   * @property {Boolean} needsUpdate
	   */
	  this.needsUpdate = true;

	  /**
	   * The resulting constraint multiplier from the last solve. This is mostly equivalent to the force produced by the constraint.
	   * @property multiplier
	   * @type {Number}
	   */
	  this.multiplier = 0;

	  /**
	   * Relative velocity.
	   * @property {Number} relativeVelocity
	   */
	  this.relativeVelocity = 0;

	  /**
	   * Whether this equation is enabled or not. If true, it will be added to the solver.
	   * @property {Boolean} enabled
	   */
	  this.enabled = true;

	  // Temp stuff
	  this.lambda = this.B = this.invC = this.minForceDt = this.maxForceDt = 0;
	  this.index = -1;
	}

	/**
	 * The default stiffness when creating a new Equation.
	 * @static
	 * @property {Number} DEFAULT_STIFFNESS
	 * @default 1e6
	 */
	Equation.DEFAULT_STIFFNESS = 1e6;

	/**
	 * The default relaxation when creating a new Equation.
	 * @static
	 * @property {Number} DEFAULT_RELAXATION
	 * @default 4
	 */
	Equation.DEFAULT_RELAXATION = 4;

	var qi = createVec2(),
	    qj = createVec2(),
	    iMfi = createVec2(),
	    iMfj = createVec2();

	Equation.prototype = {

	  /**
	   * Compute SPOOK parameters .a, .b and .epsilon according to the current parameters. See equations 9, 10 and 11 in the <a href="http://www8.cs.umu.se/kurser/5DV058/VT09/lectures/spooknotes.pdf">SPOOK notes</a>.
	   * @method update
	   */
	  update: function update() {
	    var k = this.stiffness,
	        d = this.relaxation,
	        h = this.timeStep;

	    this.a = 4 / (h * (1 + 4 * d));
	    this.b = 4 * d / (1 + 4 * d);
	    this.epsilon = 4 / (h * h * k * (1 + 4 * d));

	    this.needsUpdate = false;
	  },

	  /**
	   * Multiply a jacobian entry with corresponding positions or velocities
	   * @method gmult
	   * @return {Number}
	   */
	  gmult: function gmult(G, vi, wi, vj, wj) {
	    return G[0] * vi[0] + G[1] * vi[1] + G[2] * wi + G[3] * vj[0] + G[4] * vj[1] + G[5] * wj;
	  },

	  /**
	   * Computes the RHS of the SPOOK equation
	   * @method computeB
	   * @return {Number}
	   */
	  computeB: function computeB(a, b, h) {
	    var GW = this.computeGW();
	    var Gq = this.computeGq();
	    var maxBias = this.maxBias;
	    if (Math.abs(Gq) > maxBias) {
	      Gq = Gq > 0 ? maxBias : -maxBias;
	    }
	    var GiMf = this.computeGiMf();
	    var B = -Gq * a - GW * b - GiMf * h;
	    return B;
	  },

	  /**
	   * Computes G\*q, where q are the generalized body coordinates
	   * @method computeGq
	   * @return {Number}
	   */
	  computeGq: function computeGq() {
	    var G = this.G,
	        bi = this.bodyA,
	        bj = this.bodyB,
	        ai = bi.angle,
	        aj = bj.angle;

	    return this.gmult(G, qi, ai, qj, aj) + this.offset;
	  },

	  /**
	   * Computes G\*W, where W are the body velocities
	   * @method computeGW
	   * @return {Number}
	   */
	  computeGW: function computeGW() {
	    var G = this.G,
	        bi = this.bodyA,
	        bj = this.bodyB,
	        vi = bi.velocity,
	        vj = bj.velocity,
	        wi = bi.angularVelocity,
	        wj = bj.angularVelocity;
	    return this.gmult(G, vi, wi, vj, wj) + this.relativeVelocity;
	  },

	  /**
	   * Computes G\*Wlambda, where W are the body velocities
	   * @method computeGWlambda
	   * @return {Number}
	   */
	  computeGWlambda: function computeGWlambda() {
	    var G = this.G,
	        bi = this.bodyA,
	        bj = this.bodyB,
	        vi = bi.vlambda,
	        vj = bj.vlambda,
	        wi = bi.wlambda,
	        wj = bj.wlambda;
	    return this.gmult(G, vi, wi, vj, wj);
	  },

	  /**
	   * Computes G\*inv(M)\*f, where M is the mass matrix with diagonal blocks for each body, and f are the forces on the bodies.
	   * @method computeGiMf
	   * @return {Number}
	   */
	  computeGiMf: function computeGiMf() {
	    var bi = this.bodyA,
	        bj = this.bodyB,
	        fi = bi.force,
	        ti = bi.angularForce,
	        fj = bj.force,
	        tj = bj.angularForce,
	        invMassi = bi.invMassSolve,
	        invMassj = bj.invMassSolve,
	        invIi = bi.invInertiaSolve,
	        invIj = bj.invInertiaSolve,
	        G = this.G;

	    scale(iMfi, fi, invMassi);
	    multiply(iMfi, bi.massMultiplier, iMfi);
	    scale(iMfj, fj, invMassj);
	    multiply(iMfj, bj.massMultiplier, iMfj);

	    return this.gmult(G, iMfi, ti * invIi, iMfj, tj * invIj);
	  },

	  /**
	   * Computes G\*inv(M)\*G'
	   * @method computeGiMGt
	   * @return {Number}
	   */
	  computeGiMGt: function computeGiMGt() {
	    var bi = this.bodyA,
	        bj = this.bodyB,
	        invMassi = bi.invMassSolve,
	        invMassj = bj.invMassSolve,
	        invIi = bi.invInertiaSolve,
	        invIj = bj.invInertiaSolve,
	        G = this.G;

	    return G[0] * G[0] * invMassi * bi.massMultiplier[0] + G[1] * G[1] * invMassi * bi.massMultiplier[1] + G[2] * G[2] * invIi + G[3] * G[3] * invMassj * bj.massMultiplier[0] + G[4] * G[4] * invMassj * bj.massMultiplier[1] + G[5] * G[5] * invIj;
	  },

	  /**
	   * Add constraint velocity to the bodies.
	   * @method addToWlambda
	   * @param {Number} deltalambda
	   */
	  addToWlambda: function addToWlambda(deltalambda) {
	    var bi = this.bodyA,
	        bj = this.bodyB,
	        invMassi = bi.invMassSolve,
	        invMassj = bj.invMassSolve,
	        invIi = bi.invInertiaSolve,
	        invIj = bj.invInertiaSolve,
	        G = this.G;

	    // v_lambda = G * inv(M) * delta_lambda

	    addToVLambda(bi.vlambda, G[0], G[1], invMassi, deltalambda, bi.massMultiplier);
	    bi.wlambda += invIi * G[2] * deltalambda;

	    addToVLambda(bj.vlambda, G[3], G[4], invMassj, deltalambda, bj.massMultiplier);
	    bj.wlambda += invIj * G[5] * deltalambda;
	  },

	  /**
	   * Compute the denominator part of the SPOOK equation: C = G\*inv(M)\*G' + eps
	   * @method computeInvC
	   * @param  {Number} eps
	   * @return {Number}
	   */
	  computeInvC: function computeInvC(eps) {
	    var invC = 1 / (this.computeGiMGt() + eps);
	    return invC;
	  }
	};

	function addToVLambda(vlambda, Gx, Gy, invMass, deltalambda, massMultiplier) {
	  vlambda[0] += Gx * invMass * deltalambda * massMultiplier[0];
	  vlambda[1] += Gy * invMass * deltalambda * massMultiplier[1];
	}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var vec2 = __webpack_require__(11),
	    add = vec2.add,
	    sub = vec2.subtract,
	    vec2create = vec2.create,
	    decomp = __webpack_require__(16),
	    Convex = __webpack_require__(21),
	    RaycastResult = __webpack_require__(24),
	    Ray = __webpack_require__(25),
	    AABB = __webpack_require__(10),
	    EventEmitter = __webpack_require__(26);

	module.exports = Body;

	/**
	 * A rigid body. Has got a center of mass, position, velocity and a number of
	 * shapes that are used for collisions.
	 *
	 * @class Body
	 * @constructor
	 * @extends EventEmitter
	 * @param {Object} [options]
	 * @param {Boolean} [options.allowSleep=true]
	 * @param {Number} [options.angle=0]
	 * @param {Number} [options.angularDamping=0.1]
	 * @param {Number} [options.angularForce=0]
	 * @param {Number} [options.angularVelocity=0]
	 * @param {Number} [options.ccdIterations=10]
	 * @param {Number} [options.ccdSpeedThreshold=-1]
	 * @param {Boolean} [options.collisionResponse]
	 * @param {Number} [options.damping=0.1]
	 * @param {Boolean} [options.fixedRotation=false]
	 * @param {Boolean} [options.fixedX=false]
	 * @param {Boolean} [options.fixedY=false]
	 * @param {Array} [options.force]
	 * @param {Number} [options.gravityScale=1]
	 * @param {Number} [options.mass=0] A number >= 0. If zero, the .type will be set to Body.STATIC.
	 * @param {Array} [options.position]
	 * @param {Number} [options.sleepSpeedLimit]
	 * @param {Number} [options.sleepTimeLimit]
	 * @param {Number} [options.type] See {{#crossLink "Body/type:property"}}{{/crossLink}}
	 * @param {Array} [options.velocity]
	 *
	 * @example
	 *
	 *     // Create a typical dynamic body
	 *     var body = new Body({
	 *         mass: 1, // non-zero mass will set type to Body.DYNAMIC
	 *         position: [0, 5],
	 *         angle: 0,
	 *         velocity: [0, 0],
	 *         angularVelocity: 0
	 *     });
	 *
	 *     // Add a circular shape to the body
	 *     var circleShape = new Circle({ radius: 0.5 });
	 *     body.addShape(circleShape);
	 *
	 *     // Add the body to the world
	 *     world.addBody(body);
	 *
	 * @example
	 *
	 *     // Create a static plane body
	 *     var planeBody = new Body({
	 *         mass: 0, // zero mass will set type to Body.STATIC
	 *         position: [0, 0]
	 *     });
	 *     var planeShape = new Plane();
	 *     planeBody.addShape(planeShape);
	 *     world.addBody(planeBody);
	 *
	 * @example
	 *
	 *     // Create a moving kinematic box body
	 *     var platformBody = new Body({
	 *         type: Body.KINEMATIC,
	 *         position: [0, 3],
	 *         velocity: [1, 0]
	 *     });
	 *     var boxShape = new Box({ width: 2, height: 0.5 });
	 *     platformBody.addShape(boxShape);
	 *     world.addBody(platformBody);
	 */
	function Body(options) {
	    options = options || {};

	    EventEmitter.call(this);

	    /**
	     * The body identifier. Read only!
	     * @readonly
	     * @property id
	     * @type {Number}
	     */
	    this.id = options.id || ++Body._idCounter;

	    /**
	     * Index of the body in the World .bodies array. Is set to -1 if the body isn't added to a World.
	     * @readonly
	     * @property index
	     * @type {Number}
	     */
	    this.index = -1;

	    /**
	     * The world that this body is added to (read only). This property is set to NULL if the body is not added to any world.
	     * @readonly
	     * @property world
	     * @type {World}
	     */
	    this.world = null;

	    /**
	     * The shapes of the body.
	     *
	     * @property shapes
	     * @type {Array}
	     */
	    this.shapes = [];

	    /**
	     * The mass of the body. If you change this number, you should call {{#crossLink "Body/updateMassProperties:method"}}{{/crossLink}}.
	     *
	     * @property mass
	     * @type {number}
	     *
	     * @example
	     *     body.mass = 1;
	     *     body.updateMassProperties();
	     */
	    this.mass = options.mass || 0;

	    /**
	     * The inverse mass of the body.
	     *
	     * @readonly
	     * @property invMass
	     * @type {number}
	     */
	    this.invMass = 0;

	    /**
	     * The inertia of the body around the Z axis.
	     * @readonly
	     * @property inertia
	     * @type {number}
	     */
	    this.inertia = 0;

	    /**
	     * The inverse inertia of the body.
	     * @readonly
	     * @property invInertia
	     * @type {number}
	     */
	    this.invInertia = 0;

	    this.invMassSolve = 0;
	    this.invInertiaSolve = 0;

	    /**
	     * Set to true if you want to fix the rotation of the body.
	     *
	     * @property fixedRotation
	     * @type {Boolean}
	     *
	     * @example
	     *     // Fix rotation during runtime
	     *     body.fixedRotation = true;
	     *     body.updateMassProperties();
	     */
	    this.fixedRotation = !!options.fixedRotation;

	    /**
	     * Set to true if you want to fix the body movement along the X axis. The body will still be able to move along Y.
	     * @property {Boolean} fixedX
	     *
	     * @example
	     *     // Fix X movement on body creation
	     *     var body = new Body({ mass: 1, fixedX: true });
	     *
	     * @example
	     *     // Fix X movement during runtime
	     *     body.fixedX = true;
	     *     body.updateMassProperties();
	     */
	    this.fixedX = !!options.fixedX;

	    /**
	     * Set to true if you want to fix the body movement along the Y axis. The body will still be able to move along X. See .fixedX
	     * @property {Boolean} fixedY
	     */
	    this.fixedY = !!options.fixedY;

	    /**
	     * @private
	     * @property {array} massMultiplier
	     */
	    this.massMultiplier = vec2create();

	    /**
	     * The position of the body in the world. Don't use this for rendering, instead use .interpolatedPosition
	     * @property position
	     * @type {Array}
	     */
	    this.position = options.position ? vec2.clone(options.position) : vec2create();

	    /**
	     * The interpolated position of the body. Use this for rendering.
	     * @readonly
	     * @property interpolatedPosition
	     * @type {Array}
	     */
	    this.interpolatedPosition = vec2.clone(this.position);

	    /**
	     * The previous position of the body.
	     * @property previousPosition
	     * @type {Array}
	     */
	    this.previousPosition = vec2.clone(this.position);

	    /**
	     * The current velocity of the body.
	     * @property velocity
	     * @type {Array}
	     */
	    this.velocity = options.velocity ? vec2.clone(options.velocity) : vec2create();

	    /**
	     * Constraint velocity that was added to the body during the last step.
	     * @readonly
	     * @property vlambda
	     * @type {Array}
	     */
	    this.vlambda = vec2create();

	    /**
	     * Angular constraint velocity that was added to the body during last step.
	     * @readonly
	     * @property wlambda
	     * @type {Array}
	     */
	    this.wlambda = 0;

	    /**
	     * The angle of the body, in radians.
	     * @property angle
	     * @type {number}
	     * @example
	     *     // The angle property is not normalized to the interval 0 to 2*pi, it can be any value.
	     *     // If you need a value between 0 and 2*pi, use the following function to normalize it.
	     *     function normalizeAngle(angle){
	     *         angle = angle % (2*Math.PI);
	     *         if(angle < 0){
	     *             angle += (2*Math.PI);
	     *         }
	     *         return angle;
	     *     }
	     */
	    this.angle = options.angle || 0;

	    /**
	     * The previous angle of the body.
	     * @readonly
	     * @property previousAngle
	     * @type {Number}
	     */
	    this.previousAngle = this.angle;

	    /**
	     * The interpolated angle of the body. Use this for rendering.
	     * @readonly
	     * @property interpolatedAngle
	     * @type {Number}
	     */
	    this.interpolatedAngle = this.angle;

	    /**
	     * The angular velocity of the body, in radians per second.
	     * @property angularVelocity
	     * @type {number}
	     */
	    this.angularVelocity = options.angularVelocity || 0;

	    /**
	     * The force acting on the body. Since the body force (and {{#crossLink "Body/angularForce:property"}}{{/crossLink}}) will be zeroed after each step, so you need to set the force before each step.
	     * @property force
	     * @type {Array}
	     *
	     * @example
	     *     // This produces a forcefield of 1 Newton in the positive x direction.
	     *     for(var i=0; i<numSteps; i++){
	     *         body.force[0] = 1;
	     *         world.step(1/60);
	     *     }
	     *
	     * @example
	     *     // This will apply a rotational force on the body
	     *     for(var i=0; i<numSteps; i++){
	     *         body.angularForce = -3;
	     *         world.step(1/60);
	     *     }
	     */
	    this.force = options.force ? vec2.clone(options.force) : vec2create();

	    /**
	     * The angular force acting on the body. See {{#crossLink "Body/force:property"}}{{/crossLink}}.
	     * @property angularForce
	     * @type {number}
	     */
	    this.angularForce = options.angularForce || 0;

	    /**
	     * The linear damping acting on the body in the velocity direction. Should be a value between 0 and 1.
	     * @property damping
	     * @type {Number}
	     * @default 0.1
	     */
	    this.damping = options.damping !== undefined ? options.damping : 0.1;

	    /**
	     * The angular force acting on the body. Should be a value between 0 and 1.
	     * @property angularDamping
	     * @type {Number}
	     * @default 0.1
	     */
	    this.angularDamping = options.angularDamping !== undefined ? options.angularDamping : 0.1;

	    /**
	     * The type of motion this body has. Should be one of: {{#crossLink "Body/STATIC:property"}}Body.STATIC{{/crossLink}}, {{#crossLink "Body/DYNAMIC:property"}}Body.DYNAMIC{{/crossLink}} and {{#crossLink "Body/KINEMATIC:property"}}Body.KINEMATIC{{/crossLink}}.
	     *
	     * * Static bodies do not move, and they do not respond to forces or collision.
	     * * Dynamic bodies body can move and respond to collisions and forces.
	     * * Kinematic bodies only moves according to its .velocity, and does not respond to collisions or force.
	     *
	     * @property type
	     * @type {number}
	     *
	     * @example
	     *     // Bodies are static by default. Static bodies will never move.
	     *     var body = new Body();
	     *     console.log(body.type == Body.STATIC); // true
	     *
	     * @example
	     *     // By setting the mass of a body to a nonzero number, the body
	     *     // will become dynamic and will move and interact with other bodies.
	     *     var dynamicBody = new Body({
	     *         mass : 1
	     *     });
	     *     console.log(dynamicBody.type == Body.DYNAMIC); // true
	     *
	     * @example
	     *     // Kinematic bodies will only move if you change their velocity.
	     *     var kinematicBody = new Body({
	     *         type: Body.KINEMATIC // Type can be set via the options object.
	     *     });
	     */
	    this.type = Body.STATIC;

	    if (options.type !== undefined) {
	        this.type = options.type;
	    } else if (!options.mass) {
	        this.type = Body.STATIC;
	    } else {
	        this.type = Body.DYNAMIC;
	    }

	    /**
	     * Bounding circle radius. Update with {{#crossLink "Body/updateBoundingRadius:method"}}{{/crossLink}}.
	     * @readonly
	     * @property boundingRadius
	     * @type {Number}
	     */
	    this.boundingRadius = 0;

	    /**
	     * Bounding box of this body. Update with {{#crossLink "Body/updateAABB:method"}}{{/crossLink}}.
	     * @property aabb
	     * @type {AABB}
	     */
	    this.aabb = new AABB();

	    /**
	     * Indicates if the AABB needs update. Update it with {{#crossLink "Body/updateAABB:method"}}{{/crossLink}}.
	     * @property aabbNeedsUpdate
	     * @type {Boolean}
	     * @see updateAABB
	     *
	     * @example
	     *     // Force update the AABB
	     *     body.aabbNeedsUpdate = true;
	     *     body.updateAABB();
	     *     console.log(body.aabbNeedsUpdate); // false
	     */
	    this.aabbNeedsUpdate = true;

	    /**
	     * If true, the body will automatically fall to sleep. Note that you need to enable sleeping in the {{#crossLink "World"}}{{/crossLink}} before anything will happen.
	     * @property allowSleep
	     * @type {Boolean}
	     * @default true
	     */
	    this.allowSleep = options.allowSleep !== undefined ? options.allowSleep : true;

	    this.wantsToSleep = false;

	    /**
	     * One of {{#crossLink "Body/AWAKE:property"}}Body.AWAKE{{/crossLink}}, {{#crossLink "Body/SLEEPY:property"}}Body.SLEEPY{{/crossLink}} and {{#crossLink "Body/SLEEPING:property"}}Body.SLEEPING{{/crossLink}}.
	     *
	     * The body is initially Body.AWAKE. If its velocity norm is below .sleepSpeedLimit, the sleepState will become Body.SLEEPY. If the body continues to be Body.SLEEPY for .sleepTimeLimit seconds, it will fall asleep (Body.SLEEPY).
	     *
	     * @property sleepState
	     * @type {Number}
	     * @default Body.AWAKE
	     */
	    this.sleepState = Body.AWAKE;

	    /**
	     * If the speed (the norm of the velocity) is smaller than this value, the body is considered sleepy.
	     * @property sleepSpeedLimit
	     * @type {Number}
	     * @default 0.2
	     */
	    this.sleepSpeedLimit = options.sleepSpeedLimit !== undefined ? options.sleepSpeedLimit : 0.2;

	    /**
	     * If the body has been sleepy for this sleepTimeLimit seconds, it is considered sleeping.
	     * @property sleepTimeLimit
	     * @type {Number}
	     * @default 1
	     */
	    this.sleepTimeLimit = options.sleepTimeLimit !== undefined ? options.sleepTimeLimit : 1;

	    /**
	     * Gravity scaling factor. If you want the body to ignore gravity, set this to zero. If you want to reverse gravity, set it to -1.
	     * @property {Number} gravityScale
	     * @default 1
	     */
	    this.gravityScale = options.gravityScale !== undefined ? options.gravityScale : 1;

	    /**
	     * Whether to produce contact forces when in contact with other bodies. Note that contacts will be generated, but they will be disabled. That means that this body will move through other bodies, but it will still trigger contact events, etc.
	     * @property {Boolean} collisionResponse
	     */
	    this.collisionResponse = options.collisionResponse !== undefined ? options.collisionResponse : true;

	    /**
	     * How long the body has been sleeping.
	     * @readonly
	     * @property {Number} idleTime
	     */
	    this.idleTime = 0;

	    /**
	     * The last time when the body went to SLEEPY state.
	     * @readonly
	     * @property {Number} timeLastSleepy
	     * @private
	     */
	    this.timeLastSleepy = 0;

	    /**
	     * If the body speed exceeds this threshold, CCD (continuous collision detection) will be enabled. Set it to a negative number to disable CCD completely for this body.
	     * @property {number} ccdSpeedThreshold
	     * @default -1
	     */
	    this.ccdSpeedThreshold = options.ccdSpeedThreshold !== undefined ? options.ccdSpeedThreshold : -1;

	    /**
	     * The number of iterations that should be used when searching for the time of impact during CCD. A larger number will assure that there's a small penetration on CCD collision, but a small number will give more performance.
	     * @property {number} ccdIterations
	     * @default 10
	     */
	    this.ccdIterations = options.ccdIterations !== undefined ? options.ccdIterations : 10;

	    /**
	     * @property {number} islandId
	     */
	    this.islandId = -1;

	    this.concavePath = null;

	    this._wakeUpAfterNarrowphase = false;

	    this.updateMassProperties();
	}
	Body.prototype = new EventEmitter();
	Body.prototype.constructor = Body;

	Body._idCounter = 0;

	/**
	 * @event sleepy
	 */
	var sleepyEvent = {
	    type: "sleepy"
	};

	/**
	 * @event sleep
	 */
	var sleepEvent = {
	    type: "sleep"
	};

	/**
	 * @event wakeup
	 */
	var wakeUpEvent = {
	    type: "wakeup"
	};

	/**
	 * @private
	 * @method updateSolveMassProperties
	 */
	Body.prototype.updateSolveMassProperties = function () {
	    if (this.sleepState === Body.SLEEPING || this.type === Body.KINEMATIC) {
	        this.invMassSolve = 0;
	        this.invInertiaSolve = 0;
	    } else {
	        this.invMassSolve = this.invMass;
	        this.invInertiaSolve = this.invInertia;
	    }
	};

	/**
	 * Set the total density of the body
	 * @method setDensity
	 * @param {number} density
	 */
	Body.prototype.setDensity = function (density) {
	    var totalArea = this.getArea();
	    this.mass = totalArea * density;
	    this.updateMassProperties();
	};

	/**
	 * Get the total area of all shapes in the body
	 * @method getArea
	 * @return {Number}
	 */
	Body.prototype.getArea = function () {
	    var totalArea = 0;
	    for (var i = 0; i < this.shapes.length; i++) {
	        totalArea += this.shapes[i].area;
	    }
	    return totalArea;
	};

	/**
	 * Get the AABB from the body. The AABB is updated if necessary.
	 * @method getAABB
	 * @return {AABB} The AABB instance from the body.
	 */
	Body.prototype.getAABB = function () {
	    if (this.aabbNeedsUpdate) {
	        this.updateAABB();
	    }
	    return this.aabb;
	};

	var shapeAABB = new AABB(),
	    tmp = vec2create();

	/**
	 * Updates the AABB of the Body, and set .aabbNeedsUpdate = false.
	 * @method updateAABB
	 */
	Body.prototype.updateAABB = function () {
	    var shapes = this.shapes,
	        N = shapes.length,
	        offset = tmp,
	        bodyAngle = this.angle;

	    for (var i = 0; i !== N; i++) {
	        var shape = shapes[i],
	            angle = shape.angle + bodyAngle;

	        // Get shape world offset
	        vec2.toGlobalFrame(offset, shape.position, this.position, bodyAngle);

	        // Get shape AABB
	        shape.computeAABB(shapeAABB, offset, angle);

	        if (i === 0) {
	            this.aabb.copy(shapeAABB);
	        } else {
	            this.aabb.extend(shapeAABB);
	        }
	    }

	    this.aabbNeedsUpdate = false;
	};

	/**
	 * Update the bounding radius of the body (this.boundingRadius). Should be done if any of the shape dimensions or positions are changed.
	 * @method updateBoundingRadius
	 */
	Body.prototype.updateBoundingRadius = function () {
	    var shapes = this.shapes,
	        N = shapes.length,
	        radius = 0;

	    for (var i = 0; i !== N; i++) {
	        var shape = shapes[i],
	            offset = vec2.length(shape.position),
	            r = shape.boundingRadius;
	        if (offset + r > radius) {
	            radius = offset + r;
	        }
	    }

	    this.boundingRadius = radius;
	};

	/**
	 * Add a shape to the body. You can pass a local transform when adding a shape,
	 * so that the shape gets an offset and angle relative to the body center of mass.
	 * Will automatically update the mass properties and bounding radius.
	 *
	 * @method addShape
	 * @param  {Shape}              shape
	 * @param  {Array} [offset] Local body offset of the shape.
	 * @param  {Number}             [angle]  Local body angle.
	 *
	 * @example
	 *     var body = new Body(),
	 *         shape = new Circle({ radius: 1 });
	 *
	 *     // Add the shape to the body, positioned in the center
	 *     body.addShape(shape);
	 *
	 *     // Add another shape to the body, positioned 1 unit length from the body center of mass along the local x-axis.
	 *     body.addShape(shape,[1,0]);
	 *
	 *     // Add another shape to the body, positioned 1 unit length from the body center of mass along the local y-axis, and rotated 90 degrees CCW.
	 *     body.addShape(shape,[0,1],Math.PI/2);
	 */
	Body.prototype.addShape = function (shape, offset, angle) {
	    if (shape.body) {
	        throw new Error('A shape can only be added to one body.');
	    }
	    var world = this.world;
	    if (world && world.stepping) {
	        throw new Error('A shape cannot be added during step.');
	    }
	    shape.body = this;

	    // Copy the offset vector
	    if (offset) {
	        vec2.copy(shape.position, offset);
	    } else {
	        vec2.set(shape.position, 0, 0);
	    }

	    shape.angle = angle || 0;

	    this.shapes.push(shape);
	    this.updateMassProperties();
	    this.updateBoundingRadius();

	    this.aabbNeedsUpdate = true;
	};

	/**
	 * Remove a shape.
	 * @method removeShape
	 * @param  {Shape} shape
	 * @return {Boolean} True if the shape was found and removed, else false.
	 */
	Body.prototype.removeShape = function (shape) {
	    var world = this.world;
	    if (world && world.stepping) {
	        throw new Error('A shape cannot be removed during step.');
	    }

	    var idx = this.shapes.indexOf(shape);

	    if (idx !== -1) {
	        this.shapes.splice(idx, 1);
	        this.aabbNeedsUpdate = true;
	        shape.body = null;
	        return true;
	    } else {
	        return false;
	    }
	};

	/**
	 * Updates .inertia, .invMass, .invInertia for this Body. Should be called when changing the structure or mass of the Body.
	 *
	 * @method updateMassProperties
	 *
	 * @example
	 *     body.mass += 1;
	 *     body.updateMassProperties();
	 */
	Body.prototype.updateMassProperties = function () {
	    if (this.type === Body.STATIC || this.type === Body.KINEMATIC) {

	        this.mass = Number.MAX_VALUE;
	        this.invMass = 0;
	        this.inertia = Number.MAX_VALUE;
	        this.invInertia = 0;
	    } else {

	        var shapes = this.shapes,
	            N = shapes.length,
	            I = 0;

	        if (!this.fixedRotation) {
	            for (var i = 0; i < N; i++) {
	                var shape = shapes[i],
	                    r2 = vec2.squaredLength(shape.position),
	                    Icm = shape.computeMomentOfInertia();
	                I += Icm + r2;
	            }
	            this.inertia = this.mass * I;
	            this.invInertia = I > 0 ? 1 / I : 0;
	        } else {
	            this.inertia = Number.MAX_VALUE;
	            this.invInertia = 0;
	        }

	        // Inverse mass properties are easy
	        this.invMass = 1 / this.mass;

	        vec2.set(this.massMultiplier, this.fixedX ? 0 : 1, this.fixedY ? 0 : 1);
	    }
	};

	/**
	 * Apply force to a point relative to the center of mass of the body. This could for example be a point on the Body surface. Applying force this way will add to Body.force and Body.angularForce.
	 * @method applyForce
	 * @param  {Array} force The force vector to add, oriented in world space.
	 * @param  {Array} [relativePoint] A point relative to the body in world space. If not given, it is set to zero and all of the force will be exerted on the center of mass.
	 * @example
	 *     var body = new Body({ mass: 1 });
	 *     var relativePoint = [1, 0]; // Will apply the force at [body.position[0] + 1, body.position[1]]
	 *     var force = [0, 1]; // up
	 *     body.applyForce(force, relativePoint);
	 *     console.log(body.force); // [0, 1]
	 *     console.log(body.angularForce); // 1
	 */
	Body.prototype.applyForce = function (force, relativePoint) {

	    // Add linear force
	    add(this.force, this.force, force);

	    if (relativePoint) {

	        // Compute produced rotational force
	        var rotForce = vec2.crossLength(relativePoint, force);

	        // Add rotational force
	        this.angularForce += rotForce;
	    }
	};

	/**
	 * Apply force to a point relative to the center of mass of the body. This could for example be a point on the Body surface. Applying force this way will add to Body.force and Body.angularForce.
	 * @method applyForceLocal
	 * @param  {Array} localForce The force vector to add, oriented in local body space.
	 * @param  {Array} [localPoint] A point relative to the body in local body space. If not given, it is set to zero and all of the force will be exerted on the center of mass.
	 * @example
	 *     var body = new Body({ mass: 1 });
	 *     var localPoint = [1, 0]; // x=1 locally in the body
	 *     var localForce = [0, 1]; // up, locally in the body
	 *     body.applyForceLocal(localForce, localPoint);
	 *     console.log(body.force); // [0, 1]
	 *     console.log(body.angularForce); // 1
	 */
	var Body_applyForce_forceWorld = vec2create();
	var Body_applyForce_pointWorld = vec2create();
	var Body_applyForce_pointLocal = vec2create();
	Body.prototype.applyForceLocal = function (localForce, localPoint) {
	    localPoint = localPoint || Body_applyForce_pointLocal;
	    var worldForce = Body_applyForce_forceWorld;
	    var worldPoint = Body_applyForce_pointWorld;
	    this.vectorToWorldFrame(worldForce, localForce);
	    this.vectorToWorldFrame(worldPoint, localPoint);
	    this.applyForce(worldForce, worldPoint);
	};

	/**
	 * Apply impulse to a point relative to the body. This could for example be a point on the Body surface. An impulse is a force added to a body during a short period of time (impulse = force * time). Impulses will be added to Body.velocity and Body.angularVelocity.
	 * @method applyImpulse
	 * @param  {Array} impulseVector The impulse vector to add, oriented in world space.
	 * @param  {Array} [relativePoint] A point relative to the body in world space. If not given, it is set to zero and all of the impulse will be exerted on the center of mass.
	 * @example
	 *     var body = new Body({ mass: 1 });
	 *     var relativePoint = [0, 0]; // center of the body
	 *     var impulseVector = [0, 1]; // world up
	 *     body.applyImpulse(impulseVector, relativePoint);
	 */
	var Body_applyImpulse_velo = vec2create();
	Body.prototype.applyImpulse = function (impulseVector, relativePoint) {
	    if (this.type !== Body.DYNAMIC) {
	        return;
	    }

	    // Compute produced central impulse velocity
	    var velo = Body_applyImpulse_velo;
	    vec2.scale(velo, impulseVector, this.invMass);
	    vec2.multiply(velo, this.massMultiplier, velo);

	    // Add linear impulse
	    add(this.velocity, velo, this.velocity);

	    if (relativePoint) {
	        // Compute produced rotational impulse velocity
	        var rotVelo = vec2.crossLength(relativePoint, impulseVector);
	        rotVelo *= this.invInertia;

	        // Add rotational Impulse
	        this.angularVelocity += rotVelo;
	    }
	};

	/**
	 * Apply impulse to a point relative to the body. This could for example be a point on the Body surface. An impulse is a force added to a body during a short period of time (impulse = force * time). Impulses will be added to Body.velocity and Body.angularVelocity.
	 * @method applyImpulseLocal
	 * @param  {Array} localImpulse The impulse vector to add, oriented in local body space.
	 * @param  {Array} [localPoint] A point relative to the body in local body space. If not given, it is set to zero and all of the impulse will be exerted on the center of mass.
	 * @example
	 *     var body = new Body({ mass: 1 });
	 *     var localPoint = [1, 0]; // x=1, locally in the body
	 *     var localImpulse = [0, 1]; // up, locally in the body
	 *     body.applyImpulseLocal(localImpulse, localPoint);
	 *     console.log(body.velocity); // [1, 0]
	 *     console.log(body.angularVelocity); // 1
	 */
	var Body_applyImpulse_impulseWorld = vec2create();
	var Body_applyImpulse_pointWorld = vec2create();
	var Body_applyImpulse_pointLocal = vec2create();
	Body.prototype.applyImpulseLocal = function (localImpulse, localPoint) {
	    localPoint = localPoint || Body_applyImpulse_pointLocal;
	    var worldImpulse = Body_applyImpulse_impulseWorld;
	    var worldPoint = Body_applyImpulse_pointWorld;
	    this.vectorToWorldFrame(worldImpulse, localImpulse);
	    this.vectorToWorldFrame(worldPoint, localPoint);
	    this.applyImpulse(worldImpulse, worldPoint);
	};

	/**
	 * Transform a world point to local body frame.
	 * @method toLocalFrame
	 * @param  {Array} out          The point to store the result in
	 * @param  {Array} worldPoint   The input world point
	 */
	Body.prototype.toLocalFrame = function (out, worldPoint) {
	    vec2.toLocalFrame(out, worldPoint, this.position, this.angle);
	};

	/**
	 * Transform a local point to world frame.
	 * @method toWorldFrame
	 * @param  {Array} out          The point to store the result in
	 * @param  {Array} localPoint   The input local point
	 */
	Body.prototype.toWorldFrame = function (out, localPoint) {
	    vec2.toGlobalFrame(out, localPoint, this.position, this.angle);
	};

	/**
	 * Transform a world vector to local body frame.
	 * @method vectorToLocalFrame
	 * @param  {Array} out          The vector to store the result in
	 * @param  {Array} worldVector  The input world vector
	 */
	Body.prototype.vectorToLocalFrame = function (out, worldVector) {
	    vec2.vectorToLocalFrame(out, worldVector, this.angle);
	};

	/**
	 * Transform a local vector to world frame.
	 * @method vectorToWorldFrame
	 * @param  {Array} out          The vector to store the result in
	 * @param  {Array} localVector  The input local vector
	 */
	Body.prototype.vectorToWorldFrame = function (out, localVector) {
	    vec2.vectorToGlobalFrame(out, localVector, this.angle);
	};

	/**
	 * Reads a polygon shape path, and assembles convex shapes from that and puts them at proper offset points.
	 * @method fromPolygon
	 * @param {Array} path An array of 2d vectors, e.g. [[0,0],[0,1],...] that resembles a concave or convex polygon. The shape must be simple and without holes.
	 * @param {Object} [options]
	 * @param {Boolean} [options.optimalDecomp=false]   Set to true if you need optimal decomposition. Warning: very slow for polygons with more than 10 vertices.
	 * @param {Boolean} [options.skipSimpleCheck=false] Set to true if you already know that the path is not intersecting itself.
	 * @param {Boolean|Number} [options.removeCollinearPoints=false] Set to a number (angle threshold value) to remove collinear points, or false to keep all points.
	 * @return {Boolean} True on success, else false.
	 * @example
	 *     var body = new Body();
	 *     var path = [
	 *         [-1, 1],
	 *         [-1, 0],
	 *         [1, 0],
	 *         [1, 1],
	 *         [0.5, 0.5]
	 *     ];
	 *     body.fromPolygon(path);
	 *     console.log(body.shapes); // [Convex, Convex, ...]
	 */
	Body.prototype.fromPolygon = function (path, options) {
	    options = options || {};

	    // Remove all shapes
	    for (var i = this.shapes.length; i >= 0; --i) {
	        this.removeShape(this.shapes[i]);
	    }

	    // Copy the path
	    var p = [];
	    for (var i = 0; i < path.length; i++) {
	        p[i] = vec2.clone(path[i]);
	    }

	    // Make it counter-clockwise
	    decomp.makeCCW(p);

	    if (options.removeCollinearPoints !== undefined) {
	        decomp.removeCollinearPoints(p, options.removeCollinearPoints);
	    }

	    // Check if any line segment intersects the path itself
	    if (!options.skipSimpleCheck) {
	        if (!decomp.isSimple(p)) {
	            return false;
	        }
	    }

	    // Save this path for later
	    var concavePath = this.concavePath = [];
	    for (var i = 0; i < p.length; i++) {
	        concavePath[i] = vec2.clone(p[i]);
	    }

	    // Slow or fast decomp?
	    var convexes;
	    if (options.optimalDecomp) {
	        convexes = decomp.decomp(p);
	    } else {
	        convexes = decomp.quickDecomp(p);
	    }

	    var cm = vec2create();

	    // Add convexes
	    for (var i = 0; i !== convexes.length; i++) {
	        // Create convex
	        var c = new Convex({ vertices: convexes[i] });

	        // Move all vertices so its center of mass is in the local center of the convex
	        for (var j = 0; j !== c.vertices.length; j++) {
	            var v = c.vertices[j];
	            sub(v, v, c.centerOfMass);
	        }

	        vec2.copy(cm, c.centerOfMass);

	        c = new Convex({ vertices: c.vertices });

	        // Add the shape
	        this.addShape(c, cm);
	    }

	    this.adjustCenterOfMass();

	    this.aabbNeedsUpdate = true;

	    return true;
	};

	var adjustCenterOfMass_tmp2 = vec2create(),
	    adjustCenterOfMass_tmp3 = vec2create(),
	    adjustCenterOfMass_tmp4 = vec2create();

	/**
	 * Moves the shape offsets so their center of mass becomes the body center of mass.
	 * @method adjustCenterOfMass
	 * @example
	 *     var body = new Body({ position: [0, 0] });
	 *     var shape = new Circle({ radius: 1 });
	 *     body.addShape(shape, [1, 0], 0);
	 *     body.adjustCenterOfMass();
	 *     console.log(body.position); // [1, 0]
	 *     console.log(shape.position); // [0, 0]
	 */
	Body.prototype.adjustCenterOfMass = function () {
	    var offset_times_area = adjustCenterOfMass_tmp2,
	        sum = adjustCenterOfMass_tmp3,
	        cm = adjustCenterOfMass_tmp4,
	        totalArea = 0;
	    vec2.set(sum, 0, 0);

	    for (var i = 0; i !== this.shapes.length; i++) {
	        var s = this.shapes[i];
	        vec2.scale(offset_times_area, s.position, s.area);
	        add(sum, sum, offset_times_area);
	        totalArea += s.area;
	    }

	    vec2.scale(cm, sum, 1 / totalArea);

	    // Now move all shapes
	    for (var i = 0; i !== this.shapes.length; i++) {
	        var s = this.shapes[i];
	        sub(s.position, s.position, cm);
	    }

	    // Move the body position too
	    add(this.position, this.position, cm);

	    // And concave path
	    for (var i = 0; this.concavePath && i < this.concavePath.length; i++) {
	        sub(this.concavePath[i], this.concavePath[i], cm);
	    }

	    this.updateMassProperties();
	    this.updateBoundingRadius();
	};

	/**
	 * Sets the force on the body to zero.
	 * @method setZeroForce
	 */
	Body.prototype.setZeroForce = function () {
	    var f = this.force;
	    f[0] = f[1] = this.angularForce = 0;
	};

	Body.prototype.resetConstraintVelocity = function () {
	    var b = this,
	        vlambda = b.vlambda;
	    vec2.set(vlambda, 0, 0);
	    b.wlambda = 0;
	};

	Body.prototype.addConstraintVelocity = function () {
	    var b = this,
	        v = b.velocity;
	    add(v, v, b.vlambda);
	    b.angularVelocity += b.wlambda;
	};

	/**
	 * Apply damping, see <a href="http://code.google.com/p/bullet/issues/detail?id=74">this</a> for details.
	 * @method applyDamping
	 * @param  {number} dt Current time step
	 */
	Body.prototype.applyDamping = function (dt) {
	    if (this.type === Body.DYNAMIC) {
	        // Only for dynamic bodies
	        var v = this.velocity;
	        vec2.scale(v, v, Math.pow(1 - this.damping, dt));
	        this.angularVelocity *= Math.pow(1 - this.angularDamping, dt);
	    }
	};

	/**
	 * Wake the body up. Normally you should not need this, as the body is automatically awoken at events such as collisions.
	 * Sets the sleepState to {{#crossLink "Body/AWAKE:property"}}Body.AWAKE{{/crossLink}} and emits the wakeUp event if the body wasn't awake before.
	 * @method wakeUp
	 */
	Body.prototype.wakeUp = function () {
	    var s = this.sleepState;
	    this.sleepState = Body.AWAKE;
	    this.idleTime = 0;
	    if (s !== Body.AWAKE) {
	        this.emit(wakeUpEvent);
	    }
	};

	/**
	 * Force body sleep
	 * @method sleep
	 */
	Body.prototype.sleep = function () {
	    this.sleepState = Body.SLEEPING;
	    this.angularVelocity = this.angularForce = 0;
	    vec2.set(this.velocity, 0, 0);
	    vec2.set(this.force, 0, 0);
	    this.emit(sleepEvent);
	};

	/**
	 * Called every timestep to update internal sleep timer and change sleep state if needed.
	 * @method sleepTick
	 * @param {number} time The world time in seconds
	 * @param {boolean} dontSleep
	 * @param {number} dt
	 */
	Body.prototype.sleepTick = function (time, dontSleep, dt) {
	    if (!this.allowSleep || this.type === Body.SLEEPING) {
	        return;
	    }

	    this.wantsToSleep = false;

	    var speedSquared = vec2.squaredLength(this.velocity) + Math.pow(this.angularVelocity, 2),
	        speedLimitSquared = Math.pow(this.sleepSpeedLimit, 2);

	    // Add to idle time
	    if (speedSquared >= speedLimitSquared) {
	        this.idleTime = 0;
	        this.sleepState = Body.AWAKE;
	    } else {
	        this.idleTime += dt;
	        if (this.sleepState !== Body.SLEEPY) {
	            this.sleepState = Body.SLEEPY;
	            this.emit(sleepyEvent);
	        }
	    }

	    if (this.idleTime > this.sleepTimeLimit) {
	        if (!dontSleep) {
	            this.sleep();
	        } else {
	            this.wantsToSleep = true;
	        }
	    }
	};

	/**
	 * Check if the body is overlapping another body. Note that this method only works if the body was added to a World and if at least one step was taken.
	 * @method overlaps
	 * @param  {Body} body
	 * @return {boolean}
	 */
	Body.prototype.overlaps = function (body) {
	    return this.world.overlapKeeper.bodiesAreOverlapping(this, body);
	};

	var integrate_fhMinv = vec2create();
	var integrate_velodt = vec2create();

	/**
	 * Move the body forward in time given its current velocity.
	 * @method integrate
	 * @param  {Number} dt
	 */
	Body.prototype.integrate = function (dt) {
	    var minv = this.invMass,
	        f = this.force,
	        pos = this.position,
	        velo = this.velocity;

	    // Save old position
	    vec2.copy(this.previousPosition, this.position);
	    this.previousAngle = this.angle;

	    // Velocity update
	    if (!this.fixedRotation) {
	        this.angularVelocity += this.angularForce * this.invInertia * dt;
	    }
	    vec2.scale(integrate_fhMinv, f, dt * minv);
	    vec2.multiply(integrate_fhMinv, this.massMultiplier, integrate_fhMinv);
	    add(velo, integrate_fhMinv, velo);

	    // CCD
	    if (!this.integrateToTimeOfImpact(dt)) {

	        // Regular position update
	        vec2.scale(integrate_velodt, velo, dt);
	        add(pos, pos, integrate_velodt);
	        if (!this.fixedRotation) {
	            this.angle += this.angularVelocity * dt;
	        }
	    }

	    this.aabbNeedsUpdate = true;
	};

	var result = new RaycastResult();
	var ray = new Ray({
	    mode: Ray.CLOSEST,
	    skipBackfaces: true
	});
	var direction = vec2create();
	var end = vec2create();
	var startToEnd = vec2create();
	var rememberPosition = vec2create();
	Body.prototype.integrateToTimeOfImpact = function (dt) {

	    if (this.ccdSpeedThreshold < 0 || vec2.squaredLength(this.velocity) < Math.pow(this.ccdSpeedThreshold, 2)) {
	        return false;
	    }

	    // Ignore all the ignored body pairs
	    // This should probably be done somewhere else for optimization
	    var ignoreBodies = [];
	    var disabledPairs = this.world.disabledBodyCollisionPairs;
	    for (var i = 0; i < disabledPairs.length; i += 2) {
	        var bodyA = disabledPairs[i];
	        var bodyB = disabledPairs[i + 1];
	        if (bodyA === this) {
	            ignoreBodies.push(bodyB);
	        } else if (bodyB === this) {
	            ignoreBodies.push(bodyA);
	        }
	    }

	    vec2.normalize(direction, this.velocity);

	    vec2.scale(end, this.velocity, dt);
	    add(end, end, this.position);

	    sub(startToEnd, end, this.position);
	    var startToEndAngle = this.angularVelocity * dt;
	    var len = vec2.length(startToEnd);

	    var timeOfImpact = 1;

	    var hitBody;
	    vec2.copy(ray.from, this.position);
	    vec2.copy(ray.to, end);
	    ray.update();
	    for (var i = 0; i < this.shapes.length; i++) {
	        var shape = this.shapes[i];
	        result.reset();
	        ray.collisionGroup = shape.collisionGroup;
	        ray.collisionMask = shape.collisionMask;
	        this.world.raycast(result, ray);
	        hitBody = result.body;

	        if (hitBody === this || ignoreBodies.indexOf(hitBody) !== -1) {
	            hitBody = null;
	        }

	        if (hitBody) {
	            break;
	        }
	    }

	    if (!hitBody || !timeOfImpact) {
	        return false;
	    }
	    result.getHitPoint(end, ray);
	    sub(startToEnd, end, this.position);
	    timeOfImpact = vec2.distance(end, this.position) / len; // guess

	    var rememberAngle = this.angle;
	    vec2.copy(rememberPosition, this.position);

	    // Got a start and end point. Approximate time of impact using binary search
	    var iter = 0;
	    var tmin = 0;
	    var tmid = timeOfImpact;
	    var tmax = 1;
	    while (tmax >= tmin && iter < this.ccdIterations) {
	        iter++;

	        // calculate the midpoint
	        tmid = (tmax + tmin) / 2;

	        // Move the body to that point
	        vec2.scale(integrate_velodt, startToEnd, tmid);
	        add(this.position, rememberPosition, integrate_velodt);
	        this.angle = rememberAngle + startToEndAngle * tmid;
	        this.updateAABB();

	        // check overlap
	        var overlaps = this.aabb.overlaps(hitBody.aabb) && this.world.narrowphase.bodiesOverlap(this, hitBody, true);

	        if (overlaps) {
	            // change max to search lower interval
	            tmax = tmid;
	        } else {
	            // change min to search upper interval
	            tmin = tmid;
	        }
	    }

	    timeOfImpact = tmax; // Need to guarantee overlap to resolve collisions

	    vec2.copy(this.position, rememberPosition);
	    this.angle = rememberAngle;

	    // move to TOI
	    vec2.scale(integrate_velodt, startToEnd, timeOfImpact);
	    add(this.position, this.position, integrate_velodt);
	    if (!this.fixedRotation) {
	        this.angle += startToEndAngle * timeOfImpact;
	    }

	    return true;
	};

	/**
	 * Get velocity of a point in the body.
	 * @method getVelocityAtPoint
	 * @param  {Array} result A vector to store the result in
	 * @param  {Array} relativePoint A world oriented vector, indicating the position of the point to get the velocity from
	 * @return {Array} The result vector
	 * @example
	 *     var body = new Body({
	 *         mass: 1,
	 *         velocity: [1, 0],
	 *         angularVelocity: 1
	 *     });
	 *     var result = [];
	 *     var point = [1, 0];
	 *     body.getVelocityAtPoint(result, point);
	 *     console.log(result); // [1, 1]
	 */
	Body.prototype.getVelocityAtPoint = function (result, relativePoint) {
	    vec2.crossVZ(result, relativePoint, this.angularVelocity);
	    vec2.subtract(result, this.velocity, result);
	    return result;
	};

	/**
	 * Dynamic body.
	 * @property DYNAMIC
	 * @type {Number}
	 * @static
	 */
	Body.DYNAMIC = 1;

	/**
	 * Static body.
	 * @property STATIC
	 * @type {Number}
	 * @static
	 */
	Body.STATIC = 2;

	/**
	 * Kinematic body.
	 * @property KINEMATIC
	 * @type {Number}
	 * @static
	 */
	Body.KINEMATIC = 4;

	/**
	 * @property AWAKE
	 * @type {Number}
	 * @static
	 */
	Body.AWAKE = 0;

	/**
	 * @property SLEEPY
	 * @type {Number}
	 * @static
	 */
	Body.SLEEPY = 1;

	/**
	 * @property SLEEPING
	 * @type {Number}
	 * @static
	 */
	Body.SLEEPING = 2;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = {
	    Polygon: __webpack_require__(17),
	    Point: __webpack_require__(20)
	};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var Line = __webpack_require__(18),
	    Point = __webpack_require__(20),
	    Scalar = __webpack_require__(19);

	module.exports = Polygon;

	/**
	 * Polygon class.
	 * @class Polygon
	 * @constructor
	 */
	function Polygon() {

	    /**
	     * Vertices that this polygon consists of. An array of array of numbers, example: [[0,0],[1,0],..]
	     * @property vertices
	     * @type {Array}
	     */
	    this.vertices = [];
	}

	/**
	 * Get a vertex at position i. It does not matter if i is out of bounds, this function will just cycle.
	 * @method at
	 * @param  {Number} i
	 * @return {Array}
	 */
	Polygon.prototype.at = function (i) {
	    var v = this.vertices,
	        s = v.length;
	    return v[i < 0 ? i % s + s : i % s];
	};

	/**
	 * Get first vertex
	 * @method first
	 * @return {Array}
	 */
	Polygon.prototype.first = function () {
	    return this.vertices[0];
	};

	/**
	 * Get last vertex
	 * @method last
	 * @return {Array}
	 */
	Polygon.prototype.last = function () {
	    return this.vertices[this.vertices.length - 1];
	};

	/**
	 * Clear the polygon data
	 * @method clear
	 * @return {Array}
	 */
	Polygon.prototype.clear = function () {
	    this.vertices.length = 0;
	};

	/**
	 * Append points "from" to "to"-1 from an other polygon "poly" onto this one.
	 * @method append
	 * @param {Polygon} poly The polygon to get points from.
	 * @param {Number}  from The vertex index in "poly".
	 * @param {Number}  to The end vertex index in "poly". Note that this vertex is NOT included when appending.
	 * @return {Array}
	 */
	Polygon.prototype.append = function (poly, from, to) {
	    if (typeof from == "undefined") throw new Error("From is not given!");
	    if (typeof to == "undefined") throw new Error("To is not given!");

	    if (to - 1 < from) throw new Error("lol1");
	    if (to > poly.vertices.length) throw new Error("lol2");
	    if (from < 0) throw new Error("lol3");

	    for (var i = from; i < to; i++) {
	        this.vertices.push(poly.vertices[i]);
	    }
	};

	/**
	 * Make sure that the polygon vertices are ordered counter-clockwise.
	 * @method makeCCW
	 */
	Polygon.prototype.makeCCW = function () {
	    var br = 0,
	        v = this.vertices;

	    // find bottom right point
	    for (var i = 1; i < this.vertices.length; ++i) {
	        if (v[i][1] < v[br][1] || v[i][1] == v[br][1] && v[i][0] > v[br][0]) {
	            br = i;
	        }
	    }

	    // reverse poly if clockwise
	    if (!Point.left(this.at(br - 1), this.at(br), this.at(br + 1))) {
	        this.reverse();
	    }
	};

	/**
	 * Reverse the vertices in the polygon
	 * @method reverse
	 */
	Polygon.prototype.reverse = function () {
	    var tmp = [];
	    for (var i = 0, N = this.vertices.length; i !== N; i++) {
	        tmp.push(this.vertices.pop());
	    }
	    this.vertices = tmp;
	};

	/**
	 * Check if a point in the polygon is a reflex point
	 * @method isReflex
	 * @param  {Number}  i
	 * @return {Boolean}
	 */
	Polygon.prototype.isReflex = function (i) {
	    return Point.right(this.at(i - 1), this.at(i), this.at(i + 1));
	};

	var tmpLine1 = [],
	    tmpLine2 = [];

	/**
	 * Check if two vertices in the polygon can see each other
	 * @method canSee
	 * @param  {Number} a Vertex index 1
	 * @param  {Number} b Vertex index 2
	 * @return {Boolean}
	 */
	Polygon.prototype.canSee = function (a, b) {
	    var p,
	        dist,
	        l1 = tmpLine1,
	        l2 = tmpLine2;

	    if (Point.leftOn(this.at(a + 1), this.at(a), this.at(b)) && Point.rightOn(this.at(a - 1), this.at(a), this.at(b))) {
	        return false;
	    }
	    dist = Point.sqdist(this.at(a), this.at(b));
	    for (var i = 0; i !== this.vertices.length; ++i) {
	        // for each edge
	        if ((i + 1) % this.vertices.length === a || i === a) // ignore incident edges
	            continue;
	        if (Point.leftOn(this.at(a), this.at(b), this.at(i + 1)) && Point.rightOn(this.at(a), this.at(b), this.at(i))) {
	            // if diag intersects an edge
	            l1[0] = this.at(a);
	            l1[1] = this.at(b);
	            l2[0] = this.at(i);
	            l2[1] = this.at(i + 1);
	            p = Line.lineInt(l1, l2);
	            if (Point.sqdist(this.at(a), p) < dist) {
	                // if edge is blocking visibility to b
	                return false;
	            }
	        }
	    }

	    return true;
	};

	/**
	 * Copy the polygon from vertex i to vertex j.
	 * @method copy
	 * @param  {Number} i
	 * @param  {Number} j
	 * @param  {Polygon} [targetPoly]   Optional target polygon to save in.
	 * @return {Polygon}                The resulting copy.
	 */
	Polygon.prototype.copy = function (i, j, targetPoly) {
	    var p = targetPoly || new Polygon();
	    p.clear();
	    if (i < j) {
	        // Insert all vertices from i to j
	        for (var k = i; k <= j; k++) {
	            p.vertices.push(this.vertices[k]);
	        }
	    } else {

	        // Insert vertices 0 to j
	        for (var k = 0; k <= j; k++) {
	            p.vertices.push(this.vertices[k]);
	        } // Insert vertices i to end
	        for (var k = i; k < this.vertices.length; k++) {
	            p.vertices.push(this.vertices[k]);
	        }
	    }

	    return p;
	};

	/**
	 * Decomposes the polygon into convex pieces. Returns a list of edges [[p1,p2],[p2,p3],...] that cuts the polygon.
	 * Note that this algorithm has complexity O(N^4) and will be very slow for polygons with many vertices.
	 * @method getCutEdges
	 * @return {Array}
	 */
	Polygon.prototype.getCutEdges = function () {
	    var min = [],
	        tmp1 = [],
	        tmp2 = [],
	        tmpPoly = new Polygon();
	    var nDiags = Number.MAX_VALUE;

	    for (var i = 0; i < this.vertices.length; ++i) {
	        if (this.isReflex(i)) {
	            for (var j = 0; j < this.vertices.length; ++j) {
	                if (this.canSee(i, j)) {
	                    tmp1 = this.copy(i, j, tmpPoly).getCutEdges();
	                    tmp2 = this.copy(j, i, tmpPoly).getCutEdges();

	                    for (var k = 0; k < tmp2.length; k++) {
	                        tmp1.push(tmp2[k]);
	                    }if (tmp1.length < nDiags) {
	                        min = tmp1;
	                        nDiags = tmp1.length;
	                        min.push([this.at(i), this.at(j)]);
	                    }
	                }
	            }
	        }
	    }

	    return min;
	};

	/**
	 * Decomposes the polygon into one or more convex sub-Polygons.
	 * @method decomp
	 * @return {Array} An array or Polygon objects.
	 */
	Polygon.prototype.decomp = function () {
	    var edges = this.getCutEdges();
	    if (edges.length > 0) return this.slice(edges);else return [this];
	};

	/**
	 * Slices the polygon given one or more cut edges. If given one, this function will return two polygons (false on failure). If many, an array of polygons.
	 * @method slice
	 * @param {Array} cutEdges A list of edges, as returned by .getCutEdges()
	 * @return {Array}
	 */
	Polygon.prototype.slice = function (cutEdges) {
	    if (cutEdges.length == 0) return [this];
	    if (cutEdges instanceof Array && cutEdges.length && cutEdges[0] instanceof Array && cutEdges[0].length == 2 && cutEdges[0][0] instanceof Array) {

	        var polys = [this];

	        for (var i = 0; i < cutEdges.length; i++) {
	            var cutEdge = cutEdges[i];
	            // Cut all polys
	            for (var j = 0; j < polys.length; j++) {
	                var poly = polys[j];
	                var result = poly.slice(cutEdge);
	                if (result) {
	                    // Found poly! Cut and quit
	                    polys.splice(j, 1);
	                    polys.push(result[0], result[1]);
	                    break;
	                }
	            }
	        }

	        return polys;
	    } else {

	        // Was given one edge
	        var cutEdge = cutEdges;
	        var i = this.vertices.indexOf(cutEdge[0]);
	        var j = this.vertices.indexOf(cutEdge[1]);

	        if (i != -1 && j != -1) {
	            return [this.copy(i, j), this.copy(j, i)];
	        } else {
	            return false;
	        }
	    }
	};

	/**
	 * Checks that the line segments of this polygon do not intersect each other.
	 * @method isSimple
	 * @param  {Array} path An array of vertices e.g. [[0,0],[0,1],...]
	 * @return {Boolean}
	 * @todo Should it check all segments with all others?
	 */
	Polygon.prototype.isSimple = function () {
	    var path = this.vertices;
	    // Check
	    for (var i = 0; i < path.length - 1; i++) {
	        for (var j = 0; j < i - 1; j++) {
	            if (Line.segmentsIntersect(path[i], path[i + 1], path[j], path[j + 1])) {
	                return false;
	            }
	        }
	    }

	    // Check the segment between the last and the first point to all others
	    for (var i = 1; i < path.length - 2; i++) {
	        if (Line.segmentsIntersect(path[0], path[path.length - 1], path[i], path[i + 1])) {
	            return false;
	        }
	    }

	    return true;
	};

	function getIntersectionPoint(p1, p2, q1, q2, delta) {
	    delta = delta || 0;
	    var a1 = p2[1] - p1[1];
	    var b1 = p1[0] - p2[0];
	    var c1 = a1 * p1[0] + b1 * p1[1];
	    var a2 = q2[1] - q1[1];
	    var b2 = q1[0] - q2[0];
	    var c2 = a2 * q1[0] + b2 * q1[1];
	    var det = a1 * b2 - a2 * b1;

	    if (!Scalar.eq(det, 0, delta)) return [(b2 * c1 - b1 * c2) / det, (a1 * c2 - a2 * c1) / det];else return [0, 0];
	}

	/**
	 * Quickly decompose the Polygon into convex sub-polygons.
	 * @method quickDecomp
	 * @param  {Array} result
	 * @param  {Array} [reflexVertices]
	 * @param  {Array} [steinerPoints]
	 * @param  {Number} [delta]
	 * @param  {Number} [maxlevel]
	 * @param  {Number} [level]
	 * @return {Array}
	 */
	Polygon.prototype.quickDecomp = function (result, reflexVertices, steinerPoints, delta, maxlevel, level) {
	    maxlevel = maxlevel || 100;
	    level = level || 0;
	    delta = delta || 25;
	    result = typeof result != "undefined" ? result : [];
	    reflexVertices = reflexVertices || [];
	    steinerPoints = steinerPoints || [];

	    var upperInt = [0, 0],
	        lowerInt = [0, 0],
	        p = [0, 0]; // Points
	    var upperDist = 0,
	        lowerDist = 0,
	        d = 0,
	        closestDist = 0; // scalars
	    var upperIndex = 0,
	        lowerIndex = 0,
	        closestIndex = 0; // Integers
	    var lowerPoly = new Polygon(),
	        upperPoly = new Polygon(); // polygons
	    var poly = this,
	        v = this.vertices;

	    if (v.length < 3) return result;

	    level++;
	    if (level > maxlevel) {
	        console.warn("quickDecomp: max level (" + maxlevel + ") reached.");
	        return result;
	    }

	    for (var i = 0; i < this.vertices.length; ++i) {
	        if (poly.isReflex(i)) {
	            reflexVertices.push(poly.vertices[i]);
	            upperDist = lowerDist = Number.MAX_VALUE;

	            for (var j = 0; j < this.vertices.length; ++j) {
	                if (Point.left(poly.at(i - 1), poly.at(i), poly.at(j)) && Point.rightOn(poly.at(i - 1), poly.at(i), poly.at(j - 1))) {
	                    // if line intersects with an edge
	                    p = getIntersectionPoint(poly.at(i - 1), poly.at(i), poly.at(j), poly.at(j - 1)); // find the point of intersection
	                    if (Point.right(poly.at(i + 1), poly.at(i), p)) {
	                        // make sure it's inside the poly
	                        d = Point.sqdist(poly.vertices[i], p);
	                        if (d < lowerDist) {
	                            // keep only the closest intersection
	                            lowerDist = d;
	                            lowerInt = p;
	                            lowerIndex = j;
	                        }
	                    }
	                }
	                if (Point.left(poly.at(i + 1), poly.at(i), poly.at(j + 1)) && Point.rightOn(poly.at(i + 1), poly.at(i), poly.at(j))) {
	                    p = getIntersectionPoint(poly.at(i + 1), poly.at(i), poly.at(j), poly.at(j + 1));
	                    if (Point.left(poly.at(i - 1), poly.at(i), p)) {
	                        d = Point.sqdist(poly.vertices[i], p);
	                        if (d < upperDist) {
	                            upperDist = d;
	                            upperInt = p;
	                            upperIndex = j;
	                        }
	                    }
	                }
	            }

	            // if there are no vertices to connect to, choose a point in the middle
	            if (lowerIndex == (upperIndex + 1) % this.vertices.length) {
	                //console.log("Case 1: Vertex("+i+"), lowerIndex("+lowerIndex+"), upperIndex("+upperIndex+"), poly.size("+this.vertices.length+")");
	                p[0] = (lowerInt[0] + upperInt[0]) / 2;
	                p[1] = (lowerInt[1] + upperInt[1]) / 2;
	                steinerPoints.push(p);

	                if (i < upperIndex) {
	                    //lowerPoly.insert(lowerPoly.end(), poly.begin() + i, poly.begin() + upperIndex + 1);
	                    lowerPoly.append(poly, i, upperIndex + 1);
	                    lowerPoly.vertices.push(p);
	                    upperPoly.vertices.push(p);
	                    if (lowerIndex != 0) {
	                        //upperPoly.insert(upperPoly.end(), poly.begin() + lowerIndex, poly.end());
	                        upperPoly.append(poly, lowerIndex, poly.vertices.length);
	                    }
	                    //upperPoly.insert(upperPoly.end(), poly.begin(), poly.begin() + i + 1);
	                    upperPoly.append(poly, 0, i + 1);
	                } else {
	                    if (i != 0) {
	                        //lowerPoly.insert(lowerPoly.end(), poly.begin() + i, poly.end());
	                        lowerPoly.append(poly, i, poly.vertices.length);
	                    }
	                    //lowerPoly.insert(lowerPoly.end(), poly.begin(), poly.begin() + upperIndex + 1);
	                    lowerPoly.append(poly, 0, upperIndex + 1);
	                    lowerPoly.vertices.push(p);
	                    upperPoly.vertices.push(p);
	                    //upperPoly.insert(upperPoly.end(), poly.begin() + lowerIndex, poly.begin() + i + 1);
	                    upperPoly.append(poly, lowerIndex, i + 1);
	                }
	            } else {
	                // connect to the closest point within the triangle
	                //console.log("Case 2: Vertex("+i+"), closestIndex("+closestIndex+"), poly.size("+this.vertices.length+")\n");

	                if (lowerIndex > upperIndex) {
	                    upperIndex += this.vertices.length;
	                }
	                closestDist = Number.MAX_VALUE;

	                if (upperIndex < lowerIndex) {
	                    return result;
	                }

	                for (var j = lowerIndex; j <= upperIndex; ++j) {
	                    if (Point.leftOn(poly.at(i - 1), poly.at(i), poly.at(j)) && Point.rightOn(poly.at(i + 1), poly.at(i), poly.at(j))) {
	                        d = Point.sqdist(poly.at(i), poly.at(j));
	                        if (d < closestDist) {
	                            closestDist = d;
	                            closestIndex = j % this.vertices.length;
	                        }
	                    }
	                }

	                if (i < closestIndex) {
	                    lowerPoly.append(poly, i, closestIndex + 1);
	                    if (closestIndex != 0) {
	                        upperPoly.append(poly, closestIndex, v.length);
	                    }
	                    upperPoly.append(poly, 0, i + 1);
	                } else {
	                    if (i != 0) {
	                        lowerPoly.append(poly, i, v.length);
	                    }
	                    lowerPoly.append(poly, 0, closestIndex + 1);
	                    upperPoly.append(poly, closestIndex, i + 1);
	                }
	            }

	            // solve smallest poly first
	            if (lowerPoly.vertices.length < upperPoly.vertices.length) {
	                lowerPoly.quickDecomp(result, reflexVertices, steinerPoints, delta, maxlevel, level);
	                upperPoly.quickDecomp(result, reflexVertices, steinerPoints, delta, maxlevel, level);
	            } else {
	                upperPoly.quickDecomp(result, reflexVertices, steinerPoints, delta, maxlevel, level);
	                lowerPoly.quickDecomp(result, reflexVertices, steinerPoints, delta, maxlevel, level);
	            }

	            return result;
	        }
	    }
	    result.push(this);

	    return result;
	};

	/**
	 * Remove collinear points in the polygon.
	 * @method removeCollinearPoints
	 * @param  {Number} [precision] The threshold angle to use when determining whether two edges are collinear. Use zero for finest precision.
	 * @return {Number}           The number of points removed
	 */
	Polygon.prototype.removeCollinearPoints = function (precision) {
	    var num = 0;
	    for (var i = this.vertices.length - 1; this.vertices.length > 3 && i >= 0; --i) {
	        if (Point.collinear(this.at(i - 1), this.at(i), this.at(i + 1), precision)) {
	            // Remove the middle point
	            this.vertices.splice(i % this.vertices.length, 1);
	            i--; // Jump one point forward. Otherwise we may get a chain removal
	            num++;
	        }
	    }
	    return num;
	};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Scalar = __webpack_require__(19);

	module.exports = Line;

	/**
	 * Container for line-related functions
	 * @class Line
	 */
	function Line() {};

	/**
	 * Compute the intersection between two lines.
	 * @static
	 * @method lineInt
	 * @param  {Array}  l1          Line vector 1
	 * @param  {Array}  l2          Line vector 2
	 * @param  {Number} precision   Precision to use when checking if the lines are parallel
	 * @return {Array}              The intersection point.
	 */
	Line.lineInt = function (l1, l2, precision) {
	  precision = precision || 0;
	  var i = [0, 0]; // point
	  var a1, b1, c1, a2, b2, c2, det; // scalars
	  a1 = l1[1][1] - l1[0][1];
	  b1 = l1[0][0] - l1[1][0];
	  c1 = a1 * l1[0][0] + b1 * l1[0][1];
	  a2 = l2[1][1] - l2[0][1];
	  b2 = l2[0][0] - l2[1][0];
	  c2 = a2 * l2[0][0] + b2 * l2[0][1];
	  det = a1 * b2 - a2 * b1;
	  if (!Scalar.eq(det, 0, precision)) {
	    // lines are not parallel
	    i[0] = (b2 * c1 - b1 * c2) / det;
	    i[1] = (a1 * c2 - a2 * c1) / det;
	  }
	  return i;
	};

	/**
	 * Checks if two line segments intersects.
	 * @method segmentsIntersect
	 * @param {Array} p1 The start vertex of the first line segment.
	 * @param {Array} p2 The end vertex of the first line segment.
	 * @param {Array} q1 The start vertex of the second line segment.
	 * @param {Array} q2 The end vertex of the second line segment.
	 * @return {Boolean} True if the two line segments intersect
	 */
	Line.segmentsIntersect = function (p1, p2, q1, q2) {
	  var dx = p2[0] - p1[0];
	  var dy = p2[1] - p1[1];
	  var da = q2[0] - q1[0];
	  var db = q2[1] - q1[1];

	  // segments are parallel
	  if (da * dy - db * dx == 0) return false;

	  var s = (dx * (q1[1] - p1[1]) + dy * (p1[0] - q1[0])) / (da * dy - db * dx);
	  var t = (da * (p1[1] - q1[1]) + db * (q1[0] - p1[0])) / (db * dx - da * dy);

	  return s >= 0 && s <= 1 && t >= 0 && t <= 1;
	};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = Scalar;

	/**
	 * Scalar functions
	 * @class Scalar
	 */
	function Scalar() {}

	/**
	 * Check if two scalars are equal
	 * @static
	 * @method eq
	 * @param  {Number} a
	 * @param  {Number} b
	 * @param  {Number} [precision]
	 * @return {Boolean}
	 */
	Scalar.eq = function (a, b, precision) {
	  precision = precision || 0;
	  return Math.abs(a - b) < precision;
	};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = Point;

	/**
	 * Point related functions
	 * @class Point
	 */
	function Point() {};

	/**
	 * Get the area of a triangle spanned by the three given points. Note that the area will be negative if the points are not given in counter-clockwise order.
	 * @static
	 * @method area
	 * @param  {Array} a
	 * @param  {Array} b
	 * @param  {Array} c
	 * @return {Number}
	 */
	Point.area = function (a, b, c) {
	    return (b[0] - a[0]) * (c[1] - a[1]) - (c[0] - a[0]) * (b[1] - a[1]);
	};

	Point.left = function (a, b, c) {
	    return Point.area(a, b, c) > 0;
	};

	Point.leftOn = function (a, b, c) {
	    return Point.area(a, b, c) >= 0;
	};

	Point.right = function (a, b, c) {
	    return Point.area(a, b, c) < 0;
	};

	Point.rightOn = function (a, b, c) {
	    return Point.area(a, b, c) <= 0;
	};

	var tmpPoint1 = [],
	    tmpPoint2 = [];

	/**
	 * Check if three points are collinear
	 * @method collinear
	 * @param  {Array} a
	 * @param  {Array} b
	 * @param  {Array} c
	 * @param  {Number} [thresholdAngle=0] Threshold angle to use when comparing the vectors. The function will return true if the angle between the resulting vectors is less than this value. Use zero for max precision.
	 * @return {Boolean}
	 */
	Point.collinear = function (a, b, c, thresholdAngle) {
	    if (!thresholdAngle) return Point.area(a, b, c) == 0;else {
	        var ab = tmpPoint1,
	            bc = tmpPoint2;

	        ab[0] = b[0] - a[0];
	        ab[1] = b[1] - a[1];
	        bc[0] = c[0] - b[0];
	        bc[1] = c[1] - b[1];

	        var dot = ab[0] * bc[0] + ab[1] * bc[1],
	            magA = Math.sqrt(ab[0] * ab[0] + ab[1] * ab[1]),
	            magB = Math.sqrt(bc[0] * bc[0] + bc[1] * bc[1]),
	            angle = Math.acos(dot / (magA * magB));
	        return angle < thresholdAngle;
	    }
	};

	Point.sqdist = function (a, b) {
	    var dx = b[0] - a[0];
	    var dy = b[1] - a[1];
	    return dx * dx + dy * dy;
	};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Shape = __webpack_require__(22),
	    vec2 = __webpack_require__(11),
	    dot = vec2.dot,
	    polyk = __webpack_require__(23),
	    shallowClone = __webpack_require__(12).shallowClone;

	module.exports = Convex;

	/**
	 * Convex shape class.
	 * @class Convex
	 * @constructor
	 * @extends Shape
	 * @param {object} [options] (Note that this options object will be passed on to the {{#crossLink "Shape"}}{{/crossLink}} constructor.)
	 * @param {Array} [options.vertices] An array of vertices that span this shape. Vertices are given in counter-clockwise (CCW) direction.
	 * @example
	 *     var body = new Body({ mass: 1 });
	 *     var vertices = [[-1,-1], [1,-1], [1,1], [-1,1]];
	 *     var convexShape = new Convex({
	 *         vertices: vertices
	 *     });
	 *     body.addShape(convexShape);
	 */
	function Convex(options) {
	    options = options ? shallowClone(options) : {};

	    /**
	     * Vertices defined in the local frame.
	     * @property vertices
	     * @type {Array}
	     */
	    this.vertices = [];

	    // Copy the verts
	    var vertices = options.vertices !== undefined ? options.vertices : [];
	    for (var i = 0; i < vertices.length; i++) {
	        this.vertices.push(vec2.clone(vertices[i]));
	    }

	    /**
	     * Edge normals defined in the local frame, pointing out of the shape.
	     * @property normals
	     * @type {Array}
	     */
	    var normals = this.normals = [];
	    for (var i = 0; i < vertices.length; i++) {
	        normals.push(vec2.create());
	    }
	    this.updateNormals();

	    /**
	     * The center of mass of the Convex
	     * @property centerOfMass
	     * @type {Array}
	     */
	    this.centerOfMass = vec2.create();

	    /**
	     * Triangulated version of this convex. The structure is Array of 3-Arrays, and each subarray contains 3 integers, referencing the vertices.
	     * @property triangles
	     * @type {Array}
	     */
	    this.triangles = [];

	    if (this.vertices.length) {
	        this.updateTriangles();
	        this.updateCenterOfMass();
	    }

	    /**
	     * The bounding radius of the convex
	     * @property boundingRadius
	     * @type {Number}
	     */
	    this.boundingRadius = 0;

	    options.type = options.type || Shape.CONVEX;
	    Shape.call(this, options);

	    this.updateBoundingRadius();
	    this.updateArea();
	    if (this.area < 0) {
	        throw new Error("Convex vertices must be given in counter-clockwise winding.");
	    }
	}
	Convex.prototype = new Shape();
	Convex.prototype.constructor = Convex;

	var tmpVec1 = vec2.create();
	var tmpVec2 = vec2.create();

	Convex.prototype.updateNormals = function () {
	    var vertices = this.vertices;
	    var normals = this.normals;

	    for (var i = 0; i < vertices.length; i++) {
	        var worldPoint0 = vertices[i];
	        var worldPoint1 = vertices[(i + 1) % vertices.length];

	        var normal = normals[i];
	        vec2.subtract(normal, worldPoint1, worldPoint0);

	        // Get normal - just rotate 90 degrees since vertices are given in CCW
	        vec2.rotate90cw(normal, normal);
	        vec2.normalize(normal, normal);
	    }
	};

	/**
	 * Project a Convex onto a world-oriented axis
	 * @method projectOntoAxis
	 * @static
	 * @param  {Array} offset
	 * @param  {Array} localAxis
	 * @param  {Array} result
	 */
	Convex.prototype.projectOntoLocalAxis = function (localAxis, result) {
	    var max = null,
	        min = null,
	        v,
	        value,
	        localAxis = tmpVec1;

	    // Get projected position of all vertices
	    for (var i = 0; i < this.vertices.length; i++) {
	        v = this.vertices[i];
	        value = dot(v, localAxis);
	        if (max === null || value > max) {
	            max = value;
	        }
	        if (min === null || value < min) {
	            min = value;
	        }
	    }

	    if (min > max) {
	        var t = min;
	        min = max;
	        max = t;
	    }

	    vec2.set(result, min, max);
	};

	Convex.prototype.projectOntoWorldAxis = function (localAxis, shapeOffset, shapeAngle, result) {
	    var worldAxis = tmpVec2;

	    this.projectOntoLocalAxis(localAxis, result);

	    // Project the position of the body onto the axis - need to add this to the result
	    if (shapeAngle !== 0) {
	        vec2.rotate(worldAxis, localAxis, shapeAngle);
	    } else {
	        worldAxis = localAxis;
	    }
	    var offset = dot(shapeOffset, worldAxis);

	    vec2.set(result, result[0] + offset, result[1] + offset);
	};

	/**
	 * Update the .triangles property
	 * @method updateTriangles
	 */
	Convex.prototype.updateTriangles = function () {

	    this.triangles.length = 0;

	    // Rewrite on polyk notation, array of numbers
	    var polykVerts = [];
	    for (var i = 0; i < this.vertices.length; i++) {
	        var v = this.vertices[i];
	        polykVerts.push(v[0], v[1]);
	    }

	    // Triangulate
	    var triangles = polyk.Triangulate(polykVerts);

	    // Loop over all triangles, add their inertia contributions to I
	    for (var i = 0; i < triangles.length; i += 3) {
	        var id1 = triangles[i],
	            id2 = triangles[i + 1],
	            id3 = triangles[i + 2];

	        // Add to triangles
	        this.triangles.push([id1, id2, id3]);
	    }
	};

	var updateCenterOfMass_centroid = vec2.create(),
	    updateCenterOfMass_centroid_times_mass = vec2.create(),
	    updateCenterOfMass_a = vec2.create(),
	    updateCenterOfMass_b = vec2.create(),
	    updateCenterOfMass_c = vec2.create();

	/**
	 * Update the .centerOfMass property.
	 * @method updateCenterOfMass
	 */
	Convex.prototype.updateCenterOfMass = function () {
	    var triangles = this.triangles,
	        verts = this.vertices,
	        cm = this.centerOfMass,
	        centroid = updateCenterOfMass_centroid,
	        a = updateCenterOfMass_a,
	        b = updateCenterOfMass_b,
	        c = updateCenterOfMass_c,
	        centroid_times_mass = updateCenterOfMass_centroid_times_mass;

	    vec2.set(cm, 0, 0);
	    var totalArea = 0;

	    for (var i = 0; i !== triangles.length; i++) {
	        var t = triangles[i],
	            a = verts[t[0]],
	            b = verts[t[1]],
	            c = verts[t[2]];

	        vec2.centroid(centroid, a, b, c);

	        // Get mass for the triangle (density=1 in this case)
	        // http://math.stackexchange.com/questions/80198/area-of-triangle-via-vectors
	        var m = triangleArea(a, b, c);
	        totalArea += m;

	        // Add to center of mass
	        vec2.scale(centroid_times_mass, centroid, m);
	        vec2.add(cm, cm, centroid_times_mass);
	    }

	    vec2.scale(cm, cm, 1 / totalArea);
	};

	/**
	 * Compute the moment of inertia of the Convex.
	 * @method computeMomentOfInertia
	 * @return {Number}
	 * @see http://www.gamedev.net/topic/342822-moment-of-inertia-of-a-polygon-2d/
	 */
	Convex.prototype.computeMomentOfInertia = function () {
	    var denom = 0.0,
	        numer = 0.0,
	        N = this.vertices.length;
	    for (var j = N - 1, i = 0; i < N; j = i, i++) {
	        var p0 = this.vertices[j];
	        var p1 = this.vertices[i];
	        var a = Math.abs(vec2.crossLength(p0, p1));
	        var b = dot(p1, p1) + dot(p1, p0) + dot(p0, p0);
	        denom += a * b;
	        numer += a;
	    }
	    return 1.0 / 6.0 * (denom / numer);
	};

	/**
	 * Updates the .boundingRadius property
	 * @method updateBoundingRadius
	 */
	Convex.prototype.updateBoundingRadius = function () {
	    var verts = this.vertices,
	        r2 = 0;

	    for (var i = 0; i !== verts.length; i++) {
	        var l2 = vec2.squaredLength(verts[i]);
	        if (l2 > r2) {
	            r2 = l2;
	        }
	    }

	    this.boundingRadius = Math.sqrt(r2);
	};

	/**
	 * Get the area of the triangle spanned by the three points a, b, c. The area is positive if the points are given in counter-clockwise order, otherwise negative.
	 * @static
	 * @method triangleArea
	 * @param {Array} a
	 * @param {Array} b
	 * @param {Array} c
	 * @return {Number}
	 * @deprecated
	 */
	Convex.triangleArea = triangleArea;

	function triangleArea(a, b, c) {
	    return ((b[0] - a[0]) * (c[1] - a[1]) - (c[0] - a[0]) * (b[1] - a[1])) * 0.5;
	}

	/**
	 * Update the .area
	 * @method updateArea
	 */
	Convex.prototype.updateArea = function () {
	    this.updateTriangles();
	    this.area = 0;

	    var triangles = this.triangles,
	        verts = this.vertices;
	    for (var i = 0; i !== triangles.length; i++) {
	        var t = triangles[i],
	            a = verts[t[0]],
	            b = verts[t[1]],
	            c = verts[t[2]];

	        // Get mass for the triangle (density=1 in this case)
	        var m = triangleArea(a, b, c);
	        this.area += m;
	    }
	};

	/**
	 * @method computeAABB
	 * @param  {AABB}   out
	 * @param  {Array}  position
	 * @param  {Number} angle
	 * @todo: approximate with a local AABB?
	 */
	Convex.prototype.computeAABB = function (out, position, angle) {
	    out.setFromPoints(this.vertices, position, angle, 0);
	};

	var intersectConvex_rayStart = vec2.create();
	var intersectConvex_rayEnd = vec2.create();
	var intersectConvex_normal = vec2.create();

	/**
	 * @method raycast
	 * @param  {RaycastResult} result
	 * @param  {Ray} ray
	 * @param  {array} position
	 * @param  {number} angle
	 */
	Convex.prototype.raycast = function (result, ray, position, angle) {
	    var rayStart = intersectConvex_rayStart;
	    var rayEnd = intersectConvex_rayEnd;
	    var normal = intersectConvex_normal;
	    var vertices = this.vertices;

	    // Transform to local shape space
	    vec2.toLocalFrame(rayStart, ray.from, position, angle);
	    vec2.toLocalFrame(rayEnd, ray.to, position, angle);

	    var n = vertices.length;

	    for (var i = 0; i < n && !result.shouldStop(ray); i++) {
	        var q1 = vertices[i];
	        var q2 = vertices[(i + 1) % n];
	        var delta = vec2.getLineSegmentsIntersectionFraction(rayStart, rayEnd, q1, q2);

	        if (delta >= 0) {
	            vec2.subtract(normal, q2, q1);
	            vec2.rotate(normal, normal, -Math.PI / 2 + angle);
	            vec2.normalize(normal, normal);
	            ray.reportIntersection(result, delta, normal, i);
	        }
	    }
	};

	var pic_r0 = vec2.create();
	var pic_r1 = vec2.create();
	Convex.prototype.pointTest = function (localPoint) {
	    var r0 = pic_r0,
	        r1 = pic_r1,
	        verts = this.vertices,
	        lastCross = null,
	        numVerts = verts.length;

	    for (var i = 0; i < numVerts + 1; i++) {
	        var v0 = verts[i % numVerts],
	            v1 = verts[(i + 1) % numVerts];

	        vec2.subtract(r0, v0, localPoint);
	        vec2.subtract(r1, v1, localPoint);

	        var cross = vec2.crossLength(r0, r1);

	        if (lastCross === null) {
	            lastCross = cross;
	        }

	        // If we got a different sign of the distance vector, the point is out of the polygon
	        if (cross * lastCross < 0) {
	            return false;
	        }
	        lastCross = cross;
	    }
	    return true;
	};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = Shape;

	var vec2 = __webpack_require__(11);

	/**
	 * Base class for shapes. Not to be used directly.
	 * @class Shape
	 * @constructor
	 * @param {object} [options]
	 * @param {number} [options.angle=0]
	 * @param {number} [options.collisionGroup=1]
	 * @param {number} [options.collisionMask=1]
	 * @param {boolean} [options.collisionResponse=true]
	 * @param {Material} [options.material=null]
	 * @param {array} [options.position]
	 * @param {boolean} [options.sensor=false]
	 * @param {object} [options.type=0]
	 */
	function Shape(options) {
	  options = options || {};

	  /**
	   * The body this shape is attached to. A shape can only be attached to a single body.
	   * @property {Body} body
	   */
	  this.body = null;

	  /**
	   * Body-local position of the shape.
	   * @property {Array} position
	   */
	  this.position = vec2.create();
	  if (options.position) {
	    vec2.copy(this.position, options.position);
	  }

	  /**
	   * Body-local angle of the shape.
	   * @property {number} angle
	   */
	  this.angle = options.angle || 0;

	  /**
	   * The type of the shape. One of:
	   *
	   * <ul>
	   * <li><a href="Shape.html#property_CIRCLE">Shape.CIRCLE</a></li>
	   * <li><a href="Shape.html#property_PARTICLE">Shape.PARTICLE</a></li>
	   * <li><a href="Shape.html#property_PLANE">Shape.PLANE</a></li>
	   * <li><a href="Shape.html#property_CONVEX">Shape.CONVEX</a></li>
	   * <li><a href="Shape.html#property_LINE">Shape.LINE</a></li>
	   * <li><a href="Shape.html#property_BOX">Shape.BOX</a></li>
	   * <li><a href="Shape.html#property_CAPSULE">Shape.CAPSULE</a></li>
	   * <li><a href="Shape.html#property_HEIGHTFIELD">Shape.HEIGHTFIELD</a></li>
	   * </ul>
	   *
	   * @property {number} type
	   */
	  this.type = options.type || 0;

	  /**
	   * Shape object identifier. Read only.
	   * @readonly
	   * @type {Number}
	   * @property id
	   */
	  this.id = Shape.idCounter++;

	  /**
	   * Bounding circle radius of this shape
	   * @readonly
	   * @property boundingRadius
	   * @type {Number}
	   */
	  this.boundingRadius = 0;

	  /**
	   * Collision group that this shape belongs to (bit mask). See <a href="http://www.aurelienribon.com/blog/2011/07/box2d-tutorial-collision-filtering/">this tutorial</a>.
	   * @property collisionGroup
	   * @type {Number}
	   * @example
	   *     // Setup bits for each available group
	   *     var PLAYER = Math.pow(2,0),
	   *         ENEMY =  Math.pow(2,1),
	   *         GROUND = Math.pow(2,2)
	   *
	   *     // Put shapes into their groups
	   *     player1Shape.collisionGroup = PLAYER;
	   *     player2Shape.collisionGroup = PLAYER;
	   *     enemyShape  .collisionGroup = ENEMY;
	   *     groundShape .collisionGroup = GROUND;
	   *
	   *     // Assign groups that each shape collide with.
	   *     // Note that the players can collide with ground and enemies, but not with other players.
	   *     player1Shape.collisionMask = ENEMY | GROUND;
	   *     player2Shape.collisionMask = ENEMY | GROUND;
	   *     enemyShape  .collisionMask = PLAYER | GROUND;
	   *     groundShape .collisionMask = PLAYER | ENEMY;
	   *
	   * @example
	   *     // How collision check is done
	   *     if(shapeA.collisionGroup & shapeB.collisionMask)!=0 && (shapeB.collisionGroup & shapeA.collisionMask)!=0){
	   *         // The shapes will collide
	   *     }
	   */
	  this.collisionGroup = options.collisionGroup !== undefined ? options.collisionGroup : 1;

	  /**
	   * Whether to produce contact forces when in contact with other bodies. Note that contacts will be generated, but they will be disabled. That means that this shape will move through other body shapes, but it will still trigger contact events, etc.
	   * @property {Boolean} collisionResponse
	   */
	  this.collisionResponse = options.collisionResponse !== undefined ? options.collisionResponse : true;

	  /**
	   * Collision mask of this shape. See .collisionGroup.
	   * @property collisionMask
	   * @type {Number}
	   */
	  this.collisionMask = options.collisionMask !== undefined ? options.collisionMask : 1;

	  /**
	   * Material to use in collisions for this Shape. If this is set to null, the world will use default material properties instead.
	   * @property material
	   * @type {Material}
	   */
	  this.material = options.material || null;

	  /**
	   * Area of this shape.
	   * @property area
	   * @type {Number}
	   */
	  this.area = 0;

	  /**
	   * Set to true if you want this shape to be a sensor. A sensor does not generate contacts, but it still reports contact events. This is good if you want to know if a shape is overlapping another shape, without them generating contacts.
	   * @property {Boolean} sensor
	   */
	  this.sensor = options.sensor !== undefined ? options.sensor : false;

	  if (this.type) {
	    this.updateBoundingRadius();
	  }

	  this.updateArea();
	}

	Shape.idCounter = 0;

	/**
	 * @static
	 * @property {Number} CIRCLE
	 */
	Shape.CIRCLE = 1;

	/**
	 * @static
	 * @property {Number} PARTICLE
	 */
	Shape.PARTICLE = 2;

	/**
	 * @static
	 * @property {Number} PLANE
	 */
	Shape.PLANE = 4;

	/**
	 * @static
	 * @property {Number} CONVEX
	 */
	Shape.CONVEX = 8;

	/**
	 * @static
	 * @property {Number} LINE
	 */
	Shape.LINE = 16;

	/**
	 * @static
	 * @property {Number} BOX
	 */
	Shape.BOX = 32;

	/**
	 * @static
	 * @property {Number} CAPSULE
	 */
	Shape.CAPSULE = 64;

	/**
	 * @static
	 * @property {Number} HEIGHTFIELD
	 */
	Shape.HEIGHTFIELD = 128;

	Shape.prototype = {

	  /**
	   * Should return the moment of inertia around the Z axis of the body. See <a href="http://en.wikipedia.org/wiki/List_of_moments_of_inertia">Wikipedia's list of moments of inertia</a>.
	   * @method computeMomentOfInertia
	   * @return {Number} If the inertia is infinity or if the object simply isn't possible to rotate, return 0.
	   */
	  computeMomentOfInertia: function computeMomentOfInertia() {},

	  /**
	   * Returns the bounding circle radius of this shape.
	   * @method updateBoundingRadius
	   * @return {Number}
	   */
	  updateBoundingRadius: function updateBoundingRadius() {},

	  /**
	   * Update the .area property of the shape.
	   * @method updateArea
	   */
	  updateArea: function updateArea() {},

	  /**
	   * Compute the world axis-aligned bounding box (AABB) of this shape.
	   * @method computeAABB
	   * @param  {AABB} out The resulting AABB.
	   * @param  {Array} position World position of the shape.
	   * @param  {Number} angle World angle of the shape.
	   */
	  computeAABB: function computeAABB() /*out, position, angle*/{
	    // To be implemented in each subclass
	  },

	  /**
	   * Perform raycasting on this shape.
	   * @method raycast
	   * @param  {RayResult} result Where to store the resulting data.
	   * @param  {Ray} ray The Ray that you want to use for raycasting.
	   * @param  {array} position World position of the shape (the .position property will be ignored).
	   * @param  {number} angle World angle of the shape (the .angle property will be ignored).
	   */
	  raycast: function raycast() /*result, ray, position, angle*/{
	    // To be implemented in each subclass
	  },

	  /**
	   * Test if a point is inside this shape.
	   * @method pointTest
	   * @param {array} localPoint
	   * @return {boolean}
	   */
	  pointTest: function pointTest() /*localPoint*/{
	    return false;
	  },

	  /**
	   * Transform a world point to local shape space (assumed the shape is transformed by both itself and the body).
	   * @method worldPointToLocal
	   * @param {array} out
	   * @param {array} worldPoint
	   */
	  worldPointToLocal: function () {
	    var shapeWorldPosition = vec2.create();
	    return function (out, worldPoint) {
	      var body = this.body;

	      vec2.rotate(shapeWorldPosition, this.position, body.angle);
	      vec2.add(shapeWorldPosition, shapeWorldPosition, body.position);

	      vec2.toLocalFrame(out, worldPoint, shapeWorldPosition, this.body.angle + this.angle);
	    };
	  }()
	};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	"use strict";

	/*
	    PolyK library
	    url: http://polyk.ivank.net
	    Released under MIT licence.
	     Copyright (c) 2012 Ivan Kuckir
	     Permission is hereby granted, free of charge, to any person
	    obtaining a copy of this software and associated documentation
	    files (the "Software"), to deal in the Software without
	    restriction, including without limitation the rights to use,
	    copy, modify, merge, publish, distribute, sublicense, and/or sell
	    copies of the Software, and to permit persons to whom the
	    Software is furnished to do so, subject to the following
	    conditions:
	     The above copyright notice and this permission notice shall be
	    included in all copies or substantial portions of the Software.
	     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
	    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
	    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
	    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
	    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
	    OTHER DEALINGS IN THE SOFTWARE.
	*/

	var PolyK = {};

	/*
	    Is Polygon self-intersecting?
	     O(n^2)
	*/
	/*
	PolyK.IsSimple = function(p)
	{
	    var n = p.length>>1;
	    if(n<4) return true;
	    var a1 = new PolyK._P(), a2 = new PolyK._P();
	    var b1 = new PolyK._P(), b2 = new PolyK._P();
	    var c = new PolyK._P();
	     for(var i=0; i<n; i++)
	    {
	        a1.x = p[2*i  ];
	        a1.y = p[2*i+1];
	        if(i==n-1)  { a2.x = p[0    ];  a2.y = p[1    ]; }
	        else        { a2.x = p[2*i+2];  a2.y = p[2*i+3]; }
	         for(var j=0; j<n; j++)
	        {
	            if(Math.abs(i-j) < 2) continue;
	            if(j==n-1 && i==0) continue;
	            if(i==n-1 && j==0) continue;
	             b1.x = p[2*j  ];
	            b1.y = p[2*j+1];
	            if(j==n-1)  { b2.x = p[0    ];  b2.y = p[1    ]; }
	            else        { b2.x = p[2*j+2];  b2.y = p[2*j+3]; }
	             if(PolyK._GetLineIntersection(a1,a2,b1,b2,c) != null) return false;
	        }
	    }
	    return true;
	}
	 PolyK.IsConvex = function(p)
	{
	    if(p.length<6) return true;
	    var l = p.length - 4;
	    for(var i=0; i<l; i+=2)
	        if(!PolyK._convex(p[i], p[i+1], p[i+2], p[i+3], p[i+4], p[i+5])) return false;
	    if(!PolyK._convex(p[l  ], p[l+1], p[l+2], p[l+3], p[0], p[1])) return false;
	    if(!PolyK._convex(p[l+2], p[l+3], p[0  ], p[1  ], p[2], p[3])) return false;
	    return true;
	}
	*/
	PolyK.GetArea = function (p) {
	    if (p.length < 6) return 0;
	    var l = p.length - 2;
	    var sum = 0;
	    for (var i = 0; i < l; i += 2) {
	        sum += (p[i + 2] - p[i]) * (p[i + 1] + p[i + 3]);
	    }sum += (p[0] - p[l]) * (p[l + 1] + p[1]);
	    return -sum * 0.5;
	};
	/*
	PolyK.GetAABB = function(p)
	{
	    var minx = Infinity;
	    var miny = Infinity;
	    var maxx = -minx;
	    var maxy = -miny;
	    for(var i=0; i<p.length; i+=2)
	    {
	        minx = Math.min(minx, p[i  ]);
	        maxx = Math.max(maxx, p[i  ]);
	        miny = Math.min(miny, p[i+1]);
	        maxy = Math.max(maxy, p[i+1]);
	    }
	    return {x:minx, y:miny, width:maxx-minx, height:maxy-miny};
	}
	*/

	PolyK.Triangulate = function (p) {
	    var n = p.length >> 1;
	    if (n < 3) return [];
	    var tgs = [];
	    var avl = [];
	    for (var i = 0; i < n; i++) {
	        avl.push(i);
	    }var i = 0;
	    var al = n;
	    while (al > 3) {
	        var i0 = avl[(i + 0) % al];
	        var i1 = avl[(i + 1) % al];
	        var i2 = avl[(i + 2) % al];

	        var ax = p[2 * i0],
	            ay = p[2 * i0 + 1];
	        var bx = p[2 * i1],
	            by = p[2 * i1 + 1];
	        var cx = p[2 * i2],
	            cy = p[2 * i2 + 1];

	        var earFound = false;
	        if (PolyK._convex(ax, ay, bx, by, cx, cy)) {
	            earFound = true;
	            for (var j = 0; j < al; j++) {
	                var vi = avl[j];
	                if (vi == i0 || vi == i1 || vi == i2) continue;
	                if (PolyK._PointInTriangle(p[2 * vi], p[2 * vi + 1], ax, ay, bx, by, cx, cy)) {
	                    earFound = false;break;
	                }
	            }
	        }
	        if (earFound) {
	            tgs.push(i0, i1, i2);
	            avl.splice((i + 1) % al, 1);
	            al--;
	            i = 0;
	        } else if (i++ > 3 * al) break; // no convex angles :(
	    }
	    tgs.push(avl[0], avl[1], avl[2]);
	    return tgs;
	};
	/*
	PolyK.ContainsPoint = function(p, px, py)
	{
	    var n = p.length>>1;
	    var ax, ay, bx = p[2*n-2]-px, by = p[2*n-1]-py;
	    var depth = 0;
	    for(var i=0; i<n; i++)
	    {
	        ax = bx;  ay = by;
	        bx = p[2*i  ] - px;
	        by = p[2*i+1] - py;
	        if(ay< 0 && by< 0) continue;    // both "up" or both "donw"
	        if(ay>=0 && by>=0) continue;    // both "up" or both "donw"
	        if(ax< 0 && bx< 0) continue;
	         var lx = ax + (bx-ax)*(-ay)/(by-ay);
	        if(lx>0) depth++;
	    }
	    return (depth & 1) == 1;
	}
	 PolyK.Slice = function(p, ax, ay, bx, by)
	{
	    if(PolyK.ContainsPoint(p, ax, ay) || PolyK.ContainsPoint(p, bx, by)) return [p.slice(0)];
	     var a = new PolyK._P(ax, ay);
	    var b = new PolyK._P(bx, by);
	    var iscs = [];  // intersections
	    var ps = [];    // points
	    for(var i=0; i<p.length; i+=2) ps.push(new PolyK._P(p[i], p[i+1]));
	     for(var i=0; i<ps.length; i++)
	    {
	        var isc = new PolyK._P(0,0);
	        isc = PolyK._GetLineIntersection(a, b, ps[i], ps[(i+1)%ps.length], isc);
	         if(isc)
	        {
	            isc.flag = true;
	            iscs.push(isc);
	            ps.splice(i+1,0,isc);
	            i++;
	        }
	    }
	    if(iscs.length == 0) return [p.slice(0)];
	    var comp = function(u,v) {return PolyK._P.dist(a,u) - PolyK._P.dist(a,v); }
	    iscs.sort(comp);
	     var pgs = [];
	    var dir = 0;
	    while(iscs.length > 0)
	    {
	        var n = ps.length;
	        var i0 = iscs[0];
	        var i1 = iscs[1];
	        var ind0 = ps.indexOf(i0);
	        var ind1 = ps.indexOf(i1);
	        var solved = false;
	         if(PolyK._firstWithFlag(ps, ind0) == ind1) solved = true;
	        else
	        {
	            i0 = iscs[1];
	            i1 = iscs[0];
	            ind0 = ps.indexOf(i0);
	            ind1 = ps.indexOf(i1);
	            if(PolyK._firstWithFlag(ps, ind0) == ind1) solved = true;
	        }
	        if(solved)
	        {
	            dir--;
	            var pgn = PolyK._getPoints(ps, ind0, ind1);
	            pgs.push(pgn);
	            ps = PolyK._getPoints(ps, ind1, ind0);
	            i0.flag = i1.flag = false;
	            iscs.splice(0,2);
	            if(iscs.length == 0) pgs.push(ps);
	        }
	        else { dir++; iscs.reverse(); }
	        if(dir>1) break;
	    }
	    var result = [];
	    for(var i=0; i<pgs.length; i++)
	    {
	        var pg = pgs[i];
	        var npg = [];
	        for(var j=0; j<pg.length; j++) npg.push(pg[j].x, pg[j].y);
	        result.push(npg);
	    }
	    return result;
	}
	 PolyK.Raycast = function(p, x, y, dx, dy, isc)
	{
	    var l = p.length - 2;
	    var tp = PolyK._tp;
	    var a1 = tp[0], a2 = tp[1],
	    b1 = tp[2], b2 = tp[3], c = tp[4];
	    a1.x = x; a1.y = y;
	    a2.x = x+dx; a2.y = y+dy;
	     if(isc==null) isc = {dist:0, edge:0, norm:{x:0, y:0}, refl:{x:0, y:0}};
	    isc.dist = Infinity;
	     for(var i=0; i<l; i+=2)
	    {
	        b1.x = p[i  ];  b1.y = p[i+1];
	        b2.x = p[i+2];  b2.y = p[i+3];
	        var nisc = PolyK._RayLineIntersection(a1, a2, b1, b2, c);
	        if(nisc) PolyK._updateISC(dx, dy, a1, b1, b2, c, i/2, isc);
	    }
	    b1.x = b2.x;  b1.y = b2.y;
	    b2.x = p[0];  b2.y = p[1];
	    var nisc = PolyK._RayLineIntersection(a1, a2, b1, b2, c);
	    if(nisc) PolyK._updateISC(dx, dy, a1, b1, b2, c, p.length/2, isc);
	     return (isc.dist != Infinity) ? isc : null;
	}
	 PolyK.ClosestEdge = function(p, x, y, isc)
	{
	    var l = p.length - 2;
	    var tp = PolyK._tp;
	    var a1 = tp[0],
	    b1 = tp[2], b2 = tp[3], c = tp[4];
	    a1.x = x; a1.y = y;
	     if(isc==null) isc = {dist:0, edge:0, point:{x:0, y:0}, norm:{x:0, y:0}};
	    isc.dist = Infinity;
	     for(var i=0; i<l; i+=2)
	    {
	        b1.x = p[i  ];  b1.y = p[i+1];
	        b2.x = p[i+2];  b2.y = p[i+3];
	        PolyK._pointLineDist(a1, b1, b2, i>>1, isc);
	    }
	    b1.x = b2.x;  b1.y = b2.y;
	    b2.x = p[0];  b2.y = p[1];
	    PolyK._pointLineDist(a1, b1, b2, l>>1, isc);
	     var idst = 1/isc.dist;
	    isc.norm.x = (x-isc.point.x)*idst;
	    isc.norm.y = (y-isc.point.y)*idst;
	    return isc;
	}
	 PolyK._pointLineDist = function(p, a, b, edge, isc)
	{
	    var x = p.x, y = p.y, x1 = a.x, y1 = a.y, x2 = b.x, y2 = b.y;
	     var A = x - x1;
	    var B = y - y1;
	    var C = x2 - x1;
	    var D = y2 - y1;
	     var dot = A * C + B * D;
	    var len_sq = C * C + D * D;
	    var param = dot / len_sq;
	     var xx, yy;
	     if (param < 0 || (x1 == x2 && y1 == y2)) {
	        xx = x1;
	        yy = y1;
	    }
	    else if (param > 1) {
	        xx = x2;
	        yy = y2;
	    }
	    else {
	        xx = x1 + param * C;
	        yy = y1 + param * D;
	    }
	     var dx = x - xx;
	    var dy = y - yy;
	    var dst = Math.sqrt(dx * dx + dy * dy);
	    if(dst<isc.dist)
	    {
	        isc.dist = dst;
	        isc.edge = edge;
	        isc.point.x = xx;
	        isc.point.y = yy;
	    }
	}
	 PolyK._updateISC = function(dx, dy, a1, b1, b2, c, edge, isc)
	{
	    var nrl = PolyK._P.dist(a1, c);
	    if(nrl<isc.dist)
	    {
	        var ibl = 1/PolyK._P.dist(b1, b2);
	        var nx = -(b2.y-b1.y)*ibl;
	        var ny =  (b2.x-b1.x)*ibl;
	        var ddot = 2*(dx*nx+dy*ny);
	        isc.dist = nrl;
	        isc.norm.x = nx;
	        isc.norm.y = ny;
	        isc.refl.x = -ddot*nx+dx;
	        isc.refl.y = -ddot*ny+dy;
	        isc.edge = edge;
	    }
	}
	 PolyK._getPoints = function(ps, ind0, ind1)
	{
	    var n = ps.length;
	    var nps = [];
	    if(ind1<ind0) ind1 += n;
	    for(var i=ind0; i<= ind1; i++) nps.push(ps[i%n]);
	    return nps;
	}
	 PolyK._firstWithFlag = function(ps, ind)
	{
	    var n = ps.length;
	    while(true)
	    {
	        ind = (ind+1)%n;
	        if(ps[ind].flag) return ind;
	    }
	}
	*/
	PolyK._PointInTriangle = function (px, py, ax, ay, bx, by, cx, cy) {
	    var v0x = cx - ax;
	    var v0y = cy - ay;
	    var v1x = bx - ax;
	    var v1y = by - ay;
	    var v2x = px - ax;
	    var v2y = py - ay;

	    var dot00 = v0x * v0x + v0y * v0y;
	    var dot01 = v0x * v1x + v0y * v1y;
	    var dot02 = v0x * v2x + v0y * v2y;
	    var dot11 = v1x * v1x + v1y * v1y;
	    var dot12 = v1x * v2x + v1y * v2y;

	    var invDenom = 1 / (dot00 * dot11 - dot01 * dot01);
	    var u = (dot11 * dot02 - dot01 * dot12) * invDenom;
	    var v = (dot00 * dot12 - dot01 * dot02) * invDenom;

	    // Check if point is in triangle
	    return u >= 0 && v >= 0 && u + v < 1;
	};
	/*
	PolyK._RayLineIntersection = function(a1, a2, b1, b2, c)
	{
	    var dax = (a1.x-a2.x), dbx = (b1.x-b2.x);
	    var day = (a1.y-a2.y), dby = (b1.y-b2.y);
	     var Den = dax*dby - day*dbx;
	    if (Den == 0) return null;  // parallel
	     var A = (a1.x * a2.y - a1.y * a2.x);
	    var B = (b1.x * b2.y - b1.y * b2.x);
	     var I = c;
	    var iDen = 1/Den;
	    I.x = ( A*dbx - dax*B ) * iDen;
	    I.y = ( A*dby - day*B ) * iDen;
	     if(!PolyK._InRect(I, b1, b2)) return null;
	    if((day>0 && I.y>a1.y) || (day<0 && I.y<a1.y)) return null;
	    if((dax>0 && I.x>a1.x) || (dax<0 && I.x<a1.x)) return null;
	    return I;
	}
	 PolyK._GetLineIntersection = function(a1, a2, b1, b2, c)
	{
	    var dax = (a1.x-a2.x), dbx = (b1.x-b2.x);
	    var day = (a1.y-a2.y), dby = (b1.y-b2.y);
	     var Den = dax*dby - day*dbx;
	    if (Den == 0) return null;  // parallel
	     var A = (a1.x * a2.y - a1.y * a2.x);
	    var B = (b1.x * b2.y - b1.y * b2.x);
	     var I = c;
	    I.x = ( A*dbx - dax*B ) / Den;
	    I.y = ( A*dby - day*B ) / Den;
	     if(PolyK._InRect(I, a1, a2) && PolyK._InRect(I, b1, b2)) return I;
	    return null;
	}
	 PolyK._InRect = function(a, b, c)
	{
	    if  (b.x == c.x) return (a.y>=Math.min(b.y, c.y) && a.y<=Math.max(b.y, c.y));
	    if  (b.y == c.y) return (a.x>=Math.min(b.x, c.x) && a.x<=Math.max(b.x, c.x));
	     if(a.x >= Math.min(b.x, c.x) && a.x <= Math.max(b.x, c.x)
	    && a.y >= Math.min(b.y, c.y) && a.y <= Math.max(b.y, c.y))
	    return true;
	    return false;
	}
	*/
	PolyK._convex = function (ax, ay, bx, by, cx, cy) {
	    return (ay - by) * (cx - bx) + (bx - ax) * (cy - by) >= 0;
	};
	/*
	PolyK._P = function(x,y)
	{
	    this.x = x;
	    this.y = y;
	    this.flag = false;
	}
	PolyK._P.prototype.toString = function()
	{
	    return "Point ["+this.x+", "+this.y+"]";
	}
	PolyK._P.dist = function(a,b)
	{
	    var dx = b.x-a.x;
	    var dy = b.y-a.y;
	    return Math.sqrt(dx*dx + dy*dy);
	}
	 PolyK._tp = [];
	for(var i=0; i<10; i++) PolyK._tp.push(new PolyK._P(0,0));
	    */

	module.exports = PolyK;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var vec2 = __webpack_require__(11);
	var Ray = __webpack_require__(25);

	module.exports = RaycastResult;

	/**
	 * Storage for Ray casting hit data.
	 * @class RaycastResult
	 * @constructor
	 */
	function RaycastResult() {
	  /**
	     * The normal of the hit, oriented in world space.
	     * @property {array} normal
	     */
	  this.normal = vec2.create();

	  /**
	     * The hit shape, or null.
	     * @property {Shape} shape
	     */
	  this.shape = null;

	  /**
	     * The hit body, or null.
	     * @property {Body} body
	     */
	  this.body = null;

	  /**
	     * The index of the hit triangle, if the hit shape was indexable.
	     * @property {number} faceIndex
	     * @default -1
	     */
	  this.faceIndex = -1;

	  /**
	     * Distance to the hit, as a fraction. 0 is at the "from" point, 1 is at the "to" point. Will be set to -1 if there was no hit yet.
	     * @property {number} fraction
	     * @default -1
	     */
	  this.fraction = -1;

	  /**
	     * If the ray should stop traversing.
	     * @readonly
	     * @property {Boolean} isStopped
	     */
	  this.isStopped = false;
	}

	/**
	 * Reset all result data. Must be done before re-using the result object.
	 * @method reset
	 */
	RaycastResult.prototype.reset = function () {
	  vec2.set(this.normal, 0, 0);
	  this.shape = null;
	  this.body = null;
	  this.faceIndex = -1;
	  this.fraction = -1;
	  this.isStopped = false;
	};

	/**
	 * Get the distance to the hit point.
	 * @method getHitDistance
	 * @param {Ray} ray
	 * @return {number}
	 */
	RaycastResult.prototype.getHitDistance = function (ray) {
	  return vec2.distance(ray.from, ray.to) * this.fraction;
	};

	/**
	 * Returns true if the ray hit something since the last reset().
	 * @method hasHit
	 * @®eturn {boolean}
	 */
	RaycastResult.prototype.hasHit = function () {
	  return this.fraction !== -1;
	};

	/**
	 * Get world hit point.
	 * @method getHitPoint
	 * @param {array} out
	 * @param {Ray} ray
	 */
	RaycastResult.prototype.getHitPoint = function (out, ray) {
	  vec2.lerp(out, ray.from, ray.to, this.fraction);
	};

	/**
	 * Can be called while iterating over hits to stop searching for hit points.
	 * @method stop
	 */
	RaycastResult.prototype.stop = function () {
	  this.isStopped = true;
	};

	/**
	 * @method shouldStop
	 * @private
	 * @param {Ray} ray
	 * @return {boolean}
	 */
	RaycastResult.prototype.shouldStop = function (ray) {
	  return this.isStopped || this.fraction !== -1 && ray.mode === Ray.ANY;
	};

	/**
	 * @method set
	 * @private
	 * @param {array} normal
	 * @param {Shape} shape
	 * @param {Body} body
	 * @param {number} fraction
	 * @param {number} faceIndex
	 */
	RaycastResult.prototype.set = function (normal, shape, body, fraction, faceIndex) {
	  vec2.copy(this.normal, normal);
	  this.shape = shape;
	  this.body = body;
	  this.fraction = fraction;
	  this.faceIndex = faceIndex;
	};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = Ray;

	var vec2 = __webpack_require__(11);

	/**
	 * A line with a start and end point that is used to intersect shapes. For an example, see {{#crossLink "World/raycast:method"}}World.raycast{{/crossLink}}
	 * @class Ray
	 * @constructor
	 * @param {object} [options]
	 * @param {array} [options.from]
	 * @param {array} [options.to]
	 * @param {boolean} [options.checkCollisionResponse=true]
	 * @param {boolean} [options.skipBackfaces=false]
	 * @param {number} [options.collisionMask=-1]
	 * @param {number} [options.collisionGroup=-1]
	 * @param {number} [options.mode=Ray.ANY]
	 * @param {Function} [options.callback]
	 */
	function Ray(options) {
	  options = options || {};

	  /**
	   * Ray start point.
	   * @property {array} from
	   */
	  this.from = options.from ? vec2.clone(options.from) : vec2.create();

	  /**
	   * Ray end point
	   * @property {array} to
	   */
	  this.to = options.to ? vec2.clone(options.to) : vec2.create();

	  /**
	   * Set to true if you want the Ray to take .collisionResponse flags into account on bodies and shapes.
	   * @property {Boolean} checkCollisionResponse
	   */
	  this.checkCollisionResponse = options.checkCollisionResponse !== undefined ? options.checkCollisionResponse : true;

	  /**
	   * If set to true, the ray skips any hits with normal.dot(rayDirection) < 0.
	   * @property {Boolean} skipBackfaces
	   */
	  this.skipBackfaces = !!options.skipBackfaces;

	  /**
	   * @property {number} collisionMask
	   * @default -1
	   */
	  this.collisionMask = options.collisionMask !== undefined ? options.collisionMask : -1;

	  /**
	   * @property {number} collisionGroup
	   * @default -1
	   */
	  this.collisionGroup = options.collisionGroup !== undefined ? options.collisionGroup : -1;

	  /**
	   * The intersection mode. Should be {{#crossLink "Ray/ANY:property"}}Ray.ANY{{/crossLink}}, {{#crossLink "Ray/ALL:property"}}Ray.ALL{{/crossLink}} or {{#crossLink "Ray/CLOSEST:property"}}Ray.CLOSEST{{/crossLink}}.
	   * @property {number} mode
	   */
	  this.mode = options.mode !== undefined ? options.mode : Ray.ANY;

	  /**
	   * Current, user-provided result callback. Will be used if mode is Ray.ALL.
	   * @property {Function} callback
	   */
	  this.callback = options.callback || function () /*result*/{};

	  /**
	   * @readOnly
	   * @property {array} direction
	   */
	  this.direction = vec2.create();

	  /**
	   * Length of the ray
	   * @readOnly
	   * @property {number} length
	   */
	  this.length = 1;

	  this.update();
	}
	Ray.prototype.constructor = Ray;

	/**
	 * This raycasting mode will make the Ray traverse through all intersection points and only return the closest one.
	 * @static
	 * @property {Number} CLOSEST
	 */
	Ray.CLOSEST = 1;

	/**
	 * This raycasting mode will make the Ray stop when it finds the first intersection point.
	 * @static
	 * @property {Number} ANY
	 */
	Ray.ANY = 2;

	/**
	 * This raycasting mode will traverse all intersection points and executes a callback for each one.
	 * @static
	 * @property {Number} ALL
	 */
	Ray.ALL = 4;

	/**
	 * Should be called if you change the from or to point.
	 * @method update
	 */
	Ray.prototype.update = function () {

	  // Update .direction and .length
	  var d = this.direction;
	  vec2.subtract(d, this.to, this.from);
	  this.length = vec2.length(d);
	  vec2.normalize(d, d);
	};

	/**
	 * @method intersectBodies
	 * @param {Array} bodies An array of Body objects.
	 */
	Ray.prototype.intersectBodies = function (result, bodies) {
	  for (var i = 0, l = bodies.length; !result.shouldStop(this) && i < l; i++) {
	    var body = bodies[i];
	    var aabb = body.getAABB();
	    if (aabb.overlapsRay(this) >= 0 || aabb.containsPoint(this.from)) {
	      this.intersectBody(result, body);
	    }
	  }
	};

	var intersectBody_worldPosition = vec2.create();

	/**
	 * Shoot a ray at a body, get back information about the hit.
	 * @method intersectBody
	 * @private
	 * @param {Body} body
	 */
	Ray.prototype.intersectBody = function (result, body) {
	  var checkCollisionResponse = this.checkCollisionResponse;

	  if (checkCollisionResponse && !body.collisionResponse) {
	    return;
	  }

	  var worldPosition = intersectBody_worldPosition;

	  for (var i = 0, N = body.shapes.length; i < N; i++) {
	    var shape = body.shapes[i];

	    if (checkCollisionResponse && !shape.collisionResponse) {
	      continue; // Skip
	    }

	    if ((this.collisionGroup & shape.collisionMask) === 0 || (shape.collisionGroup & this.collisionMask) === 0) {
	      continue;
	    }

	    // Get world angle and position of the shape
	    vec2.rotate(worldPosition, shape.position, body.angle);
	    vec2.add(worldPosition, worldPosition, body.position);
	    var worldAngle = shape.angle + body.angle;

	    this.intersectShape(result, shape, worldAngle, worldPosition, body);

	    if (result.shouldStop(this)) {
	      break;
	    }
	  }
	};

	/**
	 * @method intersectShape
	 * @private
	 * @param {Shape} shape
	 * @param {number} angle
	 * @param {array} position
	 * @param {Body} body
	 */
	Ray.prototype.intersectShape = function (result, shape, angle, position, body) {
	  var from = this.from;

	  // Checking radius
	  var distance = distanceFromIntersectionSquared(from, this.direction, position);
	  if (distance > shape.boundingRadius * shape.boundingRadius) {
	    return;
	  }

	  this._currentBody = body;
	  this._currentShape = shape;

	  shape.raycast(result, this, position, angle);

	  this._currentBody = this._currentShape = null;
	};

	/**
	 * Get the AABB of the ray.
	 * @method getAABB
	 * @param  {AABB} aabb
	 */
	Ray.prototype.getAABB = function (result) {
	  var to = this.to;
	  var from = this.from;
	  vec2.set(result.lowerBound, Math.min(to[0], from[0]), Math.min(to[1], from[1]));
	  vec2.set(result.upperBound, Math.max(to[0], from[0]), Math.max(to[1], from[1]));
	};

	/**
	 * @method reportIntersection
	 * @private
	 * @param  {number} fraction
	 * @param  {array} normal
	 * @param  {number} [faceIndex=-1]
	 * @return {boolean} True if the intersections should continue
	 */
	Ray.prototype.reportIntersection = function (result, fraction, normal, faceIndex) {
	  var shape = this._currentShape;
	  var body = this._currentBody;

	  // Skip back faces?
	  if (this.skipBackfaces && vec2.dot(normal, this.direction) > 0) {
	    return;
	  }

	  switch (this.mode) {

	    case Ray.ALL:
	      result.set(normal, shape, body, fraction, faceIndex);
	      this.callback(result);
	      break;

	    case Ray.CLOSEST:

	      // Store if closer than current closest
	      if (fraction < result.fraction || !result.hasHit()) {
	        result.set(normal, shape, body, fraction, faceIndex);
	      }
	      break;

	    case Ray.ANY:

	      // Report and stop.
	      result.set(normal, shape, body, fraction, faceIndex);
	      break;
	  }
	};

	var v0 = vec2.create(),
	    intersect = vec2.create();
	function distanceFromIntersectionSquared(from, direction, position) {

	  // v0 is vector from from to position
	  vec2.subtract(v0, position, from);
	  var dot = vec2.dot(v0, direction);

	  // intersect = direction * dot + from
	  vec2.scale(intersect, direction, dot);
	  vec2.add(intersect, intersect, from);

	  return vec2.squaredDistance(position, intersect);
	}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = EventEmitter;

	/**
	 * Base class for objects that dispatches events.
	 * @class EventEmitter
	 * @constructor
	 * @example
	 *     var emitter = new EventEmitter();
	 *     emitter.on('myEvent', function(evt){
	 *         console.log(evt.message);
	 *     });
	 *     emitter.emit({
	 *         type: 'myEvent',
	 *         message: 'Hello world!'
	 *     });
	 */
	function EventEmitter() {
	    this.tmpArray = [];
	}

	EventEmitter.prototype = {
	    constructor: EventEmitter,

	    /**
	     * Add an event listener
	     * @method on
	     * @param  {String} type
	     * @param  {Function} listener
	     * @return {EventEmitter} The self object, for chainability.
	     * @example
	     *     emitter.on('myEvent', function(evt){
	     *         console.log('myEvt was triggered!');
	     *     });
	     */
	    on: function on(type, listener, context) {
	        listener.context = context || this;
	        if (this._listeners === undefined) {
	            this._listeners = {};
	        }
	        var listeners = this._listeners;
	        if (listeners[type] === undefined) {
	            listeners[type] = [];
	        }
	        if (listeners[type].indexOf(listener) === -1) {
	            listeners[type].push(listener);
	        }
	        return this;
	    },

	    /**
	     * Remove an event listener
	     * @method off
	     * @param  {String} type
	     * @param  {Function} listener
	     * @return {EventEmitter} The self object, for chainability.
	     * @example
	     *     emitter.on('myEvent', handler); // Add handler
	     *     emitter.off('myEvent', handler); // Remove handler
	     */
	    off: function off(type, listener) {
	        var listeners = this._listeners;
	        if (!listeners || !listeners[type]) {
	            return this;
	        }
	        var index = listeners[type].indexOf(listener);
	        if (index !== -1) {
	            listeners[type].splice(index, 1);
	        }
	        return this;
	    },

	    /**
	     * Check if an event listener is added
	     * @method has
	     * @param  {String} type
	     * @param  {Function} listener
	     * @return {Boolean}
	     */
	    has: function has(type, listener) {
	        if (this._listeners === undefined) {
	            return false;
	        }
	        var listeners = this._listeners;
	        if (listener) {
	            if (listeners[type] !== undefined && listeners[type].indexOf(listener) !== -1) {
	                return true;
	            }
	        } else {
	            if (listeners[type] !== undefined) {
	                return true;
	            }
	        }

	        return false;
	    },

	    /**
	     * Emit an event.
	     * @method emit
	     * @param  {Object} event
	     * @param  {String} event.type
	     * @return {EventEmitter} The self object, for chainability.
	     * @example
	     *     emitter.emit({
	     *         type: 'myEvent',
	     *         customData: 123
	     *     });
	     */
	    emit: function emit(event) {
	        if (this._listeners === undefined) {
	            return this;
	        }
	        var listeners = this._listeners;
	        var listenerArray = listeners[event.type];
	        if (listenerArray !== undefined) {
	            event.target = this;

	            // Need to copy the listener array, in case some listener was added/removed inside a listener
	            var tmpArray = this.tmpArray;
	            for (var i = 0, l = listenerArray.length; i < l; i++) {
	                tmpArray[i] = listenerArray[i];
	            }
	            for (var i = 0, l = tmpArray.length; i < l; i++) {
	                var listener = tmpArray[i];
	                listener.call(listener.context, event);
	            }
	            tmpArray.length = 0;
	        }
	        return this;
	    }
	};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var vec2 = __webpack_require__(11);
	var Body = __webpack_require__(15);

	module.exports = Broadphase;

	/**
	 * Base class for broadphase implementations. Don't use this class directly.
	 * @class Broadphase
	 * @constructor
	 */
	function Broadphase(type) {
	  this.type = type;

	  /**
	   * The resulting overlapping pairs. Will be filled with results during .getCollisionPairs().
	   * @property result
	   * @type {Array}
	   */
	  this.result = [];

	  /**
	   * The world to search for collision pairs in. To change it, use .setWorld()
	   * @property world
	   * @type {World}
	   * @readOnly
	   */
	  this.world = null;

	  /**
	   * The bounding volume type to use in the broadphase algorithms. Should be set to Broadphase.AABB or Broadphase.BOUNDING_CIRCLE.
	   * @property {Number} boundingVolumeType
	   */
	  this.boundingVolumeType = Broadphase.AABB;
	}

	/**
	 * Axis aligned bounding box type.
	 * @static
	 * @property {Number} AABB
	 */
	Broadphase.AABB = 1;

	/**
	 * Bounding circle type.
	 * @static
	 * @property {Number} BOUNDING_CIRCLE
	 */
	Broadphase.BOUNDING_CIRCLE = 2;

	/**
	 * Set the world that we are searching for collision pairs in.
	 * @method setWorld
	 * @param  {World} world
	 */
	Broadphase.prototype.setWorld = function (world) {
	  this.world = world;
	};

	/**
	 * Get all potential intersecting body pairs.
	 * @method getCollisionPairs
	 * @param  {World} world The world to search in.
	 * @return {Array} An array of the bodies, ordered in pairs. Example: A result of [a,b,c,d] means that the potential pairs are: (a,b), (c,d).
	 */
	Broadphase.prototype.getCollisionPairs = function () /*world*/{};

	/**
	 * Check whether the bounding radius of two bodies overlap.
	 * @method  boundingRadiusCheck
	 * @param  {Body} bodyA
	 * @param  {Body} bodyB
	 * @return {Boolean}
	 */
	Broadphase.boundingRadiusCheck = function (bodyA, bodyB) {
	  var d2 = vec2.squaredDistance(bodyA.position, bodyB.position),
	      r = bodyA.boundingRadius + bodyB.boundingRadius;
	  return d2 <= r * r;
	};

	/**
	 * Check whether the AABB of two bodies overlap.
	 * @method  aabbCheck
	 * @param  {Body} bodyA
	 * @param  {Body} bodyB
	 * @return {Boolean}
	 */
	Broadphase.aabbCheck = function (bodyA, bodyB) {
	  return bodyA.getAABB().overlaps(bodyB.getAABB());
	};

	/**
	 * Check whether the bounding volumes of two bodies overlap.
	 * @method  boundingVolumeCheck
	 * @param  {Body} bodyA
	 * @param  {Body} bodyB
	 * @return {Boolean}
	 */
	Broadphase.prototype.boundingVolumeCheck = function (bodyA, bodyB) {
	  var result;

	  switch (this.boundingVolumeType) {
	    case Broadphase.BOUNDING_CIRCLE:
	      result = Broadphase.boundingRadiusCheck(bodyA, bodyB);
	      break;
	    case Broadphase.AABB:
	      result = Broadphase.aabbCheck(bodyA, bodyB);
	      break;
	    default:
	      throw new Error('Bounding volume type not recognized: ' + this.boundingVolumeType);
	  }
	  return result;
	};

	/**
	 * Check whether two bodies are allowed to collide at all.
	 * @method  canCollide
	 * @param  {Body} bodyA
	 * @param  {Body} bodyB
	 * @return {Boolean}
	 */
	Broadphase.canCollide = function (bodyA, bodyB) {
	  var KINEMATIC = Body.KINEMATIC;
	  var STATIC = Body.STATIC;
	  var typeA = bodyA.type;
	  var typeB = bodyB.type;

	  // Cannot collide static bodies
	  if (typeA === STATIC && typeB === STATIC) {
	    return false;
	  }

	  // Cannot collide static vs kinematic bodies
	  if (typeA === KINEMATIC && typeB === STATIC || typeA === STATIC && typeB === KINEMATIC) {
	    return false;
	  }

	  // Cannot collide kinematic vs kinematic
	  if (typeA === KINEMATIC && typeB === KINEMATIC) {
	    return false;
	  }

	  // Cannot collide both sleeping bodies
	  if (bodyA.sleepState === Body.SLEEPING && bodyB.sleepState === Body.SLEEPING) {
	    return false;
	  }

	  // Cannot collide if one is static and the other is sleeping
	  if (bodyA.sleepState === Body.SLEEPING && typeB === STATIC || bodyB.sleepState === Body.SLEEPING && typeA === STATIC) {
	    return false;
	  }

	  return true;
	};

	Broadphase.NAIVE = 1;
	Broadphase.SAP = 2;

	/**
	 * Returns all the bodies within an AABB.
	 * @method aabbQuery
	 * @param  {World} world
	 * @param  {AABB} aabb
	 * @param {array} result An array to store resulting bodies in.
	 * @return {array}
	 */
	Broadphase.prototype.aabbQuery = function () /*world, aabb, result*/{
	  // To be implemented in subclasses
	};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Shape = __webpack_require__(22),
	    shallowClone = __webpack_require__(12).shallowClone,
	    vec2 = __webpack_require__(11);

	module.exports = Capsule;

	/**
	 * Capsule shape.
	 * @class Capsule
	 * @constructor
	 * @extends Shape
	 * @param {object} [options] (Note that this options object will be passed on to the {{#crossLink "Shape"}}{{/crossLink}} constructor.)
	 * @param {Number} [options.length=1] The distance between the end points, extends along the X axis.
	 * @param {Number} [options.radius=1] Radius of the capsule.
	 * @example
	 *     var body = new Body({ mass: 1 });
	 *     var capsuleShape = new Capsule({
	 *         length: 1,
	 *         radius: 2
	 *     });
	 *     body.addShape(capsuleShape);
	 */
	function Capsule(options) {
	    options = options ? shallowClone(options) : {};

	    /**
	     * The distance between the end points.
	     * @property {Number} length
	     */
	    this.length = options.length !== undefined ? options.length : 1;

	    /**
	     * The radius of the capsule.
	     * @property {Number} radius
	     */
	    this.radius = options.radius !== undefined ? options.radius : 1;

	    options.type = Shape.CAPSULE;
	    Shape.call(this, options);
	}
	Capsule.prototype = new Shape();
	Capsule.prototype.constructor = Capsule;

	/**
	 * Compute the mass moment of inertia of the Capsule.
	 * @method conputeMomentOfInertia
	 * @return {Number}
	 * @todo
	 */
	Capsule.prototype.computeMomentOfInertia = function () {
	    // http://www.efunda.com/math/areas/rectangle.cfm
	    function boxI(w, h) {
	        return w * h * (Math.pow(w, 2) + Math.pow(h, 2)) / 12;
	    }
	    function semiA(r) {
	        return Math.PI * Math.pow(r, 2) / 2;
	    }
	    // http://www.efunda.com/math/areas/CircleHalf.cfm
	    function semiI(r) {
	        return (Math.PI / 4 - 8 / (9 * Math.PI)) * Math.pow(r, 4);
	    }
	    function semiC(r) {
	        return 4 * r / (3 * Math.PI);
	    }
	    // https://en.wikipedia.org/wiki/Second_moment_of_area#Parallel_axis_theorem
	    function capsuleA(l, r) {
	        return l * 2 * r + Math.PI * Math.pow(r, 2);
	    }
	    function capsuleI(l, r) {
	        var d = l / 2 + semiC(r);
	        return boxI(l, 2 * r) + 2 * (semiI(r) + semiA(r) * Math.pow(d, 2));
	    }
	    var r = this.radius,
	        l = this.length,
	        area = capsuleA(l, r);
	    return area > 0 ? capsuleI(l, r) / area : 0;
	};

	/**
	 * @method updateBoundingRadius
	 */
	Capsule.prototype.updateBoundingRadius = function () {
	    this.boundingRadius = this.radius + this.length / 2;
	};

	/**
	 * @method updateArea
	 */
	Capsule.prototype.updateArea = function () {
	    this.area = Math.PI * this.radius * this.radius + this.radius * 2 * this.length;
	};

	var r = vec2.create();

	/**
	 * @method computeAABB
	 * @param  {AABB}   out      The resulting AABB.
	 * @param  {Array}  position
	 * @param  {Number} angle
	 */
	Capsule.prototype.computeAABB = function (out, position, angle) {
	    var radius = this.radius;

	    // Compute center position of one of the the circles, world oriented, but with local offset
	    vec2.set(r, this.length / 2, 0);
	    if (angle !== 0) {
	        vec2.rotate(r, r, angle);
	    }

	    // Get bounds
	    vec2.set(out.upperBound, Math.max(r[0] + radius, -r[0] + radius), Math.max(r[1] + radius, -r[1] + radius));
	    vec2.set(out.lowerBound, Math.min(r[0] - radius, -r[0] - radius), Math.min(r[1] - radius, -r[1] - radius));

	    // Add offset
	    vec2.add(out.lowerBound, out.lowerBound, position);
	    vec2.add(out.upperBound, out.upperBound, position);
	};

	var intersectCapsule_hitPointWorld = vec2.create();
	var intersectCapsule_normal = vec2.create();
	var intersectCapsule_l0 = vec2.create();
	var intersectCapsule_l1 = vec2.create();
	var intersectCapsule_unit_y = vec2.fromValues(0, 1);

	/**
	 * @method raycast
	 * @param  {RaycastResult} result
	 * @param  {Ray} ray
	 * @param  {array} position
	 * @param  {number} angle
	 */
	Capsule.prototype.raycast = function (result, ray, position, angle) {
	    var from = ray.from;
	    var to = ray.to;

	    var hitPointWorld = intersectCapsule_hitPointWorld;
	    var normal = intersectCapsule_normal;
	    var l0 = intersectCapsule_l0;
	    var l1 = intersectCapsule_l1;

	    // The sides
	    var halfLen = this.length / 2;
	    for (var i = 0; i < 2; i++) {

	        // get start and end of the line
	        var y = this.radius * (i * 2 - 1);
	        vec2.set(l0, -halfLen, y);
	        vec2.set(l1, halfLen, y);
	        vec2.toGlobalFrame(l0, l0, position, angle);
	        vec2.toGlobalFrame(l1, l1, position, angle);

	        var delta = vec2.getLineSegmentsIntersectionFraction(from, to, l0, l1);
	        if (delta >= 0) {
	            vec2.rotate(normal, intersectCapsule_unit_y, angle);
	            vec2.scale(normal, normal, i * 2 - 1);
	            ray.reportIntersection(result, delta, normal, -1);
	            if (result.shouldStop(ray)) {
	                return;
	            }
	        }
	    }

	    // Circles
	    var diagonalLengthSquared = Math.pow(this.radius, 2) + Math.pow(halfLen, 2);
	    for (var i = 0; i < 2; i++) {
	        vec2.set(l0, halfLen * (i * 2 - 1), 0);
	        vec2.toGlobalFrame(l0, l0, position, angle);

	        var a = Math.pow(to[0] - from[0], 2) + Math.pow(to[1] - from[1], 2);
	        var b = 2 * ((to[0] - from[0]) * (from[0] - l0[0]) + (to[1] - from[1]) * (from[1] - l0[1]));
	        var c = Math.pow(from[0] - l0[0], 2) + Math.pow(from[1] - l0[1], 2) - Math.pow(this.radius, 2);
	        var delta = Math.pow(b, 2) - 4 * a * c;

	        if (delta < 0) {
	            // No intersection
	            continue;
	        } else if (delta === 0) {
	            // single intersection point
	            vec2.lerp(hitPointWorld, from, to, delta);

	            if (vec2.squaredDistance(hitPointWorld, position) > diagonalLengthSquared) {
	                vec2.subtract(normal, hitPointWorld, l0);
	                vec2.normalize(normal, normal);
	                ray.reportIntersection(result, delta, normal, -1);
	                if (result.shouldStop(ray)) {
	                    return;
	                }
	            }
	        } else {
	            var sqrtDelta = Math.sqrt(delta);
	            var inv2a = 1 / (2 * a);
	            var d1 = (-b - sqrtDelta) * inv2a;
	            var d2 = (-b + sqrtDelta) * inv2a;

	            if (d1 >= 0 && d1 <= 1) {
	                vec2.lerp(hitPointWorld, from, to, d1);
	                if (vec2.squaredDistance(hitPointWorld, position) > diagonalLengthSquared) {
	                    vec2.subtract(normal, hitPointWorld, l0);
	                    vec2.normalize(normal, normal);
	                    ray.reportIntersection(result, d1, normal, -1);
	                    if (result.shouldStop(ray)) {
	                        return;
	                    }
	                }
	            }

	            if (d2 >= 0 && d2 <= 1) {
	                vec2.lerp(hitPointWorld, from, to, d2);
	                if (vec2.squaredDistance(hitPointWorld, position) > diagonalLengthSquared) {
	                    vec2.subtract(normal, hitPointWorld, l0);
	                    vec2.normalize(normal, normal);
	                    ray.reportIntersection(result, d2, normal, -1);
	                    if (result.shouldStop(ray)) {
	                        return;
	                    }
	                }
	            }
	        }
	    }
	};

	Capsule.prototype.pointTest = function (localPoint) {
	    var radius = this.radius;
	    var halfLength = this.length * 0.5;

	    if (Math.abs(localPoint[0]) <= halfLength && Math.abs(localPoint[1]) <= radius) {
	        return true;
	    }

	    if (Math.pow(localPoint[0] - halfLength, 2) + Math.pow(localPoint[1], 2) <= radius * radius) {
	        return true;
	    }

	    if (Math.pow(localPoint[0] + halfLength, 2) + Math.pow(localPoint[1], 2) <= radius * radius) {
	        return true;
	    }

	    return false;
	};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Shape = __webpack_require__(22),
	    vec2 = __webpack_require__(11),
	    shallowClone = __webpack_require__(12).shallowClone;

	module.exports = Circle;

	/**
	 * Circle shape class.
	 * @class Circle
	 * @extends Shape
	 * @constructor
	 * @param {options} [options] (Note that this options object will be passed on to the {{#crossLink "Shape"}}{{/crossLink}} constructor.)
	 * @param {number} [options.radius=1] The radius of this circle
	 *
	 * @example
	 *     var body = new Body({ mass: 1 });
	 *     var circleShape = new Circle({
	 *         radius: 1
	 *     });
	 *     body.addShape(circleShape);
	 */
	function Circle(options) {
	    options = options ? shallowClone(options) : {};

	    /**
	     * The radius of the circle.
	     * @property radius
	     * @type {number}
	     */
	    this.radius = options.radius !== undefined ? options.radius : 1;

	    options.type = Shape.CIRCLE;
	    Shape.call(this, options);
	}
	Circle.prototype = new Shape();
	Circle.prototype.constructor = Circle;

	/**
	 * @method computeMomentOfInertia
	 * @return {Number}
	 */
	Circle.prototype.computeMomentOfInertia = function () {
	    var r = this.radius;
	    return r * r / 2;
	};

	/**
	 * @method updateBoundingRadius
	 * @return {Number}
	 */
	Circle.prototype.updateBoundingRadius = function () {
	    this.boundingRadius = this.radius;
	};

	/**
	 * @method updateArea
	 * @return {Number}
	 */
	Circle.prototype.updateArea = function () {
	    this.area = Math.PI * this.radius * this.radius;
	};

	/**
	 * @method computeAABB
	 * @param  {AABB}   out      The resulting AABB.
	 * @param  {Array}  position
	 * @param  {Number} angle
	 */
	Circle.prototype.computeAABB = function (out, position /*, angle*/) {
	    var r = this.radius;
	    vec2.set(out.upperBound, r, r);
	    vec2.set(out.lowerBound, -r, -r);
	    if (position) {
	        vec2.add(out.lowerBound, out.lowerBound, position);
	        vec2.add(out.upperBound, out.upperBound, position);
	    }
	};

	var Ray_intersectSphere_intersectionPoint = vec2.create();
	var Ray_intersectSphere_normal = vec2.create();

	/**
	 * @method raycast
	 * @param  {RaycastResult} result
	 * @param  {Ray} ray
	 * @param  {array} position
	 * @param  {number} angle
	 */
	Circle.prototype.raycast = function (result, ray, position /*, angle*/) {
	    var from = ray.from,
	        to = ray.to,
	        r = this.radius;

	    var a = Math.pow(to[0] - from[0], 2) + Math.pow(to[1] - from[1], 2);
	    var b = 2 * ((to[0] - from[0]) * (from[0] - position[0]) + (to[1] - from[1]) * (from[1] - position[1]));
	    var c = Math.pow(from[0] - position[0], 2) + Math.pow(from[1] - position[1], 2) - Math.pow(r, 2);
	    var delta = Math.pow(b, 2) - 4 * a * c;

	    var intersectionPoint = Ray_intersectSphere_intersectionPoint;
	    var normal = Ray_intersectSphere_normal;

	    if (delta < 0) {
	        // No intersection
	        return;
	    } else if (delta === 0) {
	        // single intersection point
	        vec2.lerp(intersectionPoint, from, to, delta);

	        vec2.subtract(normal, intersectionPoint, position);
	        vec2.normalize(normal, normal);

	        ray.reportIntersection(result, delta, normal, -1);
	    } else {
	        var sqrtDelta = Math.sqrt(delta);
	        var inv2a = 1 / (2 * a);
	        var d1 = (-b - sqrtDelta) * inv2a;
	        var d2 = (-b + sqrtDelta) * inv2a;

	        if (d1 >= 0 && d1 <= 1) {
	            vec2.lerp(intersectionPoint, from, to, d1);

	            vec2.subtract(normal, intersectionPoint, position);
	            vec2.normalize(normal, normal);

	            ray.reportIntersection(result, d1, normal, -1);

	            if (result.shouldStop(ray)) {
	                return;
	            }
	        }

	        if (d2 >= 0 && d2 <= 1) {
	            vec2.lerp(intersectionPoint, from, to, d2);

	            vec2.subtract(normal, intersectionPoint, position);
	            vec2.normalize(normal, normal);

	            ray.reportIntersection(result, d2, normal, -1);
	        }
	    }
	};

	Circle.prototype.pointTest = function (localPoint) {
	    var radius = this.radius;
	    return vec2.squaredLength(localPoint) <= radius * radius;
	};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = Constraint;

	/**
	 * Base constraint class.
	 *
	 * @class Constraint
	 * @constructor
	 * @author schteppe
	 * @param {Body} bodyA
	 * @param {Body} bodyB
	 * @param {Number} type
	 * @param {Object} [options]
	 * @param {Object} [options.collideConnected=true]
	 */
	function Constraint(bodyA, bodyB, type, options) {
	  options = options || {};

	  /**
	   * The type of constraint. May be one of Constraint.DISTANCE, Constraint.GEAR, Constraint.LOCK, Constraint.PRISMATIC or Constraint.REVOLUTE.
	   * @property {number} type
	   */
	  this.type = type;

	  /**
	   * Equations to be solved in this constraint
	   *
	   * @property equations
	   * @type {Array}
	   */
	  this.equations = [];

	  /**
	   * First body participating in the constraint.
	   * @property bodyA
	   * @type {Body}
	   */
	  this.bodyA = bodyA;

	  /**
	   * Second body participating in the constraint.
	   * @property bodyB
	   * @type {Body}
	   */
	  this.bodyB = bodyB;

	  /**
	   * Set to true if you want the connected bodies to collide.
	   * @property collideConnected
	   * @type {Boolean}
	   * @default true
	   */
	  this.collideConnected = options.collideConnected !== undefined ? options.collideConnected : true;

	  // Wake up bodies when connected
	  if (options.wakeUpBodies !== false) {
	    if (bodyA) {
	      bodyA.wakeUp();
	    }
	    if (bodyB) {
	      bodyB.wakeUp();
	    }
	  }
	}

	/**
	 * Updates the internal constraint parameters before solve.
	 * @method update
	 */
	Constraint.prototype.update = function () {
	  throw new Error("method update() not implmemented in this Constraint subclass!");
	};

	/**
	 * @static
	 * @property {number} DISTANCE
	 */
	Constraint.DISTANCE = 1;

	/**
	 * @static
	 * @property {number} GEAR
	 */
	Constraint.GEAR = 2;

	/**
	 * @static
	 * @property {number} LOCK
	 */
	Constraint.LOCK = 3;

	/**
	 * @static
	 * @property {number} PRISMATIC
	 */
	Constraint.PRISMATIC = 4;

	/**
	 * @static
	 * @property {number} REVOLUTE
	 */
	Constraint.REVOLUTE = 5;

	/**
	 * Set stiffness for this constraint.
	 * @method setStiffness
	 * @param {Number} stiffness
	 */
	Constraint.prototype.setStiffness = function (stiffness) {
	  var eqs = this.equations;
	  for (var i = 0; i !== eqs.length; i++) {
	    var eq = eqs[i];
	    eq.stiffness = stiffness;
	    eq.needsUpdate = true;
	  }
	};

	/**
	 * Set relaxation for this constraint.
	 * @method setRelaxation
	 * @param {Number} relaxation
	 */
	Constraint.prototype.setRelaxation = function (relaxation) {
	  var eqs = this.equations;
	  for (var i = 0; i !== eqs.length; i++) {
	    var eq = eqs[i];
	    eq.relaxation = relaxation;
	    eq.needsUpdate = true;
	  }
	};

	/**
	 * @method setMaxBias
	 * @param {Number} maxBias
	 */
	Constraint.prototype.setMaxBias = function (maxBias) {
	  var eqs = this.equations;
	  for (var i = 0; i !== eqs.length; i++) {
	    var eq = eqs[i];
	    eq.maxBias = maxBias;
	  }
	};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var Equation = __webpack_require__(14),
	    vec2 = __webpack_require__(11);

	module.exports = ContactEquation;

	/**
	 * Non-penetration constraint equation. Tries to make the contactPointA and contactPointB vectors coincide, while keeping the applied force repulsive.
	 *
	 * @class ContactEquation
	 * @constructor
	 * @extends Equation
	 * @param {Body} bodyA
	 * @param {Body} bodyB
	 */
	function ContactEquation(bodyA, bodyB) {
	  Equation.call(this, bodyA, bodyB, 0, Number.MAX_VALUE);

	  /**
	   * Vector from body i center of mass to the contact point.
	   * @property contactPointA
	   * @type {Array}
	   */
	  this.contactPointA = vec2.create();
	  this.penetrationVec = vec2.create();

	  /**
	   * World-oriented vector from body A center of mass to the contact point.
	   * @property contactPointB
	   * @type {Array}
	   */
	  this.contactPointB = vec2.create();

	  /**
	   * The normal vector, pointing out of body i
	   * @property normalA
	   * @type {Array}
	   */
	  this.normalA = vec2.create();

	  /**
	   * The restitution to use (0=no bounciness, 1=max bounciness).
	   * @property restitution
	   * @type {Number}
	   */
	  this.restitution = 0;

	  /**
	   * This property is set to true if this is the first impact between the bodies (not persistant contact).
	   * @property firstImpact
	   * @type {Boolean}
	   * @readOnly
	   */
	  this.firstImpact = false;

	  /**
	   * The shape in body i that triggered this contact.
	   * @property shapeA
	   * @type {Shape}
	   */
	  this.shapeA = null;

	  /**
	   * The shape in body j that triggered this contact.
	   * @property shapeB
	   * @type {Shape}
	   */
	  this.shapeB = null;
	}
	ContactEquation.prototype = new Equation();
	ContactEquation.prototype.constructor = ContactEquation;
	ContactEquation.prototype.computeB = function (a, b, h) {
	  var bi = this.bodyA,
	      bj = this.bodyB,
	      ri = this.contactPointA,
	      rj = this.contactPointB,
	      xi = bi.position,
	      xj = bj.position;

	  var n = this.normalA,
	      G = this.G;

	  // Caluclate cross products
	  var rixn = vec2.crossLength(ri, n),
	      rjxn = vec2.crossLength(rj, n);

	  // G = [-n -rixn n rjxn]
	  G[0] = -n[0];
	  G[1] = -n[1];
	  G[2] = -rixn;
	  G[3] = n[0];
	  G[4] = n[1];
	  G[5] = rjxn;

	  // Compute iteration
	  var GW, Gq;
	  if (this.firstImpact && this.restitution !== 0) {
	    Gq = 0;
	    GW = 1 / b * (1 + this.restitution) * this.computeGW();
	  } else {
	    // Calculate q = xj+rj -(xi+ri) i.e. the penetration vector
	    var penetrationVec = this.penetrationVec;
	    addSubSub(penetrationVec, xj, rj, xi, ri);
	    Gq = vec2.dot(n, penetrationVec) + this.offset;
	    GW = this.computeGW();
	  }

	  var GiMf = this.computeGiMf();
	  var B = -Gq * a - GW * b - h * GiMf;

	  return B;
	};

	function addSubSub(out, a, b, c, d) {
	  out[0] = a[0] + b[0] - c[0] - d[0];
	  out[1] = a[1] + b[1] - c[1] - d[1];
	}

	var vi = vec2.create();
	var vj = vec2.create();
	var relVel = vec2.create();

	/**
	 * Get the relative velocity along the normal vector.
	 * @method getVelocityAlongNormal
	 * @return {number}
	 */
	ContactEquation.prototype.getVelocityAlongNormal = function () {

	  this.bodyA.getVelocityAtPoint(vi, this.contactPointA);
	  this.bodyB.getVelocityAtPoint(vj, this.contactPointB);

	  vec2.subtract(relVel, vi, vj);

	  return vec2.dot(this.normalA, relVel);
	};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var ContactEquation = __webpack_require__(31);
	var Pool = __webpack_require__(33);

	module.exports = ContactEquationPool;

	/**
	 * @class
	 */
	function ContactEquationPool() {
	  Pool.apply(this, arguments);
	}
	ContactEquationPool.prototype = new Pool();
	ContactEquationPool.prototype.constructor = ContactEquationPool;

	/**
	 * @method create
	 * @return {ContactEquation}
	 */
	ContactEquationPool.prototype.create = function () {
	  return new ContactEquation();
	};

	/**
	 * @method destroy
	 * @param {ContactEquation} equation
	 * @return {ContactEquationPool}
	 */
	ContactEquationPool.prototype.destroy = function (equation) {
	  equation.bodyA = equation.bodyB = null;
	  return this;
	};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = Pool;

	/**
	 * Object pooling utility.
	 * @class Pool
	 * @constructor
	 */
	function Pool(options) {
	  options = options || {};

	  /**
	     * @property {Array} objects
	     * @type {Array}
	     */
	  this.objects = [];

	  if (options.size !== undefined) {
	    this.resize(options.size);
	  }
	}

	/**
	 * @method resize
	 * @param {number} size
	 * @return {Pool} Self, for chaining
	 */
	Pool.prototype.resize = function (size) {
	  var objects = this.objects;

	  while (objects.length > size) {
	    objects.pop();
	  }

	  while (objects.length < size) {
	    objects.push(this.create());
	  }

	  return this;
	};

	/**
	 * Get an object from the pool or create a new instance.
	 * @method get
	 * @return {Object}
	 */
	Pool.prototype.get = function () {
	  var objects = this.objects;
	  return objects.length ? objects.pop() : this.create();
	};

	/**
	 * Clean up and put the object back into the pool for later use.
	 * @method release
	 * @param {Object} object
	 * @return {Pool} Self for chaining
	 */
	Pool.prototype.release = function (object) {
	  this.destroy(object);
	  this.objects.push(object);
	  return this;
	};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Material = __webpack_require__(35);
	var Equation = __webpack_require__(14);

	module.exports = ContactMaterial;

	/**
	 * Defines what happens when two materials meet, such as what friction coefficient to use. You can also set other things such as restitution, surface velocity and constraint parameters. Also see {{#crossLink "Material"}}{{/crossLink}}.
	 * @class ContactMaterial
	 * @constructor
	 * @param {Material} materialA
	 * @param {Material} materialB
	 * @param {Object}   [options]
	 * @param {Number}   [options.friction=0.3]       Friction coefficient.
	 * @param {Number}   [options.frictionRelaxation] FrictionEquation relaxation.
	 * @param {Number}   [options.frictionStiffness]  FrictionEquation stiffness.
	 * @param {Number}   [options.relaxation]         ContactEquation relaxation.
	 * @param {Number}   [options.restitution=0]      Restitution coefficient aka "bounciness".
	 * @param {Number}   [options.stiffness]          ContactEquation stiffness.
	 * @param {Number}   [options.surfaceVelocity=0]  Surface velocity.
	 * @author schteppe
	 * @example
	 *     var ice = new Material();
	 *     var wood = new Material();
	 *     var iceWoodContactMaterial = new ContactMaterial(ice, wood, {
	 *         friction: 0.2,
	 *         restitution: 0.3
	 *     });
	 *     world.addContactMaterial(iceWoodContactMaterial);
	 */
	function ContactMaterial(materialA, materialB, options) {
	  options = options || {};

	  if (!(materialA instanceof Material) || !(materialB instanceof Material)) {
	    throw new Error("First two arguments must be Material instances.");
	  }

	  /**
	   * The contact material identifier. Read only.
	   * @readonly
	   * @property id
	   * @type {Number}
	   */
	  this.id = ContactMaterial.idCounter++;

	  /**
	   * First material participating in the contact material
	   * @property materialA
	   * @type {Material}
	   */
	  this.materialA = materialA;

	  /**
	   * Second material participating in the contact material
	   * @property materialB
	   * @type {Material}
	   */
	  this.materialB = materialB;

	  /**
	   * Friction coefficient to use in the contact of these two materials. Friction = 0 will make the involved objects super slippery, and friction = 1 will make it much less slippery. A friction coefficient larger than 1 will allow for very large friction forces, which can be convenient for preventing car tires not slip on the ground.
	   * @property friction
	   * @type {Number}
	   * @default 0.3
	   */
	  this.friction = options.friction !== undefined ? options.friction : 0.3;

	  /**
	   * Restitution, or "bounciness" to use in the contact of these two materials. A restitution of 0 will make no bounce, while restitution=1 will approximately bounce back with the same velocity the object came with.
	   * @property restitution
	   * @type {Number}
	   * @default 0
	   */
	  this.restitution = options.restitution !== undefined ? options.restitution : 0;

	  /**
	   * Hardness of the contact. Less stiffness will make the objects penetrate more, and will make the contact act more like a spring than a contact force. Default value is {{#crossLink "Equation/DEFAULT_STIFFNESS:property"}}Equation.DEFAULT_STIFFNESS{{/crossLink}}.
	   * @property stiffness
	   * @type {Number}
	   */
	  this.stiffness = options.stiffness !== undefined ? options.stiffness : Equation.DEFAULT_STIFFNESS;

	  /**
	   * Relaxation of the resulting ContactEquation that this ContactMaterial generate. Default value is {{#crossLink "Equation/DEFAULT_RELAXATION:property"}}Equation.DEFAULT_RELAXATION{{/crossLink}}.
	   * @property relaxation
	   * @type {Number}
	   */
	  this.relaxation = options.relaxation !== undefined ? options.relaxation : Equation.DEFAULT_RELAXATION;

	  /**
	   * Stiffness of the resulting friction force. For most cases, the value of this property should be a large number. I cannot think of any case where you would want less frictionStiffness. Default value is {{#crossLink "Equation/DEFAULT_STIFFNESS:property"}}Equation.DEFAULT_STIFFNESS{{/crossLink}}.
	   * @property frictionStiffness
	   * @type {Number}
	   */
	  this.frictionStiffness = options.frictionStiffness !== undefined ? options.frictionStiffness : Equation.DEFAULT_STIFFNESS;

	  /**
	   * Relaxation of the resulting friction force. The default value should be good for most simulations. Default value is {{#crossLink "Equation/DEFAULT_RELAXATION:property"}}Equation.DEFAULT_RELAXATION{{/crossLink}}.
	   * @property frictionRelaxation
	   * @type {Number}
	   */
	  this.frictionRelaxation = options.frictionRelaxation !== undefined ? options.frictionRelaxation : Equation.DEFAULT_RELAXATION;

	  /**
	   * Will add surface velocity to this material. If bodyA rests on top if bodyB, and the surface velocity is positive, bodyA will slide to the right.
	   * @property {Number} surfaceVelocity
	   * @default 0
	   */
	  this.surfaceVelocity = options.surfaceVelocity !== undefined ? options.surfaceVelocity : 0;

	  /**
	   * Offset to be set on ContactEquations. A positive value will make the bodies penetrate more into each other. Can be useful in scenes where contacts need to be more persistent, for example when stacking. Aka "cure for nervous contacts".
	   * @property contactSkinSize
	   * @type {Number}
	   */
	  this.contactSkinSize = 0.005;
	}

	ContactMaterial.idCounter = 0;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = Material;

	/**
	 * Defines a physics material. To be used with {{#crossLink "ContactMaterial"}}{{/crossLink}}.
	 * @class Material
	 * @constructor
	 * @author schteppe
	 * @example
	 *     // Create a wooden box
	 *     var woodMaterial = new Material();
	 *     var boxShape = new Box({
	 *         material: woodMaterial
	 *     });
	 *     body.addShape(boxShape);
	 */
	function Material() {

	  /**
	   * The material identifier. Read only.
	   * @readonly
	   * @property id
	   * @type {Number}
	   */
	  this.id = Material.idCounter++;
	}

	Material.idCounter = 0;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Constraint = __webpack_require__(30),
	    Equation = __webpack_require__(14),
	    vec2 = __webpack_require__(11);

	module.exports = DistanceConstraint;

	/**
	 * Constraint that tries to keep the distance between two bodies constant.
	 *
	 * @class DistanceConstraint
	 * @constructor
	 * @author schteppe
	 * @param {Body} bodyA
	 * @param {Body} bodyB
	 * @param {object} [options]
	 * @param {number} [options.distance] The distance to keep between the anchor points. Defaults to the current distance between the bodies.
	 * @param {Array} [options.localAnchorA] The anchor point for bodyA, defined locally in bodyA frame. Defaults to [0,0].
	 * @param {Array} [options.localAnchorB] The anchor point for bodyB, defined locally in bodyB frame. Defaults to [0,0].
	 * @param {object} [options.maxForce=Number.MAX_VALUE] Maximum force to apply.
	 * @extends Constraint
	 *
	 * @example
	 *     // If distance is not given as an option, then the current distance between the bodies is used.
	 *     // In this example, the bodies will be constrained to have a distance of 2 between their centers.
	 *     var bodyA = new Body({ mass: 1, position: [-1, 0] });
	 *     var bodyB = new Body({ mass: 1, position: [1, 0] });
	 *     var constraint = new DistanceConstraint(bodyA, bodyB);
	 *     world.addConstraint(constraint);
	 *
	 * @example
	 *     // Manually set the distance and anchors
	 *     var constraint = new DistanceConstraint(bodyA, bodyB, {
	 *         distance: 1,          // Distance to keep between the points
	 *         localAnchorA: [1, 0], // Point on bodyA
	 *         localAnchorB: [-1, 0] // Point on bodyB
	 *     });
	 *     world.addConstraint(constraint);
	 */
	function DistanceConstraint(bodyA, bodyB, options) {
	  options = options || {};

	  Constraint.call(this, bodyA, bodyB, Constraint.DISTANCE, options);

	  /**
	   * Local anchor in body A.
	   * @property localAnchorA
	   * @type {Array}
	   */
	  this.localAnchorA = options.localAnchorA ? vec2.clone(options.localAnchorA) : vec2.create();

	  /**
	   * Local anchor in body B.
	   * @property localAnchorB
	   * @type {Array}
	   */
	  this.localAnchorB = options.localAnchorB ? vec2.clone(options.localAnchorB) : vec2.create();

	  var localAnchorA = this.localAnchorA;
	  var localAnchorB = this.localAnchorB;

	  /**
	   * The distance to keep.
	   * @property distance
	   * @type {Number}
	   */
	  this.distance = 0;

	  if (typeof options.distance === 'number') {
	    this.distance = options.distance;
	  } else {
	    // Use the current world distance between the world anchor points.
	    var worldAnchorA = vec2.create(),
	        worldAnchorB = vec2.create(),
	        r = vec2.create();

	    // Transform local anchors to world
	    vec2.rotate(worldAnchorA, localAnchorA, bodyA.angle);
	    vec2.rotate(worldAnchorB, localAnchorB, bodyB.angle);

	    vec2.add(r, bodyB.position, worldAnchorB);
	    vec2.subtract(r, r, worldAnchorA);
	    vec2.subtract(r, r, bodyA.position);

	    this.distance = vec2.length(r);
	  }

	  var maxForce;
	  if (typeof options.maxForce === "undefined") {
	    maxForce = Number.MAX_VALUE;
	  } else {
	    maxForce = options.maxForce;
	  }

	  var normal = new Equation(bodyA, bodyB, -maxForce, maxForce); // Just in the normal direction
	  this.equations = [normal];

	  /**
	   * Max force to apply.
	   * @property {number} maxForce
	   */
	  this.maxForce = maxForce;

	  // g = (xi - xj).dot(n)
	  // dg/dt = (vi - vj).dot(n) = G*W = [n 0 -n 0] * [vi wi vj wj]'

	  // ...and if we were to include offset points:
	  // g =
	  //      (xj + rj - xi - ri).dot(n) - distance
	  //
	  // dg/dt =
	  //      (vj + wj x rj - vi - wi x ri).dot(n) =
	  //      { term 2 is near zero } =
	  //      [-n   -ri x n   n   rj x n] * [vi wi vj wj]' =
	  //      G * W
	  //
	  // => G = [-n -rixn n rjxn]

	  var r = vec2.create();
	  var ri = vec2.create(); // worldAnchorA
	  var rj = vec2.create(); // worldAnchorB
	  var that = this;
	  normal.computeGq = function () {
	    var bodyA = this.bodyA,
	        bodyB = this.bodyB,
	        xi = bodyA.position,
	        xj = bodyB.position;

	    // Transform local anchors to world
	    vec2.rotate(ri, localAnchorA, bodyA.angle);
	    vec2.rotate(rj, localAnchorB, bodyB.angle);

	    vec2.add(r, xj, rj);
	    vec2.subtract(r, r, ri);
	    vec2.subtract(r, r, xi);

	    //vec2.subtract(r, bodyB.position, bodyA.position);
	    return vec2.length(r) - that.distance;
	  };

	  // Make the contact constraint bilateral
	  this.setMaxForce(maxForce);

	  /**
	   * If the upper limit is enabled or not.
	   * @property {Boolean} upperLimitEnabled
	   */
	  this.upperLimitEnabled = false;

	  /**
	   * The upper constraint limit.
	   * @property {number} upperLimit
	   */
	  this.upperLimit = 1;

	  /**
	   * If the lower limit is enabled or not.
	   * @property {Boolean} lowerLimitEnabled
	   */
	  this.lowerLimitEnabled = false;

	  /**
	   * The lower constraint limit.
	   * @property {number} lowerLimit
	   */
	  this.lowerLimit = 0;

	  /**
	   * Current constraint position. This is equal to the current distance between the world anchor points.
	   * @property {number} position
	   */
	  this.position = 0;
	}
	DistanceConstraint.prototype = new Constraint();
	DistanceConstraint.prototype.constructor = DistanceConstraint;

	/**
	 * Update the constraint equations. Should be done if any of the bodies changed position, before solving.
	 * @method update
	 */
	var n = vec2.create();
	var ri = vec2.create(); // worldAnchorA
	var rj = vec2.create(); // worldAnchorB
	DistanceConstraint.prototype.update = function () {
	  var normal = this.equations[0],
	      bodyA = this.bodyA,
	      bodyB = this.bodyB,
	      xi = bodyA.position,
	      xj = bodyB.position,
	      normalEquation = this.equations[0],
	      G = normal.G;

	  // Transform local anchors to world
	  vec2.rotate(ri, this.localAnchorA, bodyA.angle);
	  vec2.rotate(rj, this.localAnchorB, bodyB.angle);

	  // Get world anchor points and normal
	  vec2.add(n, xj, rj);
	  vec2.subtract(n, n, ri);
	  vec2.subtract(n, n, xi);
	  this.position = vec2.length(n);

	  var violating = false;
	  if (this.upperLimitEnabled) {
	    if (this.position > this.upperLimit) {
	      normalEquation.maxForce = 0;
	      normalEquation.minForce = -this.maxForce;
	      this.distance = this.upperLimit;
	      violating = true;
	    }
	  }

	  if (this.lowerLimitEnabled) {
	    if (this.position < this.lowerLimit) {
	      normalEquation.maxForce = this.maxForce;
	      normalEquation.minForce = 0;
	      this.distance = this.lowerLimit;
	      violating = true;
	    }
	  }

	  if ((this.lowerLimitEnabled || this.upperLimitEnabled) && !violating) {
	    // No constraint needed.
	    normalEquation.enabled = false;
	    return;
	  }

	  normalEquation.enabled = true;

	  vec2.normalize(n, n);

	  // Caluclate cross products
	  var rixn = vec2.crossLength(ri, n),
	      rjxn = vec2.crossLength(rj, n);

	  // G = [-n -rixn n rjxn]
	  G[0] = -n[0];
	  G[1] = -n[1];
	  G[2] = -rixn;
	  G[3] = n[0];
	  G[4] = n[1];
	  G[5] = rjxn;
	};

	/**
	 * Set the max force to be used
	 * @method setMaxForce
	 * @param {Number} maxForce
	 */
	DistanceConstraint.prototype.setMaxForce = function (maxForce) {
	  var normal = this.equations[0];
	  normal.minForce = -maxForce;
	  normal.maxForce = maxForce;
	};

	/**
	 * Get the max force
	 * @method getMaxForce
	 * @return {Number}
	 */
	DistanceConstraint.prototype.getMaxForce = function () {
	  var normal = this.equations[0];
	  return normal.maxForce;
	};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var vec2 = __webpack_require__(11),
	    Equation = __webpack_require__(14);

	module.exports = FrictionEquation;

	/**
	 * Constrains the slipping in a contact along a tangent
	 *
	 * @class FrictionEquation
	 * @constructor
	 * @param {Body} bodyA
	 * @param {Body} bodyB
	 * @param {Number} slipForce
	 * @extends Equation
	 */
	function FrictionEquation(bodyA, bodyB, slipForce) {
	  Equation.call(this, bodyA, bodyB, -slipForce, slipForce);

	  /**
	   * Relative vector from center of body A to the contact point, world oriented.
	   * @property contactPointA
	   * @type {Array}
	   */
	  this.contactPointA = vec2.create();

	  /**
	   * Relative vector from center of body B to the contact point, world oriented.
	   * @property contactPointB
	   * @type {Array}
	   */
	  this.contactPointB = vec2.create();

	  /**
	   * Tangent vector that the friction force will act along. World oriented.
	   * @property t
	   * @type {Array}
	   */
	  this.t = vec2.create();

	  /**
	   * ContactEquations connected to this friction equation. The contact equations can be used to rescale the max force for the friction. If more than one contact equation is given, then the max force can be set to the average.
	   * @property contactEquations
	   * @type {ContactEquation}
	   */
	  this.contactEquations = [];

	  /**
	   * The shape in body i that triggered this friction.
	   * @property shapeA
	   * @type {Shape}
	   * @todo Needed? The shape can be looked up via contactEquation.shapeA...
	   */
	  this.shapeA = null;

	  /**
	   * The shape in body j that triggered this friction.
	   * @property shapeB
	   * @type {Shape}
	   * @todo Needed? The shape can be looked up via contactEquation.shapeB...
	   */
	  this.shapeB = null;

	  /**
	   * The friction coefficient to use.
	   * @property frictionCoefficient
	   * @type {Number}
	   */
	  this.frictionCoefficient = 0.3;
	}
	FrictionEquation.prototype = new Equation();
	FrictionEquation.prototype.constructor = FrictionEquation;

	/**
	 * Set the slipping condition for the constraint. The friction force cannot be
	 * larger than this value.
	 * @method setSlipForce
	 * @param  {Number} slipForce
	 */
	FrictionEquation.prototype.setSlipForce = function (slipForce) {
	  this.maxForce = slipForce;
	  this.minForce = -slipForce;
	};

	/**
	 * Get the max force for the constraint.
	 * @method getSlipForce
	 * @return {Number}
	 */
	FrictionEquation.prototype.getSlipForce = function () {
	  return this.maxForce;
	};

	FrictionEquation.prototype.computeB = function (a, b, h) {
	  var ri = this.contactPointA,
	      rj = this.contactPointB,
	      t = this.t,
	      G = this.G;

	  // G = [-t -rixt t rjxt]
	  // And remember, this is a pure velocity constraint, g is always zero!
	  G[0] = -t[0];
	  G[1] = -t[1];
	  G[2] = -vec2.crossLength(ri, t);
	  G[3] = t[0];
	  G[4] = t[1];
	  G[5] = vec2.crossLength(rj, t);

	  var GW = this.computeGW(),
	      GiMf = this.computeGiMf();

	  var B = /* - g * a  */-GW * b - h * GiMf;

	  return B;
	};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var FrictionEquation = __webpack_require__(37);
	var Pool = __webpack_require__(33);

	module.exports = FrictionEquationPool;

	/**
	 * @class
	 */
	function FrictionEquationPool() {
	  Pool.apply(this, arguments);
	}
	FrictionEquationPool.prototype = new Pool();
	FrictionEquationPool.prototype.constructor = FrictionEquationPool;

	/**
	 * @method create
	 * @return {FrictionEquation}
	 */
	FrictionEquationPool.prototype.create = function () {
	  return new FrictionEquation();
	};

	/**
	 * @method destroy
	 * @param {FrictionEquation} equation
	 * @return {FrictionEquationPool}
	 */
	FrictionEquationPool.prototype.destroy = function (equation) {
	  equation.bodyA = equation.bodyB = null;
	  return this;
	};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Constraint = __webpack_require__(30),
	    AngleLockEquation = __webpack_require__(13),
	    Utils = __webpack_require__(12);

	module.exports = GearConstraint;

	/**
	 * Constrains the angle of two bodies to each other to be equal. If a gear ratio is not one, the angle of bodyA must be a multiple of the angle of bodyB.
	 * @class GearConstraint
	 * @constructor
	 * @author schteppe
	 * @param {Body}            bodyA
	 * @param {Body}            bodyB
	 * @param {Object}          [options]
	 * @param {Number}          [options.angle=0] Relative angle between the bodies. Will be set to the current angle between the bodies (the gear ratio is accounted for).
	 * @param {Number}          [options.ratio=1] Gear ratio.
	 * @param {Number}          [options.maxTorque] Maximum torque to apply.
	 * @extends Constraint
	 *
	 * @example
	 *     var constraint = new GearConstraint(bodyA, bodyB);
	 *     world.addConstraint(constraint);
	 *
	 * @example
	 *     var constraint = new GearConstraint(bodyA, bodyB, {
	 *         ratio: 2,
	 *         maxTorque: 1000
	 *     });
	 *     world.addConstraint(constraint);
	 */
	function GearConstraint(bodyA, bodyB, options) {
	  options = options || {};

	  Constraint.call(this, bodyA, bodyB, Constraint.GEAR, options);

	  /**
	   * The gear ratio.
	   * @property ratio
	   * @type {Number}
	   */
	  this.ratio = options.ratio !== undefined ? options.ratio : 1;

	  /**
	   * The relative angle
	   * @property angle
	   * @type {Number}
	   */
	  this.angle = options.angle !== undefined ? options.angle : bodyB.angle - this.ratio * bodyA.angle;

	  // Send same parameters to the equation
	  var angleLockOptions = Utils.shallowClone(options);
	  angleLockOptions.angle = this.angle;
	  angleLockOptions.ratio = this.ratio;

	  this.equations = [new AngleLockEquation(bodyA, bodyB, angleLockOptions)];

	  // Set max torque
	  if (options.maxTorque !== undefined) {
	    this.setMaxTorque(options.maxTorque);
	  }
	}
	GearConstraint.prototype = new Constraint();
	GearConstraint.prototype.constructor = GearConstraint;

	GearConstraint.prototype.update = function () {
	  var eq = this.equations[0];
	  var ratio = this.ratio;
	  if (eq.ratio !== ratio) {
	    eq.setRatio(ratio);
	  }
	  eq.angle = this.angle;
	};

	/**
	 * Set the max torque for the constraint.
	 * @method setMaxTorque
	 * @param {Number} torque
	 */
	GearConstraint.prototype.setMaxTorque = function (torque) {
	  this.equations[0].setMaxTorque(torque);
	};

	/**
	 * Get the max torque for the constraint.
	 * @method getMaxTorque
	 * @return {Number}
	 */
	GearConstraint.prototype.getMaxTorque = function () {
	  return this.equations[0].maxForce;
	};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Solver = __webpack_require__(41),
	    FrictionEquation = __webpack_require__(37);

	module.exports = GSSolver;

	/**
	 * Iterative Gauss-Seidel constraint equation solver.
	 *
	 * @class GSSolver
	 * @constructor
	 * @extends Solver
	 * @param {Object} [options]
	 * @param {Number} [options.iterations=10]
	 * @param {Number} [options.tolerance=0]
	 */
	function GSSolver(options) {
	    Solver.call(this, options, Solver.GS);
	    options = options || {};

	    /**
	     * The max number of iterations to do when solving. More gives better results, but is more expensive.
	     * @property iterations
	     * @type {Number}
	     */
	    this.iterations = options.iterations || 10;

	    /**
	     * The error tolerance, per constraint. If the total error is below this limit, the solver will stop iterating. Set to zero for as good solution as possible, but to something larger than zero to make computations faster.
	     * @property tolerance
	     * @type {Number}
	     * @default 1e-7
	     */
	    this.tolerance = options.tolerance !== undefined ? options.tolerance : 1e-7;

	    /**
	     * Number of solver iterations that are used to approximate normal forces used for friction (F_friction = mu * F_normal). These friction forces will override any other friction forces that are set. If you set frictionIterations = 0, then this feature will be disabled.
	     *
	     * Use only frictionIterations > 0 if the approximated normal force (F_normal = mass * gravity) is not good enough. Examples of where it can happen is in space games where gravity is zero, or in tall stacks where the normal force is large at bottom but small at top.
	     *
	     * @property frictionIterations
	     * @type {Number}
	     * @default 0
	     */
	    this.frictionIterations = options.frictionIterations !== undefined ? 0 : options.frictionIterations;

	    /**
	     * The number of iterations that were made during the last solve. If .tolerance is zero, this value will always be equal to .iterations, but if .tolerance is larger than zero, and the solver can quit early, then this number will be somewhere between 1 and .iterations.
	     * @property {Number} usedIterations
	     */
	    this.usedIterations = 0;
	}
	GSSolver.prototype = new Solver();
	GSSolver.prototype.constructor = GSSolver;

	/**
	 * Solve the system of equations
	 * @method solve
	 * @param  {Number}  h       Time step
	 * @param  {World}   world    World to solve
	 */
	GSSolver.prototype.solve = function (h, world) {

	    this.sortEquations();

	    var iter = 0,
	        maxIter = this.iterations,
	        maxFrictionIter = this.frictionIterations,
	        equations = this.equations,
	        Neq = equations.length,
	        tolSquared = Math.pow(this.tolerance * Neq, 2),
	        bodies = world.bodies,
	        Nbodies = bodies.length;

	    this.usedIterations = 0;

	    if (Neq) {
	        for (var i = 0; i !== Nbodies; i++) {
	            var b = bodies[i];

	            // Update solve mass
	            b.updateSolveMassProperties();
	        }
	    }

	    for (var i = 0; i !== Neq; i++) {
	        var c = equations[i];
	        c.lambda = 0;
	        if (c.timeStep !== h || c.needsUpdate) {
	            c.timeStep = h;
	            c.update();
	        }
	        c.B = c.computeB(c.a, c.b, h);
	        c.invC = c.computeInvC(c.epsilon);

	        c.maxForceDt = c.maxForce * h;
	        c.minForceDt = c.minForce * h;
	    }

	    var c, deltalambdaTot, i, j;

	    if (Neq !== 0) {

	        for (i = 0; i !== Nbodies; i++) {
	            var b = bodies[i];

	            // Reset vlambda
	            b.resetConstraintVelocity();
	        }

	        if (maxFrictionIter) {
	            // Iterate over contact equations to get normal forces
	            for (iter = 0; iter !== maxFrictionIter; iter++) {

	                // Accumulate the total error for each iteration.
	                deltalambdaTot = 0.0;

	                for (j = 0; j !== Neq; j++) {
	                    c = equations[j];

	                    var deltalambda = iterateEquation(c, h);
	                    deltalambdaTot += Math.abs(deltalambda);
	                }

	                this.usedIterations++;

	                // If the total error is small enough - stop iterate
	                if (deltalambdaTot * deltalambdaTot <= tolSquared) {
	                    break;
	                }
	            }

	            updateMultipliers(equations, 1 / h);

	            // Set computed friction force
	            for (j = 0; j !== Neq; j++) {
	                var eq = equations[j];
	                if (eq instanceof FrictionEquation) {
	                    var f = 0.0;
	                    for (var k = 0; k !== eq.contactEquations.length; k++) {
	                        f += eq.contactEquations[k].multiplier;
	                    }
	                    f *= eq.frictionCoefficient / eq.contactEquations.length;
	                    eq.maxForce = f;
	                    eq.minForce = -f;

	                    eq.maxForceDt = f * h;
	                    eq.minForceDt = -f * h;
	                }
	            }
	        }

	        // Iterate over all equations
	        for (iter = 0; iter !== maxIter; iter++) {

	            // Accumulate the total error for each iteration.
	            deltalambdaTot = 0.0;
	            for (j = 0; j !== Neq; j++) {
	                c = equations[j];

	                var deltalambda = iterateEquation(c, h);
	                deltalambdaTot += Math.abs(deltalambda);
	            }

	            this.usedIterations++;

	            // If the total error is small enough - stop iterate
	            if (deltalambdaTot * deltalambdaTot < tolSquared) {
	                break;
	            }
	        }

	        // Add result to velocity
	        for (i = 0; i !== Nbodies; i++) {
	            bodies[i].addConstraintVelocity();
	        }

	        updateMultipliers(equations, 1 / h);
	    }
	};

	// Sets the .multiplier property of each equation
	function updateMultipliers(equations, invDt) {
	    var l = equations.length;
	    while (l--) {
	        var eq = equations[l];
	        eq.multiplier = eq.lambda * invDt;
	    }
	}

	function iterateEquation(eq) {
	    // Compute iteration
	    var B = eq.B,
	        eps = eq.epsilon,
	        invC = eq.invC,
	        lambdaj = eq.lambda,
	        GWlambda = eq.computeGWlambda(),
	        maxForce_dt = eq.maxForceDt,
	        minForce_dt = eq.minForceDt;

	    var deltalambda = invC * (B - GWlambda - eps * lambdaj);

	    // Clamp if we are not within the min/max interval
	    var lambdaj_plus_deltalambda = lambdaj + deltalambda;
	    if (lambdaj_plus_deltalambda < minForce_dt) {
	        deltalambda = minForce_dt - lambdaj;
	    } else if (lambdaj_plus_deltalambda > maxForce_dt) {
	        deltalambda = maxForce_dt - lambdaj;
	    }
	    eq.lambda += deltalambda;
	    eq.addToWlambda(deltalambda);

	    return deltalambda;
	}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var EventEmitter = __webpack_require__(26);

	module.exports = Solver;

	/**
	 * Base class for constraint solvers.
	 * @class Solver
	 * @constructor
	 * @extends EventEmitter
	 */
	function Solver(options, type) {
	    options = options || {};

	    EventEmitter.call(this);

	    this.type = type;

	    /**
	     * Current equations in the solver.
	     *
	     * @property equations
	     * @type {Array}
	     */
	    this.equations = [];

	    /**
	     * Function that is used to sort all equations before each solve.
	     * @property equationSortFunction
	     * @type {function|boolean}
	     */
	    this.equationSortFunction = options.equationSortFunction || false;
	}
	Solver.prototype = new EventEmitter();
	Solver.prototype.constructor = Solver;

	/**
	 * Method to be implemented in each subclass
	 * @method solve
	 * @param  {Number} dt
	 * @param  {World} world
	 */
	Solver.prototype.solve = function () /*dt,world*/{
	    throw new Error("Solver.solve should be implemented by subclasses!");
	};

	/**
	 * Sort all equations using the .equationSortFunction. Should be called by subclasses before solving.
	 * @method sortEquations
	 */
	Solver.prototype.sortEquations = function () {
	    if (this.equationSortFunction) {
	        this.equations.sort(this.equationSortFunction);
	    }
	};

	/**
	 * Add an equation to be solved.
	 *
	 * @method addEquation
	 * @param {Equation} eq
	 */
	Solver.prototype.addEquation = function (eq) {
	    if (eq.enabled) {
	        this.equations.push(eq);
	    }
	};

	/**
	 * Add equations. Same as .addEquation, but this time the argument is an array of Equations
	 *
	 * @method addEquations
	 * @param {Array} eqs
	 */
	Solver.prototype.addEquations = function (eqs) {
	    for (var i = 0, N = eqs.length; i !== N; i++) {
	        var eq = eqs[i];
	        if (eq.enabled) {
	            this.equations.push(eq);
	        }
	    }
	};

	/**
	 * Remove an equation.
	 *
	 * @method removeEquation
	 * @param {Equation} eq
	 */
	Solver.prototype.removeEquation = function (eq) {
	    var i = this.equations.indexOf(eq);
	    if (i !== -1) {
	        this.equations.splice(i, 1);
	    }
	};

	/**
	 * Remove all currently added equations.
	 *
	 * @method removeAllEquations
	 */
	Solver.prototype.removeAllEquations = function () {
	    this.equations.length = 0;
	};

	/**
	 * Gauss-Seidel solver.
	 * @property GS
	 * @type {Number}
	 * @static
	 */
	Solver.GS = 1;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Shape = __webpack_require__(22),
	    vec2 = __webpack_require__(11),
	    shallowClone = __webpack_require__(12).shallowClone;

	module.exports = Heightfield;

	/**
	 * Heightfield shape class. Height data is given as an array. These data points are spread out evenly with a distance "elementWidth".
	 * @class Heightfield
	 * @extends Shape
	 * @constructor
	 * @param {object} [options] (Note that this options object will be passed on to the {{#crossLink "Shape"}}{{/crossLink}} constructor.)
	 * @param {array} [options.heights] An array of Y values that will be used to construct the terrain.
	 * @param {Number} [options.minValue] Minimum value of the data points in the data array. Will be computed automatically if not given.
	 * @param {Number} [options.maxValue] Maximum value.
	 * @param {Number} [options.elementWidth=0.1] World spacing between the data points in X direction.
	 *
	 * @example
	 *     // Generate some height data (y-values).
	 *     var heights = [];
	 *     for(var i = 0; i < 1000; i++){
	 *         var y = 0.5 * Math.cos(0.2 * i);
	 *         heights.push(y);
	 *     }
	 *
	 *     // Create the heightfield shape
	 *     var shape = new Heightfield({
	 *         heights: heights,
	 *         elementWidth: 1 // Distance between the data points in X direction
	 *     });
	 *     var body = new Body();
	 *     body.addShape(shape);
	 *     world.addBody(body);
	 *
	 * @todo Should use a scale property with X and Y direction instead of just elementWidth
	 */
	function Heightfield(options) {
	    options = options ? shallowClone(options) : {};

	    /**
	     * An array of numbers, or height values, that are spread out along the x axis.
	     * @property {array} heights
	     */
	    this.heights = options.heights ? options.heights.slice(0) : [];

	    /**
	     * Max value of the heights
	     * @property {number} maxValue
	     */
	    this.maxValue = options.maxValue || null;

	    /**
	     * Max value of the heights
	     * @property {number} minValue
	     */
	    this.minValue = options.minValue || null;

	    /**
	     * The width of each element
	     * @property {number} elementWidth
	     */
	    this.elementWidth = options.elementWidth !== undefined ? options.elementWidth : 0.1;

	    if (options.maxValue === undefined || options.minValue === undefined) {
	        this.updateMaxMinValues();
	    }

	    options.type = Shape.HEIGHTFIELD;
	    Shape.call(this, options);
	}
	Heightfield.prototype = new Shape();
	Heightfield.prototype.constructor = Heightfield;

	/**
	 * Update the .minValue and the .maxValue
	 * @method updateMaxMinValues
	 */
	Heightfield.prototype.updateMaxMinValues = function () {
	    var data = this.heights;
	    var maxValue = data[0];
	    var minValue = data[0];
	    for (var i = 0; i !== data.length; i++) {
	        var v = data[i];
	        if (v > maxValue) {
	            maxValue = v;
	        }
	        if (v < minValue) {
	            minValue = v;
	        }
	    }
	    this.maxValue = maxValue;
	    this.minValue = minValue;
	};

	/**
	 * @method computeMomentOfInertia
	 * @return {Number}
	 */
	Heightfield.prototype.computeMomentOfInertia = function () {
	    return Number.MAX_VALUE;
	};

	Heightfield.prototype.updateBoundingRadius = function () {
	    this.boundingRadius = Number.MAX_VALUE;
	};

	Heightfield.prototype.updateArea = function () {
	    var data = this.heights,
	        area = 0;
	    for (var i = 0; i < data.length - 1; i++) {
	        area += (data[i] + data[i + 1]) / 2 * this.elementWidth;
	    }
	    this.area = area;
	};

	var points = [vec2.create(), vec2.create(), vec2.create(), vec2.create()];

	/**
	 * @method computeAABB
	 * @param  {AABB}   out      The resulting AABB.
	 * @param  {Array}  position
	 * @param  {Number} angle
	 */
	Heightfield.prototype.computeAABB = function (out, position, angle) {
	    vec2.set(points[0], 0, this.maxValue);
	    vec2.set(points[1], this.elementWidth * this.heights.length, this.maxValue);
	    vec2.set(points[2], this.elementWidth * this.heights.length, this.minValue);
	    vec2.set(points[3], 0, this.minValue);
	    out.setFromPoints(points, position, angle);
	};

	/**
	 * Get a line segment in the heightfield
	 * @method getLineSegment
	 * @param  {array} start Where to store the resulting start point
	 * @param  {array} end Where to store the resulting end point
	 * @param  {number} i
	 */
	Heightfield.prototype.getLineSegment = function (start, end, i) {
	    var data = this.heights;
	    var width = this.elementWidth;
	    vec2.set(start, i * width, data[i]);
	    vec2.set(end, (i + 1) * width, data[i + 1]);
	};

	Heightfield.prototype.getSegmentIndex = function (position) {
	    return Math.floor(position[0] / this.elementWidth);
	};

	Heightfield.prototype.getClampedSegmentIndex = function (position) {
	    var i = this.getSegmentIndex(position);
	    i = Math.min(this.heights.length, Math.max(i, 0)); // clamp
	    return i;
	};

	var intersectHeightfield_worldNormal = vec2.create();
	var intersectHeightfield_l0 = vec2.create();
	var intersectHeightfield_l1 = vec2.create();
	var intersectHeightfield_localFrom = vec2.create();
	var intersectHeightfield_localTo = vec2.create();

	/**
	 * @method raycast
	 * @param  {RayResult} result
	 * @param  {Ray} ray
	 * @param  {array} position
	 * @param  {number} angle
	 */
	Heightfield.prototype.raycast = function (result, ray, position, angle) {
	    var from = ray.from;
	    var to = ray.to;

	    var worldNormal = intersectHeightfield_worldNormal;
	    var l0 = intersectHeightfield_l0;
	    var l1 = intersectHeightfield_l1;
	    var localFrom = intersectHeightfield_localFrom;
	    var localTo = intersectHeightfield_localTo;

	    // get local ray start and end
	    vec2.toLocalFrame(localFrom, from, position, angle);
	    vec2.toLocalFrame(localTo, to, position, angle);

	    // Get the segment range
	    var i0 = this.getClampedSegmentIndex(localFrom);
	    var i1 = this.getClampedSegmentIndex(localTo);
	    if (i0 > i1) {
	        var tmp = i0;
	        i0 = i1;
	        i1 = tmp;
	    }

	    // The segments
	    for (var i = 0; i < this.heights.length - 1; i++) {
	        this.getLineSegment(l0, l1, i);
	        var t = vec2.getLineSegmentsIntersectionFraction(localFrom, localTo, l0, l1);
	        if (t >= 0) {
	            vec2.subtract(worldNormal, l1, l0);
	            vec2.rotate(worldNormal, worldNormal, angle + Math.PI / 2);
	            vec2.normalize(worldNormal, worldNormal);
	            ray.reportIntersection(result, t, worldNormal, -1);
	            if (result.shouldStop(ray)) {
	                return;
	            }
	        }
	    }
	};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Shape = __webpack_require__(22),
	    shallowClone = __webpack_require__(12).shallowClone,
	    vec2 = __webpack_require__(11);

	module.exports = Line;

	/**
	 * Line shape class. The line shape is along the x direction, and stretches from [-length/2, 0] to [length/2,0].
	 * @class Line
	 * @param {object} [options] (Note that this options object will be passed on to the {{#crossLink "Shape"}}{{/crossLink}} constructor.)
	 * @param {Number} [options.length=1] The total length of the line
	 * @extends Shape
	 * @constructor
	 * @example
	 *     var body = new Body();
	 *     var lineShape = new Line({
	 *         length: 1
	 *     });
	 *     body.addShape(lineShape);
	 */
	function Line(options) {
	  options = options ? shallowClone(options) : {};

	  /**
	   * Length of this line
	   * @property {Number} length
	   * @default 1
	   */
	  this.length = options.length !== undefined ? options.length : 1;

	  options.type = Shape.LINE;
	  Shape.call(this, options);
	}
	Line.prototype = new Shape();
	Line.prototype.constructor = Line;

	Line.prototype.computeMomentOfInertia = function () {
	  return Math.pow(this.length, 2) / 12;
	};

	Line.prototype.updateBoundingRadius = function () {
	  this.boundingRadius = this.length / 2;
	};

	var points = [vec2.create(), vec2.create()];

	/**
	 * @method computeAABB
	 * @param  {AABB}   out      The resulting AABB.
	 * @param  {Array}  position
	 * @param  {Number} angle
	 */
	Line.prototype.computeAABB = function (out, position, angle) {
	  var l2 = this.length / 2;
	  vec2.set(points[0], -l2, 0);
	  vec2.set(points[1], l2, 0);
	  out.setFromPoints(points, position, angle, 0);
	};

	var raycast_normal = vec2.create();
	var raycast_l0 = vec2.create();
	var raycast_l1 = vec2.create();
	var raycast_unit_y = vec2.fromValues(0, 1);

	/**
	 * @method raycast
	 * @param  {RaycastResult} result
	 * @param  {Ray} ray
	 * @param  {number} angle
	 * @param  {array} position
	 */
	Line.prototype.raycast = function (result, ray, position, angle) {
	  var from = ray.from;
	  var to = ray.to;

	  var l0 = raycast_l0;
	  var l1 = raycast_l1;

	  // get start and end of the line
	  var halfLen = this.length / 2;
	  vec2.set(l0, -halfLen, 0);
	  vec2.set(l1, halfLen, 0);
	  vec2.toGlobalFrame(l0, l0, position, angle);
	  vec2.toGlobalFrame(l1, l1, position, angle);

	  var fraction = vec2.getLineSegmentsIntersectionFraction(l0, l1, from, to);
	  if (fraction >= 0) {
	    var normal = raycast_normal;
	    vec2.rotate(normal, raycast_unit_y, angle); // todo: this should depend on which side the ray comes from
	    ray.reportIntersection(result, fraction, normal, -1);
	  }
	};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Constraint = __webpack_require__(30),
	    vec2 = __webpack_require__(11),
	    Equation = __webpack_require__(14);

	module.exports = LockConstraint;

	/**
	 * Locks the relative position and rotation between two bodies.
	 *
	 * @class LockConstraint
	 * @constructor
	 * @author schteppe
	 * @param {Body} bodyA
	 * @param {Body} bodyB
	 * @param {Object} [options]
	 * @param {Array}  [options.localOffsetB] The offset of bodyB in bodyA's frame. If not given the offset is computed from current positions.
	 * @param {number} [options.localAngleB] The angle of bodyB in bodyA's frame. If not given, the angle is computed from current angles.
	 * @param {number} [options.maxForce]
	 * @extends Constraint
	 *
	 * @example
	 *     // Locks the relative position and rotation between bodyA and bodyB
	 *     var constraint = new LockConstraint(bodyA, bodyB);
	 *     world.addConstraint(constraint);
	 */
	function LockConstraint(bodyA, bodyB, options) {
	  options = options || {};

	  Constraint.call(this, bodyA, bodyB, Constraint.LOCK, options);

	  var maxForce = typeof options.maxForce === "undefined" ? Number.MAX_VALUE : options.maxForce;

	  // Use 3 equations:
	  // gx =   (xj - xi - l) * xhat = 0
	  // gy =   (xj - xi - l) * yhat = 0
	  // gr =   (xi - xj + r) * that = 0
	  //
	  // ...where:
	  //   l is the localOffsetB vector rotated to world in bodyA frame
	  //   r is the same vector but reversed and rotated from bodyB frame
	  //   xhat, yhat are world axis vectors
	  //   that is the tangent of r
	  //
	  // For the first two constraints, we get
	  // G*W = (vj - vi - ldot  ) * xhat
	  //     = (vj - vi - wi x l) * xhat
	  //
	  // Since (wi x l) * xhat = (l x xhat) * wi, we get
	  // G*W = [ -1   0   (-l x xhat)  1   0   0] * [vi wi vj wj]
	  //
	  // The last constraint gives
	  // GW = (vi - vj + wj x r) * that
	  //    = [  that   0  -that  (r x t) ]

	  var x = new Equation(bodyA, bodyB, -maxForce, maxForce),
	      y = new Equation(bodyA, bodyB, -maxForce, maxForce),
	      rot = new Equation(bodyA, bodyB, -maxForce, maxForce);

	  var l = vec2.create(),
	      g = vec2.create(),
	      that = this;
	  x.computeGq = function () {
	    vec2.rotate(l, that.localOffsetB, bodyA.angle);
	    vec2.subtract(g, bodyB.position, bodyA.position);
	    vec2.subtract(g, g, l);
	    return g[0];
	  };
	  y.computeGq = function () {
	    vec2.rotate(l, that.localOffsetB, bodyA.angle);
	    vec2.subtract(g, bodyB.position, bodyA.position);
	    vec2.subtract(g, g, l);
	    return g[1];
	  };
	  var r = vec2.create(),
	      t = vec2.create();
	  rot.computeGq = function () {
	    vec2.rotate(r, that.localOffsetB, bodyB.angle - that.localAngleB);
	    vec2.scale(r, r, -1);
	    vec2.subtract(g, bodyA.position, bodyB.position);
	    vec2.add(g, g, r);
	    vec2.rotate(t, r, -Math.PI / 2);
	    vec2.normalize(t, t);
	    return vec2.dot(g, t);
	  };

	  /**
	   * The offset of bodyB in bodyA's frame.
	   * @property {Array} localOffsetB
	   */
	  this.localOffsetB = vec2.create();
	  if (options.localOffsetB) {
	    vec2.copy(this.localOffsetB, options.localOffsetB);
	  } else {
	    // Construct from current positions
	    vec2.subtract(this.localOffsetB, bodyB.position, bodyA.position);
	    vec2.rotate(this.localOffsetB, this.localOffsetB, -bodyA.angle);
	  }

	  /**
	   * The offset angle of bodyB in bodyA's frame.
	   * @property {Number} localAngleB
	   */
	  this.localAngleB = 0;
	  if (typeof options.localAngleB === 'number') {
	    this.localAngleB = options.localAngleB;
	  } else {
	    // Construct
	    this.localAngleB = bodyB.angle - bodyA.angle;
	  }

	  this.equations.push(x, y, rot);
	  this.setMaxForce(maxForce);
	}
	LockConstraint.prototype = new Constraint();
	LockConstraint.prototype.constructor = LockConstraint;

	/**
	 * Set the maximum force to be applied.
	 * @method setMaxForce
	 * @param {Number} force
	 */
	LockConstraint.prototype.setMaxForce = function (force) {
	  var eqs = this.equations;
	  for (var i = 0; i < this.equations.length; i++) {
	    eqs[i].maxForce = force;
	    eqs[i].minForce = -force;
	  }
	};

	/**
	 * Get the max force.
	 * @method getMaxForce
	 * @return {Number}
	 */
	LockConstraint.prototype.getMaxForce = function () {
	  return this.equations[0].maxForce;
	};

	var l = vec2.create();
	var r = vec2.create();
	var t = vec2.create();
	var xAxis = vec2.fromValues(1, 0);
	var yAxis = vec2.fromValues(0, 1);
	LockConstraint.prototype.update = function () {
	  var x = this.equations[0],
	      y = this.equations[1],
	      rot = this.equations[2],
	      bodyA = this.bodyA,
	      bodyB = this.bodyB;

	  vec2.rotate(l, this.localOffsetB, bodyA.angle);
	  vec2.rotate(r, this.localOffsetB, bodyB.angle - this.localAngleB);
	  vec2.scale(r, r, -1);

	  vec2.rotate(t, r, Math.PI / 2);
	  vec2.normalize(t, t);

	  x.G[0] = -1;
	  x.G[1] = 0;
	  x.G[2] = -vec2.crossLength(l, xAxis);
	  x.G[3] = 1;

	  y.G[0] = 0;
	  y.G[1] = -1;
	  y.G[2] = -vec2.crossLength(l, yAxis);
	  y.G[4] = 1;

	  rot.G[0] = -t[0];
	  rot.G[1] = -t[1];
	  rot.G[3] = t[0];
	  rot.G[4] = t[1];
	  rot.G[5] = vec2.crossLength(r, t);
	};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var vec2 = __webpack_require__(11),
	    sub = vec2.subtract,
	    add = vec2.add,
	    dot = vec2.dot,
	    rotate = vec2.rotate,
	    normalize = vec2.normalize,
	    copy = vec2.copy,
	    scale = vec2.scale,
	    squaredLength = vec2.squaredLength,
	    createVec2 = vec2.create,
	    ContactEquationPool = __webpack_require__(32),
	    FrictionEquationPool = __webpack_require__(38),
	    TupleDictionary = __webpack_require__(46),
	    Circle = __webpack_require__(29),
	    Convex = __webpack_require__(21),
	    Shape = __webpack_require__(22),
	    Box = __webpack_require__(47);

	module.exports = Narrowphase;

	// Temp things
	var yAxis = vec2.fromValues(0, 1);

	var tmp1 = createVec2(),
	    tmp2 = createVec2(),
	    tmp3 = createVec2(),
	    tmp4 = createVec2(),
	    tmp5 = createVec2(),
	    tmp6 = createVec2(),
	    tmp7 = createVec2(),
	    tmp8 = createVec2(),
	    tmp9 = createVec2(),
	    tmp10 = createVec2(),
	    tmp11 = createVec2(),
	    tmp12 = createVec2(),
	    tmp13 = createVec2(),
	    tmp14 = createVec2(),
	    tmp15 = createVec2(),
	    tmpArray = [];

	/**
	 * Narrowphase. Creates contacts and friction given shapes and transforms.
	 * @class Narrowphase
	 * @constructor
	 */
	function Narrowphase() {

	  /**
	   * @property contactEquations
	   * @type {Array}
	   */
	  this.contactEquations = [];

	  /**
	   * @property frictionEquations
	   * @type {Array}
	   */
	  this.frictionEquations = [];

	  /**
	   * Whether to make friction equations in the upcoming contacts.
	   * @property enableFriction
	   * @type {Boolean}
	   */
	  this.enableFriction = true;

	  /**
	   * Whether to make equations enabled in upcoming contacts.
	   * @property enabledEquations
	   * @type {Boolean}
	   */
	  this.enabledEquations = true;

	  /**
	   * The friction slip force to use when creating friction equations.
	   * @property slipForce
	   * @type {Number}
	   */
	  this.slipForce = 10.0;

	  /**
	   * Keeps track of the allocated ContactEquations.
	   * @property {ContactEquationPool} contactEquationPool
	   *
	   * @example
	   *
	   *     // Allocate a few equations before starting the simulation.
	   *     // This way, no contact objects need to be created on the fly in the game loop.
	   *     world.narrowphase.contactEquationPool.resize(1024);
	   *     world.narrowphase.frictionEquationPool.resize(1024);
	   */
	  this.contactEquationPool = new ContactEquationPool({ size: 32 });

	  /**
	   * Keeps track of the allocated ContactEquations.
	   * @property {FrictionEquationPool} frictionEquationPool
	   */
	  this.frictionEquationPool = new FrictionEquationPool({ size: 64 });

	  /**
	   * Enable reduction of friction equations. If disabled, a box on a plane will generate 2 contact equations and 2 friction equations. If enabled, there will be only one friction equation. Same kind of simplifications are made  for all collision types.
	   * @property enableFrictionReduction
	   * @type {Boolean}
	   * @deprecated This flag will be removed when the feature is stable enough.
	   * @default true
	   */
	  this.enableFrictionReduction = true;

	  /**
	   * Keeps track of the colliding bodies last step.
	   * @private
	   * @property collidingBodiesLastStep
	   * @type {TupleDictionary}
	   */
	  this.collidingBodiesLastStep = new TupleDictionary();

	  /**
	   * @property currentContactMaterial
	   * @type {ContactMaterial}
	   */
	  this.currentContactMaterial = null;
	}

	var bodiesOverlap_shapePositionA = createVec2();
	var bodiesOverlap_shapePositionB = createVec2();

	/**
	 * @method bodiesOverlap
	 * @param  {Body} bodyA
	 * @param  {Body} bodyB
	 * @param  {boolean} [checkCollisionMasks=false]
	 * @return {Boolean}
	 */
	Narrowphase.prototype.bodiesOverlap = function (bodyA, bodyB, checkCollisionMasks) {
	  var shapePositionA = bodiesOverlap_shapePositionA;
	  var shapePositionB = bodiesOverlap_shapePositionB;

	  // Loop over all shapes of bodyA
	  for (var k = 0, Nshapesi = bodyA.shapes.length; k !== Nshapesi; k++) {
	    var shapeA = bodyA.shapes[k];

	    // All shapes of body j
	    for (var l = 0, Nshapesj = bodyB.shapes.length; l !== Nshapesj; l++) {
	      var shapeB = bodyB.shapes[l];

	      // Check collision groups and masks
	      if (checkCollisionMasks && !((shapeA.collisionGroup & shapeB.collisionMask) !== 0 && (shapeB.collisionGroup & shapeA.collisionMask) !== 0)) {
	        return;
	      }

	      bodyA.toWorldFrame(shapePositionA, shapeA.position);
	      bodyB.toWorldFrame(shapePositionB, shapeB.position);

	      if (shapeA.type <= shapeB.type) {
	        if (this[shapeA.type | shapeB.type](bodyA, shapeA, shapePositionA, shapeA.angle + bodyA.angle, bodyB, shapeB, shapePositionB, shapeB.angle + bodyB.angle, true)) {
	          return true;
	        }
	      } else {
	        if (this[shapeA.type | shapeB.type](bodyB, shapeB, shapePositionB, shapeB.angle + bodyB.angle, bodyA, shapeA, shapePositionA, shapeA.angle + bodyA.angle, true)) {
	          return true;
	        }
	      }
	    }
	  }

	  return false;
	};

	/**
	 * Check if the bodies were in contact since the last reset().
	 * @method collidedLastStep
	 * @param  {Body} bodyA
	 * @param  {Body} bodyB
	 * @return {Boolean}
	 */
	Narrowphase.prototype.collidedLastStep = function (bodyA, bodyB) {
	  var id1 = bodyA.id | 0,
	      id2 = bodyB.id | 0;
	  return !!this.collidingBodiesLastStep.get(id1, id2);
	};

	/**
	 * Throws away the old equations and gets ready to create new
	 * @method reset
	 */
	Narrowphase.prototype.reset = function () {
	  this.collidingBodiesLastStep.reset();

	  var eqs = this.contactEquations;
	  var l = eqs.length;
	  while (l--) {
	    var eq = eqs[l],
	        id1 = eq.bodyA.id,
	        id2 = eq.bodyB.id;
	    this.collidingBodiesLastStep.set(id1, id2, true);
	  }

	  var ce = this.contactEquations,
	      fe = this.frictionEquations;
	  for (var i = 0; i < ce.length; i++) {
	    this.contactEquationPool.release(ce[i]);
	  }
	  for (var i = 0; i < fe.length; i++) {
	    this.frictionEquationPool.release(fe[i]);
	  }

	  // Reset
	  this.contactEquations.length = this.frictionEquations.length = 0;
	};

	/**
	 * Creates a ContactEquation, either by reusing an existing object or creating a new one.
	 * @method createContactEquation
	 * @param  {Body} bodyA
	 * @param  {Body} bodyB
	 * @return {ContactEquation}
	 */
	Narrowphase.prototype.createContactEquation = function (bodyA, bodyB, shapeA, shapeB) {
	  var c = this.contactEquationPool.get();
	  var currentContactMaterial = this.currentContactMaterial;
	  c.bodyA = bodyA;
	  c.bodyB = bodyB;
	  c.shapeA = shapeA;
	  c.shapeB = shapeB;
	  c.enabled = this.enabledEquations;
	  c.firstImpact = !this.collidedLastStep(bodyA, bodyB);

	  c.restitution = currentContactMaterial.restitution;
	  c.stiffness = currentContactMaterial.stiffness;
	  c.relaxation = currentContactMaterial.relaxation;
	  c.offset = currentContactMaterial.contactSkinSize;

	  c.needsUpdate = true;

	  return c;
	};

	/**
	 * Creates a FrictionEquation, either by reusing an existing object or creating a new one.
	 * @method createFrictionEquation
	 * @param  {Body} bodyA
	 * @param  {Body} bodyB
	 * @return {FrictionEquation}
	 */
	Narrowphase.prototype.createFrictionEquation = function (bodyA, bodyB, shapeA, shapeB) {
	  var c = this.frictionEquationPool.get();
	  var currentContactMaterial = this.currentContactMaterial;
	  c.bodyA = bodyA;
	  c.bodyB = bodyB;
	  c.shapeA = shapeA;
	  c.shapeB = shapeB;
	  c.setSlipForce(this.slipForce);
	  c.enabled = this.enabledEquations;

	  c.frictionCoefficient = currentContactMaterial.friction;
	  c.relativeVelocity = currentContactMaterial.surfaceVelocity;
	  c.stiffness = currentContactMaterial.frictionStiffness;
	  c.relaxation = currentContactMaterial.frictionRelaxation;
	  c.needsUpdate = true;

	  c.contactEquations.length = 0;
	  return c;
	};

	/**
	 * Creates a FrictionEquation given the data in the ContactEquation. Uses same offset vectors ri and rj, but the tangent vector will be constructed from the collision normal.
	 * @method createFrictionFromContact
	 * @param  {ContactEquation} contactEquation
	 * @return {FrictionEquation}
	 */
	Narrowphase.prototype.createFrictionFromContact = function (c) {
	  var eq = this.createFrictionEquation(c.bodyA, c.bodyB, c.shapeA, c.shapeB);
	  copy(eq.contactPointA, c.contactPointA);
	  copy(eq.contactPointB, c.contactPointB);
	  vec2.rotate90cw(eq.t, c.normalA);
	  eq.contactEquations.push(c);
	  return eq;
	};

	// Take the average N latest contact point on the plane.
	Narrowphase.prototype.createFrictionFromAverage = function (numContacts) {
	  var c = this.contactEquations[this.contactEquations.length - 1];
	  var eq = this.createFrictionEquation(c.bodyA, c.bodyB, c.shapeA, c.shapeB);
	  var bodyA = c.bodyA;
	  vec2.set(eq.contactPointA, 0, 0);
	  vec2.set(eq.contactPointB, 0, 0);
	  vec2.set(eq.t, 0, 0);
	  for (var i = 0; i !== numContacts; i++) {
	    c = this.contactEquations[this.contactEquations.length - 1 - i];
	    if (c.bodyA === bodyA) {
	      add(eq.t, eq.t, c.normalA);
	      add(eq.contactPointA, eq.contactPointA, c.contactPointA);
	      add(eq.contactPointB, eq.contactPointB, c.contactPointB);
	    } else {
	      sub(eq.t, eq.t, c.normalA);
	      add(eq.contactPointA, eq.contactPointA, c.contactPointB);
	      add(eq.contactPointB, eq.contactPointB, c.contactPointA);
	    }
	    eq.contactEquations.push(c);
	  }

	  var invNumContacts = 1 / numContacts;
	  scale(eq.contactPointA, eq.contactPointA, invNumContacts);
	  scale(eq.contactPointB, eq.contactPointB, invNumContacts);
	  normalize(eq.t, eq.t);
	  vec2.rotate90cw(eq.t, eq.t);
	  return eq;
	};

	/**
	 * Convex/line narrowphase
	 * @method convexLine
	 * @param  {Body}       convexBody
	 * @param  {Convex}     convexShape
	 * @param  {Array}      convexOffset
	 * @param  {Number}     convexAngle
	 * @param  {Body}       lineBody
	 * @param  {Line}       lineShape
	 * @param  {Array}      lineOffset
	 * @param  {Number}     lineAngle
	 * @param {boolean}     justTest
	 * @return {number}
	 * @todo Implement me!
	 */
	Narrowphase.prototype[Shape.CONVEX | Shape.LINE] = Narrowphase.prototype.convexLine = function ()
	/*
	convexBody,
	convexShape,
	convexOffset,
	convexAngle,
	lineBody,
	lineShape,
	lineOffset,
	lineAngle,
	justTest
	*/
	{
	  // TODO
	  return 0;
	};

	/**
	 * Line/box narrowphase
	 * @method lineBox
	 * @param  {Body}       lineBody
	 * @param  {Line}       lineShape
	 * @param  {Array}      lineOffset
	 * @param  {Number}     lineAngle
	 * @param  {Body}       boxBody
	 * @param  {Box}  boxShape
	 * @param  {Array}      boxOffset
	 * @param  {Number}     boxAngle
	 * @param  {Boolean}    justTest
	 * @return {number}
	 * @todo Implement me!
	 */
	Narrowphase.prototype[Shape.LINE | Shape.BOX] = Narrowphase.prototype.lineBox = function ()
	/*
	lineBody,
	lineShape,
	lineOffset,
	lineAngle,
	boxBody,
	boxShape,
	boxOffset,
	boxAngle,
	justTest
	*/
	{
	  // TODO
	  return 0;
	};

	function setConvexToCapsuleShapeMiddle(convexShape, capsuleShape) {
	  var capsuleRadius = capsuleShape.radius;
	  var halfCapsuleLength = capsuleShape.length * 0.5;
	  var verts = convexShape.vertices;
	  vec2.set(verts[0], -halfCapsuleLength, -capsuleRadius);
	  vec2.set(verts[1], halfCapsuleLength, -capsuleRadius);
	  vec2.set(verts[2], halfCapsuleLength, capsuleRadius);
	  vec2.set(verts[3], -halfCapsuleLength, capsuleRadius);
	}

	var convexCapsule_tempRect = new Box({ width: 1, height: 1 }),
	    convexCapsule_tempVec = createVec2();

	/**
	 * Convex/capsule narrowphase
	 * @method convexCapsule
	 * @param  {Body}       convexBody
	 * @param  {Convex}     convexShape
	 * @param  {Array}      convexPosition
	 * @param  {Number}     convexAngle
	 * @param  {Body}       capsuleBody
	 * @param  {Capsule}    capsuleShape
	 * @param  {Array}      capsulePosition
	 * @param  {Number}     capsuleAngle
	 * @return {number}
	 */
	Narrowphase.prototype[Shape.CONVEX | Shape.CAPSULE] = Narrowphase.prototype[Shape.BOX | Shape.CAPSULE] = Narrowphase.prototype.convexCapsule = function (convexBody, convexShape, convexPosition, convexAngle, capsuleBody, capsuleShape, capsulePosition, capsuleAngle, justTest) {

	  // Check the circles
	  // Add offsets!
	  var circlePos = convexCapsule_tempVec;
	  var halfLength = capsuleShape.length / 2;
	  vec2.set(circlePos, halfLength, 0);
	  vec2.toGlobalFrame(circlePos, circlePos, capsulePosition, capsuleAngle);
	  var result1 = this.circleConvex(capsuleBody, capsuleShape, circlePos, capsuleAngle, convexBody, convexShape, convexPosition, convexAngle, justTest, capsuleShape.radius);

	  vec2.set(circlePos, -halfLength, 0);
	  vec2.toGlobalFrame(circlePos, circlePos, capsulePosition, capsuleAngle);
	  var result2 = this.circleConvex(capsuleBody, capsuleShape, circlePos, capsuleAngle, convexBody, convexShape, convexPosition, convexAngle, justTest, capsuleShape.radius);

	  if (justTest && result1 + result2 !== 0) {
	    return 1;
	  }

	  // Check center rect
	  var r = convexCapsule_tempRect;
	  setConvexToCapsuleShapeMiddle(r, capsuleShape);
	  var result = this.convexConvex(convexBody, convexShape, convexPosition, convexAngle, capsuleBody, r, capsulePosition, capsuleAngle, justTest);

	  return result + result1 + result2;
	};

	/**
	 * Capsule/line narrowphase
	 * @method lineCapsule
	 * @param  {Body}       lineBody
	 * @param  {Line}       lineShape
	 * @param  {Array}      linePosition
	 * @param  {Number}     lineAngle
	 * @param  {Body}       capsuleBody
	 * @param  {Capsule}    capsuleShape
	 * @param  {Array}      capsulePosition
	 * @param  {Number}     capsuleAngle
	 * @return {number}
	 * @todo Implement me!
	 */
	Narrowphase.prototype[Shape.LINE | Shape.CAPSULE] = Narrowphase.prototype.lineCapsule = function ()
	/*
	lineBody,
	lineShape,
	linePosition,
	lineAngle,
	capsuleBody,
	capsuleShape,
	capsulePosition,
	capsuleAngle,
	justTest
	*/
	{
	  // TODO
	  return 0;
	};

	var capsuleCapsule_tempVec1 = createVec2();
	var capsuleCapsule_tempVec2 = createVec2();
	var capsuleCapsule_tempRect1 = new Box({ width: 1, height: 1 });

	/**
	 * Capsule/capsule narrowphase
	 * @method capsuleCapsule
	 * @param  {Body}       bi
	 * @param  {Capsule}    si
	 * @param  {Array}      xi
	 * @param  {Number}     ai
	 * @param  {Body}       bj
	 * @param  {Capsule}    sj
	 * @param  {Array}      xj
	 * @param  {Number}     aj
	 */
	Narrowphase.prototype[Shape.CAPSULE] = Narrowphase.prototype.capsuleCapsule = function (bi, si, xi, ai, bj, sj, xj, aj, justTest) {

	  var enableFrictionBefore;

	  // Check the circles
	  // Add offsets!
	  var circlePosi = capsuleCapsule_tempVec1,
	      circlePosj = capsuleCapsule_tempVec2;

	  var numContacts = 0;

	  // Need 4 circle checks, between all
	  for (var i = 0; i < 2; i++) {

	    vec2.set(circlePosi, (i === 0 ? -1 : 1) * si.length / 2, 0);
	    vec2.toGlobalFrame(circlePosi, circlePosi, xi, ai);

	    for (var j = 0; j < 2; j++) {

	      vec2.set(circlePosj, (j === 0 ? -1 : 1) * sj.length / 2, 0);
	      vec2.toGlobalFrame(circlePosj, circlePosj, xj, aj);

	      // Temporarily turn off friction
	      if (this.enableFrictionReduction) {
	        enableFrictionBefore = this.enableFriction;
	        this.enableFriction = false;
	      }

	      var result = this.circleCircle(bi, si, circlePosi, ai, bj, sj, circlePosj, aj, justTest, si.radius, sj.radius);

	      if (this.enableFrictionReduction) {
	        this.enableFriction = enableFrictionBefore;
	      }

	      if (justTest && result !== 0) {
	        return 1;
	      }

	      numContacts += result;
	    }
	  }

	  if (this.enableFrictionReduction) {
	    // Temporarily turn off friction
	    enableFrictionBefore = this.enableFriction;
	    this.enableFriction = false;
	  }

	  // Check circles against the center boxs
	  var rect = capsuleCapsule_tempRect1;
	  setConvexToCapsuleShapeMiddle(rect, si);
	  var result1 = this.convexCapsule(bi, rect, xi, ai, bj, sj, xj, aj, justTest);

	  if (this.enableFrictionReduction) {
	    this.enableFriction = enableFrictionBefore;
	  }

	  if (justTest && result1 !== 0) {
	    return 1;
	  }
	  numContacts += result1;

	  if (this.enableFrictionReduction) {
	    // Temporarily turn off friction
	    var enableFrictionBefore = this.enableFriction;
	    this.enableFriction = false;
	  }

	  setConvexToCapsuleShapeMiddle(rect, sj);
	  var result2 = this.convexCapsule(bj, rect, xj, aj, bi, si, xi, ai, justTest);

	  if (this.enableFrictionReduction) {
	    this.enableFriction = enableFrictionBefore;
	  }

	  if (justTest && result2 !== 0) {
	    return 1;
	  }
	  numContacts += result2;

	  if (this.enableFrictionReduction) {
	    if (numContacts && this.enableFriction) {
	      this.frictionEquations.push(this.createFrictionFromAverage(numContacts));
	    }
	  }

	  return numContacts;
	};

	/**
	 * Line/line narrowphase
	 * @method lineLine
	 * @param  {Body}       bodyA
	 * @param  {Line}       shapeA
	 * @param  {Array}      positionA
	 * @param  {Number}     angleA
	 * @param  {Body}       bodyB
	 * @param  {Line}       shapeB
	 * @param  {Array}      positionB
	 * @param  {Number}     angleB
	 * @return {number}
	 * @todo Implement me!
	 */
	Narrowphase.prototype[Shape.LINE] = Narrowphase.prototype.lineLine = function ()
	/* bodyA,
	 shapeA,
	 positionA,
	 angleA,
	 bodyB,
	 shapeB,
	 positionB,
	 angleB,
	 justTest*/
	{
	  // TODO
	  return 0;
	};

	/**
	 * Plane/line Narrowphase
	 * @method planeLine
	 * @param  {Body}   planeBody
	 * @param  {Plane}  planeShape
	 * @param  {Array}  planeOffset
	 * @param  {Number} planeAngle
	 * @param  {Body}   lineBody
	 * @param  {Line}   lineShape
	 * @param  {Array}  lineOffset
	 * @param  {Number} lineAngle
	 */
	Narrowphase.prototype[Shape.PLANE | Shape.LINE] = Narrowphase.prototype.planeLine = function (planeBody, planeShape, planeOffset, planeAngle, lineBody, lineShape, lineOffset, lineAngle, justTest) {
	  var worldVertex0 = tmp1,
	      worldVertex1 = tmp2,
	      worldVertex01 = tmp3,
	      worldVertex11 = tmp4,
	      worldEdge = tmp5,
	      worldEdgeUnit = tmp6,
	      dist = tmp7,
	      worldNormal = tmp8,
	      worldTangent = tmp9,
	      verts = tmpArray,
	      numContacts = 0;

	  // Get start and end points
	  vec2.set(worldVertex0, -lineShape.length / 2, 0);
	  vec2.set(worldVertex1, lineShape.length / 2, 0);

	  // Not sure why we have to use worldVertex*1 here, but it won't work otherwise. Tired.
	  vec2.toGlobalFrame(worldVertex01, worldVertex0, lineOffset, lineAngle);
	  vec2.toGlobalFrame(worldVertex11, worldVertex1, lineOffset, lineAngle);

	  copy(worldVertex0, worldVertex01);
	  copy(worldVertex1, worldVertex11);

	  // Get vector along the line
	  sub(worldEdge, worldVertex1, worldVertex0);
	  normalize(worldEdgeUnit, worldEdge);

	  // Get tangent to the edge.
	  vec2.rotate90cw(worldTangent, worldEdgeUnit);

	  rotate(worldNormal, yAxis, planeAngle);

	  // Check line ends
	  verts[0] = worldVertex0;
	  verts[1] = worldVertex1;
	  for (var i = 0; i < verts.length; i++) {
	    var v = verts[i];

	    sub(dist, v, planeOffset);

	    var d = dot(dist, worldNormal);

	    if (d < 0) {

	      if (justTest) {
	        return 1;
	      }

	      var c = this.createContactEquation(planeBody, lineBody, planeShape, lineShape);
	      numContacts++;

	      copy(c.normalA, worldNormal);
	      normalize(c.normalA, c.normalA);

	      // distance vector along plane normal
	      scale(dist, worldNormal, d);

	      // Vector from plane center to contact
	      sub(c.contactPointA, v, dist);
	      sub(c.contactPointA, c.contactPointA, planeBody.position);

	      // From line center to contact
	      sub(c.contactPointB, v, lineOffset);
	      add(c.contactPointB, c.contactPointB, lineOffset);
	      sub(c.contactPointB, c.contactPointB, lineBody.position);

	      this.contactEquations.push(c);

	      if (!this.enableFrictionReduction) {
	        if (this.enableFriction) {
	          this.frictionEquations.push(this.createFrictionFromContact(c));
	        }
	      }
	    }
	  }

	  if (justTest) {
	    return 0;
	  }

	  if (!this.enableFrictionReduction) {
	    if (numContacts && this.enableFriction) {
	      this.frictionEquations.push(this.createFrictionFromAverage(numContacts));
	    }
	  }

	  return numContacts;
	};

	Narrowphase.prototype[Shape.PARTICLE | Shape.CAPSULE] = Narrowphase.prototype.particleCapsule = function (particleBody, particleShape, particlePosition, particleAngle, capsuleBody, capsuleShape, capsulePosition, capsuleAngle, justTest) {
	  return this.circleLine(particleBody, particleShape, particlePosition, particleAngle, capsuleBody, capsuleShape, capsulePosition, capsuleAngle, justTest, capsuleShape.radius, 0);
	};

	/**
	 * Circle/line Narrowphase
	 * @method circleLine
	 * @param  {Body} circleBody
	 * @param  {Circle} circleShape
	 * @param  {Array} circleOffset
	 * @param  {Number} circleAngle
	 * @param  {Body} lineBody
	 * @param  {Line} lineShape
	 * @param  {Array} lineOffset
	 * @param  {Number} lineAngle
	 * @param {Boolean} justTest If set to true, this function will return the result (intersection or not) without adding equations.
	 * @param {Number} lineRadius Radius to add to the line. Can be used to test Capsules.
	 * @param {Number} circleRadius If set, this value overrides the circle shape radius.
	 * @return {number}
	 */
	Narrowphase.prototype[Shape.CIRCLE | Shape.LINE] = Narrowphase.prototype.circleLine = function (circleBody, circleShape, circleOffset, circleAngle, lineBody, lineShape, lineOffset, lineAngle, justTest, lineRadius, circleRadius) {
	  var lineRadius = lineRadius || 0,
	      circleRadius = circleRadius !== undefined ? circleRadius : circleShape.radius,
	      orthoDist = tmp1,
	      lineToCircleOrthoUnit = tmp2,
	      projectedPoint = tmp3,
	      centerDist = tmp4,
	      worldTangent = tmp5,
	      worldEdge = tmp6,
	      worldEdgeUnit = tmp7,
	      worldVertex0 = tmp8,
	      worldVertex1 = tmp9,
	      worldVertex01 = tmp10,
	      worldVertex11 = tmp11,
	      dist = tmp12,
	      lineToCircle = tmp13,
	      lineEndToLineRadius = tmp14,
	      verts = tmpArray;

	  var halfLineLength = lineShape.length / 2;

	  // Get start and end points
	  vec2.set(worldVertex0, -halfLineLength, 0);
	  vec2.set(worldVertex1, halfLineLength, 0);

	  // Not sure why we have to use worldVertex*1 here, but it won't work otherwise. Tired.
	  vec2.toGlobalFrame(worldVertex01, worldVertex0, lineOffset, lineAngle);
	  vec2.toGlobalFrame(worldVertex11, worldVertex1, lineOffset, lineAngle);

	  copy(worldVertex0, worldVertex01);
	  copy(worldVertex1, worldVertex11);

	  // Get vector along the line
	  sub(worldEdge, worldVertex1, worldVertex0);
	  normalize(worldEdgeUnit, worldEdge);

	  // Get tangent to the edge.
	  vec2.rotate90cw(worldTangent, worldEdgeUnit);

	  // Check distance from the plane spanned by the edge vs the circle
	  sub(dist, circleOffset, worldVertex0);
	  var d = dot(dist, worldTangent); // Distance from center of line to circle center
	  sub(centerDist, worldVertex0, lineOffset);

	  sub(lineToCircle, circleOffset, lineOffset);

	  var radiusSum = circleRadius + lineRadius;

	  if (Math.abs(d) < radiusSum) {

	    // Now project the circle onto the edge
	    scale(orthoDist, worldTangent, d);
	    sub(projectedPoint, circleOffset, orthoDist);

	    // Add the missing line radius
	    scale(lineToCircleOrthoUnit, worldTangent, dot(worldTangent, lineToCircle));
	    normalize(lineToCircleOrthoUnit, lineToCircleOrthoUnit);
	    scale(lineToCircleOrthoUnit, lineToCircleOrthoUnit, lineRadius);
	    add(projectedPoint, projectedPoint, lineToCircleOrthoUnit);

	    // Check if the point is within the edge span
	    var pos = dot(worldEdgeUnit, projectedPoint);
	    var pos0 = dot(worldEdgeUnit, worldVertex0);
	    var pos1 = dot(worldEdgeUnit, worldVertex1);

	    if (pos > pos0 && pos < pos1) {
	      // We got contact!

	      if (justTest) {
	        return 1;
	      }

	      var c = this.createContactEquation(circleBody, lineBody, circleShape, lineShape);

	      scale(c.normalA, orthoDist, -1);
	      normalize(c.normalA, c.normalA);

	      scale(c.contactPointA, c.normalA, circleRadius);
	      add(c.contactPointA, c.contactPointA, circleOffset);
	      sub(c.contactPointA, c.contactPointA, circleBody.position);

	      sub(c.contactPointB, projectedPoint, lineOffset);
	      add(c.contactPointB, c.contactPointB, lineOffset);
	      sub(c.contactPointB, c.contactPointB, lineBody.position);

	      this.contactEquations.push(c);

	      if (this.enableFriction) {
	        this.frictionEquations.push(this.createFrictionFromContact(c));
	      }

	      return 1;
	    }
	  }

	  // Add corner
	  verts[0] = worldVertex0;
	  verts[1] = worldVertex1;

	  for (var i = 0; i < verts.length; i++) {
	    var v = verts[i];

	    sub(dist, v, circleOffset);

	    if (squaredLength(dist) < Math.pow(radiusSum, 2)) {

	      if (justTest) {
	        return 1;
	      }

	      var c = this.createContactEquation(circleBody, lineBody, circleShape, lineShape);

	      copy(c.normalA, dist);
	      normalize(c.normalA, c.normalA);

	      // Vector from circle to contact point is the normal times the circle radius
	      scale(c.contactPointA, c.normalA, circleRadius);
	      add(c.contactPointA, c.contactPointA, circleOffset);
	      sub(c.contactPointA, c.contactPointA, circleBody.position);

	      sub(c.contactPointB, v, lineOffset);
	      scale(lineEndToLineRadius, c.normalA, -lineRadius);
	      add(c.contactPointB, c.contactPointB, lineEndToLineRadius);
	      add(c.contactPointB, c.contactPointB, lineOffset);
	      sub(c.contactPointB, c.contactPointB, lineBody.position);

	      this.contactEquations.push(c);

	      if (this.enableFriction) {
	        this.frictionEquations.push(this.createFrictionFromContact(c));
	      }

	      return 1;
	    }
	  }

	  return 0;
	};

	/**
	 * Circle/capsule Narrowphase
	 * @method circleCapsule
	 * @param  {Body}   bi
	 * @param  {Circle} si
	 * @param  {Array}  xi
	 * @param  {Number} ai
	 * @param  {Body}   bj
	 * @param  {Line}   sj
	 * @param  {Array}  xj
	 * @param  {Number} aj
	 */
	Narrowphase.prototype[Shape.CIRCLE | Shape.CAPSULE] = Narrowphase.prototype.circleCapsule = function (bi, si, xi, ai, bj, sj, xj, aj, justTest) {
	  return this.circleLine(bi, si, xi, ai, bj, sj, xj, aj, justTest, sj.radius);
	};

	/**
	 * Circle/convex Narrowphase.
	 * @method circleConvex
	 * @param  {Body} circleBody
	 * @param  {Circle} circleShape
	 * @param  {Array} circleOffset
	 * @param  {Number} circleAngle
	 * @param  {Body} convexBody
	 * @param  {Convex} convexShape
	 * @param  {Array} convexOffset
	 * @param  {Number} convexAngle
	 * @param  {Boolean} justTest
	 * @param  {Number} circleRadius
	 * @return {number}
	 * @todo Should probably do a separating axis test like https://github.com/erincatto/Box2D/blob/master/Box2D/Box2D/Collision/b2CollideCircle.cpp#L62
	 */
	Narrowphase.prototype[Shape.CIRCLE | Shape.CONVEX] = Narrowphase.prototype[Shape.CIRCLE | Shape.BOX] = Narrowphase.prototype.circleConvex = function (circleBody, circleShape, circleOffset, circleAngle, convexBody, convexShape, convexOffset, convexAngle, justTest, circleRadius) {
	  var circleRadius = circleRadius !== undefined ? circleRadius : circleShape.radius;

	  var worldVertex0 = tmp1,
	      worldVertex1 = tmp2,
	      edge = tmp3,
	      edgeUnit = tmp4,
	      normal = tmp5,
	      zero = tmp6,
	      localCirclePosition = tmp7,
	      r = tmp8,
	      dist = tmp10,
	      worldVertex = tmp11,
	      closestEdgeProjectedPoint = tmp13,
	      candidate = tmp14,
	      candidateDist = tmp15,
	      found = -1,
	      minCandidateDistance = Number.MAX_VALUE;

	  vec2.set(zero, 0, 0);

	  // New algorithm:
	  // 1. Check so center of circle is not inside the polygon. If it is, this wont work...
	  // 2. For each edge
	  // 2. 1. Get point on circle that is closest to the edge (scale normal with -radius)
	  // 2. 2. Check if point is inside.

	  vec2.toLocalFrame(localCirclePosition, circleOffset, convexOffset, convexAngle);

	  var vertices = convexShape.vertices;
	  var normals = convexShape.normals;
	  var numVertices = vertices.length;
	  var normalIndex = -1;

	  // Find the min separating edge.
	  var separation = -Number.MAX_VALUE;
	  var radius = convexShape.boundingRadius + circleRadius;

	  for (var i = 0; i < numVertices; i++) {
	    sub(r, localCirclePosition, vertices[i]);
	    var s = dot(normals[i], r);

	    if (s > radius) {
	      // Early out.
	      return 0;
	    }

	    if (s > separation) {
	      separation = s;
	      normalIndex = i;
	    }
	  }

	  // Check edges first
	  for (var i = normalIndex + numVertices - 1; i < normalIndex + numVertices + 2; i++) {
	    var v0 = vertices[i % numVertices],
	        n = normals[i % numVertices];

	    // Get point on circle, closest to the convex
	    scale(candidate, n, -circleRadius);
	    add(candidate, candidate, localCirclePosition);

	    if (pointInConvexLocal(candidate, convexShape)) {

	      sub(candidateDist, v0, candidate);
	      var candidateDistance = Math.abs(dot(candidateDist, n));

	      if (candidateDistance < minCandidateDistance) {
	        minCandidateDistance = candidateDistance;
	        found = i;
	      }
	    }
	  }

	  if (found !== -1) {

	    if (justTest) {
	      return 1;
	    }

	    var v0 = vertices[found % numVertices],
	        v1 = vertices[(found + 1) % numVertices];

	    vec2.toGlobalFrame(worldVertex0, v0, convexOffset, convexAngle);
	    vec2.toGlobalFrame(worldVertex1, v1, convexOffset, convexAngle);

	    sub(edge, worldVertex1, worldVertex0);

	    normalize(edgeUnit, edge);

	    // Get tangent to the edge. Points out of the Convex
	    vec2.rotate90cw(normal, edgeUnit);

	    // Get point on circle, closest to the convex
	    scale(candidate, normal, -circleRadius);
	    add(candidate, candidate, circleOffset);

	    scale(closestEdgeProjectedPoint, normal, minCandidateDistance);
	    add(closestEdgeProjectedPoint, closestEdgeProjectedPoint, candidate);

	    var c = this.createContactEquation(circleBody, convexBody, circleShape, convexShape);
	    sub(c.normalA, candidate, circleOffset);
	    normalize(c.normalA, c.normalA);

	    scale(c.contactPointA, c.normalA, circleRadius);
	    add(c.contactPointA, c.contactPointA, circleOffset);
	    sub(c.contactPointA, c.contactPointA, circleBody.position);

	    sub(c.contactPointB, closestEdgeProjectedPoint, convexOffset);
	    add(c.contactPointB, c.contactPointB, convexOffset);
	    sub(c.contactPointB, c.contactPointB, convexBody.position);

	    this.contactEquations.push(c);

	    if (this.enableFriction) {
	      this.frictionEquations.push(this.createFrictionFromContact(c));
	    }

	    return 1;
	  }

	  // Check closest vertices
	  if (circleRadius > 0 && normalIndex !== -1) {
	    for (var i = normalIndex + numVertices; i < normalIndex + numVertices + 2; i++) {
	      var localVertex = vertices[i % numVertices];

	      sub(dist, localVertex, localCirclePosition);

	      if (squaredLength(dist) < circleRadius * circleRadius) {

	        if (justTest) {
	          return 1;
	        }

	        vec2.toGlobalFrame(worldVertex, localVertex, convexOffset, convexAngle);
	        sub(dist, worldVertex, circleOffset);

	        var c = this.createContactEquation(circleBody, convexBody, circleShape, convexShape);

	        copy(c.normalA, dist);
	        normalize(c.normalA, c.normalA);

	        // Vector from circle to contact point is the normal times the circle radius
	        scale(c.contactPointA, c.normalA, circleRadius);
	        add(c.contactPointA, c.contactPointA, circleOffset);
	        sub(c.contactPointA, c.contactPointA, circleBody.position);

	        sub(c.contactPointB, worldVertex, convexOffset);
	        add(c.contactPointB, c.contactPointB, convexOffset);
	        sub(c.contactPointB, c.contactPointB, convexBody.position);

	        this.contactEquations.push(c);

	        if (this.enableFriction) {
	          this.frictionEquations.push(this.createFrictionFromContact(c));
	        }

	        return 1;
	      }
	    }
	  }

	  return 0;
	};

	var pic_localPoint = createVec2(),
	    pic_r0 = createVec2(),
	    pic_r1 = createVec2();

	/*
	 * Check if a point is in a polygon
	 */
	function pointInConvex(worldPoint, convexShape, convexOffset, convexAngle) {
	  var localPoint = pic_localPoint,
	      r0 = pic_r0,
	      r1 = pic_r1,
	      verts = convexShape.vertices,
	      lastCross = null;

	  vec2.toLocalFrame(localPoint, worldPoint, convexOffset, convexAngle);

	  for (var i = 0, numVerts = verts.length; i !== numVerts + 1; i++) {
	    var v0 = verts[i % numVerts],
	        v1 = verts[(i + 1) % numVerts];

	    sub(r0, v0, localPoint);
	    sub(r1, v1, localPoint);

	    var cross = vec2.crossLength(r0, r1);

	    if (lastCross === null) {
	      lastCross = cross;
	    }

	    // If we got a different sign of the distance vector, the point is out of the polygon
	    if (cross * lastCross < 0) {
	      return false;
	    }
	    lastCross = cross;
	  }
	  return true;
	}

	/*
	 * Check if a point is in a polygon
	 */
	function pointInConvexLocal(localPoint, convexShape) {
	  var r0 = pic_r0,
	      r1 = pic_r1,
	      verts = convexShape.vertices,
	      lastCross = null,
	      numVerts = verts.length;

	  for (var i = 0; i < numVerts + 1; i++) {
	    var v0 = verts[i % numVerts],
	        v1 = verts[(i + 1) % numVerts];

	    sub(r0, v0, localPoint);
	    sub(r1, v1, localPoint);

	    var cross = vec2.crossLength(r0, r1);

	    if (lastCross === null) {
	      lastCross = cross;
	    }

	    // If we got a different sign of the distance vector, the point is out of the polygon
	    if (cross * lastCross < 0) {
	      return false;
	    }
	    lastCross = cross;
	  }
	  return true;
	}

	/**
	 * Particle/convex Narrowphase
	 * @method particleConvex
	 * @param  {Body} particleBody
	 * @param  {Particle} particleShape
	 * @param  {Array} particleOffset
	 * @param  {Number} particleAngle
	 * @param  {Body} convexBody
	 * @param  {Convex} convexShape
	 * @param  {Array} convexOffset
	 * @param  {Number} convexAngle
	 * @param {Boolean} justTest
	 * @return {number}
	 * @todo use pointInConvex and code more similar to circleConvex
	 * @todo don't transform each vertex, but transform the particle position to convex-local instead
	 */
	Narrowphase.prototype[Shape.PARTICLE | Shape.CONVEX] = Narrowphase.prototype[Shape.PARTICLE | Shape.BOX] = Narrowphase.prototype.particleConvex = function (particleBody, particleShape, particleOffset, particleAngle, convexBody, convexShape, convexOffset, convexAngle, justTest) {
	  var worldVertex0 = tmp1,
	      worldVertex1 = tmp2,
	      worldEdge = tmp3,
	      worldEdgeUnit = tmp4,
	      worldTangent = tmp5,
	      centerDist = tmp6,
	      convexToparticle = tmp7,
	      closestEdgeProjectedPoint = tmp13,
	      candidateDist = tmp14,
	      minEdgeNormal = tmp15,
	      minCandidateDistance = Number.MAX_VALUE,
	      found = false,
	      verts = convexShape.vertices;

	  // Check if the particle is in the polygon at all
	  if (!pointInConvex(particleOffset, convexShape, convexOffset, convexAngle)) {
	    return 0;
	  }

	  if (justTest) {
	    return 1;
	  }

	  // Check edges first
	  for (var i = 0, numVerts = verts.length; i !== numVerts + 1; i++) {
	    var v0 = verts[i % numVerts],
	        v1 = verts[(i + 1) % numVerts];

	    // Transform vertices to world
	    // @todo transform point to local space instead
	    rotate(worldVertex0, v0, convexAngle);
	    rotate(worldVertex1, v1, convexAngle);
	    add(worldVertex0, worldVertex0, convexOffset);
	    add(worldVertex1, worldVertex1, convexOffset);

	    // Get world edge
	    sub(worldEdge, worldVertex1, worldVertex0);
	    normalize(worldEdgeUnit, worldEdge);

	    // Get tangent to the edge. Points out of the Convex
	    vec2.rotate90cw(worldTangent, worldEdgeUnit);

	    // Check distance from the infinite line (spanned by the edge) to the particle
	    //sub(dist, particleOffset, worldVertex0);
	    //var d = dot(dist, worldTangent);
	    sub(centerDist, worldVertex0, convexOffset);

	    sub(convexToparticle, particleOffset, convexOffset);

	    sub(candidateDist, worldVertex0, particleOffset);
	    var candidateDistance = Math.abs(dot(candidateDist, worldTangent));

	    if (candidateDistance < minCandidateDistance) {
	      minCandidateDistance = candidateDistance;
	      scale(closestEdgeProjectedPoint, worldTangent, candidateDistance);
	      add(closestEdgeProjectedPoint, closestEdgeProjectedPoint, particleOffset);
	      copy(minEdgeNormal, worldTangent);
	      found = true;
	    }
	  }

	  if (found) {
	    var c = this.createContactEquation(particleBody, convexBody, particleShape, convexShape);

	    scale(c.normalA, minEdgeNormal, -1);
	    normalize(c.normalA, c.normalA);

	    // Particle has no extent to the contact point
	    vec2.set(c.contactPointA, 0, 0);
	    add(c.contactPointA, c.contactPointA, particleOffset);
	    sub(c.contactPointA, c.contactPointA, particleBody.position);

	    // From convex center to point
	    sub(c.contactPointB, closestEdgeProjectedPoint, convexOffset);
	    add(c.contactPointB, c.contactPointB, convexOffset);
	    sub(c.contactPointB, c.contactPointB, convexBody.position);

	    this.contactEquations.push(c);

	    if (this.enableFriction) {
	      this.frictionEquations.push(this.createFrictionFromContact(c));
	    }

	    return 1;
	  }

	  return 0;
	};

	/**
	 * Circle/circle Narrowphase
	 * @method circleCircle
	 * @param  {Body} bodyA
	 * @param  {Circle} shapeA
	 * @param  {Array} offsetA
	 * @param  {Number} angleA
	 * @param  {Body} bodyB
	 * @param  {Circle} shapeB
	 * @param  {Array} offsetB
	 * @param  {Number} angleB
	 * @param {Boolean} justTest
	 * @param {Number} [radiusA] Optional radius to use for shapeA
	 * @param {Number} [radiusB] Optional radius to use for shapeB
	 * @return {number}
	 */
	Narrowphase.prototype[Shape.CIRCLE] = Narrowphase.prototype.circleCircle = function (bodyA, shapeA, offsetA, angleA, bodyB, shapeB, offsetB, angleB, justTest, radiusA, radiusB) {

	  var dist = tmp1,
	      radiusA = radiusA || shapeA.radius,
	      radiusB = radiusB || shapeB.radius;

	  sub(dist, offsetA, offsetB);
	  var r = radiusA + radiusB;
	  if (squaredLength(dist) > r * r) {
	    return 0;
	  }

	  if (justTest) {
	    return 1;
	  }

	  var c = this.createContactEquation(bodyA, bodyB, shapeA, shapeB);
	  var cpA = c.contactPointA;
	  var cpB = c.contactPointB;
	  var normalA = c.normalA;

	  sub(normalA, offsetB, offsetA);
	  normalize(normalA, normalA);

	  scale(cpA, normalA, radiusA);
	  scale(cpB, normalA, -radiusB);

	  addSub(cpA, cpA, offsetA, bodyA.position);
	  addSub(cpB, cpB, offsetB, bodyB.position);

	  this.contactEquations.push(c);

	  if (this.enableFriction) {
	    this.frictionEquations.push(this.createFrictionFromContact(c));
	  }
	  return 1;
	};

	function addSub(out, a, b, c) {
	  out[0] = a[0] + b[0] - c[0];
	  out[1] = a[1] + b[1] - c[1];
	}

	/**
	 * Plane/Convex Narrowphase
	 * @method planeConvex
	 * @param  {Body} planeBody
	 * @param  {Plane} planeShape
	 * @param  {Array} planeOffset
	 * @param  {Number} planeAngle
	 * @param  {Body} convexBody
	 * @param  {Convex} convexShape
	 * @param  {Array} convexOffset
	 * @param  {Number} convexAngle
	 * @param {Boolean} justTest
	 * @return {number}
	 * @todo only use the deepest contact point + the contact point furthest away from it
	 */
	Narrowphase.prototype[Shape.PLANE | Shape.CONVEX] = Narrowphase.prototype[Shape.PLANE | Shape.BOX] = Narrowphase.prototype.planeConvex = function (planeBody, planeShape, planeOffset, planeAngle, convexBody, convexShape, convexOffset, convexAngle, justTest) {
	  var worldVertex = tmp1,
	      worldNormal = tmp2,
	      dist = tmp3,
	      localPlaneOffset = tmp4,
	      localPlaneNormal = tmp5,
	      localDist = tmp6;

	  var numReported = 0;
	  rotate(worldNormal, yAxis, planeAngle);

	  // Get convex-local plane offset and normal
	  vec2.vectorToLocalFrame(localPlaneNormal, worldNormal, convexAngle);
	  vec2.toLocalFrame(localPlaneOffset, planeOffset, convexOffset, convexAngle);

	  var vertices = convexShape.vertices;
	  for (var i = 0, numVerts = vertices.length; i !== numVerts; i++) {
	    var v = vertices[i];

	    sub(localDist, v, localPlaneOffset);

	    if (dot(localDist, localPlaneNormal) <= 0) {

	      if (justTest) {
	        return 1;
	      }

	      vec2.toGlobalFrame(worldVertex, v, convexOffset, convexAngle);

	      sub(dist, worldVertex, planeOffset);

	      // Found vertex
	      numReported++;

	      var c = this.createContactEquation(planeBody, convexBody, planeShape, convexShape);

	      sub(dist, worldVertex, planeOffset);

	      copy(c.normalA, worldNormal);

	      var d = dot(dist, c.normalA);
	      scale(dist, c.normalA, d);

	      // rj is from convex center to contact
	      sub(c.contactPointB, worldVertex, convexBody.position);

	      // ri is from plane center to contact
	      sub(c.contactPointA, worldVertex, dist);
	      sub(c.contactPointA, c.contactPointA, planeBody.position);

	      this.contactEquations.push(c);

	      if (!this.enableFrictionReduction) {
	        if (this.enableFriction) {
	          this.frictionEquations.push(this.createFrictionFromContact(c));
	        }
	      }
	    }
	  }

	  if (this.enableFrictionReduction) {
	    if (this.enableFriction && numReported) {
	      this.frictionEquations.push(this.createFrictionFromAverage(numReported));
	    }
	  }

	  return numReported;
	};

	/**
	 * Narrowphase for particle vs plane
	 * @method particlePlane
	 * @param  {Body}       particleBody
	 * @param  {Particle}   particleShape
	 * @param  {Array}      particleOffset
	 * @param  {Number}     particleAngle
	 * @param  {Body}       planeBody
	 * @param  {Plane}      planeShape
	 * @param  {Array}      planeOffset
	 * @param  {Number}     planeAngle
	 * @param {Boolean}     justTest
	 * @return {number}
	 */
	Narrowphase.prototype[Shape.PARTICLE | Shape.PLANE] = Narrowphase.prototype.particlePlane = function (particleBody, particleShape, particleOffset, particleAngle, planeBody, planeShape, planeOffset, planeAngle, justTest) {
	  var dist = tmp1,
	      worldNormal = tmp2;

	  planeAngle = planeAngle || 0;

	  sub(dist, particleOffset, planeOffset);
	  rotate(worldNormal, yAxis, planeAngle);

	  var d = dot(dist, worldNormal);

	  if (d > 0) {
	    return 0;
	  }
	  if (justTest) {
	    return 1;
	  }

	  var c = this.createContactEquation(planeBody, particleBody, planeShape, particleShape);

	  copy(c.normalA, worldNormal);
	  scale(dist, c.normalA, d);
	  // dist is now the distance vector in the normal direction

	  // ri is the particle position projected down onto the plane, from the plane center
	  sub(c.contactPointA, particleOffset, dist);
	  sub(c.contactPointA, c.contactPointA, planeBody.position);

	  // rj is from the body center to the particle center
	  sub(c.contactPointB, particleOffset, particleBody.position);

	  this.contactEquations.push(c);

	  if (this.enableFriction) {
	    this.frictionEquations.push(this.createFrictionFromContact(c));
	  }
	  return 1;
	};

	/**
	 * Circle/Particle Narrowphase
	 * @method circleParticle
	 * @param  {Body} circleBody
	 * @param  {Circle} circleShape
	 * @param  {Array} circleOffset
	 * @param  {Number} circleAngle
	 * @param  {Body} particleBody
	 * @param  {Particle} particleShape
	 * @param  {Array} particleOffset
	 * @param  {Number} particleAngle
	 * @param  {Boolean} justTest
	 * @return {number}
	 */
	Narrowphase.prototype[Shape.CIRCLE | Shape.PARTICLE] = Narrowphase.prototype.circleParticle = function (circleBody, circleShape, circleOffset, circleAngle, particleBody, particleShape, particleOffset, particleAngle, justTest) {
	  var dist = tmp1;
	  var circleRadius = circleShape.radius;

	  sub(dist, particleOffset, circleOffset);
	  if (squaredLength(dist) > circleRadius * circleRadius) {
	    return 0;
	  }
	  if (justTest) {
	    return 1;
	  }

	  var c = this.createContactEquation(circleBody, particleBody, circleShape, particleShape);
	  var normalA = c.normalA;
	  var contactPointA = c.contactPointA;
	  var contactPointB = c.contactPointB;

	  copy(normalA, dist);
	  normalize(normalA, normalA);

	  // Vector from circle to contact point is the normal times the circle radius
	  scale(contactPointA, normalA, circleRadius);
	  add(contactPointA, contactPointA, circleOffset);
	  sub(contactPointA, contactPointA, circleBody.position);

	  // Vector from particle center to contact point is zero
	  sub(contactPointB, particleOffset, particleBody.position);

	  this.contactEquations.push(c);

	  if (this.enableFriction) {
	    this.frictionEquations.push(this.createFrictionFromContact(c));
	  }

	  return 1;
	};

	var planeCapsule_tmpCircle = new Circle({ radius: 1 }),
	    planeCapsule_tmp1 = createVec2(),
	    planeCapsule_tmp2 = createVec2();

	/**
	 * @method planeCapsule
	 * @param  {Body} planeBody
	 * @param  {Circle} planeShape
	 * @param  {Array} planeOffset
	 * @param  {Number} planeAngle
	 * @param  {Body} capsuleBody
	 * @param  {Particle} capsuleShape
	 * @param  {Array} capsuleOffset
	 * @param  {Number} capsuleAngle
	 * @param {Boolean} justTest
	 * @return {number}
	 */
	Narrowphase.prototype[Shape.PLANE | Shape.CAPSULE] = Narrowphase.prototype.planeCapsule = function (planeBody, planeShape, planeOffset, planeAngle, capsuleBody, capsuleShape, capsuleOffset, capsuleAngle, justTest) {
	  var end1 = planeCapsule_tmp1,
	      end2 = planeCapsule_tmp2,
	      circle = planeCapsule_tmpCircle,
	      halfLength = capsuleShape.length / 2;

	  // Compute world end positions
	  vec2.set(end1, -halfLength, 0);
	  vec2.set(end2, halfLength, 0);
	  vec2.toGlobalFrame(end1, end1, capsuleOffset, capsuleAngle);
	  vec2.toGlobalFrame(end2, end2, capsuleOffset, capsuleAngle);

	  circle.radius = capsuleShape.radius;

	  var enableFrictionBefore;

	  // Temporarily turn off friction
	  if (this.enableFrictionReduction) {
	    enableFrictionBefore = this.enableFriction;
	    this.enableFriction = false;
	  }

	  // Do Narrowphase as two circles
	  var numContacts1 = this.circlePlane(capsuleBody, circle, end1, 0, planeBody, planeShape, planeOffset, planeAngle, justTest),
	      numContacts2 = this.circlePlane(capsuleBody, circle, end2, 0, planeBody, planeShape, planeOffset, planeAngle, justTest);

	  // Restore friction
	  if (this.enableFrictionReduction) {
	    this.enableFriction = enableFrictionBefore;
	  }

	  if (justTest) {
	    return numContacts1 + numContacts2;
	  } else {
	    var numTotal = numContacts1 + numContacts2;
	    if (this.enableFrictionReduction) {
	      if (numTotal) {
	        this.frictionEquations.push(this.createFrictionFromAverage(numTotal));
	      }
	    }
	    return numTotal;
	  }
	};

	/**
	 * @method circlePlane
	 * @param  {Body}    circleBody
	 * @param  {Circle}  circleShape
	 * @param  {Array}   circleOffset
	 * @param  {Number}  circleAngle
	 * @param  {Body}    planeBody
	 * @param  {Plane}   planeShape
	 * @param  {Array}   planeOffset
	 * @param  {Number}  planeAngle
	 * @param  {Boolean} justTest
	 * @return {number}
	 */
	Narrowphase.prototype[Shape.CIRCLE | Shape.PLANE] = Narrowphase.prototype.circlePlane = function (circleBody, circleShape, circleOffset, circleAngle, planeBody, planeShape, planeOffset, planeAngle, justTest) {
	  var circleRadius = circleShape.radius;

	  // Vector from plane to circle
	  var planeToCircle = tmp1,
	      worldNormal = tmp2,
	      temp = tmp3;

	  sub(planeToCircle, circleOffset, planeOffset);

	  // World plane normal
	  rotate(worldNormal, yAxis, planeAngle);

	  // Normal direction distance
	  var d = dot(worldNormal, planeToCircle);

	  if (d > circleRadius) {
	    return 0; // No overlap. Abort.
	  }

	  if (justTest) {
	    return 1;
	  }

	  // Create contact
	  var contact = this.createContactEquation(planeBody, circleBody, planeShape, circleShape);

	  // ni is the plane world normal
	  copy(contact.normalA, worldNormal);

	  // rj is the vector from circle center to the contact point
	  var cpB = contact.contactPointB;
	  scale(cpB, contact.normalA, -circleRadius);
	  add(cpB, cpB, circleOffset);
	  sub(cpB, cpB, circleBody.position);

	  // ri is the distance from plane center to contact.
	  var cpA = contact.contactPointA;
	  scale(temp, contact.normalA, d);
	  sub(cpA, planeToCircle, temp); // Subtract normal distance vector from the distance vector
	  add(cpA, cpA, planeOffset);
	  sub(cpA, cpA, planeBody.position);

	  this.contactEquations.push(contact);

	  if (this.enableFriction) {
	    this.frictionEquations.push(this.createFrictionFromContact(contact));
	  }

	  return 1;
	};

	// Find the max separation between poly1 and poly2 using edge normals from poly1.
	var findMaxSeparation_n = vec2.create();
	var findMaxSeparation_v1 = vec2.create();
	var findMaxSeparation_tmp = vec2.create();
	var findMaxSeparation_tmp2 = vec2.create();
	function findMaxSeparation(maxSeparationOut, poly1, position1, angle1, poly2, position2, angle2) {
	  var count1 = poly1.vertices.length;
	  var count2 = poly2.vertices.length;
	  var n1s = poly1.normals;
	  var v1s = poly1.vertices;
	  var v2s = poly2.vertices;

	  var n = findMaxSeparation_n;
	  var v1 = findMaxSeparation_v1;
	  var tmp = findMaxSeparation_tmp;
	  var tmp2 = findMaxSeparation_tmp2;

	  var angle = angle1 - angle2;

	  var bestIndex = 0;
	  var maxSeparation = -Number.MAX_VALUE;
	  for (var i = 0; i < count1; ++i) {
	    // Get poly1 normal in frame2.
	    vec2.rotate(n, n1s[i], angle);

	    // Get poly1 vertex in frame2
	    vec2.toGlobalFrame(tmp2, v1s[i], position1, angle1);
	    vec2.toLocalFrame(v1, tmp2, position2, angle2);

	    // Find deepest point for normal i.
	    var si = Number.MAX_VALUE;
	    for (var j = 0; j < count2; ++j) {
	      vec2.subtract(tmp, v2s[j], v1);
	      var sij = vec2.dot(n, tmp);
	      if (sij < si) {
	        si = sij;
	      }
	    }

	    if (si > maxSeparation) {
	      maxSeparation = si;
	      bestIndex = i;
	    }
	  }

	  // Use a vec2 for storing the float value and always return int, for perf
	  maxSeparationOut[0] = maxSeparation;

	  return bestIndex;
	}

	var findIncidentEdge_normal1 = vec2.create();
	function findIncidentEdge(clipVerticesOut, poly1, position1, angle1, edge1, poly2, position2, angle2) {
	  var normals1 = poly1.normals;
	  var count2 = poly2.vertices.length;
	  var vertices2 = poly2.vertices;
	  var normals2 = poly2.normals;

	  // Get the normal of the reference edge in poly2's frame.
	  var normal1 = findIncidentEdge_normal1;
	  vec2.rotate(normal1, normals1[edge1], angle1 - angle2);

	  // Find the incident edge on poly2.
	  var index = 0;
	  var minDot = Number.MAX_VALUE;
	  for (var i = 0; i < count2; ++i) {
	    var dot = vec2.dot(normal1, normals2[i]);
	    if (dot < minDot) {
	      minDot = dot;
	      index = i;
	    }
	  }

	  // Build the clip vertices for the incident edge.
	  var i1 = index;
	  var i2 = i1 + 1 < count2 ? i1 + 1 : 0;

	  vec2.toGlobalFrame(clipVerticesOut[0], vertices2[i1], position2, angle2);
	  vec2.toGlobalFrame(clipVerticesOut[1], vertices2[i2], position2, angle2);
	}

	// Find edge normal of max separation on A - return if separating axis is found
	// Find edge normal of max separation on B - return if separation axis is found
	// Choose reference edge as min(minA, minB)
	// Find incident edge
	// Clip
	// The normal points from 1 to 2
	var collidePolygons_tempVec = vec2.create();
	var collidePolygons_tmpVec = vec2.create();
	var collidePolygons_localTangent = vec2.create();
	var collidePolygons_localNormal = vec2.create();
	var collidePolygons_planePoint = vec2.create();
	var collidePolygons_tangent = vec2.create();
	var collidePolygons_normal = vec2.create();
	var collidePolygons_negativeTangent = vec2.create();
	var collidePolygons_v11 = vec2.create();
	var collidePolygons_v12 = vec2.create();
	var collidePolygons_dist = vec2.create();
	var collidePolygons_clipPoints1 = [vec2.create(), vec2.create()];
	var collidePolygons_clipPoints2 = [vec2.create(), vec2.create()];
	var collidePolygons_incidentEdge = [vec2.create(), vec2.create()];
	var maxManifoldPoints = 2;
	/*function collidePolygons(
	    manifold,
	    polyA, positionA, angleA,
	    polyB, positionB, angleB,
	    incidentEdge
	) {*/

	/**
	 * Convex/convex Narrowphase.See <a href="http://www.altdevblogaday.com/2011/05/13/contact-generation-between-3d-convex-meshes/">this article</a> for more info.
	 * @method convexConvex
	 * @param  {Body} bi
	 * @param  {Convex} si
	 * @param  {Array} xi
	 * @param  {Number} ai
	 * @param  {Body} bj
	 * @param  {Convex} sj
	 * @param  {Array} xj
	 * @param  {Number} aj
	 * @param  {Boolean} justTest
	 * @return {number}
	 */
	Narrowphase.prototype[Shape.CONVEX] = Narrowphase.prototype[Shape.CONVEX | Shape.BOX] = Narrowphase.prototype[Shape.BOX] = Narrowphase.prototype.convexConvex = function (bodyA, polyA, positionA, angleA, bodyB, polyB, positionB, angleB, justTest) {
	  var totalRadius = 0;
	  var dist = collidePolygons_dist;

	  var tempVec = collidePolygons_tempVec;
	  var tmpVec = collidePolygons_tmpVec;

	  var edgeA = findMaxSeparation(tempVec, polyA, positionA, angleA, polyB, positionB, angleB);
	  var separationA = tempVec[0];
	  if (separationA > totalRadius) {
	    return 0;
	  }

	  var edgeB = findMaxSeparation(tmpVec, polyB, positionB, angleB, polyA, positionA, angleA);
	  var separationB = tmpVec[0];
	  if (separationB > totalRadius) {
	    return 0;
	  }

	  var poly1; // reference polygon
	  var poly2; // incident polygon

	  var position1;
	  var position2;
	  var angle1;
	  var angle2;
	  var body1;
	  var body2;

	  var edge1; // reference edge
	  var type;

	  if (separationB > separationA) {
	    poly1 = polyB;
	    poly2 = polyA;
	    body1 = bodyB;
	    body2 = bodyA;
	    position1 = positionB;
	    angle1 = angleB;
	    position2 = positionA;
	    angle2 = angleA;
	    edge1 = edgeB;
	    type = 1; // faceB
	  } else {
	    poly1 = polyA;
	    poly2 = polyB;
	    body1 = bodyA;
	    body2 = bodyB;
	    position1 = positionA;
	    angle1 = angleA;
	    position2 = positionB;
	    angle2 = angleB;
	    edge1 = edgeA;
	    type = 0; // faceA
	  }

	  var incidentEdge = collidePolygons_incidentEdge;
	  findIncidentEdge(incidentEdge, poly1, position1, angle1, edge1, poly2, position2, angle2);

	  var count1 = poly1.vertices.length;
	  var vertices1 = poly1.vertices;

	  var iv1 = edge1;
	  var iv2 = edge1 + 1 < count1 ? edge1 + 1 : 0;

	  var v11 = collidePolygons_v11;
	  var v12 = collidePolygons_v12;
	  vec2.copy(v11, vertices1[iv1]);
	  vec2.copy(v12, vertices1[iv2]);

	  var localTangent = collidePolygons_localTangent;
	  vec2.subtract(localTangent, v12, v11);
	  vec2.normalize(localTangent, localTangent);

	  var localNormal = collidePolygons_localNormal;
	  vec2.crossVZ(localNormal, localTangent, 1.0);
	  var planePoint = collidePolygons_planePoint;
	  vec2.add(planePoint, v11, v12);
	  vec2.scale(planePoint, planePoint, 0.5);

	  var tangent = collidePolygons_tangent; // tangent in world space
	  vec2.rotate(tangent, localTangent, angle1);
	  var normal = collidePolygons_normal; // normal in world space
	  vec2.crossVZ(normal, tangent, 1.0);

	  vec2.toGlobalFrame(v11, v11, position1, angle1);
	  vec2.toGlobalFrame(v12, v12, position1, angle1);

	  // Face offset.
	  var frontOffset = vec2.dot(normal, v11);

	  // Side offsets, extended by polytope skin thickness.
	  var sideOffset1 = -vec2.dot(tangent, v11) + totalRadius;
	  var sideOffset2 = vec2.dot(tangent, v12) + totalRadius;

	  // Clip incident edge against extruded edge1 side edges.
	  var clipPoints1 = collidePolygons_clipPoints1;
	  var clipPoints2 = collidePolygons_clipPoints2;
	  var np = 0;

	  // Clip to box side 1
	  var negativeTangent = collidePolygons_negativeTangent;
	  vec2.scale(negativeTangent, tangent, -1);
	  np = clipSegmentToLine(clipPoints1, incidentEdge, negativeTangent, sideOffset1, iv1);

	  if (np < 2) {
	    return 0;
	  }

	  // Clip to negative box side 1
	  np = clipSegmentToLine(clipPoints2, clipPoints1, tangent, sideOffset2, iv2);

	  if (np < 2) {
	    return 0;
	  }

	  var pointCount = 0;
	  for (var i = 0; i < maxManifoldPoints; ++i) {
	    var separation = vec2.dot(normal, clipPoints2[i]) - frontOffset;

	    if (separation <= totalRadius) {
	      if (justTest) {
	        return 1;
	      }

	      ++pointCount;

	      var c = this.createContactEquation(body1, body2, poly1, poly2);

	      vec2.copy(c.normalA, normal);
	      vec2.copy(c.contactPointB, clipPoints2[i]);
	      sub(c.contactPointB, c.contactPointB, body2.position);

	      vec2.scale(dist, normal, -separation);
	      vec2.add(c.contactPointA, clipPoints2[i], dist);
	      sub(c.contactPointA, c.contactPointA, body1.position);

	      this.contactEquations.push(c);

	      if (this.enableFriction && !this.enableFrictionReduction) {
	        this.frictionEquations.push(this.createFrictionFromContact(c));
	      }
	    }
	  }

	  if (pointCount && this.enableFrictionReduction && this.enableFriction) {
	    this.frictionEquations.push(this.createFrictionFromAverage(pointCount));
	  }

	  return pointCount;
	};

	function clipSegmentToLine(vOut, vIn, normal, offset) {
	  // Start with no output points
	  var numOut = 0;

	  // Calculate the distance of end points to the line
	  var distance0 = vec2.dot(normal, vIn[0]) - offset;
	  var distance1 = vec2.dot(normal, vIn[1]) - offset;

	  // If the points are behind the plane
	  if (distance0 <= 0.0) {
	    vec2.copy(vOut[numOut++], vIn[0]);
	  }
	  if (distance1 <= 0.0) {
	    vec2.copy(vOut[numOut++], vIn[1]);
	  }

	  // If the points are on different sides of the plane
	  if (distance0 * distance1 < 0.0) {
	    // Find intersection point of edge and plane
	    var interp = distance0 / (distance0 - distance1);
	    var v = vOut[numOut];
	    vec2.subtract(v, vIn[1], vIn[0]);
	    vec2.scale(v, v, interp);
	    vec2.add(v, v, vIn[0]);
	    ++numOut;
	  }

	  return numOut;
	}

	var circleHeightfield_candidate = createVec2(),
	    circleHeightfield_dist = createVec2(),
	    circleHeightfield_v0 = createVec2(),
	    circleHeightfield_v1 = createVec2(),
	    circleHeightfield_minCandidate = createVec2(),
	    circleHeightfield_worldNormal = createVec2(),
	    circleHeightfield_minCandidateNormal = createVec2();

	/**
	 * @method circleHeightfield
	 * @param  {Body}           bi
	 * @param  {Circle}         si
	 * @param  {Array}          xi
	 * @param  {Body}           bj
	 * @param  {Heightfield}    sj
	 * @param  {Array}          xj
	 * @param  {Number}         aj
	 */
	Narrowphase.prototype[Shape.CIRCLE | Shape.HEIGHTFIELD] = Narrowphase.prototype.circleHeightfield = function (circleBody, circleShape, circlePos, circleAngle, hfBody, hfShape, hfPos, hfAngle, justTest, radius) {
	  var data = hfShape.heights,
	      radius = radius || circleShape.radius,
	      w = hfShape.elementWidth,
	      dist = circleHeightfield_dist,
	      candidate = circleHeightfield_candidate,
	      minCandidate = circleHeightfield_minCandidate,
	      minCandidateNormal = circleHeightfield_minCandidateNormal,
	      worldNormal = circleHeightfield_worldNormal,
	      v0 = circleHeightfield_v0,
	      v1 = circleHeightfield_v1;

	  // Get the index of the points to test against
	  var idxA = Math.floor((circlePos[0] - radius - hfPos[0]) / w),
	      idxB = Math.ceil((circlePos[0] + radius - hfPos[0]) / w);

	  /*if(idxB < 0 || idxA >= data.length)
	      return justTest ? false : 0;*/

	  if (idxA < 0) {
	    idxA = 0;
	  }
	  if (idxB >= data.length) {
	    idxB = data.length - 1;
	  }

	  // Get max and min
	  var max = data[idxA],
	      min = data[idxB];
	  for (var i = idxA; i < idxB; i++) {
	    if (data[i] < min) {
	      min = data[i];
	    }
	    if (data[i] > max) {
	      max = data[i];
	    }
	  }

	  if (circlePos[1] - radius > max) {
	    return 0;
	  }

	  /*
	  if(circlePos[1]+radius < min){
	      // Below the minimum point... We can just guess.
	      // TODO
	  }
	  */

	  // 1. Check so center of circle is not inside the field. If it is, this wont work...
	  // 2. For each edge
	  // 2. 1. Get point on circle that is closest to the edge (scale normal with -radius)
	  // 2. 2. Check if point is inside.

	  var found = false;

	  // Check all edges first
	  for (var i = idxA; i < idxB; i++) {

	    // Get points
	    vec2.set(v0, i * w, data[i]);
	    vec2.set(v1, (i + 1) * w, data[i + 1]);
	    add(v0, v0, hfPos); // @todo transform circle to local heightfield space instead
	    add(v1, v1, hfPos);

	    // Get normal
	    sub(worldNormal, v1, v0);
	    rotate(worldNormal, worldNormal, Math.PI / 2);
	    normalize(worldNormal, worldNormal);

	    // Get point on circle, closest to the edge
	    scale(candidate, worldNormal, -radius);
	    add(candidate, candidate, circlePos);

	    // Distance from v0 to the candidate point
	    sub(dist, candidate, v0);

	    // Check if it is in the element "stick"
	    var d = dot(dist, worldNormal);
	    if (candidate[0] >= v0[0] && candidate[0] < v1[0] && d <= 0) {

	      if (justTest) {
	        return 1;
	      }

	      found = true;

	      // Store the candidate point, projected to the edge
	      scale(dist, worldNormal, -d);
	      add(minCandidate, candidate, dist);
	      copy(minCandidateNormal, worldNormal);

	      var c = this.createContactEquation(hfBody, circleBody, hfShape, circleShape);

	      // Normal is out of the heightfield
	      copy(c.normalA, minCandidateNormal);

	      // Vector from circle to heightfield
	      scale(c.contactPointB, c.normalA, -radius);
	      add(c.contactPointB, c.contactPointB, circlePos);
	      sub(c.contactPointB, c.contactPointB, circleBody.position);

	      copy(c.contactPointA, minCandidate);
	      sub(c.contactPointA, c.contactPointA, hfBody.position);

	      this.contactEquations.push(c);

	      if (this.enableFriction) {
	        this.frictionEquations.push(this.createFrictionFromContact(c));
	      }
	    }
	  }

	  // Check all vertices
	  found = false;
	  if (radius > 0) {
	    for (var i = idxA; i <= idxB; i++) {

	      // Get point
	      vec2.set(v0, i * w, data[i]);
	      add(v0, v0, hfPos);

	      sub(dist, circlePos, v0);

	      if (squaredLength(dist) < Math.pow(radius, 2)) {

	        if (justTest) {
	          return 1;
	        }

	        found = true;

	        var c = this.createContactEquation(hfBody, circleBody, hfShape, circleShape);

	        // Construct normal - out of heightfield
	        copy(c.normalA, dist);
	        normalize(c.normalA, c.normalA);

	        scale(c.contactPointB, c.normalA, -radius);
	        add(c.contactPointB, c.contactPointB, circlePos);
	        sub(c.contactPointB, c.contactPointB, circleBody.position);

	        sub(c.contactPointA, v0, hfPos);
	        add(c.contactPointA, c.contactPointA, hfPos);
	        sub(c.contactPointA, c.contactPointA, hfBody.position);

	        this.contactEquations.push(c);

	        if (this.enableFriction) {
	          this.frictionEquations.push(this.createFrictionFromContact(c));
	        }
	      }
	    }
	  }

	  if (found) {
	    return 1;
	  }

	  return 0;
	};

	var convexHeightfield_v0 = createVec2(),
	    convexHeightfield_v1 = createVec2(),
	    convexHeightfield_tilePos = createVec2(),
	    convexHeightfield_tempConvexShape = new Convex({ vertices: [createVec2(), createVec2(), createVec2(), createVec2()] });
	/**
	 * @method circleHeightfield
	 * @param  {Body}           bi
	 * @param  {Circle}         si
	 * @param  {Array}          xi
	 * @param  {Body}           bj
	 * @param  {Heightfield}    sj
	 * @param  {Array}          xj
	 * @param  {Number}         aj
	 */
	Narrowphase.prototype[Shape.BOX | Shape.HEIGHTFIELD] = Narrowphase.prototype[Shape.CONVEX | Shape.HEIGHTFIELD] = Narrowphase.prototype.convexHeightfield = function (convexBody, convexShape, convexPos, convexAngle, hfBody, hfShape, hfPos, hfAngle, justTest) {
	  var data = hfShape.heights,
	      w = hfShape.elementWidth,
	      v0 = convexHeightfield_v0,
	      v1 = convexHeightfield_v1,
	      tilePos = convexHeightfield_tilePos,
	      tileConvex = convexHeightfield_tempConvexShape;

	  // Get the index of the points to test against
	  var idxA = Math.floor((convexBody.aabb.lowerBound[0] - hfPos[0]) / w),
	      idxB = Math.ceil((convexBody.aabb.upperBound[0] - hfPos[0]) / w);

	  if (idxA < 0) {
	    idxA = 0;
	  }
	  if (idxB >= data.length) {
	    idxB = data.length - 1;
	  }

	  // Get max and min
	  var max = data[idxA],
	      min = data[idxB];
	  for (var i = idxA; i < idxB; i++) {
	    if (data[i] < min) {
	      min = data[i];
	    }
	    if (data[i] > max) {
	      max = data[i];
	    }
	  }

	  if (convexBody.aabb.lowerBound[1] > max) {
	    return 0;
	  }

	  var numContacts = 0;

	  // Loop over all edges
	  // @todo If possible, construct a convex from several data points (need o check if the points make a convex shape)
	  // @todo transform convex to local heightfield space.
	  // @todo bail out if the heightfield tile is not tall enough.
	  for (var i = idxA; i < idxB; i++) {

	    // Get points
	    vec2.set(v0, i * w, data[i]);
	    vec2.set(v1, (i + 1) * w, data[i + 1]);
	    add(v0, v0, hfPos);
	    add(v1, v1, hfPos);

	    // Construct a convex
	    var tileHeight = 100; // todo
	    vec2.set(tilePos, (v1[0] + v0[0]) * 0.5, (v1[1] + v0[1] - tileHeight) * 0.5);

	    sub(tileConvex.vertices[0], v1, tilePos);
	    sub(tileConvex.vertices[1], v0, tilePos);
	    copy(tileConvex.vertices[2], tileConvex.vertices[1]);
	    copy(tileConvex.vertices[3], tileConvex.vertices[0]);
	    tileConvex.vertices[2][1] -= tileHeight;
	    tileConvex.vertices[3][1] -= tileHeight;
	    tileConvex.updateNormals();

	    // Do convex collision
	    numContacts += this.convexConvex(convexBody, convexShape, convexPos, convexAngle, hfBody, tileConvex, tilePos, 0, justTest);
	  }

	  return numContacts;
	};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var Utils = __webpack_require__(12);

	module.exports = TupleDictionary;

	/**
	 * @class TupleDictionary
	 * @constructor
	 */
	function TupleDictionary() {
	  /**
	   * The data storage
	   * @property data
	   * @type {Object}
	   */
	  this.data = {};

	  /**
	   * Keys that are currently used.
	   * @property {Array} keys
	   */
	  this.keys = [];
	}

	/**
	 * Generate a key given two integers
	 * @method getKey
	 * @param  {number} i
	 * @param  {number} j
	 * @return {string}
	 */
	TupleDictionary.prototype.getKey = function (id1, id2) {
	  id1 = id1 | 0;
	  id2 = id2 | 0;

	  if ((id1 | 0) === (id2 | 0)) {
	    return -1;
	  }

	  // valid for values < 2^16
	  return ((id1 | 0) > (id2 | 0) ? id1 << 16 | id2 & 0xFFFF : id2 << 16 | id1 & 0xFFFF) | 0;
	};

	/**
	 * @method getByKey
	 * @param  {Number} key
	 * @return {Object}
	 */
	TupleDictionary.prototype.getByKey = function (key) {
	  key = key | 0;
	  return this.data[key];
	};

	/**
	 * @method get
	 * @param  {Number} i
	 * @param  {Number} j
	 * @return {Number}
	 */
	TupleDictionary.prototype.get = function (i, j) {
	  return this.data[this.getKey(i, j)];
	};

	/**
	 * Set a value.
	 * @method set
	 * @param  {Number} i
	 * @param  {Number} j
	 * @param {Number} value
	 */
	TupleDictionary.prototype.set = function (i, j, value) {
	  if (!value) {
	    throw new Error("No data!");
	  }

	  var key = this.getKey(i, j);

	  // Check if key already exists
	  if (!this.data[key]) {
	    this.keys.push(key);
	  }

	  this.data[key] = value;

	  return key;
	};

	/**
	 * Remove all data.
	 * @method reset
	 */
	TupleDictionary.prototype.reset = function () {
	  var data = this.data,
	      keys = this.keys;

	  var l = keys.length;
	  while (l--) {
	    delete data[keys[l]];
	  }

	  keys.length = 0;
	};

	/**
	 * Copy another TupleDictionary. Note that all data in this dictionary will be removed.
	 * @method copy
	 * @param {TupleDictionary} dict The TupleDictionary to copy into this one.
	 */
	TupleDictionary.prototype.copy = function (dict) {
	  this.reset();
	  Utils.appendArray(this.keys, dict.keys);
	  var l = dict.keys.length;
	  while (l--) {
	    var key = dict.keys[l];
	    this.data[key] = dict.data[key];
	  }
	};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var vec2 = __webpack_require__(11),
	    Shape = __webpack_require__(22),
	    shallowClone = __webpack_require__(12).shallowClone,
	    Convex = __webpack_require__(21);

	module.exports = Box;

	/**
	 * Box shape class.
	 * @class Box
	 * @constructor
	 * @param {object} [options] (Note that this options object will be passed on to the {{#crossLink "Shape"}}{{/crossLink}} constructor.)
	 * @param {Number} [options.width=1] Total width of the box
	 * @param {Number} [options.height=1] Total height of the box
	 * @extends Convex
	 * @example
	 *     var body = new Body({ mass: 1 });
	 *     var boxShape = new Box({
	 *         width: 2,
	 *         height: 1
	 *     });
	 *     body.addShape(boxShape);
	 */
	function Box(options) {
	    options = options || {};

	    /**
	     * Total width of the box
	     * @property width
	     * @type {Number}
	     */
	    var width = this.width = options.width !== undefined ? options.width : 1;

	    /**
	     * Total height of the box
	     * @property height
	     * @type {Number}
	     */
	    var height = this.height = options.height !== undefined ? options.height : 1;

	    var verts = [vec2.fromValues(-width / 2, -height / 2), vec2.fromValues(width / 2, -height / 2), vec2.fromValues(width / 2, height / 2), vec2.fromValues(-width / 2, height / 2)];

	    var convexOptions = shallowClone(options);
	    convexOptions.vertices = verts;
	    convexOptions.type = Shape.BOX;
	    Convex.call(this, convexOptions);
	}
	Box.prototype = new Convex();
	Box.prototype.constructor = Box;

	/**
	 * Compute moment of inertia
	 * @method computeMomentOfInertia
	 * @return {Number}
	 */
	Box.prototype.computeMomentOfInertia = function () {
	    var w = this.width,
	        h = this.height;
	    return (h * h + w * w) / 12;
	};

	/**
	 * Update the bounding radius
	 * @method updateBoundingRadius
	 */
	Box.prototype.updateBoundingRadius = function () {
	    var w = this.width,
	        h = this.height;
	    this.boundingRadius = Math.sqrt(w * w + h * h) / 2;
	};

	/**
	 * @method computeAABB
	 * @param  {AABB}   out      The resulting AABB.
	 * @param  {Array}  position
	 * @param  {Number} angle
	 */
	Box.prototype.computeAABB = function (out, position, angle) {
	    var c = Math.abs(Math.cos(angle)),
	        s = Math.abs(Math.sin(angle)),
	        w = this.width,
	        h = this.height;

	    var height = (w * s + h * c) * 0.5;
	    var width = (h * s + w * c) * 0.5;

	    var l = out.lowerBound;
	    var u = out.upperBound;
	    var px = position[0];
	    var py = position[1];
	    l[0] = px - width;
	    l[1] = py - height;
	    u[0] = px + width;
	    u[1] = py + height;
	};

	Box.prototype.updateArea = function () {
	    this.area = this.width * this.height;
	};

	Box.prototype.pointTest = function (localPoint) {
	    return Math.abs(localPoint[0]) <= this.width * 0.5 && Math.abs(localPoint[1]) <= this.height * 0.5;
	};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Broadphase = __webpack_require__(27);

	module.exports = NaiveBroadphase;

	/**
	 * Naive broadphase implementation. Does N^2 tests.
	 *
	 * @class NaiveBroadphase
	 * @constructor
	 * @extends Broadphase
	 */
	function NaiveBroadphase() {
	  Broadphase.call(this, Broadphase.NAIVE);
	}
	NaiveBroadphase.prototype = new Broadphase();
	NaiveBroadphase.prototype.constructor = NaiveBroadphase;

	/**
	 * Get the colliding pairs
	 * @method getCollisionPairs
	 * @param  {World} world
	 * @return {Array}
	 */
	NaiveBroadphase.prototype.getCollisionPairs = function (world) {
	  var bodies = world.bodies,
	      result = this.result;

	  result.length = 0;

	  for (var i = 0, Ncolliding = bodies.length; i !== Ncolliding; i++) {
	    var bi = bodies[i];

	    for (var j = 0; j < i; j++) {
	      var bj = bodies[j];

	      if (Broadphase.canCollide(bi, bj) && this.boundingVolumeCheck(bi, bj)) {
	        result.push(bi, bj);
	      }
	    }
	  }

	  return result;
	};

	/**
	 * Returns all the bodies within an AABB.
	 * @method aabbQuery
	 * @param  {World} world
	 * @param  {AABB} aabb
	 * @param {array} result An array to store resulting bodies in.
	 * @return {array}
	 */
	NaiveBroadphase.prototype.aabbQuery = function (world, aabb, result) {
	  result = result || [];

	  var bodies = world.bodies;
	  for (var i = 0; i < bodies.length; i++) {
	    var b = bodies[i];

	    if (b.aabbNeedsUpdate) {
	      b.updateAABB();
	    }

	    if (b.aabb.overlaps(aabb)) {
	      result.push(b);
	    }
	  }

	  return result;
	};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Shape = __webpack_require__(22),
	    shallowClone = __webpack_require__(12).shallowClone,
	    copy = __webpack_require__(11).copy;

	module.exports = Particle;

	/**
	 * Particle shape class.
	 * @class Particle
	 * @constructor
	 * @param {object} [options] (Note that this options object will be passed on to the {{#crossLink "Shape"}}{{/crossLink}} constructor.)
	 * @extends Shape
	 * @example
	 *     var body = new Body();
	 *     var shape = new Particle();
	 *     body.addShape(shape);
	 */
	function Particle(options) {
	  options = options ? shallowClone(options) : {};
	  options.type = Shape.PARTICLE;
	  Shape.call(this, options);
	}
	Particle.prototype = new Shape();
	Particle.prototype.constructor = Particle;

	Particle.prototype.computeMomentOfInertia = function () {
	  return 0; // Can't rotate a particle
	};

	Particle.prototype.updateBoundingRadius = function () {
	  this.boundingRadius = 0;
	};

	/**
	 * @method computeAABB
	 * @param  {AABB}   out
	 * @param  {Array}  position
	 * @param  {Number} angle
	 */
	Particle.prototype.computeAABB = function (out, position /*, angle*/) {
	  copy(out.lowerBound, position);
	  copy(out.upperBound, position);
	};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Shape = __webpack_require__(22),
	    vec2 = __webpack_require__(11),
	    Utils = __webpack_require__(12);

	module.exports = Plane;

	/**
	 * Plane shape class. The plane is facing in the Y direction.
	 * @class Plane
	 * @extends Shape
	 * @constructor
	 * @param {object} [options] (Note that this options object will be passed on to the {{#crossLink "Shape"}}{{/crossLink}} constructor.)
	 * @example
	 *     var body = new Body();
	 *     var shape = new Plane();
	 *     body.addShape(shape);
	 */
	function Plane(options) {
	    options = options ? Utils.shallowClone(options) : {};
	    options.type = Shape.PLANE;
	    Shape.call(this, options);
	}
	Plane.prototype = new Shape();
	Plane.prototype.constructor = Plane;

	/**
	 * Compute moment of inertia
	 * @method computeMomentOfInertia
	 */
	Plane.prototype.computeMomentOfInertia = function () {
	    return 0; // Plane is infinite. The inertia should therefore be infinty but by convention we set 0 here
	};

	/**
	 * Update the bounding radius
	 * @method updateBoundingRadius
	 */
	Plane.prototype.updateBoundingRadius = function () {
	    this.boundingRadius = Number.MAX_VALUE;
	};

	/**
	 * @method computeAABB
	 * @param  {AABB}   out
	 * @param  {Array}  position
	 * @param  {Number} angle
	 */
	Plane.prototype.computeAABB = function (out, position, angle) {
	    var a = angle % (2 * Math.PI);
	    var set = vec2.set;
	    var max = 1e7;
	    var lowerBound = out.lowerBound;
	    var upperBound = out.upperBound;

	    // Set max bounds
	    set(lowerBound, -max, -max);
	    set(upperBound, max, max);

	    if (a === 0) {
	        // y goes from -inf to 0
	        upperBound[1] = position[1];
	    } else if (a === Math.PI / 2) {

	        // x goes from 0 to inf
	        lowerBound[0] = position[0];
	    } else if (a === Math.PI) {

	        // y goes from 0 to inf
	        lowerBound[1] = position[1];
	    } else if (a === 3 * Math.PI / 2) {

	        // x goes from -inf to 0
	        upperBound[0] = position[0];
	    }
	};

	Plane.prototype.updateArea = function () {
	    this.area = Number.MAX_VALUE;
	};

	var intersectPlane_planePointToFrom = vec2.create();
	var intersectPlane_normal = vec2.create();
	var intersectPlane_len = vec2.create();

	/**
	 * @method raycast
	 * @param  {RayResult} result
	 * @param  {Ray} ray
	 * @param  {array} position
	 * @param  {number} angle
	 */
	Plane.prototype.raycast = function (result, ray, position, angle) {
	    var from = ray.from;
	    var to = ray.to;
	    var direction = ray.direction;
	    var planePointToFrom = intersectPlane_planePointToFrom;
	    var normal = intersectPlane_normal;
	    var len = intersectPlane_len;

	    // Get plane normal
	    vec2.set(normal, 0, 1);
	    vec2.rotate(normal, normal, angle);

	    vec2.subtract(len, from, position);
	    var planeToFrom = vec2.dot(len, normal);
	    vec2.subtract(len, to, position);
	    var planeToTo = vec2.dot(len, normal);

	    if (planeToFrom * planeToTo > 0) {
	        // "from" and "to" are on the same side of the plane... bail out
	        return;
	    }

	    if (vec2.squaredDistance(from, to) < planeToFrom * planeToFrom) {
	        return;
	    }

	    var n_dot_dir = vec2.dot(normal, direction);

	    vec2.subtract(planePointToFrom, from, position);
	    var t = -vec2.dot(normal, planePointToFrom) / n_dot_dir / ray.length;

	    ray.reportIntersection(result, t, normal, -1);
	};

	Plane.prototype.pointTest = function (localPoint) {
	    return localPoint[1] <= 0;
	};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Constraint = __webpack_require__(30),
	    Equation = __webpack_require__(14),
	    RotationalVelocityEquation = __webpack_require__(52),
	    RotationalLockEquation = __webpack_require__(53),
	    vec2 = __webpack_require__(11),
	    sub = vec2.subtract,
	    add = vec2.add,
	    rotate = vec2.rotate,
	    dot = vec2.dot,
	    copy = vec2.copy,
	    crossLength = vec2.crossLength;

	module.exports = RevoluteConstraint;

	var worldPivotA = vec2.create(),
	    worldPivotB = vec2.create(),
	    xAxis = vec2.fromValues(1, 0),
	    yAxis = vec2.fromValues(0, 1),
	    g = vec2.create();

	/**
	 * Connects two bodies at given offset points, letting them rotate relative to each other around this point.
	 * @class RevoluteConstraint
	 * @constructor
	 * @author schteppe
	 * @param {Body}    bodyA
	 * @param {Body}    bodyB
	 * @param {Object}  [options]
	 * @param {Array}   [options.worldPivot] A pivot point given in world coordinates. If specified, localPivotA and localPivotB are automatically computed from this value.
	 * @param {Array}   [options.localPivotA] The point relative to the center of mass of bodyA which bodyA is constrained to.
	 * @param {Array}   [options.localPivotB] See localPivotA.
	 * @param {Number}  [options.maxForce] The maximum force that should be applied to constrain the bodies.
	 * @extends Constraint
	 *
	 * @example
	 *     // This will create a revolute constraint between two bodies with pivot point in between them.
	 *     var bodyA = new Body({ mass: 1, position: [-1, 0] });
	 *     world.addBody(bodyA);
	 *
	 *     var bodyB = new Body({ mass: 1, position: [1, 0] });
	 *     world.addBody(bodyB);
	 *
	 *     var constraint = new RevoluteConstraint(bodyA, bodyB, {
	 *         worldPivot: [0, 0]
	 *     });
	 *     world.addConstraint(constraint);
	 *
	 *     // Using body-local pivot points, the constraint could have been constructed like this:
	 *     var constraint = new RevoluteConstraint(bodyA, bodyB, {
	 *         localPivotA: [1, 0],
	 *         localPivotB: [-1, 0]
	 *     });
	 */
	function RevoluteConstraint(bodyA, bodyB, options) {
	  options = options || {};
	  Constraint.call(this, bodyA, bodyB, Constraint.REVOLUTE, options);

	  var maxForce = this.maxForce = options.maxForce !== undefined ? options.maxForce : Number.MAX_VALUE;

	  /**
	   * @property {Array} pivotA
	   */
	  var pivotA = this.pivotA = vec2.create();

	  /**
	   * @property {Array} pivotB
	   */
	  var pivotB = this.pivotB = vec2.create();

	  if (options.worldPivot) {
	    // Compute pivotA and pivotB
	    sub(pivotA, options.worldPivot, bodyA.position);
	    sub(pivotB, options.worldPivot, bodyB.position);
	    // Rotate to local coordinate system
	    rotate(pivotA, pivotA, -bodyA.angle);
	    rotate(pivotB, pivotB, -bodyB.angle);
	  } else {
	    // Get pivotA and pivotB
	    if (options.localPivotA) {
	      copy(pivotA, options.localPivotA);
	    }
	    if (options.localPivotB) {
	      copy(pivotB, options.localPivotB);
	    }
	  }

	  var motorEquation = this.motorEquation = new RotationalVelocityEquation(bodyA, bodyB);
	  motorEquation.enabled = false;

	  var upperLimitEquation = this.upperLimitEquation = new RotationalLockEquation(bodyA, bodyB);
	  var lowerLimitEquation = this.lowerLimitEquation = new RotationalLockEquation(bodyA, bodyB);
	  upperLimitEquation.minForce = lowerLimitEquation.maxForce = 0;

	  // Equations to be fed to the solver
	  var eqs = this.equations = [new Equation(bodyA, bodyB, -maxForce, maxForce), new Equation(bodyA, bodyB, -maxForce, maxForce), motorEquation, upperLimitEquation, lowerLimitEquation];

	  var x = eqs[0];
	  var y = eqs[1];

	  x.computeGq = function () {
	    rotate(worldPivotA, pivotA, bodyA.angle);
	    rotate(worldPivotB, pivotB, bodyB.angle);
	    add(g, bodyB.position, worldPivotB);
	    sub(g, g, bodyA.position);
	    sub(g, g, worldPivotA);
	    return dot(g, xAxis);
	  };

	  y.computeGq = function () {
	    rotate(worldPivotA, pivotA, bodyA.angle);
	    rotate(worldPivotB, pivotB, bodyB.angle);
	    add(g, bodyB.position, worldPivotB);
	    sub(g, g, bodyA.position);
	    sub(g, g, worldPivotA);
	    return dot(g, yAxis);
	  };

	  y.minForce = x.minForce = -maxForce;
	  y.maxForce = x.maxForce = maxForce;

	  // These never change but the angular parts do
	  x.G[0] = -1;
	  x.G[1] = 0;

	  x.G[3] = 1;
	  x.G[4] = 0;

	  y.G[0] = 0;
	  y.G[1] = -1;

	  y.G[3] = 0;
	  y.G[4] = 1;

	  /**
	   * The constraint position.
	   * @property angle
	   * @type {Number}
	   * @readOnly
	   */
	  this.angle = 0;

	  /**
	   * Set to true to enable lower limit
	   * @property lowerLimitEnabled
	   * @type {Boolean}
	   */
	  this.lowerLimitEnabled = false;

	  /**
	   * Set to true to enable upper limit
	   * @property upperLimitEnabled
	   * @type {Boolean}
	   */
	  this.upperLimitEnabled = false;

	  /**
	   * The lower limit on the constraint angle.
	   * @property lowerLimit
	   * @type {Boolean}
	   */
	  this.lowerLimit = 0;

	  /**
	   * The upper limit on the constraint angle.
	   * @property upperLimit
	   * @type {Boolean}
	   */
	  this.upperLimit = 0;
	}
	RevoluteConstraint.prototype = new Constraint();
	RevoluteConstraint.prototype.constructor = RevoluteConstraint;

	/**
	 * Set the constraint angle limits, and enable them.
	 * @method setLimits
	 * @param {number} lower Lower angle limit.
	 * @param {number} upper Upper angle limit.
	 */
	RevoluteConstraint.prototype.setLimits = function (lower, upper) {
	  this.lowerLimit = lower;
	  this.upperLimit = upper;
	  this.lowerLimitEnabled = this.upperLimitEnabled = true;
	};

	RevoluteConstraint.prototype.update = function () {
	  var bodyA = this.bodyA,
	      bodyB = this.bodyB,
	      pivotA = this.pivotA,
	      pivotB = this.pivotB,
	      eqs = this.equations,
	      x = eqs[0],
	      y = eqs[1],
	      upperLimit = this.upperLimit,
	      lowerLimit = this.lowerLimit,
	      upperLimitEquation = this.upperLimitEquation,
	      lowerLimitEquation = this.lowerLimitEquation;

	  var relAngle = this.angle = bodyB.angle - bodyA.angle;

	  upperLimitEquation.angle = upperLimit;
	  upperLimitEquation.enabled = this.upperLimitEnabled && relAngle > upperLimit;

	  lowerLimitEquation.angle = lowerLimit;
	  lowerLimitEquation.enabled = this.lowerLimitEnabled && relAngle < lowerLimit;

	  /*
	   The constraint violation is
	       g = xj + rj - xi - ri
	   ...where xi and xj are the body positions and ri and rj world-oriented offset vectors. Differentiate:
	       gdot = vj + wj x rj - vi - wi x ri
	   We split this into x and y directions. (let x and y be unit vectors along the respective axes)
	       gdot * x = ( vj + wj x rj - vi - wi x ri ) * x
	               = ( vj*x + (wj x rj)*x -vi*x -(wi x ri)*x
	               = ( vj*x + (rj x x)*wj -vi*x -(ri x x)*wi
	               = [ -x   -(ri x x)   x   (rj x x)] * [vi wi vj wj]
	               = G*W
	   ...and similar for y. We have then identified the jacobian entries for x and y directions:
	       Gx = [ x   (rj x x)   -x   -(ri x x)]
	      Gy = [ y   (rj x y)   -y   -(ri x y)]
	   So for example, in the X direction we would get in 2 dimensions
	       G = [ [1   0   (rj x [1,0])   -1   0   -(ri x [1,0])]
	            [0   1   (rj x [0,1])    0  -1   -(ri x [0,1])]
	   */

	  rotate(worldPivotA, pivotA, bodyA.angle);
	  rotate(worldPivotB, pivotB, bodyB.angle);

	  // @todo: these are a bit sparse. We could save some computations on making custom eq.computeGW functions, etc

	  var xG = x.G;
	  xG[2] = -crossLength(worldPivotA, xAxis);
	  xG[5] = crossLength(worldPivotB, xAxis);

	  var yG = y.G;
	  yG[2] = -crossLength(worldPivotA, yAxis);
	  yG[5] = crossLength(worldPivotB, yAxis);
	};

	Object.defineProperties(RevoluteConstraint.prototype, {

	  /**
	   * @property {boolean} motorEnabled
	   */
	  motorEnabled: {
	    get: function get() {
	      return this.motorEquation.enabled;
	    },
	    set: function set(value) {
	      this.motorEquation.enabled = value;
	    }
	  },

	  /**
	   * @property {number} motorSpeed
	   */
	  motorSpeed: {
	    get: function get() {
	      return this.motorEquation.relativeVelocity;
	    },
	    set: function set(value) {
	      this.motorEquation.relativeVelocity = value;
	    }
	  },

	  /**
	   * @property {number} motorMaxForce
	   */
	  motorMaxForce: {
	    get: function get() {
	      return this.motorEquation.maxForce;
	    },
	    set: function set(value) {
	      var eq = this.motorEquation;
	      eq.maxForce = value;
	      eq.minForce = -value;
	    }
	  }
	});

	/**
	 * Enable the rotational motor
	 * @deprecated Use motorEnabled instead
	 * @method enableMotor
	 */
	RevoluteConstraint.prototype.enableMotor = function () {
	  console.warn("revolute.enableMotor() is deprecated, do revolute.motorEnabled = true; instead.");
	  this.motorEnabled = true;
	};

	/**
	 * Disable the rotational motor
	 * @deprecated Use motorEnabled instead
	 * @method disableMotor
	 */
	RevoluteConstraint.prototype.disableMotor = function () {
	  console.warn("revolute.disableMotor() is deprecated, do revolute.motorEnabled = false; instead.");
	  this.motorEnabled = false;
	};

	/**
	 * Check if the motor is enabled.
	 * @method motorIsEnabled
	 * @deprecated Use motorEnabled instead
	 * @return {Boolean}
	 */
	RevoluteConstraint.prototype.motorIsEnabled = function () {
	  console.warn("revolute.motorIsEnabled() is deprecated, use revolute.motorEnabled instead.");
	  return this.motorEnabled;
	};

	/**
	 * Set the speed of the rotational constraint motor
	 * @method setMotorSpeed
	 * @deprecated Use .motorSpeed instead
	 * @param {Number} speed
	 */
	RevoluteConstraint.prototype.setMotorSpeed = function (speed) {
	  console.warn("revolute.setMotorSpeed(speed) is deprecated, do revolute.motorSpeed = speed; instead.");
	  this.motorSpeed = speed;
	};

	/**
	 * Get the speed of the rotational constraint motor
	 * @deprecated Use .motorSpeed instead
	 * @method getMotorSpeed
	 * @return {Number}
	 */
	RevoluteConstraint.prototype.getMotorSpeed = function () {
	  console.warn("revolute.getMotorSpeed() is deprecated, use revolute.motorSpeed instead.");
	  return this.motorSpeed;
	};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var Equation = __webpack_require__(14);

	module.exports = RotationalVelocityEquation;

	/**
	 * Syncs rotational velocity of two bodies, or sets a relative velocity (motor).
	 *
	 * @class RotationalVelocityEquation
	 * @constructor
	 * @extends Equation
	 * @param {Body} bodyA
	 * @param {Body} bodyB
	 */
	function RotationalVelocityEquation(bodyA, bodyB) {
	    Equation.call(this, bodyA, bodyB, -Number.MAX_VALUE, Number.MAX_VALUE);
	    this.relativeVelocity = 1;
	    this.ratio = 1;
	}
	RotationalVelocityEquation.prototype = new Equation();
	RotationalVelocityEquation.prototype.constructor = RotationalVelocityEquation;
	RotationalVelocityEquation.prototype.computeB = function (a, b, h) {
	    var G = this.G;
	    G[2] = -1;
	    G[5] = this.ratio;

	    var GiMf = this.computeGiMf();
	    var GW = this.computeGW();
	    var B = -GW * b - h * GiMf;

	    return B;
	};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var Equation = __webpack_require__(14),
	    vec2 = __webpack_require__(11);

	module.exports = RotationalLockEquation;

	/**
	 * Locks the relative angle between two bodies. The constraint tries to keep the dot product between two vectors, local in each body, to zero. The local angle in body i is a parameter.
	 *
	 * @class RotationalLockEquation
	 * @constructor
	 * @extends Equation
	 * @param {Body} bodyA
	 * @param {Body} bodyB
	 * @param {Object} [options]
	 * @param {Number} [options.angle] Angle to add to the local vector in bodyA.
	 */
	function RotationalLockEquation(bodyA, bodyB, options) {
	    options = options || {};
	    Equation.call(this, bodyA, bodyB, -Number.MAX_VALUE, Number.MAX_VALUE);

	    /**
	     * @property {number} angle
	     */
	    this.angle = options.angle || 0;

	    var G = this.G;
	    G[2] = 1;
	    G[5] = -1;
	}
	RotationalLockEquation.prototype = new Equation();
	RotationalLockEquation.prototype.constructor = RotationalLockEquation;

	var worldVectorA = vec2.create(),
	    worldVectorB = vec2.create(),
	    xAxis = vec2.fromValues(1, 0),
	    yAxis = vec2.fromValues(0, 1);
	RotationalLockEquation.prototype.computeGq = function () {
	    vec2.rotate(worldVectorA, xAxis, this.bodyA.angle + this.angle);
	    vec2.rotate(worldVectorB, yAxis, this.bodyB.angle);
	    return vec2.dot(worldVectorA, worldVectorB);
	};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Constraint = __webpack_require__(30),
	    ContactEquation = __webpack_require__(31),
	    Equation = __webpack_require__(14),
	    vec2 = __webpack_require__(11),
	    RotationalLockEquation = __webpack_require__(53);

	module.exports = PrismaticConstraint;

	/**
	 * Constraint that only allows bodies to move along a line, relative to each other. See <a href="http://www.iforce2d.net/b2dtut/joints-prismatic">this tutorial</a>. Also called "slider constraint".
	 *
	 * @class PrismaticConstraint
	 * @constructor
	 * @extends Constraint
	 * @author schteppe
	 * @param {Body} bodyA
	 * @param {Body} bodyB
	 * @param {Object} [options]
	 * @param {Number} [options.maxForce] Max force to be applied by the constraint
	 * @param {Array} [options.localAnchorA] Body A's anchor point, defined in its own local frame.
	 * @param {Array} [options.localAnchorB] Body B's anchor point, defined in its own local frame.
	 * @param {Array} [options.localAxisA] An axis, defined in body A frame, that body B's anchor point may slide along.
	 * @param {Boolean} [options.disableRotationalLock] If set to true, bodyB will be free to rotate around its anchor point.
	 * @param {Number} [options.upperLimit]
	 * @param {Number} [options.lowerLimit]
	 * @todo Ability to create using only a point and a worldAxis
	 * @example
	 *     var constraint = new PrismaticConstraint(bodyA, bodyB, {
	 *         localAxisA: [0, 1]
	 *     });
	 *     world.addConstraint(constraint);
	 */
	function PrismaticConstraint(bodyA, bodyB, options) {
	  options = options || {};
	  Constraint.call(this, bodyA, bodyB, Constraint.PRISMATIC, options);

	  // Get anchors
	  var localAnchorA = vec2.create(),
	      localAxisA = vec2.fromValues(1, 0),
	      localAnchorB = vec2.create();
	  if (options.localAnchorA) {
	    vec2.copy(localAnchorA, options.localAnchorA);
	  }
	  if (options.localAxisA) {
	    vec2.copy(localAxisA, options.localAxisA);
	  }
	  if (options.localAnchorB) {
	    vec2.copy(localAnchorB, options.localAnchorB);
	  }

	  /**
	   * @property localAnchorA
	   * @type {Array}
	   */
	  this.localAnchorA = localAnchorA;

	  /**
	   * @property localAnchorB
	   * @type {Array}
	   */
	  this.localAnchorB = localAnchorB;

	  /**
	   * @property localAxisA
	   * @type {Array}
	   */
	  this.localAxisA = localAxisA;

	  /*
	   The constraint violation for the common axis point is
	       g = ( xj + rj - xi - ri ) * t   :=  gg*t
	   where r are body-local anchor points, and t is a tangent to the constraint axis defined in body i frame.
	       gdot =  ( vj + wj x rj - vi - wi x ri ) * t + ( xj + rj - xi - ri ) * ( wi x t )
	   Note the use of the chain rule. Now we identify the jacobian
	       G*W = [ -t      -ri x t + t x gg     t    rj x t ] * [vi wi vj wj]
	   The rotational part is just a rotation lock.
	    */

	  var maxForce = this.maxForce = options.maxForce !== undefined ? options.maxForce : Number.MAX_VALUE;

	  // Translational part
	  var trans = new Equation(bodyA, bodyB, -maxForce, maxForce);
	  var ri = new vec2.create(),
	      rj = new vec2.create(),
	      gg = new vec2.create(),
	      t = new vec2.create();
	  trans.computeGq = function () {
	    // g = ( xj + rj - xi - ri ) * t
	    return vec2.dot(gg, t);
	  };
	  trans.updateJacobian = function () {
	    var G = this.G,
	        xi = bodyA.position,
	        xj = bodyB.position;
	    vec2.rotate(ri, localAnchorA, bodyA.angle);
	    vec2.rotate(rj, localAnchorB, bodyB.angle);
	    vec2.add(gg, xj, rj);
	    vec2.subtract(gg, gg, xi);
	    vec2.subtract(gg, gg, ri);
	    vec2.rotate(t, localAxisA, bodyA.angle + Math.PI / 2);

	    G[0] = -t[0];
	    G[1] = -t[1];
	    G[2] = -vec2.crossLength(ri, t) + vec2.crossLength(t, gg);
	    G[3] = t[0];
	    G[4] = t[1];
	    G[5] = vec2.crossLength(rj, t);
	  };
	  this.equations.push(trans);

	  // Rotational part
	  if (!options.disableRotationalLock) {
	    var rot = new RotationalLockEquation(bodyA, bodyB, -maxForce, maxForce);
	    this.equations.push(rot);
	  }

	  /**
	   * The position of anchor A relative to anchor B, along the constraint axis.
	   * @property position
	   * @type {Number}
	   */
	  this.position = 0;

	  // Is this one used at all?
	  this.velocity = 0;

	  /**
	   * Set to true to enable lower limit.
	   * @property lowerLimitEnabled
	   * @type {Boolean}
	   */
	  this.lowerLimitEnabled = options.lowerLimit !== undefined ? true : false;

	  /**
	   * Set to true to enable upper limit.
	   * @property upperLimitEnabled
	   * @type {Boolean}
	   */
	  this.upperLimitEnabled = options.upperLimit !== undefined ? true : false;

	  /**
	   * Lower constraint limit. The constraint position is forced to be larger than this value.
	   * @property lowerLimit
	   * @type {Number}
	   */
	  this.lowerLimit = options.lowerLimit !== undefined ? options.lowerLimit : 0;

	  /**
	   * Upper constraint limit. The constraint position is forced to be smaller than this value.
	   * @property upperLimit
	   * @type {Number}
	   */
	  this.upperLimit = options.upperLimit !== undefined ? options.upperLimit : 1;

	  // Equations used for limits
	  this.upperLimitEquation = new ContactEquation(bodyA, bodyB);
	  this.lowerLimitEquation = new ContactEquation(bodyA, bodyB);

	  // Set max/min forces
	  this.upperLimitEquation.minForce = this.lowerLimitEquation.minForce = 0;
	  this.upperLimitEquation.maxForce = this.lowerLimitEquation.maxForce = maxForce;

	  /**
	   * Equation used for the motor.
	   * @property motorEquation
	   * @type {Equation}
	   */
	  this.motorEquation = new Equation(bodyA, bodyB);

	  /**
	   * The current motor state. Enable or disable the motor using .enableMotor
	   * @property motorEnabled
	   * @type {Boolean}
	   */
	  this.motorEnabled = false;

	  /**
	   * Set the target speed for the motor.
	   * @property motorSpeed
	   * @type {Number}
	   */
	  this.motorSpeed = 0;

	  var that = this;
	  var motorEquation = this.motorEquation;
	  motorEquation.computeGq = function () {
	    return 0;
	  };
	  motorEquation.computeGW = function () {
	    var G = this.G,
	        bi = this.bodyA,
	        bj = this.bodyB,
	        vi = bi.velocity,
	        vj = bj.velocity,
	        wi = bi.angularVelocity,
	        wj = bj.angularVelocity;
	    return this.gmult(G, vi, wi, vj, wj) + that.motorSpeed;
	  };
	}

	PrismaticConstraint.prototype = new Constraint();
	PrismaticConstraint.prototype.constructor = PrismaticConstraint;

	var worldAxisA = vec2.create(),
	    worldAnchorA = vec2.create(),
	    worldAnchorB = vec2.create(),
	    orientedAnchorA = vec2.create(),
	    orientedAnchorB = vec2.create(),
	    tmp = vec2.create();

	/**
	 * Update the constraint equations. Should be done if any of the bodies changed position, before solving.
	 * @method update
	 */
	PrismaticConstraint.prototype.update = function () {
	  var eqs = this.equations,
	      trans = eqs[0],
	      upperLimit = this.upperLimit,
	      lowerLimit = this.lowerLimit,
	      upperLimitEquation = this.upperLimitEquation,
	      lowerLimitEquation = this.lowerLimitEquation,
	      bodyA = this.bodyA,
	      bodyB = this.bodyB,
	      localAxisA = this.localAxisA,
	      localAnchorA = this.localAnchorA,
	      localAnchorB = this.localAnchorB;

	  trans.updateJacobian();

	  // Transform local things to world
	  vec2.rotate(worldAxisA, localAxisA, bodyA.angle);
	  vec2.rotate(orientedAnchorA, localAnchorA, bodyA.angle);
	  vec2.add(worldAnchorA, orientedAnchorA, bodyA.position);
	  vec2.rotate(orientedAnchorB, localAnchorB, bodyB.angle);
	  vec2.add(worldAnchorB, orientedAnchorB, bodyB.position);

	  var relPosition = this.position = vec2.dot(worldAnchorB, worldAxisA) - vec2.dot(worldAnchorA, worldAxisA);

	  // Motor
	  if (this.motorEnabled) {
	    // G = [ a     a x ri   -a   -a x rj ]
	    var G = this.motorEquation.G;
	    G[0] = worldAxisA[0];
	    G[1] = worldAxisA[1];
	    G[2] = vec2.crossLength(worldAxisA, orientedAnchorB);
	    G[3] = -worldAxisA[0];
	    G[4] = -worldAxisA[1];
	    G[5] = -vec2.crossLength(worldAxisA, orientedAnchorA);
	  }

	  /*
	      Limits strategy:
	      Add contact equation, with normal along the constraint axis.
	      min/maxForce is set so the constraint is repulsive in the correct direction.
	      Some offset is added to either equation.contactPointA or .contactPointB to get the correct upper/lower limit.
	                ^
	               |
	    upperLimit x
	               |    ------
	       anchorB x<---|  B |
	               |    |    |
	      ------   |    ------
	      |    |   |
	      |  A |-->x anchorA
	      ------   |
	               x lowerLimit
	               |
	              axis
	   */
	  if (this.upperLimitEnabled && relPosition > upperLimit) {
	    // Update contact constraint normal, etc
	    vec2.scale(upperLimitEquation.normalA, worldAxisA, -1);
	    vec2.subtract(upperLimitEquation.contactPointA, worldAnchorA, bodyA.position);
	    vec2.subtract(upperLimitEquation.contactPointB, worldAnchorB, bodyB.position);
	    vec2.scale(tmp, worldAxisA, upperLimit);
	    vec2.add(upperLimitEquation.contactPointA, upperLimitEquation.contactPointA, tmp);
	    if (eqs.indexOf(upperLimitEquation) === -1) {
	      eqs.push(upperLimitEquation);
	    }
	  } else {
	    var idx = eqs.indexOf(upperLimitEquation);
	    if (idx !== -1) {
	      eqs.splice(idx, 1);
	    }
	  }

	  if (this.lowerLimitEnabled && relPosition < lowerLimit) {
	    // Update contact constraint normal, etc
	    vec2.scale(lowerLimitEquation.normalA, worldAxisA, 1);
	    vec2.subtract(lowerLimitEquation.contactPointA, worldAnchorA, bodyA.position);
	    vec2.subtract(lowerLimitEquation.contactPointB, worldAnchorB, bodyB.position);
	    vec2.scale(tmp, worldAxisA, lowerLimit);
	    vec2.subtract(lowerLimitEquation.contactPointB, lowerLimitEquation.contactPointB, tmp);
	    if (eqs.indexOf(lowerLimitEquation) === -1) {
	      eqs.push(lowerLimitEquation);
	    }
	  } else {
	    var idx = eqs.indexOf(lowerLimitEquation);
	    if (idx !== -1) {
	      eqs.splice(idx, 1);
	    }
	  }
	};

	/**
	 * Enable the motor
	 * @method enableMotor
	 */
	PrismaticConstraint.prototype.enableMotor = function () {
	  if (this.motorEnabled) {
	    return;
	  }
	  this.equations.push(this.motorEquation);
	  this.motorEnabled = true;
	};

	/**
	 * Disable the rotational motor
	 * @method disableMotor
	 */
	PrismaticConstraint.prototype.disableMotor = function () {
	  if (!this.motorEnabled) {
	    return;
	  }
	  var i = this.equations.indexOf(this.motorEquation);
	  this.equations.splice(i, 1);
	  this.motorEnabled = false;
	};

	/**
	 * Set the constraint limits.
	 * @method setLimits
	 * @param {number} lower Lower limit.
	 * @param {number} upper Upper limit.
	 */
	PrismaticConstraint.prototype.setLimits = function (lower, upper) {
	  if (typeof lower === 'number') {
	    this.lowerLimit = lower;
	    this.lowerLimitEnabled = true;
	  } else {
	    this.lowerLimit = lower;
	    this.lowerLimitEnabled = false;
	  }

	  if (typeof upper === 'number') {
	    this.upperLimit = upper;
	    this.upperLimitEnabled = true;
	  } else {
	    this.upperLimit = upper;
	    this.upperLimitEnabled = false;
	  }
	};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Utils = __webpack_require__(12),
	    Broadphase = __webpack_require__(27);

	module.exports = SAPBroadphase;

	/**
	 * Sweep and prune broadphase along one axis.
	 *
	 * @class SAPBroadphase
	 * @constructor
	 * @extends Broadphase
	 */
	function SAPBroadphase() {
	  Broadphase.call(this, Broadphase.SAP);

	  /**
	   * List of bodies currently in the broadphase.
	   * @property axisList
	   * @type {Array}
	   */
	  this.axisList = [];

	  /**
	   * The axis to sort along. 0 means x-axis and 1 y-axis. If your bodies are more spread out over the X axis, set axisIndex to 0, and you will gain some performance.
	   * @property axisIndex
	   * @type {Number}
	   */
	  this.axisIndex = 0;

	  var that = this;
	  this._addBodyHandler = function (e) {
	    that.axisList.push(e.body);
	  };

	  this._removeBodyHandler = function (e) {
	    // Remove from list
	    var idx = that.axisList.indexOf(e.body);
	    if (idx !== -1) {
	      that.axisList.splice(idx, 1);
	    }
	  };
	}
	SAPBroadphase.prototype = new Broadphase();
	SAPBroadphase.prototype.constructor = SAPBroadphase;

	/**
	 * Change the world
	 * @method setWorld
	 * @param {World} world
	 */
	SAPBroadphase.prototype.setWorld = function (world) {
	  // Clear the old axis array
	  this.axisList.length = 0;

	  // Add all bodies from the new world
	  Utils.appendArray(this.axisList, world.bodies);

	  // Remove old handlers, if any
	  world.off("addBody", this._addBodyHandler).off("removeBody", this._removeBodyHandler);

	  // Add handlers to update the list of bodies.
	  world.on("addBody", this._addBodyHandler).on("removeBody", this._removeBodyHandler);

	  this.world = world;
	};

	function sortAxisList(a, axisIndex) {
	  axisIndex = axisIndex | 0;
	  for (var i = 1, l = a.length; i < l; i++) {
	    var v = a[i];
	    for (var j = i - 1; j >= 0; j--) {
	      if (a[j].aabb.lowerBound[axisIndex] <= v.aabb.lowerBound[axisIndex]) {
	        break;
	      }
	      a[j + 1] = a[j];
	    }
	    a[j + 1] = v;
	  }
	  return a;
	}

	SAPBroadphase.prototype.sortList = function () {
	  var bodies = this.axisList,
	      axisIndex = this.axisIndex;

	  // Sort the lists
	  sortAxisList(bodies, axisIndex);
	};

	/**
	 * Get the colliding pairs
	 * @method getCollisionPairs
	 * @param  {World} world
	 * @return {Array}
	 */
	SAPBroadphase.prototype.getCollisionPairs = function () /*world*/{
	  var bodies = this.axisList,
	      result = this.result,
	      axisIndex = this.axisIndex;

	  result.length = 0;

	  // Update all AABBs if needed
	  var l = bodies.length;
	  while (l--) {
	    var b = bodies[l];
	    if (b.aabbNeedsUpdate) {
	      b.updateAABB();
	    }
	  }

	  // Sort the lists
	  this.sortList();

	  // Look through the X list
	  for (var i = 0, N = bodies.length | 0; i !== N; i++) {
	    var bi = bodies[i];

	    for (var j = i + 1; j < N; j++) {
	      var bj = bodies[j];

	      // Bounds overlap?
	      var overlaps = bj.aabb.lowerBound[axisIndex] <= bi.aabb.upperBound[axisIndex];
	      if (!overlaps) {
	        break;
	      }

	      if (Broadphase.canCollide(bi, bj) && this.boundingVolumeCheck(bi, bj)) {
	        result.push(bi, bj);
	      }
	    }
	  }

	  return result;
	};

	/**
	 * Returns all the bodies within an AABB.
	 * @method aabbQuery
	 * @param  {World} world
	 * @param  {AABB} aabb
	 * @param {array} result An array to store resulting bodies in.
	 * @return {array}
	 * @todo since the list is sorted, optimization can be done
	 */
	SAPBroadphase.prototype.aabbQuery = function (world, aabb, result) {
	  result = result || [];

	  this.sortList();

	  var axisList = this.axisList;
	  for (var i = 0; i < axisList.length; i++) {
	    var b = axisList[i];

	    if (b.aabbNeedsUpdate) {
	      b.updateAABB();
	    }

	    if (b.aabb.overlaps(aabb)) {
	      result.push(b);
	    }
	  }

	  return result;
	};

/***/ }),
/* 56 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = Spring;

	/**
	 * Base class for {{#crossLink "LinearSpring"}}{{/crossLink}} and {{#crossLink "RotationalSpring"}}{{/crossLink}}. Not supposed to be used directly.
	 *
	 * @class Spring
	 * @constructor
	 * @param {Body} bodyA
	 * @param {Body} bodyB
	 * @param {Object} [options]
	 * @param {number} [options.stiffness=100]  Spring constant (see Hookes Law). A number >= 0.
	 * @param {number} [options.damping=1]      A number >= 0. Default: 1
	 * @param {Array}  [options.localAnchorA]   Where to hook the spring to body A, in local body coordinates. Defaults to the body center.
	 * @param {Array}  [options.localAnchorB]
	 * @param {Array}  [options.worldAnchorA]   Where to hook the spring to body A, in world coordinates. Overrides the option "localAnchorA" if given.
	 * @param {Array}  [options.worldAnchorB]
	 */
	function Spring(bodyA, bodyB, options) {
	  options = options || {};

	  /**
	   * Stiffness of the spring.
	   * @property stiffness
	   * @type {number}
	   */
	  this.stiffness = options.stiffness !== undefined ? options.stiffness : 100;

	  /**
	   * Damping of the spring.
	   * @property damping
	   * @type {number}
	   */
	  this.damping = options.damping !== undefined ? options.damping : 1;

	  /**
	   * First connected body.
	   * @property bodyA
	   * @type {Body}
	   */
	  this.bodyA = bodyA;

	  /**
	   * Second connected body.
	   * @property bodyB
	   * @type {Body}
	   */
	  this.bodyB = bodyB;
	}

	/**
	 * Apply the spring force to the connected bodies. Called automatically by the World.
	 * @private
	 * @method applyForce
	 */
	Spring.prototype.applyForce = function () {
	  // To be implemented by subclasses
	};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var vec2 = __webpack_require__(11);
	var Constraint = __webpack_require__(30);
	var FrictionEquation = __webpack_require__(37);
	var Body = __webpack_require__(15);

	module.exports = TopDownVehicle;

	/**
	 * @class TopDownVehicle
	 * @constructor
	 *
	 * @deprecated This class will be moved out of the core library in future versions.
	 *
	 * @param {Body} chassisBody A dynamic body, already added to the world.
	 * @param {Object} [options]
	 *
	 * @example
	 *
	 *     // Create a dynamic body for the chassis
	 *     var chassisBody = new Body({
	 *         mass: 1
	 *     });
	 *     var boxShape = new Box({ width: 0.5, height: 1 });
	 *     chassisBody.addShape(boxShape);
	 *     world.addBody(chassisBody);
	 *
	 *     // Create the vehicle
	 *     var vehicle = new TopDownVehicle(chassisBody);
	 *
	 *     // Add one front wheel and one back wheel - we don't actually need four :)
	 *     var frontWheel = vehicle.addWheel({
	 *         localPosition: [0, 0.5] // front
	 *     });
	 *     frontWheel.setSideFriction(4);
	 *
	 *     // Back wheel
	 *     var backWheel = vehicle.addWheel({
	 *         localPosition: [0, -0.5] // back
	 *     });
	 *     backWheel.setSideFriction(3); // Less side friction on back wheel makes it easier to drift
	 *     vehicle.addToWorld(world);
	 *
	 *     // Steer value zero means straight forward. Positive is left and negative right.
	 *     frontWheel.steerValue = Math.PI / 16;
	 *
	 *     // Engine force forward
	 *     backWheel.engineForce = 10;
	 *     backWheel.setBrakeForce(0);
	 */
	function TopDownVehicle(chassisBody, options) {
	    options = options || {};

	    /**
	     * @property {Body} chassisBody
	     */
	    this.chassisBody = chassisBody;

	    /**
	     * @property {Array} wheels
	     */
	    this.wheels = [];

	    // A dummy body to constrain the chassis to
	    this.groundBody = new Body({ mass: 0 });

	    this.world = null;

	    var that = this;
	    this.preStepCallback = function () {
	        that.update();
	    };
	}

	/**
	 * @method addToWorld
	 * @param {World} world
	 */
	TopDownVehicle.prototype.addToWorld = function (world) {
	    this.world = world;
	    world.addBody(this.groundBody);
	    world.on('preStep', this.preStepCallback);
	    for (var i = 0; i < this.wheels.length; i++) {
	        var wheel = this.wheels[i];
	        world.addConstraint(wheel);
	    }
	};

	/**
	 * @method removeFromWorld
	 * @param {World} world
	 */
	TopDownVehicle.prototype.removeFromWorld = function () {
	    var world = this.world;
	    world.removeBody(this.groundBody);
	    world.off('preStep', this.preStepCallback);
	    for (var i = 0; i < this.wheels.length; i++) {
	        var wheel = this.wheels[i];
	        world.removeConstraint(wheel);
	    }
	    this.world = null;
	};

	/**
	 * @method addWheel
	 * @param {object} [wheelOptions]
	 * @return {WheelConstraint}
	 */
	TopDownVehicle.prototype.addWheel = function (wheelOptions) {
	    var wheel = new WheelConstraint(this, wheelOptions);
	    this.wheels.push(wheel);
	    return wheel;
	};

	/**
	 * @method update
	 */
	TopDownVehicle.prototype.update = function () {
	    for (var i = 0; i < this.wheels.length; i++) {
	        this.wheels[i].update();
	    }
	};

	/**
	 * @class WheelConstraint
	 * @constructor
	 * @extends {Constraint}
	 * @param {Vehicle} vehicle
	 * @param {object} [options]
	 * @param {Array} [options.localForwardVector]The local wheel forward vector in local body space. Default is zero.
	 * @param {Array} [options.localPosition] The local position of the wheen in the chassis body. Default is zero - the center of the body.
	 * @param {Array} [options.sideFriction=5] The max friction force in the sideways direction.
	 */
	function WheelConstraint(vehicle, options) {
	    options = options || {};

	    this.vehicle = vehicle;

	    this.forwardEquation = new FrictionEquation(vehicle.chassisBody, vehicle.groundBody);

	    this.sideEquation = new FrictionEquation(vehicle.chassisBody, vehicle.groundBody);

	    /**
	     * @property {number} steerValue
	     */
	    this.steerValue = 0;

	    /**
	     * @property {number} engineForce
	     */
	    this.engineForce = 0;

	    this.setSideFriction(options.sideFriction !== undefined ? options.sideFriction : 5);

	    /**
	     * @property {Array} localForwardVector
	     */
	    this.localForwardVector = vec2.fromValues(0, 1);
	    if (options.localForwardVector) {
	        vec2.copy(this.localForwardVector, options.localForwardVector);
	    }

	    /**
	     * @property {Array} localPosition
	     */
	    this.localPosition = vec2.create();
	    if (options.localPosition) {
	        vec2.copy(this.localPosition, options.localPosition);
	    }

	    Constraint.call(this, vehicle.chassisBody, vehicle.groundBody);

	    this.equations.push(this.forwardEquation, this.sideEquation);

	    this.setBrakeForce(0);
	}
	WheelConstraint.prototype = new Constraint();

	/**
	 * @method setBrakeForce
	 */
	WheelConstraint.prototype.setBrakeForce = function (force) {
	    this.forwardEquation.setSlipForce(force);
	};

	/**
	 * @method setSideFriction
	 */
	WheelConstraint.prototype.setSideFriction = function (force) {
	    this.sideEquation.setSlipForce(force);
	};

	var worldVelocity = vec2.create();
	var relativePoint = vec2.create();

	/**
	 * @method getSpeed
	 */
	WheelConstraint.prototype.getSpeed = function () {
	    var body = this.vehicle.chassisBody;
	    body.vectorToWorldFrame(relativePoint, this.localForwardVector);
	    body.getVelocityAtPoint(worldVelocity, relativePoint);
	    return vec2.dot(worldVelocity, relativePoint);
	};

	var tmpVec = vec2.create();

	/**
	 * @method update
	 */
	WheelConstraint.prototype.update = function () {
	    var body = this.vehicle.chassisBody;
	    var forwardEquation = this.forwardEquation;
	    var sideEquation = this.sideEquation;
	    var steerValue = this.steerValue;

	    // Directional
	    body.vectorToWorldFrame(forwardEquation.t, this.localForwardVector);
	    vec2.rotate(sideEquation.t, this.localForwardVector, Math.PI / 2);
	    body.vectorToWorldFrame(sideEquation.t, sideEquation.t);

	    vec2.rotate(forwardEquation.t, forwardEquation.t, steerValue);
	    vec2.rotate(sideEquation.t, sideEquation.t, steerValue);

	    // Attachment point
	    body.toWorldFrame(forwardEquation.contactPointB, this.localPosition);
	    vec2.copy(sideEquation.contactPointB, forwardEquation.contactPointB);

	    body.vectorToWorldFrame(forwardEquation.contactPointA, this.localPosition);
	    vec2.copy(sideEquation.contactPointA, forwardEquation.contactPointA);

	    // Add engine force
	    vec2.normalize(tmpVec, forwardEquation.t);
	    vec2.scale(tmpVec, tmpVec, this.engineForce);

	    this.vehicle.chassisBody.applyForce(tmpVec, forwardEquation.contactPointA);
	};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var vec2 = __webpack_require__(11);
	var Spring = __webpack_require__(56);

	module.exports = LinearSpring;

	/**
	 * A spring, connecting two bodies.
	 *
	 * The Spring explicitly adds force and angularForce to the bodies.
	 *
	 * @class LinearSpring
	 * @extends Spring
	 * @constructor
	 * @param {Body} bodyA
	 * @param {Body} bodyB
	 * @param {Object} [options]
	 * @param {number} [options.restLength]   A number > 0. Default is the current distance between the world anchor points.
	 * @param {number} [options.stiffness=100]  Spring constant (see Hookes Law). A number >= 0.
	 * @param {number} [options.damping=1]      A number >= 0. Default: 1
	 * @param {Array}  [options.worldAnchorA]   Where to hook the spring to body A, in world coordinates. Overrides the option "localAnchorA" if given.
	 * @param {Array}  [options.worldAnchorB]
	 * @param {Array}  [options.localAnchorA]   Where to hook the spring to body A, in local body coordinates. Defaults to the body center.
	 * @param {Array}  [options.localAnchorB]
	 *
	 * @example
	 *     var spring = new LinearSpring(bodyA, bodyB, {
	 *         stiffness: 100,
	 *         damping: 1,
	 *         localAnchorA: [0,0], // center of bodyA
	 *         localAnchorB: [0,0] // center of bodyB
	 *     });
	 *     world.addSpring(spring);
	 */
	function LinearSpring(bodyA, bodyB, options) {
	  options = options || {};

	  Spring.call(this, bodyA, bodyB, options);

	  /**
	   * Anchor for bodyA in local bodyA coordinates.
	   * @property localAnchorA
	   * @type {Array}
	   */
	  this.localAnchorA = vec2.create();

	  /**
	   * Anchor for bodyB in local bodyB coordinates.
	   * @property localAnchorB
	   * @type {Array}
	   */
	  this.localAnchorB = vec2.create();

	  if (options.localAnchorA) {
	    vec2.copy(this.localAnchorA, options.localAnchorA);
	  }
	  if (options.localAnchorB) {
	    vec2.copy(this.localAnchorB, options.localAnchorB);
	  }
	  if (options.worldAnchorA) {
	    this.setWorldAnchorA(options.worldAnchorA);
	  }
	  if (options.worldAnchorB) {
	    this.setWorldAnchorB(options.worldAnchorB);
	  }

	  var worldAnchorA = vec2.create();
	  var worldAnchorB = vec2.create();
	  this.getWorldAnchorA(worldAnchorA);
	  this.getWorldAnchorB(worldAnchorB);
	  var worldDistance = vec2.distance(worldAnchorA, worldAnchorB);

	  /**
	   * Rest length of the spring. Can be set dynamically.
	   * @property restLength
	   * @type {number}
	   */
	  this.restLength = options.restLength !== undefined ? options.restLength : worldDistance;
	}
	LinearSpring.prototype = new Spring();
	LinearSpring.prototype.constructor = LinearSpring;

	/**
	 * Set the anchor point on body A, using world coordinates.
	 * @method setWorldAnchorA
	 * @param {Array} worldAnchorA
	 */
	LinearSpring.prototype.setWorldAnchorA = function (worldAnchorA) {
	  this.bodyA.toLocalFrame(this.localAnchorA, worldAnchorA);
	};

	/**
	 * Set the anchor point on body B, using world coordinates.
	 * @method setWorldAnchorB
	 * @param {Array} worldAnchorB
	 */
	LinearSpring.prototype.setWorldAnchorB = function (worldAnchorB) {
	  this.bodyB.toLocalFrame(this.localAnchorB, worldAnchorB);
	};

	/**
	 * Get the anchor point on body A, in world coordinates.
	 * @method getWorldAnchorA
	 * @param {Array} result The vector to store the result in.
	 */
	LinearSpring.prototype.getWorldAnchorA = function (result) {
	  this.bodyA.toWorldFrame(result, this.localAnchorA);
	};

	/**
	 * Get the anchor point on body B, in world coordinates.
	 * @method getWorldAnchorB
	 * @param {Array} result The vector to store the result in.
	 */
	LinearSpring.prototype.getWorldAnchorB = function (result) {
	  this.bodyB.toWorldFrame(result, this.localAnchorB);
	};

	var applyForce_r = vec2.create(),
	    applyForce_r_unit = vec2.create(),
	    applyForce_u = vec2.create(),
	    applyForce_f = vec2.create(),
	    applyForce_worldAnchorA = vec2.create(),
	    applyForce_worldAnchorB = vec2.create(),
	    applyForce_ri = vec2.create(),
	    applyForce_rj = vec2.create(),
	    applyForce_tmp = vec2.create();

	/**
	 * Apply the spring force to the connected bodies.
	 * @private
	 * @method applyForce
	 */
	LinearSpring.prototype.applyForce = function () {
	  var k = this.stiffness,
	      d = this.damping,
	      l = this.restLength,
	      bodyA = this.bodyA,
	      bodyB = this.bodyB,
	      r = applyForce_r,
	      r_unit = applyForce_r_unit,
	      u = applyForce_u,
	      f = applyForce_f,
	      tmp = applyForce_tmp;

	  var worldAnchorA = applyForce_worldAnchorA,
	      worldAnchorB = applyForce_worldAnchorB,
	      ri = applyForce_ri,
	      rj = applyForce_rj;

	  // Get world anchors
	  this.getWorldAnchorA(worldAnchorA);
	  this.getWorldAnchorB(worldAnchorB);

	  // Get offset points
	  vec2.subtract(ri, worldAnchorA, bodyA.position);
	  vec2.subtract(rj, worldAnchorB, bodyB.position);

	  // Compute distance vector between world anchor points
	  vec2.subtract(r, worldAnchorB, worldAnchorA);
	  var rlen = vec2.length(r);
	  vec2.normalize(r_unit, r);

	  // Compute relative velocity of the anchor points, u
	  vec2.subtract(u, bodyB.velocity, bodyA.velocity);
	  vec2.crossZV(tmp, bodyB.angularVelocity, rj);
	  vec2.add(u, u, tmp);
	  vec2.crossZV(tmp, bodyA.angularVelocity, ri);
	  vec2.subtract(u, u, tmp);

	  // F = - k * ( x - L ) - D * ( u )
	  vec2.scale(f, r_unit, -k * (rlen - l) - d * vec2.dot(u, r_unit));

	  // Add forces to bodies
	  vec2.subtract(bodyA.force, bodyA.force, f);
	  vec2.add(bodyB.force, bodyB.force, f);

	  // Angular force
	  var ri_x_f = vec2.crossLength(ri, f);
	  var rj_x_f = vec2.crossLength(rj, f);
	  bodyA.angularForce -= ri_x_f;
	  bodyB.angularForce += rj_x_f;
	};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Spring = __webpack_require__(56);

	module.exports = RotationalSpring;

	/**
	 * A rotational spring, connecting two bodies rotation. This spring explicitly adds angularForce (torque) to the bodies.
	 *
	 * The spring can be combined with a {{#crossLink "RevoluteConstraint"}}{{/crossLink}} to make, for example, a mouse trap.
	 *
	 * @class RotationalSpring
	 * @extends Spring
	 * @constructor
	 * @param {Body} bodyA
	 * @param {Body} bodyB
	 * @param {Object} [options]
	 * @param {number} [options.restAngle] The relative angle of bodies at which the spring is at rest. If not given, it's set to the current relative angle between the bodies.
	 * @param {number} [options.stiffness=100] Spring constant (see Hookes Law). A number >= 0.
	 * @param {number} [options.damping=1] A number >= 0.
	 *
	 * @example
	 *     var spring = new RotationalSpring(bodyA, bodyB, {
	 *         stiffness: 100,
	 *         damping: 1
	 *     });
	 *     world.addSpring(spring);
	 */
	function RotationalSpring(bodyA, bodyB, options) {
	  options = options || {};

	  Spring.call(this, bodyA, bodyB, options);

	  /**
	   * Rest angle of the spring.
	   * @property restAngle
	   * @type {number}
	   */
	  this.restAngle = options.restAngle !== undefined ? options.restAngle : bodyB.angle - bodyA.angle;
	}
	RotationalSpring.prototype = new Spring();
	RotationalSpring.prototype.constructor = RotationalSpring;

	/**
	 * Apply the spring force to the connected bodies.
	 * @method applyForce
	 */
	RotationalSpring.prototype.applyForce = function () {
	  var k = this.stiffness,
	      d = this.damping,
	      l = this.restAngle,
	      bodyA = this.bodyA,
	      bodyB = this.bodyB,
	      x = bodyB.angle - bodyA.angle,
	      u = bodyB.angularVelocity - bodyA.angularVelocity;

	  var torque = -k * (x - l) - d * u * 0;

	  bodyA.angularForce -= torque;
	  bodyB.angularForce += torque;
	};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var GSSolver = __webpack_require__(40),
	    vec2 = __webpack_require__(11),
	    Shape = __webpack_require__(22),
	    EventEmitter = __webpack_require__(26),
	    Body = __webpack_require__(15),
	    Material = __webpack_require__(35),
	    ContactMaterial = __webpack_require__(34),
	    AABB = __webpack_require__(10),
	    SAPBroadphase = __webpack_require__(55),
	    Narrowphase = __webpack_require__(45),
	    Utils = __webpack_require__(12),
	    arrayRemove = Utils.arrayRemove,
	    OverlapKeeper = __webpack_require__(61),
	    UnionFind = __webpack_require__(64);

	module.exports = World;

	/**
	 * The dynamics world, where all bodies and constraints live.
	 *
	 * @class World
	 * @constructor
	 * @param {Object} [options]
	 * @param {Solver} [options.solver] Defaults to GSSolver.
	 * @param {Array} [options.gravity] Defaults to y=-9.78.
	 * @param {Broadphase} [options.broadphase] Defaults to SAPBroadphase
	 * @param {Boolean} [options.islandSplit=true]
	 * @extends EventEmitter
	 *
	 * @example
	 *     var world = new World({
	 *         gravity: [0, -10],
	 *         broadphase: new SAPBroadphase()
	 *     });
	 *     world.addBody(new Body());
	 */
	function World(options) {
	  EventEmitter.apply(this);

	  options = options || {};

	  /**
	   * All springs in the world. To add a spring to the world, use {{#crossLink "World/addSpring:method"}}{{/crossLink}}.
	   *
	   * @property springs
	   * @type {Array}
	   */
	  this.springs = [];

	  /**
	   * All bodies in the world. To add a body to the world, use {{#crossLink "World/addBody:method"}}{{/crossLink}}.
	   * @property {Array} bodies
	   */
	  this.bodies = [];

	  /**
	   * Disabled body collision pairs. See {{#crossLink "World/disableBodyCollision:method"}}.
	   * @private
	   * @property {Array} disabledBodyCollisionPairs
	   */
	  this.disabledBodyCollisionPairs = [];

	  /**
	   * The solver used to satisfy constraints and contacts. Default is {{#crossLink "GSSolver"}}{{/crossLink}}.
	   * @property {Solver} solver
	   */
	  this.solver = options.solver || new GSSolver();

	  /**
	   * The narrowphase to use to generate contacts.
	   *
	   * @property narrowphase
	   * @type {Narrowphase}
	   */
	  this.narrowphase = new Narrowphase();

	  /**
	   * Gravity in the world. This is applied on all bodies in the beginning of each step().
	   *
	   * @property gravity
	   * @type {Array}
	   */
	  this.gravity = vec2.fromValues(0, -9.78);
	  if (options.gravity) {
	    vec2.copy(this.gravity, options.gravity);
	  }

	  /**
	   * Gravity to use when approximating the friction max force (mu*mass*gravity).
	   * @property {Number} frictionGravity
	   */
	  this.frictionGravity = vec2.length(this.gravity) || 10;

	  /**
	   * Set to true if you want .frictionGravity to be automatically set to the length of .gravity.
	   * @property {Boolean} useWorldGravityAsFrictionGravity
	   * @default true
	   */
	  this.useWorldGravityAsFrictionGravity = true;

	  /**
	   * If the length of .gravity is zero, and .useWorldGravityAsFrictionGravity=true, then switch to using .frictionGravity for friction instead. This fallback is useful for gravityless games.
	   * @property {Boolean} useFrictionGravityOnZeroGravity
	   * @default true
	   */
	  this.useFrictionGravityOnZeroGravity = true;

	  /**
	   * The broadphase algorithm to use.
	   *
	   * @property broadphase
	   * @type {Broadphase}
	   */
	  this.broadphase = options.broadphase || new SAPBroadphase();
	  this.broadphase.setWorld(this);

	  /**
	   * User-added constraints.
	   *
	   * @property constraints
	   * @type {Array}
	   */
	  this.constraints = [];

	  /**
	   * Dummy default material in the world, used in .defaultContactMaterial
	   * @property {Material} defaultMaterial
	   */
	  this.defaultMaterial = new Material();

	  /**
	   * The default contact material to use, if no contact material was set for the colliding materials.
	   * @property {ContactMaterial} defaultContactMaterial
	   */
	  this.defaultContactMaterial = new ContactMaterial(this.defaultMaterial, this.defaultMaterial);

	  /**
	   * For keeping track of what time step size we used last step
	   * @property lastTimeStep
	   * @type {Number}
	   */
	  this.lastTimeStep = 1 / 60;

	  /**
	   * Enable to automatically apply spring forces each step.
	   * @property applySpringForces
	   * @type {Boolean}
	   * @default true
	   */
	  this.applySpringForces = true;

	  /**
	   * Enable to automatically apply body damping each step.
	   * @property applyDamping
	   * @type {Boolean}
	   * @default true
	   */
	  this.applyDamping = true;

	  /**
	   * Enable to automatically apply gravity each step.
	   * @property applyGravity
	   * @type {Boolean}
	   * @default true
	   */
	  this.applyGravity = true;

	  /**
	   * Enable/disable constraint solving in each step.
	   * @property solveConstraints
	   * @type {Boolean}
	   * @default true
	   */
	  this.solveConstraints = true;

	  /**
	   * The ContactMaterials added to the World.
	   * @property contactMaterials
	   * @type {Array}
	   */
	  this.contactMaterials = [];

	  /**
	   * World time.
	   * @property time
	   * @type {Number}
	   */
	  this.time = 0.0;
	  this.accumulator = 0;

	  /**
	   * Is true during step().
	   * @property {Boolean} stepping
	   */
	  this.stepping = false;

	  /**
	   * Whether to enable island splitting. Island splitting can be an advantage for both precision and performance.
	   * @property {Boolean} islandSplit
	   * @default false
	   */
	  this.islandSplit = options.islandSplit !== undefined ? !!options.islandSplit : true;

	  /**
	   * Set to true if you want to the world to emit the "impact" event. Turning this off could improve performance.
	   * @property emitImpactEvent
	   * @type {Boolean}
	   * @default true
	   * @deprecated Impact event will be removed. Use beginContact instead.
	   */
	  this.emitImpactEvent = true;

	  /**
	   * How to deactivate bodies during simulation. Possible modes are: {{#crossLink "World/NO_SLEEPING:property"}}World.NO_SLEEPING{{/crossLink}}, {{#crossLink "World/BODY_SLEEPING:property"}}World.BODY_SLEEPING{{/crossLink}} and {{#crossLink "World/ISLAND_SLEEPING:property"}}World.ISLAND_SLEEPING{{/crossLink}}.
	   * If sleeping is enabled, you might need to {{#crossLink "Body/wakeUp:method"}}wake up{{/crossLink}} the bodies if they fall asleep when they shouldn't. If you want to enable sleeping in the world, but want to disable it for a particular body, see {{#crossLink "Body/allowSleep:property"}}Body.allowSleep{{/crossLink}}.
	   * @property sleepMode
	   * @type {number}
	   * @default World.NO_SLEEPING
	   */
	  this.sleepMode = World.NO_SLEEPING;

	  /**
	   * @property {UnionFind} unionFind
	   */
	  this.unionFind = new UnionFind(1);

	  // Id counters
	  this._constraintIdCounter = 0;
	  this._bodyIdCounter = 0;

	  /**
	   * @property {OverlapKeeper} overlapKeeper
	   */
	  this.overlapKeeper = new OverlapKeeper();
	}
	World.prototype = new Object(EventEmitter.prototype);
	World.prototype.constructor = World;

	/**
	 * Fired after the step().
	 * @event postStep
	 */
	var postStepEvent = {
	  type: "postStep"
	};

	/**
	 * Fired when a body is added to the world.
	 * @event addBody
	 * @param {Body} body
	 */
	var addBodyEvent = {
	  type: "addBody",
	  body: null
	};

	/**
	 * Fired when a body is removed from the world.
	 * @event removeBody
	 * @param {Body} body
	 */
	var removeBodyEvent = {
	  type: "removeBody",
	  body: null
	};

	/**
	 * Fired when a spring is added to the world.
	 * @event addSpring
	 * @param {Spring} spring
	 */
	var addSpringEvent = {
	  type: "addSpring",
	  spring: null
	};

	/**
	 * Fired when a first contact is created between two bodies. This event is fired after the step has been done.
	 * @event impact
	 * @param {Body} bodyA
	 * @param {Body} bodyB
	 * @deprecated Impact event will be removed. Use beginContact instead.
	 */
	var impactEvent = {
	  type: "impact",
	  bodyA: null,
	  bodyB: null,
	  shapeA: null,
	  shapeB: null,
	  contactEquation: null
	};

	/**
	 * Fired after the Broadphase has collected collision pairs in the world.
	 * Inside the event handler, you can modify the pairs array as you like, to
	 * prevent collisions between objects that you don't want.
	 * @event postBroadphase
	 * @param {Array} pairs An array of collision pairs. If this array is [body1,body2,body3,body4], then the body pairs 1,2 and 3,4 would advance to narrowphase.
	 */
	var postBroadphaseEvent = {
	  type: "postBroadphase",
	  pairs: null
	};

	/**
	 * Fired when two shapes starts start to overlap. Fired in the narrowphase, during step.
	 * @event beginContact
	 * @param {Shape} shapeA
	 * @param {Shape} shapeB
	 * @param {Body}  bodyA
	 * @param {Body}  bodyB
	 * @param {Array} contactEquations
	 */
	var beginContactEvent = {
	  type: "beginContact",
	  shapeA: null,
	  shapeB: null,
	  bodyA: null,
	  bodyB: null,
	  contactEquations: []
	};

	/**
	 * Fired when two shapes stop overlapping, after the narrowphase (during step).
	 * @event endContact
	 * @param {Shape} shapeA
	 * @param {Shape} shapeB
	 * @param {Body}  bodyA
	 * @param {Body}  bodyB
	 */
	var endContactEvent = {
	  type: "endContact",
	  shapeA: null,
	  shapeB: null,
	  bodyA: null,
	  bodyB: null
	};

	/**
	 * Fired just before equations are added to the solver to be solved. Can be used to control what equations goes into the solver.
	 * @event preSolve
	 * @param {Array} contactEquations  An array of contacts to be solved.
	 * @param {Array} frictionEquations An array of friction equations to be solved.
	 */
	var preSolveEvent = {
	  type: "preSolve",
	  contactEquations: null,
	  frictionEquations: null
	};

	/**
	 * Never deactivate bodies.
	 * @static
	 * @property {number} NO_SLEEPING
	 */
	World.NO_SLEEPING = 1;

	/**
	 * Deactivate individual bodies if they are sleepy.
	 * @static
	 * @property {number} BODY_SLEEPING
	 */
	World.BODY_SLEEPING = 2;

	/**
	 * Deactivates bodies that are in contact, if all of them are sleepy. Note that you must enable {{#crossLink "World/islandSplit:property"}}.islandSplit{{/crossLink}} for this to work.
	 * @static
	 * @property {number} ISLAND_SLEEPING
	 */
	World.ISLAND_SLEEPING = 4;

	/**
	 * Add a constraint to the simulation. Note that both bodies connected to the constraint must be added to the world first. Also note that you can't run this method during step.
	 *
	 * @method addConstraint
	 * @param {Constraint} constraint
	 * @example
	 *     var constraint = new LockConstraint(bodyA, bodyB);
	 *     world.addConstraint(constraint);
	 */
	World.prototype.addConstraint = function (constraint) {
	  if (this.stepping) {
	    throw new Error('Constraints cannot be added during step.');
	  }

	  var bodies = this.bodies;
	  if (bodies.indexOf(constraint.bodyA) === -1) {
	    throw new Error('Cannot add Constraint: bodyA is not added to the World.');
	  }
	  if (bodies.indexOf(constraint.bodyB) === -1) {
	    throw new Error('Cannot add Constraint: bodyB is not added to the World.');
	  }

	  this.constraints.push(constraint);
	};

	/**
	 * Add a ContactMaterial to the simulation.
	 * @method addContactMaterial
	 * @param {ContactMaterial} contactMaterial
	 */
	World.prototype.addContactMaterial = function (contactMaterial) {
	  this.contactMaterials.push(contactMaterial);
	};

	/**
	 * Removes a contact material
	 *
	 * @method removeContactMaterial
	 * @param {ContactMaterial} cm
	 */
	World.prototype.removeContactMaterial = function (cm) {
	  arrayRemove(this.contactMaterials, cm);
	};

	/**
	 * Get a contact material given two materials
	 * @method getContactMaterial
	 * @param {Material} materialA
	 * @param {Material} materialB
	 * @return {ContactMaterial} The matching ContactMaterial, or false on fail.
	 * @todo Use faster hash map to lookup from material id's
	 */
	World.prototype.getContactMaterial = function (materialA, materialB) {
	  var cmats = this.contactMaterials;
	  for (var i = 0, N = cmats.length; i !== N; i++) {
	    var cm = cmats[i];
	    if (cm.materialA === materialA && cm.materialB === materialB || cm.materialA === materialB && cm.materialB === materialA) {
	      return cm;
	    }
	  }
	  return false;
	};

	/**
	 * Removes a constraint. Note that you can't run this method during step.
	 *
	 * @method removeConstraint
	 * @param {Constraint} constraint
	 */
	World.prototype.removeConstraint = function (constraint) {
	  if (this.stepping) {
	    throw new Error('Constraints cannot be removed during step.');
	  }
	  arrayRemove(this.constraints, constraint);
	};

	var step_mg = vec2.create(),
	    xiw = vec2.create(),
	    xjw = vec2.create();

	/**
	 * Step the physics world forward in time.
	 *
	 * There are two modes. The simple mode is fixed timestepping without interpolation. In this case you only use the first argument. The second case uses interpolation. In that you also provide the time since the function was last used, as well as the maximum fixed timesteps to take.
	 *
	 * @method step
	 * @param {Number} dt                       The fixed time step size to use.
	 * @param {Number} [timeSinceLastCalled=0]  The time elapsed since the function was last called.
	 * @param {Number} [maxSubSteps=10]         Maximum number of fixed steps to take per function call.
	 *
	 * @example
	 *     // Simple fixed timestepping without interpolation
	 *     var fixedTimeStep = 1 / 60;
	 *     var world = new World();
	 *     var body = new Body({ mass: 1 });
	 *     world.addBody(body);
	 *
	 *     function animate(){
	 *         requestAnimationFrame(animate);
	 *         world.step(fixedTimeStep);
	 *         renderBody(body.position, body.angle);
	 *     }
	 *
	 *     // Start animation loop
	 *     requestAnimationFrame(animate);
	 *
	 * @example
	 *     // Fixed timestepping with interpolation
	 *     var maxSubSteps = 10;
	 *     var lastTimeSeconds;
	 *
	 *     function animate(time){
	 *         requestAnimationFrame(animate);
	 *         var timeSeconds = time / 1000;
	 *
	 *         if(lastTimeSeconds){
	 *             var deltaTime = timeSeconds - lastTimeSeconds;
	 *             world.step(fixedTimeStep, deltaTime, maxSubSteps);
	 *         }
	 *
	 *         lastTimeSeconds = timeSeconds;
	 *
	 *         renderBody(body.interpolatedPosition, body.interpolatedAngle);
	 *     }
	 *
	 *     // Start animation loop
	 *     requestAnimationFrame(animate);
	 *
	 * @see http://bulletphysics.org/mediawiki-1.5.8/index.php/Stepping_The_World
	 */
	World.prototype.step = function (dt, timeSinceLastCalled, maxSubSteps) {
	  maxSubSteps = maxSubSteps || 10;
	  timeSinceLastCalled = timeSinceLastCalled || 0;

	  if (timeSinceLastCalled === 0) {
	    // Fixed, simple stepping

	    this.internalStep(dt);

	    // Increment time
	    this.time += dt;
	  } else {

	    this.accumulator += timeSinceLastCalled;
	    var substeps = 0;
	    while (this.accumulator >= dt && substeps < maxSubSteps) {
	      // Do fixed steps to catch up
	      this.internalStep(dt);
	      this.time += dt;
	      this.accumulator -= dt;
	      substeps++;
	    }

	    var t = this.accumulator % dt / dt;
	    for (var j = 0; j !== this.bodies.length; j++) {
	      var b = this.bodies[j];
	      vec2.lerp(b.interpolatedPosition, b.previousPosition, b.position, t);
	      b.interpolatedAngle = b.previousAngle + t * (b.angle - b.previousAngle);
	    }
	  }
	};

	var endOverlaps = [];

	/**
	 * Make a fixed step.
	 * @method internalStep
	 * @param  {number} dt
	 * @private
	 */
	World.prototype.internalStep = function (dt) {
	  this.stepping = true;

	  var Nsprings = this.springs.length,
	      springs = this.springs,
	      bodies = this.bodies,
	      g = this.gravity,
	      solver = this.solver,
	      Nbodies = this.bodies.length,
	      broadphase = this.broadphase,
	      np = this.narrowphase,
	      constraints = this.constraints,
	      mg = step_mg,
	      add = vec2.add;

	  this.overlapKeeper.tick();

	  this.lastTimeStep = dt;

	  // Update approximate friction gravity.
	  if (this.useWorldGravityAsFrictionGravity) {
	    var gravityLen = vec2.length(this.gravity);
	    if (!(gravityLen === 0 && this.useFrictionGravityOnZeroGravity)) {
	      // Nonzero gravity. Use it.
	      this.frictionGravity = gravityLen;
	    }
	  }

	  // Add gravity to bodies
	  if (this.applyGravity) {
	    for (var i = 0; i !== Nbodies; i++) {
	      var b = bodies[i],
	          fi = b.force;
	      if (b.type !== Body.DYNAMIC || b.sleepState === Body.SLEEPING) {
	        continue;
	      }
	      vec2.scale(mg, g, b.mass * b.gravityScale); // F=m*g
	      add(fi, fi, mg);
	    }
	  }

	  // Add spring forces
	  if (this.applySpringForces) {
	    for (var i = 0; i !== Nsprings; i++) {
	      var s = springs[i];
	      s.applyForce();
	    }
	  }

	  if (this.applyDamping) {
	    for (var i = 0; i !== Nbodies; i++) {
	      var b = bodies[i];
	      if (b.type === Body.DYNAMIC) {
	        b.applyDamping(dt);
	      }
	    }
	  }

	  // Broadphase
	  var result = broadphase.getCollisionPairs(this);

	  // Remove ignored collision pairs
	  var ignoredPairs = this.disabledBodyCollisionPairs;
	  for (var i = ignoredPairs.length - 2; i >= 0; i -= 2) {
	    for (var j = result.length - 2; j >= 0; j -= 2) {
	      if (ignoredPairs[i] === result[j] && ignoredPairs[i + 1] === result[j + 1] || ignoredPairs[i + 1] === result[j] && ignoredPairs[i] === result[j + 1]) {
	        result.splice(j, 2);
	      }
	    }
	  }

	  // Remove constrained pairs with collideConnected == false
	  var Nconstraints = constraints.length;
	  for (i = 0; i !== Nconstraints; i++) {
	    var c = constraints[i];
	    if (!c.collideConnected) {
	      for (var j = result.length - 2; j >= 0; j -= 2) {
	        if (c.bodyA === result[j] && c.bodyB === result[j + 1] || c.bodyB === result[j] && c.bodyA === result[j + 1]) {
	          result.splice(j, 2);
	        }
	      }
	    }
	  }

	  // postBroadphase event
	  postBroadphaseEvent.pairs = result;
	  this.emit(postBroadphaseEvent);
	  postBroadphaseEvent.pairs = null;

	  // Narrowphase
	  np.reset();
	  var defaultContactMaterial = this.defaultContactMaterial;
	  var frictionGravity = this.frictionGravity;
	  for (var i = 0, Nresults = result.length; i !== Nresults; i += 2) {
	    var bi = result[i],
	        bj = result[i + 1];

	    // Loop over all shapes of body i
	    for (var k = 0, Nshapesi = bi.shapes.length; k !== Nshapesi; k++) {
	      var si = bi.shapes[k],
	          xi = si.position,
	          ai = si.angle;

	      // All shapes of body j
	      for (var l = 0, Nshapesj = bj.shapes.length; l !== Nshapesj; l++) {
	        var sj = bj.shapes[l],
	            xj = sj.position,
	            aj = sj.angle;

	        var contactMaterial = null;
	        if (si.material && sj.material) {
	          contactMaterial = this.getContactMaterial(si.material, sj.material);
	        }

	        runNarrowphase(this, np, bi, si, xi, ai, bj, sj, xj, aj, contactMaterial || defaultContactMaterial, frictionGravity);
	      }
	    }
	  }

	  // Wake up bodies
	  for (var i = 0; i !== Nbodies; i++) {
	    var body = bodies[i];
	    if (body._wakeUpAfterNarrowphase) {
	      body.wakeUp();
	      body._wakeUpAfterNarrowphase = false;
	    }
	  }

	  // Emit end overlap events
	  if (this.has('endContact')) {
	    this.overlapKeeper.getEndOverlaps(endOverlaps);
	    var e = endContactEvent;
	    var l = endOverlaps.length;
	    while (l--) {
	      var data = endOverlaps[l];
	      e.shapeA = data.shapeA;
	      e.shapeB = data.shapeB;
	      e.bodyA = data.bodyA;
	      e.bodyB = data.bodyB;
	      this.emit(e);
	    }
	    endOverlaps.length = 0;
	  }

	  preSolveEvent.contactEquations = np.contactEquations;
	  preSolveEvent.frictionEquations = np.frictionEquations;
	  this.emit(preSolveEvent);
	  preSolveEvent.contactEquations = preSolveEvent.frictionEquations = null;

	  // update constraint equations
	  var Nconstraints = constraints.length;
	  for (i = 0; i !== Nconstraints; i++) {
	    constraints[i].update();
	  }

	  if (np.contactEquations.length || np.frictionEquations.length || Nconstraints) {

	    // Get all equations
	    var equations = [];
	    Utils.appendArray(equations, np.contactEquations);
	    Utils.appendArray(equations, np.frictionEquations);
	    for (i = 0; i !== Nconstraints; i++) {
	      Utils.appendArray(equations, constraints[i].equations);
	    }

	    if (this.islandSplit) {

	      // Initialize the UnionFind
	      var unionFind = this.unionFind;
	      unionFind.resize(this.bodies.length + 1);

	      // Update equation index
	      for (var i = 0; i < equations.length; i++) {
	        equations[i].index = i;
	      }

	      // Unite bodies if they are connected by an equation
	      for (var i = 0; i < equations.length; i++) {
	        var bodyA = equations[i].bodyA;
	        var bodyB = equations[i].bodyB;
	        if (bodyA.type === Body.DYNAMIC && bodyB.type === Body.DYNAMIC) {
	          unionFind.union(bodyA.index, bodyB.index);
	        }
	      }

	      // Find the body islands
	      for (var i = 0; i < bodies.length; i++) {
	        var body = bodies[i];
	        body.islandId = body.type === Body.DYNAMIC ? unionFind.find(body.index) : -1;
	      }

	      // Sort equations by island
	      equations = equations.sort(sortEquationsByIsland);

	      var equationIndex = 0;
	      while (equationIndex < equations.length) {
	        var equation = equations[equationIndex++];
	        solver.addEquation(equation);

	        var currentIslandId = equation.bodyA.islandId > 0 ? equation.bodyA.islandId : equation.bodyB.islandId;
	        var nextIslandId = -1;
	        if (equations[equationIndex]) {
	          nextIslandId = equations[equationIndex].bodyA.islandId > 0 ? equations[equationIndex].bodyA.islandId : equations[equationIndex].bodyB.islandId;
	        }

	        if (nextIslandId !== currentIslandId || equationIndex === equations.length) {
	          // Solve this island
	          if (this.solveConstraints) {
	            solver.solve(dt, this);
	          }
	          solver.removeAllEquations();
	        }
	      }
	    } else {

	      // Solve all as one island
	      solver.addEquations(equations);
	      if (this.solveConstraints) {
	        solver.solve(dt, this);
	      }
	      solver.removeAllEquations();
	    }
	  }

	  // Step forward
	  for (var i = 0; i !== Nbodies; i++) {
	    var body = bodies[i];
	    if (body.type === Body.DYNAMIC || body.type === Body.KINEMATIC) {
	      body.integrate(dt);
	    }
	  }

	  // Reset force
	  for (var i = 0; i !== Nbodies; i++) {
	    bodies[i].setZeroForce();
	  }

	  // Emit impact event
	  if (this.emitImpactEvent && this.has('impact')) {
	    var ev = impactEvent;
	    for (var i = 0; i !== np.contactEquations.length; i++) {
	      var eq = np.contactEquations[i];
	      if (eq.firstImpact) {
	        ev.bodyA = eq.bodyA;
	        ev.bodyB = eq.bodyB;
	        ev.shapeA = eq.shapeA;
	        ev.shapeB = eq.shapeB;
	        ev.contactEquation = eq;
	        this.emit(ev);
	      }
	    }
	  }

	  // Sleeping update
	  if (this.sleepMode === World.BODY_SLEEPING) {

	    for (i = 0; i !== Nbodies; i++) {
	      bodies[i].sleepTick(this.time, false, dt);
	    }
	  } else if (this.sleepMode === World.ISLAND_SLEEPING && this.islandSplit) {

	    // Tell all bodies to sleep tick but dont sleep yet
	    for (i = 0; i !== Nbodies; i++) {
	      bodies[i].sleepTick(this.time, true, dt);
	    }

	    // Sleep islands
	    var bodiesSortedByIsland = bodies.sort(sortBodiesByIsland);
	    var islandEnd = 1;
	    for (var islandStart = 0; islandStart < bodiesSortedByIsland.length; islandStart = islandEnd) {
	      var islandId = bodiesSortedByIsland[islandStart].islandId;

	      // Get islandEnd index
	      /* jshint ignore:start */
	      for (islandEnd = islandStart + 1; islandEnd < bodiesSortedByIsland.length && bodiesSortedByIsland[islandEnd].islandId === islandId; islandEnd++) {}
	      /* jshint ignore:end */

	      // Don't check static objects
	      if (islandId === -1) {
	        continue;
	      }

	      var islandShouldSleep = true;
	      for (var i = islandStart; i < islandEnd; i++) {
	        if (!bodiesSortedByIsland[i].wantsToSleep) {
	          islandShouldSleep = false;
	          break;
	        }
	      }
	      if (islandShouldSleep) {
	        for (var i = islandStart; i < islandEnd; i++) {
	          bodiesSortedByIsland[i].sleep();
	        }
	      }
	    }
	  }

	  this.stepping = false;

	  this.emit(postStepEvent);
	};

	function sortBodiesByIsland(a, b) {
	  return a.islandId - b.islandId;
	}

	function sortEquationsByIsland(equationA, equationB) {

	  var islandA = equationA.bodyA.islandId > 0 ? equationA.bodyA.islandId : equationA.bodyB.islandId;
	  var islandB = equationB.bodyA.islandId > 0 ? equationB.bodyA.islandId : equationB.bodyB.islandId;

	  if (islandA !== islandB) {
	    return islandA - islandB;
	  } else {
	    // Sort by equation type if same island
	    return equationA.index - equationB.index;
	  }
	}

	function runNarrowphase(world, np, bi, si, xi, ai, bj, sj, xj, aj, cm, glen) {

	  // Check collision groups and masks
	  if (!((si.collisionGroup & sj.collisionMask) !== 0 && (sj.collisionGroup & si.collisionMask) !== 0)) {
	    return;
	  }

	  // Get world position and angle of each shape
	  vec2.toGlobalFrame(xiw, xi, bi.position, bi.angle);
	  vec2.toGlobalFrame(xjw, xj, bj.position, bj.angle);

	  if (vec2.distance(xiw, xjw) > si.boundingRadius + sj.boundingRadius) {
	    return;
	  }

	  var aiw = ai + bi.angle;
	  var ajw = aj + bj.angle;

	  np.enableFriction = cm.friction > 0;
	  var reducedMass;
	  if (bi.type === Body.STATIC || bi.type === Body.KINEMATIC) {
	    reducedMass = bj.mass;
	  } else if (bj.type === Body.STATIC || bj.type === Body.KINEMATIC) {
	    reducedMass = bi.mass;
	  } else {
	    reducedMass = bi.mass * bj.mass / (bi.mass + bj.mass);
	  }
	  np.slipForce = cm.friction * glen * reducedMass;
	  np.currentContactMaterial = cm;
	  np.enabledEquations = bi.collisionResponse && bj.collisionResponse && si.collisionResponse && sj.collisionResponse;

	  var resolver = np[si.type | sj.type],
	      numContacts = 0;
	  if (resolver) {
	    var sensor = si.sensor || sj.sensor;
	    var numFrictionBefore = np.frictionEquations.length;
	    if (si.type < sj.type) {
	      numContacts = resolver.call(np, bi, si, xiw, aiw, bj, sj, xjw, ajw, sensor);
	    } else {
	      numContacts = resolver.call(np, bj, sj, xjw, ajw, bi, si, xiw, aiw, sensor);
	    }
	    var numFrictionEquations = np.frictionEquations.length - numFrictionBefore;

	    if (numContacts) {

	      if (bi.allowSleep && bi.type === Body.DYNAMIC && bi.sleepState === Body.SLEEPING && bj.sleepState === Body.AWAKE && bj.type !== Body.STATIC) {
	        var speedSquaredB = vec2.squaredLength(bj.velocity) + Math.pow(bj.angularVelocity, 2);
	        var speedLimitSquaredB = Math.pow(bj.sleepSpeedLimit, 2);
	        if (speedSquaredB >= speedLimitSquaredB * 2) {
	          bi._wakeUpAfterNarrowphase = true;
	        }
	      }

	      if (bj.allowSleep && bj.type === Body.DYNAMIC && bj.sleepState === Body.SLEEPING && bi.sleepState === Body.AWAKE && bi.type !== Body.STATIC) {
	        var speedSquaredA = vec2.squaredLength(bi.velocity) + Math.pow(bi.angularVelocity, 2);
	        var speedLimitSquaredA = Math.pow(bi.sleepSpeedLimit, 2);
	        if (speedSquaredA >= speedLimitSquaredA * 2) {
	          bj._wakeUpAfterNarrowphase = true;
	        }
	      }

	      world.overlapKeeper.setOverlapping(bi, si, bj, sj);
	      if (world.has('beginContact') && world.overlapKeeper.isNewOverlap(si, sj)) {

	        // Report new shape overlap
	        var e = beginContactEvent;
	        e.shapeA = si;
	        e.shapeB = sj;
	        e.bodyA = bi;
	        e.bodyB = bj;

	        // Reset contact equations
	        e.contactEquations.length = 0;

	        if (!sensor) {
	          for (var i = np.contactEquations.length - numContacts; i < np.contactEquations.length; i++) {
	            e.contactEquations.push(np.contactEquations[i]);
	          }
	        }

	        world.emit(e);
	      }

	      // divide the max friction force by the number of contacts
	      if (!sensor && numFrictionEquations > 1) {
	        // Why divide by 1?
	        for (var i = np.frictionEquations.length - numFrictionEquations; i < np.frictionEquations.length; i++) {
	          var f = np.frictionEquations[i];
	          f.setSlipForce(f.getSlipForce() / numFrictionEquations);
	        }
	      }
	    }
	  }
	}

	/**
	 * Add a spring to the simulation. Note that this operation can't be done during step.
	 *
	 * @method addSpring
	 * @param {Spring} spring
	 */
	World.prototype.addSpring = function (spring) {
	  if (this.stepping) {
	    throw new Error('Springs cannot be added during step.');
	  }
	  this.springs.push(spring);
	  addSpringEvent.spring = spring;
	  this.emit(addSpringEvent);
	  addSpringEvent.spring = null;
	};

	/**
	 * Remove a spring. Note that this operation can't be done during step.
	 *
	 * @method removeSpring
	 * @param {Spring} spring
	 */
	World.prototype.removeSpring = function (spring) {
	  if (this.stepping) {
	    throw new Error('Springs cannot be removed during step.');
	  }
	  arrayRemove(this.springs, spring);
	};

	/**
	 * Add a body to the simulation. Note that you can't add a body during step: you have to wait until after the step (see the postStep event).
	 * Also note that bodies can only be added to one World at a time.
	 *
	 * @method addBody
	 * @param {Body} body
	 *
	 * @example
	 *     var world = new World(),
	 *         body = new Body();
	 *     world.addBody(body);
	 */
	World.prototype.addBody = function (body) {
	  if (this.stepping) {
	    throw new Error('Bodies cannot be added during step.');
	  }

	  // Already added?
	  if (body.world) {
	    throw new Error('Body is already added to a World.');
	  }

	  body.index = this.bodies.length;
	  this.bodies.push(body);
	  body.world = this;

	  addBodyEvent.body = body;
	  this.emit(addBodyEvent);
	  addBodyEvent.body = null;
	};

	/**
	 * Remove a body from the simulation. Note that bodies cannot be removed during step (for example, inside the beginContact event). In that case you need to wait until the step is done (see the postStep event).
	 *
	 * Also note that any constraints connected to the body must be removed before the body.
	 *
	 * @method removeBody
	 * @param {Body} body
	 *
	 * @example
	 *     var removeBody;
	 *     world.on("beginContact",function(event){
	 *         // We cannot remove the body here since the world is still stepping.
	 *         // Instead, schedule the body to be removed after the step is done.
	 *         removeBody = body;
	 *     });
	 *     world.on("postStep",function(event){
	 *         if(removeBody){
	 *             // Safely remove the body from the world.
	 *             world.removeBody(removeBody);
	 *             removeBody = null;
	 *         }
	 *     });
	 */
	World.prototype.removeBody = function (body) {
	  if (this.stepping) {
	    throw new Error('Bodies cannot be removed during step.');
	  }

	  // TODO: would it be smart to have a .constraints array on the body?
	  var constraints = this.constraints;
	  var l = constraints.length;
	  while (l--) {
	    if (constraints[l].bodyA === this || constraints[l].bodyB === this) {
	      throw new Error('Cannot remove Body from World: it still has constraints connected to it.');
	    }
	  }

	  body.world = null;
	  var bodies = this.bodies;
	  arrayRemove(bodies, body);
	  body.index = -1;
	  var l = bodies.length;
	  while (l--) {
	    bodies[l].index = l;
	  }

	  // Emit removeBody event
	  removeBodyEvent.body = body;
	  body.resetConstraintVelocity();
	  this.emit(removeBodyEvent);
	  removeBodyEvent.body = null;

	  // Remove disabled body collision pairs that involve body
	  var pairs = this.disabledBodyCollisionPairs;
	  var i = 0;
	  while (i < pairs.length) {
	    if (pairs[i] === body || pairs[i + 1] === body) {
	      pairs.splice(i, 2);
	    } else {
	      i += 2;
	    }
	  }
	};

	/**
	 * Get a body by its id.
	 * @method getBodyById
	 * @param {number} id
	 * @return {Body} The body, or false if it was not found.
	 */
	World.prototype.getBodyById = function (id) {
	  var bodies = this.bodies;
	  for (var i = 0; i < bodies.length; i++) {
	    var b = bodies[i];
	    if (b.id === id) {
	      return b;
	    }
	  }
	  return false;
	};

	/**
	 * Disable collision between two bodies
	 * @method disableBodyCollision
	 * @param {Body} bodyA
	 * @param {Body} bodyB
	 */
	World.prototype.disableBodyCollision = function (bodyA, bodyB) {
	  this.disabledBodyCollisionPairs.push(bodyA, bodyB);
	};

	/**
	 * Enable collisions between the given two bodies, if they were previously disabled using .disableBodyCollision().
	 * @method enableBodyCollision
	 * @param {Body} bodyA
	 * @param {Body} bodyB
	 */
	World.prototype.enableBodyCollision = function (bodyA, bodyB) {
	  var pairs = this.disabledBodyCollisionPairs;
	  for (var i = 0; i < pairs.length; i += 2) {
	    if (pairs[i] === bodyA && pairs[i + 1] === bodyB || pairs[i + 1] === bodyA && pairs[i] === bodyB) {
	      pairs.splice(i, 2);
	      return;
	    }
	  }
	};

	/**
	 * Removes all bodies, constraints, springs, and contact materials from the world.
	 * @method clear
	 */
	World.prototype.clear = function () {

	  // Remove all solver equations
	  this.solver.removeAllEquations();

	  // Remove all constraints
	  var cs = this.constraints;
	  var i = cs.length;
	  while (i--) {
	    this.removeConstraint(cs[i]);
	  }

	  // Remove all bodies
	  var bodies = this.bodies;
	  i = bodies.length;
	  while (i--) {
	    this.removeBody(bodies[i]);
	  }

	  // Remove all springs
	  var springs = this.springs;
	  i = springs.length;
	  while (i--) {
	    this.removeSpring(springs[i]);
	  }

	  // Remove all contact materials
	  var cms = this.contactMaterials;
	  i = cms.length;
	  while (i--) {
	    this.removeContactMaterial(cms[i]);
	  }
	};

	var hitTest_tmp1 = vec2.create(),
	    hitTest_tmp2 = vec2.create();

	/**
	 * Test if a world point overlaps bodies
	 * @method hitTest
	 * @param  {Array} worldPoint Point to use for intersection tests
	 * @param  {Array} bodies A list of objects to check for intersection
	 * @param  {Number} precision Used for matching against particles and lines. Adds some margin to these infinitesimal objects.
	 * @return {Array} Array of bodies that overlap the point
	 * @todo Should use an api similar to the raycast function
	 * @todo Should probably implement a .containsPoint method for all shapes. Would be more efficient
	 * @todo Should use the broadphase
	 * @todo Returning the hit shape would be fine - it carries a reference to the body now
	 */
	World.prototype.hitTest = function (worldPoint, bodies, precision) {
	  precision = precision || 0;

	  // Create a dummy particle body with a particle shape to test against the bodies
	  var shapeWorldPosition = hitTest_tmp1,
	      shapeLocalPoint = hitTest_tmp2;

	  var result = [];

	  // Check bodies
	  for (var i = 0, N = bodies.length; i !== N; i++) {
	    var body = bodies[i];

	    for (var j = 0, NS = body.shapes.length; j !== NS; j++) {
	      var shape = body.shapes[j];

	      // Get local point position in the shape
	      shape.worldPointToLocal(shapeLocalPoint, worldPoint);

	      if (shape.pointTest(shapeLocalPoint)) {
	        result.push(body);
	      } else {

	        // Get shape world position
	        vec2.rotate(shapeWorldPosition, shape.position, body.angle);
	        vec2.add(shapeWorldPosition, shapeWorldPosition, body.position);

	        if (shape.type === Shape.PARTICLE && vec2.squaredDistance(shapeWorldPosition, worldPoint) < precision * precision) {
	          result.push(body);
	        }
	      }
	    }
	  }

	  return result;
	};

	/**
	 * Set the stiffness for all equations and contact materials.
	 * @method setGlobalStiffness
	 * @param {Number} stiffness
	 */
	World.prototype.setGlobalStiffness = function (stiffness) {
	  setGlobalEquationParams(this, { stiffness: stiffness });

	  // Set for all contact materials
	  var contactMaterials = this.contactMaterials;
	  for (var i = 0; i !== contactMaterials.length; i++) {
	    var c = contactMaterials[i];
	    c.stiffness = c.frictionStiffness = stiffness;
	  }

	  // Set for default contact material
	  var c = this.defaultContactMaterial;
	  c.stiffness = c.frictionStiffness = stiffness;
	};

	/**
	 * Set the relaxation for all equations and contact materials.
	 * @method setGlobalRelaxation
	 * @param {Number} relaxation
	 */
	World.prototype.setGlobalRelaxation = function (relaxation) {
	  setGlobalEquationParams(this, { relaxation: relaxation });

	  // Set for all contact materials
	  for (var i = 0; i !== this.contactMaterials.length; i++) {
	    var c = this.contactMaterials[i];
	    c.relaxation = c.frictionRelaxation = relaxation;
	  }

	  // Set for default contact material
	  var c = this.defaultContactMaterial;
	  c.relaxation = c.frictionRelaxation = relaxation;
	};

	function setGlobalEquationParams(world, params) {
	  var constraints = world.constraints;
	  for (var i = 0; i !== constraints.length; i++) {
	    var c = constraints[i];
	    var eqs = c.equations;
	    for (var j = 0; j !== eqs.length; j++) {
	      var eq = eqs[j];
	      eq.relaxation = params.relaxation !== undefined ? params.relaxation : eq.relaxation;
	      eq.stiffness = params.stiffness !== undefined ? params.stiffness : eq.stiffness;
	      eq.needsUpdate = true;
	    }
	  }
	}

	var tmpAABB = new AABB();
	var tmpArray = [];

	/**
	 * Ray cast against all bodies in the world.
	 * @method raycast
	 * @param  {RaycastResult} result
	 * @param  {Ray} ray
	 * @return {boolean} True if any body was hit.
	 *
	 * @example
	 *     var ray = new Ray({
	 *         mode: Ray.CLOSEST, // or ANY
	 *         from: [0, 0],
	 *         to: [10, 0],
	 *     });
	 *     var result = new RaycastResult();
	 *     world.raycast(result, ray);
	 *
	 *     // Get the hit point
	 *     var hitPoint = vec2.create();
	 *     result.getHitPoint(hitPoint, ray);
	 *     console.log('Hit point: ', hitPoint[0], hitPoint[1], ' at distance ' + result.getHitDistance(ray));
	 *
	 * @example
	 *     var ray = new Ray({
	 *         mode: Ray.ALL,
	 *         from: [0, 0],
	 *         to: [10, 0],
	 *         callback: function(result){
	 *
	 *             // Print some info about the hit
	 *             console.log('Hit body and shape: ', result.body, result.shape);
	 *
	 *             // Get the hit point
	 *             var hitPoint = vec2.create();
	 *             result.getHitPoint(hitPoint, ray);
	 *             console.log('Hit point: ', hitPoint[0], hitPoint[1], ' at distance ' + result.getHitDistance(ray));
	 *
	 *             // If you are happy with the hits you got this far, you can stop the traversal here:
	 *             result.stop();
	 *         }
	 *     });
	 *     var result = new RaycastResult();
	 *     world.raycast(result, ray);
	 */
	World.prototype.raycast = function (result, ray) {

	  // Get all bodies within the ray AABB
	  ray.getAABB(tmpAABB);
	  this.broadphase.aabbQuery(this, tmpAABB, tmpArray);
	  ray.intersectBodies(result, tmpArray);
	  tmpArray.length = 0;

	  return result.hasHit();
	};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var TupleDictionary = __webpack_require__(46);
	var OverlapKeeperRecordPool = __webpack_require__(62);

	module.exports = OverlapKeeper;

	/**
	 * Keeps track of overlaps in the current state and the last step state.
	 * @class OverlapKeeper
	 * @constructor
	 */
	function OverlapKeeper() {
	    this.overlappingShapesLastState = new TupleDictionary();
	    this.overlappingShapesCurrentState = new TupleDictionary();
	    this.recordPool = new OverlapKeeperRecordPool({ size: 16 });
	    this.tmpDict = new TupleDictionary();
	    this.tmpArray1 = [];
	}

	/**
	 * Ticks one step forward in time. This will move the current overlap state to the "old" overlap state, and create a new one as current.
	 * @method tick
	 */
	OverlapKeeper.prototype.tick = function () {
	    var last = this.overlappingShapesLastState;
	    var current = this.overlappingShapesCurrentState;

	    // Save old objects into pool
	    var l = last.keys.length;
	    while (l--) {
	        var key = last.keys[l];
	        var lastObject = last.getByKey(key);
	        if (lastObject) {
	            // The record is only used in the "last" dict, and will be removed. We might as well pool it.
	            this.recordPool.release(lastObject);
	        }
	    }

	    // Clear last object
	    last.reset();

	    // Transfer from new object to old
	    last.copy(current);

	    // Clear current object
	    current.reset();
	};

	/**
	 * @method setOverlapping
	 * @param {Body} bodyA
	 * @param {Body} shapeA
	 * @param {Body} bodyB
	 * @param {Body} shapeB
	 */
	OverlapKeeper.prototype.setOverlapping = function (bodyA, shapeA, bodyB, shapeB) {
	    var current = this.overlappingShapesCurrentState;

	    // Store current contact state
	    if (!current.get(shapeA.id, shapeB.id)) {
	        var data = this.recordPool.get();
	        data.set(bodyA, shapeA, bodyB, shapeB);
	        current.set(shapeA.id, shapeB.id, data);
	    }
	};

	OverlapKeeper.prototype.getNewOverlaps = function (result) {
	    return this.getDiff(this.overlappingShapesLastState, this.overlappingShapesCurrentState, result);
	};

	OverlapKeeper.prototype.getEndOverlaps = function (result) {
	    return this.getDiff(this.overlappingShapesCurrentState, this.overlappingShapesLastState, result);
	};

	/**
	 * Checks if two bodies are currently overlapping.
	 * @method bodiesAreOverlapping
	 * @param  {Body} bodyA
	 * @param  {Body} bodyB
	 * @return {boolean}
	 */
	OverlapKeeper.prototype.bodiesAreOverlapping = function (bodyA, bodyB) {
	    var current = this.overlappingShapesCurrentState;
	    var l = current.keys.length;
	    while (l--) {
	        var key = current.keys[l];
	        var data = current.data[key];
	        if (data.bodyA === bodyA && data.bodyB === bodyB || data.bodyA === bodyB && data.bodyB === bodyA) {
	            return true;
	        }
	    }
	    return false;
	};

	OverlapKeeper.prototype.getDiff = function (dictA, dictB, result) {
	    var result = result || [];
	    var last = dictA;
	    var current = dictB;

	    result.length = 0;

	    var l = current.keys.length;
	    while (l--) {
	        var key = current.keys[l];
	        var data = current.data[key];

	        if (!data) {
	            throw new Error('Key ' + key + ' had no data!');
	        }

	        var lastData = last.data[key];
	        if (!lastData) {
	            // Not overlapping in last state, but in current.
	            result.push(data);
	        }
	    }

	    return result;
	};

	OverlapKeeper.prototype.isNewOverlap = function (shapeA, shapeB) {
	    var idA = shapeA.id | 0,
	        idB = shapeB.id | 0;
	    var last = this.overlappingShapesLastState;
	    var current = this.overlappingShapesCurrentState;
	    // Not in last but in new
	    return !!!last.get(idA, idB) && !!current.get(idA, idB);
	};

	OverlapKeeper.prototype.getNewBodyOverlaps = function (result) {
	    this.tmpArray1.length = 0;
	    var overlaps = this.getNewOverlaps(this.tmpArray1);
	    return this.getBodyDiff(overlaps, result);
	};

	OverlapKeeper.prototype.getEndBodyOverlaps = function (result) {
	    this.tmpArray1.length = 0;
	    var overlaps = this.getEndOverlaps(this.tmpArray1);
	    return this.getBodyDiff(overlaps, result);
	};

	OverlapKeeper.prototype.getBodyDiff = function (overlaps, result) {
	    result = result || [];
	    var accumulator = this.tmpDict;

	    var l = overlaps.length;

	    while (l--) {
	        var data = overlaps[l];

	        // Since we use body id's for the accumulator, these will be a subset of the original one
	        accumulator.set(data.bodyA.id | 0, data.bodyB.id | 0, data);
	    }

	    l = accumulator.keys.length;
	    while (l--) {
	        var data = accumulator.getByKey(accumulator.keys[l]);
	        if (data) {
	            result.push(data.bodyA, data.bodyB);
	        }
	    }

	    accumulator.reset();

	    return result;
	};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var OverlapKeeperRecord = __webpack_require__(63);
	var Pool = __webpack_require__(33);

	module.exports = OverlapKeeperRecordPool;

	/**
	 * @class
	 */
	function OverlapKeeperRecordPool() {
	  Pool.apply(this, arguments);
	}
	OverlapKeeperRecordPool.prototype = new Pool();
	OverlapKeeperRecordPool.prototype.constructor = OverlapKeeperRecordPool;

	/**
	 * @method create
	 * @return {OverlapKeeperRecord}
	 */
	OverlapKeeperRecordPool.prototype.create = function () {
	  return new OverlapKeeperRecord();
	};

	/**
	 * @method destroy
	 * @param {OverlapKeeperRecord} record
	 * @return {OverlapKeeperRecordPool}
	 */
	OverlapKeeperRecordPool.prototype.destroy = function (record) {
	  record.bodyA = record.bodyB = record.shapeA = record.shapeB = null;
	  return this;
	};

/***/ }),
/* 63 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = OverlapKeeperRecord;

	/**
	 * Overlap data container for the OverlapKeeper
	 * @class OverlapKeeperRecord
	 * @constructor
	 * @param {Body} bodyA
	 * @param {Shape} shapeA
	 * @param {Body} bodyB
	 * @param {Shape} shapeB
	 */
	function OverlapKeeperRecord(bodyA, shapeA, bodyB, shapeB) {
	  /**
	   * @property {Shape} shapeA
	   */
	  this.shapeA = shapeA;
	  /**
	   * @property {Shape} shapeB
	   */
	  this.shapeB = shapeB;
	  /**
	   * @property {Body} bodyA
	   */
	  this.bodyA = bodyA;
	  /**
	   * @property {Body} bodyB
	   */
	  this.bodyB = bodyB;
	}

	/**
	 * Set the data for the record
	 * @method set
	 * @param {Body} bodyA
	 * @param {Shape} shapeA
	 * @param {Body} bodyB
	 * @param {Shape} shapeB
	 */
	OverlapKeeperRecord.prototype.set = function (bodyA, shapeA, bodyB, shapeB) {
	  OverlapKeeperRecord.call(this, bodyA, shapeA, bodyB, shapeB);
	};

/***/ }),
/* 64 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = UnionFind;

	/**
	 * Weighted Quick Union-Find with Path Compression. Based on https://github.com/juzerali/unionfind, but optimized for performance.
	 * @class UnionFind
	 * @constructor
	 * @param {number} size
	 */
	function UnionFind(size) {
	  this.id = [];
	  this.sz = [];

	  /**
	   * The number of elements.
	   * @property {number} size
	   */
	  this.size = size;

	  /**
	   * The number of distinct groups.
	   * @property {number} count
	   */
	  this.count = size;

	  this.resize(size);
	}

	UnionFind.prototype = {

	  /**
	   * Initialize the UnionFind data structure with number of distinct groups to begin with. Each group will be referred to as index of the array of size size starting at 0.
	   * @method resize
	   * @param {number} size
	   */
	  resize: function resize(size) {
	    this.count = this.size = size;
	    var sz = this.sz;
	    var id = this.id;
	    for (var i = 0; i < size; i++) {
	      id[i] = i;
	      sz[i] = 1;
	    }
	  },

	  /**
	   * Return the root (value) of the group in which p is.
	   * @method find
	   * @param {number} p
	   */
	  find: function find(p) {
	    var id = this.id;
	    while (p !== id[p]) {
	      id[p] = id[id[p]];
	      p = id[p];
	    }
	    return p;
	  },

	  /**
	   * Combine elements in groups p and q into a single group. In other words connect the two groups.
	   * @method union
	   * @param {number} p
	   * @param {number} q
	   */
	  union: function union(p, q) {
	    var i = this.find(p),
	        j = this.find(q);

	    if (i === j) {
	      return;
	    }

	    var sz = this.sz;
	    var id = this.id;
	    if (sz[i] < sz[j]) {
	      id[i] = j;sz[j] += sz[i];
	    } else {
	      id[j] = i;sz[i] += sz[j];
	    }

	    this.count--;
	    return;
	  }
	};

/***/ }),
/* 65 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Container = function (_Tiny$Container) {
	  _inherits(Container, _Tiny$Container);

	  function Container() {
	    _classCallCheck(this, Container);

	    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this));
	  }

	  return Container;
	}(Tiny.Container);

	exports.default = Container;

/***/ }),
/* 66 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	* Collision Group
	*
	* @class Tiny.Physics.P2.CollisionGroup
	* @constructor
	* @param {number} bitmask - The CollisionGroup bitmask.
	*/
	var CollisionGroup = function CollisionGroup(bitmask) {
	  _classCallCheck(this, CollisionGroup);

	  /**
	  * @property {number} mask - The CollisionGroup bitmask.
	  */
	  this.mask = bitmask;
	};

	exports.default = CollisionGroup;
	;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var p2 = __webpack_require__(9);
	/**
	* Creates a linear spring, connecting two bodies. A spring can have a resting length, a stiffness and damping.
	*
	* @class Tiny.Physics.P2.Spring
	* @constructor
	* @param {Tiny.Physics.P2} world - A reference to the P2 World.
	* @param {p2.Body} bodyA - First connected body.
	* @param {p2.Body} bodyB - Second connected body.
	* @param {number} [restLength=1] - Rest length of the spring. A number > 0.
	* @param {number} [stiffness=100] - Stiffness of the spring. A number >= 0.
	* @param {number} [damping=1] - Damping of the spring. A number >= 0.
	* @param {Array} [worldA] - Where to hook the spring to body A in world coordinates. This value is an array with 2 elements matching x and y, i.e: [32, 32].
	* @param {Array} [worldB] - Where to hook the spring to body B in world coordinates. This value is an array with 2 elements matching x and y, i.e: [32, 32].
	* @param {Array} [localA] - Where to hook the spring to body A in local body coordinates. This value is an array with 2 elements matching x and y, i.e: [32, 32].
	* @param {Array} [localB] - Where to hook the spring to body B in local body coordinates. This value is an array with 2 elements matching x and y, i.e: [32, 32].
	*/

	var Spring = function Spring(world, bodyA, bodyB) {
	  var restLength = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
	  var stiffness = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 100;
	  var damping = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
	  var worldA = arguments[6];
	  var worldB = arguments[7];
	  var localA = arguments[8];
	  var localB = arguments[9];

	  _classCallCheck(this, Spring);

	  restLength = world.pxm(restLength);

	  /**
	  * @property {Tiny.Application} game - Local reference to game.
	  */
	  this.app = world.app;

	  /**
	  * @property {Tiny.Physics.P2} world - Local reference to P2 World.
	  */
	  this.world = world;

	  var options = {
	    restLength: restLength,
	    stiffness: stiffness,
	    damping: damping
	  };

	  if (typeof worldA !== 'undefined' && worldA !== null) {
	    options.worldAnchorA = [world.pxm(worldA[0]), world.pxm(worldA[1])];
	  }

	  if (typeof worldB !== 'undefined' && worldB !== null) {
	    options.worldAnchorB = [world.pxm(worldB[0]), world.pxm(worldB[1])];
	  }

	  if (typeof localA !== 'undefined' && localA !== null) {
	    options.localAnchorA = [world.pxm(localA[0]), world.pxm(localA[1])];
	  }

	  if (typeof localB !== 'undefined' && localB !== null) {
	    options.localAnchorB = [world.pxm(localB[0]), world.pxm(localB[1])];
	  }

	  /**
	  * @property {p2.LinearSpring} data - The actual p2 spring object.
	  */
	  this.data = new p2.LinearSpring(bodyA, bodyB, options);

	  this.data.parent = this;
	};

	exports.default = Spring;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var p2 = __webpack_require__(9);
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

	var RotationalSpring = function RotationalSpring(world, bodyA, bodyB) {
	  var restAngle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
	  var stiffness = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 100;
	  var damping = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;

	  _classCallCheck(this, RotationalSpring);

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

	  var options = {
	    restAngle: restAngle,
	    stiffness: stiffness,
	    damping: damping
	  };

	  /**
	  * @property {p2.RotationalSpring} data - The actual p2 spring object.
	  */
	  this.data = new p2.RotationalSpring(bodyA, bodyB, options);

	  this.data.parent = this;
	};

	exports.default = RotationalSpring;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var p2 = __webpack_require__(9);
	/**
	* Locks the relative position between two bodies.
	*
	* @class Tiny.Physics.P2.LockConstraint
	* @constructor
	* @param {Tiny.Physics.P2} world - A reference to the P2 World.
	* @param {p2.Body} bodyA - First connected body.
	* @param {p2.Body} bodyB - Second connected body.
	* @param {Array} [offset] - The offset of bodyB in bodyA's frame. The value is an array with 2 elements matching x and y, i.e: [32, 32].
	* @param {number} [angle=0] - The angle of bodyB in bodyA's frame.
	* @param {number} [maxForce] - The maximum force that should be applied to constrain the bodies.
	*/

	var LockConstraint = function (_p2$LockConstraint) {
	  _inherits(LockConstraint, _p2$LockConstraint);

	  function LockConstraint(world, bodyA, bodyB) {
	    var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [0, 0];
	    var angle = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
	    var maxForce = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : Number.MAX_VALUE;

	    _classCallCheck(this, LockConstraint);

	    offset = [world.pxm(offset[0]), world.pxm(offset[1])];

	    var options = {
	      localOffsetB: offset,
	      localAngleB: angle,
	      maxForce: maxForce
	    };

	    /**
	    * @property {Tiny.Application} app - Local reference to game.
	    */
	    var _this = _possibleConstructorReturn(this, (LockConstraint.__proto__ || Object.getPrototypeOf(LockConstraint)).call(this, bodyA, bodyB, options));

	    _this.app = world.app;

	    /**
	    * @property {Tiny.Physics.P2} world - Local reference to P2 World.
	    */
	    _this.world = world;
	    return _this;
	  }

	  return LockConstraint;
	}(p2.LockConstraint);

	exports.default = LockConstraint;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var p2 = __webpack_require__(9);
	/**
	* A constraint that tries to keep the distance between two bodies constant.
	*
	* @class Tiny.Physics.P2.DistanceConstraint
	* @constructor
	* @param {Tiny.Physics.P2} world - A reference to the P2 World.
	* @param {p2.Body} bodyA - First connected body.
	* @param {p2.Body} bodyB - Second connected body.
	* @param {number} distance - The distance to keep between the bodies.
	* @param {Array} [localAnchorA] - The anchor point for bodyA, defined locally in bodyA frame. Defaults to [0,0].
	* @param {Array} [localAnchorB] - The anchor point for bodyB, defined locally in bodyB frame. Defaults to [0,0].
	* @param {object} [maxForce=Number.MAX_VALUE] - Maximum force to apply.
	*/

	var DistanceConstraint = function (_p2$DistanceConstrain) {
	  _inherits(DistanceConstraint, _p2$DistanceConstrain);

	  function DistanceConstraint(world, bodyA, bodyB) {
	    var distance = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
	    var localAnchorA = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [0, 0];
	    var localAnchorB = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [0, 0];
	    var maxForce = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : Number.MAX_VALUE;

	    _classCallCheck(this, DistanceConstraint);

	    distance = world.pxm(distance);

	    localAnchorA = [world.pxmi(localAnchorA[0]), world.pxmi(localAnchorA[1])];
	    localAnchorB = [world.pxmi(localAnchorB[0]), world.pxmi(localAnchorB[1])];

	    var options = {
	      distance: distance,
	      localAnchorA: localAnchorA,
	      localAnchorB: localAnchorB,
	      maxForce: maxForce
	    };

	    /**
	    * @property {Tiny.Application} app - Local reference to game.
	    */
	    var _this = _possibleConstructorReturn(this, (DistanceConstraint.__proto__ || Object.getPrototypeOf(DistanceConstraint)).call(this, bodyA, bodyB, options));

	    _this.app = world.app;
	    /**
	    * @property {Tiny.Physics.P2} world - Local reference to P2 World.
	    */
	    _this.world = world;
	    return _this;
	  }

	  return DistanceConstraint;
	}(p2.DistanceConstraint);

	exports.default = DistanceConstraint;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var p2 = __webpack_require__(9);
	/**
	* Connects two bodies at given offset points, letting them rotate relative to each other around this point.
	*
	* @class Tiny.Physics.P2.GearConstraint
	* @constructor
	* @param {Tiny.Physics.P2} world - A reference to the P2 World.
	* @param {p2.Body} bodyA - First connected body.
	* @param {p2.Body} bodyB - Second connected body.
	* @param {number} [angle=0] - The relative angle
	* @param {number} [ratio=1] - The gear ratio.
	*/

	var GearConstraint = function (_p2$GearConstraint) {
	  _inherits(GearConstraint, _p2$GearConstraint);

	  function GearConstraint(world, bodyA, bodyB) {
	    var angle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	    var ratio = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;

	    _classCallCheck(this, GearConstraint);

	    var options = {
	      angle: angle,
	      ratio: ratio
	    };

	    /**
	    * @property {Tiny.Application} app - Local reference to game.
	    */
	    var _this = _possibleConstructorReturn(this, (GearConstraint.__proto__ || Object.getPrototypeOf(GearConstraint)).call(this, bodyA, bodyB, options));

	    _this.app = world.app;
	    /**
	    * @property {Tiny.Physics.P2} world - Local reference to P2 World.
	    */
	    _this.world = world;
	    return _this;
	  }

	  return GearConstraint;
	}(p2.GearConstraint);

	exports.default = GearConstraint;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var p2 = __webpack_require__(9);

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

	var RevoluteConstraint = exports.RevoluteConstraint = function (_p2$RevoluteConstrain) {
	  _inherits(RevoluteConstraint, _p2$RevoluteConstrain);

	  function RevoluteConstraint(world, bodyA, pivotA, bodyB, pivotB) {
	    var maxForce = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : Number.MAX_VALUE;
	    var worldPivot = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;

	    _classCallCheck(this, RevoluteConstraint);

	    pivotA = [world.pxmi(pivotA[0]), world.pxmi(pivotA[1])];
	    pivotB = [world.pxmi(pivotB[0]), world.pxmi(pivotB[1])];

	    if (worldPivot) {
	      worldPivot = [world.pxmi(worldPivot[0]), world.pxmi(worldPivot[1])];
	    }

	    var options = {
	      worldPivot: worldPivot,
	      localPivotA: pivotA,
	      localPivotB: pivotB,
	      maxForce: maxForce
	    };

	    /**
	     * @property {Tiny.Physics.P2} world - Local reference to P2 World.
	     */
	    var _this = _possibleConstructorReturn(this, (RevoluteConstraint.__proto__ || Object.getPrototypeOf(RevoluteConstraint)).call(this, bodyA, bodyB, options));

	    _this.world = world;
	    return _this;
	  }

	  return RevoluteConstraint;
	}(p2.RevoluteConstraint);

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var p2 = __webpack_require__(9);
	/**
	* Connects two bodies at given offset points, letting them rotate relative to each other around this point.
	*
	* @class Tiny.Physics.P2.PrismaticConstraint
	* @constructor
	* @param {Tiny.Physics.P2} world - A reference to the P2 World.
	* @param {p2.Body} bodyA - First connected body.
	* @param {p2.Body} bodyB - Second connected body.
	* @param {boolean} [lockRotation=true] - If set to false, bodyB will be free to rotate around its anchor point.
	* @param {Array} [anchorA] - Body A's anchor point, defined in its own local frame. The value is an array with 2 elements matching x and y, i.e: [32, 32].
	* @param {Array} [anchorB] - Body A's anchor point, defined in its own local frame. The value is an array with 2 elements matching x and y, i.e: [32, 32].
	* @param {Array} [axis] - An axis, defined in body A frame, that body B's anchor point may slide along. The value is an array with 2 elements matching x and y, i.e: [32, 32].
	* @param {number} [maxForce] - The maximum force that should be applied to constrain the bodies.
	*/

	var PrismaticConstraint = function (_p2$PrismaticConstrai) {
	  _inherits(PrismaticConstraint, _p2$PrismaticConstrai);

	  function PrismaticConstraint(world, bodyA, bodyB) {
	    var lockRotation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
	    var anchorA = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [0, 0];
	    var anchorB = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [0, 0];
	    var axis = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [0, 0];
	    var maxForce = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : Number.MAX_VALUE;

	    _classCallCheck(this, PrismaticConstraint);

	    anchorA = [world.pxmi(anchorA[0]), world.pxmi(anchorA[1])];
	    anchorB = [world.pxmi(anchorB[0]), world.pxmi(anchorB[1])];

	    var options = {
	      localAnchorA: anchorA,
	      localAnchorB: anchorB,
	      localAxisA: axis,
	      maxForce: maxForce,
	      disableRotationalLock: !lockRotation
	    };

	    /**
	    * @property {Tiny.Application} game - Local reference to app.
	    */
	    var _this = _possibleConstructorReturn(this, (PrismaticConstraint.__proto__ || Object.getPrototypeOf(PrismaticConstraint)).call(this, bodyA, bodyB, options));

	    _this.app = world.app;

	    /**
	    * @property {Tiny.Physics.P2} world - Local reference to P2 World.
	    */
	    _this.world = world;
	    return _this;
	  }

	  return PrismaticConstraint;
	}(p2.PrismaticConstraint);

	exports.default = PrismaticConstraint;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var p2 = __webpack_require__(9);
	/**
	* A P2 Material.
	* @class Tiny.Physics.P2.Material
	* @constructor
	* @param {string} name - The user defined name given to this Material.
	*/

	var Material = function (_p2$Material) {
	  _inherits(Material, _p2$Material);

	  function Material(name) {
	    _classCallCheck(this, Material);

	    /**
	    * @property {string} name - The user defined name given to this Material.
	    * @default
	    */
	    var _this = _possibleConstructorReturn(this, (Material.__proto__ || Object.getPrototypeOf(Material)).call(this));

	    _this.name = name;
	    return _this;
	  }

	  return Material;
	}(p2.Material);

	exports.default = Material;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var p2 = __webpack_require__(9);
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

	var ContactMaterial = function (_p2$ContactMaterial) {
	  _inherits(ContactMaterial, _p2$ContactMaterial);

	  function ContactMaterial(materialA, materialB, options) {
	    _classCallCheck(this, ContactMaterial);

	    return _possibleConstructorReturn(this, (ContactMaterial.__proto__ || Object.getPrototypeOf(ContactMaterial)).call(this, materialA, materialB, options));
	  }

	  return ContactMaterial;
	}(p2.ContactMaterial);

	exports.default = ContactMaterial;

/***/ }),
/* 76 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// spring添加
	var ON_SPRING_ADDED = exports.ON_SPRING_ADDED = 'springAdded';
	// spring删除
	var ON_SPRING_REMOVED = exports.ON_SPRING_REMOVED = 'springRemoved';
	// 结束碰撞
	var ON_END_CONTACT = exports.ON_END_CONTACT = 'endContact';
	// 开始碰撞
	var ON_BEGIN_CONTACT = exports.ON_BEGIN_CONTACT = 'beginContact';
	// body 删除
	var ON_BODY_REMOVED = exports.ON_BODY_REMOVED = 'bodyRemoved';
	// Body 被添加
	var ON_BODY_ADDED = exports.ON_BODY_ADDED = 'bodyAdded';
	var ON_CONSTRAIN_ADDED = exports.ON_CONSTRAIN_ADDED = 'constraintAdded';
	var ON_CONSTRAIN_REMOVED = exports.ON_CONSTRAIN_REMOVED = 'constraintRemoved';
	var ON_CONTACTMATERIAL_ADDED = exports.ON_CONTACTMATERIAL_ADDED = 'contactMaterialAdded';
	var ON_CONTACTMATERIAL_REMOVED = exports.ON_CONTACTMATERIAL_REMOVED = 'ContactMaterialRemoved';

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EVENTS = exports.Math = exports.startSystem = undefined;

	var _utils = __webpack_require__(3);

	Object.keys(_utils).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _utils[key];
	    }
	  });
	});

	var _world = __webpack_require__(78);

	var _world2 = _interopRequireDefault(_world);

	var _math = __webpack_require__(7);

	var Math = _interopRequireWildcard(_math);

	var _EVENTS = __webpack_require__(82);

	var EVENTS = _interopRequireWildcard(_EVENTS);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*!
	 * Name: Tiny.Physics.Ant
	 * Description: 轻量级物理引擎，从Phaser 的arcade的改造过来的 感谢Phaser提供的解决方案
	 * Author: 清扬陌客
	 * Version: v0.0.1
	 */
	var system = null;
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
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Group = __webpack_require__(79);

	var _Group2 = _interopRequireDefault(_Group);

	var _Body = __webpack_require__(80);

	var _Body2 = _interopRequireDefault(_Body);

	var _EVENTS = __webpack_require__(82);

	var EVENTS = _interopRequireWildcard(_EVENTS);

	var _math = __webpack_require__(7);

	var TinyMath = _interopRequireWildcard(_math);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var World = function (_Tiny$EventEmitter) {
	  _inherits(World, _Tiny$EventEmitter);

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
	     *
	     * @method Tiny.Physics.Ant#setBounds
	     * @param {number} x - 物理系统边界的左上角x坐标.
	     * @param {number} y - 物理系统边界的左上角y坐标.
	     * @param {number} width - 物理系统边界的宽度.
	     * @param {number} height - 物理系统边界的高度.
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
	    *
	    * @method Tiny.Physics.Ant#setBoundsToWorld
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
	     * @method Tiny.Physics.Ant#enable
	     * @param {Tiny.Sprite|Array<Tiny.Sprite>} object - Tiny显示对象或者对象数组
	     * @param {boolean} [debug=true] - 是否开启Body调试
	     * @param {boolean} [children=true] - 是否启用子级元素
	     */

	  }, {
	    key: 'enable',
	    value: function enable(object) {
	      var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	      var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

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
	     * @method Tiny.Physics.Ant#enableBody
	     * @param {Tiny.Sprite|object} object - Tiny中的显示对象 Tiny.Sprite
	     */

	  }, {
	    key: 'enableBody',
	    value: function enableBody(object, debug) {
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
	    *
	    * @method Tiny.Physics.P2#addBody
	    * @param {Tiny.Physics.P2.Body} body - 刚体.
	    * @return {boolean}  True 添加成功, false 添加失败.
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
	     * @param {Tiny.Physics.P2.Body} body - 要延迟到下一次渲染删除的Body对象
	     */

	  }, {
	    key: 'removeBodyNextStep',
	    value: function removeBodyNextStep(body) {
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

	  }, {
	    key: 'overlap',
	    value: function overlap(object1, object2, overlapCallback, processCallback, callbackContext) {
	      overlapCallback = overlapCallback || null;
	      processCallback = processCallback || null;
	      callbackContext = callbackContext || this;
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

	  }, {
	    key: 'collide',
	    value: function collide(object1, object2, collideCallback, processCallback, callbackContext) {
	      collideCallback = collideCallback || null;
	      processCallback = processCallback || null;
	      callbackContext = callbackContext || collideCallback;

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

	  }, {
	    key: 'collideHandler',
	    value: function collideHandler(object1, object2, collideCallback, processCallback, callbackContext, overlapOnly) {
	      //  If neither of the objects are set or exist then bail out
	      if (!object1 || !object2 || !object1.visible || !object2.visible) {
	        console.warn('object1 is null or not visible');
	        return;
	      }

	      if (object1 instanceof Tiny.Sprite && object2 instanceof Tiny.Sprite) {
	        this.collideSpriteVsSprite(object1, object2, collideCallback, processCallback, callbackContext, overlapOnly);
	      } else {
	        console.warn('只支持Tiny.Sprite');
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
	        console.log(resultY, resultX);
	      }

	      var result = resultX || resultY;

	      if (result) {
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
	    * The core separation function to separate two physics bodies on the y axis.
	    *
	    * @private
	    * @method Tiny.Physics.Ant#separateY
	    * @param {Tiny.Physics.Ant.Body} body1 - The first Body to separate.
	    * @param {Tiny.Physics.Ant.Body} body2 - The second Body to separate.
	    * @param {boolean} overlapOnly - If true the bodies will only have their overlap data set, no separation or exchange of velocity will take place.
	    * @return {boolean} Returns true if the bodies were separated or overlap, otherwise false.
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
	     * Calculates the horizontal overlap between two Bodies and sets their properties accordingly, including:
	     * `touching.left`, `touching.right` and `overlapX`.
	     *
	     * @method Tiny.Physics.Ant#getOverlapX
	     * @param {Tiny.Physics.Ant.Body} body1 - The first Body to separate.
	     * @param {Tiny.Physics.Ant.Body} body2 - The second Body to separate.
	     * @param {boolean} overlapOnly - Is this an overlap only check, or part of separation?
	     * @return {float} Returns the amount of horizontal overlap between the two bodies.
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
	    * Calculates the vertical overlap between two Bodies and sets their properties accordingly, including:
	    * `touching.up`, `touching.down` and `overlapY`.
	    *
	    * @method Tiny.Physics.Ant#getOverlapY
	    * @param {Tiny.Physics.Ant.Body} body1 - The first Body to separate.
	    * @param {Tiny.Physics.Ant.Body} body2 - The second Body to separate.
	    * @param {boolean} overlapOnly - Is this an overlap only check, or part of separation?
	    * @return {float} Returns the amount of vertical overlap between the two bodies.
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
	    * The core separation function to separate two circular physics bodies.
	    *
	    * @method Tiny.Physics.Ant#separateCircle
	    * @private
	    * @param {Tiny.Physics.Ant.Body} body1 - The first Body to separate. Must have `Body.isCircle` true and a positive `radius`.
	    * @param {Tiny.Physics.Ant.Body} body2 - The second Body to separate. Must have `Body.isCircle` true and a positive `radius`.
	    * @param {boolean} overlapOnly - If true the bodies will only have their overlap data set, no separation or exchange of velocity will take place.
	    * @return {boolean} Returns true if the bodies were separated or overlap, otherwise false.
	    */

	  }, {
	    key: 'separateCircle',
	    value: function separateCircle(body1, body2, overlapOnly) {
	      console.debug('separateCircle');

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
	     * Check for intersection against two bodies.
	     *
	     * @method Tiny.Physics.Ant#intersects
	     * @param {Tiny.Physics.Ant.Body} body1 - The first Body object to check.
	     * @param {Tiny.Physics.Ant.Body} body2 - The second Body object to check.
	     * @return {boolean} True if they intersect, otherwise false.
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
	     * Checks to see if a circular Body intersects with a Rectangular Body.
	     *
	     * @method Tiny.Physics.Ant#circleBodyIntersects
	     * @param {Tiny.Physics.Ant.Body} circle - The Body with `isCircle` set.
	     * @param {Tiny.Physics.Ant.Body} body - The Body with `isCircle` not set (i.e. uses Rectangle shape)
	     * @return {boolean} Returns true if the bodies intersect, otherwise false.
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
	     *
	     * @method Tiny.Physics.Ant#velocityFromAngle
	     * @param {number} angle - The angle in degrees calculated in clockwise positive direction (down = 90 degrees positive, right = 0 degrees positive, up = 90 degrees negative)
	     * @param {number} [speed=60] - The speed it will move, in pixels per second sq.
	     * @param {Tiny.Point|object} [point] - The Point object in which the x and y properties will be set to the calculated velocity.
	     * @return {Tiny.Point} - A Point where point.x contains the velocity x value and point.y contains the velocity y value.
	     */

	  }, {
	    key: 'velocityFromAngle',
	    value: function velocityFromAngle(angle) {
	      var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60;
	      var point = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	      point = point || new Tiny.Point();
	      point.x = Math.cos(TinyMath.degToRad(angle)) * speed;
	      point.y = Math.sin(TinyMath.degToRad(angle)) * speed;
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

	  }, {
	    key: 'velocityFromRotation',
	    value: function velocityFromRotation(rotation) {
	      var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60;
	      var point = arguments[2];

	      point = point || new Tiny.Point();
	      point.x = Math.cos(rotation) * speed;
	      point.y = Math.sin(rotation) * speed;
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

	  }, {
	    key: 'accelerationFromRotation',
	    value: function accelerationFromRotation(rotation) {
	      var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60;
	      var point = arguments[2];

	      point = point || new Tiny.Point();
	      point.x = Math.cos(rotation) * speed;
	      point.y = Math.sin(rotation) * speed;
	      return point;
	    }
	  }, {
	    key: 'pause',


	    /**
	     * 恢复已暂停的物理系统
	     *
	     * @method Tiny.Physics.Ant#resume
	     */
	    value: function pause() {
	      this._paused = true;
	    }

	    /**
	    * 将要更新物理系统之前要做的事情放到这里 内部使用 外部不要调用
	    * @private
	    */

	  }, {
	    key: 'preUpdate',
	    value: function preUpdate() {
	      var i = this._toRemove.length;
	      while (i--) {
	        this.removeBody(this._toRemove[i]);
	      }
	      this._toRemove.length = 0;
	    }

	    /**
	     * 更新物理系统 内部使用 外部不要调用
	     * @private
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
	      this.preUpdate();
	      this.processCollide();
	      this._bodies.forEach(function (body) {
	        body.postUpdate();
	      });
	    }

	    /**
	     * 这里实现一个碰撞检测的hack  在这里对所有碰撞检测的类进行检查
	     */

	  }, {
	    key: 'processCollide',
	    value: function processCollide() {
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
	     * @method Tiny.Physics.Ant#removeBody
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
	    * @name Tiny.Physics.Ant#restitution
	    * @property {number} restitution - Default coefficient of restitution between colliding bodies. This value is used if no matching ContactMaterial is found for a Material pair.
	    */

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
/* 79 */
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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _facing = __webpack_require__(81);

	var FACING = _interopRequireWildcard(_facing);

	var _math = __webpack_require__(7);

	var TinyMath = _interopRequireWildcard(_math);

	var _EVENTS = __webpack_require__(82);

	var EVENTS = _interopRequireWildcard(_EVENTS);

	var _BodyDebug = __webpack_require__(83);

	var _BodyDebug2 = _interopRequireDefault(_BodyDebug);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	* @class Tiny.Physics.Ant.Body
	* @constructor
	* @param {Tiny.Physics.Ant.World} world - world reference to the currently running world.
	* @param {Tiny.Sprite} [sprite] - The Sprite object this physics body belongs to.
	* @param {number} [x=0] - The x coordinate of this Body.
	* @param {number} [y=0] - The y coordinate of this Body.
	* @param {number} [mass=1] - The default mass of this Body (0 = static).
	*/
	var Body = function (_Tiny$EventEmitter) {
	  _inherits(Body, _Tiny$EventEmitter);

	  function Body(world, sprite, x, y, mass) {
	    _classCallCheck(this, Body);

	    var _this = _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).call(this));

	    sprite = sprite || null;
	    x = x || 0;
	    y = y || 0;
	    /**
	      * @property {Tiny.Physics.P2} world - Local reference to the P2 World.
	      */
	    _this.world = world;

	    /**
	    * @property {Tiny.Application} app - Local reference to app.
	    */
	    _this.app = _this.world.app;

	    /**
	    * @property {Tiny.Sprite} sprite - Reference to the parent Sprite.
	    */
	    _this.sprite = sprite;

	    /**
	    * @property {number} type - The type of physics system this body belongs to.
	    */
	    _this.type = 'Tiny.Physics.Ant.Body';

	    /**
	    * @property {boolean} enable - A disabled body won't be checked for any form of collision or overlap or have its pre/post updates run.
	    * @default
	    */
	    _this.enable = true;

	    /**
	    * If `true` this Body is using circular collision detection. If `false` it is using rectangular.
	    * Use `Body.setCircle` to control the collision shape this Body uses.
	    * @property {boolean} isCircle
	    * @default
	    * @readOnly
	    */
	    _this.isCircle = false;

	    /**
	    * The radius of the circular collision shape this Body is using if Body.setCircle has been enabled.
	    * If you wish to change the radius then call `setCircle` again with the new value.
	    * If you wish to stop the Body using a circle then call `setCircle` with a radius of zero (or undefined).
	    * @property {number} radius
	    * @default
	    * @readOnly
	    */
	    _this.radius = 0;

	    /**
	    * @property {Tiny.Point} offset - The offset of the Physics Body from the Sprite x/y position.
	    */
	    _this.offset = new Tiny.Point();

	    /**
	    * @property {Tiny.Point} position - The position of the physics body.
	    * @readonly
	    */
	    _this.position = new Tiny.Point(sprite.x, sprite.y);

	    /**
	    * @property {Tiny.Point} prev - The previous position of the physics body.
	    * @readonly
	    */
	    _this.prev = new Tiny.Point(_this.position.x, _this.position.y);

	    /**
	    * @property {boolean} allowRotation - Allow this Body to be rotated? (via angularVelocity, etc)
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
	    * @property {number} preRotation - The previous rotation of the physics body.
	    * @readonly
	    */
	    _this.preRotation = _this.rotation;

	    /**
	    * @property {number} width - The calculated width of the physics body.
	    * @readonly
	    */
	    _this.width = sprite.width;

	    /**
	    * @property {number} height - The calculated height of the physics body.
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
	     * Internal method.
	     *
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
	     * @protected
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
	        console.log('set prev', this._reset, this.sprite.fresh);
	        this.prev.x = this.position.x;
	        this.prev.y = this.position.y;
	      }

	      if (this.moves) {
	        // this.world.updateMotion(this);
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

	  }, {
	    key: 'postUpdate',
	    value: function postUpdate() {
	      //  Only allow postUpdate to be called once per frame
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
	  }, {
	    key: 'processCollide',
	    value: function processCollide() {
	      if (this.collidesWith.length > 0) {
	        this.world.collide(this.sprite, this.collidesWith);
	      }
	      if (this.overlapsWith.length > 0) {
	        this.world.overlap(this.sprite, this.overlapsWith);
	      }
	    }

	    /**
	    * Internal method.
	    *
	    * @method Tiny.Physics.Ant.Body#checkWorldBounds
	    * @protected
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
	    * You can modify the size of the physics Body to be any dimension you need.
	    * This allows you to make it smaller, or larger, than the parent Sprite.
	    * You can also control the x and y offset of the Body. This is the position of the
	    * Body relative to the top-left of the Sprite _texture_.
	    *
	    * For example: If you have a Sprite with a texture that is 80x100 in size,
	    * and you want the physics body to be 32x32 pixels in the middle of the texture, you would do:
	    *
	    * `setSize(32, 32, 24, 34)`
	    *
	    * Where the first two parameters is the new Body size (32x32 pixels).
	    * 24 is the horizontal offset of the Body from the top-left of the Sprites texture, and 34
	    * is the vertical offset.
	    *
	    * Calling `setSize` on a Body that has already had `setCircle` will reset all of the Circle
	    * properties, making this Body rectangular again.
	    *
	    * @method Tiny.Physics.Ant.Body#setSize
	    * @param {number} width - The width of the Body.
	    * @param {number} height - The height of the Body.
	    * @param {number} [offsetX] - The X offset of the Body from the top-left of the Sprites texture.
	    * @param {number} [offsetY] - The Y offset of the Body from the top-left of the Sprites texture.
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
	     * Sets this Body as using a circle, of the given radius, for all collision detection instead of a rectangle.
	     * The radius is given in pixels and is the distance from the center of the circle to the edge.
	     *
	     * You can also control the x and y offset, which is the position of the Body relative to the top-left of the Sprite.
	     *
	     * To change a Body back to being rectangular again call `Body.setSize`.
	     *
	     * Note: Circular collision only happens with other ant Physics bodies, it does not
	     * work against tile maps, where rectangular collision is the only method supported.
	     *
	     * @method Tiny.Physics.Ant.Body#setCircle
	     * @param {number} [radius] - The radius of the Body in pixels. Pass a value of zero / undefined, to stop the Body using a circle for collision.
	     * @param {number} [offsetX] - The X offset of the Body from the Sprite position.
	     * @param {number} [offsetY] - The Y offset of the Body from the Sprite position.
	     */

	  }, {
	    key: 'setCircle',
	    value: function setCircle(radius, offsetX, offsetY) {
	      if (offsetX === undefined) {
	        offsetX = this.offset.x;
	      }
	      if (offsetY === undefined) {
	        offsetY = this.offset.y;
	      }

	      if (radius > 0) {
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
	    * Returns the bounds of this physics body.
	    *
	    * Only used internally by the World collision methods.
	    * @private
	    * @method Tiny.Physics.Ant.Body#getBounds
	    * @param {object} obj - The object in which to set the bounds values.
	    * @return {object} The object that was given to this method.
	    */
	    // getBounds(obj) {
	    //   if (this.isCircle) {
	    //     obj.x = this.center.x - this.radius;
	    //     obj.y = this.center.y - this.radius;
	    //     obj.right = this.center.x + this.radius;
	    //     obj.bottom = this.center.y + this.radius;
	    //   } else {
	    //     obj.x = this.x;
	    //     obj.y = this.y;
	    //     obj.right = this.right;
	    //     obj.bottom = this.bottom;
	    //   }
	    //   return obj;
	    // }

	    /**
	    * Tests if a world point lies within this Body.
	    *
	    * @method Tiny.Physics.Ant.Body#hitTest
	    * @param {number} x - The world x coordinate to test.
	    * @param {number} y - The world y coordinate to test.
	    * @return {boolean} True if the given coordinates are inside this Body, otherwise false.
	    */

	  }, {
	    key: 'hitTest',
	    value: function hitTest(x, y) {
	      return this.isCircle ? Tiny.Circle.contains(this, x, y) : Tiny.Rectangle.contains(this, x, y);
	    }

	    /**
	    * 是否在物理系统的下边界
	    * @method Tiny.Physics.Ant.Body#onFloor
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
	     * on overlap a body
	     * @param {Tiny.Physics.Ant.Body} body - the body which overlap on
	     */
	    value: function onOverlap(body) {
	      this.dispatch(EVENTS.ON_OVER_LAP, this.sprite, body.sprite);
	    }

	    /**
	    * on collide a body
	    * @param {Tiny.Physics.Ant.Body} body - the body which collide
	    */

	  }, {
	    key: 'onCollide',
	    value: function onCollide(body) {
	      this.dispatch(EVENTS.ON_COLLIDE, this.sprite, body.sprite);
	    }

	    /**
	     * 把自己添加到物理系统中
	     *
	     * @method Tiny.Physics.Ant.Body#addToWorld
	     */

	  }, {
	    key: 'addToWorld',
	    value: function addToWorld() {
	      this.world.addBody(this);
	    }

	    /**
	     * 将body从物理系统删除，从而也解除了sprite的物理属性
	     */

	  }, {
	    key: 'removeFromWorld',
	    value: function removeFromWorld() {
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
	     * @method Tiny.Physics.Ant#accelerateToObject
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
	    */

	  }, {
	    key: 'shapeChanged',
	    value: function shapeChanged() {
	      if (this.debugBody) {
	        this.debugBody.draw();
	      }
	      this.dispatch('shapeChanged', this);
	    }
	  }, {
	    key: 'containsCollide',


	    /**
	     * 是否已经添加了碰撞对象了
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
	     * @param {Tiny.Sprite|Array<Tiny.Sprite>} objects - 需要和当前Body进行碰撞检测的对象
	     */

	  }, {
	    key: 'addCollides',
	    value: function addCollides(objects) {
	      console.log('addCollides', objects);
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
	     * @param {*@} object
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
	    * 添加和需要和当前刚体进行重叠交叉检测的对象
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
	    * @param {*@} object
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
	    * @method Tiny.Physics.Ant.Body#onCeiling
	    * @return {boolean} True 接触到了上边界.
	    */

	  }, {
	    key: 'isOnCeiling',
	    get: function get() {
	      return this.blocked.up;
	    }

	    /**
	    * 是否在物理系统的左边界
	    * @method Tiny.Physics.Ant.Body#onCeiling
	    * @return {boolean} True 接触到了左边界.
	    */

	  }, {
	    key: 'isOnLeft',
	    get: function get() {
	      return this.blocked.left;
	    }

	    /**
	    * 是否在物理系统的右边界
	    * @method Tiny.Physics.Ant.Body#onCeiling
	    * @return {boolean} True 接触到了右边界.
	    */

	  }, {
	    key: 'isOnRight',
	    get: function get() {
	      return this.blocked.right;
	    }

	    /**
	    * deltaX 的绝对值
	    *
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
	    *
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
	      this.allowGravity = false;
	      this.immovable = true;
	    }
	  }]);

	  return Body;
	}(Tiny.EventEmitter);
	//


	exports.default = Body;

/***/ }),
/* 81 */
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
/* 82 */
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
	var ON_MOVE_COMPLETE = exports.ON_MOVE_COMPLETE = 'moveComplete';
	// 两个物体有接触的时候触发
	var ON_OVER_LAP = exports.ON_OVER_LAP = 'overlap';
	// 两个物体碰撞到一起的时候触发
	var ON_COLLIDE = exports.ON_COLLIDE = 'collide';

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(3);

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
	* @class Tiny.Physics.P2.BodyDebug
	* @constructor
	* @extends Tiny.Sprite
	* @param {Tiny.Physices.P2.world} game - Game reference to the currently running game.
	* @param {Tiny.Physics.P2.Body} body - The P2 Body to display debug data for.
	* @param {object} settings - Settings object.
	*/
	var BodyDebug = function (_Tiny$Sprite) {
	  _inherits(BodyDebug, _Tiny$Sprite);

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
	    /**
	    * @property {Tiny.Graphics} canvas - The canvas to render the debug info to.
	    */
	    _this.graphics = new Tiny.Graphics();

	    _this.graphics.alpha = _this.settings.alpha;

	    _this.addChild(_this.graphics);

	    if (_this.world.app.stageDebugLayer === void 0) {
	      // 这里参考 Tiny.Application中的stage的写法 创建了一个一样的layer
	      var stageDebugLayer = new Tiny.Container();
	      stageDebugLayer.scale.set(Tiny.config.multiplier);
	      _this.world.app.camera.addChild(stageDebugLayer);
	      _this.world.app.stageDebugLayer = stageDebugLayer;
	    }

	    if (_this.world.app.stageDebugLayer.ant === void 0) {
	      var antDebugLayer = new Tiny.Container();
	      _this.world.app.stageDebugLayer.addChild(antDebugLayer);
	      _this.world.app.stageDebugLayer.ant = antDebugLayer;
	    }

	    _this.world.app.stageDebugLayer.ant.addChild(_this);

	    _this.anchor.set(0.5, 0.5);

	    _this.draw();

	    _this.updateSpriteTransform();
	    return _this;
	  }

	  _createClass(BodyDebug, [{
	    key: 'updateSpriteTransform',
	    value: function updateSpriteTransform() {
	      this.position.x = this.body.sprite.x;
	      this.position.y = this.body.sprite.y;
	      this.rotation = this.body.sprite.rotation;
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {
	      var lineWidth = this.settings.lineWidth;
	      var color = parseInt(Utils.randomPastelHex(), 16);
	      var lineColor = this.settings.lineColor;
	      var fillColor = this.settings.fillColor;
	      this.graphics.clear();
	      if (this.body.isCircle) {
	        this.drawCircle(this.graphics, 0, 0, this.body.radius, color, lineWidth);
	      } else {
	        this.drawRectangle(this.graphics, 0, 0, 0, this.body.width, this.body.height, lineColor, color, lineWidth);
	      }
	      // console.log('draw');
	    }

	    /**
	    * Draws a p2.Circle to the Graphics object.
	    *
	    * @method Tiny.Physics.P2.BodyDebug#drawCircle
	    * @private
	    */

	  }, {
	    key: 'drawCircle',
	    value: function drawCircle(g, x, y, radius, angle) {
	      var color = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0xffffff;
	      var lineWidth = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;

	      g.lineStyle(lineWidth, 0x000000, 1);
	      if (this.settings.fill) {
	        g.beginFill(color, 1.0);
	      }
	      g.drawCircle(x, y, radius);
	      if (this.settings.fill) {
	        g.endFill();
	      }
	      g.moveTo(x, y);
	      g.lineTo(x + radius * Math.cos(-angle), y + radius * Math.sin(-angle));
	      // console.log('[BodyDebug] >> drawCircle', x, y, radius);
	    }

	    /**
	    * Draws a p2.Box to the Graphics object.
	    *
	    * @method Tiny.Physics.P2.BodyDebug#drawRectangle
	    * @private
	    */

	  }, {
	    key: 'drawRectangle',
	    value: function drawRectangle(g, x, y, angle, w, h) {
	      var color = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0x000000;
	      var fillColor = arguments[7];
	      var lineWidth = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 1;

	      g.lineStyle(lineWidth, color, 1);
	      if (this.settings.fill) {
	        g.beginFill(0xff0000);
	      }
	      g.drawRect(x - w / 2, y - h / 2, w, h);
	      if (this.settings.fill) {
	        g.endFill();
	      }
	      // console.log('[BodyDebug] >> drawRectangles', x - w / 2, y - h / 2, w, h);
	    }
	  }]);

	  return BodyDebug;
	}(Tiny.Sprite);

	exports.default = BodyDebug;

/***/ })
/******/ ]);