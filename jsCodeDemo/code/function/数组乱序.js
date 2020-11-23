let arr = [1,2,3,4,5,6,7];
function shuttle(arr) {
    let len = arr.length;
    while(len>1) {
        let index = Math.floor(Math.random()*len--);
        [arr[index],arr[len]] = [arr[len],arr[index]];
    }
}
shuttle(arr);
console.log(arr);