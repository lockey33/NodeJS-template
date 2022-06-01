module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFiles: ['dotenv/config'],
    "coverageReporters": [
        "json-summary",
        "text",
        "lcov"
    ]
};
