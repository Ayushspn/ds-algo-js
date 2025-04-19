function revrseseNumberInSentence(sentence) {
    const words = sentence.split(/\s+/); // regex to split by whitespace
    let reversedSentence = '';
    for (const word of words) {
        if (!isNaN(word)) {
        reversedSentence += word.split('').reverse().join('') + ' ';
        } else {
        reversedSentence += word + ' ';
        }
    }
    
    return reversedSentence.trim();
}