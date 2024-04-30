import { useState } from "react";
import OneTimeInput from "./OneTimeInput";
import OneTimeResult from "./OneTimeResult";

export default function OneTimePad() {
  const [oneTimeData, setOneTimeData] = useState([]);

  let { plainText, key } = oneTimeData;
  let resultText ='';

  const generateCipherText = (plainText, key) => {
    console.log("Cipher text",plainText,key);
  }

  const generatePlainText = (plainText, key) => {
    console.log("Plain text",plainText,key);
  }

  if (oneTimeData.optn?.toLowerCase() === 'encrypt') {
    resultText = generateCipherText(plainText, parseInt(key));
  }
  else if (oneTimeData.optn?.toLowerCase() === 'decrypt') {
    resultText = generatePlainText(plainText, parseInt(key));
  }
  return (
    <div>
      <OneTimeInput setOneTimeData={setOneTimeData} />
      <OneTimeResult title={"One Time Pad Cipher"} resultText={resultText} oneTimeData={oneTimeData} />
    </div>
  )
}
