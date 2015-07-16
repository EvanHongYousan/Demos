/**
 * Created by yantianyu on 2015/4/14.
 */
define(function(require, exports, module){
    var JSNativeBridge = require('../lib/tools').JSNativeBridge;
    JSNativeBridge.init(function(id, content){
        switch (id){
            case '1':break;
            case '2':break;
            default :break;
        }
    });
    return JSNativeBridge;
});