// add whatever parameters you deem necessary
function countPairs(arr, num) {
    //sorting in ascending order
    arr.sort((x, y) => x - y);
    let count = 0;
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === num){
            count++;
            left++;
            right--;
        } else if(sum < num){
            left++;
        } else {
            right--;
        }
    }
    return count;
}
