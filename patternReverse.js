// print the reverse right angle traingle with the numbers

/*
1234
123
12
1
*/

for (let i = 0; i < 4; i++) {
  str = "";
  for (let j = 0; j < 4 - i; j++) {
    str += j + 1;
  }

  console.log(str);
}

// Print the right angle triangle in reverse order

/* *
 **
 ***
 ****
 */

for (let i = 0; i < 4; i++) {
  str = "";
  for (let j = 0; j < 4; j++) {
    if (j >= 4 - i) {
      str += "*";
    }
    str += " ";
  }

  console.log(str);
}
