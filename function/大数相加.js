function bigadd(x,y) {
    let res='',flag=0;
    while(x.length<y.length) {
        y = '0' + y;
    }
    while(x.length>y.length) {
        x = '0' + x;
    }

    let i = x.length-1
    while(i>=0) {
        flag = Number(x[i]) + Number(y[i]) + flag;
        res = (flag%10) + res;
        flag = flag >= 10 ? 1 : 0;
        i--
    }
    return flag === 1 ? '1' + res : res;
}
console.log(bigadd("123456789987654321","500381199802034135"));