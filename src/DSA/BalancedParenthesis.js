function balancedParenthesis(str) {
  const stack = [];
  const openingBrackets = "({[";
  const closingBrackets = ")}]";
  const matchingBrackets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of str) {
    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
module.exports = balancedParenthesis;
// Example usage:
// console.log(balancedParenthesis("({[]})")); // true
// console.log(balancedParenthesis("({[})"));  // false
