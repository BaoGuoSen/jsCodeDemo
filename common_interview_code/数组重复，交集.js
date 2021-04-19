let arr1 = [1,1,1,2,3,4,5,5,6,7,8]
let arr2 = [1,9,44,3,22]
function jiaoji(arr1,arr2) {
  return [...new Set(arr1)].filter((i) => arr2.indexOf(i) > -1)
}
function bingji(arr1,arr2) {
  return [...new Set(arr1.concat(arr2))]
}
console.log(jiaoji(arr1,arr2))
console.log(bingji(arr1,arr2))