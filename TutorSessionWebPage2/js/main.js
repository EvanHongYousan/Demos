/**
 * Created by yantianyu on 2015/3/31.
 */

var OperationType = {
    PEN_STU_ONE : 1001,         //black, #202020
    PEN_STU_TWO : 1002,         //blue, #2477C2
    PEN_STU_THREE : 1003,       //red, #D61910
    PEN_TEA_ONE : 2001,         //black, #202020
    PEN_TEA_TWO : 2002,         //blue, #2477C2
    PEN_TEA_THREE : 2003,       //red, #D61910
    ERASER : 3001,
    SCROLL : 3011,
    PICTURE_ADD : 3021,
    PICTURE_ROTATE : 3022,
    PICTURE_ZOOM : 3023,

    ZOOM_STATUS_NORMAL : 0,
    ZOOM_STATUS_LARGE : 1
};

var UserType = {
    Student:0,
    Teacher:1
};

var configMap = (function(){

    var screenWidth = document.body.clientWidth * 0.9;
    var screenHeight = screenWidth / 4 * 3;
    var canvasWidth = screenWidth;
    var screens = 20;
    var canvasHeight =  screenHeight * screens;
    var initDif = document.body.clientHeight - screenHeight;

    var initPenWidth = 4 / 1180 * screenWidth;
    var initEraserWidth = 40 / 1180 * screenWidth;

    var pic_padding = 20 / 1180 * screenWidth;
    var pic_nor_width = 600 / 1180 * screenWidth;
    var pic_nor_height = pic_nor_width * 0.75;
    var pic_big_width = screenWidth - 2 * pic_padding;
    var pic_big_height = screenHeight - 2 * pic_padding;

    return {
        screenWidth : screenWidth,
        screenHeight : screenHeight,
        canvasWidth : canvasWidth,
        canvasHeight : canvasHeight,
        screens : screens,
        initDif : initDif,
        tempScrollTop : null,
        tempTargetScrollTop : null,
        lastOperateTime : null,
        lastPicBotmY : 0,
        lastPicBotmY_cache : 0,
        pageSet : null,
        initPenWidth : initPenWidth,
        initEraserWidth : initEraserWidth,
        photo_shift : [],
        pic_padding : pic_padding,
        pic_nor_width : pic_nor_width,
        pic_nor_height : pic_nor_height,
        pic_big_width : pic_big_width,
        pic_big_height : pic_big_height,
        ctxOutEraser_cache : []
    };

})();

var UserInfo = {};
var $canvasOut = $("#canvasOut");
var $canvasIn = $("#canvasIn");
var ctxOut = $canvasOut[0].getContext("2d");
var ctxIn = $canvasIn[0].getContext("2d");
var isPaint = false;
var isEraser = false;
var pageInd = 1;
var screens = 20;
var isScrollBtnClicked = false;

var pencilColor = '#202020';

var canvasData = [];
var beginTime = new Date().getTime();
var exPointOut = {};
var exPointIn = {};
console.log('beginTime:',beginTime);
var stillDrawing = new Date().getTime();

var commons = {
    drawStart:function(e){

        configMap.lastOperateTime = new Date().getTime();       //刷新最后操作时间

        $('.colorSwitch.hover').removeClass('hover');

        ctxOut.beginPath();
        
        ctxOut.strokeStyle = pencilColor;
        ctxIn.strokeStyle = pencilColor;
        
        isPaint = true;

        var mouseX = (e.pageX||e.touches[0].clientX) - $canvasOut[0].offsetLeft;
        var mouseY = e.pageY||e.touches[0].clientY + document.body.scrollTop;

        ctxOut.moveTo(mouseX, mouseY);
        ctxIn.moveTo(mouseX, mouseY);
        exPointOut = commons.embPointToSend(mouseX, mouseY);
    },
    drawEnd:function(e){
        
        configMap.lastOperateTime = new Date().getTime();       //刷新最后操作时间

        isPaint = false;
        ctxOut.closePath();
        ctxIn.closePath();
        commons.clearCfMpCTXOutEraCache();
    },
    drawing:function(e){
        
        configMap.lastOperateTime = new Date().getTime();       //刷新最后操作时间

        var temp = null;

        var mouseX = (e.pageX||e.touches[0].clientX) - $canvasOut[0].offsetLeft;
        var mouseY = e.pageY||e.touches[0].clientY + document.body.scrollTop;
        
        if ( mouseY > configMap.lastPicBotmY ) {
            configMap.lastPicBotmY_cache = configMap.lastPicBotmY;
            configMap.lastPicBotmY = mouseY;
        }

        if(isPaint && !isEraser){
            ctxOut.lineWidth = configMap.initPenWidth;
            ctxOut.lineTo(mouseX, mouseY);
            ctxOut.stroke();
            temp = [{
                type:commons.rtnCtxClrCode(ctxOut,'out'),
                time:new Date().getTime() - beginTime,
                identity: UserInfo.identity,
                width : configMap.initPenWidth / configMap.screenWidth,
                points:[
                    exPointOut,
                    commons.embPointToSend(mouseX, mouseY)
                ]
            }];
            canvasData[canvasData.length] = temp;
            //JSNativeBridge.send('js_msg_drawData',temp);
        }

        if(isPaint && isEraser){
            
            ctxOut.globalCompositeOperation = "destination-out"
            ctxOut.lineWidth = configMap.initEraserWidth;
            ctxOut.lineTo(mouseX, mouseY);
            ctxOut.stroke();
            ctxOut.globalCompositeOperation = "source-over";
            ctxOut.lineWidth = 1;
            
            ctxIn.globalCompositeOperation = "destination-out"
            ctxIn.lineWidth = configMap.initEraserWidth;
            ctxIn.lineTo(mouseX, mouseY);
            ctxIn.stroke();
            ctxIn.globalCompositeOperation = "source-over";
            ctxIn.lineWidth = 1;

            temp = [{
                type:OperationType.ERASER,
                time:new Date().getTime() - beginTime,
                identity: UserInfo.identity,
                width : configMap.initEraserWidth / configMap.screenWidth,
                points:[
                    exPointOut,
                    commons.embPointToSend(mouseX, mouseY)
                ]
            }];
            canvasData[canvasData.length] = temp;
            //JSNativeBridge.send('js_msg_drawData',temp);
        }
        exPointOut = commons.embPointToSend(mouseX, mouseY);
        e.preventDefault();
    },
    JSNativeMessage:function(id, content){
        switch(id){
            case 'client_msg_drawData':
                commons.canInDraw($canvasIn[0].getContext('2d'),content);
                break;
            case 'client_msg_sendUserInfo':
                commons.updateUserInfo(content);
                commons.switchPage();
                break;
            case 'client_msg_sendTargetDeviceInfo':
                commons.updateUserInfo(content);
                break;
            case 'client_msg_loadLocaoPhoto':
                if( content.web_photo_src ) {
                    commons.loadPhoto(content);
                } else if ( content.web_photos_srcs ) {
                    configMap.photo_shift = content.web_photos_srcs;
                    commons.loadPhotos();
                }
                setTimeout(function(){
                    window.scrollTo(0,document.body.scrollTop+1);
                    window.scrollTo(0,document.body.scrollTop-1);
                },500);
                break;
            case 'client_msg_start_tutor':
                $('#asd').addClass('asd');
                $canvasOut.off('mousemove');
                $canvasOut[0].removeEventListener('touchmove',commons.forbidScroll);

                beginTime = new Date().getTime();
                compoments.toolBarBindEv();
                compoments.scrollBarBindEv();
                compoments.canvasBindEv();
                $('.opacity50').removeClass('opacity50');
                break;
            case 'client_msg_end_tutor':
                $('.closeSpan').removeClass('none');
                compoments.toolBarUnBindEv();
                compoments.canvasUnBindEv();
                $('.toolBar .photograph, .toolBar .colorSwitch, .toolBar .eraser, .toolBar .hand').addClass('opacity50');
                setTimeout(function(){
                    //JSNativeBridge.send('js_msg_total_drawData',canvasData);
                },200);
                break;
            case 'client_msg_bind_photographEv':
                break;
            default:break;
        }
    },
    canInDraw:function(ctxIn,drawData){
        stillDrawing = new Date().getTime();
        var i = 0, j = 0, temp = {};
        for( j = 0; j < drawData.length ; j++){
            if(drawData[j].type < 3000){

                if( (new Date().getTime() - configMap.lastOperateTime > 2000) && UserInfo.identity != UserType.Teacher ){
                    $.scrollTo({
                        endY: configMap.tempTargetScrollTop,
                        duration: 100,
                        callback: function () {
                        }
                    });
                }

                switch(drawData[j].type){
                    case OperationType.PEN_STU_ONE:
                    case OperationType.PEN_TEA_ONE:
                        ctxIn.strokeStyle = '#202020';break;
                    case OperationType.PEN_STU_TWO:
                    case OperationType.PEN_TEA_TWO:
                        ctxIn.strokeStyle = '#2477C2';break;
                    case OperationType.PEN_STU_THREE:
                    case OperationType.PEN_TEA_THREE:
                        ctxIn.strokeStyle = '#D61910';break;
                    default :break;
                }
                ctxIn.beginPath();
                ctxIn.lineWidth = drawData[j].width * configMap.screenWidth;
                for(i = 0; i < drawData[j].points.length ; i++){

                    temp = commons.embPointToDraw(drawData[j].points[i].x, drawData[j].points[i].y);

                    if(i == 0){
                        ctxIn.moveTo(temp.x, temp.y);
                    }else{
                        ctxIn.lineTo(temp.x, temp.y);
                        $('#drawingPencil').removeClass('none').css({
                            top:temp.y - 50,
                            left:temp.x + 55
                        });
                        if ( temp.y > configMap.lastPicBotmY ) {
                            configMap.lastPicBotmY_cache = configMap.lastPicBotmY;
                            configMap.lastPicBotmY = temp.y;
                        }
                        commons.hiddenPencil();
                    }
                }
                ctxIn.stroke();
                ctxIn.closePath();
            }else if(drawData[j].type == OperationType.ERASER ){

                ctxIn.beginPath();
                ctxIn.globalCompositeOperation = "destination-out"
                ctxIn.lineWidth = drawData[j].width * configMap.screenWidth;

                ctxOut.beginPath();
                ctxOut.globalCompositeOperation = "destination-out"
                ctxOut.lineWidth = drawData[j].width * configMap.screenWidth;

                for(i = 0; i < drawData[j].points.length ; i++){

                    temp = commons.embPointToDraw(drawData[j].points[i].x, drawData[j].points[i].y);

                    if(i == 0){
                        ctxIn.moveTo(temp.x , temp.y );
                        if ( !isPaint ) {
                            ctxOut.moveTo(temp.x , temp.y );
                        } else {
                            configMap.ctxOutEraser_cache.push( { x : temp.x, y : temp.y, width : drawData[j].width * configMap.screenWidth } );
                        }
                    }else{
                        ctxIn.lineTo(temp.x, temp.y);
                        if ( !isPaint ) {
                            ctxOut.lineTo(temp.x, temp.y);
                        } else {
                            configMap.ctxOutEraser_cache.push( { x : temp.x, y : temp.y, width : drawData[j].width * configMap.screenWidth } );
                        }
                    }
                    
                }

                ctxIn.stroke();
                ctxIn.closePath();
                ctxIn.globalCompositeOperation = "source-over";

                ctxOut.stroke();
                ctxOut.closePath();
                ctxOut.globalCompositeOperation = "source-over";

                ctxIn.strokeStyle = pencilColor;
                ctxOut.strokeStyle = pencilColor;
            }else if(drawData[j].type == OperationType.SCROLL ){
                if(UserInfo.identity != UserType.Teacher){
                    configMap.tempTargetScrollTop = drawData[j].points[0].y * configMap.screenHeight ;
                    $.scrollTo({
                        endY: drawData[j].points[0].y * configMap.screenHeight ,
                        duration: 100,
                        callback: function () {}
                    });
                }
            }else if(drawData[j].type == OperationType.PICTURE_ADD){
                $('#photograph_tip').remove();
                var $imgContainer = $('<div class="imgContainer"><img src="'+drawData[j].url+'"/><span class="btnZoomIn"></span></div>');
                $imgContainer.css({
                    position : 'absolute',
                    top : drawData[j].points[0].y*configMap.screenHeight ,
                    left : drawData[j].points[0].x*configMap.screenWidth + $canvasOut[0].offsetLeft ,
                    width : (drawData[j].points[1].x - drawData[j].points[0].x) * configMap.screenWidth ,
                    //height : (drawData[j].points[1].y - drawData[j].points[0].y) * configMap.screenHeight
                });

                configMap.lastPicBotmY_cache = configMap.lastPicBotmY;
                configMap.lastPicBotmY = drawData[j].points[1].y * configMap.screenHeight;
                $('body').append($imgContainer);

                $.scrollTo({
                    endY: drawData[j].points[0].y*configMap.screenHeight -50 ,
                    duration: 100,
                    callback: function () {
                       compoments.scrollBarBindEv();
                       setTimeout(function(){
                           isScrollBtnClicked = false;
                           commons.scrollCanvas();
                       }, 200);
                    }
                });
            }else if(drawData[j].type == OperationType.PICTURE_ZOOM){
                var $targetImgContainer = null;
                $('.imgContainer').each(function(){
                    if( $(this).find('img').attr('src') == drawData[j].url ) {
                        $targetImgContainer = $(this);
                    }
                });
                if ( drawData[j].zoom == OperationType.ZOOM_STATUS_LARGE ) {
                    $targetImgContainer.find('.btnZoomIn')[0].className = 'btnZoomOut';

                    $targetImgContainer.css({
                        maxWidth : configMap.pic_big_width,
                        maxHeight : configMap.pic_big_height
                    });
                    $targetImgContainer.find('img').css({
                        maxWidth : configMap.pic_big_width,
                        maxHeight : configMap.pic_big_height
                    });

                } else if ( drawData[j].zoom == OperationType.ZOOM_STATUS_NORMAL ) {
                    $targetImgContainer.find('.btnZoomOut')[0].className = 'btnZoomIn';

                    $targetImgContainer.css({
                        maxWidth : configMap.pic_nor_width,
                        maxHeight : configMap.pic_nor_height
                    });
                    $targetImgContainer.find('img').css({
                        maxWidth : configMap.pic_nor_width,
                        maxHeight : configMap.pic_nor_height
                    });
                    
                }
                $targetImgContainer.css({
                    position : 'absolute',
                    top : drawData[j].points[0].y*configMap.screenHeight ,
                    left : drawData[j].points[0].x*configMap.screenWidth + $canvasOut[0].offsetLeft ,
                    width : (drawData[j].points[1].x - drawData[j].points[0].x) * configMap.screenWidth ,
                    //height : (drawData[j].points[1].y - drawData[j].points[0].y) * configMap.screenHeight
                });
            }
            drawData[j].time = new Date().getTime() - beginTime;
            canvasData[canvasData.length] = drawData[j];
        }
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
            $('.toolBar .colorSwitch').css('margin-top','120%');
            $('.toolBar span').css('margin-top','80%');
            $('.loadPhoto').append('<img id="photograph_tip" src="'+$('#templateFolderPath').text()+'/photograph_tip.jpg'+'" />');
            
            pencilColor = '#2477C2';

            $(".colorSwitch > img").addClass('none');
            $(".colorSwitch > img.blue").removeClass('none');
        }
    },
    loadPhoto:function(data){
        var i = 0;
        $('#photograph_tip').remove();

        for( i = 19; i >= 0 ; i-- ){
            if ( configMap.lastPicBotmY > configMap.pageSet[i] ) {
                configMap.lastPicBotmY_cache = configMap.lastPicBotmY;
                configMap.lastPicBotmY = configMap.pageSet[i+1];
                break;
            }
        }

        var $imgContainer = $('<div class="imgContainer"><img src="'+data.web_photo_src+'" /><span class="btnZoomIn"></span></div>');
        var $img = $imgContainer.find('img');
        $imgContainer.css({
            position : 'absolute',
            left : document.body.clientWidth * 0.1 + configMap.pic_padding,
            top : configMap.lastPicBotmY + ( configMap.lastPicBotmY == 0 ? 50 : 10 ) ,
            width : '100%',
            maxWidth : configMap.pic_nor_width
        });
        $img.css({
            maxWidth : configMap.pic_nor_width,
            maxHeight : configMap.pic_nor_height
        });
        $('body').append($imgContainer);

        $.scrollTo({
            endY: configMap.lastPicBotmY + ( configMap.lastPicBotmY == 0 ? 50 : 10 ) - 50 ,
            duration: 100,
            callback: function () {
               compoments.scrollBarBindEv();
               setTimeout(function(){
                   isScrollBtnClicked = false;
                   commons.scrollCanvas();
               }, 200);
            }
        });

        setTimeout(function(){
               window.scrollTo(0,document.body.scrollTop + 1);
               window.scrollTo(0,document.body.scrollTop - 1);
        },500);
        
        var img = new Image();
        img.onload = function(){
            var offsetTop = $imgContainer.offset().top;
            var offsetLeft = $imgContainer.offset().left;
            var height = $imgContainer.find('img').css('position','static').height();
            var width = $imgContainer.width();

            $imgContainer.find('img').css('position','absolute')

            configMap.lastPicBotmY_cache = configMap.lastPicBotmY;
            configMap.lastPicBotmY = offsetTop + height;
            
            //JSNativeBridge.send('js_msg_drawData',[{
            //    type : OperationType.PICTURE_ADD,
            //    url : data.web_photo_src,
            //    time : new Date().getTime() - beginTime,
            //    points : [
            //          {
            //            x : (offsetLeft - $canvasOut[0].offsetLeft)/configMap.screenWidth,
            //            y : (offsetTop)/configMap.screenHeight
            //          },
            //          {
            //            x : (offsetLeft - $canvasOut[0].offsetLeft + width )/configMap.screenWidth,
            //            y : (offsetTop + height)/configMap.screenHeight
            //          }
            //    ]
            //}]);

            commons.loadPhotos();
        }
        img.src = data.web_photo_src;
    },
    loadPhotos : function(){
        var data = {}, temp = configMap.photo_shift.shift();

        if ( temp == undefined) { return; }

        data.web_photo_src = temp;
        commons.loadPhoto(data);

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
        if(ctx.strokeStyle == '#202020' || ctx.strokeStyle == '#202020'){
            if(type == 'out' && UserInfo.identity == UserType.Teacher || type == 'in' && UserInfo.identity == UserType.Student)return OperationType.PEN_TEA_ONE;
            if(type == 'in' && UserInfo.identity == UserType.Teacher || type == 'out' && UserInfo.identity == UserType.Student)return OperationType.PEN_STU_ONE;
            return OperationType.PEN_TEA_ONE;
        }
        if(ctx.strokeStyle == '#2477C2' || ctx.strokeStyle == '#2477c2'){
            if(type == 'out' && UserInfo.identity == UserType.Teacher || type == 'in' && UserInfo.identity == UserType.Student)return OperationType.PEN_TEA_TWO;
            if(type == 'in' && UserInfo.identity == UserType.Teacher || type == 'out' && UserInfo.identity == UserType.Student)return OperationType.PEN_STU_TWO;
            return OperationType.PEN_TEA_TWO;
        }
        if(ctx.strokeStyle == '#D61910' || ctx.strokeStyle == '#d61910'){
            if(type == 'out' && UserInfo.identity == UserType.Teacher || type == 'in' && UserInfo.identity == UserType.Student)return OperationType.PEN_TEA_THREE;
            if(type == 'in' && UserInfo.identity == UserType.Teacher || type == 'out' && UserInfo.identity == UserType.Student)return OperationType.PEN_STU_THREE;
            return OperationType.PEN_TEA_THREE;
        }
    },
    checkOtherBtn:function(target){
        if($('.toolBar .eraser').hasClass('hover') && !$(target).hasClass('eraser')){
            $('.toolBar .eraser').removeClass('hover');
            compoments.canvasBindEv();
            //$('.toolBar .eraser img').eq(0).removeClass('none').next().addClass('none');
            isEraser =false;
        }
        if($('.colorSwitch').hasClass('hover') && !$(target).hasClass('colorSwitch')){
            $('.colorSwitch').removeClass('hover');
        }
        if($('.toolBar .hand').hasClass('hover') && !$(target).hasClass('hand')){
            $('.toolBar .hand').removeClass('hover');
            compoments.canvasBindEv();
        }
        if($('.toolBar .colorSwitch').hasClass('focus') && !$(target).hasClass('colorSwitch')){
            $('.toolBar .colorSwitch').removeClass('focus')
        }
    },
    hiddenPencil:function(){
        if( (new Date().getTime() - stillDrawing) > 900 ){
            $('#drawingPencil').addClass('none');
        } else{
            setTimeout('commons.hiddenPencil()',1000);
        }
    },
    scrollCanvas:function(){
        var i, temp;

        if ( isScrollBtnClicked ) return;
        if ( document.body.scrollTop == configMap.tempScrollTop ) return;
        configMap.tempScrollTop = document.body.scrollTop;

        temp = [{
            type:OperationType.SCROLL,
            time:new Date().getTime() - beginTime,
            points:[
                {
                    x:0,
                    y: (document.body.scrollTop )/configMap.screenHeight
                }
            ]
        }];
        //JSNativeBridge.send('js_msg_drawData',temp);
        canvasData[canvasData.length] = temp;
    },
    embPointToSend:function(x, y){
        return { x : x / configMap.screenWidth, y : (y ) / configMap.screenHeight };
    },
    embPointToDraw:function(x, y){
        return { x : x * configMap.screenWidth, y : y * configMap.screenHeight  };
    },
    forbidScroll:function(e){
        e.preventDefault();
    },
    clearCfMpCTXOutEraCache:function(){

        if ( configMap.ctxOutEraser_cache == [] ) { return false; }

        var i = 0;

        ctxOut.beginPath();
        ctxOut.globalCompositeOperation = "destination-out"

        for ( i = 0; i < configMap.ctxOutEraser_cache.length; i++ ){
            ctxOut.lineWidth = configMap.ctxOutEraser_cache[i].width;
            if ( i == 0 ){
                ctxOut.moveTo(configMap.ctxOutEraser_cache[i].x, configMap.ctxOutEraser_cache[i].y);
            }else{
                ctxOut.lineTo(configMap.ctxOutEraser_cache[i].x, configMap.ctxOutEraser_cache[i].y);
            }
        }

        ctxOut.stroke();
        ctxOut.closePath();
        ctxOut.globalCompositeOperation = "source-over";
        configMap.ctxOutEraser_cache = [];
        ctxOut.strokeStyle = pencilColor;
    }
};

var compoments = {
    init:function(){
        this.toolBarBindEv();
        this.scrollBarBindEv();
        this.canvasBindEv();
        this.JSNativeBrdgBindEv();
        this.hangupBindEv();
        this.avoidFixedBug();
        this.locatePageLine();
        this.picOperation();
    },
    hangupBindEv:function(){
        $('.toolBar .hangup').on('touchend',function(){
            setTimeout(function(){
                //JSNativeBridge.send('js_msg_hangup');
            },200);
        });
        $('.closeSpan').on('touchend',function(){
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
        $(".toolBar .eraser").on('touchstart',function(){
            configMap.lastOperateTime = new Date().getTime();       //刷新最后操作时间
            commons.checkOtherBtn(this);
            if($(this).hasClass('hover')){
                return;
            }else{
                $(this).addClass('hover');
                commons.showTips('eraser_tip');
                isEraser = true;
            }
        });

        $(".colorli").on('touchstart',function(){
            configMap.lastOperateTime = new Date().getTime();       //刷新最后操作时间
            commons.checkOtherBtn(this);
            isEraser = false;
            $(".colorSwitch > img").addClass('none');
            $('.colorSwitch').removeClass('hover');
            if($(this).hasClass('blue')){
                $(".colorSwitch > img.blue").removeClass('none');
                ctxOut.strokeStyle = "#2477C2";
                pencilColor = '#2477C2';
            }
            if($(this).hasClass('red')){
                $(".colorSwitch > img.red").removeClass('none');
                ctxOut.strokeStyle = "#D61910";
                pencilColor = '#D61910';
            }
            if($(this).hasClass('black')){
                $(".colorSwitch > img.black").removeClass('none');
                ctxOut.strokeStyle = "#202020";
                pencilColor = '#202020';
            }
            commons.showTips('pencil_tip');
            $('.colorSwitch').addClass('focus');
        });

        $('.toolBar .photograph').on('touchend',function(){
            configMap.lastOperateTime = new Date().getTime();       //刷新最后操作时间
            //commons.checkOtherBtn(this);
            setTimeout(function(){
                //JSNativeBridge.send('js_msg_photograph');
            },200);
        });

        $('.colorSwitch > img').on('touchstart',function(){
            configMap.lastOperateTime = new Date().getTime();       //刷新最后操作时间
            commons.checkOtherBtn($(this).parent());
            ctxOut.strokeStyle = pencilColor;
            ctxIn.strokeStyle = pencilColor;
            if($('.colorSwitch').hasClass('focus')){
                if($('.colorSwitch').hasClass('hover')){
                    $('.colorSwitch').removeClass('hover');
                }else{
                    $('.colorSwitch').addClass('hover');
                }
            }else{
                $('.colorSwitch').addClass('focus');
                commons.showTips('pencil_tip');
            }
        });

        $('.toolBar .hand').on('touchstart',function(){
            configMap.lastOperateTime = new Date().getTime();       //刷新最后操作时间
            commons.checkOtherBtn(this);
            if($(this).hasClass('hover')){
                return;
            }else{
                $(this).addClass('hover');
                compoments.canvasUnBindEv();
                commons.showTips('hand_tip');
            }
        });

        $('.toolBar img').on('touchstart',function(){
            if(this.src.search('eraser') > 0){
                return;
            }
            if(this.src.search('_hover') < 0){
                this.src = this.src.replace('.png','_hover.png');
            }
        }).on('touchmove',function(){
            if(this.src.search('eraser') > 0){
                return;
            }
            this.src = this.src.replace('_hover.png','.png');
        }).on('touchend',function(){
            if(this.src.search('eraser') > 0){
                return;
            }
            this.src = this.src.replace('_hover.png','.png');
        });
    },
    toolBarUnBindEv:function(){
        $('.toolBar .eraser').off();
        $('.colorli').off();
        $('.toolBar .photograph').off();
        $('.colorSwitch > img').off();
        $('.toolBar .hand').off();
        $('.toolBar img').off();
    },
    scrollBarBindEv:function(){
        $("#nextPage").on('touchstart',function(){
            configMap.lastOperateTime = new Date().getTime();       //刷新最后操作时间
            $('.scrollBar #nextPage, .scrollBar #prePage').off();
            isScrollBtnClicked = true;
            $.scrollTo({
                endY: window.scrollY + configMap.screenHeight,
                duration: 100,
                callback: function () {
                   compoments.scrollBarBindEv();
                   setTimeout(function(){
                       isScrollBtnClicked = false;
                       commons.scrollCanvas();
                   }, 200);
                }
            });
        });
        $("#prePage").on('touchstart',function(){
            configMap.lastOperateTime = new Date().getTime();       //刷新最后操作时间
            $('.scrollBar #nextPage, .scrollBar #prePage').off();
            isScrollBtnClicked = true;
            $.scrollTo({
                endY: window.scrollY - configMap.screenHeight ,
                duration: 100,
                callback: function () {
                   compoments.scrollBarBindEv();
                   setTimeout(function(){
                       isScrollBtnClicked = false;
                       commons.scrollCanvas();
                   }, 200);
                }
            });
        });
        $(document).bind('scroll',commons.scrollCanvas);
    },
    canvasBindEv:function(){
        $canvasOut.mousedown(commons.drawStart);
        $canvasOut.mouseup(commons.drawEnd);
        $canvasOut.mousemove(commons.drawing);
        $canvasOut.click( function(){ configMap.lastPicBotmY = configMap.lastPicBotmY_cache; } );
        $canvasOut[0].addEventListener("touchstart",commons.drawStart,false);
        $canvasOut[0].addEventListener("touchmove",commons.drawing,false);
        $canvasOut[0].addEventListener("touchend",commons.drawEnd,false);
    },
    canvasUnBindEv:function(){
        $canvasOut.off('mousedown');
        $canvasOut.off('mouseup');
        $canvasOut.off('mousemove');
        $canvasOut.off('click');
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
        $('body, canvas').doubleTap(function(e){
            e.preventDefault();
            return false;
        });
    },
    locatePageLine:function(){
        var i = 0;
        configMap.pageSet = [];
        for( i = 0 ; i < 20 ; i++ ){
            $('.pageLine > li ').eq(2*i).css({
                position:'absolute',
                right:'2%',
                top:configMap.screenHeight * (i) + 10
            });
            $('.pageLine > li ').eq(2*i+1).css({
                position:'absolute',
                right:'2%',
                top:configMap.screenHeight * (i+1)
            });
            configMap.pageSet[i] = configMap.screenHeight * (i);
        }
        $('.pageLine').css('width',configMap.screenWidth);
    },
    picOperation:function(){
        $('body').delegate('.btnZoomIn','touchstart',function(){
            var _this = this;
            var $imgContainer = $(this).parent();
            var $img = $imgContainer.find('img');

            $imgContainer.css('width','100%');
            // $img.attr('style','');

            $img.css({
                maxWidth : configMap.pic_big_width,
                maxHeight : configMap.pic_big_height
            });
            $(this).parent().animate({
                maxWidth : configMap.pic_big_width
            }, 300, 'ease-in', function(){
                var temp = null;
                var $imgContainer = $(_this).parent();

                var offsetTop = $imgContainer.offset().top;
                var offsetLeft = $imgContainer.offset().left;
                var height = $imgContainer.find('img').css('position','static').height();
                $imgContainer.find('img').css('position','absolute');
                var width = $imgContainer.width();


                $(_this).addClass('btnZoomOut').removeClass('btnZoomIn');

                temp = [{
                    type : OperationType.PICTURE_ZOOM,
                    time : new Date().getTime() - beginTime,
                    zoom : OperationType.ZOOM_STATUS_LARGE,
                    url : $(_this).parent().find('img').attr('src'),
                    points : [
                          {
                            x : (offsetLeft - $canvasOut[0].offsetLeft)/configMap.screenWidth,
                            y : (offsetTop)/configMap.screenHeight
                          },
                          {
                            x : (offsetLeft - $canvasOut[0].offsetLeft + width )/configMap.screenWidth,
                            y : (offsetTop + height)/configMap.screenHeight 
                          }
                    ]
                }];
                canvasData[canvasData.length] = temp;
                //JSNativeBridge.send('js_msg_drawData',temp);
            });
        });
        $('body').delegate('.btnZoomOut', 'touchstart', function(){
            var _this = this;
            var $imgContainer = $(this).parent();
            var $img = $imgContainer.find('img');

            $imgContainer.css('width','100%');
            // $img.attr('style','');

            $(this).parent().animate({
                maxWidth : configMap.pic_nor_width
            }, 300, 'ease-in', function(){

                $img.css({
                    maxWidth : configMap.pic_nor_width,
                    maxHeight : configMap.pic_nor_height
                });

                var temp = null;
                var $imgContainer = $(_this).parent();

                var offsetTop = $imgContainer.offset().top;
                var offsetLeft = $imgContainer.offset().left;
                var height = $imgContainer.find('img').css('position','static').height();
                $imgContainer.find('img').css('position','absolute');
                var width = $imgContainer.width();

                $(_this).addClass('btnZoomIn').removeClass('btnZoomOut');

                temp = [{
                    type : OperationType.PICTURE_ZOOM,
                    time : new Date().getTime() - beginTime,
                    zoom : OperationType.ZOOM_STATUS_NORMAL,
                    url : $(_this).parent().find('img').attr('src'),
                    points : [
                          {
                            x : (offsetLeft - $canvasOut[0].offsetLeft)/configMap.screenWidth,
                            y : (offsetTop)/configMap.screenHeight
                          },
                          {
                            x : (offsetLeft - $canvasOut[0].offsetLeft + width )/configMap.screenWidth,
                            y : (offsetTop + height)/configMap.screenHeight 
                          }
                    ]
                }];
                canvasData[canvasData.length] = temp;
                //JSNativeBridge.send('js_msg_drawData',temp);
            });
        });
    }
};

var main = {
    loadUserInfo:function(){
        //JSNativeBridge.send('js_msg_getUserInfo','');
    },
    init:function(){

        $canvasOut.mousemove(commons.forbidScroll);
        $canvasOut[0].addEventListener("touchmove",commons.forbidScroll,false);

        $("#canvasOut, #canvasIn").attr('width',configMap.canvasWidth);
        $("#canvasOut, #canvasIn").attr('height',configMap.canvasHeight);

        compoments.init();
        this.loadUserInfo();
    }
};

$(function(){
    main.init();
});