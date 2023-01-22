// All exported objects from cross-fetch are replaced with mock functions.
// An implementation is only defined for the default exported 'fetch' function

import { jest, test, expect } from '@jest/globals'
jest.mock('cross-fetch') // Replace all exports with empty mock functions
import fetch from 'cross-fetch'
const mockedFetch = jest.mocked(fetch) // Adds mock methods to the mock functions

test('Mock fetch', async () => {

  // We need to mock  the response manually
  const fakeResponse = {
    status: 200,
    ok: true
  }

  mockedFetch.mockImplementation((...args : any) : any =>{
    return fakeResponse
  })

  const response = await fetch("https://httpbin.org/status/404")
  expect(response.status).toBe(200)
  expect(response.ok).toBeTruthy()

}) 