
const kanpsack = (weights, values, W) => {
    const n  = weights.length;
    let dp = Array(n+1).fill().map(()=> Array(W+1).fill(0));

    for(let i=1; i<=n; i++){
        for(let j=1; j<=W; j++){
            if(weights[i-1] <= j){
                //include
                dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-weights[i-1]] + values[i-1])
            }else{
                dp[i][j] = dp[i-1][j]
            }
        }
    }

    return dp[n][W]
}

console.log(kanpsack( [10, 20, 30], [60, 100, 120], 50))

