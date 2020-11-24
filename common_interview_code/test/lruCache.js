// 设计和构建一个“最近最少使用”缓存，该缓存会删除最近最少使用的项目。缓存应该从键映射到值(允许你插入和检索特定键对应的值)，并在初始化时指定最大容量。当缓存被填满时，它应该删除最近最少使用的项目。

// 它应该支持以下操作： 获取数据 get 和 写入数据 put 。

// 获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。
// 写入数据 put(key, value) - 如果密钥不存在，则写入其数据值。当缓存容量达到上限时，它应该在写入新数据之前删除最近最少使用的数据值，从而为新的数据值留出空间。


var lruCache = function (size) {
  this.size = size
  this.map = new Map()
}

lruCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    let val = this.map.get(key)
    this.map.delete(key)
    this.map.set(key, val)
    return val
  } else {
    return -1
  }
}

lruCache.prototype.set = function (key, val) {
  if (this.map.has(key)) this.map.delete(key)
  this.map.set(key, val)
  if (this.map.size > this.size) {
    let key = this.map.keys().next().value
    this.map.delete(key)
  }
}

var cache = new lruCache(2)

cache.set(1, 1);
cache.set(2, 2);
console.log(cache.get(1));       // 返回  1
cache.set(3, 3);    // 该操作会使得密钥 2 作废
console.log(cache.get(2));       // 返回 -1 (未找到)
cache.set(4, 4);    // 该操作会使得密钥 1 作废
console.log(cache.get(1));      // 返回 -1 (未找到)
console.log(cache.get(3));     // 返回  3
console.log(cache.get(4));      // 返回  4
