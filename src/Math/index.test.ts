const testArray = [2, 3, 5, 4, 7, 8, 9, 4, 2, 6, 5, 4, 1, 2, 3, 9];

describe('Math', () => {
    it('Average', () => {
        const result = Math.average(testArray);
        expect(result).toBe(4.625);
    });
    it('Median', () => {
        const result = Math.median(testArray);
        expect(result).toBe(3);
    });
    it('Mode', () => {
        const result = Math.mode(testArray);
        expect(result).toBe(2);
    });
});