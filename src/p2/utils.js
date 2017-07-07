/**
* This is a slightly modified version of http://api.jquery.com/jQuery.extend/
*
* @method Tiny.Physics.P2.Utils.extend
* @param {boolean} deep - Perform a deep copy?
* @param {object} target - The target object to copy to.
* @return {object} The extended object.
*/
export function extend(a, b) {
  for (const key in b) {
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
  * Converts from RGB to Hex.
  *
  * @method Tiny.Physics.P2.BodyDebug#rgbToHex
  * @private
  */
export function rgbToHex(r, g, b) {
  return componentToHex(r) + componentToHex(g) + componentToHex(b);
}

/**
* Component to hex conversion.
*
* @method Tiny.Physics.P2.BodyDebug#componentToHex
* @private
*/
export function componentToHex(c) {
  const hex = c.toString(16);
  if (hex.length === 2) {
    return hex;
  } else {
    return hex + '0';
  }
}
