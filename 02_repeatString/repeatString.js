const repeatString = function (string, times) {
    let result = '';
    if (times < 0) return 'ERROR';
    for (let i = 0; i < times; i++) {
        // result = result.concat(string);
        result += string;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
