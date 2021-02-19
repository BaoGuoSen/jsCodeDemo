function flat(arr) {
  while(arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}
let arr = [1,[2,[3,8]]]
console.log(flat(arr))