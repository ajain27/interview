function sumAnything(...args) {
  return args.reduce((total, value) => {
    if (value == null) return total; // null or undefined

    const num =
      typeof value === "number"
        ? value
        : typeof value === "boolean"
          ? Number(value)
          : typeof value === "string"
            ? Number(value.trim())
            : 0;

    return Number.isFinite(num) ? total + num : total;
  }, 0);
}
console.log(sumAnything(1, 2, 3)); // Output: 6
console.log(sumAnything("4", "5", "6")); // Output: 15
console.log(sumAnything(true, false, 10)); // Output: 11
console.log(sumAnything(1, "2", null, undefined, true, "abc", {}, 3)); // Output: 7

// function sumAnything(...args) { --- IGNORE ---
//   return args.reduce((total, value) => { --- IGNORE ---
//     if (value == null) return total; // null or undefined --- IGNORE ---

//     const num = --- IGNORE ---
//       typeof value === "number" --- IGNORE ---
//         ? value --- IGNORE ---
//         : typeof value === "boolean" --- IGNORE ---
//           ? Number(value) --- IGNORE ---
//           : typeof value === "string" --- IGNORE ---
//             ? Number(value.trim()) --- IGNORE ---
//             : 0; --- IGNORE ---

//     return Number.isFinite(num) ? total + num : total; --- IGNORE ---
//   }, 0); --- IGNORE ---
// } --- IGNORE ---
// console.log(sumAnything(1, 2, 3)); // Output: 6 --- IGNORE ---
// console.log(sumAnything("4", "5", "6")); // Output: 15 --- IGNORE ---
// console.log(sumAnything(true, false, 10)); // Output: 11 --- IGNORE ---
// console.log(sumAnything(1, "2", null, undefined, true, "abc", {}, 3)); // Output: 7 --- IGNORE ---
