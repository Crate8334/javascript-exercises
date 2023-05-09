const removeFromArray = function (array, ...args) {
    // for (const e of args) {
    //     while (array.indexOf(e)>-1) {
    //         array.splice(array.indexOf(e), 1);
    //     }
    // }

    return array.filter(
        (element) => !args.includes(element)
    );
};

// Do not edit below this line
module.exports = removeFromArray;
