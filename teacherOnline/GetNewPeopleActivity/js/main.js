/**
 *
 * Created by yantianyu on 15/9/15.
 */

$(document).ready(function(){
    $('.container').removeClass('none');
    $('.loader').remove();
    var components = (function(){
        function maskBindEv(){
            $('.mask').height($(document).height());
            $('.mask').on('touchmove',function(){
                return false;
            });
        }

        function init(){
            maskBindEv();
        }
        return {'init':init};
    })();
    components.init();
});
