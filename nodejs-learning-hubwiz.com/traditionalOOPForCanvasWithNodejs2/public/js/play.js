/**
 * Created by yantianyu on 2015/4/24.
 */
var $canvasOut = $("#canvasOut");
var $canvasIn = $("#canvasIn");
var ctxOut = $canvasOut[0].getContext("2d");
var ctxIn = $canvasIn[0].getContext("2d");
var socket = io.connect();
var isPaint = false;
var isEraser = false;
var pageInd = 1;
var timmerPicker = null;
var canvasData = null;

var globalI = 0;

var commons = {
    playVideo:function(){
        commons.drawCanvas(canvasData[globalI]);
        globalI++;
        if( !canvasData[globalI] )return;
        timmerPicker = setTimeout('commons.playVideo()',canvasData[globalI].time - canvasData[globalI-1].time);
    },
    drawCanvas:function(drawData){
        if(drawData.type = 2001){
            ctxOut.beginPath();
            for(var i = 0; i < drawData.points.length ; i++){
                if(i == 0){
                    ctxOut.moveTo(drawData.points[i].x * document.body.clientWidth*0.9, drawData.points[i].y * document.body.clientHeight*3);
                }else{
                    ctxOut.lineTo(drawData.points[i].x * document.body.clientWidth*0.9, drawData.points[i].y * document.body.clientHeight*3);
                }
            }
            ctxOut.stroke();
            ctxOut.closePath();
        }
    },
    jumpToFrame:function(audioTime){
        for(var i = 0;i < canvasData.length; i++){
            if(canvasData[i].time > audioTime){
                globalI = i;
                break;
            }
            commons.drawCanvas(canvasData[i]);
        }
    },
    nextPage:function(){
        if(pageInd < 3) {
            $.scrollTo({
                endY: document.body.clientHeight*pageInd,
                duration: 500,
                callback: function () {
                    pageInd++;
                    $('#currentPage').text(pageInd);
                }
            });
        }
    },
    prePage:function(){
        if(pageInd > 1) {
            $.scrollTo({
                endY: document.body.clientHeight*(pageInd-2),
                duration: 500,
                callback: function () {
                    pageInd--;
                    $('#currentPage').text(pageInd);
                }
            });
        }
    }
};

var compoments = {
    init:function(){
        this.loadCanvasData();
        this.canvasBindEv();
        this.audioBindEv();
    },
    canvasBindEv:function(){
        $("#canvasOut,#canvasIn").attr('width',document.body.clientWidth);
        $("#canvasOut,#canvasIn").attr('height',document.body.clientHeight*3);
    },
    audioBindEv:function(){
        $('audio').on('play',function(){
            ctxOut.clearRect(0,0,document.body.clientWidth,document.body.clientHeight*3);
            commons.jumpToFrame(this.currentTime * 1000);
            timmerPicker = setTimeout('commons.playVideo()',canvasData[0].time);
        });
        $('audio').on('pause',function(){
            clearTimeout(timmerPicker);
        });
    },
    loadCanvasData:function(){
        socket.on('canvasData',function(data){
            canvasData = JSON.parse(data);
            console.log(canvasData);
        })
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