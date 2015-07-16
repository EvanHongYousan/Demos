/**
 * Created by yantianyu on 2015/4/17.
 */
Function.prototype.method = function(name, fn){
    this.prototype[name] = fn;
    return this;
};