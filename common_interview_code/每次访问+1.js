// var obj = {
// }
// var age = 1
// Object.defineProperty(obj, 'age', {
//   // configurable: true,
//   // enumerable: true,
//   // writable: true,
//   // value: 1,
//   get () {
//     age++
//     return age
//   },
//   set (val) {
//     age = val
//   }
// })
// obj.age
// console.log(obj.age)

var obj2 = {
  age: 1
}

var handler = {
  get (obj,key) {
    return key in obj ? ++obj[key] : 1
  }
}

var proxy = new Proxy(obj2, handler)
// obj2.age = 222
proxy.age = 777
// console.log(obj2.age)
console.log(proxy.age)