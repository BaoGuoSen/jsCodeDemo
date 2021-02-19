function myInstanceof(left, right) {
  if (typeof left !== 'object') return false
  while(left.__proto__ !== null) {
    if (left.__proto__ === right.prototype) return true
    left = left.__proto__
  }
  return false
}

let a = []
let b = 3
let c = new Number(6)
console.log(myInstanceof(a, Array))
console.log(myInstanceof(b, Number))

console.log(myInstanceof(c, Number))
