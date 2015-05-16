/**
 * Created by Evan on 2015/5/11.
 */
var spa = (function () {
    var initModule = function ( $container ) {
        spa.shell.initModule( $container );
    };

    return { initModule: initModule };
}());