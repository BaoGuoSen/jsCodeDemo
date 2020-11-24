function mynew() {
    let newobj = {};
    let constrocter = [].shift.apply(arguments);
    newobj.__proto__ = constrocter.prototype;
    let res = constrocter.apply(newobj,arguments);
    console.log(newobj);
    console.log(typeof res);
    return typeof res === "object" ? res : newobj;
}

Person = function(name) {
    this.name = name;
}

let obj = mynew(Person,"bgs");
console.log(obj instanceof Person);

function _new() {
    let obj = {};
    let constrocter = [].shift.apply(arguments);
    obj.__proto__ = constrocter.prototype;

    let res = constrocter.apply(obj, arguments);

    return typeof res === 'object' ? res : obj;
}