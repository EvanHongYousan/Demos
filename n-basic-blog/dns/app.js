var dns = require('dns');

dns.resolve('www.baidu.com', 'A', function(e, r){
    if (e){
        console.log(e);
    }
    console.log(r);
});