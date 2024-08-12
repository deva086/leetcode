function twoSum(nums: number[], target: number): number[] {
  const d: any = {};
  for (let i = 0; i < nums.length; i++) {
    const remain = target - nums[i];
    const remainIndex = d[remain];

    if (d[remain] >= 0) {
      return [i, remainIndex];
    }
    d[nums[i]] = i;
  }
  return [-1, -1];
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
