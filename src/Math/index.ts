import { Collection } from "../global";
import { groupBy } from "../utils";

Object.defineProperties(Math, {
    average: {
        value: function (collection: Collection) {
            const sum = collection.reduce((prev, curr) => Number(prev) + Number(curr), 0);
            const len = collection.length;
            return Number(sum) / len;
        }
    },
    median: {
        value: function (collection: Collection) {
            const isCollectionEven = collection.length % 2 === 0;
            if (isCollectionEven) {
                const collectionMidLeft = collection[collection.length / 2 - 1];
                const collectionMidRight = collection[collection.length / 2];
                return Math.average([collectionMidRight, collectionMidLeft]);
            }

            return Number(collection[Math.floor(collection.length / 2)]);
        }
    },
    mode: {
        value: function (collection: Collection) {
            const occurrences = collection.occurrences();
            const occurrencesEntries = Object.entries(occurrences);
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
            const groupedOccurrences = [...groupBy(sortedOccurrences, sortedOccurrences => sortedOccurrences[1])];
            return groupedOccurrences[groupedOccurrences.length - 1][1]
                .map(value =>
                    Number(value[0])
                )[0];
        }
    }
});

export { };