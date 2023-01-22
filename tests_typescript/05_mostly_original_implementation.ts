// All exported objects from node-fetch have their original implementation, except the default export 'fetch' 

import { jest, test, expect } from '@jest/globals'
import fetch, { Response } from 'node-fetch'

jest.mock('node-fetch',() => {
  const originalModule = jest.requireActual<typeof import('node-fetch')>('node-fetch')

  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn() // Prepare to be mocked.
  }

})
const mockedFetch = jest.mocked(fetch)

test('Only mock fetch', async () => {

  // Response is original implementation
  const mockResult = new Response(
    "http://nonsense",
    { status: 404 })

  // Fetch is mocked per test
  mockedFetch.mockImplementation((...args: any) :any => {
    return mockResult
  })

  const resp = await fetch("https://morenonsense")
  expect(resp.ok).not.toBeTruthy()
  expect(resp.status).toBe(404)

}) 
