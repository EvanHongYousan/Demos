/**
 * Created by yantianyu on 2015/4/13.
 */
define(function(require, exports, module){
    var socket = require('./socket');

    var $canvas = $("#canvas");
    var ctx = $canvas[0].getContext("2d");
    var isPaint = false;

    $canvas.attr('width',document.body.clientWidth);
    $canvas.attr('height',document.body.clientHeight);

    function drawStart(e){

        isPaint = true;

        var mouseX = (e.pageX||e.changedTouches[0].clientX) - this.offsetLeft;
        var mouseY = (e.pageY||e.changedTouches[0].clientY) - this.offsetTop;

        ctx.beginPath();
        ctx.moveTo(mouseX, mouseY);
        socket.emit('message',JSON.stringify({sx:mouseX,sy:mouseY}));
    }

    function drawEnd(e){
        socket.emit('message',JSON.stringify({closePath:"closePath"}));
        ctx.closePath();
        isPaint = false;
    }

    function drawing(e){
        var mouseX = (e.pageX||e.changedTouches[0].clientX) - this.offsetLeft;
        var mouseY = (e.pageY||e.changedTouches[0].clientY) - this.offsetTop;

        if(isPaint){
            ctx.lineTo(mouseX, mouseY);
            ctx.stroke();
            socket.emit('message',JSON.stringify({ex:mouseX,ey:mouseY}));
        }
    }

    exports.allowDraw = function(){
        $canvas.mousedown(drawStart);
        $canvas.mouseup(drawEnd);
        $canvas.mousemove(drawing);

        $canvas[0].addEventListener("touchstart",drawStart,false);
        $canvas[0].addEventListener("touchmove",drawing,false);
        $canvas[0].addEventListener("touchend",drawEnd,false);
    }
});