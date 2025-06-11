
function CalculateJump(arr){
    let n = arr.length;
    let maxRange = 0;
    for(let i=0; i<n; i++){
        if(i > maxRange) return false;
        
        const range = i+arr[i]
        maxRange = Math.max(range, maxRange)
        // console.log(maxRange)
        if(maxRange >= n-1) return true;
    }

    return false;
}

console.log(CalculateJump([3,2,1,0,4]))
console.log(CalculateJump([2,1,3,0,0,4,3]))
console.log(CalculateJump([2,3,1,1,4]))
console.log(CalculateJump([3,2,1,0,4]))



