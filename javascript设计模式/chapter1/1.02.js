/**
 * Created by yantianyu on 2015/5/11.
 */
(function(){
    var foo  =10;
    var bar = 2;
    alert( foo * bar);
})();

(function(foo, bar){
    alert(foo*bar);
})(10, 2);

var baz = (function(foo,bar){
    return foo * bar;
})(10, 2);

var baz;

(function(){
    var foo = 10;
    var bar = 2;
    baz = function(){
        return foo * bar;
    }
})();

baz();