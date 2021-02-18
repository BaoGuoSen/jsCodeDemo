
function bubble(arr) {
  let k = arr.length-1,pos = 0
    for(let i = 0;i<arr.length;i++) {
        let flag = true
        for(let j = 0;j<k;j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                flag = false;
                pos = j;
            }
        }
        k = pos
        if (flag) break;

    }
    return arr
}
console.log(bubble([1,3,4,33,5,8,9,56,4,3]))