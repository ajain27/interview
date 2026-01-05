function rob(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let runningTotal = [];

  runningTotal[0] = nums[0];
  runningTotal[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    runningTotal[i] = Math.max(
      runningTotal[i - 1],
      runningTotal[i - 2] + nums[i]
    );
  }

  return runningTotal[runningTotal.length - 1];
}

console.log(rob([2, 7, 9, 3, 1]));
