/**
 * Created by yantianyu on 2015/4/13.
 */
$(function(){
    var $canvas = $("canvas");
    var $canvas1 = $("#canvas1");
    var $canvas2 = $("#canvas2");

    $canvas.click(function(){
        alert($(this).attr("id"));
    });

    $canvas.attr('width',document.body.clientWidth);
    $canvas.attr('height',document.body.clientHeight);

    (function(){
        var ctx = $canvas1[0].getContext('2d');
        ctx.fillStyle="#FF0000";
        ctx.beginPath();
        ctx.arc(70,18,15,0,Math.PI*2,true);
        ctx.closePath();
        ctx.fill();
    })();

    (function(){
        var ctx = $canvas2[0].getContext('2d');
        ctx.fillStyle="#0000FF";
        ctx.beginPath();
        ctx.arc(170,18,15,0,Math.PI*2,true);
        ctx.closePath();
        ctx.fill();
    })();

});