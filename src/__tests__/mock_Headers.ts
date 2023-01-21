import { jest, test, expect } from '@jest/globals'
jest.mock('cross-fetch')
import { Headers } from 'cross-fetch'
const mockedHeaders = jest.mocked(Headers) // Adds mock methods to the mock functions

test('Mock Headers class', async () => {

  // A class is a function returning an object
  mockedHeaders.mockImplementation((...arg: any) :any => {
    return {
      append: jest.fn(),
      get: jest.fn().mockReturnValue("MyValue")
    }
  })

  const hdr = new Headers()
  hdr.append("a","b") // Noop
  const value = hdr.get("myheader")
  expect(value).toBe("MyValue")

}) 