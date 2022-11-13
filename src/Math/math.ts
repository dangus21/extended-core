import { occurrences } from '../Array/array';
import { groupBy } from '../utils';

function average(collection: number[]) {
    const sum = collection.reduce((prev, curr) => prev + Number(curr), 0);
    const len = collection.length;
    return sum / len;
}

function median(collection: number[]) {
    const isCollectionEven = collection.length % 2 === 0;
    if (isCollectionEven) {
        const collectionMidLeft = collection[collection.length / 2 - 1];
        const collectionMidRight = collection[collection.length / 2];
        return average([collectionMidRight, collectionMidLeft]);
    }

    return Number(collection[Math.floor(collection.length / 2)]);
}

function mode(collection: number[]) {
    const collectionOccurrences = occurrences(collection);
    const occurrencesEntries = Object.entries(collectionOccurrences);
    const sortedOccurrences = occurrencesEntries.sort((a, b) => {
        const [, timesA] = a;
        const [, timesB] = b;
        if (timesA > timesB) {
            return 1;
        }
        if (timesA < timesB) {
            return -1;
        }
        return 0;
    });
    const groupedOccurrences = [
        ...groupBy(
            sortedOccurrences,
            (sortedOccurrences) => sortedOccurrences[1]
        ),
    ];
    return groupedOccurrences[groupedOccurrences.length - 1][1].map((value) =>
        Number(value[0])
    )[0];
}

type Thirds = {
    a: number;
    b: number;
    c?: number;
    d?: number;
};
/** Rule of thirds function where a is to b, as c is to d, where if
 * either c or d are missing, thats the value calculated
 */
function thirds({ a, b, c, d }: Thirds) {
    let result = 0;

    if (!c && !d) {
        throw new Error('Missing one of the second set of parameter');
    }

    if (!d) {
        try {
            if (c) {
                result = (b * c) / a;
            }
        } catch (error) {
            throw new Error('Missing C parameter');
        }
    } else {
        result = (a * d) / b;
    }

    return Number(result.toFixed(2));
}

export { average, median, mode, thirds };
