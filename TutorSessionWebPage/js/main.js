/**
 * Created by yantianyu on 2015/3/31.
 */

/**
 * 学生画笔一.
 public static int PEN_STU_ONE = 1001;

 *//**
 * 学生画笔二.
 *//*
 public static int PEN_STU_TWO = 1002;

 *//**
 * 学生画笔三.
 *//*
 public static int PEN_STU_THREE = 1003;

 *//**
 * 老师画笔一.
 *//*
 public static int PEN_TEA_ONE = 2001;

 *//**
 * 老师画笔二.
 *//*
 public static int PEN_TEA_TWO = 2002;

 *//**
 * 老师画笔三.
 *//*
 public static int PEN_TEA_THREE = 2003;

 *//**
 * 橡皮.
 *//*
 public static int ERASER = 3001;

 *//**
 * 滚动.
 *//*
 public static int SCROLL = 3011;

 *//**
 * 图片操作——新增.
 *//*
 public static int PICTURE_ADD = 3021;
 */

var OperationType = {
    PEN_STU_ONE : 1001,         //black
    PEN_STU_TWO : 1002,         //blue
    PEN_STU_THREE : 1003,       //red
    PEN_TEA_ONE : 2001,         //black
    PEN_TEA_TWO : 2002,         //blue
    PEN_TEA_THREE : 2003,       //red
    ERASER : 3001,
    SCROLL : 3011,
    PICTURE_ADD : 3021
};

var UserType = {
    Student:0,
    Teacher:1
};
var UserInfo = {};
var $canvasOut = $("#canvasOut");
var $canvasIn = $("#canvasIn");
var ctxOut = $canvasOut[0].getContext("2d");
var ctxIn = $canvasIn[0].getContext("2d");
var isPaint = false;
var isEraser = false;
var pageInd = 1;
var pencilColor = 'black';

var canvasData = [];
var beginTime = new Date().getTime();
var exPointOut = {};
var exPointIn = {};
console.log('beginTime:',beginTime);

var commons = {
    drawStart:function(e){
        ctxOut.beginPath();

        isPaint = true;

        var mouseX = (e.pageX||e.touches[0].clientX) - $canvasOut[0].offsetLeft;
        var mouseY = e.pageY||e.touches[0].clientY + document.body.scrollTop;

        ctxOut.moveTo(mouseX, mouseY);
        //JSNativeBridge.send('js_msg_drawData', {beginPath:'beginPath'});
        //JSNativeBridge.send('js_msg_drawData', {sx : mouseX / document.body.clientWidth/0.9, sy : mouseY/document.body.clientHeight/3, lineWidth:ctxOut.lineWidth, color:ctxOut.strokeStyle });
        exPointOut = {
            x:mouseX/document.body.clientWidth/0.9,
            y:mouseY/document.body.clientHeight/3
        };
    },
    drawEnd:function(e){
        isPaint = false;
        ctxOut.closePath();
    },
    drawing:function(e){
        var temp = null;

        var mouseX = (e.pageX||e.touches[0].clientX) - $canvasOut[0].offsetLeft;
        var mouseY = e.pageY||e.touches[0].clientY + document.body.scrollTop;

        if(isPaint && !isEraser){
            //ctxOut.strokeStyle = "#f98989";
            ctxOut.lineTo(mouseX, mouseY);
            ctxOut.stroke();
            //JSNativeBridge.send('js_msg_drawData', {ex : mouseX/document.body.clientWidth/0.9, ey : mouseY/document.body.clientHeight/3, lineWidth:ctxOut.lineWidth, color:ctxOut.strokeStyle });
            temp = {
                type:commons.rtnCtxClrCode(ctxOut,'out'),
                time:new Date().getTime() - beginTime,
                points:[
                    exPointOut,
                    {
                        x:mouseX/document.body.clientWidth/0.9,
                        y:mouseY/document.body.clientHeight/3
                    }
                ]
            };
            canvasData.push(temp);
            //JSNativeBridge.send('js_msg_drawData',temp);
        }

        if(isPaint && isEraser){
            ctxOut.globalCompositeOperation = "destination-out";
            ctxOut.arc(mouseX, mouseY, 15, 0, Math.PI * 2);
            ctxOut.strokeStyle = "rgba(250,250,250,0)";
            ctxOut.fill();
            ctxOut.closePath();
            ctxOut.globalCompositeOperation = "source-over";

            ctxIn.globalCompositeOperation = "destination-out";
            ctxIn.arc(mouseX, mouseY, 15, 0, Math.PI * 2);
            ctxIn.strokeStyle = "rgba(250,250,250,0)";
            ctxIn.fill();
            ctxIn.closePath();
            ctxIn.globalCompositeOperation = "source-over";

            //JSNativeBridge.send('js_msg_drawData', {ex : mouseX/document.body.clientWidth/0.9, ey : mouseY/document.body.clientHeight/3, isEraser:true, radius:15 });
            temp = {
                type:OperationType.ERASER,
                time:new Date().getTime() - beginTime,
                points:[
                    exPointOut,
                    {
                        x:mouseX/document.body.clientWidth/0.9,
                        y:mouseY/document.body.clientHeight/3
                    }
                ]
            };
            canvasData.push(temp);
            //JSNativeBridge.send('js_msg_drawData',temp);
        }
        exPointOut = {
            x:mouseX/document.body.clientWidth/0.9,
            y:mouseY/document.body.clientHeight/3
        };
        e.preventDefault();
    },
    JSNativeMessage:function(id, content){
        switch(id){
            case "client_msg_drawData":
                commons.canInDraw($canvasIn[0].getContext("2d"),content);
                break;
            case 'client_msg_sendUserInfo':
                commons.updateUserInfo(content);
                commons.switchPage();
                break;
            case 'client_msg_sendTargetDeviceInfo':
                commons.updateUserInfo(content);
                break;
            case 'client_msg_loadLocaoPhoto':
                
                commons.loadPhoto(content);
                setTimeout(function(){
                    window.scrollTo(0,document.body.scrollTop+1);
                    window.scrollTo(0,document.body.scrollTop-1);
                },500);
                break;
            case 'client_msg_start_tutor':
                beginTime = new Date().getTime();
                compoments.toolBarBindEv();
                compoments.scrollBarBindEv();
                compoments.canvasBindEv();
                break;
            case 'client_msg_end_tutor':
                $('.closeSpan').removeClass('none');
                break;
            case 'client_msg_bind_photographEv':
                //$('.toolBar .photograph').on('click',commons.photographEV);
                break;
            default:break;
        }
    },
    canInDraw:function(ctxIn,drawData){
        var i = 0;
        if(drawData.type < 3000){
            switch(drawData.type){
                case 1001:
                case 2001:ctxIn.strokeStyle = 'black';break;
                case 1002:
                case 2002:ctxIn.strokeStyle = 'blue';break;
                case 1003:
                case 2003:ctxIn.strokeStyle = 'red';break;
                default :break;
            }
            ctxIn.beginPath();
            for(i = 0; i < drawData.points.length ; i++){
                if(i == 0){
                    ctxIn.moveTo(drawData.points[i].x * document.body.clientWidth*0.9, drawData.points[i].y * document.body.clientHeight*3);
                }else{
                    ctxIn.lineTo(drawData.points[i].x * document.body.clientWidth*0.9, drawData.points[i].y * document.body.clientHeight*3);
                }
            }
            ctxIn.stroke();
            ctxIn.closePath();
        }else if(drawData.type == OperationType.ERASER ){
            for(i = 0; i < drawData.points.length ; i++){
                ctxIn.beginPath();
                ctxIn.globalCompositeOperation = "destination-out";
                ctxIn.arc(drawData.points[i].x * document.body.clientWidth*0.9, drawData.points[i].y * document.body.clientHeight*3, 15, 0, Math.PI * 2);
                ctxIn.strokeStyle = "rgba(250,250,250,0)";
                ctxIn.fill();
                ctxIn.closePath();
                ctxIn.globalCompositeOperation = "source-over";

                ctxOut.beginPath();
                ctxOut.globalCompositeOperation = "destination-out";
                ctxOut.arc(drawData.points[i].x * document.body.clientWidth*0.9, drawData.points[i].y * document.body.clientHeight*3, 15, 0, Math.PI * 2);
                ctxOut.strokeStyle = "rgba(250,250,250,0)";
                ctxOut.fill();
                ctxOut.closePath();
                ctxOut.globalCompositeOperation = "source-over";
            }
            ctxIn.strokeStyle = pencilColor;
            ctxIn.strokeStyle = pencilColor;
        }else if(drawData.type == OperationType.SCROLL ){
            $.scrollTo({
                endY: drawData.points[0].y*document.body.clientHeight*3,
                duration: 100,
                callback: function () {
                    pageInd--;
                    compoments.scrollBarBindEv();
                    $('#currentPage').text(pageInd);
                }
            });
        }else if(drawData.type == OperationType.PICTURE_ADD){
            $('#photograph_tip').remove();
            var $img = $('<img src="'+drawData.url+'"/>');
            $img.css({
                position : 'absolute',
                top : drawData.points[0].x*document.body.clientWidth*0.9,
                left : drawData.points[0].y*document.body.clientHeight*3,
                width : (drawData.points[1].x - drawData.points[0].x) *document.body.clientWidth*0.9,
                height : (drawData.points[1].y - drawData.points[0].y) *document.body.clientHeight*3
            });
            $('body').append($img);
        }
        drawData.time = new Date().getTime() - beginTime;
        canvasData.push(drawData);
    },
    updateUserInfo:function(data){
        if(data.identity){
            UserInfo.identity = data.identity;
        }
        if(data.targetDeviceWidth){
            UserInfo.targetDeviceWidth = data.targetDeviceWidth;
        }
        if(data.targetDeviceHeight){
            UserInfo.targetDeviceHeight = data.targetDeviceHeight;
        }
    },
    switchPage:function(){
        if(UserInfo.identity == UserType.Teacher){
            $('.hangup, .photograph').addClass('none');
            //$('.rotate').removeClass('none');
            $('.toolBar .colorSwitch').css('margin-top','140%');
            $('.loadPhoto').append('<img id="photograph_tip" src="'+$('#templateFolderPath').text()+'/photograph_tip.jpg'+'" />');
        }
    },
    loadPhoto:function(data){
        $('#photograph_tip').remove();

        var $img = $('<img src="'+data.local_photo_src+'" />');
        $('.loadPhoto').append($img);

        setTimeout(function(){
                   window.scrollTo(0,document.body.scrollTop+1);
                   window.scrollTo(0,document.body.scrollTop-1);
        },500);
        
//        ctxIn.beginPath();
//        ctxIn.globalCompositeOperation = "destination-out";
//        ctxIn.arc(100, 100, 15, 0, Math.PI * 2);
//        ctxIn.strokeStyle = "rgba(250,250,250,0)";
//        ctxIn.fill();
//        ctxIn.closePath();
//        ctxIn.globalCompositeOperation = "source-over";
        
//        alert('PICTURE_ADD');
        
        var img = new Image();
        img.onload = function(){
            var offsetTop = $img.offset().top;
            var offsetLeft = $img.offset().left;
            var height = $img.height();
            var width = $img.width();
            
            //JSNativeBridge.send('js_msg_drawData',{
            //    type : OperationType.PICTURE_ADD,
            //    url : data.web_photo_src,
            //    time : new Date().getTime() - beginTime,
            //    points : [
            //          {
            //            x : offsetTop/document.body.clientWidth/0.9,
            //            y : offsetLeft/document.body.clientHeight/3
            //          },
            //          {
            //            x : (offsetTop + width)/document.body.clientWidth/0.9,
            //            y : (offsetLeft + height)/document.body.clientHeight/3
            //          }
            //    ]
            //});
        }
        img.src = data.local_photo_src;
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
    },
    rtnCtxClrCode:function(ctx, type){
        if(ctx.strokeStyle == '#000000' || ctx.strokeStyle == 'black' || ctx.strokeStyle == '#000000'){
            if(type == 'out' && UserInfo.identity == UserType.Teacher || type == 'in' && UserInfo.identity == UserType.Student)return OperationType.PEN_TEA_ONE;
            if(type == 'in' && UserInfo.identity == UserType.Teacher || type == 'out' && UserInfo.identity == UserType.Student)return OperationType.PEN_STU_ONE;
            return OperationType.PEN_TEA_ONE;
        }
        if(ctx.strokeStyle == '#0000ff' || ctx.strokeStyle == 'blue' || ctx.strokeStyle == '#0000FF'){
            if(type == 'out' && UserInfo.identity == UserType.Teacher || type == 'in' && UserInfo.identity == UserType.Student)return OperationType.PEN_TEA_TWO;
            if(type == 'in' && UserInfo.identity == UserType.Teacher || type == 'out' && UserInfo.identity == UserType.Student)return OperationType.PEN_STU_TWO;
            return OperationType.PEN_TEA_TWO;
        }
        if(ctx.strokeStyle == '#ff0000' || ctx.strokeStyle == 'red' || ctx.strokeStyle == '#FF0000'){
            if(type == 'out' && UserInfo.identity == UserType.Teacher || type == 'in' && UserInfo.identity == UserType.Student)return OperationType.PEN_TEA_THREE;
            if(type == 'in' && UserInfo.identity == UserType.Teacher || type == 'out' && UserInfo.identity == UserType.Student)return OperationType.PEN_STU_THREE;
            return OperationType.PEN_TEA_THREE;
        }
    },
    checkOtherBtn:function(target){
        if($('.toolBar .eraser').hasClass('hover') && !$(target).hasClass('eraser')){
            $('.toolBar .eraser').removeClass('hover');
            compoments.canvasBindEv();
        }
        if($('.colorSwitch').hasClass('hover') && !$(target).hasClass('colorSwitch')){
            $('.colorSwitch').removeClass('hover');
        }
    }
};

var compoments = {
    init:function(){
        this.toolBarBindEv();
        this.scrollBarBindEv();
        this.canvasBindEv();
        //this.JSNativeBrdgBindEv();
        this.hangupBindEv();
        this.avoidFixedBug();
    },
    hangupBindEv:function(){
        $('.toolBar .hangup').click(function(){
            compoments.toolBarUnBindEv();
            //JSNativeBridge.send('js_msg_hangup');
            setTimeout(function(){
                //JSNativeBridge.send('js_msg_total_drawData',canvasData);
            },500);
            $('.closeSpan').removeClass('none');
            compoments.canvasUnBindEv();
        });
        $('.closeSpan').click(function(){
            //JSNativeBridge.send('js_msg_close_tutor');
        });
        $('body').on('doubleTap',function(){
            return false;
        });
        $('.toolBar').on('touchmove',function(e){
            e.preventDefault();
        });
    },
    toolBarBindEv:function(){
        $(".toolBar .eraser").click(function(){
            commons.checkOtherBtn(this);
            if($(this).hasClass('hover')){
                $(this).removeClass('hover');
                $(this).find('img').eq(1).addClass('none').prev().removeClass('none');
                commons.showTips('pencil_tip');
                isEraser = false;
                ctxOut.strokeStyle = pencilColor;
                ctxIn.strokeStyle = pencilColor;
            }else{
                $(this).addClass('hover');
                $(this).find('img').eq(0).addClass('none').next().removeClass('none');
                commons.showTips('eraser_tip');
                isEraser = true;
            }
        });

        $(".colorli").click(function(){
            commons.checkOtherBtn(this);
            isEraser = false;
            $(".colorSwitch > img").addClass('none');
            $('.colorSwitch').removeClass('hover');
            if($(this).hasClass('blue')){
                $(".colorSwitch > img.blue").removeClass('none');
                ctxOut.strokeStyle = "blue";
                pencilColor = 'blue';
            }
            if($(this).hasClass('red')){
                $(".colorSwitch > img.red").removeClass('none');
                ctxOut.strokeStyle = "red";
                pencilColor = 'red';
            }
            if($(this).hasClass('black')){
                $(".colorSwitch > img.black").removeClass('none');
                ctxOut.strokeStyle = "black";
                pencilColor = 'black';
            }
        });

        $('.toolBar .photograph').click(function(){
            commons.checkOtherBtn(this);
            //JSNativeBridge.send('js_msg_photograph',{ beginTime : beginTime });
        });

        $('.colorSwitch > img').click(function(){
            if($('.colorSwitch').hasClass('hover')){
                $('.colorSwitch').removeClass('hover');
            }else{
                $('.colorSwitch').addClass('hover');
            }
        });

        $('.toolBar .hand').click(function(){
            commons.checkOtherBtn(this);
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

        $('.toolBar img').on('touchstart',function(){
            if(this.src.search('_hover') < 0){
                this.src = this.src.replace('.png','_hover.png');
            }
        }).on('touchmove',function(){
            this.src = this.src.replace('_hover.png','.png');
        }).on('touchend',function(){
            this.src = this.src.replace('_hover.png','.png');
        });
    },
    toolBarUnBindEv:function(){
        $(".toolBar .eraser").off();
        $(".colorli").off();
        $('.toolBar .photograph').off();
        $('.colorSwitch > img').off();
        $('.toolBar .hand').off();
        $('.toolBar img').off();
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
                    }
                });
            }
        });
        $(window).bind('scroll',function(){
            var i;
//            //console.log(document.body.scrollTop);
//            JSNativeBridge.send('js_msg_drawData',{
//                type:3011,
//                points:[
//                    {
//                        x:0,
//                        y: document.body.scrollTop/document.body.clientHeight/3
//                    }
//                ]
//            });
            for(i = 0; i < 10 ; i++){
                if( document.body.scrollTop > document.body.clientHeight * i && document.body.scrollTop < document.body.clientHeight * (i + 1)){
                    $('#currentPage').text(i+1);
                }
            }
        });
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
    },
    avoidFixedBug:function(){
        $(document).on('touchend',function(){
            setTimeout(function(){
                window.scrollTo(0,document.body.scrollTop+1);
                window.scrollTo(0,document.body.scrollTop-1);
            },500);
        });
//        $('.toolBar').on('touchend',function(){
//            window.scrollTo(0,document.body.scrollTop+1);
//            window.scrollTo(0,document.body.scrollTop-1);
//            return false;
//        });
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