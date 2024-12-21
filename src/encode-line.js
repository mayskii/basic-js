const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encoded = '';
  let count = 1;

  for (let i = 1; i <= str.length; i++){
    if(str[i] === str[i - 1]) {
      count++;
    } else {
      if (count > 1) {
      encoded += count + str[i - 1];
    } else {
      encoded += str[i - 1]
    }
    count = 1;
  }
}
  return encoded;
}

module.exports = {
  encodeLine
};
