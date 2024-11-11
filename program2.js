function decodeMessage(s, p) {
    const message = s;
    const pattern = p;
    const m = message.length;
    const n = pattern.length;
    
    // Create a DP table with dimensions (m+1) x (n+1)
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));
    
    // Base case: an empty message matches an empty pattern
    dp[0][0] = true;
    
    // Handle the case where the pattern starts with '*'
    for (let j = 1; j <= n; j++) {
        if (pattern[j - 1] === '*') {
            dp[0][j] = dp[0][j - 1];
        }
    }
    
    // Fill the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (pattern[j - 1] === '?') {
                // '?' matches any single character
                dp[i][j] = dp[i - 1][j - 1];
            } else if (pattern[j - 1] === '*') {
                // '*' matches empty sequence or non-empty sequence
                dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
            } else {
                // Exact match required for current characters
                dp[i][j] = dp[i - 1][j - 1] && message[i - 1] === pattern[j - 1];
            }
        }
    }
    
    // The result will be in dp[m][n]
    return dp[m][n];
}

module.exports = decodeMessage;
