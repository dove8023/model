var cookie = {
    get : function(name){
        var cookieName = encodeURIComponent(name) + '=',
            cookieStart= document.cookie.indexOf(cookieName),
            cookieValue= null;
        if(cookieStart > -1){
            var cookieEnd = document.cookie.indexOf(";", cookieStart);
            if(cookieEnd == -1){
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent( 
                document.cookie.substring(cookieStart + cookieName.length, cookieEnd) 
            );
        }
        return cookieValue;
    },
    set: function(name, value, expires){
        var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        if(expires instanceof Date){
            cookieText += "; expires=" + expires.toGMTString();
        }
        document.cookie = cookieText;
    },
    unset: function(name){
        this.set(name, "", new Date(0));
    }
}
let s20 = +new Date() + 20000;
let good = cookie.get("good");

if(good){
    console.log(good);
}else{
    console.log("set");
    cookie.set("good", "CHina is very good.", new Date(s20));
}