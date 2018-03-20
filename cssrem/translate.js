/*
 * time @ 2016.8.13
 * autor@ Mr.He
 * content@css px to rem
*/

const fs = require("fs");
var paths = "./index.css";  //文件路径

fs.readFile(paths , function(err , data){
    if(err) throw err;

    var str = data.toString();
    var result = translate(str , 5 , 75);
    fs.writeFile(paths , result , (err , data)=>{
        if(err) throw err;
        console.log("转换成功");
    });
});


/*
 * param@str , translate data , string.
 * param@len , 小数点后的位数,    number.
 * param@param,1rem = 64px;     number.
*/
function translate( str , len , param ){
    var reg = /\d*(px)/gi;
    var reg2 = /\D*/gi;
    var number = 1;
    for(var i=0;i<len;i++){
        number = number * 10;
    }

    return str.replace(reg , (item)=>{
        item = Math.ceil(item.replace(reg2 , "") / param * number) / number;

        item += "rem";
        return item;
    });
}