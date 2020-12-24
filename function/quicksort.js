var arr = [2,3,1,4,2,10,34,5,5];
function getmid(left,mid,right) {
    let res = left > mid ? left : mid;
    if (res < right) {
        return res;
    } else {
        return left > right ? left : right;
    }
}

function quicksort(arr) {
    if(arr.length === 0) return [];
    
    let left = [];
    let center = [];
    let right = [];

    let flag = getmid(arr[0], arr[Math.floor(arr.length/2)], arr[arr.length-1]) // 取中位数，能保证最小的比较次数，优化排序性能

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
