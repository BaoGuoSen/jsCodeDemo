Array.prototype.myReduce = function (cb, initValue) {
  for(let i = 0;i<this.length;i++) {
    if (this[i] === undefined) {
      continue
    }
    if (initValue) {
      initValue = cb(initValue,this[i],i,this)
    } else {
      initValue = cb(this[i],this[i+1],i,this)
      i++ // 下次循环，cur值应当往后一位，因为刚开始initValue占了一位
    }
  }
  return initValue
}

let arr = [1,2,null,undefined,3]
console.log(arr.myReduce((total,cur) =>  {
  return total + cur},5)
  )