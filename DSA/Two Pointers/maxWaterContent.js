function maxWaterContent(arr){
    let left = 0;
    let right = arr.length - 1;

    let mostWater = -Infinity;

    while(left < right){
       mostWater = Math.max(mostWater, Math.min(arr[left], arr[right]) * (right-left));
      
       if(arr[left] > arr[right]){
        right--;
       }else{
        left++;
       }
    }

    return mostWater;
}