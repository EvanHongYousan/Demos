/**
 *
 * Created by yantianyu on 15/9/15.
 */

$(document).ready(function () {
    $('.container').removeClass('none');
    $('.loader').remove();
    var components = (function () {
        function maskBindEv() {
            $('.mask').height($(document).height());
            $('.mask').on('touchmove', function () {
                return false;
            });
            $('.mask .cancel').click(function () {
                $('.mask').addClass('none');
            });
        }

        function dAjax() {
            setTimeout(function () {
                $('.mask .dialogGotInvite').removeClass('none');
                $('.mask').removeClass('none');
            }, 500);
        }

        function init() {
            dAjax();
            maskBindEv();
        }

        return {'init': init};
    })();
    components.init();
});
