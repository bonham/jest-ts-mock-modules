import { jest, test, expect } from '@jest/globals'
jest.mock('cross-fetch')
import fetch from 'cross-fetch'
const mockedFetch = jest.mocked(fetch) // Adds mock methods to the mock functions

test('Mock fetch', async () => {

  // We manually need to mock the response
  const fakeResponse = {
    status: 200,
    ok: true
  }

  mockedFetch.mockImplementation((...args : any) : any =>{
    return fakeResponse
  })

  const response = await fetch("https://google.com")
  expect(response.status).toBe(200)
  expect(response.ok).toBeTruthy()

}) 