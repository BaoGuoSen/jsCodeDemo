class Singal { // ES6
  constructer () {
    this.name = "bgs"
  }
  sing () {
    console.log(this.name)
  }
  static getInstance () {
    if (!Singal.instance) {
      Singal.instance = new Singal()
    }
    return Singal.instance
  }
}

var a = Singal.getInstance()
var b = Singal.getInstance()
console.log(a === b)

function Person() {

}
Person.getInstance = (function () { // ES5
  let instance = null
  return function () {
    if (!instance) {
      instance = new Person()
    }
    return instance
  }
})()

var c = Person.getInstance()
var d = Person.getInstance()
console.log(c === d)

