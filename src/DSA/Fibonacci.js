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
