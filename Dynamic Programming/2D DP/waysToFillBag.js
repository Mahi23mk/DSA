const numOfWaysToFillBag = (weights, W) => {
    const n = weights.length;
    let dp = Array.from({length: n+1}, ()=> Array(W+1).fill(0));
 for (let i = 0; i <= n; i++) {
        dp[i][0] = 1; // Only 1 way to make sum 0: pick nothing
    }
    for(let i=1; i<=n; i++){
        for(let j=1; j<=W; j++){
            if(weights[i-1] <= j){
                // take
                dp[i][j] = dp[i-1][j] + dp[i-1][j-weights[i-1]] 
            }else{
                //not take
                dp[i][j] = dp[i-1][j]
            }
        }
    }
   
    return dp[n][W];
}



console.log(numOfWaysToFillBag([1,2,3,1,1], 3))