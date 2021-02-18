
//请写一个函数，计算每个元素出现的次数，返回一个对象
let arr = ['a','b','a','c','a','b','d'];

function fun(arr){  //return obj;
    let map = new Map();
    let obj = {};
    arr.forEach(item => {
        if(map.has(item)) {
            map.set(item,map.get(item)+1);
        } else {
            map.set(item,1);
        }
    });
    for(let [key,value] of map) {
        obj[key] = value;
    }
    
    return obj;
}
let obj = fun(arr);
console.log(obj);