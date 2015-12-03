/**
 * Created by yantianyu on 2015/11/23.
 */

/*animate test start*/
//setInterval(function () {
//    $('.scrollDiv').append('<p>恭喜<span class="name">梁春</span>抽中了<span class="award">“Apple Watch”</span></p>');
//    $('.scrollDiv').scrollTo({
//        endY: $('.scrollDiv')[0].scrollHeight,
//        duration: 1000,
//        callback: function () {
//            //console.log($('.scrollDiv')[0].scrollHeight);
//        }
//    });
//}, 1500);
//
//globalI = 1;
//timePick = 150;
//function goRotate() {
//    if (timePick > 800) {
//        return;
//    }
//    if (globalI == 13) {
//        globalI = 1;
//    }
//    $('.container .dialContainer  span').removeClass('active');
//    $('.container .dialContainer  span.item' + globalI).addClass('active');
//    globalI++;
//    //timePick += 50;
//    setTimeout('goRotate()', timePick);
//}
//goRotate();
/*animate test end*/

var components = (function () {
    function maskInit() {
        $('.mask').on('touchmove', function () {
            return false;
        })
    }

    function canvasCreate() {
        $('.dialContainer span img').each(function () {
            this.onload = function () {
                var $canvas = $('<canvas></canvas>');
                $canvas.height($(this).height());
                $canvas.width($(this).width());
                $(this).parent().append($canvas);
            }
        });
    }

    function maskShow(dialog) {
        $('.mask, .mask .' + dialog).removeClass('none');
        $('body').css('overflow', 'hidden');
    }

    function maskHide() {
        $('.mask, .mask > div').addClass('none');
        $('body').css('overflow', 'auto');
    }

    function activityRulesBindEv() {
        $('.activity-rules').on('click', function () {
            maskShow('activityRulesAlert');
        });
    }

    function closeBtnBindEv() {
        $('.closeBtn').on('click', function () {
            maskHide();
        });
    }

    function showAwardRecordBtnBindEv() {
        $('.showAwardRecord').on('click', function () {
            maskShow('drawRecordDialog');
        })
    }

    function bindPhoneNumberBtnBindEv() {
        $('.bindPhoneNumberBtn').on('click', function () {
            JSNativeBridge.send('js_msg_bind_phonenumber');
        })
    }

    function JSNativeBridgeBindEv() {
        JSNativeBridge.init();
    }

    function checkInBtnBindEv() {
        $('#checkInBtn').on('click', function () {
            if ($(this).hasClass('hover')) {
                return false;
            }
            $(this).addClass('hover');
            JSNativeBridge.send('js_msg_already_signin');
            setTimeout(function () {
                JSNativeBridge.send('js_msg_total_points', {'total_points': 2500});
            }, 2000);
            setTimeout(function () {
                JSNativeBridge.send('js_msg_bind_phonenumber');
            }, 5000);
        });
    }

    function init() {
        //maskInit();
        activityRulesBindEv();
        closeBtnBindEv();
        bindPhoneNumberBtnBindEv();
        JSNativeBridgeBindEv();
        showAwardRecordBtnBindEv();
        checkInBtnBindEv()
        //canvasCreate();
    }

    return {
        init: init
    };
})();

components.init();