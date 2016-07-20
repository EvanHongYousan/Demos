/**
 * Created by yantianyu on 16/7/20.
 */

/*

 The count-and-say sequence is the sequence of integers beginning as follows:
 1, 11, 21, 1211, 111221, ...

 1 is read off as "one 1" or 11.
 11 is read off as "two 1s" or 21.
 21 is read off as "one 2, then one 1" or 1211.
 Given an integer n, generate the nth sequence.

 Note: The sequence of integers will be represented as a string.

 Subscribe to see which companies asked this question

 */

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    var i = 1;
    var say = '1';
    for (i = 1; i < n; i++) {
        say = upGrade(say);
    }
    return say;
};

function upGrade(str) {
    var last = str[0];
    var result = '';
    var count = 1;
    var i = 1;
    for (i = 1; i < str.length; i++) {
        if (last === str[i]) {
            count++
        } else {
            result += '' + count + last;
            count = 1;
            last = str[i];
        }
    }
    result += '' + count + last;
    return result;
}

module.exports = countAndSay;