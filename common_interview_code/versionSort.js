function versionSort (arr) {
  let temp = arr.map(v => v.split('.'))
  for(let i = 0;i<arr.length;i++) {
    let minindex = i
    for(let j = i;j<arr.length;j++) {
      for(let k = 0;k<arr[j].length;k++) {
        let cur = arr[j][k]
        let min = arr[i][k]
        if (cur < min) {
          minindex = j
        }
        if (cur >= min) {
          break
        }
      }
    }
    [temp[minindex],temp[i]] = [temp[i],temp[minindex]]
  }
  return temp.map(v => v.join('.'))
}

const version1 = ['1.45.0', '1.5', '6', '3.3.3.3.3']
console.log(versionSort(version1)) // [ '1.45.0', '1.5', '3.3.3.3.3', '6' ]