function longestSubarray(arr, k){

    let prefixSum = 0;
    const obj = {};
    obj[0] = -1;
    let maxLength = -Infinity;
    for(let i=0; i<arr.length; i++){
        prefixSum += arr[i];
        if(obj[prefixSum - k]){
            maxLength = Math.max(maxLength, i-obj[prefixSum - k])
        }else{
            obj[prefixSum] = i;
        }
    }

    return maxLength
}

longestSubarray([-2, -1, 2, 1], 1)