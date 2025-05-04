import type { Config } from "jest";

const config: Config = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testMatch: ["**/__tests__/**/*.test.(ts|tsx)"],
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    moduleNameMapper: {
        "\\.(css|scss|sass)$": "identity-obj-proxy",
        "^@/(.*)$": "<rootDir>/src/$1"
    },
    globals: {
        "ts-jest": {
            isolatedModules: true
        }
    }
};

export default config;
