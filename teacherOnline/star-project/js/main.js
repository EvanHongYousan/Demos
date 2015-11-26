/**
 * Created by yantianyu on 2015/11/23.
 */

/*animate test start*/
setInterval(function(){
    $('.scrollDiv').append('<p>恭喜<span class="name">梁春</span>抽中了<span class="award">“Apple Watch”</span></p>');
    $('.scrollDiv').scrollTo({
        endY: $('.scrollDiv')[0].scrollHeight,
        duration: 1000,
        callback: function () {
            console.log($('.scrollDiv')[0].scrollHeight);
        }
    });
},1500);

globalI = 1;
setInterval(function(){
    if(globalI == 13){
        globalI = 1;
    }
    $('.container .dialContainer  span').removeClass('active');
    $('.container .dialContainer  span.item'+globalI).addClass('active');
    globalI++;
},100);
/*animate test end*/

var components = (function(){
    function maskInit(){
        $('.mask').on('touchmove',function(){
            return false;
        })
    }

    function activityRulesBindEv(){
        $('.activity-rules').on('click',function(){
            $('.mask, .mask .activityRulesAlert').removeClass('none');
        });
        $('.activityRulesAlertBtn').on('click', function(){
            $('.mask, .mask .activityRulesAlert').addClass('none');
        })
    }

    function init(){
        maskInit();
        activityRulesBindEv();
    }

    return {
        init:init
    };
})();

components.init();