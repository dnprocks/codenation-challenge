class CesarCipherService {
  decode(cipher, shift) {
    let plaintext = "";
    for (var i = 0; i < cipher.length; i++) {
      let cipherCharacter = cipher.charCodeAt(i);
      if (cipherCharacter >= 97 && cipherCharacter <= 122) {
        plaintext += String.fromCharCode(
          ((cipherCharacter - 97 - shift + 26) % 26) + 97
        );
      } else if (cipherCharacter >= 65 && cipherCharacter <= 90) {
        plaintext += String.fromCharCode(
          ((cipherCharacter - 65 - shift + 26) % 26) + 65
        );
      } else {
        plaintext += String.fromCharCode(cipherCharacter);
      }
    }
    return plaintext;
  }
}
module.exports = new CesarCipherService();
