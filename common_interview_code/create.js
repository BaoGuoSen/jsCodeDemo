// ES6
// class Person {
//   constructor(name) {
//     this.name = name
//     this.message = "i'm a person"
//   }
//   say() {
//     console.log(this.message+"   "+ this.name)
//   }
// }
// var person = new Person("bgs")
// person.say()

// ES5
function person(name) {
  this.name = name
  this.message = "es5"

  if (typeof this.say != 'function') {
    console.log('1')
    person.prototype.say = function() {
      console.log(this.name)
    }
  }
}

var person1 = new person("bgs")
var person2 = new person("xxb")
person1.say()
person2.say()