function inorder (root) { // 递归
  let res = []
  const _inorder = (root) => {
    if (root === null) return null
    _inorder(root.left)
    res.push(root.val)
    _inorder(root.right)
  }
  _inorder(root)
  return res
}

function inorder2 (root) { // 非递归
  let res = []
  let stack = []
  while(root || stack.length) {
    while(root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    res.push(root.val)
    root = root.right
  }
  return res
}