function rgbTohex(rgb) {
    // rgb(x,y,z)
    var rgb = rgb.toString().match(/\d+/g)
    console.log(rgb)
    var hex = '#'
    for(let i = 0; i<3;i++) {
        hex+=('0' + Number(rgb[i]).toString(16)).toUpperCase().slice(-2)
    }
    return hex;
}

console.log(rgbTohex('(169, 245, 8'))

function hexTorgb(hex) {
    let rgb = []
    hex = hex.slice(1)

    if (hex.length === 3) {
        hex = hex.replace(/./g, '$1$1')
    }

    hex.replace(/../g, function(color) {
        rgb.push(parseInt(color, 0x10))
    })

    return '(' + rgb.join(',') + ')';
}

console.log(hexTorgb('#A9F508'))