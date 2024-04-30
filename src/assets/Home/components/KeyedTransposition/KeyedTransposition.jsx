/* eslint-disable react/prop-types */

import { useState } from "react";
import KeyedInput from "./KeyedInput";
import KeyedResult from "./KeyedResult";

export default function KeyedTransposition() {
  const [keyedTranspositionData, setKeyedTranspositionData] = useState([]);

  let { plainText, key } = keyedTranspositionData;
  let resultText = '';

  const generateCipherText = (plainText, key) => {
    plainText = plainText.replace(/\s/g, '').toUpperCase();
    const blockSize = key.length;
    let blocks = [];
    for (let i = 0; i < plainText.length; i += blockSize) {
      blocks.push(plainText.slice(i, i + blockSize));
    }

    const paddingLength = blockSize - (plainText.length % blockSize);
    if (paddingLength < blockSize) {
      blocks[blocks.length - 1] += 'Z'.repeat(paddingLength);
    }

    let rearrangedBlocks = [];
    for (let i = 0; i < blocks.length; i++) {
      const block = blocks[i];
      let rearrangedBlock = '';
      for (let j = 0; j < key.length; j++) {
        const index = parseInt(key[j]) - 1;
        rearrangedBlock += block[index];
      }
      rearrangedBlocks.push(rearrangedBlock.trim());
    }
    const cipherText = rearrangedBlocks;
    return cipherText;
  }


  const generatePlainText = (plainText, key) => {
    plainText = plainText.replace(/\s/g, '').toUpperCase();
    const blockSize = key.length;
    let blocks = [];

    for (let i = 0; i < plainText.length; i += blockSize) {
      blocks.push(plainText.slice(i, i + blockSize));
    }

    let rearrangedBlocks = [];
    for (let i = 0; i < blocks.length; i++) {
      const block = blocks[i];
      let rearrangedBlock = [];
      for (let j = 0; j < key.length; j++) {
        const index = parseInt(key[j]) - 1;
        rearrangedBlock[index] = block[j];
      }
      rearrangedBlocks.push(rearrangedBlock);
    }

    return rearrangedBlocks;
  }

  if (keyedTranspositionData.optn?.toLowerCase() === 'encrypt') {
    resultText = generateCipherText(plainText, key);
  }
  else if (keyedTranspositionData.optn?.toLowerCase() === 'decrypt') {
    resultText = generatePlainText(plainText, key);
  }

  return (
    <div>
      <KeyedInput setKeyedTranspositionData={setKeyedTranspositionData} />
      <KeyedResult title={"Keyed Transposition Cipher"} resultText={resultText} keyedTranspositionData={keyedTranspositionData} />
    </div>
  )
}
