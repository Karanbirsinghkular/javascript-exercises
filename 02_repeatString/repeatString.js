const repeatString = function(repeatedString, repeatsNum) {
    if (repeatsNum < 0){
        return "ERROR";
    }
    let ans = ""
    for (let i = 0; i < repeatsNum; i++){
        ans = ans.concat(repeatedString);
    }
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
