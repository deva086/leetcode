class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs: string[]) {
    const result = strs.reduce((a, c) => `${a}${c.length}#${c}`, "");
    return result;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str: string) {
    const result: string[] = [];
    function gettoken(newStr: string) {
      let i = 0;
      for (let s of newStr) {
        if (s === "#") {
          const tokenLength = str.substring(0, i);
          const token = str.substring(i + 1, i + 1 + parseInt(tokenLength));
          result.push(token);
          return i + 1 + parseInt(tokenLength);
        }
        i++;
      }
      return 0;
    }

    while (str.length > 0) {
      const tokenLen = gettoken(str);
      str = str.substring(tokenLen);
    }

    return result;
  }
}

const s = new Solution();
// const encodedString = s.encode(["neet", "code", "love", "you"]);
const encodedString = s.encode(["we", "say", ":", "yes"]);

console.log(encodedString);
console.log(s.decode(encodedString));
