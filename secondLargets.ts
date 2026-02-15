let arrl = [2, 2, 3, 3, 1323, 34, 4, 4];
let largets = arrl[0];
let secondlargets = 0;

for (let i = 0; i < arrl.length - 1; i++) {
  if (arrl[i] > largets) {
    secondlargets = largets;
    largets = arrl[i];
  }
  if (secondlargets < arrl[i] && arrl[i] != largets) {
    secondlargets = arrl[i];
  }
}

console.log("largets", largets, "seconLargest", secondlargets);
