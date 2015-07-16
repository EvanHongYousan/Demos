/**
 * Created by yantianyu on 2015/3/31.
 */
var $canvasOut = $("#canvasOut");
var $canvasIn = $("#canvasIn");
var ctx = $canvasOut[0].getContext("2d");
var isPaint = false;
var isEraser = false;
var pageInd = 1;
//ctx.lineWidth = 3;
var socket = io.connect();

var commons = {
    drawStart:function(e){
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
//        JSNativeBridge.send('drawData', {beginPath:'beginPath'});
//        JSNativeBridge.send('drawData', {sx : mouseX, sy : mouseY, lineWidth:ctx.lineWidth, color:ctx.strokeStyle });
        socket.emit('drawData',{beginPath:'beginPath'});
        socket.emit('drawData',{sx : mouseX, sy : mouseY, lineWidth:ctx.lineWidth, color:ctx.strokeStyle });
    },
    drawEnd:function(e){
        isPaint = false;
        ctx.closePath();
        socket.emit('drawData',{closePath:'closePath'});
    },
    drawing:function(e){
        var mouseX = e.pageX||e.touches[0].clientX - this.offsetLeft;
        var mouseY = e.pageY||e.touches[0].clientY - this.offsetTop;
        if(pageInd == 2){
            mouseY = e.pageY||e.touches[0].clientY - this.offsetTop + document.body.clientHeight;
        }
        if(pageInd == 3){
            mouseY = e.pageY||e.touches[0].clientY - this.offsetTop + document.body.clientHeight*2;
        }

        if(isPaint && !isEraser){
            //ctx.strokeStyle = "#f98989";
            ctx.lineTo(mouseX, mouseY);
            ctx.stroke();
//            JSNativeBridge.send('drawData', {ex : mouseX, ey : mouseY, lineWidth:ctx.lineWidth, color:ctx.strokeStyle });
            socket.emit('drawData',{ex : mouseX, ey : mouseY, lineWidth:ctx.lineWidth, color:ctx.strokeStyle });
        }

        if(isPaint && isEraser){
            ctx.globalCompositeOperation = "destination-out";
            ctx.arc(mouseX, mouseY, 15, 0, Math.PI * 2);
            ctx.strokeStyle = "rgba(250,250,250,0)";
            ctx.fill();
            ctx.closePath();
            ctx.globalCompositeOperation = "source-over";
//            JSNativeBridge.send('drawData', {ex : mouseX, ey : mouseY, isEraser:true, radius:15 });
            socket.emit('drawData',{ex : mouseX, ey : mouseY, isEraer:true, radius:15 });
        }
        e.preventDefault();
    },
    JSNativeMessage:function(id, content){
        switch(id){
            case "drawData":
                commons.canInDraw($canvasIn[0].getContext("2d"),content);
                break;
            default:break;
        }
    },
    canInDraw:function(ctxIn,drawData){
        if(drawData.color){
            ctxIn.strokeStyle = drawData.color;
        }
        if(drawData.beginPath){
            ctxIn.beginPath();
        }
        if(drawData.sx && drawData.sy){
            ctxIn.moveTo(drawData.sx, drawData.sy);
        }
        if(drawData.ex && drawData.ey){
            ctxIn.lineTo(drawData.ex, drawData.ey);
            ctxIn.stroke();
        }
        if(drawData.closePath){
            ctxIn.closePath();
        }
    },
    nextPage:function(){
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
    },
    prePage:function(){
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
    }
};

var compoments = {
    init:function(){
        this.btnBindEv();
        this.canvasBindEv();
        //this.JSNativeBrdgBindEv();
        this.socketBindEv();
    },
    btnBindEv:function(){
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
            commons.nextPage();
            socket.emit('nextPage');
        });
        $(".toolBar button#prePage").click(function(){
            commons.prePage();
            socket.emit('prePage');
        });
        $(".colorBtn").click(function(){
            isEraser = false;
            if($(this).hasClass('blue')){
                ctx.strokeStyle = "blue";
            }
            if($(this).hasClass('red')){
                ctx.strokeStyle = "red";
            }
            if($(this).hasClass('green')){
                ctx.strokeStyle = "green";
            }
        });
    },
    canvasBindEv:function(){
        $("#canvasOut, #canvasIn").attr('width',document.body.clientWidth);
        $("#canvasOut, #canvasIn").attr('height',document.body.clientHeight*3);

        $canvasOut.mousedown(commons.drawStart);
        $canvasOut.mouseup(commons.drawEnd);
        $canvasOut.mousemove(commons.drawing);

        $canvasOut[0].addEventListener("touchstart",commons.drawStart,false);
        $canvasOut[0].addEventListener("touchmove",commons.drawing,false);
        $canvasOut[0].addEventListener("touchend",commons.drawEnd,false);
    },
    JSNativeBrdgBindEv:function(){
        JSNativeBridge.init(commons.JSNativeMessage);
    },
    socketBindEv:function(){
        socket.on('connect',function(){
            console.log('与后台连接成功');
        });
        socket.on('drawData',function(drawData){
            if(drawData.isEraser){
                $canvasIn[0].getContext("2d").beginPath();
                $canvasIn[0].getContext("2d").globalCompositeOperation = "destination-out";
                $canvasIn[0].getContext("2d").arc(drawData.ex, drawData.ey, 15, 0, Math.PI * 2);
                $canvasIn[0].getContext("2d").strokeStyle = "rgba(250,250,250,0)";
                $canvasIn[0].getContext("2d").fill();
                $canvasIn[0].getContext("2d").closePath();
                $canvasIn[0].getContext("2d").globalCompositeOperation = "source-over";
            }else {
                if (drawData.color) {
                    $canvasIn[0].getContext("2d").strokeStyle = drawData.color;
                }
                if (drawData.beginPath) {
                    $canvasIn[0].getContext("2d").beginPath();
                }
                if (drawData.sx && drawData.sy) {
                    $canvasIn[0].getContext("2d").moveTo(drawData.sx, drawData.sy);
                }
                if (drawData.ex && drawData.ey) {
                    $canvasIn[0].getContext("2d").lineTo(drawData.ex, drawData.ey);
                    $canvasIn[0].getContext("2d").stroke();
                }
                if (drawData.closePath) {
                    $canvasIn[0].getContext("2d").closePath();
                }
            }
        });
        socket.on('nextPage',function(){
            commons.nextPage();
        });
        socket.on('prePage',function(){
            commons.prePage();
        });
    }
};

var main = {
    init:function(){
        compoments.init();
    }
};

$(function(){
    main.init();
});