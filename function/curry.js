function curry(fn) {
    let args = [];
    return function _curry() {
        if(arguments.length === 0) {
            return fn.apply(this,args);
        }
        // [].push.apply(args,arguments);
        args.push(...arguments);
        return _curry;
    }
}

function sum1() {
    let args = [...arguments];
    return args.reduce((sum, cur) => sum+cur);
}

let sum = curry(sum1);
sum(1);
sum(2)(3,4)(100,12,18);
console.log(sum());