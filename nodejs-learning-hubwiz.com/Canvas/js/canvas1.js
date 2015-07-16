/**
 * Created by yantianyu on 2015/4/14.
 */
define(function(require, exports, module){
    var JSNativeBridge = require('./JSNativeMessageBind');

    var $canvas = $("#canvas");
    var ctx = $canvas[0].getContext("2d");
    var isPaint = false;
    var isEraser = false;
    var pageInd = 1;
    //ctx.lineWidth = 3;

    $canvas.attr('width',document.body.clientWidth);
    $canvas.attr('height',document.body.clientHeight*3);

    function drawStart(e){
        ctx.beginPath();

        isPaint = true;

        var mouseX = e.pageX||e.touches[0].clientX - this.offsetLeft;
        var mouseY = e.pageY||e.touches[0].clientY - this.offsetTop;
        if(pageInd == 2){
            mouseY = e.pageY||e.touches[0].clientY - this.offsetTop + document.body.clientHeight;
        }
        if(pageInd == 3){
            mouseY = e.pageY||e.touches[0].clientY - this.offsetTop + document.body.clientHeight*2;
        }

        ctx.moveTo(mouseX, mouseY);
    }

    function drawEnd(e){
        isPaint = false;
    }

    function drawing(e){

        var mouseX = e.pageX||e.touches[0].clientX - this.offsetLeft;
        var mouseY = e.pageY||e.touches[0].clientY - this.offsetTop;
        if(pageInd == 2){
            mouseY = e.pageY||e.touches[0].clientY - this.offsetTop + document.body.clientHeight;
        }
        if(pageInd == 3){
            mouseY = e.pageY||e.touches[0].clientY - this.offsetTop + document.body.clientHeight*2;
        }

        if(isPaint && !isEraser){
            ctx.strokeStyle = "green";
            ctx.lineTo(mouseX, mouseY);
            ctx.stroke();
        }

        if(isPaint && isEraser){
            ctx.globalCompositeOperation = "destination-out";
            ctx.arc(mouseX, mouseY, 15, 0, Math.PI * 2);
            ctx.strokeStyle = "rgba(250,250,250,0)";
            ctx.fill();
            ctx.closePath();
            ctx.globalCompositeOperation = "source-over"
        }
        e.preventDefault();
    }

    $canvas.mousedown(drawStart);
    $canvas.mouseup(drawEnd);
    $canvas.mousemove(drawing);

    $canvas[0].addEventListener("touchstart",drawStart,false);
    $canvas[0].addEventListener("touchmove",drawing,false);
    $canvas[0].addEventListener("touchend",drawEnd,false);

    $(".toolBar button").click(function(){
        $(".toolBar button").removeClass("hover");
        $(this).addClass("hover");
    });

    $(".toolBar button#eraserBtn").click(function(){
        isEraser = true;
    });

    $(".toolBar button#pencilBtn").click(function(){
        isEraser = false;
    });

    $(".toolBar button#nextPage").click(function(){
        if(pageInd == 1) {
            $.scrollTo({
                endY: document.body.clientHeight,
                duration: 500,
                callback: function () {
                    pageInd = 2;
                }
            });
        }else{
            $.scrollTo({
                endY: document.body.clientHeight*2,
                duration: 500,
                callback: function () {
                    pageInd = 3;
                }
            });
        }
    });
    $(".toolBar button#prePage").click(function(){
        if(pageInd == 2) {
            $.scrollTo({
                endY: 0,
                duration: 500,
                callback: function () {
                    pageInd = 1;
                }
            });
        }else{
            $.scrollTo({
                endY: document.body.clientHeight,
                duration: 500,
                callback: function () {
                    pageInd = 2;
                }
            });
        }
    });
});