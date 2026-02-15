// Draw the 5*5 matrix

for (let i = 0; i < 5; i++) {
  str = "";
  for (let j = 0; j < 5; j++) {
    str += "*";
  }
  //   console.log(str);
}

// create the right angle trinagle

for (let i = 0; i < 5; i++) {
  let str = "";
  for (j = 5 - i; j <= 5; j++) {
    str += "*";
  }

  console.log(str);
}

// Right angle number triangle

for (let i = 1; i <= 5; i++) {
  let str = "";
  for (j = 5 - i; j < 5; j++) {
    str += i;
  }

  console.log(str);
}

// Right angle with 1
/*
1
12
123
1234
12345
*/

for (let i = 0; i < 5; i++) {
  let str = "";
  for (let j = 0; j <= i; j++) {
    str += j + 1;
  }

  console.log(str);
}
