import {gridPatterns} from './Patterns';

export const patternMaker = (text) => {
  let textList = text.toLowerCase().match(/[a-z0-9]+/g);
  //if text is empty, replace text with 'hello there'
  if (!textList) {
    textList = ['hello', 'there']
  }
  //if any word exceed 7 letters, replace text with 'word too long'
  for (let i=0; i<textList.length; i++) {
    if (textList[i].length > 7) {
      textList = ['word', 'too', 'long'];
      break;
    }
  }
  //if there are more than 5 words, replace text with 'too many words'
  if (textList.length > 5) {
    textList = ['too', 'many', 'words'];
  }
  let newPatterns = [];
  let currentPattern = [];
  let word, leftGap, rightGap;
  //walk through each word
  for (let i=0; i<textList.length; i++) {
    word = textList[i];
    leftGap = Math.ceil((43-(word.length*6))/2);
    rightGap = Math.floor((43-(word.length*6))/2);
    //for each letter, take each line
    for (let j=0; j<7; j++) {
      for (let k=0; k<leftGap; k++) {
        currentPattern.push(0);
      }
      for (let k=0; k<word.length; k++) {
        // letter is word[k]
        currentPattern.push(...gridPatterns[word[k]].slice(j*5, (j+1)*5), 0);
      }
      for (let k=0; k<rightGap; k++) {
        currentPattern.push(0);
      }
    }
    newPatterns.push(currentPattern);
    currentPattern = [];
  }
  return newPatterns;
}


