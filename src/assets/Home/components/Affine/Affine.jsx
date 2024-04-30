/* eslint-disable react/prop-types */
import { useState } from "react";
import AffineInput from "./AffineInput";
import AffineResult from "./AffineResult";

export default function Affine() {
  const [affineData, setAffineData] = useState([]);
  let { plainText, key1, key2 } = affineData;
  let resultText = '';

  if (/^[a-zA-Z]$/.test(key1)) {
    key1 = key1.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
  }
  if (/^[a-zA-Z]$/.test(key2)) {
    key2 = key2.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
  }


  const generateCipherText = (plainText, key1, key2) => {
    return (plainText || '')
      .replace(/\s/g, '')
      .replace(/[a-zA-Z]/g, char => {
        const base = char < 'a' ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
        const shiftedCharCode = (((char.charCodeAt(0) - base) * key1 + key2) % 26 + 26) % 26 + base;
        return String.fromCharCode(shiftedCharCode);
      });
  }

  const modInverse = (a, m) => {
    a = ((a % m) + m) % m;
    for (let x = 1; x < m; x++) {
      if ((a * x) % m === 1) {
        return x;
      }
    }
    return 1;
  }

  const generatePlainText = (plainText, key1, key2) => {
    return (plainText || '').replace(/[a-zA-Z]/g, char => {
      const base = char < 'a' ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
      const shiftedCharCode = (((char.charCodeAt(0) - base - key2) * modInverse(key1, 26)) % 26 + 26) % 26 + base;
      return String.fromCharCode(shiftedCharCode);
    });
  };

  if (affineData.optn?.toLowerCase() === 'encrypt') {
    resultText = generateCipherText(plainText, parseInt(key1), parseInt(key2));
  }
  else if (affineData.optn?.toLowerCase() === 'decrypt') {
    resultText = generatePlainText(plainText, parseInt(key1), parseInt(key2));
  }

  return (
    <div>
      <AffineInput setAffineData={setAffineData} />
      <AffineResult title={"Affine Cipher"} resultText={resultText} affineData={affineData} />
    </div>
  )
}
