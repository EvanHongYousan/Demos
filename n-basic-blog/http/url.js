/**
 * Created by yantianyu on 15/8/9.
 */
var URL = require('url');
var myUrl = "http://www.nodejs.org/some/url/?with=query&param=that&are=awesome#alsoahash";
//parsedUrl = URL.parse(myUrl);
parsedUrl = URL.parse(myUrl, true);
console.log(parsedUrl);
