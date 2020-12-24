PromisemyAll = function(promises) {
    return new Promise((resolve,reject) => {
        let len = promises.length;
        let values = new Array(len);
        let nums = 0;
        for(let i = 0;i<promises.length;i++) {
            promises[i].then((val) => {
                nums++;
                values[i] = val;
                if(nums === len) 
                    return resolve(values);
            }).catch(e => {
                return reject(e);
            })
        }
    });
}

PromisemyRace = function(promises) {
    return new Promise((resolve,reject) => {
        for(let i = 0;i<promises.length;i++) {
            promises[i].then(val => {
                return resolve(val);
            }).catch(e => {
                return reject(e);
            })
        }
    });
}
let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = Promise.resolve(3);

PromisemyAll([p1,p2,p3]).then(v=> {console.log(v)}).catch(e=>{console.log(1, e)});
PromisemyRace([p1,p2,p3]).then(v=> {console.log(v)}).catch(e=>{console.log(e)});

