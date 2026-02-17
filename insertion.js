function insertion(nums) {
  for (let i = 1; i < nums.length - 1; i++) {
    let key = nums[i];
    let j = i - 1;

    while (j >= 0 && nums[j] > key) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = key;
  }
  return nums;
}

const sorted = insertion([2, 7, 8, 99, 4, 3, 1]);
