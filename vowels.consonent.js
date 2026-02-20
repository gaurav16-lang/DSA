/**
 * @param {string} s
 * @return {number}
 */
function maxFreqSum(s) {
  let maxVowels = 0;
  let maxConsonent = 0;
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] == undefined) {
      map[s[i]] = 1;
    } else {
      map[s[i]] += 1;
    }
  }

  let keys = Object.keys(map); // [ 's','u','c','e',]
  for (let j = 0; j < keys.length; j++) {
    if (["a", "e", "i", "o", "u"].includes(keys[j])) {
      maxVowels = Math.max(maxVowels, map[keys[j]]);
    } else {
      maxConsonent = Math.max(maxConsonent, map[keys[j]]);
    }
  }

  return maxConsonent + maxVowels;
}
console.log("maxFreqSum", maxFreqSum("ukux"));
