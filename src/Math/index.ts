function groupBy<K, V>(list: Array<V>, keyGetter: (input: V) => K): Map<K, Array<V>> {
    const map = new Map();
    list.forEach((item) => {
        const key = keyGetter(item);
        const collection = map.get(key);
        if (!collection) {
            map.set(key, [item]);
        } else {
            collection.push(item);
        }
    });
    return map;
}

if (!Math.average) {
    Math.average = function (collection) {
        const sum = collection.reduce((prev, curr) => prev + curr, 0);
        const len = collection.length;
        return sum / len;
    }
}
if (!Math.median) {
    Math.median = function (collection) {
        const isCollectionEven = collection.length % 2 === 0;
        if (isCollectionEven) {
            const collectionMidLeft = collection[collection.length / 2 - 1];
            const collectionMidRight = collection[collection.length / 2];
            return Math.average([collectionMidRight, collectionMidLeft])
        }

        return collection[Math.floor(collection.length / 2)];
    }
}
if (!Math.mode) {
    Math.mode = function (collection) {
        const occurrences: Record<string, number> = collection.reduce((prev, curr) => {
            if (curr in prev) {
                return {
                    ...prev,
                    [curr]: prev[curr] + 1,
                }
            }
            return {
                ...prev,
                [curr]: 1,
            };
        }, {})
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
            return 0
        })
        const groupedOccurrences = [...groupBy(sortedOccurrences, sortedOccurrences => sortedOccurrences[1])]
        return groupedOccurrences[groupedOccurrences.length - 1][1]
            .map(value =>
                Number(value[0])
            )[0];
    }
}

const res = Math.mode([5, 2, 1, 2, 3, 4, 3, 3, 4, 4])
console.log('LOG ~ file: index.ts ~ line 52 ~ res', res);

export { };