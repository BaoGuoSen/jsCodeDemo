function bigadd(x,y) {
    x = x.split("");
    y = y.split("");
    let res = [];
    let carry = 0;
    while(x.length !==0 && y.length !==0) {
        let temp = parseInt(x.pop()) + parseInt(y.pop()) + carry;
        res.unshift(temp%10);
        carry = Math.floor(temp/10);
    }

    while(x.length !== 0) {
        let temp = carry + parseInt(x.pop());
        res.unshift(temp%10);
        carry = Math.floor(temp/10);
    }
    while(y.length !== 0) {
        let temp = carry + parseInt(y.pop());
        res.unshift(temp%10);
        carry = Math.floor(temp/10);
    }
    
    return res.join("");
}
console.log(bigadd("123456789987654321","500381199802034135"));