function dfs(n) {
  if (n > 100) return 0
  return n + dfs(n+1)
}
console.log(dfs(1))