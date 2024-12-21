const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = [];
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++){
      let char = message[i];

      if (/[A-Z]/.test(char)) {
        const messageCode = char.charCodeAt(0);
        const keyCode = key[keyIndex % key.length].charCodeAt(0);
        const shift = keyCode - 'A'.charCodeAt(0);
        const encryptedChar = String.fromCharCode(((messageCode - 'A'.charCodeAt(0) + shift) % 26) + 'A'.charCodeAt(0));
        result.push(encryptedChar);

        keyIndex++;
      } else {
        result.push(char);
      }
    }

    if (!this.direct){
      result = result.reverse()
    }

    return result.join('');
  }

  decrypt(message, key) {
   
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = [];
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++){
      let char = message[i];

      if (/[A-Z]/.test(char)) {
        const messageCode = char.charCodeAt(0);
        const keyCode = key[keyIndex % key.length].charCodeAt(0);
        const shift = keyCode - 'A'.charCodeAt(0);
        const decryptedChar = String.fromCharCode(((messageCode - 'A'.charCodeAt(0) - shift + 26) % 26) + 'A'.charCodeAt(0));
        result.push(decryptedChar);

        keyIndex++;
      } else {
        result.push(char);
      }
    }

    if (!this.direct){
      result = result.reverse();
    }

    return result.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
