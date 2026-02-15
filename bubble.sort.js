// bubble sort is the sorting algortim that use to sorth the array it sort the adjacent values of the array and make the whole array sort

// It hjas time complexity O(n2)

function bubbleSort(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
  return nums;
}

let arr = [2, 3, 8, 49, 40, 3, 8, 3];
const data = bubbleSort(arr);

console.log(data);
