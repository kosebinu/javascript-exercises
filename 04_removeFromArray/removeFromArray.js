const removeFromArray = function(arr, ...num) {
    return arr.filter(number => !num.includes(number));
};

// Do not edit below this line
module.exports = removeFromArray;
