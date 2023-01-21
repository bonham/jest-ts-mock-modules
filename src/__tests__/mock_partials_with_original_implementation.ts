import { jest, test, expect } from '@jest/globals'

jest.mock('cross-fetch')
import fetch, { Response } from 'cross-fetch'

// Adding mock methods to the mock functions
const mockedFetch = jest.mocked(fetch)
const MockedResponse = jest.mocked(Response)

// requireActual needs to know the type
const originalModule = jest.requireActual<typeof import('cross-fetch')>('cross-fetch')

test('Mock the fetch function, but use original implementation of Response', async () => {

  // Use original implementation for the Response
  MockedResponse.mockImplementation((...args: any) : any => {
    return new originalModule.Response(...args)
  })

  const mockResult = new Response(
    "http://nonsense",
    { status: 404 })

  mockedFetch.mockImplementation((...args: any) : any => {
    return mockResult
  })

  const resp = await fetch("https://morenonsense")
  expect(resp.ok).not.toBeTruthy()
  expect(resp.status).toBe(404)

}) 

// Note: If you want to use the original implementation of the default export, fetch in this case
// then refer to originalModule.default()