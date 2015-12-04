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

var common = (function () {
    function getReqPrm(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        } else {
            return null;
        }
    }

    return {getReqPrm: getReqPrm}
})();

var components = (function () {
    var domainName = 'http://test.hjlaoshi.com';
    var userId = null;
    var rotateI = 1;
    var timePick = 150;
    var rotating = false;
    var scrollData = [];
    var rotatingCanStop = false;
    var awardI = 0;

    function getUserIdFromUrl() {
        try {
            userId = common.getReqPrm('parameter') ? JSON.parse(decodeURIComponent(common.getReqPrm('parameter'))).user_id : null;
        } catch (e) {
            console.log(e);
        }
        if (userId == null) {
            userId = '15800031138@test.hjlaoshi.com';
        }
    }

    function dialContainerRotate() {
        if (timePick < 800) {
            timePick += 60;
        } else {
            rotatingCanStop = true;
        }
        if (rotateI == 13) {
            rotateI = 1;
        }
        $('.container .dialContainer  span').removeClass('active');
        $('.container .dialContainer  span.item' + rotateI).addClass('active');

        if (rotatingCanStop && rotateI == awardI) {
            setTimeout(function () {
                maskShow('congratulationAlert');
            }, 1000);
            return;
        }

        rotateI++;
        //timePick += 50;
        setTimeout('components.dialContainerRotate()', timePick);
    }

    function initPage() {
        $.get(
            //domainName + '/awardServlet?method=init&user_id='+userId,
            './test_json/init.json',
            function (data) {
                var i = 0;
                data = JSON.parse(data);

                $('.container .integral > span').text(data.total_points);

                for (i = 1; i <= data.week_signin_count; i++) {
                    $('.star-bar > .star' + i)[0].src = './img/pic_Stars_Bright.png';
                }

                $('.dialTitleDiv .buble')[0].src = './img/buble' + data.free_count + '.png';
                if (data.today_free_acount < 1) {
                    $('.dialTitleDiv .buble').css('opacity', 0);
                }

                for (i = 0; i < data.awards.length; i++) {
                    data.awards[i].discription = data.awards[i].discription.toString().replace(/元|分钟/, '');
                    if (data.awards[i].type == 1) {
                        $('.dialContainer .item' + data.awards[i].no + ' .type').text('现金券');
                        $('.dialContainer .item' + data.awards[i].no).find('img').eq(0).attr('src', './img/pic_money.png');
                        $('.dialContainer .item' + data.awards[i].no).find('img').eq(1).attr('src', './img/pic_money_Dynamic.png');
                        $('.dialContainer .item' + data.awards[i].no + ' .description').html('<em>' + data.awards[i].discription + '</em>' + '元');
                    }
                    if (data.awards[i].type == 2) {
                        $('.dialContainer .item' + data.awards[i].no + ' .type').text('学时卡');
                        $('.dialContainer .item' + data.awards[i].no).find('img').eq(0).attr('src', './img/pic_Card.png');
                        $('.dialContainer .item' + data.awards[i].no).find('img').eq(1).attr('src', './img/pic_Card_Dynamic.png');
                        $('.dialContainer .item' + data.awards[i].no + ' .description').html('<em>' + data.awards[i].discription + '</em>' + '分钟');
                    }
                }
            }
        );
    }

    function getScrollData() {
        $.get(
            './test_json/showResult.json',
            function (data) {
                scrollData = JSON.parse(data);
                console.log(scrollData);
                setTimeout(function () {
                    components.getScrollData();
                }, 60000);
            }
        );
    }

    function scrollDivScrolling() {
        var item = scrollData.pop();
        if (item) {
            $('.scrollDiv').append('<p>恭喜<span class="name">' + item.username + '</span>抽中了<span class="award">' + item.detail + '</span></p>');
            $('.scrollDiv').scrollTo({
                endY: $('.scrollDiv')[0].scrollHeight,
                duration: 1000,
                callback: function () {
                    //console.log($('.scrollDiv')[0].scrollHeight);
                }
            });
        }
        setTimeout('components.scrollDivScrolling()', 1500);
    }

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
        $('.dialContainer span').removeClass('active');
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
            $.get(
                './test_json/signin.json',
                function (data) {
                    JSNativeBridge.send('js_msg_already_signin');
                    $(this).addClass('hover');
                    setTimeout(function () {
                        $('.container .integral > span').text(data.total_points);
                    }, 500);
                }
            );
        });
    }

    function lotteryBtnBindEv() {
        $('.lotteryBtn').on('click', function () {
            if (rotating) {
                return;
            }
            rotating = true;
            //dialContainerRotate();
            $.get(
                './test_json/myLottery.json',
                function (data) {
                    data = JSON.parse(data);
                    dialContainerRotate();
                    console.log(data);
                    awardI = data.award.no;
                    $('.container .integral > span').text(data.total_points);
                    $('.mask .congratulationAlert .reward').text(data.award.description);
                }
            );
        })
    }

    function init() {
        //maskInit();
        getUserIdFromUrl();
        activityRulesBindEv();
        closeBtnBindEv();
        bindPhoneNumberBtnBindEv();
        JSNativeBridgeBindEv();
        showAwardRecordBtnBindEv();
        checkInBtnBindEv();
        lotteryBtnBindEv();
        setTimeout(function () {
            initPage();
            getScrollData();
            scrollDivScrolling();
        }, 1000);
        //canvasCreate();
    }

    return {
        init: init,
        dialContainerRotate: dialContainerRotate,
        getScrollData: getScrollData,
        scrollDivScrolling: scrollDivScrolling
    };
})();

components.init();