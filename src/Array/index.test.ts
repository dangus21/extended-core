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
});

export {};
