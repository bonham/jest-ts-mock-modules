# How to mock modules with jest

This repository is showing examples how to mock a module using jest. It is about modules which were installed into node_modules via package manager. There are few javascript examples but also the more challenging **typescript** examples. You can find the examples within a list of tests in directories [`tests_javascript`](tests_javascript) and [`tests_typescript`](tests_typescript).

I am using the [cross-fetch](https://www.npmjs.com/package/cross-fetch), a library similar to node-fetch, but with better typescript support. The library has a default_export as well as named exports.

# Why this?

When reading the documentation on https://jestjs.io I found it too difficult to put all pieces together ( As of January 2023). Thefore I created these examples with the focus of simplicity. This is one way to do it. Maybe there are others.

# Typescript examples

| File          | Description       |
|---------------|-------------------|
| [`01_no_mock_implementation.ts`](tests_typescript/01_no_mock_implementation.ts)               | Shows how `jest.mock('<module_name'>)` immediately mocks any exported object |
| [`02_mock_default_export.ts`](tests_typescript/02_mock_default_export.ts)                | All exported objects from cross-fetch are mocked. An implementation is only defined for the default exported `fetch` function |
| [`03_mock_named_export.ts`](tests_typescript/03_mock_named_export.ts)                  | All exported objects are mocked. An implementation is only defined for the named export of `Headers` class |
| [`04_mock_partials.ts`](tests_typescript/04_mock_partials.ts)                      | All exported objects are mocked. The original implementation is restored for the `Response` class. A custom implementation has been defined for the default export `fetch` |
| [`05_mostly_original_implementation.ts`](tests_typescript/05_mostly_original_implementation.ts) | All exported objects have their original implementation, except the default export `fetch`  |

# Javascript examples

| File | Description |
|------|-------------|
|[`02_mock_default_export.js`](tests_javascript/02_mock_default_export.js) | See above |
|[`05_mostly_original_implementation.js`](tests_javascript/05_mostly_original_implementation.js) | See above |

# Usage

```
npm install
npm run test
```

# References

* https://jestjs.io
* https://www.typescriptlang.org/docs/
