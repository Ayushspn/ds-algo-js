const anagram = (str1, str2) => {
    const sortedSTr1 = str1.split('').sort().join('');
    const sortedSTr2 = str2.split('').sort().join('');
    return sortedSTr1 === sortedSTr2
}