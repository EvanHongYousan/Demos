/**
 * Created by yantianyu on 2016/7/21 0021.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    var a = [];
    while(head!==null){
        a.push(head.val);
        head = head.next;
    }
    b = a;
    b.reverse();
    var i = 0;
    for(i=0;i<a.length;i++){
        if(a[i]!==b[i]){
            return false;
        }
    }
    return true;
};

module.exports = isPalindrome;