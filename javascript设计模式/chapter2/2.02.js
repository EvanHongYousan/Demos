/**
 * Created by yantianyu on 2015/5/11.
 */
var Composition = function(id, method, action){
    this.implementsInterface = ['Composite','FormItem'];
};

function addForm(formInstance){
    if(!implements(formInstance,'Composite', 'FormItem')){
        throw new Error('Object does not implement a required interface.');
    }
}

function implements(object){
    var i,j;
    for(i = 0; i < arguments.length ; i++ ){
        var interfaceName = arguments[i];
        var interfaceFound = false;
        for(j = 0; j < object.implementsInterface.length; j++){
            if(object.implementsInterface[j] == interfaceName){
                interfaceFound = true;
                break;
            }
        }
        if(!interfaceFound){
            return false;
        }
    }
    return true;
}