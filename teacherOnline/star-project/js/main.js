/*jslint browser: true*/
/*global $, jQuery, unescape, alert, JSNativeBridge*/

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

var components = (function () {
    var domainName = 'http://test.hjlaoshi.com',
        userId = null,
        rotateI = 1,
        timePick = 150,
        rotating = false,
        scrollData = [],
        rotatingCanStop = false,
        awardI = 0;

    function getUserIdFromUrl() {
        try {
            userId = common.getReqPrm('parameter') ? JSON.parse(decodeURIComponent(common.getReqPrm('parameter'))).user_id : null;
        } catch (e) {
            console.log(e);
        }
        if (userId === null) {
            userId = '15500000044@test.hjlaoshi.com';
        }
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

    function dialContainerRotate() {
        if (timePick < 800) {
            timePick += 60;
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
                maskShow('congratulationAlert');
                rotating = false;
            }, 1000);
            return;
        }

        rotateI++;
        //timePick += 50;
        setTimeout(components.dialContainerRotate, timePick);
    }

    function initPage() {
        $.get(
            domainName + '/app/awardServlet?method=init&user_id=' + userId + '&callback=?',
            //'./test_json/init.json',
            function (data) {
                var i = 0,
                    resultCode = data._APP_RESULT_OPT_CODE,
                    resultData = data._APP_RESULT_OPT_DATA,
                    resultDescript = data._APP_RESULT_OPT_DESC;

                if (resultCode === 110) {
                    $('.container .integral > span').text(resultData.total_point);

                    for (i = 1; i <= resultData.week_signin_count; i++) {
                        $('.star-bar > .star' + i)[0].src = './img/pic_Stars_Bright.png';
                    }

                    $('.dialTitleDiv .buble')[0].src = './img/buble' + resultData.free_count + '.png';
                    if (resultData.today_free_acount < 1) {
                        $('.dialTitleDiv .buble').css('opacity', 0);
                    }

                    if (resultData.sigined) {
                        $('#checkInBtn').addClass('hover');
                    }

                    for (i = 1; i <= 12; i++) {
                        resultData.awards[i].discription = resultData.awards[i].discription.toString().replace(/元|分钟|卡/g, '');
                        if (resultData.awards[i].type === 1) {
                            $('.dialContainer .item' + i + ' .type').text('现金券');
                            $('.dialContainer .item' + i).find('img').eq(0).attr('src', './img/pic_money.png');
                            $('.dialContainer .item' + i).find('img').eq(1).attr('src', './img/pic_money_Dynamic.png');
                            $('.dialContainer .item' + i + ' .description').html('<em>' + resultData.awards[i].discription + '</em>' + '元');
                        }
                        if (resultData.awards[i].type === 2) {
                            $('.dialContainer .item' + i + ' .type').text('学时卡');
                            $('.dialContainer .item' + i).find('img').eq(0).attr('src', './img/pic_Card.png');
                            $('.dialContainer .item' + i).find('img').eq(1).attr('src', './img/pic_Card_Dynamic.png');
                            $('.dialContainer .item' + i + ' .description').html('<em>' + resultData.awards[i].discription + '</em>' + '分钟');
                        }
                    }
                } else {
                    alert(resultDescript);
                }
            }
        );
    }

    function getScrollData() {
        console.log(userId);
        $.get(
            domainName + '/app/awardServlet?method=showResult?user_id=' + userId + '&callback=?',
            //'./test_json/showResult.json',
            function (data) {
                //scrollData = JSON.parse(data);
                //setTimeout(function () {
                //    components.getScrollData();
                //}, 60000);
                console.log(data);
            }
        );
    }

    function scrollDivScrolling() {
        var item = scrollData.pop();
        if (item) {
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
        $('.activity-rules').on('click', function () {
            maskShow('activityRulesAlert');
        });
    }

    function closeBtnBindEv() {
        $('.closeBtn').on('click', function () {
            maskHide();
        });
    }

    function getAwardRecord() {
        $.get(
            domainName + '/app/awardServlet?method=showRecord&user_id=' + userId + '&callback=?',
            //'./test_json/signin.json',
            function (data) {
                var records = data.records,
                    i,
                    date,
                    dateStr,
                    $target;
                for (i = 0; i < records.length; i++) {
                    date = new Date(parseInt(records[i].time, 10));
                    dateStr = date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate();
                    $target = $('.drawRecordDialog .tbodyContainer > table');
                    $target.append('<tr><td class="divider" colspan="3"><img src="./img/pic_table_line.png" alt=""/></td></tr>');
                    $target.append('<tr><td>' + dateStr + '</td><td>' + records[i].cost + '</td><td>' + records[i].detail + '</td></tr>');
                    dateStr = null;
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
                    var i = 0;
                    console.log(data);
                    if (!data._APP_RESULT_OPT_CODE) {
                        JSNativeBridge.send('js_msg_already_signin');
                        $('#checkInBtn').addClass('hover');
                        $('.container .integral > span').text(data.total_point);
                        for (i = 1; i <= 4; i++) {
                            $('.star-bar > .star' + i)[0].src = './img/pic_Stars_' + i + '.png';
                        }
                        for (i = 1; i <= data.week_signin_count; i++) {
                            $('.star-bar > .star' + i)[0].src = './img/pic_Stars_Bright.png';
                        }
                    } else {
                        alert(data._APP_RESULT_OPT_DESC);
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
                    console.log(data);
                    var resultCode = data._APP_RESULT_OPT_CODE,
                        resultData = data._APP_RESULT_OPT_DATA,
                        resultDescript = data._APP_RESULT_OPT_DESC;

                    if (resultCode === 110) {
                        rotating = true;
                        dialContainerRotate();
                        console.log(resultData);
                        awardI = resultData.award.no;
                        $('.container .integral > span').text(resultData.total_points);
                        $('.mask .congratulationAlert .reward').text(resultData.award.description);
                    } else {
                        alert(resultDescript);
                    }
                }
            );
        });
    }

    function init() {
        //maskInit();
        getUserIdFromUrl();
        activityRulesBindEv();
        closeBtnBindEv();
        bindPhoneNumberBtnBindEv();
        jsNativeBridgeBindEv();
        getAwardRecord();
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
}());

components.init();