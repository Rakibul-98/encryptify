/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import { useState } from "react";
import AdditiveInput from "./AdditiveInput";
import AdditiveResult from "./AdditiveResult";

export default function Additive() {
  const [additiveData, setAdditiveData] = useState([]);

  let { plainText, key } = additiveData;
  if (/^[a-zA-Z]$/.test(key)) {
    key = key.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
  }
  

  const generateCipherText = (plainText, key) => {
    if (key < 26) {
      return (plainText || '')
        .replace(/\s/g, '')
        .replace(/[a-zA-Z]/g, char => {
          const base = char < 'a' ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
          const shiftedCharCode = ((char.charCodeAt(0) - base + key) % 26 + 26) % 26 + base;
          return String.fromCharCode(shiftedCharCode);
        });
    } 
    else {
      document.getElementById('additive-modal').close();
      Swal.fire({
        title: "Wrong Key!",
        text: "Key value must be (0-25) or a single letter",
        icon: "error"
      });
    }
  };

  const generatePlainText = (plainText, key) => {
    if (key < 26) {
      return (plainText || '').replace(/[a-zA-Z]/g, char => {
        const base = char < 'a' ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
        const shiftedCharCode = ((char.charCodeAt(0) - base - key + 26) % 26 + 26) % 26 + base;
        return String.fromCharCode(shiftedCharCode);
      });
    } 
    else {
      document.getElementById('additive-modal').close();
      Swal.fire({
        title: "Wrong Key!",
        text: "Key value must be (0-25) or a single letter",
        icon: "error"
      });
    }
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
      <AdditiveResult title={"Additive Cipher"} resultText={resultText} additiveData={additiveData} />
    </div>
  )
}
