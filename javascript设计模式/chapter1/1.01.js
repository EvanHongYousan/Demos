/**
 * Created by yantianyu on 2015/5/11.
 */
function startAnimation(){}

function stopAnimation(){}

var Anim = function(){};

Anim.prototype.start = function(){};

Anim.prototype.stop = function(){};

var myAnim = new Anim();

myAnim.start();

myAnim.stop();

var Anim = function(){};

Anim.prototype = {
    start:function(){},
    stop:function(){}
};

Function.prototype.method = function(name, fn){
    this.prototype[name] = fn;
};

var Anim = function(){};

Anim.method('start', function(){});

Anim.method('stop', function(){});

Function.prototype.method = function(name, fn){
    this.prototype[name] = fn;
    return this;
};

Anim.
    method('start',function(){}).
    method('stop',function(){});