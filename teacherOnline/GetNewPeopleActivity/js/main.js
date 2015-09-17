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

        var userId = null;

        function maskBindEv() {
            $('.mask').height($(document).height() + 56);
            $('.mask').on('touchmove', function () {
                return false;
            });
            $('.mask .close').click(function () {
                $('.mask').addClass('none');
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
                        alert('摇一摇啊摇一摇');
                    default :
                        break;
                }
            });
        }

        function shareBtnBindEv() {
            $('#btn_invite,#btn_gotoInvite,#btn_getAward').click(function () {
                JSNativeBridge.send('share', {
                    "content": '测测测是事实范德萨发打发时间来看之这里是content',
                    "title": '范德萨开发商打范德萨姐姐之这里是title',
                    "type": 0,
                    "image_url": 'http://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E8%8B%B9%E6%9E%9C&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&cs=3058169762,2736869049&os=508208126,2953768013&pn=3&rn=1&di=156292703630&ln=1948&fr=&fmq=1442386142859_R&ic=undefined&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=10&gsm=0&objurl=http%3A%2F%2Fpic.baike.soso.com%2Fp%2F20140126%2F20140126160937-284473768.jpg',
                    "target_url": location.href.toString().replace('index.html', 'invitepage.html') + '?username=' + Base64.encodeURI('啊测试测试') + "&invitecode=JLK789",
                    "target_url_forQQ": location.href.toString()
                });
            });
        }

        function doLottery() {
            $.getJSON(
                'http://192.168.0.164:9091/app/share/spreadServlet' + "?user_id=" + userId + "&method=" + 'myLottery' + '&callback=?',
                function (data) {
                    console.log(data);
                    $('.top .top-text span.count').text(data._APP_RESULT_OPT_DATA.count);
                    $('.mask .dialogGetAward').removeClass('none');
                    $('.mask .dialogGetAward .specialStyle').text(data._APP_RESULT_OPT_DATA.lottery);
                    $('.mask').removeClass('none');
                }
            );
        }

        function boyBtnBindEv() {
            $('.boy,.board').on('touchstart', function () {
                $('.board')[0].src = $('.board')[0].src.toString().replace('board.png', 'board_hover.png');
            });
            $('.boy,.board').on('touchend', function () {
                $('.board')[0].src = $('.board')[0].src.toString().replace('board_hover.png', 'board.png');
                $('.top .apple.hover').eq('0').addClass('drop').removeClass('hover');
                setTimeout(function () {
                    doLottery();
                }, 500);
            });
        }

        function getInviteCode() {
            try {
                userId = common.getReqPrm('parameter') ? JSON.parse(decodeURIComponent(common.getReqPrm('parameter'))).user_id : null;
            } catch (e) {
                console.log(e);
            }
            console.log(userId);

            $.getJSON(
                'http://192.168.0.164:9091/app/share/spreadServlet' + "?user_id=" + userId + "&method=" + 'myCount' + '&callback=?',
                function (data) {
                    $('.bottom p.row2 .invitecode').text(data._APP_RESULT_OPT_DATA.code);
                    $('.top .top-text span.count').text(data._APP_RESULT_OPT_DATA.count);
                    for (var i = 0; i < data._APP_RESULT_OPT_DATA.count; i++) {
                        $('.top .apple').eq(i).addClass('hover');
                    }

                    if (data._APP_RESULT_OPT_DATA.count == 0) {
                        $('.dialogGotInvite').removeClass('none');
                        $('.mask').removeClass('none');
                    }
                }
            );
        }

        function init() {
            JSNativeBridgeBindEv();
            getInviteCode();
            maskBindEv();
            shareBtnBindEv();
            boyBtnBindEv();
        }

        return {'init': init};
    })();
    components.init();
});
