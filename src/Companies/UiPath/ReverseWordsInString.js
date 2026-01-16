function reverseWords(str) {
  let reveredWord = [];
  let spaceSeparatedWords = str.split(" ");

  for (let i = spaceSeparatedWords.length - 1; i >= 0; i--) {
    if (spaceSeparatedWords[i].charAt(" ")) {
      reveredWord.push(spaceSeparatedWords[i]);
    }
  }

  return reveredWord.join(" ").trim();
}

console.log(reverseWords("uipath"));
