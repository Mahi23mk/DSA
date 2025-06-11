// dp solution complexity O(n^2)
function calculateMinDistance(arr){
    let dp = new Array(arr.length).fill(Infinity);
    dp[0] = 0;
    let maxRange = 0;
    for(let i=0; i<arr.length; i++){
        if(i > maxRange) return -1;
        let range = arr[i] + i;
        maxRange = Math.max(range, maxRange)
        for(let j=i+1; j<= range; j++){
            dp[j] = Math.min(dp[j], dp[i]+1)
        }
    }

    return dp[arr.length-1]
}


// greedy solution O(n)
function minJumps(arr) {
    let n = arr.length;
    if (n <= 1) return 0;
    if (arr[0] === 0) return -1;

    let jumps = 0;
    let maxRange = 0;
    let range = 0;

    for (let i = 0; i < n - 1; i++) {
        maxRange = Math.max(maxRange, i + arr[i]);

        if (i === range) {
            jumps++;
            range = maxRange;

            if (range >= n - 1) break;
        }
    }

    return range < n - 1 ? -1 : jumps;
}


console.log(calculateMinDistance([2, 3, 1, 1, 4]))    // 2
console.log(calculateMinDistance([2,3,1,1,4]));       // 2
console.log(calculateMinDistance([2,1,0,3]));         // -1
console.log(calculateMinDistance([1,1,1,1,1]));       // 4
console.log(calculateMinDistance([0]));               // 0
console.log(calculateMinDistance([1, 0, 1, 0]));       // -1