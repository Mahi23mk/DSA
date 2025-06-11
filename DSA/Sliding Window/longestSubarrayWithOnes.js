function longestSubarray(arr){
    let maxLength = 0;
    let count = 0;
    let left=0;
    for(let right=0; right<arr.length; right++){
        if(arr[right] === 0){
            count++;
        }

        while(count > k){
            if(arr[left]===0){
                count--;
            }
            left++;
        }

        maxLength = Math.max(maxLength, right-left+1)
    }
    return maxLength
}

longestSubarray([1,1,0,0,1,1,1,0])