/**
 * Created by yantianyu on 2015/4/1.
 */
var socket = io.connect();
var totalData;
socket.on('connect',function(){
    //连接成功
    //document.write("socket连接成功...");
    //socket.send('前端socket连接成功...');
    //socket.emit('message','前端socket连接成功...');
    $("#play").click(function(){
        socket.emit("play","button play was click");
    });

    $("#clear").click(function(){
        socket.emit("clear");
    });
});

$("#reload").click(function(){
    ctx.clearRect(0,0,document.body.clientWidth,document.body.clientHeight);
});

$("#canvas").attr('width',document.body.clientWidth);
$("#canvas").attr('height',document.body.clientHeight);

var $canvas = $("#canvas");
var ctx = $canvas[0].getContext("2d");
var isPaint = false;

socket.on('message',function(data){
    var ex, ey, e = JSON.parse(data);

    if (e.sx && e.sy) {
        ex = e.sx;
        ey = e.sy;
        ctx.beginPath();
        ctx.moveTo(ex, ey);
    }
    if (e.ex && e.ey) {
        ctx.moveTo(ex, ey);
        ctx.lineTo(e.ex, e.ey);
        ctx.stroke();
    }
    if (e.closePath) {
        ctx.closePath();
    }
    if (e.clearCanvas) {
        ctx.clearRect(0,0,document.body.clientWidth,document.body.clientHeight);
    }
});

socket.on('audioPlay',function(data){
    var e = JSON.parse(data);

    if(e.beginPath){
        ctx.beginPath();
    }
    if (e.sx && e.sy) {
        ctx.moveTo(e.sx, e.sy);
    }
    if (e.ex && e.ey) {
        ctx.lineTo(e.ex, e.ey);
        ctx.stroke();
    }
    if (e.closePath) {
        ctx.closePath();
    }
    if (e.clearCanvas) {
        ctx.clearRect(0,0,document.body.clientWidth,document.body.clientHeight);
    }
});

socket.on('clear',function(data){
    alert(data);
});

socket.on('playMedia',function(data){
    totalData = JSON.parse(data);
});

var totalI = 0;
var timePicker = 0;
function go(){
    if(typeof totalData[totalI] == "string"){
        totalData[totalI] = JSON.parse(totalData[totalI]);
    }
    if(totalData[totalI].sx && totalData[totalI].sy){
        ctx.beginPath();
        ctx.moveTo(totalData[totalI].sx, totalData[totalI].sy);
    }
    if(totalData[totalI].ex && totalData[totalI].ey){
        ctx.lineTo(totalData[totalI].ex, totalData[totalI].ey);
        ctx.stroke();
    }
    if(totalData[totalI].closePath){
        ctx.closePath();
    }
    totalI++;
    if(totalI<totalData.length){
        timePicker = setTimeout(go,40);
    }
}

$("#playMedia").click(function(){
    ctx.clearRect(0,0,document.body.clientWidth,document.body.clientHeight);
    totalI = 0;
    clearTimeout(timePicker);
    go();
});

//ctx.lineWidth = 3;
ctx.strokeStyle = "green";

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

//$("#canvas").mousedown(drawStart);
//$("#canvas").mouseup(drawEnd);
//$("#canvas").mousemove(drawing);
//
//$("#canvas")[0].addEventListener("touchstart",drawStart,false);
//$("#canvas")[0].addEventListener("touchmove",drawing,false);
//$("#canvas")[0].addEventListener("touchend",drawEnd,false);

$("#audio").on('play',function(){
    //socket.emit('audioControl',JSON.stringify({time:$(this)[0].currentTime}));
    //$("#playMedia").click();
    ctx.closePath();
    ctx.clearRect(0,0,document.body.clientWidth,document.body.clientHeight);
    clearTimeout(timePicker);

    var currentTime = parseInt($(this)[0].currentTime);
    for(var i = 0; i < currentTime*25; i++){
        if(typeof totalData[i] == "string"){
            totalData[i] = JSON.parse(totalData[i]);
        }
        if(totalData[i].sx && totalData[i].sy){
            ctx.beginPath();
            ctx.moveTo(totalData[i].sx, totalData[i].sy);
        }
        if(totalData[i].ex && totalData[i].ey){
            ctx.lineTo(totalData[i].ex, totalData[i].ey);
            ctx.stroke();
        }
        if(totalData[i].closePath){
            ctx.closePath();
        }
    }
    totalI = i;
    go();
});

$("#audio").on('pause',function(){
    clearTimeout(timePicker);
});

$("#audio").on('timeupdate',function(){
    //socket.emit('timeupdate',JSON.stringify({time:$(this)[0].currentTime}));
});