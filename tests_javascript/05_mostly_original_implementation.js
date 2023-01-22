// All exported objects from node-fetch have their original implementation, except the default export 'fetch' 

import { jest, test, expect } from '@jest/globals'
import fetch, { Response } from 'node-fetch'

jest.mock('node-fetch',() => {
  const originalModule = jest.requireActual('node-fetch')

  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn() // Prepare to be mocked.
  }

})

test('Only mock fetch', async () => {

  // Response is original implementation
  const mockResult = new Response(
    "http://nonsense",
    { status: 404 })

  // Fetch is mocked per test
  fetch.mockImplementation((...args) => {
    return mockResult
  })

  const resp = await fetch("https://morenonsense")
  expect(resp.ok).not.toBeTruthy()
  expect(resp.status).toBe(404)

}) 
