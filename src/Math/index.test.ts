import { average, median, mode } from "./math";

const testArray = [2, 3, 5, 4, 7, 8, 9, 4, 2, 6, 5, 4, 1, 2, 3, 9];

describe('Math', () => {
    it('Average', () => {
        const result = average(testArray);
        expect(result).toBe(4.625);
    });
    it('Median', () => {
        const result = median(testArray);
        expect(result).toBe(3);
    });
    it('Mode', () => {
        const result = mode(testArray);
        expect(result).toBe(2);
    });
});

export {};
