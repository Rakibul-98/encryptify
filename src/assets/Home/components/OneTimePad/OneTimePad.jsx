import { useState } from "react";
import OneTimeInput from "./OneTimeInput";
import OneTimeResult from "./OneTimeResult";
import Swal from "sweetalert2";

export default function OneTimePad() {
  const [oneTimeData, setOneTimeData] = useState({});

  const generateCipherText = (plaintext, key) => {
    plaintext = plaintext.replace(/\s/g, '');
    key = key.replace(/\s/g, '');
    if (plaintext.length !== key.length) {
      document.getElementById('oneTime-modal').close();
      Swal.fire({
        title: "Wrong Key!",
        text: "Plaintext and key must have the same length.",
        icon: "error"
      });
      return '';
    }

    const encryptedChars = plaintext.split('').map((char, index) => {
      const plaintextCharCode = char.charCodeAt(0);
      const keyCharCode = key.charCodeAt(index);
      const encryptedCharCode = (plaintextCharCode - 65 + keyCharCode - 65) % 26 + 65;
      return String.fromCharCode(encryptedCharCode);
    });
    return encryptedChars.join('');
  }

  const generatePlainText = (cipherText, key) => {
    cipherText = cipherText.replace(/\s/g, '');
    key = key.replace(/\s/g, '');
    if (cipherText.length !== key.length) {
      document.getElementById('oneTime-modal').close();
      Swal.fire({
        title: "Wrong Key!",
        text: "Cipher text and key must have the same length.",
        icon: "error"
      });
      return '';
    }
  
    const decryptedChars = cipherText.split('').map((char, index) => {
      const cipherTextCharCode = char.charCodeAt(0);
      const keyCharCode = key.charCodeAt(index);
      const decryptedCharCode = (cipherTextCharCode - keyCharCode + 26) % 26 + 65;
      return String.fromCharCode(decryptedCharCode);
    });
    return decryptedChars.join('');
  }

  let resultText = '';
  if (oneTimeData.optn?.toLowerCase() === 'encrypt') {
    resultText = generateCipherText(oneTimeData.plainText.toUpperCase(), oneTimeData.key.toUpperCase());
  } else if (oneTimeData.optn?.toLowerCase() === 'decrypt') {
    resultText = generatePlainText(oneTimeData.plainText.toUpperCase(), oneTimeData.key.toUpperCase());
  }

  return (
    <div>
      <OneTimeInput setOneTimeData={setOneTimeData} />
      <OneTimeResult resultText={resultText} oneTimeData={oneTimeData} />
    </div>
  )
}
