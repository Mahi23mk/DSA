const totalSubarray = (arr, target)=>{
    let left = 0;
    let right = 0;
    let sum = 0;
    let count=0;
    let n = arr.length;

    while(right<n){
        //expand
        sum += arr[right];
        
        // if sum is greater shrink
        while(sum > target  && left <= right){
            sum-=arr[left];
            left++;
        }
        
        if(sum === target){
            count++;
        }
   
        right++;
    }
    
    return count;
}

console.log(totalSubarray([1,1,1], 2))