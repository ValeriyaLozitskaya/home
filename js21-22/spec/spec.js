var main = require("../build/js/stepen.js");

describe("pow function", function() {
    it("2^3", function() {
        var result;
        result = main(2, 3);
        expect(result).toEqual(8);
    });
    it("9^15", function() {
        var result;
        result = main(9, 15);
        expect(result).toEqual(205891132094649);
    });
    it("7^3", function() {
        var result;
        result = main(7, 3);
        expect(result).toEqual(343);
    });
    it("5^6", function() {
        var result;
        result = main(5, 6);
        expect(result).toEqual(15625);
    });
});
