/**
 * Created by yantianyu on 15/8/10.
 */
//var URL = require('url');
//var myUrl = "http://www.nodejs.org/some/url/?with=query&param=that&are=awesome#alsoahash";
//parsedUrl = URL.parse(myUrl);
//parsedUrl = URL.parse(myUrl, true);
//console.log(parsedUrl);

var qs = require('querystring');
qs.parse('a=1&b=2&c=d');
var myObj = {'a':1, 'b':5, 'c':'cats', 'func': function(){console.log('dogs')}}
console.log(qs.parse('a=1&b=2&c=d'));
console.log(qs.encode(myObj));

