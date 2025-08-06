const palindromePartitioning = (str) => {
    const n = str.length;
    let dp = Array.from({length: n+1}, Array(n+1).fill(0))
    // make a cut then check left and right
    // dont make a cut then cehck left and right for pallindrome
    // take min

    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            dp[i][j] =  Math.min(dp[i-1][j] + 1, dp[i-1][j])
        }
    }

    return dp[n][n]
}

palindromePartitioning()