function productExceptSelf(nums: number[]): number[] {
  let preFix = 1;
  let postFix = 1;
  const result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    result[i] = preFix;
    preFix *= nums[i];
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    postFix *= nums[i + 1];
    result[i] *= postFix;
  }
  console.log(result);
  return [0];
}

productExceptSelf([1, 2, 3, 4]);
