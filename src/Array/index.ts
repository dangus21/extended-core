Object.defineProperties(Array.prototype, {
    occurrences: {
        value: function (this: (string | number)[]): Record<string, number> {
            const mappedOccurrences = this.map((occ) => occ.toString());
            const occurrences = mappedOccurrences.reduce(
                (prev: Record<string, number>, curr) => {
                    if (curr in prev) {
                        return {
                            ...prev,
                            [curr]: prev[curr] + 1,
                        };
                    }
                    return {
                        ...prev,
                        [curr]: 1,
                    };
                },
                {}
            );
            return occurrences;
        },
    },
    at: {
        value: function (this: unknown[], index: number) {
            if(index > this.length){
                throw new Error('Index is greater than the input range');
            }
            if (index < 0) {
                return this[this.length - 1];
            }
            
            return this[index];
        },
    },
});

export {};
