/* eslint-disable react/prop-types */

import { useState } from "react";
import VigenereInput from "./VigenereInput";
import VigenereResult from "./VigenereResult";

export default function Vigenere() {
  const [vigenereData, setVigenereData] = useState([]);

  let { plainText, key } = vigenereData;
  let resultText ='';

  const generateCipherText = (plainText, key) => {
    console.log("Cipher text",plainText,key);
  }

  const generatePlainText = (plainText, key) => {
    console.log("Plain text",plainText,key);
  }

  if (vigenereData.optn?.toLowerCase() === 'encrypt') {
    resultText = generateCipherText(plainText, parseInt(key));
  }
  else if (vigenereData.optn?.toLowerCase() === 'decrypt') {
    resultText = generatePlainText(plainText, parseInt(key));
  }

  return (
    <div>
      <VigenereInput setVigenereData={setVigenereData} />
      <VigenereResult title={"Vigenere Cipher"} resultText={resultText} vigenereData={vigenereData} />
    </div>
  )
}
