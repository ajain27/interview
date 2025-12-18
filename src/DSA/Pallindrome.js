// input c = 121 = true
// input c = 10 = false

const pallindrome = (num) => {
  return num < 0 ? false : num === +num.toString().split("").reverse().join("");
};

console.log(pallindrome(1221));
