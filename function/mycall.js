Function.prototype.mycall = function(context) {
    context = context || window;
    context.fn = this;
    let args = [...arguments].slice(1);
    let res = eval('context.fn('+args+')');
    
    delete context.fn;
    return res;
}

// let arr = [1,2,3];
// arr.push.mycall(arr,4,5);
// console.log(arr);

Function.prototype.myapply = function(context) {
    context = context || window;
    context.fn = this;
    let args = [...arguments].slice(1);
    let res = eval('context.fn('+args+')');
    
    delete context.fn;
    return res;
}

Function.prototype.mybind = function() {
    let fn = this;
    let args = [...arguments].slice(1);
    let bindobj = arguments[0];
    return function() {
        let bindargs = args.concat([...arguments]);
        return fn.apply(bindobj,bindargs);
    }
}