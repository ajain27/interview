// input c = 121 = true
// input c = 10 = false

const pallindrome = (num) => {
  return num < 0 ? false : num === +num.toString().split("").reverse().join("");
};

console.log(pallindrome(1221));

// function isPalindromeLoop(str) {
//   const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//   let left = 0;
//   let right = cleanStr.length - 1;

//   while (left < right) {
//     if (cleanStr[left] !== cleanStr[right]) {
//       return false; // Characters do not match, not a palindrome
//     }
//     left++;
//     right--;
//   }

//   return true; // All characters matched, it is a palindrome
// }

// // Examples:
// console.log(isPalindromeLoop("madam")); // Output: true
// console.log(isPalindromeLoop("world")); // Output: false

///////RECURSIVE APPROACH/////////

// function isPalindromeRecursive(str) {
//   const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//   const len = cleanStr.length;

//   // Base case: strings with 0 or 1 character are palindromes
//   if (len <= 1) {
//     return true;
//   }

//   // Check first and last characters
//   if (cleanStr[0] !== cleanStr[len - 1]) {
//     return false;
//   }

//   // Recursive case: check the substring without the first and last characters
//   return isPalindromeRecursive(cleanStr.slice(1, len - 1));
// }

// // Examples:
// console.log(isPalindromeRecursive("kayak")); // Output: true
// console.log(isPalindromeRecursive("test"));  // Output: false
