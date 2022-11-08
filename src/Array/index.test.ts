const testArray = [2, 3, 5, 4, 7, 8, 9, 4, 2, 6, 5, 4, 1, 2, 3, 9];

describe('Array', () => {
    it('Occurrences', () => {
        const result = testArray.occurrences();
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
            const result = testArray.at(4);
            expect(result).toBe(7);
        });
        it('should return with values for negative number, -1, being the last value of collection', () => {
            const result = testArray.at(-1);
            expect(result).toBe(9);
        });
        it('should return with values for negative number, being the last value of collection', () => {
            const result = testArray.at(-100);
            expect(result).toBe(9);
        });
        it('should throw an error for index greater than input length', () => {
            expect(() => testArray.at(100)).toThrow();
        });
    });
});

export {};
