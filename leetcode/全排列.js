function getAll (s) {
  const res = []
  const temp = []
  const dfs = () => {
    if (temp.length === s.length) {
      res.push(temp.join(''))
      return
    }

    for(let i = 0;i<s.length;i++) {
      if (temp.includes(s[i])) continue
      temp.push(s[i])
      dfs()
      temp.pop()
    }
  }
  dfs()
  return res
}
console.log(getAll('123'))