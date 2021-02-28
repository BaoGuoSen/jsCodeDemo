Array.prototype.myMap = function (fn,callbackThis) {
    let res = []
    let cbthis = callbackThis || null
    console.log(cbthis)
    let target = this
    this.reduce((pre, cur, index, arr) => {
        res.push(fn.call(target, cur, index, arr))
    },[])
    return res
}
var arr = [1,2,3]
console.log(arr.myMap(item => item + 1))


Array.prototype.myMap2 = function (fn,callbackThis) {
    let res = []
    this.reduce((pre,cur,index,arr) => {
        res.push(fn.call(callbackThis,cur,index,arr))
    },[])
    return res
}

console.log(arr.myMap2(item => item + 1))