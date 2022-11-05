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
});

export {};
