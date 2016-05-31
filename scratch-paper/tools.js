/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var tempObj = {},max = 0,arr = '',result;
    nums.forEach(function(item){
        if(!tempObj[item]){
            tempObj[item] = 1;
        } else {
            tempObj[item] ++;
        }
    });
    for(arr in tempObj){
        if(max<tempObj[arr]){
            max = tempObj[arr];
            result = arr;
        }
    }
    return parseInt(result);
};