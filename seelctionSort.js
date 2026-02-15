// [1,2,3,3,4,55,66,66,77,8,8]

function selectionSort(nums) {
  // using Selection Sort
  let minInds = 0;
  for (let i = 0; i < nums.length; i++) {
    minInds = i;
    for (let j = i + 1; j < nums.lenght - 1; j++) {
      if (nums[minInds] > nums[j]) {
        let temp = nums[minInds];
        nums[minInds] = nums[j];
        nums[j] = temp;
      }
    }
  }
  return nums;
}

let arr = [1, 2, 3, 3, 4, 55, 66, 66, 77, 8, 8];

const newArr = selectionSort(arr);

console.log(newArr);
