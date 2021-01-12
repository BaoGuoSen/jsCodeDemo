function throttle(fn,wait) {
  let pre = 0
  return function () {
    let now = Date.now()
    if (now - pre > wait) {
      fn.apply(this,arguments)
      pre = now
    }
  }
}

const fn = function() {
  console.log([...arguments])
}

var test = throttle(fn,1500)
test(111)
