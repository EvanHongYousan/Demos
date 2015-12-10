/*jslint browser: true*/
/*global $, jQuery, unescape, alert, JSNativeBridge, devJudge*/

var common = (function () {
    function getReqPrm(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"),
            r = window.location.search.substr(1).match(reg);
        if (r !== null) {
            return unescape(r[2]);
        }
        return null;
    }

    return {getReqPrm: getReqPrm};
}());

(function () {
    var oldAlert = window.alert;
    window.alert = function (msg) {
        if (devJudge.isAndroid()) {
            JSNativeBridge.send('js_msg_showTip', {"tip": msg});
        } else {
            oldAlert(msg);
        }
    };
}());

var components = (function () {
    var domainName = 'http://test.hjlaoshi.com',
        userId = null,
        rotateI = 1,
        timePick = 75,
        scrollData = [],

        rotating = false,
        rotatingCanStop = false,
        awardI = 0,
        lotteryAwardType = 0;

    console.log('当前domainName：' + domainName);

    function getUserIdFromUrl() {
        try {
            userId = common.getReqPrm('parameter') ? JSON.parse(decodeURIComponent(common.getReqPrm('parameter'))).user_id : null;
        } catch (e) {
            console.log(e);
        }
        if (userId === null) {
            userId = '15500000007@test.hjlaoshi.com';
        }
    }

    function maskShow(dialog) {
        $('.mask, .mask .' + dialog).removeClass('none');
        $('body').css('overflow', 'hidden');
    }

    function maskHide() {
        $('.mask, .mask > div').addClass('none');
        $('body').css('overflow', 'auto');
    }

    function dialContainerRotate() {
        if (timePick < 200) {
            timePick += 15;
        } else {
            rotatingCanStop = true;
        }
        if (rotateI === 13) {
            rotateI = 1;
        }
        $('.container .dialContainer  span').removeClass('active');
        $('.container .dialContainer  span.item' + rotateI).addClass('active');

        if (rotatingCanStop && rotateI === awardI) {
            setTimeout(function () {
                if (lotteryAwardType === 3) {
                    alert('谢谢参与');
                } else {
                    maskShow('congratulationAlert');
                }
                setTimeout(function () {
                    $('.dialContainer span').removeClass('active');
                }, 1000);
                rotating = false;
                rotatingCanStop = false;
                awardI = 0;
                lotteryAwardType = 0;
                timePick = 75;
            }, 1000);
            return;
        }

        rotateI++;
        setTimeout(components.dialContainerRotate, timePick);
    }

    function refreshStarBar(week_signin_count) {
        var i = 0;
        try {
            for (i = 1; i <= 4; i++) {
                $('.star-bar > .star' + i)[0].src = './img/pic_Stars_' + i + '.png';
            }
            for (i = 1; i <= week_signin_count; i++) {
                $('.star-bar > .star' + i)[0].src = './img/pic_Stars_Bright.png';
            }
        } catch (e) {
            console.log(e);
        }
        if (week_signin_count > 4) {
            week_signin_count = 4;
        }
        $('.star-bar').attr('style', 'background:url(./img/pic_Five_line_Bright_' + week_signin_count + '.png) no-repeat;background-size:100% 100%;');
    }

    function initPage() {
        $.get(
            domainName + '/app/awardServlet?method=init&user_id=' + userId + '&callback=?',
            //'./test_json/init.json',
            function (data) {
                console.log('initPage');
                console.log(data);
                var i = 0,
                    resultCode = data._APP_RESULT_OPT_CODE,
                    resultData = data._APP_RESULT_OPT_DATA,
                    resultDescript = data._APP_RESULT_OPT_DESC;

                if (resultCode === 110) {
                    if (resultData.sigined) {
                        $('#checkInBtn').addClass('hover');
                    }
                    $('.container .integral > span').text(resultData.total_point);
                    JSNativeBridge.send('js_msg_total_points', {"total_points": resultData.total_point});
                    refreshStarBar(resultData.week_signin_count);
                    $('.dialTitleDiv .buble')[0].src = './img/buble' + resultData.free_count + '.png';
                    if (resultData.today_free_count) {
                        $('.dialTitleDiv .buble').css('opacity', 1);
                    }

                    for (i = 1; i <= 12; i++) {
                        resultData.awards[i].discription = resultData.awards[i].discription.toString().replace(/[^0-9\.]/g, '');
                        if (resultData.awards[i].type === 2) {
                            $('.dialContainer .item' + i + ' .type').text('现金券');
                            $('.dialContainer .item' + i).find('img').eq(0).attr('src', './img/pic_money.png');
                            $('.dialContainer .item' + i).find('img').eq(1).attr('src', './img/pic_money_dynamic.png');
                            $('.dialContainer .item' + i + ' .description').html('<em>' + resultData.awards[i].discription + '</em>' + '元');
                        }
                        if (resultData.awards[i].type === 1) {
                            $('.dialContainer .item' + i + ' .type').text('学时卡');
                            $('.dialContainer .item' + i).find('img').eq(0).attr('src', './img/pic_Card.png');
                            $('.dialContainer .item' + i).find('img').eq(1).attr('src', './img/pic_Card_Dynamic.png');
                            $('.dialContainer .item' + i + ' .description').html('<em>' + resultData.awards[i].discription + '</em>' + '分钟');
                        }
                        if (resultData.awards[i].type === 3) {
                            $('.dialContainer .item' + i + ' .type').text('谢谢参与');
                            $('.dialContainer .item' + i).find('img').eq(0).attr('src', './img/pic_thank.png');
                            $('.dialContainer .item' + i).find('img').eq(1).attr('src', './img/pic_thank_dynamic.png');
                            $('.dialContainer .item' + i + ' .description').html('<em></em>');
                        }
                    }
                    if (resultData.free_count === 3) {
                        //$('.mask, .mask .freeChanceAlert').removeClass('none');
                        JSNativeBridge.send('js_msg_showTip', {"tip": '哈哈~送你三次免费抽奖机会哦!'});
                    }
                } else if (resultCode === 92) {
                    maskShow('bindPhoneNumber');
                } else {
                    alert(resultDescript);
                }
            }
        );
    }

    function getScrollData() {
        $.get(
            domainName + '/app/awardServlet?method=showResult&user_id=' + userId + '&callback=?',
            //'./test_json/showResult.json',
            function (data) {
                scrollData = data._APP_RESULT_OPT_DATA.awards;
                setTimeout(function () {
                    components.getScrollData();
                }, 60000);
                console.log('getScrollData');
                console.log(scrollData);
                console.log(userId);
            }
        );
    }

    function scrollDivScrolling() {
        var item = scrollData.pop();
        if (item && item.detail !== undefined) {
            $('.scrollDiv').append('<p>恭喜<span class="name">' + item.username + '</span>抽中了<span class="award">' + item.detail + '</span></p>');
            $('.scrollDiv').scrollTo({
                endY: $('.scrollDiv')[0].scrollHeight,
                duration: 1000
                //callback: function () {
                //    //console.log($('.scrollDiv')[0].scrollHeight);
                //}
            });
        }
        setTimeout(components.scrollDivScrolling, 1500);
    }

    function activityRulesBindEv() {
        $('body').on('click', '.activity-rules', function () {
            maskShow('activityRulesAlert');
        });
    }

    function closeBtnBindEv() {
        $('.mask').on('touchend', '.closeBtn', function () {
            maskHide();
        });
    }

    function getAwardRecord() {
        $.get(
            domainName + '/app/awardServlet?method=showRecord&user_id=' + userId + '&callback=?',
            //'./test_json/signin.json',
            function (data) {
                console.log('getAwardRecord');
                var records = data._APP_RESULT_OPT_DATA.records,
                    resultCode = data._APP_RESULT_OPT_CODE,
                    resultDescript = data._APP_RESULT_OPT_DESC,
                    i,
                    date,
                    dateStr,
                    $target = $('.drawRecordDialog .tbodyContainer > table');
                $target.empty();
                console.log(records);
                if (resultCode === 110) {
                    for (i = 0; i < records.length; i++) {
                        if (records[i].detail !== undefined) {
                            date = new Date(parseInt(records[i].insert_time, 10));
                            dateStr = date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate();
                            $target.append($('<tr><td class="divider" colspan="3"><img src="./img/pic_table_line.png" alt=""/></td></tr>'));
                            $target.append($('<tr><td>' + dateStr + '</td><td>' + records[i].cost + '</td><td>' + records[i].detail + '</td></tr>'));
                            dateStr = null;
                        }
                    }
                } else {
                    alert(resultDescript);
                }
            }
        );
    }

    function showAwardRecordBtnBindEv() {
        $('.showAwardRecord').on('click', function () {
            maskShow('drawRecordDialog');
        });
    }

    function bindPhoneNumberBtnBindEv() {
        $('.bindPhoneNumberBtn').on('click', function () {
            JSNativeBridge.send('js_msg_bind_phonenumber');
        });
    }

    function shareBtnBindEv() {
        $('.shareBtn').on('click', function () {
            var locationURL = location.href.toString().split('index')[0];
            JSNativeBridge.send('share', {
                "content": '抽奖啦content',
                "title": '抽奖啦title',
                "type": 0,
                "image_url": 'http://ftp.hjlaoshi.com/rtc/spread/shareicon.png',
                "target_url": locationURL + 'sharepage.html',
                "target_url_forQQ": locationURL + 'sharepage.html'
            });
        });
    }

    function jsNativeBridgeBindEv() {
        JSNativeBridge.init();
    }

    function checkInBtnBindEv() {
        $('#checkInBtn').on('click', function () {
            if ($(this).hasClass('hover')) {
                return false;
            }
            $.get(
                domainName + '/app/awardServlet?method=signin&user_id=' + userId + '&callback=?',
                //'./test_json/signin.json',
                function (data) {
                    var resultData = data._APP_RESULT_OPT_DATA,
                        resultCode = data._APP_RESULT_OPT_CODE,
                        resultDescript = data._APP_RESULT_OPT_DESC;
                    console.log('checkInBtnBindEv');
                    console.log(data);
                    if (resultCode === 110) {
                        JSNativeBridge.send('js_msg_already_signin');
                        JSNativeBridge.send('js_msg_total_points', {"total_points": resultData.total_point});
                        $('#checkInBtn').addClass('hover').addClass('animate');
                        setTimeout(function () {
                            $('.container .integral > span').text(resultData.total_point);
                            refreshStarBar(resultData.week_signin_count);
                            if (resultData.award_point) {
                                $('.extraIntegralGetAlert .extraItegral').text(resultData.award_point);
                                setTimeout(function () {
                                    maskShow('extraIntegralGetAlert');
                                }, 1000);
                            }
                        }, 2000);
                    } else if (resultCode === 92) {
                        maskShow('bindPhoneNumber');
                    } else {
                        alert(resultDescript);
                    }
                }
            );
        });
    }

    function lotteryBtnBindEv() {
        $('.lotteryBtn').on('click', function () {
            if (rotating) {
                return;
            }
            $.get(
                domainName + '/app/awardServlet?method=myLottery&user_id=' + userId + '&callback=?',
                //'./test_json/myLottery.json',
                function (data) {
                    console.log('lotteryBtnBindEv');
                    console.log(data);
                    var resultCode = data._APP_RESULT_OPT_CODE,
                        resultData = data._APP_RESULT_OPT_DATA,
                        resultDescript = data._APP_RESULT_OPT_DESC;

                    if (resultCode === 110) {
                        rotating = true;
                        dialContainerRotate();
                        awardI = resultData.award.no;
                        lotteryAwardType = resultData.award.type;
                        $('.container .integral > span').text(resultData.total_point);
                        JSNativeBridge.send('js_msg_total_points', {"total_points": resultData.total_point});
                        $('.mask .congratulationAlert .reward').text(resultData.award.description);
                        $('.dialTitleDiv .buble').css('opacity', '0');
                        getAwardRecord();
                    } else if (resultCode === 92) {
                        maskShow('bindPhoneNumber');
                    } else {
                        alert(resultDescript);
                    }
                }
            );
        });
    }

    function init() {
        getUserIdFromUrl();
        activityRulesBindEv();
        bindPhoneNumberBtnBindEv();
        jsNativeBridgeBindEv();
        getAwardRecord();
        showAwardRecordBtnBindEv();
        checkInBtnBindEv();
        lotteryBtnBindEv();
        shareBtnBindEv();
        setTimeout(function () {
            initPage();
            getScrollData();
            scrollDivScrolling();
            closeBtnBindEv();
        }, 1000);
    }

    return {
        init: init,
        dialContainerRotate: dialContainerRotate,
        getScrollData: getScrollData,
        scrollDivScrolling: scrollDivScrolling,
        maskHide: maskHide
    };
}());

window.onload = function () {
    components.init();
};