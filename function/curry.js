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

let add = curry(sum1);

console.log(add(1,2)(3,4)(7,8,9)())