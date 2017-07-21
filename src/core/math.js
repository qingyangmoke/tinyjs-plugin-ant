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
export function wrapAngle(angle, radians) {
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
export function wrap(value, min, max) {
  const range = max - min;

  if (range <= 0) {
    return 0;
  }

  let result = (value - min) % range;

  if (result < 0) {
    result += range;
  }

  return result + min;
}

const degreeToRadiansFactor = Math.PI / 180;
const radianToDegreesFactor = 180 / Math.PI;

/**
* 把角度转成弧度
* @function
* @static
* @name degToRad
* @memberof Tiny.Physics.Ant.Math
* @param {number} degrees - 角度.
* @return {number} 弧度
*/
export function degToRad(degrees) {
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
export function radToDeg(radians) {
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
export function distance(x1, y1, x2, y2) {
  const dx = x1 - x2;
  const dy = y1 - y2;
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
export function angle(x1, y1, x2, y2) {
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
export function clamp(v, min, max) {
  if (v < min) {
    return min;
  } else if (max < v) {
    return max;
  } else {
    return v;
  }
}
