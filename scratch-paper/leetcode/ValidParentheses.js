/**
 *  * @param {string} s
 *   * @return {boolean}
 *    */
var isValid = function (s) {
    var a = ['(', '{', '['], b = [')', '}', ']'];
    var temp = [];
    var i = 0;
    for (i = 0; i < s.length; i++) {
        if (a.indexOf(s[i]) !== -1) {
            temp.push(s[i]);
        }
        if (b.indexOf(s[i]) !== -1) {
            if (a.indexOf(temp[temp.length - 1]) === b.indexOf(s[i])) {
                temp.pop();
            } else {
                return false;
            }
        }
    }
    if (temp.length === 0) {
        return true;
    } else {
        return false;
    }
};

module.exports = isValid;
