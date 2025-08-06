const editDistance = (str1, str2) => {
    const n = str1.length;
    const m = str2.length;
    const dp = Array(n+1).fill().map(()=> Array(m+1).fill(0));

    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= m; j++) {
            if (i === 0) dp[i][j] = j;
            else if (j === 0) dp[i][j] = i;
            else if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(
                    dp[i - 1][j],     // delete
                    dp[i][j - 1],     // insert
                    dp[i - 1][j - 1]  // replace
                );
            }
        }
    }

    return dp[n][m];
}

console.log(editDistance("horse", "ros"))



