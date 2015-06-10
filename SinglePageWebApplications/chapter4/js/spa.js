/**
 * Created by Evan on 15/5/28.
 */
var spa = (function(){
    var initModule = function($container){
        spa.shell.initModule( $container );
    };

    return { initModule : initModule };
})();