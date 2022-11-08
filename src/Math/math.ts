import { occurrences } from '../Array/array';
import { groupBy } from '../utils';

function average(collection: number[]) {
    const sum = collection.reduce(
        (prev, curr) => prev + Number(curr),
        0
    );
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

export {
    average,
    median,
    mode
};
