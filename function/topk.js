let arr = [1,2,3,2,3,4,5,2,3,4,5,6,7,2,1,2,3];
function topk(arr,k) {
    let map = new Map();
    arr.forEach((item) => {
        if(map.has(item)) {
            map.set(item,map.get(item)+1);
        } else {
            map.set(item,1);
        }
    });
    console.log(...map)
    let newarr = [...map].sort((a,b) => b[1]-a[1]);
    return newarr.slice(0,k);
}
console.log(topk(arr,2));