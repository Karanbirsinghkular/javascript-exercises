const fibonacci = function(x) {
    x = Number(x);
    if (x < 0){
        return "OOPS";
    }
    return x < 2 ? x : fibonacci(x - 1) + fibonacci(x - 2);
};

// Do not edit below this line
module.exports = fibonacci;
