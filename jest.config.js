module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/tests"],
  testMatch: ["**/*.test.ts", "**/*.test.js"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  verbose: true,
};
