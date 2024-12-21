const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    if (s1.length === 0 || s2.length === 0){
      return 0
    }

    let count = 0;

    let newMap = new Map();

    for(let i = 0; i < s1.length; i++){
      newMap.set(s1[i], (newMap.get(s1[i]) || 0) + 1);
      }

    for(let i = 0; i < s2.length; i++){
      if(newMap.get(s2[i]) > 0){
        count++;
        newMap.set(s2[i], newMap.get(s2[i]) - 1)
      }
    }

    return count;
}

module.exports = {
  getCommonCharacterCount
};
