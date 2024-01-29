/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  moduleDirectories: [
    "node_modules"
  ],
  preset: 'ts-jest',
  rootDir: './',
  testEnvironment: "jest-environment-node",
  // watchman: true,
};

module.exports = config;
