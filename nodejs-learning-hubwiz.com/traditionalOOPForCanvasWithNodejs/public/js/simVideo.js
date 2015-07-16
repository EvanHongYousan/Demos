/**
 * Created by yantianyu on 2015/4/15.
 */
var $canvasVdo = $("#simVideo");
var ctx = $canvasVdo[0].getContext("2d");
var isPaint = false;
var isEraser = false;
var pageInd = 1;
var timmerPicker = null;
var currentSecd = -1;

var commons = {
    playVideo:function(){
        if(currentSecd<0)return;
        console.log(currentSecd);
        timmerPicker = setTimeout('commons.playVideo(currentSecd)',Math.floor(1000/currentSecd));
    }
};

var compoments = {
    canvasBindEv:function(){
        $canvasVdo.attr('width',document.body.clientWidth);
        $canvasVdo.attr('height',document.body.clientHeight*3);
    },
    audioBindEv:function(){
        $('audio').on('timeupdate',function(){
            if(Math.abs(this.currentTime) >= currentSecd){
                if(currentSecd > 0) {
                    clearTimeout(timmerPicker);
                    //console.log(currentSecd);
                    commons.playVideo(currentSecd);
                }
                currentSecd++;
            }
        });
        $('audio').on('play',function(){
            clearTimeout(timmerPicker);
        });
        $('audio').on('pause',function(){
            clearTimeout(timmerPicker);
        });
    },
    init:function(){
        this.canvasBindEv();
        this.audioBindEv();
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