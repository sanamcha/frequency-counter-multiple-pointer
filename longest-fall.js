// add whatever parameters you deem necessary
function longestFall(nums) {
    let counter = 1;
    let maxCounter = 0;
    //for empty array
    if(nums.length === 0) {
        return 0;
    }
    for(let i = 1; i < nums.length; i++){
        //current is smaller than previous
        if(nums[i] < nums[i-1]){
            counter++;
            //vip
            maxCounter = Math.max(counter, maxCounter);
        } else {
            counter = 1;
        }
    }
    //non-empty array -> 1
    return maxCounter || 1;
}
