"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mode = exports.median = exports.average = void 0;
const array_1 = require("../Array/array");
const utils_1 = require("../utils");
function average(collection) {
    const sum = collection.reduce((prev, curr) => prev + Number(curr), 0);
    const len = collection.length;
    return sum / len;
}
exports.average = average;
function median(collection) {
    const isCollectionEven = collection.length % 2 === 0;
    if (isCollectionEven) {
        const collectionMidLeft = collection[collection.length / 2 - 1];
        const collectionMidRight = collection[collection.length / 2];
        return average([collectionMidRight, collectionMidLeft]);
    }
    return Number(collection[Math.floor(collection.length / 2)]);
}
exports.median = median;
function mode(collection) {
    const collectionOccurrences = (0, array_1.occurrences)(collection);
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
        ...(0, utils_1.groupBy)(sortedOccurrences, (sortedOccurrences) => sortedOccurrences[1]),
    ];
    return groupedOccurrences[groupedOccurrences.length - 1][1].map((value) => Number(value[0]))[0];
}
exports.mode = mode;
//# sourceMappingURL=math.js.map