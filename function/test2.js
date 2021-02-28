// PromiseAll = function(promises) {
//     return new Promise((resolve,reject) => {
//         let count = promises.length;
//         let resolvecount = 0;
//         let value = new Array(count);
//         for(let i = 0;i<promises.length;i++) {
//             promises[i].then(val => {
//                 resolvecount++;
//                 value[i] = val;
//                 if(resolvecount === count) {
//                     resolve(value);
//                 }
//             }).catch(e => {
//                 reject(e);
//             })
//         }
//     })
// }

// let p1 = Promise.resolve(1);
// let p2 = Promise.resolve(2);
// let p3 = Promise.resolve(3);

// PromiseAll([p1,p2,p3]).then(v=> {console.log(v)}).catch(e=>{console.log(1, e)});

// // function flat(arr,i) {
// //     for()
// //     while(arr.some(item => Array.isArray(item))) {
// //         arr = [].concat(...arr);
// //     }
// //     return arr;
// // }

function getAll(str) {
    let res = []
    dfs(str,[],[],res) 
    return res
}

function dfs(nums, temp, visted,res) {
    if (temp.length === nums.length) {
        res.push(temp.join(''))
        return 
    }
    for(let i = 0 ;i<nums.length;i++ ) {
        if (visted[i]) continue
        temp.push(nums[i])
        visted[i] = true
        dfs(nums,temp,visted,res)
        temp.pop()
        visted[i] = false
    }
}

console.log(getAll("abc"))


// const fn = (...args) => {
//     console.log(args)
//   for (const arg of args) {
//     console.log(arg);
//   }
// };
// const [a, b] = [1, 2];
// fn`${a} + ${b} = ${a + b}`; 

// setTimeout(() => {
//   console.log(1)
// }, 0);
 
// const promise = new Promise((resolve, reject) => {
//   console.log(2)
//   reject(3)
//   console.log(4)
// })
 
// promise
// .then(() => console.log(5))
// .catch(() => console.log(6))
// .then(() => console.log(7))
// .catch(() => console.log(8))
// .then(() => console.log(9))  
// console.log(10)

// 2 4 10 6 7 9 1