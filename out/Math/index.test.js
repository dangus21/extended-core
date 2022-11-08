"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("./math");
const testArray = [2, 3, 5, 4, 7, 8, 9, 4, 2, 6, 5, 4, 1, 2, 3, 9];
describe('Math', () => {
    it('Average', () => {
        const result = (0, math_1.average)(testArray);
        expect(result).toBe(4.625);
    });
    it('Median', () => {
        const result = (0, math_1.median)(testArray);
        expect(result).toBe(3);
    });
    it('Mode', () => {
        const result = (0, math_1.mode)(testArray);
        expect(result).toBe(2);
    });
});
//# sourceMappingURL=index.test.js.map