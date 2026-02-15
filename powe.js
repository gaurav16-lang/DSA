const powerTwo = (num) => {
  if (num < 0 || num % 2 !== 0) {
    return false;
  }
  if (num == 1) {
    return true;
  }

  return powerTwo(num / 2);
};

console.log(powerTwo(18));
