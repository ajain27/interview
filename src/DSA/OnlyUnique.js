function findUnique(str) {
  let map = {};
  let unique = "";

  for (let i = 0; i < str.length; i++) {
    let letter = str[i].toString();

    map[letter] = map[letter] ? map[letter] + 1 : 1;
  }

  for (let letter in map) {
    if (map[letter] === 1) {
      unique += letter;
    }
  }
  return unique;
}

console.log(findUnique("Helllooo!"));
