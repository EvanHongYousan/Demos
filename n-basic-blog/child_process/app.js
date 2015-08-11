/**
 * Created by yantianyu on 15/8/10.
 */
var options = {
    encoding: 'utf8',
    timeout: 0,
    maxBuffer: 200 * 1024,
    killSignal: 'SIGTERM',
    setsid: false,
    cwd: null,
    env: null
};
var cp = require('child_process');
cp.exec('ls -l', options, function(e, stdout, stderr) {
    if(!e) {
        console.log(stdout);
        console.log(stderr);
    }
});
