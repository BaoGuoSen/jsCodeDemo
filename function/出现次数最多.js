let arr = [1,2,3,4,3,2,1,2,3,4,2,2,1,11,2,2,2];
function getmaxdisplay(arr) {
    let max = 0;
    let maxvalue;
    arr.reduce((obj,cur) => {
        obj[cur] = obj[cur] ? obj[cur]+1 : 1;
        if(obj[cur] > max) {
            maxvalue = cur;
            max = obj[cur];
        }
        return obj;
    },{});
    return maxvalue;
}
console.log(getmaxdisplay(arr));