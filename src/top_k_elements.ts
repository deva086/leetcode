function topKFrequent(nums: number[], k: number): number[] {
  const d: any = {};
  for (const n of nums) {
    d[n] = (d[n] || 0) + 1;
  }

  const freqData: any = Array.from({ length: nums.length + 1 }, () => []);

  for (const n of Object.keys(d)) {
    console.log(d[n]);
    freqData[d[n]].push(n);
  }
  console.log(freqData);
  const res: number[] = [];
  for (let i = nums.length; i > 0; i--) {
    for (const n of freqData[i]) {
      res.push(n);
      k--;
      if (k <= 0) return res;
    }
  }

  return res;
}
console.log(topKFrequent([1, 2, 2, 2, 3, 3, 3], 1));
