// add whatever parameters you deem necessary
function separatePositive(nums) {
    let left = 0;
    let right = nums.length - 1;

  while (left < right) {
    if (nums[left] < 0 && nums[right] > 0) {
      // ES2015
      [nums[left], nums[right]] = [nums[right], nums[left]];

      // ES5
    //   var temp = nums[left];
    //   nums[left] = nums[right];
    //   nums[right] = temp;

      left += 1;
      right -= 1;
    } else {
      if (nums[left] > 0) left += 1;
      else right -= 1;
    }
  }
  return nums;
}
