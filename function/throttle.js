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