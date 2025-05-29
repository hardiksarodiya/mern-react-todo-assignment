// Two Sum Problem Solution
function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map[complement] !== undefined) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }
  throw new Error('No two sum solution');
}

console.log(twoSum([2, 7, 11, 15], 9));  // Output: [0, 1]
