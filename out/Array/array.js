"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.at = exports.occurrences = void 0;
function occurrences(collection) {
    const mappedOccurrences = collection.map((occ) => occ.toString());
    const occurrences = mappedOccurrences.reduce((prev, curr) => {
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
exports.occurrences = occurrences;
function at(collection, index) {
    if (index > collection.length) {
        throw new Error('Index is greater than the input range');
    }
    if (index < 0) {
        return collection[collection.length - 1];
    }
    return collection[index];
}
exports.at = at;
//# sourceMappingURL=array.js.map