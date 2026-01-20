// 🧪 Sample input: Array of arrays containing numbers
let SAMPLE_DATA = [
  [1, 2, 3, 2],
  [2, 5, 1, 7, 1],
  [3, 4, 2, 5, 2, 8],
];

function getNumberFrequency(inputData = []) {
  let frequency = {};
  let flatList = inputData.flat();

  flatList.forEach((num) => {
    // 🔁 Increment count if exists, else initialize to 1
    frequency[num] = (frequency[num] || 0) + 1;
  });

  return frequency; // 📬 Return the frequency object
}

console.log(getNumberFrequency(SAMPLE_DATA));
// ✅ Output: { '1': 3, '2': 4, '3': 2, '4': 1, '5': 2, '7': 1, '8': 1 }
