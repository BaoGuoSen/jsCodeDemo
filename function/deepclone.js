function deepclone(obj) {
    if(typeof obj !== "object" || obj === null || obj instanceof Date || obj instanceof RegExp) return obj;
    let newobj = Array.isArray(obj) ? []:{};
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            newobj[key] = typeof obj[key] === "object" ? deepclone(obj[key]) : obj[key];
        }
    }
    return newobj;
}
function deepclone2 (obj,map = new Map()) { // 循环引用问题，使用map表
    if (obj === null || typeof obj === 'object') return obj

    if (map.get(obj)) { // 判断循环引用的关键,如果这个对象已经被引用了，则直接返回
        return map.get(obj)
    }
    let res = Array.isArray(obj) ? [] : {}
    map.set(obj,res)  // 添加引用
    for(let key in obj) {
        if (obj.hasOwnProperty(key)) {
            res[key] = typeof obj[key] === 'object' ? deepclone2(obj[key],map) : obj[key]
        }
    }
    return res
}

var obj = {
    d:1,
    a:function test() { console.log(1)},
    b:[1,2],
    c:{},
    e: /{d}/,
    f: new Date(),
    k: {obj:obj}
    
}
let newobj = deepclone(obj);

// Json数据包含 obj,[],number,string,null,boolean;
// let newobj2 =JSON.parse(JSON.stringify(obj)); 
// let newobj3 = {...obj};
// newobj3.d=2;
// console.log(obj);
// console.log(newobj);


let a = [1, 2];
let b = [4, 5, 6, a];

a.push(b)
let c = deepclone2(a)
console.log(c)