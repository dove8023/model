/*
 * @Author: Mr.He 
 * @Date: 2018-03-19 21:29:59 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-03-20 10:02:39
 * @content what is the content of this file. */

let timerCountDown = {
    computeTimer(number) {
        let data = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
        data.days = Math.floor(number / (60 * 60 * 24));
        data.hours = Math.floor(number % (60 * 60 * 24) / (60 * 60));
        data.minutes = Math.floor(number % (60 * 60) / 60);
        data.seconds = number % 60;

        for (let key in data) {
            data[key] = this.format(data[key]);
        }
        return data;
    },
    changeDom(obj) {
        let str = `${obj.days}天 ${obj.hours}小时 ${obj.minutes}分钟 ${obj.seconds}秒`;

        console.log(str);
    },
    format(str) {
        str = String(str);
        return str.length < 2 ? '0' + str : str;
    },
    timer: null,

    /* number 单位秒 */
    init(number, finishFn, viewChange) {
        this.timer = setInterval(() => {
            if (number < 0) {
                this.timer = clearInterval(this.timer);
                return finishFn && finishFn();
            }
            let timerData = this.computeTimer(number);
            number--;

            return viewChange ? viewChange(timerData) : this.changeDom(timerData);
        }, 1000);
    }
}

timerCountDown.init(62, () => {
    console.log("timer down")
});