var arr = [2,3,1,4,2];

function quicksort(arr) {
    if(arr.length === 0) return [];
    
    let left = [];
    let center = [];
    let right = [];

    let flag = arr[Math.floor(arr.length/2)];

    for(let i = 0;i<arr.length;i++) {
        let cur = arr[i];
        if(cur<flag) {
            left.push(cur);
        } else if(cur>flag) {
            right.push(cur);
        } else {
            center.push(cur);
        }
    }
   
    return [...quicksort(left),...center,...quicksort(right)];
}
let newarr = quicksort(arr);
// arr.sort((a,b) => a-b);
console.log(newarr);

// function bubble(arr) {
//     for(let i = 0;i<arr.length;i++) {
//         for(let j = 0;j<arr.length-i;j++) {
//             if (arr[j] > arr[j+1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr
// }
// console.log(bubble([1,3,4,33,5,8,9,56,4,3]))