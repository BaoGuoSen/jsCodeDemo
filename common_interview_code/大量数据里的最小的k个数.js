function partition(arr,start,end) {
  // let flagindex = getflag(arr,start,Math.floor((start + end) /2),end)
  let flag = arr[start]
  let index = start + 1
  for(let i = index;i<=end;i++) {
      if (arr[i] < flag) {
          [arr[i],arr[index]] = [arr[index],arr[i]]
          index++
      }
  }
  [arr[start],arr[index-1]] = [arr[index-1],arr[start]]
  return index-1
}
var getLeastNumbers = function(arr, k) {
  let len = arr.length
  if (k >= len) return arr
  let left = 0
  let right = len - 1
  let index = 0
  while(index !== k) {
      index = partition(arr,left,right)
      if (index < k) {
          left = index + 1
          index = partition(arr,left,right)
      } else if (index > k) {
          right = index - 1
          index = partition(arr,left,right)
      }
  }
  return arr.slice(0,k)
};
let arr = [1,2,3,5,6,7,3,34,5,67,7,78,85,4,335,5]
console.log(getLeastNumbers(arr,7))