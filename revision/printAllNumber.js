let array = [1, -2, 3, -4, 5, -5, 6];

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
