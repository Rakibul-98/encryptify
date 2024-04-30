/* eslint-disable react/prop-types */

import { useState } from "react";
import VigenereInput from "./VigenereInput";
import VigenereResult from "./VigenereResult";

export default function Vigenere() {
  const [vigenereData, setVigenereData] = useState([]);

  let { plainText, key } = vigenereData;
  let resultText = '';

  const generateCipherText = (plaintext, key) => {
    plaintext = plaintext.replace(/\s/g, '');
    key = key.replace(/\s/g, '');

    const repeatedKey = key.repeat(Math.ceil(plaintext.length / key.length)).toUpperCase();

    const encryptedChars = plaintext.split('').map((char, index) => {
        const plaintextCharCode = char.charCodeAt(0);
        const keyCharCode = repeatedKey.charCodeAt(index);
        const encryptedCharCode = (plaintextCharCode - 65 + keyCharCode - 65) % 26 + 65;
        return String.fromCharCode(encryptedCharCode);
    });
    return encryptedChars.join('');
}


  const generatePlainText = (cipherText, key) => {
    cipherText = cipherText.replace(/\s/g, '');
    key = key.replace(/\s/g, '');

    const repeatedKey = key.repeat(Math.ceil(cipherText.length / key.length)).toUpperCase();

    const decryptedChars = cipherText.split('').map((char, index) => {
        const cipherTextCharCode = char.charCodeAt(0);
        const keyCharCode = repeatedKey.charCodeAt(index);
        const decryptedCharCode = (cipherTextCharCode - keyCharCode + 26) % 26 + 65;
        return String.fromCharCode(decryptedCharCode);
    });
    return decryptedChars.join('');
  }

  if (vigenereData.optn?.toLowerCase() === 'encrypt') {
    resultText = generateCipherText(plainText.toUpperCase(), key.toUpperCase());
  }
  else if (vigenereData.optn?.toLowerCase() === 'decrypt') {
    resultText = generatePlainText(plainText.toUpperCase(), key.toUpperCase());
  }

  return (
    <div>
      <VigenereInput setVigenereData={setVigenereData} />
      <VigenereResult resultText={resultText} vigenereData={vigenereData} />
    </div>
  )
}
