import { jest, test, expect } from '@jest/globals'
jest.mock('cross-fetch') // Replace all exports with empty mock functions
import fetch from 'cross-fetch'

test('Mock fetch method - javascript', async () => {

  // We need to mock the Response object manually
  const fakeResponse = {
    status: 200,
    ok: true
  }

  fetch.mockImplementation(()=>{
    return fakeResponse
  })

  const response = await fetch("https://httpbin.org/status/404")
  expect(response.status).toBe(200)
  expect(response.ok).toBeTruthy()

}) 