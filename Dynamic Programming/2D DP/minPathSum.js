
const minPathSum = (grid, n, m)=>{
    const dp  = Array(n).map(()=> Array(m).fill(0));

    dp[0][0] = grid[0][0];
    for(let i=1; i<n; i++) {
        dp[i][0] = dp[i-1][0] + grid[i][0];
    }

    for(let i=0; i<m; i++) {
        dp[0][i] = dp[0][i-1] + grid[0][i];
    }

    for(let i=1; i<n; i++) {
        for(let j=1; j<m; j++) {
            dp[i][j] = min(dp[i-1][j] + dp[i][j-1]);
        }
    }

    return dp[n-1][m-1];
}
