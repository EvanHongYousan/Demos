/**
 * Created by Evan on 2015/3/8.
 */
var child_process = require("child_process");

var child = child_process.spawn( command );

child.stdout.on('data',function(data){
    console.log(data);
});

