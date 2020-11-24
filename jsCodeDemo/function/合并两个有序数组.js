let arr1 = [1,3,4,5,9]
let arr2 = [2,4,6,8,9,14]

function mixArr(arr1, arr2) {
    let res = []
    while(arr1.length !==0 && arr2.length !== 0) {
        let temp1 = arr1[0]
        let temp2 = arr2[0]
        if (temp1 >= temp2) {
            res.push(temp2)
            arr2.splice(0,1)
        } else {
            res.push(temp1)
            arr1.splice(0,1)
        }
    }

    if (arr1.length !== 0) {
        res.push(...arr1)
    } else if (arr2.length !== 0){
        res.push(...arr2)
    }
    return res
}

console.log(mixArr(arr1,arr2))