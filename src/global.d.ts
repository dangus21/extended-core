export { };

declare global {
  interface Math {
      average(collection: number[]): number;
      median(collection: number[]): number;
      mode(collection: number[]): number;
  }
}
