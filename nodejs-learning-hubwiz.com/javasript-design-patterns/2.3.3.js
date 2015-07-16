/**
 * Created by yantianyu on 2015/4/17.
 */
var Composite = new Interface('Composite', ['add','remove','getChild']);
var FormItem = new Interface('FormItem',['save']);

var CompositeForm = function(id, method, action){};

function addForm(formInstance){
    Interface.ensureImplements(formInstance, Composite, FormItem);
}