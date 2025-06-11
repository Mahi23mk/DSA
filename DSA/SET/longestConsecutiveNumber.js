function longestConsecutiveNumber(arr){
    let set = new Set(arr);
    let maxLength = 0;
    let currLength = 0;
    for(let i of set){
        if(!set.has(i-1)){
            currLength = 0;
            let j = i;
            while(set.has(j)){
                j++;
                currLength++;
            }
            
            maxLength= Math.max(currLength, maxLength);
        }
    }
    return maxLength;
}

console.log(longestConsecutiveNumber( [100, 4, 200, 1, 3, 2]))
console.log(longestConsecutiveNumber( [0,3,7,2,5,8,4,6,0,1]))