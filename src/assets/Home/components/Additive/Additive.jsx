/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import DisplayResult from "../DisplayResult";
import SearchBar from "../SearchBar";

export default function Additive({ plainData, setPlainData }) {

  let { plainText, key } = plainData;
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
      document.getElementById('result-modal').close();
      Swal.fire({
        title: "Wrong Key!",
        text: "Key value must be less than 26 or a single letter",
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
      document.getElementById('result-modal').close();
      Swal.fire({
        title: "Wrong Key!",
        text: "Key value must be less than 26 or a single letter",
        icon: "error"
      });
    }
  };


  let resultText = '';
  if (plainData.optn?.toLowerCase() === 'encrypt') {
    resultText = generateCipherText(plainText, key);
  }
  else if (plainData.optn?.toLowerCase() === 'decrypt') {
    resultText = generatePlainText(plainText, key);
  }

  return (
    <div>
      <SearchBar setPlainData={setPlainData} />
      <DisplayResult title={"Additive Cipher"} resultText={resultText} plainData={plainData} />
    </div>
  )
}
