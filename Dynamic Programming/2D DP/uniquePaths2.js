const uniquePaths = (grid, n, m)=>{
    const dp = Array(n).fill().map(()=> Array(m).fill(0));

    if(grid[0][0] === 1) return 0;
    dp[0][0] = 1;
     for(let i=1; i<n; i++){
        if(grid[i][0]===0) {
            dp[i][0] = dp[i-1][0]
        }
    }
    for(let j=1; j<m; j++){
        if(grid[0][j]===0) {
            dp[0][j] = dp[0][j-1]
        }
    }

    for(let i=1; i<n; i++){
        for(let j=1; j<m; j++){
             if(grid[i][j] === 0){
                    dp[i][j] = dp[i-1][j] + dp[i][j-1];
             }
        }
    }
    console.log(dp)
    return dp[n-1][m-1];
}

console.log(uniquePaths([
  [0, 1, 0],
  [0, 1, 0],
  [1, 0, 0]
], 3, 3))