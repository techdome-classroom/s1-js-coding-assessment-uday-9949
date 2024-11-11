const decodeTheRing = function (s, p) {
  const m = s.length;
  const n = p.length;

  const dp = Array(n + 1).fill(false).map(() => Array(m + 1).fill(false));
  dp[0][0] = true;

  for (let i = 1; i <= n; i++) {
    if (p[i - 1] === '*') {
      dp[i][0] = dp[i - 1][0];
    }
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (p[i - 1] === '*') {
        dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
      } else if (p[i - 1] === '?' || p[i - 1] === s[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      }
    }
  }

  return dp[n][m];
};

module.exports = decodeTheRing;
