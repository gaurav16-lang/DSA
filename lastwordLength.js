let str = "Gaura  v    helle   opopeojdj   ";

// let x = str.length - 1;
// while (x > 0) {
//   if (str[x] == " ") {
//     --x;
//   } else {
//     break;
//   }
// }

// let count = 0;
// while (x > 0) {
//   if (str[x] != " ") {
//     count += 1;
//     --x;
//   } else {
//     break;
//   }
// }

// console.log(count);

let str2 = "Gaura  v    helle   opopeojdj   ";
let count = 0;
let space = 0;
let x = str2.length - 1;
while (x > 0) {
  if (str2[x] == " " && space > 1) {
    break;
  }
  if (str2[x] == " " && space == 0) {
    --x;
  } else {
    space += 1;
    count += 1;
    --x;
  }
}
console.log(count);
