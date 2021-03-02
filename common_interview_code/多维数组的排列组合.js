function dfs (arr) {
  let len = arr.length
  if (len >= 2) {
    let len1 = arr[0].length
    let len2 = arr[1].length
    let newLength = len1 * len2
    let item = new Array(newLength)
    let index = 0
    for(let i = 0;i<len1;i++) 
      for(let j = 0;j<len2;j++) {
        item[index] = arr[0][i] + '' + arr[1][j] // 变成字符串
        index++
      }
    let newArr = new Array(len - 1)
    for(let i = 2;i<len;i++) {
      newArr[i-1] = arr[i]
    }
    newArr[0] = item
    return dfs(newArr)
  } else {
    console.log('?')
    return arr[0]
  }
}

var arr = [
  [1,2,3],
  ['a','b'],
  [7,7,7]
]
console.log(dfs(arr))