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


import { default as World } from './world';

import * as Utils from './core/utils';

import * as Math from './core/math';

import * as EVENTS from './EVENTS';

let system = null;
/**
 * 启用ant物理系统
 * @method Tiny.Physics.Ant#startSystem
 * @param {Tiny.Application} app
 * @param {object} config
 */
function startSystem(app, config) {
  if (system === null) {
    system = new World(app, config);
    app.onUpdate(function () {
      system.update();
    });
  } else {
    console.warn('物理系统已经启用了，请不要重复调用！');
  }
}

export {
  startSystem,
  Math,
  EVENTS,
};

// TODO:: 未完成
