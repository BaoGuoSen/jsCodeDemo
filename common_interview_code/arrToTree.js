let dataArr = [
  {
      "node_id": 1,
      "parent_id": 0,
      "name": '一级1.0.1'
  },
  {
      "node_id": 2,
      "parent_id": 0,
      "name": '一级1.0.2'
  },
  {
      "node_id": 3,
      "parent_id": 1,
      "name": '二级2.1.3'
  },
  {
      "node_id": 7,
      "parent_id": 1,
      "name": '二级2.1.7'
  },
  {
      "node_id": 6,
      "parent_id": 7,
      "name": '三级3.7.6'
  },
  {
      "node_id": 5,
      "parent_id": 7,
      "name": '三级3.7.5'
  },
]
let dataObjById = {};
    dataArr.map((item,index)=>{
        dataObjById[item['node_id']] = item
})

function arrToTree(data, rootId) {
  let tree = []
  let temp
  data.map((item, index) => {
    if (item.parent_id === rootId) {
      temp = arrToTree(data, item.node_id) //获取当前节点的子节点，初始化他的children和parent
      if (temp.length > 0) {
        item.children = temp
      } else {
        item.children = []
      }
      
      if (dataObjById[item.parent_id]) {
        let {node_id, parent_id, name} = dataObjById[item.parent_id]
        item.parent = {node_id, parent_id, name}
      } else {
        item.parent = {}
      }
      tree.push(item)
    }
  })
  return tree
}

console.log(arrToTree(dataArr, 0))

function treeToArr(tree) {
  let arr = []
  treeToArrHelper(tree,arr)
  return arr
}

function treeToArrHelper(tree,arr) {
  // console.log(Object.prototype.toString.call(tree))
  tree.map((item,index) => {
    let {node_id,parent_id,name} = item
    arr.push({node_id, parent_id,name})
    if (item.children.length > 0) {
      treeToArrHelper(item.children,arr)
    }
  })
}

let tree = arrToTree(dataArr, 0)

console.log(treeToArr(tree))