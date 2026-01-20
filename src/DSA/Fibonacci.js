// Fibonacci series -> 0, 1, 1, 2, 3, 5, 8, 13, 21.....

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) +  F(n - 2), for n > 1

// input n = 3 ===? output = 2

// const fib = (num) => {
//   const arr = [0, 1];
//   for (let i = 2; i <= num; i++) {
//     arr.push(arr[i - 1] + arr[i - 2]);
//   }
//   return arr[num];
// };

// fib(9);

const fib = (n) => {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(3));

// function fibonacciSeries(n) {
//     // Initialize an array with the first two numbers
//     let fib = [0, 1];

//     // Handle edge cases for n=1 and n=2
//     if (n === 1) {
//         return [0];
//     } else if (n === 2) {
//         return fib;
//     }

//     // Loop from the third term (index 2)
//     for (let i = 2; i < n; i++) {
//         // Calculate the next number by summing the two preceding ones
//         fib[i] = fib[i - 1] + fib[i - 2];
//     }

//     // Return the array containing the first n numbers
//     return fib;
// }

// // Example usage: Print the first 10 numbers of the Fibonacci series
// console.log(fibonacciSeries(10));
// // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
