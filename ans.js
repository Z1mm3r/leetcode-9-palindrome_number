var isPalindrome = function(x) {
    if(x < 0){
        return false;
    }

    let string  = x.toString()

    let mid = Math.floor(string.length / 2)

    for(let i = 0; i < mid; i++){
        if(string[i] != string[string.length - i - 1]){
            return false;
        }
    }

    return true;
};
