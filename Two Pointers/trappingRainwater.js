function trappingRain(arr){
    let stack = [];
    let totalWater = 0;
    for(let i=0; i<arr.length; i++){
        while(stack.length && arr[stack[stack.length-1]] < arr[i]){
            const top = stack.pop(); 
             if (!stack.length) break; 
            const boundedHeight = Math.min(arr[stack[stack.length-1]], arr[i]) - arr[top];

            if(boundedHeight>0){
               totalWater += boundedHeight * (i - stack[stack.length-1] - 1)
            }
        }
        stack.push(i);
    }
    
    return totalWater;
}

trappingRain([0,1,0,2,1,0,1,3,2,1,2,1])
