function DebugLine() {
  this.start = new Tiny.Point(0, 0);
  this.end = new Tiny.Point(0, 0);
  this.color = 0xff0000;
  this.lineWidth = 1;
  Tiny.Graphics.call(this);
};

DebugLine.prototype = Object.create(Tiny.Graphics.prototype);
DebugLine.prototype.constructor = DebugLine;

DebugLine.prototype.setTo = function (x, y, x2, y2) {
  this.clear();
  this.lineStyle(1, this.color, 1);
  this.moveTo(x, y);
  this.lineTo(x2, y2);
};
