function flattenArray(arr) {
  const result = [];
  const stack = [...arr]; // copy to avoid mutating original

  while (stack.length) {
    const item = stack.pop();

    if (Array.isArray(item)) {
      // push elements back in reverse order
      for (let i = item.length - 1; i >= 0; i--) {
        stack.push(item[i]);
      }
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(flattenArray([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]
console.log(flattenArray([[["a"]], [["b", "c"]], "d"])); // Output: ["a", "b", "c", "d"]

// Recursive approach
// function flattenArray(arr) {
//   let result = [];
//   for (const item of arr) {
//     if (Array.isArray(item)) {
//       result = result.concat(flattenArray(item));
//     } else {
//       result.push(item);
//     }
//   }
//   return result;
// }

// console.log(flattenArray([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]
// console.log(flattenArray([[["a"]], [["b", "c"]], "d"])); // Output: ["a", "b", "c", "d"]

function flatten(arr) {
  const result = [];
  const stack = [...arr]; // copy to avoid mutating original

  while (stack.length) {
    const item = stack.pop();
    if (Array.isArray(item)) {
      stack.push(...item);
    } else {
      result.push(item);
    }
  }
  return result;
}

// export default function deepFlattenArray(arr) {
//   return arr.reduce((accumulator, currentValue) => {
//     return accumulator.concat(
//       Array.isArray(currentValue)
//         ? deepFlattenArray(currentValue)
//         : currentValue
//     );
//   }, []);
// }
