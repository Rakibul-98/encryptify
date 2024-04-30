/* eslint-disable react/prop-types */

import { useState } from "react";
import KeyedInput from "./KeyedInput";
import KeyedResult from "./KeyedResult";

export default function KeyedTransposition() {
  const [keyedTranspositionData, setKeyedTranspositionData] = useState([]);

  let { plainText, key } = keyedTranspositionData;
  let resultText ='';

  const generateCipherText = (plainText, key) => {
    console.log("Cipher text",plainText,key);
  }

  const generatePlainText = (plainText, key) => {
    console.log("Plain text",plainText,key);
  }

  if (keyedTranspositionData.optn?.toLowerCase() === 'encrypt') {
    resultText = generateCipherText(plainText, parseInt(key));
  }
  else if (keyedTranspositionData.optn?.toLowerCase() === 'decrypt') {
    resultText = generatePlainText(plainText, parseInt(key));
  }

  return (
    <div>
      <KeyedInput setKeyedTranspositionData={setKeyedTranspositionData} />
      <KeyedResult title={"Keyed Transposition Cipher"} resultText={resultText} keyedTranspositionData={keyedTranspositionData} />
    </div>
  )
}
