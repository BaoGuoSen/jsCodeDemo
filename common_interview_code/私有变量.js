// 闭包
const Example = (function() {
  let _private = 'private'
  class Example {
    constructor() {
      _private = _private
    }
    get () {
      return _private
    }
  }
  return Example
})()

var ex = new Example()
console.log(ex.get())
console.log(ex._private)

// proxy
class Person {
  constructor(age) {
    this._age = age
  }

  get getAge() {
    return this._age * 2
  }
  set age(age) {
    this._age = age
  }
}
const handler = {
  get: (target,key) => {
    if (key[0] === '_') {
      throw new Error("private can't get")
    }
    return target[key]
  },
  set: (target,key,value) => {
    target[key] = value
  }
}
const person = new Proxy(new Person(55), handler)
console.log(person.getAge)
person._age = 100
console.log(person.getAge)

const p = new Person(22)
console.log(p.getAge)
p.age =1000
console.log(p.getAge)