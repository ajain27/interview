// Given an array of integers nums and an integer as target. Return the indexes of the numbers in an array whos some is equal to the target

// input - nums = [2,7,11,15] and target = 9 ==> output = [0,1]

// const twoSum = (arr, target) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) return [i, j];
//     }
//   }
// };

const twoSum = (nums, target) => {
  var obj = {};
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (obj[target - n] >= 0) {
      return [obj[target - n], i];
    } else {
      obj[n] = i;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
