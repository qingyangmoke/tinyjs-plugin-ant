import * as Utils from './utils';
const p2 = require('./p2');
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
      pixelsPerLengthUnit: world.mpx(1),
      debugPolygons: false,
      lineWidth: 1,
      alpha: 0.5,
      lineColor: 0xff0000,
      fill: 0.5,
      fillColor: 0xff0000,
    };

    this.settings = Utils.extend(defaultSettings, settings);

    /**
    * @property {number} ppu - Pixels per Length Unit.
    */
    this.ppu = this.settings.pixelsPerLengthUnit;
    this.ppu = -1 * this.ppu;

    this.world = world;
    /**
    * @property {Tiny.Physics.P2.Body} body - The P2 Body to display debug data for.
    */
    this.body = body;
    this.p2body = body.data;

    /**
    * @property {Tiny.Graphics} canvas - The canvas to render the debug info to.
    */
    this.canvas = new Tiny.Graphics();

    this.canvas.alpha = this.settings.alpha;

    this.addChild(this.canvas);

    if (this.world.app.stageDebugLayer === void 0) {
      // 这里参考 Tiny.Application中的stage的写法 创建了一个一样的layer
      const stageDebugLayer = new Tiny.Container();
      stageDebugLayer.scale.set(Tiny.config.multiplier);
      this.world.app.camera.addChild(stageDebugLayer);
      this.world.app.stageDebugLayer = stageDebugLayer;
    }

    if (this.world.app.stageDebugLayer.p2 === void 0) {
      const p2DebugLayer = new Tiny.Container();
      this.world.app.stageDebugLayer.addChild(p2DebugLayer);
      this.world.app.stageDebugLayer.p2 = p2DebugLayer;
    }

    this.world.app.stageDebugLayer.p2.addChild(this);

    // this.anchor.set(0.5, 0.5);

    this.draw();

    this.updateSpriteTransform();
  }

  updateSpriteTransform() {
    this.position.x = this.body.x;
    this.position.y = this.body.y;
    this.rotation = this.body.sprite.rotation;
  }

  draw() {
    let angle, child, color, i, j, lineColor, lw, obj, offset, sprite, v, verts, vrot, _j, _ref1;

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
  drawRectangle(g, x, y, angle, w, h, color = 0x000000, fillColor, lineWidth = 1) {
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
  drawCircle(g, x, y, angle, radius, color = 0xffffff, lineWidth = 1) {
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
  drawLine(g, len, color = 0x000000, lineWidth = 1) {
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
  drawConvex(g, verts, triangles, color = 0x000000, fillColor, lineWidth = 1, debug, offset) {
    let colors, i, v, v0, v1, x, x0, x1, y, y0, y1;

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
  drawPath(g, path, color = 0x000000, fillColor, lineWidth = 1) {
    let area, i, lastx, lasty, p1x, p1y, p2x, p2y, p3x, p3y, v, x, y;

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
          area = ((p2x - p1x) * (p3y - p1y)) - ((p3x - p1x) * (p2y - p1y));

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
  drawPlane(g, x0, x1, color = 0xffffff, lineColor, lineWidth = 1, diagMargin, diagSize, maxLength, angle) {
    let max, xd, yd;

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
  drawCapsule(g, x, y, angle, len, radius, color = 0x000000, fillColor, lineWidth = 1) {
    g.lineStyle(lineWidth, color, 1);

    // Draw circles at ends
    const c = Math.cos(angle);
    const s = Math.sin(angle);

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

  destroy() {
    if (this.canvas) {
      // 防止重复销毁
      this.removeChild(this.canvas);
      this.world.app.stage.addChild(this);
      this.canvas = null;
    }
  }
}
