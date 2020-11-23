// 有序数组中 target 第一次出现的下标 leetcode 34
let arr = [1,2,2,3,4,5,5,5,5,6,7,8,8];
function getFirstTarget(arr,target) {
    let left = 0;
    let right = arr.length;
    while(left<=right) {
        let mid = Math.floor((left+right)/2);
        if(arr[mid]<target) {
            left = mid+1;
        } else if(arr[mid]>target) {
            right = mid-1;
        } else {
            right = mid-1;
        }
    }
    
    if(left!==arr.length && arr[left] === target) return left;
    return -1;
}
console.log(getFirstTarget(arr,2));