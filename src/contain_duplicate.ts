function containsDuplicate(nums: number[]): boolean {
  const numSet = new Set();
  for (const n of nums) {
    if (numSet.has(n)) return false;
    numSet.add(n);
  }

  return true;
}

console.log(containsDuplicate([1, 2, 3, 3, 4]));
