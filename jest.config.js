/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  resolver: "jest-ts-webcompat-resolver",
  testEnvironment: "jsdom",
  collectCoverageFrom: ["src/**/*.ts", "!src/ts/index.ts"],
};
