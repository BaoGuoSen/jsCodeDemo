function a() {
  let arr = Array.prototype.slice.apply(arguments)
  console.log(arr)
}
a(1,2,3)