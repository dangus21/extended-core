import { Collection } from '../types';

/** Counts occurrences of elements in 2D array */
function occurrences(collection: Collection): Record<string, number> {
    const mappedOccurrences = collection.map((occ) => occ.toString());
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
}

function at(collection: unknown[], index: number) {
    if (index > collection.length) {
        throw new Error('Index is greater than the input range');
    }
    if (index < 0) {
        return collection[collection.length - 1];
    }

    return collection[index];
}

export { occurrences, at };
