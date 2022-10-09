module.exports = {
    preset: 'ts-jest',
    transform: {
        "^.+\\.(js|ts)$": "ts-jest",
    },
    testMatch: ["**/__test__/**/*.ts?(x)"],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,ts}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}