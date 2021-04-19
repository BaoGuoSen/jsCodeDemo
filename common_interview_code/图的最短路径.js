var minValue = Number.MAX_VALUE
var visited = [] // [][] 状态表
var map = [] // [][] 图的邻接矩阵

function theBestWay (map,start,end,length) {
  if (start === end) {
    if (length < minValue) {
      minValue = length
    }
    return
  }
  for(let i = 0;i<map[0].length;i++) {
    if (visited[start][i] && map[start][i] !== 0) {
      visited[start][i] = 1
      visited[i][start] = 1
      theBestWay(map,i,end,length+map[start][i])
      visited[start][i] = 0
      visited[i][start] = 0
    }
  }
}