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

let obj = {
    d:1,
    a:function test() { console.log(1)},
    b:[1,2],
    c:{},
    e: /{d}/,
    f: new Date()
}
let newobj = deepclone(obj);

// Json数据包含 obj,[],number,string,null,boolean;
// let newobj2 =JSON.parse(JSON.stringify(obj)); 
// let newobj3 = {...obj};
// newobj3.d=2;
// console.log(obj);
console.log(newobj);
// console.log(newobj2);
// console.log(newobj3);
// console.log(typeof obj.a);
console.log(typeof /d/)