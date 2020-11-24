var str="2020/11/11 00:00:00";
var endDate = new Date(str); 
var start = new Date();
var time = endDate.getTime() - start.getTime();

function getlabel(time) {
    var d,h,m,s;  
            if (time>=0) {  
                 d = Math.floor(time/1000/60/60/24);  
                h = Math.floor(time/1000/60/60%24);  
                m = Math.floor(time/1000/60%60);  
               s = Math.floor(time/1000%60);                     
            }
    return d+'天'+h+'小时'+m+'分'+s+'秒';
}
console.log(getlabel(time));