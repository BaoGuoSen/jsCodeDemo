// var obj = {};
// Object.defineProperty(obj,"a",{
//     configurable:true,
//     writable:true,
//     value:3,
//     get() {
//         return a;
//     },

//     set(val) {
//         a = val+1;
//     }
// })
// obj.a = 3;
// console.log(obj.a);
const object1 = {a:1};

Object.defineProperty(object1, 'a', {
    get() {
        console.log(d);
            return d;
    },
    
    set(val) {
        d = val+1;
    }

});
object1.a = 3;
console.log(object1.a)