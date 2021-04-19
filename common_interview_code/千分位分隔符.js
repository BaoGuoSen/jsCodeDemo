var a = 12345678956345.454

function demo(n) {
  let count = 0
  let res = ''
  do {
    let last = n % 10
    n = Math.floor(n / 10)
    res = last + res
    count++
    if (count % 3 === 0 && n) {
      res = ',' + res
    }
  } while(n)
  return res
}
console.log(demo(a))

function rex(n) {
  return n.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
}
console.log(rex(a))
// let b = 2
// let c = 4
// console.log(b ^ c)
// 1 0 0
// 0 1 0