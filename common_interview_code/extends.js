// ES6

// class Sup {
//   constructor(name) {
//     this.name = name
//     this.age = 33
//   }
//   say () {
//     console.log(`${this.name},年龄:${this.age}`)
//   }
// }

// class Sub extends Sup{
//   constructor(name, age) {
//     super(name)
//     this.age = 22
//   }
// }
// var sub = new Sub("son")
// sub.say()

// ES5
function Sup(name) {
  this.name = name
  this.message = "hahaha"
}
Sup.prototype.say = function() {
  console.log(this.name)
}
function Sub(name) {
  Sup.call(this,name)
  this.message = "hahahha2"
}

function myextends(sub, sup) {
  let prototype = Object.create(sup.prototype)
  prototype.constructor = sub
  sub.prototype = prototype
  
}

myextends(Sub, Sup)

var sub = new Sub("son")
sub.say()