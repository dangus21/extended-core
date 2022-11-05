Object.defineProperties(Array.prototype, {
    occurrences: {
        value: function (this: (string | number)[]): Record<string, number> {
            const occurrences = this.reduce((prev, curr) => {
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
            }, {});
            return occurrences;
        }
    }
});

export { };