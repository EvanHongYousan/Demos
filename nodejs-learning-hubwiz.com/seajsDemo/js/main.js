/**
 * Created by yantianyu on 2015/4/7.
 */
seajs.config({
    // 只定base目录，类似java中的src目录
    base: './js/',
    // 目录长的可以声明别名, 这点十分人性化
    alias: {
    },
    // 下面配置自己理解
    charset: 'utf-8',
    timeout: 20000,
    debug: 0
});


define(function(require, exports, module) {
    // 如果没有配置base, 需要用 require('./js/increment')
    var inc = require('increment').increment;

    var a = 1;
    console.log(inc(a));

    var JSNativeBridge = require('JSNativeBridge');
    JSNativeBridge.init(function(id, content){
        alert(id);
        switch(id){
            case "get_available_operation_of_current_page":
                JSNativeBridge.send("send_available_operation_of_current_page",{
                    "share":true,
                    "scratch_paper": true
                });
                break;
            case "testtest":
                alert("通了");
                break;
            default :
                break;
        }
    });
    window.JSNativeBridge = JSNativeBridge;
    //module.exports = JSNativeBridge;
    JSNativeBridge.send("loadFinished");
});