declare global {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Array<T> {
        occurrences(this: Collection): Record<string, number>;
    }
    interface Math {
        average(collection: Collection): number;
        median(collection: Collection): number;
        mode(collection: Collection): number;
    }
}

type Collection = (string | number)[];

export { Collection };
