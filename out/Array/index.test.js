"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = require("./array");
const testArray = [2, 3, 5, 4, 7, 8, 9, 4, 2, 6, 5, 4, 1, 2, 3, 9];
describe('Array', () => {
    it('Occurrences', () => {
        const result = (0, array_1.occurrences)(testArray);
        expect(result).toEqual({
            '1': 1,
            '2': 3,
            '3': 2,
            '4': 3,
            '5': 2,
            '6': 1,
            '7': 1,
            '8': 1,
            '9': 2,
        });
    });
    describe('At', () => {
        it('should return with values for given index', () => {
            const result = (0, array_1.at)(testArray, 4);
            expect(result).toBe(7);
        });
        it('should return with values for negative number, -1, being the last value of collection', () => {
            const result = (0, array_1.at)(testArray, -1);
            expect(result).toBe(9);
        });
        it('should return with values for negative number, being the last value of collection', () => {
            const result = (0, array_1.at)(testArray, -100);
            expect(result).toBe(9);
        });
        it('should throw an error for index greater than input length', () => {
            expect(() => (0, array_1.at)(testArray, 100)).toThrow();
        });
    });
});
//# sourceMappingURL=index.test.js.map