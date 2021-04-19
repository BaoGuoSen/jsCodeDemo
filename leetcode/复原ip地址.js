var restoreIpAddresses = function(s) {
  const SEG_COUNT = 4
  const temp = new Array(SEG_COUNT)
  const res = []

  function dfs(s,segid,start) {
    if (segid === SEG_COUNT) { // 最后一段
      if (start === s.length) { // 而且字符串全部用完
        res.push(temp.join('.'))
      }
      return 
    }
    
    if (start === s.length) { // 没到最后一段，字符串就已经用完了，提前回溯
      return 
    }

    if (s.charAt(start) === '0') { // 
      temp[segid] = 0
      dfs(s,segid+1,start+1)
    }
    let address = 0
    for(let end = start;end <s.length;end++) {
      address = address * 10 + (s.charAt(end) - '0')
      if (address > 0 && address <= 0xFF) {
        temp[segid] = address
        dfs(s,segid+1,end+1)
      } else {
        break
      }
    }
  }
  dfs(s,0,0)
  return res
}
console.log(restoreIpAddresses('25525511135'))