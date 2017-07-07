// /**
// * Keeps an angle value between -180 and +180; or -PI and PI if radians.
// *
// * @method Tiny.Physics.P2.Math#wrapAngle
// * @param {number} angle - The angle value to wrap
// * @param {boolean} [radians=false] - Set to `true` if the angle is given in radians, otherwise degrees is expected.
// * @return {number} The new angle value; will be the same as the input angle if it was within bounds.
// */
// export function wrapAngle(angle, radians) {
//   return radians ? this.wrap(angle, -Math.PI, Math.PI) : this.wrap(angle, -180, 180);
// }

// /**
// * Ensures that the value always stays between min and max, by wrapping the value around.
// *
// * If `max` is not larger than `min` the result is 0.
// *
// * @method Tiny.Physics.P2..Math#wrap
// * @param {number} value - The value to wrap.
// * @param {number} min - The minimum the value is allowed to be.
// * @param {number} max - The maximum the value is allowed to be, should be larger than `min`.
// * @return {number} The wrapped value.
// */
// export function wrap(value, min, max) {
//   const range = max - min;

//   if (range <= 0) {
//     return 0;
//   }

//   let result = (value - min) % range;

//   if (result < 0) {
//     result += range;
//   }

//   return result + min;
// }

// const degreeToRadiansFactor = Math.PI / 180;
// const radianToDegreesFactor = 180 / Math.PI;

// /**
// * Convert degrees to radians.
// *
// * @method Tiny.Physics.P2..Math#degToRad
// * @param {number} degrees - Angle in degrees.
// * @return {number} Angle in radians.
// */
// export function degToRad(degrees) {
//   return degrees * degreeToRadiansFactor;
// };

// /**
// * Convert radians to degrees.
// *
// * @method Tiny.Physics.P2..Math#radToDeg
// * @param {number} radians - Angle in radians.
// * @return {number} Angle in degrees
// */
// export function radToDeg(radians) {
//   return radians * radianToDegreesFactor;
// };

// /**
// * Returns the euclidian distance between the two given set of coordinates.
// *
// * @method Tiny.Physics.Math#distance
// * @param {number} x1
// * @param {number} y1
// * @param {number} x2
// * @param {number} y2
// * @return {number} The distance between the two sets of coordinates.
// */
// export function distance(x1, y1, x2, y2) {
//   const dx = x1 - x2;
//   const dy = y1 - y2;
//   return Math.sqrt(dx * dx + dy * dy);
// }
