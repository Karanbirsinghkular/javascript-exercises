const removeFromArray = function(givenArray, ...arg) {
    let ans = [];
    let givenArrayCntr = 0;
    let ansArrayCntr = 0;
    for (let each of givenArray){
        if (arg.includes(each)){
            continue
        }
        ans[ansArrayCntr] = each;
        ansArrayCntr += 1;
    }
    return ans;
};

// Do not edit below this line
module.exports = removeFromArray;
