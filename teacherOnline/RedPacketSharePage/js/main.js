/**
 * Created by yantianyu on 15/8/12.
 */
compoments = (function () {
    function shareDivBindEv() {
        $('#shareBtn').click(function(){
            JSNativeBridge.send('share', {
                "content": null,
                "title": "真题馍馍考前冲刺，高分神器！",
                "type": 0,
                "image_url": "http://192.168.0.233/ztmomo/activity/a6uttgTd5/images/CZSXKD1008.jpg",
                "target_url": "http://192.168.0.233:8088/rtc/spread/55d1a27d4ec235c18260b31b/index.html"
            });
        });
    }

    function JSNativeInit() {
        JSNativeBridge.init(function (id, content) {
            switch (id) {
                case 'get_share_content' :
                    JSNativeBridge.send('send_share_content', {
                        "content": null,
                        "title": "呼叫老师红包活动test",
                        "type": 0,
                        "image_url": "http://192.168.0.233/ztmomo/activity/a6uttgTd5/images/CZSXKD1008.jpg",
                        "target_url": "http://192.168.0.233/ztmomo/activity/a6uttgTd5/hd.html"
                    });
                    break;
                case 'get_available_operation_of_current_page' :
                    JSNativeBridge.send('send_available_operation_of_current_page', {
                        "share": true,					//true表示此页面展示分享按钮
                        "scratch_paper": false				//false表示此页面不展示草稿纸按钮
                    });
                    break;
            }
        });
    }

    function init() {
        shareDivBindEv();
        JSNativeInit();
    }

    return {
        init: init
    }
})();

compoments.init();