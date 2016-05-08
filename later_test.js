/**
 * Created by yantianyu on 2016/4/27 0027.
 */
var later = require('later');
later.date.localTime();
console.log("Now:"+new Date());
var sched = later.parse.recur().on(9).hour().first().dayOfMonth()
    t = later.setInterval(function() {
        test(Math.random(10));
    }, sched);
function test(val) {
    console.log(new Date());
    console.log(val);
}