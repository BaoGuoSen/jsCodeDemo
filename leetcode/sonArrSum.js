function dfs(arr) {
  if (arr === undefined) return 0

  let cursum = 0
  let res = 0
  arr.forEach(item => {
    if (cursum <= 0) {
      cursum = item
    } else {
      cursum+=item
    }
    if (cursum > res)
      res = cursum
  })
  return res
}
let arr = [1,-2,3,10,-4,7,2,-5]
console.log(dfs([]))