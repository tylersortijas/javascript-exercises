const reverseString = function(string) {
    let text = string;
    let myArray = text.split("");
    let reverse = myArray.reverse().join("");

    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
