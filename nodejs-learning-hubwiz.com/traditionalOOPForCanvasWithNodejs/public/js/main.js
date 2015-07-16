/**
 * Created by yantianyu on 2015/3/31.
 */
var UserType = {
    Student:0,
    Teacher:1
};
var $canvasOut = $("#canvasOut");
var $canvasIn = $("#canvasIn");
var ctx = $canvasOut[0].getContext("2d");
var isPaint = false;
var isEraser = false;
var pageInd = 1;
var pencilColor = 'black';
var socket = io.connect();
var canvasData = [];
canvasData[0] = [];
var currentSecond = 0;

function Timer(){
    canvasData[currentSecond+1] = [];
    currentSecond++;
    setTimeout('Timer()',1000);
}
Timer();

var commons = {
    drawStart:function(e){
        ctx.beginPath();

        isPaint = true;

        var mouseX = e.pageX||e.touches[0].clientX - $canvasOut[0].offsetLeft;
        var mouseY = e.pageY||e.touches[0].clientY + document.body.scrollTop;

        ctx.moveTo(mouseX, mouseY);
        //JSNativeBridge.send('js_msg_drawData', {beginPath:'beginPath'});
        //JSNativeBridge.send('js_msg_drawData', {sx : mouseX, sy : mouseY, lineWidth:ctx.lineWidth, color:ctx.strokeStyle });
        canvasData[currentSecond].push({beginPath:'beginPath'});
        canvasData[currentSecond].push({sx : mouseX, sy : mouseY, color:ctx.strokeStyle });
    },
    drawEnd:function(e){
        isPaint = false;
        ctx.closePath();
        //JSNativeBridge.send('js_msg_drawData', {closePath:'closePath'});
        canvasData[currentSecond].push({closePath:'closePath'});
    },
    drawing:function(e){
        var mouseX = e.pageX||e.touches[0].clientX - $canvasOut[0].offsetLeft;
        var mouseY = e.pageY||e.touches[0].clientY + document.body.scrollTop;

        if(isPaint && !isEraser){
            //ctx.strokeStyle = "#f98989";
            ctx.lineTo(mouseX, mouseY);
            ctx.stroke();
            //JSNativeBridge.send('js_msg_drawData', {ex : mouseX, ey : mouseY, lineWidth:ctx.lineWidth, color:ctx.strokeStyle });
            canvasData[currentSecond].push({ex : mouseX, ey : mouseY, color:ctx.strokeStyle });
        }

        if(isPaint && isEraser){
            ctx.globalCompositeOperation = "destination-out";
            ctx.arc(mouseX, mouseY, 15, 0, Math.PI * 2);
            ctx.strokeStyle = "rgba(250,250,250,0)";
            ctx.fill();
            ctx.closePath();
            ctx.globalCompositeOperation = "source-over";
            //JSNativeBridge.send('js_msg_drawData', {ex : mouseX, ey : mouseY, isEraser:true, radius:15 });
            canvasData[currentSecond].push({ex : mouseX, ey : mouseY, isEraser:true });
        }
        e.preventDefault();
    },
    JSNativeMessage:function(id, content){
        switch(id){
            case "client_msg_drawData":
                commons.canInDraw($canvasIn[0].getContext("2d"),content);
                break;
            case 'client_msg_sendUserInfo':
                commons.switchPage(content);
                break;
            case 'client_msg_loadPhoto':
                commons.loadPhoto(content);
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
    switchPage:function(data){
        if(userInfo.identity == UserType.Teacher){
            $('.loadPhoto').attr('src','./images/photograph_tip.jpg');
        }
    },
    loadPhoto:function(data){
        $('.loadPhoto').attr('src',data.photo_src);
    },
    showTips:function(tipType){
        $('.tips img').addClass('none');
        switch(tipType){
            case 'hand_tip':
                $('.tips img').eq(0).removeClass('none');
                $('.tips').removeClass('none');
                setTimeout(function(){
                    $('.tips').addClass('none');
                    $('.tips img').eq(0).addClass('none');
                },1000);
                break;
            case 'pencil_tip':
                $('.tips img').eq(1).removeClass('none');
                $('.tips').removeClass('none');
                setTimeout(function(){
                    $('.tips').addClass('none');
                    $('.tips img').eq(1).addClass('none');
                },1000);
                break;
            case 'eraser_tip':
                $('.tips img').eq(2).removeClass('none');
                $('.tips').removeClass('none');
                setTimeout(function(){
                    $('.tips').addClass('none');
                    $('.tips img').eq(2).addClass('none');
                },1000);
                break;
            default :break;
        }
    }
};

var compoments = {
    init:function(){
        this.toolBarBindEv();
        this.scrollBarBindEv();
        this.canvasBindEv();
        this.JSNativeBrdgBindEv();
    },
    toolBarBindEv:function(){
        $('.toolBar .hangup').click(function(){
            //JSNativeBridge.send('js_msg_hangup');
            socket.emit('canvasData',JSON.stringify(canvasData));
            $('.closeSpan').removeClass('none');
            alert('存储完毕');
            console.log(canvasData);
        });

        $(".toolBar .eraser").click(function(){
            if($(this).hasClass('hover')){
                $(this).removeClass('hover');
                $(this).find('img').eq(1).addClass('none').prev().removeClass('none');
                commons.showTips('pencil_tip');
                isEraser = false;
                ctx.strokeStyle = pencilColor;
            }else{
                $(this).addClass('hover');
                $(this).find('img').eq(0).addClass('none').next().removeClass('none');
                commons.showTips('eraser_tip');
                isEraser = true;
            }
        });

        $(".colorli").click(function(){
            isEraser = false;
            $(".colorSwitch > img").addClass('none');
            $('.colorSwitch').removeClass('hover');
            if($(this).hasClass('blue')){
                $(".colorSwitch > img.blue").removeClass('none');
                ctx.strokeStyle = "blue";
                pencilColor = 'blue';
            }
            if($(this).hasClass('red')){
                $(".colorSwitch > img.red").removeClass('none');
                ctx.strokeStyle = "red";
                pencilColor = 'red';
            }
            if($(this).hasClass('black')){
                $(".colorSwitch > img.black").removeClass('none');
                ctx.strokeStyle = "black";
                pencilColor = 'black';
            }
        });

        $('.toolBar .photograph').click(function(){
            //JSNativeBridge.send('js_msg_photograph');
        });

        $('.colorSwitch > img').click(function(){
            if($('.colorSwitch').hasClass('hover')){
                $('.colorSwitch').removeClass('hover');
            }else{
                $('.colorSwitch').addClass('hover');
            }
        });

        $('.toolBar .hand').click(function(){
            if($(this).hasClass('hover')){
                $(this).removeClass('hover');
                compoments.canvasBindEv();
                commons.showTips('pencil_tip');
            }else{
                $(this).addClass('hover');
                compoments.canvasUnBindEv();
                commons.showTips('hand_tip');
            }
        });

        $('.toolBar img, .closeSpan > img').on('touchstart',function(){
            this.src = this.src.replace('.png','_hover.png');
        }).on('touchmove',function(){
            this.src = this.src.replace('_hover.png','.png');
        }).on('touchend',function(){
            this.src = this.src.replace('_hover.png','.png');
        });
    },
    scrollBarBindEv:function(){
        $(".scrollBar #nextPage").click(function(){
            if(pageInd < 3) {
                $('.scrollBar #nextPage, .scrollBar #prePage').off();
                $.scrollTo({
                    endY: document.body.clientHeight*pageInd,
                    duration: 500,
                    callback: function () {
                        pageInd++;
                        compoments.scrollBarBindEv();
                        $('#currentPage').text(pageInd);

                        canvasData[currentSecond].push({scroll:true,page:'nextPage'});
                    }
                });
            }
        });
        $(".scrollBar #prePage").click(function(){
            if(pageInd > 1) {
                $('.scrollBar #nextPage, .scrollBar #prePage').off();
                $.scrollTo({
                    endY: document.body.clientHeight*(pageInd-2),
                    duration: 500,
                    callback: function () {
                        pageInd--;
                        compoments.scrollBarBindEv();
                        $('#currentPage').text(pageInd);

                        canvasData[currentSecond].push({scroll:true,page:'prePage'});
                    }
                });
            }
        });
        $(window).bind('scroll',function(){
            //console.log($canvasOut[0].offsetLeft);
        })
    },
    canvasBindEv:function(){
        $canvasOut.mousedown(commons.drawStart);
        $canvasOut.mouseup(commons.drawEnd);
        $canvasOut.mousemove(commons.drawing);

        $canvasOut[0].addEventListener("touchstart",commons.drawStart,false);
        $canvasOut[0].addEventListener("touchmove",commons.drawing,false);
        $canvasOut[0].addEventListener("touchend",commons.drawEnd,false);
    },
    canvasUnBindEv:function(){
        $canvasOut.off('mousedown');
        $canvasOut.off('mouseup');
        $canvasOut.off('mousemove');
        $canvasOut[0].removeEventListener('touchstart',commons.drawStart);
        $canvasOut[0].removeEventListener('touchmove',commons.drawing);
        $canvasOut[0].removeEventListener('touchend',commons.drawEnd);
    },
    JSNativeBrdgBindEv:function(){
        //JSNativeBridge.init(commons.JSNativeMessage);
    }
};

var main = {
    loadUserInfo:function(){
        //JSNativeBridge.send('js_msg_getUserInfo','');
    },
    init:function(){

        $("#canvasOut, #canvasIn").attr('width',document.body.clientWidth*0.9);
        $("#canvasOut, #canvasIn").attr('height',document.body.clientHeight*3);

        compoments.init();
        this.loadUserInfo();
    }
};

$(function(){
    main.init();
});