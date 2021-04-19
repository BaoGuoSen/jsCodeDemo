// 有序数组中 target 第一次出现的下标 leetcode 34
let arr = [1,2,2,3,4,5,5,5,5,6,7,8,8];
function getFirstTarget(arr,target,flag) {
    let left = 0;
    let right = arr.length;
    let res = -1
    while(left<=right) {
        let mid = Math.floor((left+right)/2);
        if(arr[mid]<target) {
            left = mid+1;
        } else if(arr[mid]>target) {
            right = mid-1;
        } else {
            res = mid
            if (flag === 'first') {
                right = mid-1;
            } else if (flag === 'last') {
                left = mid + 1
            }
        }
    }
    
    return res
}
function getNumTarget(arr,target) {
    let first = getFirstTarget(arr,target,'first') 
    if (first === -1) return 0
    let last = getFirstTarget(arr,target,'last')
    return last - first + 1
}
console.log(getNumTarget(arr,1));
