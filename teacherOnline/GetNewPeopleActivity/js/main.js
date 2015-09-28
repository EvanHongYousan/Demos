/**
 *
 * Created by yantianyu on 15/9/15.
 */

window.onload = function () {
    $('.container').removeClass('none');
    $('.loader').remove();

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

        var
            userId = null,
            userName = '小小明',
            isShowMask = false;

        function maskBindEv() {
            $('.mask').height($(document).height() + 56);
            $('.mask').on('touchmove', function () {
                return false;
            });
            $('.mask .close').click(function () {
                $('.mask').addClass('none');
                $('.mask > div').addClass('none');
                isShowMask = false;
            });
        }

        function JSNativeBridgeBindEv() {
            JSNativeBridge.init(function (id, content) {
                switch (id) {
                    case 'get_available_operation_of_current_page':
                        JSNativeBridge.send('send_available_operation_of_current_page', {
                            'shake': true,
                            'share': true,
                            'scratch_paper': false
                        });
                        break;
                    case 'client_msg_shake':
                        if (isShowMask) break;
                        isShowMask = true;
                        $('.boy').trigger('touchend');
                        break;
                    default :
                        break;
                }
            });
        }

        function shareBtnBindEv() {
            $('#btn_invite,#btn_invite2,#btn_gotoInvite,#btn_getAward').click(function () {
                var locationURL = location.href.toString().split('index')[0];
                JSNativeBridge.send('share', {
                    "content": '呼叫老师缤纷六重壕礼，快来领取吧！',
                    "title": '小伙伴们，快来帮我拿壕礼啊~',
                    "type": 0,
                    "image_url": 'http://testftp.hjlaoshi.com/rtc/spread/share/72c5e1507c7b44b981e124a9cbb08421.png',
                    "target_url": locationURL + 'invitepage.html?username=' + Base64.encodeURI(userName) + "&invitecode=" + $('.bottom .invitecode').text(),
                    "target_url_forQQ": locationURL + 'invitepage.html?username=' + Base64.encodeURI(userName) + "&invitecode=" + $('.bottom .invitecode').text()
                });
            });
            $('#btn_share').click(function () {
                var locationURL = location.href.toString().split('index')[0];
                JSNativeBridge.send('share', {
                    "content": '呼叫老师缤纷六重壕礼，快来领取吧！',
                    "title": '好开心啊，我拿到终极大礼啦~！',
                    "type": 0,
                    "image_url": 'http://testftp.hjlaoshi.com/rtc/spread/share/72c5e1507c7b44b981e124a9cbb08421.png',
                    "target_url": locationURL + 'supershare.html?username=' + Base64.encodeURI(userName) + "&award=" + Base64.encodeURI($('.mask .dialogFinalAward .specialStyle').text()),
                    "target_url_forQQ": locationURL + 'supershare.html?username=' + Base64.encodeURI(userName) + "&award=" + Base64.encodeURI($('.mask .dialogFinalAward .specialStyle').text())
                });
            });
        }

        function doLottery() {
            $.getJSON(
                'http://test.hjlaoshi.com/app/share/spreadServlet' + "?user_id=" + userId + "&method=" + 'myLottery' + '&callback=?',
                function (data) {
                    console.log(data);
                    if (data._APP_RESULT_OPT_CODE == 90) {
                        return;
                    }
                    if (data._APP_RESULT_OPT_CODE == 92) {
                        $('#btn_invite,#btn_invite2,#btn_gotoInvite,#btn_getAward,#btn_share').off();
                        $('.boy,.board').off();
                        $('.dialogInviteSuccess .dialogInviteSuccessUsers1').html(data._APP_RESULT_OPT_DESC);
                        $('.dialogInviteSuccess h4').css('opacity', 0);
                        $('.dialogInviteSuccess .specialStyle').remove();
                        $('.mask, .mask .dialogInviteSuccess').removeClass('none');
                        return;
                    }

                    $('.top .apple.hover').eq('0').addClass('drop').removeClass('hover');

                    setTimeout(function () {
                        if (data._APP_RESULT_OPT_DATA.count == 0 && data._APP_RESULT_OPT_DATA.residue_count == 0) {
                            $('.top .top-text span.count').text(data._APP_RESULT_OPT_DATA.count);
                            $('.dialogFinalAward .specialStyle').html(data._APP_RESULT_OPT_DATA.lottery);
                            $('.dialogFinalAward').removeClass('none');
                            $('.mask').removeClass('none');
                        } else {
                            if(data._APP_RESULT_OPT_DATA.lottery.toString().search('这号苹果领完了') != -1){
                                $('.mask .dialogGetAward h4,.mask .dialogGetAward p').css('opacity','0');
                                $('.mask .dialogGetAward p.specialStyle').css('opacity','1');
                            }else{
                                $('.mask .dialogGetAward h4,.mask .dialogGetAward p').css('opacity','1');
                            }
                            $('.top .top-text span.count').text(data._APP_RESULT_OPT_DATA.count);
                            $('.mask .dialogGetAward').removeClass('none');
                            $('.mask .dialogGetAward .specialStyle').html(data._APP_RESULT_OPT_DATA.lottery);
                            $('.mask').removeClass('none');
                        }
                    }, 500);
                }
            );
        }

        function boyBtnBindEv() {
            $('.boy,.board').on('touchstart', function () {
                $('.board')[0].src = $('.board')[0].src.toString().replace('board.png', 'board_hover.png');
            });
            $('.boy,.board').on('touchend', function () {
                $('.board')[0].src = $('.board')[0].src.toString().replace('board_hover.png', 'board.png');
                if ($('.top .top-text .count').text() == '0') {
                    $('.mask, .mask .dialogGotInvite').removeClass('none');
                    return;
                }
                doLottery();
            });
        }

        function getInviteCode() {
            try {
                userId = common.getReqPrm('parameter') ? JSON.parse(decodeURIComponent(common.getReqPrm('parameter'))).user_id : null;
            } catch (e) {
                console.log(e);
            }
            if (userId == null) {
                userId = '15800031138@test.hjlaoshi.com';
            }

            $.getJSON(
                'http://test.hjlaoshi.com/app/share/spreadServlet' + "?user_id=" + userId + "&method=" + 'myCount' + '&callback=?',
                function (data) {
                    console.log(data);
                    if (data._APP_RESULT_OPT_CODE == 90) {
                        $('.bottom p.row2 .invitecode').text('邀请码获取失败');
                        $('#btn_invite,#btn_invite2,#btn_gotoInvite,#btn_getAward,#btn_share').off();
                        $('.boy,.board').off();
                        $('#btn_invite img').eq(0)[0].src = $('#btn_invite img').eq(0)[0].src.toString().replace('btn_invite_hover.png', 'btn_invite_disable.png');
                        $('#btn_invite img').eq(1)[0].src = $('#btn_invite img').eq(1)[0].src.toString().replace('btn_invite.png', 'btn_invite_disable.png');
                        return;
                    }
                    if (data._APP_RESULT_OPT_CODE == 92) {
                        $('.bottom p.row2 .invitecode').html('邀请码获取失败');
                        $('#btn_invite,#btn_invite2,#btn_gotoInvite,#btn_getAward,#btn_share').off();
                        $('.boy,.board').off();
                        $('.dialogInviteSuccess .dialogInviteSuccessUsers1').html(data._APP_RESULT_OPT_DESC);
                        $('.dialogInviteSuccess h4').css('opacity', 0);
                        $('.dialogInviteSuccess .specialStyle').remove();
                        $('.mask .close').remove();
                        $('.mask, .mask .dialogInviteSuccess').removeClass('none');
                        $('.bottom .row2').remove();
                        return;
                    }
                    $('.bottom p.row2 .invitecode').html(data._APP_RESULT_OPT_DATA.code);
                    $('.top .top-text span.count').html(data._APP_RESULT_OPT_DATA.count);
                    userName = data._APP_RESULT_OPT_DATA.my_name;
                    if (data._APP_RESULT_OPT_DATA.residue_count != undefined) {
                        for (var i = 0; i < (6 - data._APP_RESULT_OPT_DATA.residue_count - data._APP_RESULT_OPT_DATA.count); i++) {
                            if (i == 5) {
                                $('.boy,.board').off('touchstart').off('touchend');
                                $('.top .apple').addClass('drop');
                                $('.bottom .row3').text('大奖领完啦~');
                                $('.bottom .row4').text('邀请更多好友来“摘果实”吧!');
                                $('.top .top-text').remove();
                                $('#btn_invite').css('margin-top', '-30px');
                                $('.mask').remove();
                                break;
                            }
                            $('.top .apple').eq(0).remove();
                        }
                    }
                    for (i = 0; i < data._APP_RESULT_OPT_DATA.count; i++) {
                        $('.top .apple').eq(i).addClass('hover');
                    }

                    if (data._APP_RESULT_OPT_DATA.users != null) {
                        var
                            temp1 = '',
                            temp2 = '',
                            i = 0;
                        for (i = 0; i < data._APP_RESULT_OPT_DATA.users.length; i++) {
                            if (i >= 3)break;
                            temp1 += ' ' + data._APP_RESULT_OPT_DATA.users[i];
                        }
                        if (data._APP_RESULT_OPT_DATA.users[3]) {
                            for (i = 3; i < data._APP_RESULT_OPT_DATA.users.length; i++) {
                                temp2 += ' ' + data._APP_RESULT_OPT_DATA.users[i];
                            }
                        }
                        $('.dialogInviteSuccess .dialogInviteSuccessUsers1').text(temp1);
                        $('.dialogInviteSuccess .dialogInviteSuccessUsers2').text(temp2);
                        $('.dialogInviteSuccess').removeClass('none');
                        $('.mask').removeClass('none');
                        setTimeout(function () {
                            $('.mask,.mask > div').addClass('none');
                        }, 3000);
                    }

                    if (data._APP_RESULT_OPT_DATA.count == 0) {
                        //$('.dialogGotInvite').removeClass('none');
                        //$('.mask').removeClass('none');
                    }
                }
            );
        }

        function init() {
            JSNativeBridgeBindEv();
            boyBtnBindEv();
            maskBindEv();
            shareBtnBindEv();
            getInviteCode();
        }

        return {'init': init};
    })();
    components.init();
};
