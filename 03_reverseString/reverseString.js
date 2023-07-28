const reverseString = function(toReverse) {
    let ans = "";
    for (let i = toReverse.length - 1; i > -1; i--){
        ans += toReverse.charAt(i);
    }
    return ans;
};

// Do not edit below this line
module.exports = reverseString;
