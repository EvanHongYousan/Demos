/**
 * Created by yantianyu on 2015/4/7.
 */
define(function(require, exports, module){
    var _handler = null;
    function _send(id, content) {
        uplusInterface.postWebpageMessage(id, encodeURIComponent(JSON.stringify(!content ? '' : content)));
    }

    function _receive(msg, msg_content) {
        _handler(msg, msg_content);
    }

    function _addHandler(handler) {
        _handler = handler;
    }

    module.exports = {
        send: function(id, content) {
            _send(id, content);
        },

        receive: function(msg_id, msg_content) {
            if(msg_content==''||msg_content=="null"){
                msg_content=null;
            }
            try {
                _receive(msg_id, JSON.parse(decodeURIComponent(msg_content)));
            } catch(e) {
                alert("decodeURIComponent()调用异常");
            }
        },
        postNativeMessage: function() {
            JSNativeBridge.receive.apply(this, arguments);
        },

        init: function(handler) {
            if(!window.uplusInterface) {
                uplusInterface = {};
                uplusInterface.postWebpageMessage = function(id, content) {
                    var temp=window.location.href.split("&msg_id")[0];
                    window.location.href =temp + '&msg_id=' + id + '&msg_content=' + content;
                }
            }
            _addHandler(handler);
        }
    }
});