function findLongestWordInSentence(sentence) {
  const words = sentence.split(/\s+/); // regex to split by whitespace
  let longestWord = '';
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  
  return longestWord;
}