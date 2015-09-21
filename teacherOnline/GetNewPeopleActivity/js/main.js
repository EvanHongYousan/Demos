/**
 *
 * Created by yantianyu on 15/9/15.
 */

$(document).ready(function () {
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
            userName = null,
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
                //if ($('.top .top-text .count').text() == '0') {
                //    window.scrollTo(0, 0);
                //    $('.invitenotice').removeClass('none');
                //    $('body').on('touchmove', function () {
                //        return false;
                //    });
                //}
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
                JSNativeBridge.send('share', {
                    "content": '测试范德萨范德萨反对萨芬双打content',
                    "title": '厕所就放假了开发建设独立开发建设的了放假了放假的title',
                    "type": 0,
                    "image_url": 'http://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E8%8B%B9%E6%9E%9C&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&cs=3058169762,2736869049&os=508208126,2953768013&pn=3&rn=1&di=156292703630&ln=1948&fr=&fmq=1442386142859_R&ic=undefined&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=10&gsm=0&objurl=http%3A%2F%2Fpic.baike.soso.com%2Fp%2F20140126%2F20140126160937-284473768.jpg',
                    "target_url": location.href.toString().replace('index.html', 'invitepage.html') + '?username=' + Base64.encodeURI('范德萨发叫撒啊哈哈') + "&invitecode=JLK789",
                    "target_url_forQQ": location.href.toString().replace('index.html', 'invitepage.html') + '&username=' + Base64.encodeURI('范德萨发叫撒啊哈哈') + "&invitecode=JLK789"
                });
            });
            $('#btn_share').click(function () {
                JSNativeBridge.send('share', {
                    "content": '法律电视剧啊放假啊范德萨杰弗里斯大法律的撒酒疯离开的时间啊content',
                    "title": '浪费简单来说减肥福建电视了放假了是大浮生六记福利时间发了手机费了title',
                    "type": 0,
                    "image_url": 'http://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E8%8B%B9%E6%9E%9C&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&cs=3058169762,2736869049&os=508208126,2953768013&pn=3&rn=1&di=156292703630&ln=1948&fr=&fmq=1442386142859_R&ic=undefined&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=10&gsm=0&objurl=http%3A%2F%2Fpic.baike.soso.com%2Fp%2F20140126%2F20140126160937-284473768.jpg',
                    "target_url": location.href.toString().replace('index.html', 'supershare.html') + '?username=' + Base64.encodeURI('放了多久啊') + "&award=898元券",
                    "target_url_forQQ": location.href.toString().replace('index.html', 'supershare.html') + '&username=' + Base64.encodeURI('放了多久啊') + "&award=898元券"
                });
            });
        }

        function doLottery() {
            $.getJSON(
                'http://192.168.0.164:9091/app/share/spreadServlet' + "?user_id=15397048023@192.168.0.164&method=" + 'myLottery' + '&callback=?',
                function (data) {
                    console.log(data);
                    if (data._APP_RESULT_OPT_CODE != 110) {
                        return;
                    }

                    $('.top .apple.hover').eq('0').addClass('drop').removeClass('hover');

                    setTimeout(function () {
                        if (data._APP_RESULT_OPT_DATA.count == 0 && data._APP_RESULT_OPT_DATA.residue_count == 0) {
                            $('.top .top-text span.count').text(data._APP_RESULT_OPT_DATA.count);
                            $('.dialogFinalAward .specialStyle').text(data._APP_RESULT_OPT_DATA.lottery);
                            $('.dialogFinalAward').removeClass('none');
                            $('.mask').removeClass('none');
                        } else {
                            $('.top .top-text span.count').text(data._APP_RESULT_OPT_DATA.count);
                            $('.mask .dialogGetAward').removeClass('none');
                            $('.mask .dialogGetAward .specialStyle').text(data._APP_RESULT_OPT_DATA.lottery);
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

            $.getJSON(
                'http://192.168.0.164:9091/app/share/spreadServlet' + "?user_id=15397048023@192.168.0.164" + "&method=" + 'myCount' + '&callback=?',
                function (data) {
                    console.log(data);
                    if (data._APP_RESULT_OPT_CODE != 110) {
                        return;
                    }
                    $('.bottom p.row2 .invitecode').text(data._APP_RESULT_OPT_DATA.code);
                    $('.top .top-text span.count').text(data._APP_RESULT_OPT_DATA.count);
                    userName = data._APP_RESULT_OPT_DATA.my_name;
                    if (data._APP_RESULT_OPT_DATA.residue_count != undefined) {
                        for (var i = 0; i < (6 - data._APP_RESULT_OPT_DATA.residue_count - data._APP_RESULT_OPT_DATA.count); i++) {
                            if (i == 5) {
                                $('.boy,.board').off('touchstart').off('touchend');
                                $('.top .apple').addClass('drop');
                                $('.bottom .row3').text('大奖领完啦~');
                                $('.bottom .row4').text('邀请更多好友来“摘果实”吧!');
                                $('.top .top-text').remove();
                                $('#btn_invite').css('margin-top', '-40px');
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
            getInviteCode();
            maskBindEv();
            shareBtnBindEv();
        }

        return {'init': init};
    })();
    components.init();
});
