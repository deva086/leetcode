function isAnagram(s: string, t: string): boolean {
  function getHash(str: string) {
    const hash = Array.from({ length: 26 }, () => 0);
    for (const c of str) {
      const index = c.charCodeAt(0) - "a".charCodeAt(0);
      hash[index] += 1;
    }
    const hashVal = hash.join("");
    return hashVal;
  }

  const hashValS = getHash(s);
  const hashValT = getHash(t);
  return hashValS === hashValT;
}

console.log(isAnagram("anagram", "nagarams"));
