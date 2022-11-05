if (!Math.average) {
    Math.average = function (collection) {
        const sum = collection.reduce((prev, curr) => prev + curr);
        const len = collection.length;
        return sum / len;
    }
}

const average = Math.average([1, 2, 3]);
console.log('average ~ ', average);

export { };