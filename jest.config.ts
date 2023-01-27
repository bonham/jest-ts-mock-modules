import type { JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: [".ts"],
  roots: [
    './tests_javascript',
    './tests_typescript'
  ],
  testMatch: [
    '**/*.(js|ts)'
  ],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    '^.+\\.[tj]sx?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
  transformIgnorePatterns: [
    "node_modules/(?!(node-fetch|data-uri-to-buffer|fetch-blob|formdata-polyfill))"
  ]

};
export default jestConfig