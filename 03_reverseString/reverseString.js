const reverseString = function (string) {
    const stringArray = string.split('');
    const reversedStringArray = stringArray.reverse();
    const result = reversedStringArray.join('');
    return result;
};

// Do not edit below this line
module.exports = reverseString;
