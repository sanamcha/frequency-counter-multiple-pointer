// add whatever parameters you deem necessary
function pivotIndex(nums) {
    let rightSum = nums.reduce((x, y) => x + y, 0);
    let leftSum = 0;
    let pivotIdx = -1;
    for(let i = 0; i < nums.length; i++){
        leftSum += nums[i];
        if(leftSum === rightSum) {
            pivotIdx = i;
            break;
        }
        rightSum -= nums[i];
    }
    return pivotIdx;
}
