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
export function extend(a, b) {
  for (const key in b) {
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
export function randomPastelHex() {
  let blue, green, mix, red;
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
export function rgbToHex(r, g, b) {
  return componentToHex(r) + componentToHex(g) + componentToHex(b);
}

/**
* @function
* @static
* @name componentToHex
* @memberof Tiny.Physics.Ant.Utils
*/
export function componentToHex(c) {
  const hex = c.toString(16);
  if (hex.length === 2) {
    return hex;
  } else {
    return hex + '0';
  }
}
