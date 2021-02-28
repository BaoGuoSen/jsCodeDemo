var s = 'df_#sdlf_kdj'
console.log(s.match(/^d/g))

var news = s.replace(/_(#)/,'$1TE')
console.log(news)

var a = '3.1415926'
var test = a.match(/(\d+)/g) 
console.log(test)