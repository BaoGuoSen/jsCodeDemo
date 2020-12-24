
function reletive_7( digit ) {
  // write code here
  let res = dfs(digit,[],[],[])
  console.log(res)
}
function dfs(nums,temp,all,visted) {
  if (temp.length === nums.length) {
      all.push([...temp])
  }
  for(let i = 0;i<nums.length;i++) {
      if (visted[i]) continue
      temp.push(nums[i])
      visted[i] = true
      dfs(nums,temp,all,visted)
      temp.pop()
      visted[i] = false
  }
  return all
}
reletive_7([1,1,2])