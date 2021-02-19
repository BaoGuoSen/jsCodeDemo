var person = [
  {
    id: 1,
    name: "赵一"
  },
  {
    id: 2,
    name: "陈二"
  },
  {
    id: 3,
    name: "张三"
  },
  {
    id: 4,
    name: "李四"
  },
  {
    id: 5,
    name: "王五"
  },
  {
    id: 4,
    name: "李四"
  },
  {
    id: 5,
    name: "王五"
  }
]
function demo(arr) {
  let obj = {}
  let res = arr.reduce((total, cur) => {
    // obj[cur.id] ? '' : obj[cur.id] = true && total.push(cur)
    if (!obj[cur.id]) {
      obj[cur.id] = true
      total.push(cur)
    } 
    return total
  },[])
  return res
}

console.log(demo(person))
console.log("" && true)