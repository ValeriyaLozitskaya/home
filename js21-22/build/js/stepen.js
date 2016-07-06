var stepen = function pow(x, y) {
    var result = 1;
        for (var i = 0; i < y; i++) {
            result *= x;
        }
        return result;
};

module.exports = stepen;
