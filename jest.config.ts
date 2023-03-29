import type { Config } from "@jest/types";

const baseDir = "<rootDir>/src/app/server_app";
const baseTestDir = "<rootDir>/src/test/";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [`${baseDir}/**/*.ts`],
  testMatch: [
    `${baseTestDir}/server_app/**/*.test.ts`,
    `${baseTestDir}/server_app_2/**/*.test.ts`,
  ],
  setupFiles: ["<rootDir>/src/test/server_app_3/utils/config.ts"],
};

export default config;
