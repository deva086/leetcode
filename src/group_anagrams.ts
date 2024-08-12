function groupAnagrams(strs: string[]) {
  function getHash(str: string) {
    const hash = Array.from({ length: 26 }, () => 0);
    for (const c of str) {
      const index = c.charCodeAt(0) - "a".charCodeAt(0);
      hash[index] += 1;
    }
    const hashVal = hash.join("#");
    return hashVal;
  }

  const d: any = {};
  for (const s of strs) {
    const hashVal = getHash(s);
    if (d[hashVal]) {
      d[hashVal].push(s);
    } else {
      d[hashVal] = [s];
    }
  }

  const res: string[][] = [];
  for (const key of Object.keys(d)) {
    res.push(d[key]);
  }
  console.log(d);
  return res;
}

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams(["bdddddddddd", "bbbbbbbbbbc"]));
