/*!
 * Tiny.Physics.Ant.BodyDebug
 * Description: Body的调试类 - 自主实现，接口方式和P2保持一致
 * Author: fusheng.sfs
 * Version: v0.0.1
 */
import * as Utils from './core/utils';

/**
* 调试的时候画出来p2.body的轮廓
* @class Tiny.Physics.P2.BodyDebug
* @constructor
* @extends Tiny.Sprite
* @param {Tiny.Physices.P2.world} game - Game reference to the currently running game.
* @param {Tiny.Physics.P2.Body} body - The P2 Body to display debug data for.
* @param {object} settings - Settings object.
*/
export default class BodyDebug extends Tiny.Sprite {
  constructor(body, settings) {
    super();
    const world = body.world;
    /**
    * @property {object} defaultSettings - Default debug settings.
    * @private
    */
    const defaultSettings = {
      lineWidth: 1,
      alpha: 0.5,
      fill: 0.5,
      lineColor: 0x0000ff,
      fillColor: 0xff0000,
    };

    this.settings = Utils.extend(defaultSettings, world.config.debug || {});

    this.world = world;
    this.body = body;
    this.app = this.world.app;
    /**
    * @property {Tiny.Graphics} canvas - The canvas to render the debug info to.
    */
    this.graphics = new Tiny.Graphics();

    this.graphics.alpha = this.settings.alpha;

    this.addChild(this.graphics);

    if (this.app.stageDebugLayer === void 0) {
      // 这里参考 Tiny.Application中的stage的写法 创建了一个一样的layer
      const stageDebugLayer = new Tiny.Container();
      stageDebugLayer.scale.set(Tiny.config.multiplier);
      this.app.camera.addChild(stageDebugLayer);
      this.app.stageDebugLayer = stageDebugLayer;
    }

    if (this.world.app.stageDebugLayer.ant === void 0) {
      const antDebugLayer = new Tiny.Container();
      this.app.stageDebugLayer.addChild(antDebugLayer);
      this.app.stageDebugLayer.ant = antDebugLayer;
    }

    this.app.stageDebugLayer.ant.addChild(this);

    this.prescale = new Tiny.Point(this.body.sprite.scale.x, this.body.sprite.scale.y);

    this.draw();

    this.updateSpriteTransform();
  }

  updateSpriteTransform() {
    this.position.x = this.body.x;
    this.position.y = this.body.y;
    // this.rotation = this.body.sprite.rotation;
    if (!this.prescale.equals(this.body.sprite.scale)) {
      this.prescale.copy(this.body.sprite.scale);
      this.draw();
    }
  }

  draw() {
    // this.updateSpriteTransform();
    const lineWidth = this.settings.lineWidth;
    // const color = parseInt(Utils.randomPastelHex(), 16);
    const lineColor = this.settings.lineColor;
    const fillColor = this.settings.fillColor;
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
  drawCircle(g, x, y, radius, angle, fillColor, lineColor, lineWidth = 1) {
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
  drawRectangle(g, x, y, w, h, angle, fillColor, lineColor, lineWidth = 1) {
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
}
