const convertor = {
  1000: "M",
  900: "CM",
  500: "D",
  400: "CD",
  100: "C",
  90: "XC",
  50: "L",
  40: "XL",
  10: "X",
  9: "IX",
  5: "V",
  4: "IV",
  1: "I",
};
const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

function numsToRoman(num) {
  let i = 0;
  let output = "";
  while (num > 0) {
    const subtract = numbers[i];
    if (subtract > num) {
      i++;
      continue;
    }
    num -= subtract;
    output += convertor[subtract];
  }
  return output;
}

console.log(numsToRoman(36)); // MCMXCIV
