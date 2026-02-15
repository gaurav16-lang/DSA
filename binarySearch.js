// suppose we have the array of elements sorted in ascending order, we can use binary search to find the index of a target element in the array. The binary search algorithm works by repeatedly dividing the search interval in half until the target element is found or the search interval is empty.
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 1;

function binarySearch(nums, target) {
  // we first initialize the left and right pointer

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (target == nums[mid]) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

const ans = binarySearch(nums, target);
console.log(ans);
