// var bornYear = [2,2,5,5,6]
// var deadYear = [5,4,6,10,12]
// var counts = 5

// var maxYear = bornYear[0]
// var maxNum = 1
// var curAlive = 1
// var deadFlag = 0
// for(let i = 1;i<counts;i++) {
//     curAlive++
//     let tempArr = deadYear.slice(deadFlag,i) // 在此之前的死亡年份
//     let curYear = bornYear[i]
//     let deaded = (tempArr.filter(i => i<=curYear)).length
//     if (deaded > 0) {
//       curAlive-=deaded
//       deadFlag = i
//     }
    
//     if (curAlive >= maxNum) {
//         maxNum = curAlive
//         maxYear = curYear
//     }
// }
// console.log(maxYear)
// console.log(maxNum)

// let arr = [{a:1,b:3}, {a:3} ]
// console.log(arr.reduce((total,cur) => {
//   return total += cur.a
// },0))
// var n = 5
// var values = ['30','20','40','50','91']
// var parms1 = ['1','2','1','2','3']
// var parms2 = ['2','1','3','2','1']
// var buyer  = 6
// var wantparm = ['2','3','1','2','1','1']
// let res = []
// for(let i = 0;i<buyer;i++) {
//   let want = wantparm[i]
//   let index
//   let min = Number.MAX_VALUE
//   for(let j = 0;j<values.length;j++) {
//       if (parms1[j] === want || parms2[j] === want) {
//           if (values[j] < min) {
//               min = values[j]
//               index = j
//           }
//       } else {
//           continue
//       }
//   }
//   if (min === Number.MAX_VALUE) {
//       // print(-1)
//       console.log(-1)
//       res.push(-1)
//   } else {
//       // print(min)
//       res.push(min)
//       console.log(min)
//       values.splice(index,1)
//       parms1.splice(index,1)
//       parms2.splice(index,1)
//   }
// }
// let res2 = res.map(v => Number(v))
// console.log(...res2)

/**
 * @param {number[]} nums
 * @return {boolean}
 * 
 * 跳跃游戏
 * 给定一个非负整数数组，你最初位于数组的第一个位置（下标0）。
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 判断你是否能够到达最后一个位置（下标N-1）。
 * 
 * e.g. 
 * [2,3,1,1,4] => true
 * [3,2,1,0,4] => false
 * 
 */
// var canJump = function(nums) {
  
// };
// console.log(canJump([3,2,1,0,4]))

// let s = 'He015l154lo87wor70l87d000'
// let arr = s.match(/[0-9]+/g)
// arr.sort((a,b) => a-b)
// arr.forEach(item => {
//     // printsth(item)
//     let temp = item.replace(/^0+(?=[0-9])/,'')
//     console.log(temp)
// })
// // console.log(s.search(/[1-9]+/g))

// let n = 5
// let k = 3
// let data = [1,2,2,1,3]
// for(let i = 1;i<=n-k+1;i++) {
//     let tempData = data.slice(i-1,i+k-1)
//     let map = new Map()
//    	tempData.forEach(item => {
//         if (map.has(item)) {
//             map.set(item,map.get(item)+1)
//         } else {
//             map.set(item,1)
//         }
//     })
//     let res = [...map].sort((a,b) => b[1] - a[1])
//     // printsth(res[0][0])
//     let maxTime = res[0][1]
//     let res2 = []
//     for(let val of tempData) {
//       if (map.get(val) === maxTime) {
//         res2.push(val)
//       }
//     }
//     console.log(Math.min(...res2))
// }

// let n = 7
// let data = [3,4,1,5,6,2,7]
// for(let i = 0;i<n;i++) {
//     let leftData = data.slice(0,i)
//     let rightData = data.slice(i+1,data.length)
//     let leftIndex = -1
//     let rightIndex = -1
//     let leftMin = Math.min(...leftData)
//     let rightMin = Math.min(...rightData)
//     if (leftMin < data[i]) {
      
//       for(let j = leftData.length-1;j>=0;j--) {
//         if (leftData[j] < data[i]) {
//           leftIndex = j
//           break
//         }
//       }
//     } 
//     if (rightMin < data[i]) {
      
//       for(let j = 0;j<rightData.length;j++) {
//         if (rightData[j] < data[i]) {
//           rightIndex = j + i +1
//           break
//         }
//       }
//     }
//     // print(leftIndex,rightIndex)
//     console.log(leftIndex,rightIndex)
// }
let s = 'Show me the code'.split(' ')
// let k = 'd'.toLowerCase
let map = new Map()
for(let i = 0;i<s.length;i++) {
    map.set(s[i],s[i].length)
}
let arr = [...map].sort((a,b) => a[1] - b[1])
let res = []
arr.forEach(item => {
    res.push(item[0])
})
for(let i = 0;i<res.length;i++) {
  if (i === 0) {
    res[i] = res[i][0].toUpperCase() + res[i].slice(1,res[i].length)
  } else {
    res[i] = res[i][0].toLowerCase() + res[i].slice(1,res[i].length)
  }
}
console.log(res.join(' '))