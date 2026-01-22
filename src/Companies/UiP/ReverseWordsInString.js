function reverseWords(str) {
  let reversedWord = [];
  let spaceSeparatedWords = str.split(" ");

  for (let i = spaceSeparatedWords.length - 1; i >= 0; i--) {
    if (spaceSeparatedWords[i].charAt(" ")) {
      reversedWord.push(spaceSeparatedWords[i]);
    }
  }
  return reversedWord.join(" ").trim();
}

console.log(reverseWords("uipath"));
