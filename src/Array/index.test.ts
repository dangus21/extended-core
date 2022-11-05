const testArray = [2, 3, 5, 4, 7, 8, 9, 4, 2, 6, 5, 4, 1, 2, 3, 9];

describe('Array', () => {
    it('Occurrences', () => {
        const result = testArray.occurrences();
        expect(result).toBe(4.625);
    });
});