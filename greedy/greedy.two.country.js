const cost = [
  [50, 80],
  [10, 20],
  [20, 30],
  [40, 50],
];

console.log(cost);
function twoCity(cost) {
  cost.sort((a, b) => b[1] - b[0] - (a[1] - a[0]));
  let ans = 0;

  for (let i = 0; i < cost.length / 2; i++) {
    ans += cost[i][0];
    ans += cost[i + cost.length / 2][1];
  }

  return ans;
}

const ans = twoCity(cost);
console.log(ans);
