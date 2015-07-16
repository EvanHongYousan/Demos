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
var currentSecd = -1;
var canvasOutData = null;
var i = 0;

function Timer(){
    i = 0;
    currentSecd++;
    clearTimeout(timmerPicker);
    commons.playVideo();
}
var intTimer = null;

var commons = {
    playVideo:function(){
        if(currentSecd<0)return;
        if(canvasOutData[currentSecd] == null || canvasOutData[currentSecd] == [] || canvasOutData[currentSecd] == undefined)return;

        commons.drawCanvas(ctxOut,canvasOutData[currentSecd][i]);

        i++;

        timmerPicker = setTimeout('commons.playVideo()',Math.floor(1000/(canvasOutData[currentSecd].length)));

    },
    drawCanvas:function(ctx,drawData){
        if(drawData == undefined){
            return;
        }
        if(drawData.isEraser){
            ctx.globalCompositeOperation = "destination-out";
            ctx.arc(drawData.ex, drawData.ey, 15, 0, Math.PI * 2);
            ctx.strokeStyle = "rgba(250,250,250,0)";
            ctx.fill();
            ctx.closePath();
            ctx.globalCompositeOperation = "source-over";
        }else{
            if(drawData.color){
                ctx.strokeStyle = drawData.color;
            }
            if(drawData.beginPath){
                ctx.beginPath();
            }
            if(drawData.sx && drawData.sy){
                ctx.moveTo(drawData.sx, drawData.sy);
            }
            if(drawData.ex && drawData.ey){
                ctx.lineTo(drawData.ex, drawData.ey);
                ctx.stroke();
            }
            if(drawData.closePath){
                ctx.closePath();
            }
            if(drawData.scroll){
                if(drawData.page == "nextPage"){
                    commons.nextPage();
                }
                if(drawData.page == "prePage"){
                    commons.prePage();
                }
            }
        }
    },
    jumpToFrame:function(){
        for(var i = 0; i <= currentSecd;i++){
            for(var j = 0; j <= canvasOutData[i].length ; j++){
                commons.drawCanvas(ctxOut,canvasOutData[i][j]);
            }
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
        $('audio').on('timeupdate',function(){
//            if(Math.abs(this.currentTime) >= currentSecd){
//                if(currentSecd > 0) {
//                    clearTimeout(timmerPicker);
//                    i = 0;
//                    //console.log(currentSecd);
//                    commons.playVideo();
//                }
//                currentSecd++;
//            }
        });
        $('audio').on('play',function(){
            clearTimeout(timmerPicker);

            ctxOut.clearRect(0,0,document.body.clientWidth,document.body.clientHeight*3);
            currentSecd = Math.floor(this.currentTime);
            commons.jumpToFrame();

            intTimer = setInterval('Timer()',1000);
        });
        $('audio').on('pause',function(){
            clearTimeout(timmerPicker);
            clearInterval(intTimer);
        });
    },
    loadCanvasData:function(){
        socket.on('canvasData',function(data){
            canvasOutData = JSON.parse(data);
            console.log(canvasOutData);
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