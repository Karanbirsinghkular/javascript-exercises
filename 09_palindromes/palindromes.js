const palindromes = function (text) {
    text = text.toLowerCase();
    text = text.split("");
    text = text.filter((word) => !["!", " ", ",", "."].includes(word));
    let length = text.length;
    let halfLength = length / 2 + (length % 2 == 0 ? 0: 0.5);
    let bool = true;
    for(let i = 0; i < halfLength; i++){
        if (text[i] == text[length - i - 1]){
            bool = bool & true;
            if (!bool){
                return false;
            }
        }else{
            return false;
        }
    }
    return Boolean(bool);
};

// Do not edit below this line
module.exports = palindromes;
