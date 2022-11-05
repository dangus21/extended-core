/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
    collectCoverage: false,
    coverageDirectory: 'coverage',
    collectCoverageFrom: ['src/**/*.ts'],
    coverageReporters: ['json', 'html'],
    moduleFileExtensions: ['ts', 'js'],
    preset: 'ts-jest/presets/js-with-babel',
    testMatch: ['**/?(*.)+(test).ts'],
    setupFilesAfterEnv: ['<rootDir>/scripts/setup-jest.ts'],
};
