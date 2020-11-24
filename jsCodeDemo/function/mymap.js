Array.prototype.myMap = function (fn, callbackThis) {
    let res = []
    let cbthis = callbackThis || null
    this.reduce((pre, cur, index, arr) => {
        res.push(fn.call(cbthis, cur, index, arr))
    },[])
    return res
}
var arr = [1,2,3]
console.log(arr.myMap(item => item + 1))