/**
 * Created by yantianyu on 2015/11/23.
 */

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