// 浏览器控制台运行可查看结果
function getHfirst() {
    let eles = document.getElementsByTagName('*')
    let res = {}
    for (let i = 0;i<eles.length;i++) {
        let temp = eles[i].tagName
        if(temp.match(/^h/i)) {
            if (res[temp]) {
                let temp2 = res[temp]
                res[temp] = temp2+1
            } else {
                res[temp] = 1
            }
        }
    }
    return res
}
// 新浪首页测试结果
// {HTML: 1, HEAD: 1, H3: 13, H4: 4, H1: 2}
// H1: 2
// H3: 13
// H4: 4
// HEAD: 1
// HTML: 1
// __proto__: Object

function iframeHfirst() {
    let frames = window.frames
    for (let key in frames) {
        if (frames[key] && frames[key].document) {
            console.log(key, '   ', frames[key].document.getElementsByTagName('*'))
        }
    }
}

function getAllHfirst() {
    let eles = document.getElementsByTagName('*')
    let res = {}
    for (let i = 0;i<eles.length;i++) {
        let temp = eles[i].tagName
        if(temp.match(/^h/i)) {
            if (res[temp]) {
                let temp2 = res[temp]
                res[temp] = temp2+1
            } else {
                res[temp] = 1
            }
        }
    }

    let frames = window.frames
    for (let key in frames) {
        if (frames[key] && frames[key].document) {
            let elets = frames[key].document.getElementsByTagName('*')
            for (let i = 0;i<elets.length;i++) {
                let temp = eles[i].tagName
                if(temp.match(/^h/i)) {
                    if (res[temp]) {
                        let temp2 = res[temp]
                        res[temp] = temp2+1
                    } else {
                        res[temp] = 1
                    }
                }
            }
        }
    }

    return res
}