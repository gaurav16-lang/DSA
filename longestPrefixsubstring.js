function longestPrefixSubstring(array) {
  let x = 0;
  while (array[0].length > x) {
    let ch = array[0][x];
    for (let i = 1; i < array.length; i++) {
      if (ch != array[i][x] || x == array[i].length) {
        return array[0].substring(0, x);
      }
    }
    ++x;
  }
  return array[0];
}
const array = ["flower", "flo", "flow"];

const data = longestPrefixSubstring(array);

console.log(data);
console.log("dsljdfkj");
