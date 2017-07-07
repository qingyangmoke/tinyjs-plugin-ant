/*!
 * Name: Tiny.Physics.Ant
 * Description: 轻量级物理引擎，从Phaser 的arcade的改造过来的 感谢Phaser提供的解决方案
 * Author: 清扬陌客
 * Version: v0.0.1
 */
import { default as World } from './world';

export * from '../p2/utils';

import * as Math from '../core/math';

import * as EVENTS from './EVENTS';

let system = null;
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
