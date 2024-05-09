/* eslint-disable react/prop-types */

import { useState } from "react";
import AdditiveInput from "./AdditiveInput";
import AdditiveResult from "./AdditiveResult";

export default function Additive() {
  const [additiveData, setAdditiveData] = useState([]);

  let { plainText, key } = additiveData;
  if (/^[a-zA-Z]$/.test(key)) {
    key = (key.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0)) % 26;
  }


  const generateCipherText = (plainText, key) => {
    return (plainText || '')
      .replace(/\s/g, '')
      .replace(/[a-zA-Z]/g, char => {
        const base = char < 'a' ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
        const shiftedCharCode = ((char.charCodeAt(0) - base + key) % 26 + 26) % 26 + base;
        return String.fromCharCode(shiftedCharCode);
      });
  };

  const generatePlainText = (plainText, key) => {
    return (plainText || '').replace(/[a-zA-Z]/g, char => {
      const base = char < 'a' ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
      const shiftedCharCode = ((char.charCodeAt(0) - base - key + 26) % 26 + 26) % 26 + base;
      return String.fromCharCode(shiftedCharCode);
    });
  };


  let resultText = '';
  if (additiveData.optn?.toLowerCase() === 'encrypt') {
    resultText = generateCipherText(plainText, parseInt(key));
  }
  else if (additiveData.optn?.toLowerCase() === 'decrypt') {
    resultText = generatePlainText(plainText, parseInt(key));
  }

  return (
    <div>
      <AdditiveInput setAdditiveData={setAdditiveData} />
      <AdditiveResult resultText={resultText} additiveData={additiveData} />
    </div>
  )
}
