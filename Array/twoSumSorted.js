/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        const sum = arr[left] + arr[right];
        if(sum === target){
            return [left+1, right+1];
        }else if(sum > target){
            right--;
        }else{
            left++;
        }
    }
};