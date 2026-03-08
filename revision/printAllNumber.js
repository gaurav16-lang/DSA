let array = [1, -2, 3, -4, 5, -5, 6, 8, 90];

const printAllNumber = (array) => {
  array.map((el) => console.log(el));
};

const countNegativeNumber = (array) => {
  let count = 0;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < 0) {
      count += 1;
    }
  }
  return count;
};

console.log(countNegativeNumber(array));

const smallestNumberArray = (array) => {
  let min = Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }

  return min;
};

console.log(smallestNumberArray(array));

// find the largest number in the array

const findLargestNumber = (array) => {
  let max = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  return max;
};

console.log(findLargestNumber(array));

const findSecondLargestElement = (array) => {
  let max = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      secondMax = max;
      max = array[i];
    } else if (secondMax < array[i]) {
      secondMax = array[i];
    }
  }
  return secondMax;
};

console.log(findSecondLargestElement(array));

const printPatter = (n) => {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n - i; j++) {
      str += j + 1;
    }
    console.log(str);
  }
};

printPatter(4);

const countTheDigit = (integer) => {
  let count = 0;
  while (integer > 0) {
    integer = Math.floor(integer / 10);
    count++;
  }

  return count;
};

console.log(countTheDigit(12345));

// find the pallindrome from the given integers

const findPallindrome = (num) => {
  let rev = 0;
  while (num > 0) {
    let rem = Math.floor(num % 10);
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }

  if (rev == num) {
    return true;
  } else {
    return false;
  }
};

console.log(findPallindrome(123));
