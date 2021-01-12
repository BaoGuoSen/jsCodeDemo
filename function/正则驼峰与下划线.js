function toHumb (name) {
    return name.replace(/_(\w)/g, function (all,letter) {
        return letter.toUpperCase();
    })
}

console.log(toHumb('a_b2_345_c2345'))

function toLine (name) {
    return name.replace(/([A-Z])/g, '_$1').toLowerCase();
}

console.log(toLine('aB2345C2345'))
