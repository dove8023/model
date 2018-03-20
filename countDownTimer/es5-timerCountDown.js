/*
 * @Author: Mr.He 
 * @Date: 2018-03-19 21:29:59 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-03-20 15:04:34
 * @content what is the content of this file. */

var timerCountDown = {
    computeTimer: function (number) {
        var data = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
        data.days = Math.floor(number / (60 * 60 * 24));
        data.hours = Math.floor(number % (60 * 60 * 24) / (60 * 60));
        data.minutes = Math.floor(number % (60 * 60) / 60);
        data.seconds = number % 60;

        for (var key in data) {
            data[key] = this.format(data[key]);
        }
        return data;
    },
    changeDom: function (obj) {
        var str = `${obj.days}天 ${obj.hours}小时 ${obj.minutes}分钟 ${obj.seconds}秒`;
        document.getElementById("timer").innerHTML = str;
        console.log(str);
    },
    format: function (str) {
        str = String(str);
        return str.length < 2 ? '0' + str : str;
    },

    /* number 单位秒 */
    init: function (number, finishFn, viewChange) {
        var self = this;
        var timer = setInterval(function () {
            if (number < 0) {
                timer = clearInterval(timer);
                return finishFn && finishFn();
            }
            var timerData = self.computeTimer(number);
            number--;

            return viewChange ? viewChange(timerData) : self.changeDom(timerData);
        }, 50);
    }
}

timerCountDown.init(100, function () {
    console.log("timer1 down")
});



timerCountDown.init(200, function () {
    console.log("timer2 down")
}, function (data) {
    var str = `${data.days}天 ${data.hours}小时 ${data.minutes}分钟 ${data.seconds}秒`;
    document.getElementById("timer2").innerHTML = str;
});