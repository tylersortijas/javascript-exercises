const repeatString = function(string, num) {
    if(num < 0) return 'ERROR';
    let word = '';
    let i = 0;
    for (i = 0; i < num; i++) {
        word += string;
    }  
    return word;
};

// Do not edit below this line
module.exports = repeatString;
